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

## 6) Daily schedule (cron)

Example daily run at 06:10 UTC:

```bash
10 6 * * * cd /home/clients/a87f9485d236547310279906c2e64cab/web && \
GOOGLE_APPLICATION_CREDENTIALS=/home/clients/a87f9485d236547310279906c2e64cab/web/credentials/gsc-service-account.json \
.venv/bin/python scripts/gsc_url_inspection_monitor.py --property sc-domain:mydropintheoceans.org --urls-file scripts/gsc_monitor_urls.txt
```

## Notes

- This improves monitoring and diagnostics; it does not force faster Google validation cycles.
- If API calls fail with permission errors, verify service-account access in Search Console and property format.
