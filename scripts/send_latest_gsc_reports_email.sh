#!/usr/bin/env bash
set -euo pipefail

# Sends the newest GSC monitor summaries via msmtp (sendmail mode).
# Usage:
#   scripts/send_latest_gsc_reports_email.sh --to you@example.com [--from bot@example.com]

TO_EMAIL=""
FROM_EMAIL=""
SUBJECT_PREFIX="[GSC Monitor]"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --to)
      TO_EMAIL="${2:-}"
      shift 2
      ;;
    --from)
      FROM_EMAIL="${2:-}"
      shift 2
      ;;
    --subject-prefix)
      SUBJECT_PREFIX="${2:-[GSC Monitor]}"
      shift 2
      ;;
    *)
      echo "Unknown argument: $1" >&2
      exit 2
      ;;
  esac
done

if [[ -z "$TO_EMAIL" ]]; then
  echo "Missing required argument: --to" >&2
  exit 2
fi

if ! command -v msmtp >/dev/null 2>&1; then
  echo "msmtp is not installed. Install msmtp or adapt script to your MTA." >&2
  exit 1
fi

if [[ -z "$FROM_EMAIL" ]]; then
  FROM_EMAIL="$TO_EMAIL"
fi

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
INSPECT_DIR="$ROOT_DIR/analytics/google/url_inspection_monitor"
PERF_DIR="$ROOT_DIR/analytics/google/performance_monitor"

LATEST_INSPECT="$(ls -1t "$INSPECT_DIR"/summary_*.md 2>/dev/null | head -n 1 || true)"
LATEST_PERF="$(ls -1t "$PERF_DIR"/perf_summary_*.md 2>/dev/null | head -n 1 || true)"

if [[ -z "$LATEST_INSPECT" && -z "$LATEST_PERF" ]]; then
  echo "No summary files found to email." >&2
  exit 1
fi

TMP_MAIL="$(mktemp)"
trap 'rm -f "$TMP_MAIL"' EXIT

RUN_UTC="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
HOST_NAME="$(hostname)"
SUBJECT="$SUBJECT_PREFIX $RUN_UTC"

{
  printf 'To: %s\n' "$TO_EMAIL"
  printf 'From: %s\n' "$FROM_EMAIL"
  printf 'Subject: %s\n' "$SUBJECT"
  printf 'Content-Type: text/plain; charset=UTF-8\n'
  printf '\n'
  printf 'Automated GSC report summary\n'
  printf 'Host: %s\n' "$HOST_NAME"
  printf 'Run UTC: %s\n\n' "$RUN_UTC"

  if [[ -n "$LATEST_INSPECT" ]]; then
    printf '=== URL Inspection Summary ===\n'
    printf 'File: %s\n\n' "$LATEST_INSPECT"
    sed -n '1,120p' "$LATEST_INSPECT"
    printf '\n\n'
  fi

  if [[ -n "$LATEST_PERF" ]]; then
    printf '=== Performance Summary ===\n'
    printf 'File: %s\n\n' "$LATEST_PERF"
    sed -n '1,120p' "$LATEST_PERF"
    printf '\n'
  fi
} > "$TMP_MAIL"

msmtp -t < "$TMP_MAIL"
echo "Email sent to $TO_EMAIL"
