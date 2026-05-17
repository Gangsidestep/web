#!/bin/sh
# Helper to install a user cron that runs the update script periodically.
# This edits the current user's crontab (no sudo). Review before accepting.

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WEBROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CRON_CMD="cd $WEBROOT && ./scripts/update_htaccess_blocklist.sh >/dev/null 2>&1"
CRON_EXPR="*/5 * * * * $CRON_CMD"

echo "This script will add the following cron line to your user crontab (if not present):"
printf '%s\n' "$CRON_EXPR"

read -p "Proceed to add this line to your crontab? [y/N] " ans
case "$ans" in
  [yY]|[yY][eE][sS])
    # ensure the script is executable
    chmod +x "$SCRIPT_DIR/update_htaccess_blocklist.sh" 2>/dev/null || true
    # add the cron if not present
    (crontab -l 2>/dev/null | grep -F "$CRON_CMD" >/dev/null) && {
      echo "Cron entry already present. No change." ; exit 0; }
    (crontab -l 2>/dev/null; echo "$CRON_EXPR") | crontab -
    echo "Cron installed." ;;
  *)
    echo "Aborted. No changes made." ; exit 1 ;;
esac

exit 0
