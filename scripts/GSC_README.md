GSC Monitor README

Purpose
- How to run the Google Search Console (GSC) performance and URL-inspection monitors in this repo.

Prerequisites
- Service account JSON stored at `credentials/gsc-service-account.json` (or set `GOOGLE_APPLICATION_CREDENTIALS`).
- Python 3.10+ recommended; scripts were run under Python 3.9 but Google libraries warn for older versions.
- No sudo required; use a user virtualenv at the repo root (`.venv`).

Quick setup (no-sudo)
```bash
# create a user venv (if system venv is broken, install virtualenv in user site packages first)
python3 -m pip install --user virtualenv
python3 -m pip --user --upgrade pip
~/.local/bin/virtualenv .venv
# if ensurepip fails during venv creation, create and then fix python symlink:
# ln -sf /usr/bin/python3 .venv/bin/python3
# then run:
.venv/bin/python -m pip install --upgrade pip setuptools wheel
```

Install deps
```bash
.venv/bin/pip install -r scripts/requirements-gsc-monitor.txt
```

Environment
- Set the credentials env var (recommended):
```bash
export GOOGLE_APPLICATION_CREDENTIALS=$(pwd)/credentials/gsc-service-account.json
```
- Or pass `--credentials /path/to/credentials.json` to each script.

Run monitors (examples)
```bash
# Performance report (writes CSV/JSON/MD under analytics/google/performance_monitor)
.venv/bin/python scripts/gsc_performance_monitor.py --property sc-domain:mydropintheoceans.org --credentials credentials/gsc-service-account.json

# URL inspection report (reads urls from scripts/gsc_monitor_urls.txt)
.venv/bin/python scripts/gsc_url_inspection_monitor.py --property sc-domain:mydropintheoceans.org --urls-file scripts/gsc_monitor_urls.txt --credentials credentials/gsc-service-account.json
```

Cron/CI suggestion
- Use a wrapper script that activates `.venv` and runs the above commands, then commit outputs or upload to a data store.
- Example cron line (runs daily at 02:00 UTC):
```cron
0 2 * * * cd /home/clients/.../web && ./.venv/bin/python scripts/gsc_performance_monitor.py --property sc-domain:mydropintheoceans.org --credentials credentials/gsc-service-account.json && ./.venv/bin/python scripts/gsc_url_inspection_monitor.py --property sc-domain:mydropintheoceans.org --urls-file scripts/gsc_monitor_urls.txt --credentials credentials/gsc-service-account.json
```

Troubleshooting
- If venv creation fails with `ensurepip` missing: install system package `python3-venv` (requires sudo) or use `pip install --user virtualenv` then `~/.local/bin/virtualenv .venv`.
- If `.venv/bin/python` is a broken symlink, fix with: `ln -sf /usr/bin/python3 .venv/bin/python3`.
- If Google libs warn about Python version, upgrade to 3.10+ when convenient; monitors still run on 3.9.

Files of interest
- `scripts/gsc_performance_monitor.py` — performance queries and CSV/json output.
- `scripts/gsc_url_inspection_monitor.py` — URL Inspection API snapshots and diffs.
- `scripts/gsc_monitor_urls.txt` — list of URLs inspected.
- `analytics/google/` — output folder for reports and snapshots.

Security
- Keep the service account JSON out of public repos. Use CI secrets/store if running in GitHub Actions.

Contact
- If you want, I can add a small GitHub Actions workflow to run these monitors weekly and commit outputs to a protected branch.
