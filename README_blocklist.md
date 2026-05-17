App-level IP blocklist

Purpose
- Maintain a simple app-level IP blocklist in `blocked_ips.txt` and automatically update the managed block in `/.htaccess`.

Files
- `blocked_ips.txt` — one IP per line; `#` starts a comment.
- `scripts/update_htaccess_blocklist.sh` — regenerates the managed block in `/.htaccess`.
- `scripts/install_cron.sh` — helper to add a user cronjob that runs the updater periodically.

Usage
1. Edit `blocked_ips.txt` and add or remove IPs (one per line).
2. Run the updater manually:

```bash
chmod +x scripts/update_htaccess_blocklist.sh
./scripts/update_htaccess_blocklist.sh
```

Cron (recommended)
- To keep the blocklist applied automatically, add a user cron entry. Example to run the updater every 5 minutes:

```cron
*/5 * * * * cd /home/clients/a87f9485d236547310279906c2e64cab/web && ./scripts/update_htaccess_blocklist.sh >/dev/null 2>&1
```

To install the cron entry for the current user, run:

```bash
chmod +x scripts/install_cron.sh
./scripts/install_cron.sh
```

Notes & limitations
- This is an app-level block: requests are blocked by Apache after they reach the host. It is not a network/firewall-level block.
- Network-level blocks (host/provider or CDN) are stronger and preferred when available.
- The updater replaces the managed section between markers in `/.htaccess`. Do not edit the managed block manually.

Security
- Keep `blocked_ips.txt` under version control if you want history of changes.
- If you expect frequent updates, consider using a CDN/WAF or ask the host to deploy a fail2ban rule.

Support
- If you want this automated at a host level, contact your provider and share the `support_host_message_fr.txt` file.
