#!/usr/bin/env python3
import argparse
import csv
import glob
import json
import os
from datetime import datetime, timezone

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]


def utc_now_stamp() -> str:
    return datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")


def load_urls(urls_file: str) -> list:
    urls = []
    with open(urls_file, "r", encoding="utf-8") as f:
        for line in f:
            value = line.strip()
            if not value or value.startswith("#"):
                continue
            urls.append(value)
    return urls


def get_value(data: dict, path: list, default=""):
    node = data
    for key in path:
        if not isinstance(node, dict) or key not in node:
            return default
        node = node[key]
    return node


def inspect_url(service, site_url: str, url: str, language_code: str) -> dict:
    body = {
        "inspectionUrl": url,
        "siteUrl": site_url,
        "languageCode": language_code,
    }
    response = service.urlInspection().index().inspect(body=body).execute()

    result = get_value(response, ["inspectionResult", "indexStatusResult"], {})
    return {
        "url": url,
        "verdict": get_value(result, ["verdict"]),
        "coverageState": get_value(result, ["coverageState"]),
        "robotsTxtState": get_value(result, ["robotsTxtState"]),
        "indexingState": get_value(result, ["indexingState"]),
        "pageFetchState": get_value(result, ["pageFetchState"]),
        "googleCanonical": get_value(result, ["googleCanonical"]),
        "userCanonical": get_value(result, ["userCanonical"]),
        "lastCrawlTime": get_value(result, ["lastCrawlTime"]),
        "referringUrls": get_value(result, ["referringUrls"], []),
        "raw": response,
    }


def latest_snapshot_before(output_dir: str, current_json_path: str) -> str:
    paths = sorted(glob.glob(os.path.join(output_dir, "snapshot_*.json")))
    paths = [p for p in paths if os.path.abspath(p) != os.path.abspath(current_json_path)]
    return paths[-1] if paths else ""


def to_row(item: dict) -> dict:
    return {
        "url": item.get("url", ""),
        "verdict": item.get("verdict", ""),
        "coverageState": item.get("coverageState", ""),
        "robotsTxtState": item.get("robotsTxtState", ""),
        "indexingState": item.get("indexingState", ""),
        "pageFetchState": item.get("pageFetchState", ""),
        "googleCanonical": item.get("googleCanonical", ""),
        "userCanonical": item.get("userCanonical", ""),
        "lastCrawlTime": item.get("lastCrawlTime", ""),
        "referringUrls": " | ".join(item.get("referringUrls", [])),
        "error": item.get("error", ""),
    }


def write_csv(path: str, items: list):
    fieldnames = [
        "url",
        "verdict",
        "coverageState",
        "robotsTxtState",
        "indexingState",
        "pageFetchState",
        "googleCanonical",
        "userCanonical",
        "lastCrawlTime",
        "referringUrls",
        "error",
    ]
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for item in items:
            writer.writerow(to_row(item))


def build_diff(previous_items: list, current_items: list) -> list:
    prev_map = {x.get("url"): x for x in previous_items}
    diffs = []
    tracked_fields = [
        "verdict",
        "coverageState",
        "robotsTxtState",
        "indexingState",
        "pageFetchState",
        "googleCanonical",
        "userCanonical",
        "lastCrawlTime",
        "error",
    ]

    for item in current_items:
        url = item.get("url")
        prev = prev_map.get(url)
        if prev is None:
            diffs.append(
                {
                    "url": url,
                    "changeType": "new",
                    "field": "*",
                    "previous": "",
                    "current": json.dumps(to_row(item), ensure_ascii=True),
                }
            )
            continue

        for field in tracked_fields:
            prev_value = str(prev.get(field, ""))
            curr_value = str(item.get(field, ""))
            if prev_value != curr_value:
                diffs.append(
                    {
                        "url": url,
                        "changeType": "updated",
                        "field": field,
                        "previous": prev_value,
                        "current": curr_value,
                    }
                )

    return diffs


def write_diff_csv(path: str, diffs: list):
    fieldnames = ["url", "changeType", "field", "previous", "current"]
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for row in diffs:
            writer.writerow(row)


def summary_counts(items: list) -> dict:
    out = {
        "total": len(items),
        "errors": 0,
        "byVerdict": {},
        "byCoverage": {},
    }
    for item in items:
        if item.get("error"):
            out["errors"] += 1
            continue

        verdict = item.get("verdict", "") or "<empty>"
        coverage = item.get("coverageState", "") or "<empty>"
        out["byVerdict"][verdict] = out["byVerdict"].get(verdict, 0) + 1
        out["byCoverage"][coverage] = out["byCoverage"].get(coverage, 0) + 1
    return out


