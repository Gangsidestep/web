#!/usr/bin/env python3
"""Classify merged Bing Site Explorer URLs into actionable SEO buckets.

Usage:
  .venv/bin/python scripts/classify_bing_siteexplorer.py \
    --input analytics/bing/26-07-2026/merged_siteexplorer_urls.csv

Outputs next to input:
  - classified_siteexplorer_urls.csv
  - classified_siteexplorer_summary.md
"""

from __future__ import annotations

import argparse
import csv
from collections import Counter, defaultdict
from pathlib import Path
from urllib.parse import urlparse


def to_int(value: str) -> int:
    try:
        return int(float((value or "0").strip()))
    except (ValueError, TypeError):
        return 0


def classify_row(row: dict) -> tuple[str, str]:
    url = (row.get("URL") or "").strip()
    code = (row.get("HTTP code") or "").strip()
    impressions = to_int(row.get("Impressions", "0"))

    p = urlparse(url)
    host = p.netloc.lower()
    path = p.path or "/"
    q = p.query or ""

    # Host-level containment first.
    if host.startswith("business."):
        return (
            "investigate_immediately",
            "Business subdomain URL appears in root property export; verify ownership/scope and block or canonicalize as intended.",
        )

    # High-risk private/internal patterns.
    private_markers = ["/login/", "/loggedin/", "/admin/", "bus_login", "signup", "_exec.php"]
    if any(m in path.lower() for m in private_markers):
        return (
            "investigate_immediately",
            "Private/internal-looking URL surfaced; enforce noindex/auth and remove crawl paths.",
        )

    # Legacy removed URLs.
    if code in {"404", "410"}:
        if impressions > 0:
            return (
                "retired_legacy_with_history",
                "Retired URL still has historical visibility; keep response status, add direct replacement links where relevant.",
            )
        return (
            "retired_legacy_expected",
            "Retired URL discovered by Bing; expected decay candidate.",
        )

    # Redirect variants should be consolidated.
    if code.startswith("3"):
        return (
            "redirect_or_canonicalize",
            "Variant URL still crawled; keep one-hop redirect and remove internal references.",
        )

    # Unknown code means uncertain server behavior in export.
    if code in {"", "0"}:
        return (
            "investigate_immediately",
            "Unknown HTTP status in export; verify live response and robots/noindex behavior.",
        )

    # Healthy canonicals.
    if code == "200":
        if host == "mydropintheoceans.org" and q == "":
            return (
                "keep_index",
                "Canonical live URL; retain indexing and strengthen internal linking if low visibility.",
            )
        return (
            "redirect_or_canonicalize",
            "Live non-canonical variant; normalize host/protocol/path.",
        )

    return (
        "investigate_immediately",
        "Unclassified status code; verify manually.",
    )


def main() -> int:
    parser = argparse.ArgumentParser(description="Classify merged Bing Site Explorer URLs.")
    parser.add_argument("--input", required=True, help="Path to merged_siteexplorer_urls.csv")
    args = parser.parse_args()

    in_path = Path(args.input)
    if not in_path.is_file():
        raise SystemExit(f"Input file not found: {in_path}")

    with in_path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    enriched = []
    bucket_counts = Counter()
    bucket_impr = defaultdict(int)
    bucket_clicks = defaultdict(int)

    for r in rows:
        bucket, note = classify_row(r)
        impressions = to_int(r.get("Impressions", "0"))
        clicks = to_int(r.get("Clicks", "0"))
        bucket_counts[bucket] += 1
        bucket_impr[bucket] += impressions
        bucket_clicks[bucket] += clicks
        nr = dict(r)
        nr["Bucket"] = bucket
        nr["Action Note"] = note
        enriched.append(nr)

    # Write classified CSV.
    out_csv = in_path.with_name("classified_siteexplorer_urls.csv")
    headers = list(rows[0].keys()) + ["Bucket", "Action Note"] if rows else ["Bucket", "Action Note"]
    with out_csv.open("w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=headers)
        w.writeheader()
        for r in enriched:
            w.writerow(r)

    # Write markdown summary.
    out_md = in_path.with_name("classified_siteexplorer_summary.md")
    lines = []
    lines.append("# Classified Bing Site Explorer Summary")
    lines.append("")
    lines.append(f"- Input rows: {len(rows)}")
    lines.append(f"- Output CSV: {out_csv.name}")
    lines.append("")
    lines.append("## Bucket Totals")
    for b in sorted(bucket_counts.keys()):
        lines.append(
            f"- {b}: urls={bucket_counts[b]}, impressions={bucket_impr[b]}, clicks={bucket_clicks[b]}"
        )

    lines.append("")
    lines.append("## URLs Needing Immediate Review")
    immediate = [r for r in enriched if r.get("Bucket") == "investigate_immediately"]
    if not immediate:
        lines.append("- none")
    else:
        for r in immediate:
            lines.append(
                f"- {r.get('URL','')} | code={r.get('HTTP code','')} | impressions={r.get('Impressions','0')} | clicks={r.get('Clicks','0')}"
            )

    lines.append("")
    lines.append("## Retired URLs Still Showing History")
    hist = [r for r in enriched if r.get("Bucket") == "retired_legacy_with_history"]
    if not hist:
        lines.append("- none")
    else:
        for r in sorted(hist, key=lambda x: to_int(x.get("Impressions", "0")), reverse=True):
            lines.append(
                f"- {r.get('URL','')} | code={r.get('HTTP code','')} | impressions={r.get('Impressions','0')} | clicks={r.get('Clicks','0')}"
            )

    out_md.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"Classified rows: {len(rows)}")
    print(f"Wrote: {out_csv}")
    print(f"Wrote: {out_md}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
