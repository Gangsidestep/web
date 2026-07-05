# GSC URL Inspection Monitor

This monitor queries the Google Search Console URL Inspection API for a controlled list of URLs, stores a timestamped snapshot, and writes a diff against the previous run.

## 1) Google Cloud setup

1. Create or select a Google Cloud project.
2. Enable API: `Search Console API`.
3. Create a service account and download the JSON key.
4. In Search Console, add the service-account email as an owner/user for your property.
5. Use property format `sc-domain:mydropintheoceans.org` for domain property checks.

## 2) Install dependencies

From repo root:

```bash
.venv/bin/pip install -r scripts/requirements-gsc-monitor.txt
```

## 3) Configure credentials

Option A: environment variable

```bash
export GOOGLE_APPLICATION_CREDENTIALS="$PWD/credentials/gsc-service-account.json"
```

Option B: pass `--credentials` on each run.

## 4) Run monitor

```bash
.venv/bin/python scripts/gsc_url_inspection_monitor.py \
  --property sc-domain:mydropintheoceans.org \
  --urls-file scripts/gsc_monitor_urls.txt
```

Weekly full-property run (sitemap URL set):

```bash
.venv/bin/python scripts/gsc_url_inspection_monitor.py \
  --property sc-domain:mydropintheoceans.org \
  --urls-file scripts/gsc_monitor_urls_sitemap.txt
```

Optional explicit credentials path:

```bash
.venv/bin/python scripts/gsc_url_inspection_monitor.py \
  --property sc-domain:mydropintheoceans.org \
  --urls-file scripts/gsc_monitor_urls.txt \
  --credentials "$PWD/credentials/gsc-service-account.json"
```

## 5) Output files

Default output directory: `analytics/google/url_inspection_monitor`

Per run, the script writes:

- `snapshot_YYYYMMDDTHHMMSSZ.json` (full API payload subset)
- `snapshot_YYYYMMDDTHHMMSSZ.csv` (flat table)
- `diff_YYYYMMDDTHHMMSSZ.csv` (field-level changes vs previous snapshot)
- `summary_YYYYMMDDTHHMMSSZ.md` (counts by verdict/coverage + delta count)

Performance monitor output folder: `analytics/google/performance_monitor`

Per run, the performance script writes:

- `perf_pages_YYYYMMDDTHHMMSSZ.csv` (page-level clicks, impressions, ctr, position)
- `perf_pages_YYYYMMDDTHHMMSSZ.json` (same data in JSON)
- `perf_summary_YYYYMMDDTHHMMSSZ.json` (totals + metadata)
- `perf_summary_YYYYMMDDTHHMMSSZ.md` (human-readable totals + deltas + top pages)

Run performance snapshot (default last stable 28-day window):

```bash
.venv/bin/python scripts/gsc_performance_monitor.py \
  --property sc-domain:mydropintheoceans.org
```

Run performance snapshot for a custom date range:

```bash
.venv/bin/python scripts/gsc_performance_monitor.py \
  --property sc-domain:mydropintheoceans.org \
  --start-date 2026-05-01 \
  --end-date 2026-05-28
```

## 6) Daily schedule (cron)

Example daily run at 06:10 UTC:

```bash
10 6 * * * cd /home/clients/a87f9485d236547310279906c2e64cab/web && \
GOOGLE_APPLICATION_CREDENTIALS=/home/clients/a87f9485d236547310279906c2e64cab/web/credentials/gsc-service-account.json \
.venv/bin/python scripts/gsc_url_inspection_monitor.py --property sc-domain:mydropintheoceans.org --urls-file scripts/gsc_monitor_urls.txt
```

Example weekly full-property run at 06:20 UTC every Monday:

```bash
20 6 * * 1 cd /home/clients/a87f9485d236547310279906c2e64cab/web && \
GOOGLE_APPLICATION_CREDENTIALS=/home/clients/a87f9485d236547310279906c2e64cab/web/credentials/gsc-service-account.json \
.venv/bin/python scripts/gsc_url_inspection_monitor.py --property sc-domain:mydropintheoceans.org --urls-file scripts/gsc_monitor_urls_sitemap.txt
```

Example weekly performance run at 06:30 UTC every Monday:

```bash
30 6 * * 1 cd /home/clients/a87f9485d236547310279906c2e64cab/web && \
GOOGLE_APPLICATION_CREDENTIALS=/home/clients/a87f9485d236547310279906c2e64cab/web/credentials/gsc-service-account.json \
.venv/bin/python scripts/gsc_performance_monitor.py --property sc-domain:mydropintheoceans.org
```

## Notes

- This improves monitoring and diagnostics; it does not force faster Google validation cycles.
- If API calls fail with permission errors, verify service-account access in Search Console and property format.

## Email notifications

This repo includes a helper script to email the latest monitor summaries:

```bash
scripts/send_latest_gsc_reports_email.sh --to your@email.com
```

## Hosting task scheduler (URL-based)

If your hosting panel runs scheduled tasks by calling a URL (instead of shell cron), use these endpoints:

- `/scripts/run_gsc_daily.php?key=YOUR_KEY`
- `/scripts/run_gsc_sitemap.php?key=YOUR_KEY`
- `/scripts/run_gsc_performance.php?key=YOUR_KEY`

Security key source:

- `credentials/cron_key.txt` (single-line token)

Example full URL:

- `https://mydropintheoceans.org/scripts/run_gsc_daily.php?key=YOUR_KEY`

Suggested schedule (Europe/Zurich):

- Daily focused run: 12:10
- Sitemap sweep: Monday and Wednesday at 12:20
- Performance run: Monday at 12:30

Optional sender and subject prefix:

```bash
scripts/send_latest_gsc_reports_email.sh \
  --to your@email.com \
  --from bot@email.com \
  --subject-prefix "[MyDIO SEO]"
```

The script sends the newest files from:

- `analytics/google/url_inspection_monitor/summary_*.md`
- `analytics/google/performance_monitor/perf_summary_*.md`

### Cron examples with email

Daily focused inspection + email:

```bash
10 6 * * * cd /home/clients/a87f9485d236547310279906c2e64cab/web && \
GOOGLE_APPLICATION_CREDENTIALS=/home/clients/a87f9485d236547310279906c2e64cab/web/credentials/gsc-service-account.json \
.venv/bin/python scripts/gsc_url_inspection_monitor.py --property sc-domain:mydropintheoceans.org --urls-file scripts/gsc_monitor_urls.txt && \
scripts/send_latest_gsc_reports_email.sh --to david@mydio.ch --subject-prefix "[GSC Daily]"
```

Weekly sitemap sweep + performance + email:

```bash
30 6 * * 1 cd /home/clients/a87f9485d236547310279906c2e64cab/web && \
GOOGLE_APPLICATION_CREDENTIALS=/home/clients/a87f9485d236547310279906c2e64cab/web/credentials/gsc-service-account.json \
.venv/bin/python scripts/gsc_url_inspection_monitor.py --property sc-domain:mydropintheoceans.org --urls-file scripts/gsc_monitor_urls_sitemap.txt && \
.venv/bin/python scripts/gsc_performance_monitor.py --property sc-domain:mydropintheoceans.org && \
scripts/send_latest_gsc_reports_email.sh --to david@mydio.ch --subject-prefix "[GSC Weekly]"
```