def write_summary_md(path: str, run_meta: dict, counts: dict, diffs: list, previous_path: str):
    lines = []
    lines.append("# GSC URL Inspection Monitor")
    lines.append("")
    lines.append(f"- Run UTC: {run_meta['runUtc']}")
    lines.append(f"- Property: {run_meta['property']}")
    lines.append(f"- URL file: {run_meta['urlsFile']}")
    lines.append(f"- Total URLs: {counts['total']}")
    lines.append(f"- Errors: {counts['errors']}")
    lines.append(f"- Previous snapshot: {previous_path if previous_path else 'none'}")
    lines.append("")
    lines.append("## Verdict")
    for key, value in sorted(counts["byVerdict"].items(), key=lambda x: (-x[1], x[0])):
        lines.append(f"- {key}: {value}")
    lines.append("")
    lines.append("## Coverage")
    for key, value in sorted(counts["byCoverage"].items(), key=lambda x: (-x[1], x[0])):
        lines.append(f"- {key}: {value}")
    lines.append("")
    lines.append("## Delta")
    if diffs:
        lines.append(f"- Changed rows: {len(diffs)}")
    else:
        lines.append("- No changes versus previous snapshot")

    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")


def main():
    parser = argparse.ArgumentParser(description="Monitor GSC URL Inspection API states and diffs.")
    parser.add_argument("--property", required=True, help="Search Console property, e.g. sc-domain:example.com")
    parser.add_argument("--urls-file", required=True, help="Path to newline-delimited URL file")
    parser.add_argument(
        "--output-dir",
        default="analytics/google/url_inspection_monitor",
        help="Output folder for snapshots and reports",
    )
    parser.add_argument("--credentials", default=os.getenv("GOOGLE_APPLICATION_CREDENTIALS", ""))
    parser.add_argument("--language-code", default="en-US")
    args = parser.parse_args()

    if not args.credentials:
        raise SystemExit("Missing credentials. Set --credentials or GOOGLE_APPLICATION_CREDENTIALS.")
    if not os.path.isfile(args.credentials):
        raise SystemExit(f"Credentials file not found: {args.credentials}")
    if not os.path.isfile(args.urls_file):
        raise SystemExit(f"URLs file not found: {args.urls_file}")

    urls = load_urls(args.urls_file)
    if not urls:
        raise SystemExit("No URLs found in URLs file.")

    os.makedirs(args.output_dir, exist_ok=True)

    creds = service_account.Credentials.from_service_account_file(args.credentials, scopes=SCOPES)
    service = build("searchconsole", "v1", credentials=creds, cache_discovery=False)

    items = []
    for url in urls:
        try:
            item = inspect_url(service, args.property, url, args.language_code)
            items.append(item)
        except HttpError as e:
            items.append({"url": url, "error": f"HTTP {e.resp.status}: {str(e)[:500]}"})
        except Exception as e:
            items.append({"url": url, "error": str(e)[:500]})

    stamp = utc_now_stamp()
    snapshot_json = os.path.join(args.output_dir, f"snapshot_{stamp}.json")
    snapshot_csv = os.path.join(args.output_dir, f"snapshot_{stamp}.csv")
    diff_csv = os.path.join(args.output_dir, f"diff_{stamp}.csv")
    summary_md = os.path.join(args.output_dir, f"summary_{stamp}.md")

    with open(snapshot_json, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=True, indent=2)

    write_csv(snapshot_csv, items)

    previous_json = latest_snapshot_before(args.output_dir, snapshot_json)
    previous_items = []
    if previous_json:
        with open(previous_json, "r", encoding="utf-8") as f:
            previous_items = json.load(f)

    diffs = build_diff(previous_items, items) if previous_items else []
    write_diff_csv(diff_csv, diffs)

    counts = summary_counts(items)
    run_meta = {
        "runUtc": datetime.now(timezone.utc).isoformat(),
        "property": args.property,
        "urlsFile": args.urls_file,
    }
    write_summary_md(summary_md, run_meta, counts, diffs, previous_json)

    print(f"Wrote: {snapshot_json}")
    print(f"Wrote: {snapshot_csv}")
    print(f"Wrote: {diff_csv}")
    print(f"Wrote: {summary_md}")


if __name__ == "__main__":
    main()
