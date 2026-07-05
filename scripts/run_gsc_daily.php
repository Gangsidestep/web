<?php

declare(strict_types=1);

require_once __DIR__ . '/cron_runner_common.php';

cron_require_key();
cron_set_google_credentials();

cron_run_commands([
    '.venv/bin/python scripts/gsc_url_inspection_monitor.py --property sc-domain:mydropintheoceans.org --urls-file scripts/gsc_monitor_urls.txt',
    'scripts/send_latest_gsc_reports_email.sh --to david@mydio.ch --subject-prefix "[GSC Daily]"',
]);
