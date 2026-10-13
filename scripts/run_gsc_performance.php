<?php

declare(strict_types=1);

// Replaced by the MyDIO search monitor (platform/shared/Search), which imports Search Console,
// URL Inspection and PageSpeed data for mydropintheoceans.org daily and emails a Monday summary:
// scheduled task https://chat.mydropintheoceans.org/search/cron.php?key=…,
// dashboard https://chat.mydropintheoceans.org/search/. This scheduled task can be deleted.

header('Content-Type: text/plain; charset=UTF-8');
echo "Replaced by https://chat.mydropintheoceans.org/search/ (daily task: /search/cron.php). This task can be deleted.\n";
