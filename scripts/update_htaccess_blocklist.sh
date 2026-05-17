#!/bin/sh
# Regenerate the managed security block in .htaccess from blocked_ips.txt
set -e
BASEDIR="$(cd "$(dirname "$0")/.." && pwd)"
HTACCESS="$BASEDIR/.htaccess"
IPFILE="$BASEDIR/blocked_ips.txt"
TMPFILE="$(mktemp)"
START="# MANAGED_BLOCK_START"
END="# MANAGED_BLOCK_END"

# Build managed content into TMPFILE
cat > "$TMPFILE" <<'EOF'
# MANAGED_BLOCK_START
# Managed block inserted by scripts/update_htaccess_blocklist.sh
# Do not edit between MANAGED_BLOCK_START and MANAGED_BLOCK_END
# To update, edit blocked_ips.txt and run scripts/update_htaccess_blocklist.sh
EOF

if [ -f "$IPFILE" ]; then
  while IFS= read -r ip; do
    # skip empty lines and comments
    case "$ip" in
      ''|\#*) continue ;;
    esac
    ip_trimmed="$(echo "$ip" | tr -d '[:space:]')"
    if [ -n "$ip_trimmed" ]; then
      printf '\n# Block IP %s\n' "$ip_trimmed" >> "$TMPFILE"
      printf 'RewriteCond %%{REMOTE_ADDR} ^%s$\n' "$ip_trimmed" >> "$TMPFILE"
      printf 'RewriteRule .* - [F,L]\n' >> "$TMPFILE"
    fi
  done < "$IPFILE"
fi

cat >> "$TMPFILE" <<'EOF'

# Block requests attempting PHP -d overrides or referencing known attacker domains
RewriteCond %{QUERY_STRING} (?:-dauto_prepend_file|-ddisable_functions|-dallow_url_include|-dallow_url_fopen|happymatures\.com) [NC]
RewriteRule .* - [F,L]

# Block suspicious automated User-Agent signatures
RewriteCond %{HTTP_USER_AGENT} PrivateMonitor [NC]
RewriteRule .* - [F,L]

# MANAGED_BLOCK_END
EOF

# Insert TMPFILE between markers in HTACCESS, or append if markers not found
if grep -qF "$START" "$HTACCESS" && grep -qF "$END" "$HTACCESS"; then
  start_line=$(grep -nF "$START" "$HTACCESS" | head -n1 | cut -d: -f1)
  end_line=$(grep -nF "$END" "$HTACCESS" | head -n1 | cut -d: -f1)
  # write head
  head -n $((start_line-1)) "$HTACCESS" > "$HTACCESS.new"
  # append new managed block
  cat "$TMPFILE" >> "$HTACCESS.new"
  # append the tail after end_line
  tail -n +$((end_line+1)) "$HTACCESS" >> "$HTACCESS.new"
  mv "$HTACCESS.new" "$HTACCESS"
  echo ".htaccess updated from $IPFILE"
else
  echo "Markers not found in $HTACCESS; appending managed block" >&2
  cat "$TMPFILE" >> "$HTACCESS"
fi

rm -f "$TMPFILE"
exit 0
