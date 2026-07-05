#!/usr/bin/env python3
import argparse
import csv
import glob
import json
import os
from datetime import date, datetime, timedelta, timezone

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]


def utc_now_stamp() -> str:
    return datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")


def default_date_range() -> tuple:
    # Search Console performance data is delayed; use a stable 28-day window.
    end_date = date.today() - timedelta(days=3)
    start_date = end_date - timedelta(days=27)
    return start_date.isoformat(), end_date.isoformat()


def parse_args():
    parser = argparse.ArgumentParser(description="Snapshot Search Console performance metrics.")
    parser.add_argument("--property", required=True, help="Search Console property, e.g. sc-domain:example.com")
    parser.add_argument("--start-date", default="")
    parser.add_argument("--end-date", default="")
    parser.add_argument(
        "--output-dir",
        default="analytics/google/performance_monitor",
        help="Output folder for performance snapshots and summaries",
    )
    parser.add_argument("--credentials", default=os.getenv("GOOGLE_APPLICATION_CREDENTIALS", ""))
    return parser.parse_args()


def run_search_analytics(service, site_url: str, start_date: str, end_date: str) -> list:
    rows = []
    start_row = 0
    row_limit = 25000

    while True:
        body = {
            "startDate": start_date,
            "endDate": end_date,
            "dimensions": ["page"],
            "rowLimit": row_limit,
            "startRow": start_row,
            "dataState": "final",
        }
        result = service.searchanalytics().query(siteUrl=site_url, body=body).execute()
        batch = result.get("rows", [])
        if not batch:
            break

        rows.extend(batch)
        if len(batch) < row_limit:
            break

        start_row += row_limit

    return rows


def normalize_rows(rows: list) -> list:
    out = []
    for row in rows:
        keys = row.get("keys", [])
        page = keys[0] if keys else ""
        out.append(
            {
                "page": page,
                "clicks": float(row.get("clicks", 0.0)),
                "impressions": float(row.get("impressions", 0.0)),
                "ctr": float(row.get("ctr", 0.0)),
                "position": float(row.get("position", 0.0)),
            }
        )
    return out


def totals(rows: list) -> dict:
    clicks = sum(x["clicks"] for x in rows)
    impressions = sum(x["impressions"] for x in rows)
    ctr = (clicks / impressions) if impressions > 0 else 0.0
    weighted_pos_num = sum(x["position"] * x["impressions"] for x in rows)
    weighted_pos = (weighted_pos_num / impressions) if impressions > 0 else 0.0
    return {
        "pages": len(rows),
        "clicks": clicks,
        "impressions": impressions,
        "ctr": ctr,
        "position": weighted_pos,
    }


def write_pages_csv(path: str, rows: list):
    fieldnames = ["page", "clicks", "impressions", "ctr", "position"]
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for row in rows:
            writer.writerow(row)


def latest_summary_before(output_dir: str, current_json_path: str) -> str:
    paths = sorted(glob.glob(os.path.join(output_dir, "perf_summary_*.json")))
    paths = [p for p in paths if os.path.abspath(p) != os.path.abspath(current_json_path)]
    return paths[-1] if paths else ""


def write_summary_md(path: str, meta: dict, current_totals: dict, previous_totals: dict, top_rows: list, prev_path: str):
    def delta(key: str):
        if not previous_totals:
            return "n/a"
        return f"{current_totals[key] - previous_totals.get(key, 0.0):.2f}"

    lines = []
    lines.append("# GSC Performance Monitor")
    lines.append("")
    lines.append(f"- Run UTC: {meta['runUtc']}")
    lines.append(f"- Property: {meta['property']}")
    lines.append(f"- Date range: {meta['startDate']} to {meta['endDate']}")
    lines.append(f"- Previous summary: {prev_path if prev_path else 'none'}")
    lines.append("")
    lines.append("## Totals")
    lines.append(f"- Pages with impressions: {int(current_totals['pages'])} (delta: {delta('pages')})")
    lines.append(f"- Clicks: {current_totals['clicks']:.2f} (delta: {delta('clicks')})")
    lines.append(f"- Impressions: {current_totals['impressions']:.2f} (delta: {delta('impressions')})")
    lines.append(f"- CTR: {current_totals['ctr']:.4f} (delta: {delta('ctr')})")
    lines.append(f"- Avg position (impr-weighted): {current_totals['position']:.2f} (delta: {delta('position')})")
    lines.append("")
    lines.append("## Top Pages By Clicks")
    if not top_rows:
        lines.append("- No rows returned for this period")
    else:
        for row in top_rows:
            lines.append(
                f"- {row['page']} | clicks={row['clicks']:.2f}, impressions={row['impressions']:.2f}, ctr={row['ctr']:.4f}, position={row['position']:.2f}"
            )

    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")


def main():
    args = parse_args()
    if not args.credentials:
        raise SystemExit("Missing credentials. Set --credentials or GOOGLE_APPLICATION_CREDENTIALS.")
    if not os.path.isfile(args.credentials):
        raise SystemExit(f"Credentials file not found: {args.credentials}")

    start_date = args.start_date
    end_date = args.end_date
    if not start_date or not end_date:
        start_date, end_date = default_date_range()

    os.makedirs(args.output_dir, exist_ok=True)

    creds = service_account.Credentials.from_service_account_file(args.credentials, scopes=SCOPES)
    service = build("searchconsole", "v1", credentials=creds, cache_discovery=False)

    try:
        raw_rows = run_search_analytics(service, args.property, start_date, end_date)
    except HttpError as e:
        raise SystemExit(f"Search Analytics API error (HTTP {e.resp.status}): {str(e)[:500]}")

    rows = normalize_rows(raw_rows)
    rows_sorted = sorted(rows, key=lambda x: (-x["clicks"], -x["impressions"], x["page"]))
    current_totals = totals(rows)

    stamp = utc_now_stamp()
    pages_csv = os.path.join(args.output_dir, f"perf_pages_{stamp}.csv")
    pages_json = os.path.join(args.output_dir, f"perf_pages_{stamp}.json")
    summary_json = os.path.join(args.output_dir, f"perf_summary_{stamp}.json")
    summary_md = os.path.join(args.output_dir, f"perf_summary_{stamp}.md")

    write_pages_csv(pages_csv, rows_sorted)
    with open(pages_json, "w", encoding="utf-8") as f:
        json.dump(rows_sorted, f, ensure_ascii=True, indent=2)

    meta = {
        "runUtc": datetime.now(timezone.utc).isoformat(),
        "property": args.property,
        "startDate": start_date,
        "endDate": end_date,
    }

    summary_payload = {
        "meta": meta,
        "totals": current_totals,
    }
    with open(summary_json, "w", encoding="utf-8") as f:
        json.dump(summary_payload, f, ensure_ascii=True, indent=2)

    prev_summary_path = latest_summary_before(args.output_dir, summary_json)
    prev_totals = {}
    if prev_summary_path:
        with open(prev_summary_path, "r", encoding="utf-8") as f:
            prev_totals = json.load(f).get("totals", {})

    write_summary_md(summary_md, meta, current_totals, prev_totals, rows_sorted[:10], prev_summary_path)

    print(f"Wrote: {pages_csv}")
    print(f"Wrote: {pages_json}")
    print(f"Wrote: {summary_json}")
    print(f"Wrote: {summary_md}")


if __name__ == "__main__":
    main()
