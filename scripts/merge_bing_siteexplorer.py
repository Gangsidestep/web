#!/usr/bin/env python3
"""Merge fragmented Bing Site Explorer CSV exports into one report.

Usage:
  .venv/bin/python scripts/merge_bing_siteexplorer.py \
      --input-dir analytics/bing/26-07-2026

Outputs:
  - merged_siteexplorer_urls.csv
  - merged_siteexplorer_summary.md
in the same input directory.
"""

from __future__ import annotations

import argparse
import csv
import glob
from collections import Counter, defaultdict
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional


DATE_FORMATS = ["%Y-%m-%d", "%m/%d/%Y"]


@dataclass
class UrlRecord:
    url: str
    impressions: int
    clicks: int
    last_crawled: str
    discovered_on: str
    http_code: str
    document_size: str
    backlinks: int
    source_file: str


def parse_date(value: str) -> Optional[datetime]:
    v = (value or "").strip()
    if not v:
        return None
    for fmt in DATE_FORMATS:
        try:
            return datetime.strptime(v, fmt)
        except ValueError:
            continue
    return None


def to_int(value: str) -> int:
    try:
        return int(float((value or "0").strip()))
    except (ValueError, TypeError):
        return 0


def read_records(path: Path) -> List[UrlRecord]:
    rows: List[UrlRecord] = []
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        for r in reader:
            rows.append(
                UrlRecord(
                    url=(r.get("URL") or "").strip(),
                    impressions=to_int(r.get("Impressions", "0")),
                    clicks=to_int(r.get("Clicks", "0")),
                    last_crawled=(r.get("Last crawled") or "").strip(),
                    discovered_on=(r.get("Discovered on") or "").strip(),
                    http_code=(r.get("HTTP code") or "").strip(),
                    document_size=(r.get("Document size") or "").strip(),
                    backlinks=to_int(r.get("Backlinks", "0")),
                    source_file=path.name,
                )
            )
    return rows


def pick_better(a: UrlRecord, b: UrlRecord) -> UrlRecord:
    """Pick the row with the freshest crawl date; if tied, keep higher impressions."""
    ad = parse_date(a.last_crawled)
    bd = parse_date(b.last_crawled)
    if ad and bd:
        if bd > ad:
            return b
        if ad > bd:
            return a
    elif bd and not ad:
        return b
    elif ad and not bd:
        return a

    if b.impressions > a.impressions:
        return b
    if b.impressions == a.impressions and b.clicks > a.clicks:
        return b
    return a


def build_summary(records: List[UrlRecord], source_files: List[Path], raw_rows: int, out_md: Path) -> None:
    code_counter = Counter((r.http_code or "(blank)") for r in records)

    live_200 = [r for r in records if r.http_code == "200"]
    redirects = [r for r in records if r.http_code.startswith("3")]
    errors_4xx5xx = [r for r in records if r.http_code.startswith("4") or r.http_code.startswith("5")]
    unknown_code = [r for r in records if r.http_code in {"", "0"}]

    top_impressions = sorted(records, key=lambda x: (x.impressions, x.clicks), reverse=True)[:15]

    host_counter = Counter()
    for r in records:
        # quick host extraction without urlparse dependency
        u = r.url
        host = "(invalid)"
        if "://" in u:
            host = u.split("://", 1)[1].split("/", 1)[0]
        host_counter[host] += 1

    lines = []
    lines.append("# Merged Bing Site Explorer Summary")
    lines.append("")
    lines.append(f"- Source files merged: {len(source_files)}")
    lines.append(f"- Raw rows read: {raw_rows}")
    lines.append(f"- Unique URLs after dedupe: {len(records)}")
    lines.append("")
    lines.append("## Source Files")
    for p in source_files:
        lines.append(f"- {p.name}")
    lines.append("")
    lines.append("## HTTP Code Breakdown")
    for code, count in sorted(code_counter.items(), key=lambda x: (-x[1], x[0])):
        lines.append(f"- {code}: {count}")
    lines.append("")
    lines.append("## Buckets")
    lines.append(f"- Live 200 URLs: {len(live_200)}")
    lines.append(f"- Redirect URLs (3xx): {len(redirects)}")
    lines.append(f"- Error URLs (4xx/5xx): {len(errors_4xx5xx)}")
    lines.append(f"- Unknown/blank code (0 or empty): {len(unknown_code)}")
    lines.append("")
    lines.append("## Host Breakdown")
    for host, count in host_counter.most_common():
        lines.append(f"- {host}: {count}")
    lines.append("")
    lines.append("## Top URLs By Impressions")
    for r in top_impressions:
        lines.append(
            f"- {r.url} | impressions={r.impressions} | clicks={r.clicks} | code={r.http_code or '(blank)'} | crawled={r.last_crawled or '(none)'}"
        )

    out_md.write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_csv(records: List[UrlRecord], out_csv: Path) -> None:
    headers = [
        "URL",
        "Impressions",
        "Clicks",
        "Last crawled",
        "Discovered on",
        "HTTP code",
        "Document size",
        "Backlinks",
        "Source file",
    ]
    with out_csv.open("w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        for r in sorted(records, key=lambda x: (x.impressions, x.clicks), reverse=True):
            writer.writerow(
                [
                    r.url,
                    r.impressions,
                    r.clicks,
                    r.last_crawled,
                    r.discovered_on,
                    r.http_code,
                    r.document_size,
                    r.backlinks,
                    r.source_file,
                ]
            )


def main() -> int:
    parser = argparse.ArgumentParser(description="Merge Bing Site Explorer CSV exports.")
    parser.add_argument("--input-dir", required=True, help="Folder containing SiteExplorerUrls CSV files")
    parser.add_argument(
        "--pattern",
        default="*SiteExplorerUrls*.csv",
        help="Glob pattern for CSV files (default: *SiteExplorerUrls*.csv)",
    )
    args = parser.parse_args()

    input_dir = Path(args.input_dir)
    if not input_dir.is_dir():
        raise SystemExit(f"Input directory not found: {input_dir}")

    files = [Path(p) for p in glob.glob(str(input_dir / args.pattern))]
    files = sorted(files)
    if not files:
        raise SystemExit(f"No matching files found in {input_dir} with pattern {args.pattern}")

    by_url: Dict[str, UrlRecord] = {}
    raw_rows = 0
    for f in files:
        for rec in read_records(f):
            raw_rows += 1
            if not rec.url:
                continue
            if rec.url in by_url:
                by_url[rec.url] = pick_better(by_url[rec.url], rec)
            else:
                by_url[rec.url] = rec

    merged_records = list(by_url.values())

    out_csv = input_dir / "merged_siteexplorer_urls.csv"
    out_md = input_dir / "merged_siteexplorer_summary.md"

    write_csv(merged_records, out_csv)
    build_summary(merged_records, files, raw_rows, out_md)

    print(f"Merged files: {len(files)}")
    print(f"Raw rows read: {raw_rows}")
    print(f"Unique URLs: {len(merged_records)}")
    print(f"Wrote: {out_csv}")
    print(f"Wrote: {out_md}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
