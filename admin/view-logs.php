<?php
// Session-based admin authentication (avoids browser basic-auth popups).
session_start();
header('X-Robots-Tag: noindex, nofollow, noarchive', true);
$creds_file = __DIR__ . '/../../php_private/admin_credentials.php';
$creds = is_readable($creds_file) ? include $creds_file : null;
if (!is_array($creds) || !isset($creds['user'], $creds['pass_hash'])) {
    header('HTTP/1.0 503 Service Unavailable');
    echo 'Admin credentials not configured.';
    exit;
}

// If user is not authenticated via session, redirect to login form.
if (empty($_SESSION['admin_authenticated'])) {
    // Preserve the requested page so login can redirect back if needed.
    $return = basename(__FILE__);
    header('Location: login.php?return=' . urlencode($return));
    exit;
}

function convertDate($d) {
  if (!$d) return null;
  if (preg_match('/^(\d{2})\.(\d{2})\.(\d{4})$/', $d, $m)) {
    return "$m[3]-$m[2]-$m[1]";
  }
  if (preg_match('/^(\d{4})-(\d{2})-(\d{2})$/', $d)) {
    return $d;
  }
  return $d;
}

function get_bot_filter_mode($raw) {
  $raw = strtolower(trim((string)$raw));
  if ($raw === 'bots') return 'bots';
  if ($raw === 'humans') return 'humans';
  return 'all';
}

function detect_obvious_bot($visit) {
  $ua = strtolower(trim((string)($visit['user_agent'] ?? '')));
  if ($ua === '') {
    return ['is_bot' => true, 'reason' => 'empty user agent'];
  }

  $needles = [
    'googlebot', 'bingbot', 'adsbot', 'duckduckbot', 'yandexbot', 'baiduspider',
    'mj12bot', 'ahrefsbot', 'semrushbot', 'seobilitybot', 'barkrowler',
    'petalbot', 'bytespider', 'applebot', 'gptbot', 'chatgpt-user', 'claudebot',
    'ccbot', 'facebookexternalhit', 'facebot', 'twitterbot', 'slackbot',
    'whatsapp', 'telegrambot', 'discordbot', 'crawler', 'spider',
    'headlesschrome', 'phantomjs', 'selenium', 'playwright', 'puppeteer',
    'curl/', 'wget/', 'python-requests', 'python-urllib', 'python-httpx',
    'go-http-client', 'axios/', 'node-fetch', 'okhttp', 'scrapy', 'libwww-perl'
  ];
  foreach ($needles as $needle) {
    if (strpos($ua, $needle) !== false) {
      return ['is_bot' => true, 'reason' => 'user agent: ' . $needle];
    }
  }

  // Also consider server-side computed suspicious visitors (rate/ASN)
  global $SUSPICIOUS_VISITORS;
  if (!empty($SUSPICIOUS_VISITORS)) {
    $key = isset($visit['visitor_id']) && $visit['visitor_id'] !== '' ? $visit['visitor_id'] : ('ip:' . ($visit['ip'] ?? ''));
    if (isset($SUSPICIOUS_VISITORS[$key])) {
      return ['is_bot' => true, 'reason' => 'suspicious (rate/asn)'];
    }
  }

  return ['is_bot' => false, 'reason' => ''];
}

function visit_matches_bot_filter($visit, $mode) {
  $mode = get_bot_filter_mode($mode);
  if ($mode === 'all') return true;
  $info = detect_obvious_bot($visit);
  return $mode === 'bots' ? !empty($info['is_bot']) : empty($info['is_bot']);
}

function normalize_logged_page($page) {
  $page = trim((string)$page);
  if ($page === '') return '/';

  if (preg_match('#^https?://#i', $page)) {
    $parts = parse_url($page);
    $path = isset($parts['path']) ? $parts['path'] : '/';
    $query = isset($parts['query']) && $parts['query'] !== '' ? ('?' . $parts['query']) : '';
    $page = $path . $query;
  }

  $page = preg_replace('/#.*$/', '', $page);
  $qpos = strpos($page, '?');
  $path = $qpos === false ? $page : substr($page, 0, $qpos);
  $path = preg_replace('#/+#', '/', $path);
  if ($path === '' || $path === false) $path = '/';
  if ($path[0] !== '/') $path = '/' . $path;
  if ($path !== '/' && !preg_match('/\.[a-z0-9]{1,8}$/i', $path)) {
    $path = rtrim($path, '/') . '/';
  }

  return $path;
}

function page_value_for_mode($page, $mode) {
  return $mode === 'generic' ? normalize_logged_page($page) : (string)$page;
}

function fold_locale_variants($page) {
  $page = trim((string)$page);
  if ($page === '') return '/';

  $qpos = strpos($page, '?');
  $path = $qpos === false ? $page : substr($page, 0, $qpos);
  $query = $qpos === false ? '' : substr($page, $qpos + 1);

  $path = preg_replace('#/+#', '/', $path);
  if ($path === '' || $path === false) $path = '/';
  if ($path[0] !== '/') $path = '/' . $path;

  $path = preg_replace('#^/(en|fr|de)(?=/|$)#i', '', $path);
  if ($path === '' || $path === false) $path = '/';
  if ($path[0] !== '/') $path = '/' . $path;

  if ($query !== '') {
    parse_str($query, $params);
    if (is_array($params) && array_key_exists('lang', $params)) {
      unset($params['lang']);
      $query = http_build_query($params);
    }
  }

  return $query !== '' ? ($path . '?' . $query) : $path;
}

function page_value_for_mode_and_lang($page, $mode, $lang_fold) {
  $value = page_value_for_mode($page, $mode);
  if ($lang_fold) {
    $value = fold_locale_variants($value);
  }
  return $value;
}

function page_language_for_filter($page) {
  $raw = trim((string)$page);
  if ($raw === '') return 'en';

  $path = $raw;
  $query = '';

  if (preg_match('#^https?://#i', $raw)) {
    $parts = parse_url($raw);
    $path = isset($parts['path']) ? $parts['path'] : '/';
    $query = isset($parts['query']) ? $parts['query'] : '';
  } else {
    $qpos = strpos($raw, '?');
    $path = $qpos === false ? $raw : substr($raw, 0, $qpos);
    $query = $qpos === false ? '' : substr($raw, $qpos + 1);
  }

  if ($query !== '') {
    parse_str($query, $params);
    if (is_array($params) && isset($params['lang'])) {
      $lang = strtolower(trim((string)$params['lang']));
      if (in_array($lang, ['en', 'fr', 'de'], true)) return $lang;
    }
  }

  $path = preg_replace('#/+#', '/', (string)$path);
  if (preg_match('#^/(en|fr|de)(?=/|$)#i', $path, $m)) {
    return strtolower($m[1]);
  }

  // Default non-prefixed pages to English for filtering purposes.
  return 'en';
}

// --- CSV Export endpoint ---
if (isset($_GET['action']) && $_GET['action'] === 'export_csv') {
    $log_file = '/home/clients/a87f9485d236547310279906c2e64cab/web/php/analytics/visits.log';
    $raw_lines = (file_exists($log_file) ? @file($log_file) : []) ?: [];
    $all_export_visits = [];
    foreach ($raw_lines as $line) {
        $d = json_decode($line, true);
        if (!$d) continue;
        $all_export_visits[] = $d;
    }

    // Populate SUSPICIOUS_VISITORS for rate/ASN-based bot detection
    $SUSPICIOUS_VISITORS = [];
    $by_key = [];
    foreach ($all_export_visits as $v) {
        $key = isset($v['visitor_id']) && $v['visitor_id'] !== '' ? $v['visitor_id'] : ('ip:' . ($v['ip'] ?? ''));
        $ts  = strtotime($v['timestamp'] ?? '');
        if ($ts === false) continue;
        $by_key[$key][] = $ts;
    }
    foreach ($by_key as $key => $times) {
        sort($times);
        $n = count($times);
        for ($i = 0; $i < $n; $i++) {
            $j = $i;
            while ($j < $n && $times[$j] <= $times[$i] + 5) $j++;
            if ($j - $i >= 10) { $SUSPICIOUS_VISITORS[$key] = true; break; }
        }
    }
    $ip_cache_file = __DIR__ . '/../api/ip_country.json';
    if (file_exists($ip_cache_file)) {
        $raw_cache = @file_get_contents($ip_cache_file);
        $ip_cache = $raw_cache ? json_decode($raw_cache, true) : [];
        if (is_array($ip_cache)) {
            $suspicious_asns = ['AS204770'];
            foreach ($all_export_visits as $v) {
                $ip = $v['ip'] ?? '';
                if (!$ip) continue;
                if (isset($ip_cache[$ip]['asn']) && in_array($ip_cache[$ip]['asn'], $suspicious_asns, true)) {
                    $key = isset($v['visitor_id']) && $v['visitor_id'] !== '' ? $v['visitor_id'] : ('ip:' . $ip);
                    $SUSPICIOUS_VISITORS[$key] = true;
                }
            }
        }
    }

    $bot_filter     = get_bot_filter_mode($_GET['bot_filter'] ?? 'all');
    $start_date     = isset($_GET['start_date']) && $_GET['start_date'] !== '' ? convertDate($_GET['start_date']) : null;
    $end_date       = isset($_GET['end_date'])   && $_GET['end_date']   !== '' ? convertDate($_GET['end_date'])   : null;
    $filter_page    = isset($_GET['page'])        ? trim($_GET['page'])        : '';
    $filter_visitor = isset($_GET['visitor_id'])  ? trim($_GET['visitor_id'])  : '';

    $results = [];
    foreach ($all_export_visits as $v) {
        $ts = $v['timestamp'] ?? '';
        if (!$ts) continue;
        if (!visit_matches_bot_filter($v, $bot_filter)) continue;
        $date = substr($ts, 0, 10);
        if ($start_date && $date < $start_date) continue;
        if ($end_date   && $date > $end_date)   continue;
        $p   = $v['page'] ?? '';
        if ($filter_page !== '' && $p !== $filter_page) continue;
        $vid = $v['visitor_id'] ?? '';
        if ($filter_visitor !== '' && $vid !== $filter_visitor) continue;
        $bot_info = detect_obvious_bot($v);
        $results[] = [
            $ts,
            $v['ip'] ?? '',
            $vid,
            $p,
            $v['referer'] ?? '',
            $v['user_agent'] ?? '',
            !empty($bot_info['is_bot']) ? 'true' : 'false',
            $bot_info['reason'] ?? '',
        ];
    }
    usort($results, function($a, $b) { return strcmp($a[0], $b[0]); });

    $filename = 'visits_export_' . date('Ymd_His') . '.csv';
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    header('Cache-Control: no-cache, no-store');
    header('Pragma: no-cache');
    $out = fopen('php://output', 'w');
    fputcsv($out, ['timestamp', 'ip', 'visitor_id', 'page', 'referer', 'user_agent', 'is_bot', 'bot_reason']);
    foreach ($results as $row) {
        fputcsv($out, $row);
    }
    fclose($out);
    exit;
}

// --- AJAX handler for small operations (unique visitors table, timeseries JSON) ---
if (isset($_GET['ajax']) && $_GET['ajax'] == '1') {
    $log_file = '/home/clients/a87f9485d236547310279906c2e64cab/web/php/analytics/visits.log';
    $lines = (file_exists($log_file) ? @file($log_file) : []) ?: [];
    $visits = [];
    foreach ($lines as $line) {
        $data = json_decode($line, true);
        if (!$data) continue;
        $visits[] = $data;
    }
  $bot_filter = get_bot_filter_mode($_GET['bot_filter'] ?? 'all');

  // Delete all records for a specific IP from the active log and archived monthly logs.
  if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'delete_ip_records') {
    header('Content-Type: application/json');

    $target_ip = trim((string)($_POST['ip'] ?? ''));
    if ($target_ip === '' || filter_var($target_ip, FILTER_VALIDATE_IP) === false) {
      http_response_code(400);
      echo json_encode([
        'ok' => false,
        'error' => 'Please provide a valid IP address.',
      ]);
      exit;
    }

    $analytics_dir = '/home/clients/a87f9485d236547310279906c2e64cab/web/php/analytics';
    $target_files = [$analytics_dir . '/visits.log'];
    $archive_files = glob($analytics_dir . '/archives/visits-*.log') ?: [];
    foreach ($archive_files as $archive_file) {
      $target_files[] = $archive_file;
    }

    $deleted_total = 0;
    $files_touched = 0;
    $details = [];
    $errors = [];

    foreach ($target_files as $target_file) {
      if (!is_file($target_file)) {
        continue;
      }
      if (!is_readable($target_file) || !is_writable($target_file)) {
        $errors[] = 'Cannot read/write ' . basename($target_file);
        continue;
      }

      $file_lines = @file($target_file);
      if ($file_lines === false) {
        $errors[] = 'Failed to read ' . basename($target_file);
        continue;
      }

      $kept_lines = [];
      $deleted_in_file = 0;
      foreach ($file_lines as $file_line) {
        $row = json_decode($file_line, true);
        if (!is_array($row)) {
          $kept_lines[] = $file_line;
          continue;
        }
        $row_ip = trim((string)($row['ip'] ?? ''));
        if ($row_ip !== '' && $row_ip === $target_ip) {
          $deleted_in_file++;
          continue;
        }
        $kept_lines[] = $file_line;
      }

      if ($deleted_in_file > 0) {
        $tmp_file = $target_file . '.tmp.' . uniqid('', true);
        $write_ok = @file_put_contents($tmp_file, implode('', $kept_lines), LOCK_EX);
        if ($write_ok === false) {
          @unlink($tmp_file);
          $errors[] = 'Failed to write temp file for ' . basename($target_file);
          continue;
        }
        if (!@rename($tmp_file, $target_file)) {
          @unlink($tmp_file);
          $errors[] = 'Failed to replace ' . basename($target_file);
          continue;
        }

        $files_touched++;
        $deleted_total += $deleted_in_file;
        $details[] = [
          'file' => basename($target_file),
          'deleted' => $deleted_in_file,
        ];
      }
    }

    echo json_encode([
      'ok' => true,
      'ip' => $target_ip,
      'deleted_total' => $deleted_total,
      'files_touched' => $files_touched,
      'details' => $details,
      'errors' => $errors,
    ]);
    exit;
  }

    // Timeseries endpoint: return JSON of counts for a specific page grouped by hour/day/week
    if (isset($_GET['action']) && $_GET['action'] === 'timeseries') {
        $start_date = isset($_GET['start_date']) && $_GET['start_date'] !== '' ? convertDate($_GET['start_date']) : null;
        $end_date = isset($_GET['end_date']) && $_GET['end_date'] !== '' ? convertDate($_GET['end_date']) : null;
        $group = $_GET['group'] ?? 'day';
      $page_mode = ($_GET['page_mode'] ?? 'exact') === 'generic' ? 'generic' : 'exact';
      $lang_fold = !empty($_GET['lang_fold']) && $_GET['lang_fold'] !== '0';
      $lang_filters_raw = trim((string)($_GET['lang_filters'] ?? ''));
      $lang_filters = [];
      if ($lang_filters_raw !== '') {
        foreach (explode(',', $lang_filters_raw) as $lf) {
          $lf = strtolower(trim($lf));
          if (in_array($lf, ['en', 'fr', 'de'], true)) {
            $lang_filters[$lf] = true;
          }
        }
      }
        $page = $_GET['page'] ?? '';
        $pages_param = $_GET['pages'] ?? null; // comma-separated list

        // If pages param provided, parse into array; else if single page provided use that;
        $pages = [];
        if ($pages_param) {
            $pages = array_values(array_filter(array_map('trim', explode(',', $pages_param))));
        } elseif ($page !== '') {
            $pages = [$page];
        }

        // If multiple pages requested, produce datasets per page aligned to the same labels
        if (!empty($pages)) {
            $per_page_buckets = [];
            $all_keys = [];
            foreach ($visits as $v) {
                $ts = $v['timestamp'] ?? '';
                if (!$ts) continue;
              if (!visit_matches_bot_filter($v, $bot_filter)) continue;
                $date = substr($ts, 0, 10);
                if ($start_date && $date < $start_date) continue;
                if ($end_date && $date > $end_date) continue;
              if (!empty($lang_filters)) {
                $lang = page_language_for_filter($v['page'] ?? '');
                if (!isset($lang_filters[$lang])) continue;
              }
                $p = page_value_for_mode_and_lang($v['page'] ?? '', $page_mode, $lang_fold);
                if (!in_array($p, $pages, true)) continue;
                if ($group === 'hour') {
                    $key = substr($ts, 0, 13);
                } elseif ($group === 'week') {
                    $dt = strtotime($ts);
                    $key = date('o-\WW', $dt);
                } else {
                    $key = substr($ts, 0, 10);
                }
                $per_page_buckets[$p][$key] = ($per_page_buckets[$p][$key] ?? 0) + 1;
                $all_keys[$key] = true;
            }
            // Use the collected keys as labels (preserve chronological order)
            $labels = array_keys($all_keys);
            sort($labels);
            // If a start/end range was provided and grouping is by day, expand labels
            // to include every date in the range so the chart shows continuous days.
            if ($start_date && $end_date && $group === 'day') {
              $range = [];
              $dt = new DateTime($start_date);
              $endDt = new DateTime($end_date);
              while ($dt <= $endDt) {
                $d = $dt->format('Y-m-d');
                $range[$d] = true;
                $dt->modify('+1 day');
              }
              // Merge existing labels into the full range (preserves order by date)
              $labels = array_keys($range);
            }
            $datasets = [];
            foreach ($pages as $p) {
                $data = [];
                foreach ($labels as $k) {
                    $data[] = $per_page_buckets[$p][$k] ?? 0;
                }
                $datasets[] = ['label' => $p, 'data' => $data];
            }
            header('Content-Type: application/json');
            echo json_encode(['labels' => $labels, 'datasets' => $datasets]);
            exit;
        }

        // Single-page timeseries
        $buckets = [];
        foreach ($visits as $v) {
            $ts = $v['timestamp'] ?? '';
            if (!$ts) continue;
          if (!visit_matches_bot_filter($v, $bot_filter)) continue;
            $date = substr($ts, 0, 10);
            if ($start_date && $date < $start_date) continue;
            if ($end_date && $date > $end_date) continue;
          if (!empty($lang_filters)) {
            $lang = page_language_for_filter($v['page'] ?? '');
            if (!isset($lang_filters[$lang])) continue;
          }
            $p = page_value_for_mode_and_lang($v['page'] ?? '', $page_mode, $lang_fold);
            if ($page !== '' && $p !== $page) continue;
            if ($group === 'hour') {
                $key = substr($ts, 0, 13); // YYYY-MM-DD HH
                $label = $key . ':00';
            } elseif ($group === 'week') {
                $dt = strtotime($ts);
                $label = date('o-\WW', $dt);
                $key = $label;
            } else {
                $key = substr($ts, 0, 10); // day
                $label = $key;
            }
            if (!isset($buckets[$key])) $buckets[$key] = 0;
            $buckets[$key]++;
        }
        ksort($buckets);
      $labels = array_values(array_map(function($k){ return (string)$k; }, array_keys($buckets)));
      // Ensure continuous day labels when start/end provided and grouping by day
      if ($start_date && $end_date && $group === 'day') {
        $full = [];
        $dt = new DateTime($start_date);
        $endDt = new DateTime($end_date);
        while ($dt <= $endDt) {
          $d = $dt->format('Y-m-d');
          $full[] = $d;
          $dt->modify('+1 day');
        }
        // Rebuild buckets to include zeros for missing days
        $newBuckets = [];
        foreach ($full as $k) { $newBuckets[$k] = $buckets[$k] ?? 0; }
        $buckets = $newBuckets;
        $labels = array_values(array_map(function($k){ return (string)$k; }, array_keys($buckets)));
        $data = array_values($buckets);
        header('Content-Type: application/json');
        echo json_encode(['labels' => $labels, 'data' => $data, 'group' => $group]);
        exit;
      }
        $data = array_values($buckets);
        header('Content-Type: application/json');
        echo json_encode(['labels' => $labels, 'data' => $data, 'group' => $group]);
        exit;
    }

    // IP detail endpoint
    if (isset($_GET['action']) && $_GET['action'] === 'ip_details') {
        $start_date = isset($_GET['start_date']) && $_GET['start_date'] !== '' ? convertDate($_GET['start_date']) : null;
        $end_date   = isset($_GET['end_date'])   && $_GET['end_date']   !== '' ? convertDate($_GET['end_date'])   : null;
        $filter_page = isset($_GET['page']) ? trim($_GET['page']) : '';
      $filter_visitor = isset($_GET['visitor_id']) ? trim($_GET['visitor_id']) : '';
        $results = [];
        foreach ($visits as $v) {
            $ts = $v['timestamp'] ?? '';
            if (!$ts) continue;
          if (!visit_matches_bot_filter($v, $bot_filter)) continue;
            $date = substr($ts, 0, 10);
            if ($start_date && $date < $start_date) continue;
            if ($end_date   && $date > $end_date)   continue;
            $p = $v['page'] ?? '';
            if ($filter_page !== '' && $p !== $filter_page) continue;
          $visitor_id = $v['visitor_id'] ?? '';
          if ($filter_visitor !== '' && $visitor_id !== $filter_visitor) continue;
          $bot_info = detect_obvious_bot($v);
            $results[] = [
                'timestamp'  => $ts,
                'ip'         => $v['ip'] ?? '(not logged)',
                'page'       => $p,
            'visitor_id' => $visitor_id,
                'referer'    => $v['referer'] ?? '',
                'user_agent' => $v['user_agent'] ?? '',
            'is_bot'     => !empty($bot_info['is_bot']),
            'bot_reason' => $bot_info['reason'] ?? '',
            ];
        }
        // Sort newest first
        usort($results, function($a, $b){ return strcmp($b['timestamp'], $a['timestamp']); });
        header('Content-Type: application/json');
        echo json_encode($results);
        exit;
    }

    // Default behavior: unique visitors table + daily breakdown (existing behavior)
    $start_date = isset($_GET['start_date']) && $_GET['start_date'] !== '' ? convertDate($_GET['start_date']) : null;
    $end_date = isset($_GET['end_date']) && $_GET['end_date'] !== '' ? convertDate($_GET['end_date']) : null;
    $unique_visitors_per_page = [];
    foreach ($visits as $data) {
      if (!visit_matches_bot_filter($data, $bot_filter)) continue;
        $visit_date = substr($data['timestamp'], 0, 10);
        if ($start_date && $visit_date < $start_date) continue;
        if ($end_date && $visit_date > $end_date) continue;
        $page = $data['page'];
        $visitor_id = $data['visitor_id'];
        if (!isset($unique_visitors_per_page[$page])) {
            $unique_visitors_per_page[$page] = [];
        }
        $unique_visitors_per_page[$page][$visitor_id] = true;
    }
    arsort($unique_visitors_per_page);
    echo '<h2 id="uvToggle" style="cursor:pointer;user-select:none;">Unique Visitors Per Page <span id="uvArrow" style="font-size:0.75em;color:#aaa;">&#9658;</span></h2>';
    echo '<div id="uvContent" style="display:none;">';
    echo '<div id="uvMainWrap" style="display:none;">';
    echo '<table><thead><tr><th>Page</th><th id="uvSortBtn" style="cursor:pointer;user-select:none;">Unique Visitors <span id="uvSortArrow">&#8597;</span></th></tr></thead><tbody id="uvBody">';
    if (!empty($unique_visitors_per_page)) {
        foreach ($unique_visitors_per_page as $page => $visitors) {
            $cnt = count($visitors);
            echo '<tr data-count="' . $cnt . '"><td>' . htmlspecialchars($page) . '</td><td>' . $cnt . '</td></tr>';
        }
    } else {
        echo '<tr><td colspan="2">No data for selected date range.</td></tr>';
    }
    echo '</tbody></table></div>';
    echo '<script>if(window.initUvTable)window.initUvTable();</script>';

    $page_visits_totals = [];
    foreach ($visits as $data) {
        if (!visit_matches_bot_filter($data, $bot_filter)) continue;
        $date = substr($data['timestamp'], 0, 10);
      if ($start_date && $date < $start_date) continue;
      if ($end_date && $date > $end_date) continue;
        $page = $data['page'];
        $page_visits_totals[$page] = ($page_visits_totals[$page] ?? 0) + 1;
    }
    arsort($page_visits_totals);
    echo '<div id="uvPvdWrap" style="display:none;">';
    echo '<h3>Page Visits (Total in Selected Timeframe)</h3>';
    echo '<div style="overflow-x:auto; max-width:100vw;">';
    echo '<table id="pvdTable" style="min-width:400px;">';
    echo '<thead><tr><th id="pvdPageSortBtn" style="cursor:pointer;user-select:none;">Page <span id="pvdPageArrow">&#8597;</span></th><th id="pvdVisitsSortBtn" style="cursor:pointer;user-select:none;">Visits <span id="pvdVisitsArrow">&#8597;</span></th></tr></thead><tbody id="pvdBody">';
    if (!empty($page_visits_totals)) {
      foreach ($page_visits_totals as $page => $count) {
        echo '<tr data-page="' . htmlspecialchars($page) . '" data-visits="' . intval($count) . '"><td>' . htmlspecialchars($page) . '</td><td>' . $count . '</td></tr>';
      }
    } else {
      echo '<tr><td colspan="2">No data for selected date range.</td></tr>';
    }
    echo '</tbody></table></div>';
    echo '</div>';
    echo '</div>';
    echo '<script>if(window.initPvdTable)window.initPvdTable();</script>';
    exit;
}

?>
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Log Viewer</title>
<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
<script src="/js/chart.js"></script>
<style>
body { font-family: Arial, sans-serif; background: #222; color: #eee; }
.chart-container { background: #111; padding: 1em; border-radius: 6px; margin-bottom: 2em; min-height: 320px; }
canvas { min-height: 300px; width: 100% !important; display: block; }
pre { background: #111; padding: 1em; border-radius: 6px; overflow-x: auto; }
select,button { font-size: 1em; }
/* Table reset */
table { border-collapse: collapse; width: 100%; background: #111; border-radius: 6px; }
th, td { padding: 6px 12px; text-align: left; border-bottom: 1px solid #333; vertical-align: middle; word-break: break-all; }
th { background: #1a1a1a; color: #4bc0c0; white-space: nowrap; word-break: normal; }
tr:last-child td { border-bottom: none; }
tr:hover td { background: #1e1e1e; }
div[style*="overflow-x"] { margin-bottom: 1.5em; }
</style>
<?php
// Parse log file and prepare chart data
$log_files = [
    'Analytics Log' => '/home/clients/a87f9485d236547310279906c2e64cab/web/php/analytics/visits.log',
    'Debug Log' => '/home/clients/a87f9485d236547310279906c2e64cab/web/php/analytics/debug.log',
];
$selected = $_GET['log'] ?? 'Analytics Log';
$file = $log_files[$selected] ?? null;
$lines = $file && file_exists($file) ? @file($file) : [];
$bot_filter = get_bot_filter_mode($_GET['bot_filter'] ?? 'all');
$all_visits = [];
$page_views = [];
$referers = [];
$daily_visits = [];
// --- server-side heuristics: rate + ASN
$SUSPICIOUS_VISITORS = []; // will be populated below
$RATE_THRESHOLD = 10; // requests
$RATE_WINDOW = 5; // seconds
$SUSPICIOUS_ASNS = [
  'AS204770', // Cherry Servers (example)
];

// First, parse all log lines into $all_visits without filtering so heuristics can run
foreach ($lines as $line) {
  $data = json_decode($line, true);
  if (!$data) continue;
  $all_visits[] = $data;
}

// Build rate-window index per visitor (visitor_id preferred, else ip)
$by_key = [];
foreach ($all_visits as $v) {
  $key = isset($v['visitor_id']) && $v['visitor_id'] !== '' ? $v['visitor_id'] : ('ip:' . ($v['ip'] ?? ''));
  $ts = strtotime($v['timestamp'] ?? '');
  if ($ts === false) continue;
  $by_key[$key][] = $ts;
}
foreach ($by_key as $key => $times) {
  sort($times);
  $n = count($times);
  for ($i = 0; $i < $n; $i++) {
    $start = $times[$i];
    $j = $i;
    while ($j < $n && $times[$j] <= $start + $RATE_WINDOW) $j++;
    $cnt = $j - $i;
    if ($cnt >= $RATE_THRESHOLD) { // mark suspicious
      $SUSPICIOUS_VISITORS[$key] = true;
      break;
    }
  }
}
// ASN-based marking using API cache when available
$ip_cache_file = __DIR__ . '/../api/ip_country.json';
if (file_exists($ip_cache_file)) {
  $raw = @file_get_contents($ip_cache_file);
  $ip_cache = $raw ? json_decode($raw, true) : [];
  if (is_array($ip_cache)) {
    foreach ($all_visits as $v) {
      $ip = $v['ip'] ?? '';
      if (!$ip) continue;
      if (isset($ip_cache[$ip]['asn'])) {
        $asn = $ip_cache[$ip]['asn'];
        if (in_array($asn, $SUSPICIOUS_ASNS, true)) {
          $key = isset($v['visitor_id']) && $v['visitor_id'] !== '' ? $v['visitor_id'] : ('ip:' . $ip);
          $SUSPICIOUS_VISITORS[$key] = true;
        }
      }
    }
  }
}

// Now apply the bot filter to produce the $visits list used by the UI
$visits = [];
foreach ($all_visits as $data) {
  if (!visit_matches_bot_filter($data, $bot_filter)) continue;
  $visits[] = $data;
  $page = $data['page'];
  $page_views[$page] = ($page_views[$page] ?? 0) + 1;
  $referer = $data['referer'] ?? 'direct';
  if ($referer !== 'direct') {
    $referer_host = parse_url($referer, PHP_URL_HOST) ?? $referer;
    $referers[$referer_host] = ($referers[$referer_host] ?? 0) + 1;
  }
  $date = substr($data['timestamp'] ?? '', 0, 10);
  if ($date) $daily_visits[$date] = ($daily_visits[$date] ?? 0) + 1;
}
$timeline_labels = array_keys($daily_visits);
$timeline_data = array_values($daily_visits);
arsort($page_views);
$page_labels = array_keys($page_views);
$page_data = array_values($page_views);

$generic_page_views = [];
foreach ($page_views as $page => $count) {
  $g = normalize_logged_page($page);
  $generic_page_views[$g] = ($generic_page_views[$g] ?? 0) + $count;
}
arsort($generic_page_views);
$generic_page_labels = array_keys($generic_page_views);

$exact_lang_page_views = [];
foreach ($page_views as $page => $count) {
  $k = fold_locale_variants($page);
  $exact_lang_page_views[$k] = ($exact_lang_page_views[$k] ?? 0) + $count;
}
arsort($exact_lang_page_views);
$exact_lang_page_labels = array_keys($exact_lang_page_views);

$generic_lang_page_views = [];
foreach ($page_views as $page => $count) {
  $k = fold_locale_variants(normalize_logged_page($page));
  $generic_lang_page_views[$k] = ($generic_lang_page_views[$k] ?? 0) + $count;
}
arsort($generic_lang_page_views);
$generic_lang_page_labels = array_keys($generic_lang_page_views);

arsort($referers);
$referer_labels = array_keys($referers);
$referer_data = array_values($referers);

// Date filter UI
$start_date = isset($_GET['start_date']) && $_GET['start_date'] !== '' ? $_GET['start_date'] : '';
$end_date = isset($_GET['end_date']) && $_GET['end_date'] !== '' ? $_GET['end_date'] : '';
echo '<form id="dateFilterForm" style="margin-bottom:10px;">';
echo '<input type="date" name="start_date" value="' . htmlspecialchars($start_date, ENT_QUOTES) . '" style="width:140px;">';
echo ' to ';
echo '<input type="date" name="end_date" value="' . htmlspecialchars($end_date, ENT_QUOTES) . '" style="width:140px;">';
echo ' <label style="margin-left:8px;">Traffic: <select name="bot_filter" id="botFilterSelect">';
echo '<option value="all"' . ($bot_filter === 'all' ? ' selected' : '') . '>All traffic</option>';
echo '<option value="humans"' . ($bot_filter === 'humans' ? ' selected' : '') . '>Exclude obvious bots</option>';
echo '<option value="bots"' . ($bot_filter === 'bots' ? ' selected' : '') . '>Only obvious bots</option>';
echo '</select></label>';
echo ' <button type="submit">Filter</button>';
echo ' <span style="font-size:0.82em;color:#aaa;margin-left:8px;">Bot detection is based on obvious user-agent matches.</span>';
echo '</form>';
echo '<div style="margin-bottom:10px;">';
echo '<button id="export_period_btn" style="font-size:0.85em;background:#1a3a2a;color:#7fcfa0;border:1px solid #4bc08a;border-radius:4px;padding:4px 10px;cursor:pointer;">&#8595; Export period data (CSV)</button>';
echo ' <span style="font-size:0.78em;color:#aaa;margin-left:6px;">Exports all visits matching current date range &amp; traffic filter (no page/hash filter).</span>';
echo '</div>';
echo '<script>';
echo '(function(){';
echo '  var btn = document.getElementById("export_period_btn");';
echo '  if (!btn) return;';
echo '  btn.addEventListener("click", function(){';
echo '    var form = document.getElementById("dateFilterForm");';
echo '    var params = new URLSearchParams({ action: "export_csv" });';
echo '    if (form) {';
echo '      var sd = form.start_date ? form.start_date.value : "";';
echo '      var ed = form.end_date   ? form.end_date.value   : "";';
echo '      if (sd) params.set("start_date", sd);';
echo '      if (ed) params.set("end_date",   ed);';
echo '    }';
echo '    var bfSel = document.getElementById("botFilterSelect");';
echo '    params.set("bot_filter", bfSel ? (bfSel.value || "all") : "all");';
echo '    window.open(window.location.pathname + "?" + params.toString(), "_blank");';
echo '  });';
echo '})();';
echo '</script>';
echo '<div id="uniqueVisitorsTable">';
echo '<h2 id="uvToggle" style="cursor:pointer;user-select:none;">Unique Visitors Per Page <span id="uvArrow" style="font-size:0.75em;color:#aaa;">&#9658;</span></h2>';
echo '<div id="uvContent" style="display:none;">';
echo '<div id="uvMainWrap" style="display:none;">';
echo '<table><thead><tr><th>Page</th><th id="uvSortBtn" style="cursor:pointer;user-select:none;">Unique Visitors <span id="uvSortArrow">&#8597;</span></th></tr></thead><tbody id="uvBody">';
$unique_visitors_per_page = [];
foreach ($visits as $data) {
    $visit_date = substr($data['timestamp'] ?? '', 0, 10);
    if ($start_date && $visit_date < $start_date) continue;
    if ($end_date && $visit_date > $end_date) continue;
    $page = $data['page'];
    $visitor_id = $data['visitor_id'];
    if (!isset($unique_visitors_per_page[$page])) {
        $unique_visitors_per_page[$page] = [];
    }
    $unique_visitors_per_page[$page][$visitor_id] = true;
}
arsort($unique_visitors_per_page);
foreach ($unique_visitors_per_page as $page => $visitors) {
    $cnt = count($visitors);
    echo '<tr data-count="' . $cnt . '"><td>' . htmlspecialchars($page) . '</td><td>' . $cnt . '</td></tr>';
}
echo '</tbody></table></div>';

$page_visits_totals = [];
foreach ($visits as $data) {
  $date = substr($data['timestamp'] ?? '', 0, 10);
  if ($start_date && $date < $start_date) continue;
  if ($end_date && $date > $end_date) continue;
  $page = $data['page'];
  $page_visits_totals[$page] = ($page_visits_totals[$page] ?? 0) + 1;
}
arsort($page_visits_totals);
echo '<div id="uvPvdWrap" style="display:none;">';
echo '<h3>Page Visits (Total in Selected Timeframe)</h3>';
echo '<div style="overflow-x:auto; max-width:100vw;">';
echo '<table id="pvdTable" style="min-width:400px;">';
echo '<thead><tr><th id="pvdPageSortBtn" style="cursor:pointer;user-select:none;">Page <span id="pvdPageArrow">&#8597;</span></th><th id="pvdVisitsSortBtn" style="cursor:pointer;user-select:none;">Visits <span id="pvdVisitsArrow">&#8597;</span></th></tr></thead><tbody id="pvdBody">';
if (!empty($page_visits_totals)) {
  foreach ($page_visits_totals as $page => $count) {
    echo '<tr data-page="' . htmlspecialchars($page) . '" data-visits="' . intval($count) . '"><td>' . htmlspecialchars($page) . '</td><td>' . $count . '</td></tr>';
  }
} else {
  echo '<tr><td colspan="2">No data for selected date range.</td></tr>';
}
echo '</tbody></table></div>';
echo '</div>';
echo '</div></div>';

// Chart containers
echo '<div style="margin:0 0 1em 0; display:flex; gap:0.5em; align-items:center; flex-wrap:wrap;">';
echo '<label>Page (single): <select id="ts_page" style="min-width:320px;"></select></label>';
echo '<label id="ts_pages_wrap" style="position:relative;min-width:420px;max-width:980px;width:min(70vw,980px);display:inline-block;padding-bottom:2.6em;">';
echo 'Compare pages: ';
echo '<select id="ts_pages" multiple size="1" style="min-width:420px;max-width:980px;width:100%;position:absolute;left:0;top:1.6em;z-index:50;height:auto;max-height:360px;background:#111;color:#eee;border:1px solid #555;border-radius:4px;"></select>';
echo '</label>';
echo '<button id="ts_mode_toggle" type="button" style="font-size:0.85em;background:#1a2a3a;color:#7fc0f0;border:1px solid #4b90c0;border-radius:4px;padding:4px 10px;">Mode: Generic URLs</button>';
echo '<button id="ts_lang_toggle" type="button" style="font-size:0.85em;background:#2a1a3a;color:#d2b7f5;border:1px solid #7a58a8;border-radius:4px;padding:4px 10px;">Lang fold: Off</button>';
echo '<span style="display:inline-flex;gap:4px;align-items:center;">';
echo '<span style="font-size:0.82em;color:#bbb;">Language:</span>';
echo '<button id="ts_lang_all" type="button" style="font-size:0.82em;background:#1d2a2f;color:#bde9f5;border:1px solid #4b90c0;border-radius:4px;padding:3px 8px;">All</button>';
echo '<button id="ts_lang_en" type="button" style="font-size:0.82em;background:#1f2f1f;color:#cdeecb;border:1px solid #4f9a4f;border-radius:4px;padding:3px 8px;">EN</button>';
echo '<button id="ts_lang_fr" type="button" style="font-size:0.82em;background:#2f2620;color:#f3debf;border:1px solid #aa8b5a;border-radius:4px;padding:3px 8px;">FR</button>';
echo '<button id="ts_lang_de" type="button" style="font-size:0.82em;background:#2b2333;color:#e2ccf6;border:1px solid #8a68b8;border-radius:4px;padding:3px 8px;">DE</button>';
echo '</span>';
echo '<button id="ts_select_all" type="button" style="font-size:0.85em;background:#1f3a1f;color:#bfe8bf;border:1px solid #3f8a3f;border-radius:4px;padding:4px 10px;">Select All</button>';
echo '<button id="ts_reset" type="button" style="font-size:0.85em;background:#3a2a1a;color:#f0d0a0;border:1px solid #a07848;border-radius:4px;padding:4px 10px;">Reset</button>';
echo '<label>Group: <select id="ts_group"><option value="hour">Hour</option><option value="day" selected>Day</option><option value="week">Week</option></select></label>';
echo '<label>From: <input type="date" id="ts_start"></label>';
echo '<label>To: <input type="date" id="ts_end"></label>';
echo '<button id="ts_refresh">Refresh</button>';
echo '</div>';
echo '<div class="chart-container"><canvas id="timelineChart"></canvas></div>';
echo '<div class="chart-container"><canvas id="compareChart"></canvas></div>';
echo '<div class="chart-container"><canvas id="pageChart"></canvas></div>';
echo '<div class="chart-container"><canvas id="refererChart"></canvas></div>';

// Output raw log (last 100 lines)
echo '<h3>Raw Log (last 100 entries)</h3><pre>';
$last = array_slice($lines, -100);
foreach ($last as $line) echo htmlspecialchars($line);
echo '</pre>';

// --- IP Detail Section ---
echo <<<'IPHTML'
<hr style="border-color:#444;margin:2em 0;">
<h2 style="color:#4bc0c0;">IP & Visitor Hash per Visit</h2>
<div style="display:flex;gap:0.5em;align-items:center;flex-wrap:wrap;margin-bottom:0.75em;">
  <span style="color:#aaa;font-size:0.85em;">Preset:</span>
  <button class="ip-preset" data-days="0" style="font-size:0.85em;">Today</button>
  <button class="ip-preset" data-days="1" style="font-size:0.85em;">Yesterday</button>
  <button class="ip-preset" data-days="7" style="font-size:0.85em;">Last 7 days</button>
  <button class="ip-preset" data-days="30" style="font-size:0.85em;">Last 30 days</button>
  <button class="ip-preset" data-days="90" style="font-size:0.85em;">Last 90 days</button>
  <button class="ip-preset" data-days="all" style="font-size:0.85em;">All time</button>
</div>
<div style="display:flex;gap:0.5em;align-items:center;flex-wrap:wrap;margin-bottom:0.75em;">
  <label style="font-size:0.85em;">Custom from: <input type="date" id="ip_start" style="font-size:0.9em;"></label>
  <label style="font-size:0.85em;">to: <input type="date" id="ip_end" style="font-size:0.9em;"></label>
  <label style="font-size:0.85em;">Page filter: <select id="ip_page" style="font-size:0.9em;min-width:200px;"><option value="">All pages</option></select></label>
  <label style="font-size:0.85em;">Visitor hash: <input type="text" id="ip_visitor" placeholder="e.g. 9d2f..." style="font-size:0.9em;min-width:180px;"></label>
  <button id="ip_load" style="font-size:0.85em;">Load</button>
  <button id="export_filtered_btn" style="font-size:0.85em;background:#1a2a3a;color:#7fc0f0;border:1px solid #4b90c0;border-radius:4px;padding:4px 10px;cursor:pointer;margin-left:6px;">&#8595; Export filtered (CSV)</button>
  <span style="font-size:0.78em;color:#aaa;margin-left:6px;">Exports all rows matching every filter above.</span>
</div>
<div style="display:flex;gap:0.5em;align-items:center;flex-wrap:wrap;margin-bottom:0.75em;">
  <label style="font-size:0.85em;"><input type="checkbox" id="ip_exclude_mine"> Exclude my activity</label>
  <label style="font-size:0.85em;">My IP: <input type="text" id="mine_ip_input" placeholder="203.0.113.10" style="font-size:0.9em;min-width:140px;"></label>
  <button id="mine_add_ip" style="font-size:0.8em;">Add IP</button>
  <button id="mine_delete_ip_records" style="font-size:0.8em;background:#4a1f1f;color:#ffd7d7;border:1px solid #8c3b3b;border-radius:4px;">Delete records for this IP</button>
  <label style="font-size:0.85em;">My hash: <input type="text" id="mine_hash_input" placeholder="visitor hash" style="font-size:0.9em;min-width:140px;"></label>
  <button id="mine_add_hash" style="font-size:0.8em;">Add hash</button>
</div>
<div id="mine_tags" style="font-size:0.78em;color:#bbb;margin-bottom:0.5em;"></div>
<div id="ip_summary" style="font-size:0.8em;color:#aaa;margin-bottom:0.5em;"></div>
<div style="overflow-x:auto;">
<table id="ip_table" style="width:100%;border-collapse:collapse;font-size:0.82em;">
  <thead><tr style="background:#333;">
    <th style="padding:6px 8px;text-align:left;cursor:pointer;" data-col="0">Timestamp &#8597;</th>
    <th style="padding:6px 8px;text-align:left;cursor:pointer;" data-col="1">IP &#8597;</th>
    <th style="padding:6px 8px;text-align:left;">Country</th>
    <th style="padding:6px 8px;text-align:left;cursor:pointer;" data-col="2">Visitor Hash &#8597;</th>
    <th style="padding:6px 8px;text-align:left;cursor:pointer;" data-col="3">Page &#8597;</th>
    <th style="padding:6px 8px;text-align:left;">Referer</th>
    <th style="padding:6px 8px;text-align:left;">User Agent</th>
  </tr></thead>
  <tbody id="ip_tbody"><tr><td colspan="6" style="padding:8px;color:#888;">Select a time range above and click Load.</td></tr></tbody>
</table>
</div>
<h3 style="margin:1em 0 0.4em 0;color:#9fd6e5;">Visitor Journeys (grouped)</h3>
<div style="display:flex;gap:0.5em;align-items:center;flex-wrap:wrap;margin-bottom:0.4em;">
  <label style="font-size:0.82em;"><input type="checkbox" id="journey_repeat_only" checked> Show repeat visitors only</label>
</div>
<div style="overflow-x:auto;">
<table id="journey_table" style="width:100%;border-collapse:collapse;font-size:0.80em;">
  <thead><tr style="background:#2d3a40;">
    <th id="journeySortKeyBtn" style="padding:6px 8px;text-align:left;cursor:pointer;user-select:none;">Visitor Key <span id="journeySortKeyArrow">&#8597;</span></th>
    <th id="journeySortMineBtn" style="padding:6px 8px;text-align:left;cursor:pointer;user-select:none;">Mine? <span id="journeySortMineArrow">&#8597;</span></th>
    <th id="journeySortVisitsBtn" style="padding:6px 8px;text-align:left;cursor:pointer;user-select:none;">Visits <span id="journeySortVisitsArrow">&#8597;</span></th>
    <th id="journeySortUniqueBtn" style="padding:6px 8px;text-align:left;cursor:pointer;user-select:none;">Unique Pages <span id="journeySortUniqueArrow">&#8597;</span></th>
    <th id="journeySortFirstBtn" style="padding:6px 8px;text-align:left;cursor:pointer;user-select:none;">First Seen <span id="journeySortFirstArrow">&#8597;</span></th>
    <th id="journeySortLastBtn" style="padding:6px 8px;text-align:left;cursor:pointer;user-select:none;">Last Seen <span id="journeySortLastArrow">&#8597;</span></th>
    <th style="padding:6px 8px;text-align:left;">Country</th>
    <th style="padding:6px 8px;text-align:left;">IP(s)</th>
    <th style="padding:6px 8px;text-align:left;">Journey (sample)</th>
  </tr></thead>
  <tbody id="journey_tbody"><tr><td colspan="9" style="padding:8px;color:#888;">Load visit data to build journeys.</td></tr></tbody>
</table>
</div>
IPHTML;

echo '<script>';
echo 'var ipPageLabels = ' . json_encode($page_labels) . ';';
echo <<<'IPJS'
(function(){
  var pageSelect = document.getElementById("ip_page");
  var mineIps = [];
  var mineHashes = [];
  var lastRows = [];
  var mineIpsKey = "viewLogsOwnIps";
  var mineHashesKey = "viewLogsOwnHashes";
  var journeySortKey = "viewLogsJourneySort";
  var journeyRepeatOnlyKey = "viewLogsJourneyRepeatOnly";
  var journeySort = loadJourneySort();

  ipPageLabels.forEach(function(p){
    var o = document.createElement("option"); o.value = p; o.textContent = p; pageSelect.appendChild(o);
  });

  function loadMine(){
    try { mineIps = JSON.parse(localStorage.getItem(mineIpsKey) || "[]") || []; } catch(e){ mineIps = []; }
    try { mineHashes = JSON.parse(localStorage.getItem(mineHashesKey) || "[]") || []; } catch(e){ mineHashes = []; }
  }
  function saveMine(){
    localStorage.setItem(mineIpsKey, JSON.stringify(mineIps));
    localStorage.setItem(mineHashesKey, JSON.stringify(mineHashes));
  }
  function renderMineTags(){
    var box = document.getElementById("mine_tags");
    var parts = [];
    if(mineIps.length){ parts.push("IPs: " + mineIps.map(function(v){ return "<span data-rm-ip='" + escAttr(v) + "' style='cursor:pointer;color:#ffc66d;' title='Click to remove'>" + escHtml(v) + " ✕</span>"; }).join(" · ")); }
    if(mineHashes.length){ parts.push("Hashes: " + mineHashes.map(function(v){ return "<span data-rm-hash='" + escAttr(v) + "' style='cursor:pointer;color:#9fd6e5;' title='Click to remove'>" + escHtml(v) + " ✕</span>"; }).join(" · ")); }
    box.innerHTML = parts.length ? ("My activity markers — " + parts.join(" | ")) : "No personal markers yet. Add your own IP/hash or click an IP/hash in the table to mark as mine.";
  }
  function addMineIp(v){ if(!v) return; if(mineIps.indexOf(v) === -1){ mineIps.push(v); saveMine(); renderMineTags(); } }
  function addMineHash(v){ if(!v) return; if(mineHashes.indexOf(v) === -1){ mineHashes.push(v); saveMine(); renderMineTags(); } }
  function isMineRow(r){
    return (r.ip && mineIps.indexOf(r.ip) !== -1) || (r.visitor_id && mineHashes.indexOf(r.visitor_id) !== -1);
  }

  function saveJourneySort(){
    try { localStorage.setItem(journeySortKey, JSON.stringify(journeySort)); } catch(e) {}
  }
  function loadJourneySort(){
    try {
      var raw = localStorage.getItem(journeySortKey);
      if (raw) {
        var parsed = JSON.parse(raw) || {};
        var allowedCols = ["key", "mine", "visits", "uniquePages", "firstSeen", "lastSeen"];
        var col = allowedCols.indexOf(parsed.col) !== -1 ? parsed.col : "visits";
        var dir = parsed.dir === "asc" ? "asc" : "desc";
        return { col: col, dir: dir };
      }
    } catch(e) {}
    return { col: "visits", dir: "desc" };
  }
  function saveJourneyRepeatOnly(isChecked){
    try { localStorage.setItem(journeyRepeatOnlyKey, isChecked ? "1" : "0"); } catch(e) {}
  }
  function loadJourneyRepeatOnly(){
    try {
      var raw = localStorage.getItem(journeyRepeatOnlyKey);
      if (raw === "1") return true;
      if (raw === "0") return false;
    } catch(e) {}
    return true;
  }
  function updateJourneySortArrows(){
    var arrowMap = {
      key: document.getElementById("journeySortKeyArrow"),
      mine: document.getElementById("journeySortMineArrow"),
      visits: document.getElementById("journeySortVisitsArrow"),
      uniquePages: document.getElementById("journeySortUniqueArrow"),
      firstSeen: document.getElementById("journeySortFirstArrow"),
      lastSeen: document.getElementById("journeySortLastArrow")
    };
    Object.keys(arrowMap).forEach(function(k){
      if (!arrowMap[k]) return;
      arrowMap[k].innerHTML = (k === journeySort.col) ? (journeySort.dir === "asc" ? "&#9650;" : "&#9660;") : "&#8597;";
    });
  }
  function setJourneySort(col){
    var defaultDirByCol = {
      key: "asc",
      mine: "desc",
      visits: "desc",
      uniquePages: "desc",
      firstSeen: "desc",
      lastSeen: "desc"
    };
    if (journeySort.col === col) {
      journeySort.dir = journeySort.dir === "desc" ? "asc" : "desc";
    } else {
      journeySort.col = col;
      journeySort.dir = defaultDirByCol[col] || "desc";
    }
    saveJourneySort();
    updateJourneySortArrows();
    renderFromRows();
  }
  function setupJourneySortHandlers(){
    var bind = function(btnId, col){
      var btn = document.getElementById(btnId);
      if (!btn) return;
      btn.addEventListener("click", function(){ setJourneySort(col); });
    };
    bind("journeySortKeyBtn", "key");
    bind("journeySortMineBtn", "mine");
    bind("journeySortVisitsBtn", "visits");
    bind("journeySortUniqueBtn", "uniquePages");
    bind("journeySortFirstBtn", "firstSeen");
    bind("journeySortLastBtn", "lastSeen");
    updateJourneySortArrows();
  }

  function padZ(n){return String(n).padStart(2,"0");}
  function isoDate(d){return d.getFullYear()+"-"+padZ(d.getMonth()+1)+"-"+padZ(d.getDate());}

  document.querySelectorAll(".ip-preset").forEach(function(btn){
    btn.addEventListener("click", function(){
      var days = this.dataset.days;
      var today = new Date();
      var s = document.getElementById("ip_start");
      var e = document.getElementById("ip_end");
      e.value = isoDate(today);
      if(days === "all"){ s.value = ""; e.value = ""; }
      else if(days === "0"){ s.value = isoDate(today); }
      else if(days === "1"){
        var y = new Date(today); y.setDate(y.getDate()-1);
        s.value = isoDate(y); e.value = isoDate(y);
      } else {
        var past = new Date(today); past.setDate(past.getDate() - parseInt(days));
        s.value = isoDate(past);
      }
      loadIpData();
    });
  });

  document.getElementById("ip_load").addEventListener("click", loadIpData);

  document.getElementById("export_filtered_btn").addEventListener("click", function(){
    var start = document.getElementById("ip_start").value;
    var end   = document.getElementById("ip_end").value;
    var page  = document.getElementById("ip_page").value;
    var visitorHash = document.getElementById("ip_visitor").value.trim();
    var botFilterSelect = document.getElementById("botFilterSelect");
    var params = new URLSearchParams({ action: "export_csv" });
    if (start) params.set("start_date", start);
    if (end)   params.set("end_date",   end);
    if (page)  params.set("page",       page);
    if (visitorHash) params.set("visitor_id", visitorHash);
    params.set("bot_filter", botFilterSelect ? (botFilterSelect.value || "all") : "all");
    window.open(window.location.pathname + "?" + params.toString(), "_blank");
  });
  document.getElementById("ip_exclude_mine").addEventListener("change", renderFromRows);
  document.getElementById("journey_repeat_only").addEventListener("change", function(){
    saveJourneyRepeatOnly(this.checked);
    renderFromRows();
  });
  document.getElementById("mine_add_ip").addEventListener("click", function(e){ e.preventDefault(); addMineIp(document.getElementById("mine_ip_input").value.trim()); renderFromRows(); });
  document.getElementById("mine_delete_ip_records").addEventListener("click", function(e){
    e.preventDefault();
    var ip = document.getElementById("mine_ip_input").value.trim();
    if(!ip){
      alert("Enter an IP address first.");
      return;
    }
    var confirmMsg = "Delete all log records for IP " + ip + " from active and archived visits logs? This cannot be undone.";
    if(!window.confirm(confirmMsg)) return;
    var body = new URLSearchParams({ action: "delete_ip_records", ip: ip });
    fetch(window.location.pathname + "?ajax=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: body.toString()
    })
    .then(function(r){ return r.json(); })
    .then(function(resp){
      if(!resp || !resp.ok){
        alert((resp && resp.error) ? resp.error : "Deletion failed.");
        return;
      }
      var msg = "Deleted " + (resp.deleted_total || 0) + " record(s) for " + ip + " across " + (resp.files_touched || 0) + " file(s).";
      if(resp.errors && resp.errors.length){
        msg += "\nWarnings: " + resp.errors.join("; ");
      }
      alert(msg);
      loadIpData();
    })
    .catch(function(err){
      console.error(err);
      alert("Deletion failed due to a network/server error.");
    });
  });
  document.getElementById("mine_add_hash").addEventListener("click", function(e){ e.preventDefault(); addMineHash(document.getElementById("mine_hash_input").value.trim()); renderFromRows(); });
  document.getElementById("mine_tags").addEventListener("click", function(e){
    var ip = e.target.getAttribute("data-rm-ip");
    var hash = e.target.getAttribute("data-rm-hash");
    if(ip){ mineIps = mineIps.filter(function(v){ return v !== ip; }); saveMine(); renderMineTags(); renderFromRows(); }
    if(hash){ mineHashes = mineHashes.filter(function(v){ return v !== hash; }); saveMine(); renderMineTags(); renderFromRows(); }
  });

  var sortDir = {};
  document.querySelectorAll("#ip_table th[data-col]").forEach(function(th){
    th.addEventListener("click", function(){
      var col = parseInt(this.dataset.col);
      sortDir[col] = !sortDir[col];
      var tbody = document.getElementById("ip_tbody");
      var rows = Array.from(tbody.querySelectorAll("tr"));
      rows.sort(function(a,b){
        var av = (a.cells[col] ? a.cells[col].textContent : "").trim();
        var bv = (b.cells[col] ? b.cells[col].textContent : "").trim();
        return sortDir[col] ? av.localeCompare(bv) : bv.localeCompare(av);
      });
      rows.forEach(function(r){ tbody.appendChild(r); });
    });
  });

  function loadIpData(){
    var start = document.getElementById("ip_start").value;
    var end   = document.getElementById("ip_end").value;
    var page  = document.getElementById("ip_page").value;
    var visitorHash = document.getElementById("ip_visitor").value.trim();
    var params = new URLSearchParams({ajax:"1", action:"ip_details"});
    var botFilterSelect = document.getElementById("botFilterSelect");
    if(start) params.set("start_date", start);
    if(end)   params.set("end_date",   end);
    if(page)  params.set("page",       page);
    if(visitorHash) params.set("visitor_id", visitorHash);
    if(botFilterSelect) params.set("bot_filter", botFilterSelect.value || "all");
    document.getElementById("ip_summary").textContent = "Loading...";
    fetch(window.location.pathname + "?" + params.toString())
      .then(function(r){ return r.json(); })
      .then(function(rows){
        lastRows = rows || [];
        renderFromRows();
      }).catch(function(err){
        document.getElementById("ip_summary").textContent = "Error loading data.";
        console.error(err);
      });
  }

  function renderFromRows(){
    var rows = lastRows || [];
    var tbody = document.getElementById("ip_tbody");
    var journeyTbody = document.getElementById("journey_tbody");
    tbody.innerHTML = "";
    journeyTbody.innerHTML = "";

    if(!rows.length){
      tbody.innerHTML = "<tr><td colspan='7' style='padding:8px;color:#888;'>No results for selected period.</td></tr>";
      journeyTbody.innerHTML = "<tr><td colspan='9' style='padding:8px;color:#888;'>No journeys for selected period.</td></tr>";
      document.getElementById("ip_summary").textContent = "0 visits";
      return;
    }

    var excludeMine = document.getElementById("ip_exclude_mine").checked;
    var displayed = excludeMine ? rows.filter(function(r){ return !isMineRow(r); }) : rows.slice();

    if(!displayed.length){
      tbody.innerHTML = "<tr><td colspan='7' style='padding:8px;color:#888;'>All rows are excluded as your own activity.</td></tr>";
      journeyTbody.innerHTML = "<tr><td colspan='9' style='padding:8px;color:#888;'>No journeys after exclusion.</td></tr>";
      document.getElementById("ip_summary").textContent = "0 visits after exclusion";
      return;
    }

    var ips = {};
    var hashes = {};
    displayed.forEach(function(r){ ips[r.ip] = (ips[r.ip]||0)+1; hashes[r.visitor_id || "(empty)"] = (hashes[r.visitor_id || "(empty)"]||0)+1; });
    document.getElementById("ip_summary").textContent =
      displayed.length + " visit(s) · " + Object.keys(ips).length + " unique IP(s) · " + Object.keys(hashes).length + " unique hash(es)" + (excludeMine ? " · mine excluded" : "");

    // Helper to fetch country info for an IP (client-side, cached).
    // Returns an object { code: 'US', name: 'United States' } via callback.
    var countryCache = {};
    function fetchCountryRaw(ip, cb) {
      if (!ip) { cb(null); return; }
      if (countryCache[ip]) { cb(countryCache[ip]); return; }
      fetch("/api/ip_country_lookup.php?ip=" + encodeURIComponent(ip))
        .then(function(r){ return r.json(); })
        .then(function(data){
          var out = { code: '', name: '' };
          if (data && data.country) {
            var c = String(data.country).trim();
            if (c.length === 2) {
              out.code = c.toUpperCase();
              try {
                if (typeof Intl !== 'undefined' && Intl.DisplayNames) {
                  var dn = new Intl.DisplayNames(['en'], {type: 'region'});
                  out.name = dn.of(out.code) || out.code;
                } else {
                  out.name = out.code;
                }
              } catch(e){ out.name = out.code; }
            } else {
              // API returned a longer name (use as name)
              out.name = c;
              // attempt to extract a code if available in data.code or country_code
              if (data.country_code && String(data.country_code).trim().length === 2) out.code = String(data.country_code).trim().toUpperCase();
            }
          } else if (data && data.country_code) {
            out.code = String(data.country_code).trim().toUpperCase();
            try { if (typeof Intl !== 'undefined' && Intl.DisplayNames) out.name = new Intl.DisplayNames(['en'], {type:'region'}).of(out.code) || out.code; else out.name = out.code; } catch(e){ out.name = out.code; }
          }
          countryCache[ip] = out;
          cb(out);
        })
        .catch(function(){ cb(null); });
    }

    function getCountryCode(ip, cb) {
      fetchCountryRaw(ip, function(o){ cb(o && o.code ? o.code : ''); });
    }

    function getCountryName(ip, cb) {
      fetchCountryRaw(ip, function(o){ if (o) cb(o.name || o.code || ''); else cb(''); });
    }

    displayed.forEach(function(r){
      var tr = document.createElement("tr");
      tr.style.borderBottom = "1px solid #333";
      if(isMineRow(r)){ tr.style.background = "rgba(255, 205, 86, 0.12)"; }
      var ua = r.user_agent || "";
      var uaShort = ua.length > 60 ? ua.substring(0,60)+"…" : ua;
      var ref = r.referer || "";
      var refShort = ref.length > 40 ? ref.substring(0,40)+"…" : ref;
      var hashCount = hashes[r.visitor_id || "(empty)"] || 0;
      var countryCellId = "country-" + Math.random().toString(36).substr(2,9);
      tr.innerHTML =
        "<td style='padding:5px 8px;white-space:nowrap;'>" + escHtml(r.timestamp) + "</td>" +
        "<td style='padding:5px 8px;white-space:nowrap;font-family:monospace;cursor:pointer;' data-mark-ip='" + escAttr(r.ip || "") + "' title='Click to mark this IP as mine'>" + escHtml(r.ip) + "</td>" +
        "<td id='" + countryCellId + "' style='padding:5px 8px;white-space:nowrap;text-align:center;'></td>" +
        "<td style='padding:5px 8px;white-space:nowrap;font-family:monospace;cursor:pointer;' data-mark-hash='" + escAttr(r.visitor_id || "") + "' title='Click to mark this hash as mine'>" + escHtml(r.visitor_id || "") + (hashCount > 1 ? " <span style='color:#ffcd56;'>(" + hashCount + "x)</span>" : "") + "</td>" +
        "<td style='padding:5px 8px;'>" + escHtml(r.page) + "</td>" +
        "<td style='padding:5px 8px;' title='" + escAttr(ref) + "'>" + escHtml(refShort) + "</td>" +
        "<td style='padding:5px 8px;' title='" + escAttr(ua) + "'>" + escHtml(uaShort) + "</td>";
      tbody.appendChild(tr);
      getCountryCode(r.ip, function(code){
        var cell = document.getElementById(countryCellId);
        if(cell) cell.textContent = code;
      });
    });

    var groups = {};
    displayed.forEach(function(r){
      var key = (r.visitor_id && r.visitor_id !== "") ? r.visitor_id : ("ip:" + (r.ip || "unknown"));
      if(!groups[key]) groups[key] = { key:key, rows:[], ips:{}, pages:{} };
      groups[key].rows.push(r);
      groups[key].ips[r.ip || "(not logged)"] = true;
      groups[key].pages[r.page || ""] = true;
    });

    var list = Object.keys(groups).map(function(k){
      var g = groups[k];
      g.rows.sort(function(a,b){ return strcmpTime(a.timestamp, b.timestamp); });
      g.firstSeen = g.rows[0].timestamp;
      g.lastSeen = g.rows[g.rows.length-1].timestamp;
      g.visitCount = g.rows.length;
      g.uniquePages = Object.keys(g.pages).length;
      g.ipList = Object.keys(g.ips);
      g.isMine = g.ipList.some(function(ip){ return mineIps.indexOf(ip) !== -1; }) || (mineHashes.indexOf(g.key) !== -1);
      g.samplePath = buildSamplePath(g.rows.map(function(r){ return r.page || ""; }));
      return g;
    });
    list.sort(function(a,b){
      var cmp = 0;
      if (journeySort.col === "key") {
        cmp = String(a.key || "").localeCompare(String(b.key || ""));
      } else if (journeySort.col === "mine") {
        cmp = (a.isMine ? 1 : 0) - (b.isMine ? 1 : 0);
      } else if (journeySort.col === "uniquePages") {
        cmp = a.uniquePages - b.uniquePages;
      } else if (journeySort.col === "firstSeen") {
        cmp = strcmpTime(a.firstSeen, b.firstSeen);
      } else if (journeySort.col === "lastSeen") {
        cmp = strcmpTime(a.lastSeen, b.lastSeen);
      } else {
        cmp = a.visitCount - b.visitCount;
      }
      if (cmp !== 0) return journeySort.dir === "asc" ? cmp : -cmp;
      if (b.visitCount !== a.visitCount) return b.visitCount - a.visitCount;
      cmp = strcmpTime(b.lastSeen, a.lastSeen);
      if (cmp !== 0) return cmp;
      return String(a.key || "").localeCompare(String(b.key || ""));
    });

    var repeatOnly = document.getElementById("journey_repeat_only").checked;
    if(repeatOnly) list = list.filter(function(g){ return g.visitCount > 1; });

    if(!list.length){
      journeyTbody.innerHTML = "<tr><td colspan='8' style='padding:8px;color:#888;'>No journey groups match current filters.</td></tr>";
      return;
    }

    list.forEach(function(g){
      var tr = document.createElement("tr");
      tr.style.borderBottom = "1px solid #333";
      if(g.visitCount > 1){ tr.style.background = "rgba(75, 192, 192, 0.08)"; }
      if(g.isMine){ tr.style.background = "rgba(255, 205, 86, 0.10)"; }
      tr.innerHTML =
        "<td style='padding:5px 8px;font-family:monospace;'>" + escHtml(g.key) + "</td>" +
        "<td style='padding:5px 8px;'>" + (g.isMine ? "Yes" : "No") + "</td>" +
        "<td style='padding:5px 8px;'>" + g.visitCount + "</td>" +
        "<td style='padding:5px 8px;'>" + g.uniquePages + "</td>" +
        "<td style='padding:5px 8px;white-space:nowrap;'>" + escHtml(g.firstSeen) + "</td>" +
        "<td style='padding:5px 8px;white-space:nowrap;'>" + escHtml(g.lastSeen) + "</td>" +
        "<td id='country-group-" + escAttr(g.key) + "' style='padding:5px 8px;white-space:nowrap;text-align:left;'></td>" +
        "<td style='padding:5px 8px;font-family:monospace;'>" + escHtml(g.ipList.join(", ")) + "</td>" +
        "<td style='padding:5px 8px;'>" + escHtml(g.samplePath) + "</td>";
      journeyTbody.appendChild(tr);
      // populate country for the group's first IP (if any)
      (function(firstIp, key){
        if (!firstIp) return;
        getCountryName(firstIp, function(name){
          try {
            var el = document.getElementById('country-group-' + key);
            if (el) el.textContent = name || '';
          } catch(e){}
        });
      })(g.ipList && g.ipList.length ? g.ipList[0] : '', encodeURIComponent(String(g.key)));
    });
  }

  function buildSamplePath(pages){
    var seq = [];
    pages.forEach(function(p){
      if(!seq.length || seq[seq.length-1] !== p) seq.push(p);
    });
    if(seq.length > 6){ seq = seq.slice(0,6); seq.push("…"); }
    return seq.join("  ->  ");
  }

  function strcmpTime(a,b){
    return String(a || "").localeCompare(String(b || ""));
  }

  document.getElementById("ip_tbody").addEventListener("click", function(e){
    var ip = e.target.getAttribute("data-mark-ip");
    var hash = e.target.getAttribute("data-mark-hash");
    if(ip){ addMineIp(ip); renderFromRows(); }
    if(hash){ addMineHash(hash); renderFromRows(); }
  });

  function escHtml(s){ var d=document.createElement("div"); d.appendChild(document.createTextNode(s||"")); return d.innerHTML; }
  function escAttr(s){ return (s||"").replace(/"/g,"&quot;"); }

  loadMine();
  var repeatOnlyCheckbox = document.getElementById("journey_repeat_only");
  if (repeatOnlyCheckbox) repeatOnlyCheckbox.checked = loadJourneyRepeatOnly();
  setupJourneySortHandlers();
  renderMineTags();
})();
IPJS;
echo '</script>';

// Chart.js script
echo '<script>';
echo 'var dateFilterForm = document.getElementById("dateFilterForm");';
echo 'var botFilterSelect = document.getElementById("botFilterSelect");';
echo 'var currentAppliedBotFilter = ' . json_encode($bot_filter) . ';';
echo 'var dateFilterKey = "viewLogsDateFilter";';
echo 'var uvPanelStateKey = "viewLogsUvPanelOpen";';
echo 'function saveDateFilter(startDate, endDate, botFilter) {';
echo '  try {';
echo '    localStorage.setItem(dateFilterKey, JSON.stringify({ start_date: startDate || "", end_date: endDate || "", bot_filter: botFilter || "all" }));';
echo '  } catch(e) {}';
echo '}';
echo 'function loadDateFilter() {';
echo '  try {';
echo '    var raw = localStorage.getItem(dateFilterKey);';
echo '    return raw ? (JSON.parse(raw) || null) : null;';
echo '  } catch(e) {';
echo '    return null;';
echo '  }';
echo '}';
echo 'function syncFilterUrl(startDate, endDate, botFilter) {';
echo '  var urlParams = new URLSearchParams(window.location.search);';
echo '  if (startDate) urlParams.set("start_date", startDate); else urlParams.delete("start_date");';
echo '  if (endDate) urlParams.set("end_date", endDate); else urlParams.delete("end_date");';
echo '  if (botFilter && botFilter !== "all") urlParams.set("bot_filter", botFilter); else urlParams.delete("bot_filter");';
echo '  urlParams.delete("ajax");';
echo '  var query = urlParams.toString();';
echo '  var nextUrl = window.location.pathname + (query ? "?" + query : "");';
echo '  window.history.replaceState(null, "", nextUrl);';
echo '  return nextUrl;';
echo '}';
echo 'function saveUvPanelOpen(isOpen) {';
echo '  try { localStorage.setItem(uvPanelStateKey, isOpen ? "1" : "0"); } catch(e) {}';
echo '}';
echo 'function loadUvPanelOpen() {';
echo '  try {';
echo '    var raw = localStorage.getItem(uvPanelStateKey);';
echo '    if (raw === "1") return true;';
echo '    if (raw === "0") return false;';
echo '  } catch(e) {}';
echo '  return false;';
echo '}';
echo 'if (dateFilterForm) dateFilterForm.addEventListener("submit", function(e) {';
echo '    e.preventDefault();';
echo '    const form = e.target;';
echo '    const startDate = form.start_date.value;';
echo '    const endDate = form.end_date.value;';
echo '    const botFilter = botFilterSelect ? (botFilterSelect.value || "all") : "all";';
echo '    saveDateFilter(startDate, endDate, botFilter);';
echo '    const nextUrl = syncFilterUrl(startDate, endDate, botFilter);';
echo '    if (botFilter !== currentAppliedBotFilter) {';
echo '      window.location.assign(nextUrl);';
echo '      return;';
echo '    }';
echo '    const params = new URLSearchParams(window.location.search);';
echo '    params.set("start_date", startDate);';
echo '    params.set("end_date", endDate);';
echo '    params.set("bot_filter", botFilter);';
echo '    params.set("ajax", "1");';
echo '    fetch(window.location.pathname + "?" + params.toString())';
echo '        .then(response => response.text())';
echo '        .then(html => {';
echo '            document.getElementById("uniqueVisitorsTable").innerHTML = html;';
echo '            if(window.initUvTable) window.initUvTable();';
echo '            if(window.initPvdTable) window.initPvdTable();';
echo '        });';
echo '});';
echo 'if (dateFilterForm) {';
echo '  var urlParamsInit = new URLSearchParams(window.location.search);';
echo '  var hasUrlStart = urlParamsInit.has("start_date") && urlParamsInit.get("start_date") !== "";';
echo '  var hasUrlEnd = urlParamsInit.has("end_date") && urlParamsInit.get("end_date") !== "";';
echo '  var hasUrlBot = urlParamsInit.has("bot_filter") && urlParamsInit.get("bot_filter") !== "";';
echo '  if (hasUrlStart || hasUrlEnd || hasUrlBot) {';
echo '    saveDateFilter(dateFilterForm.start_date.value, dateFilterForm.end_date.value, botFilterSelect ? botFilterSelect.value : "all");';
echo '  } else {';
echo '    var storedFilter = loadDateFilter();';
echo '    if (storedFilter && (storedFilter.start_date || storedFilter.end_date || storedFilter.bot_filter)) {';
echo '      dateFilterForm.start_date.value = storedFilter.start_date || "";';
echo '      dateFilterForm.end_date.value = storedFilter.end_date || "";';
echo '      if (botFilterSelect) botFilterSelect.value = storedFilter.bot_filter || "all";';
echo '      dateFilterForm.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));';
echo '    }';
echo '  }';
echo '}';
echo 'window.initUvTable = function() {';
echo '  var toggle  = document.getElementById("uvToggle");';
echo '  var content = document.getElementById("uvContent");';
echo '  var mainWrap = document.getElementById("uvMainWrap");';
echo '  var pvdWrap  = document.getElementById("uvPvdWrap");';
echo '  var arrow   = document.getElementById("uvArrow");';
echo '  var sortBtn = document.getElementById("uvSortBtn");';
echo '  var sArrow  = document.getElementById("uvSortArrow");';
echo '  var tbody   = document.getElementById("uvBody");';
echo '  if (!toggle || !content) return;';
echo '  var dir = "desc";';
echo '  var initiallyOpen = loadUvPanelOpen();';
echo '  content.style.display = initiallyOpen ? "block" : "none";';
echo '  if (mainWrap) mainWrap.style.display = "none";';
echo '  if (pvdWrap) pvdWrap.style.display = initiallyOpen ? "block" : "none";';
echo '  arrow.innerHTML = initiallyOpen ? "&#9660;" : "&#9658;";';
echo '  toggle.onclick = function() {';
echo '    var open = content.style.display === "none";';
echo '    content.style.display = open ? "block" : "none";';
echo '    if (mainWrap) mainWrap.style.display = "none";';
echo '    if (pvdWrap) pvdWrap.style.display = open ? "block" : "none";';
echo '    arrow.innerHTML = open ? "&#9660;" : "&#9658;";';
echo '    saveUvPanelOpen(open);';
echo '  };';
echo '  if (sortBtn && tbody) {';
echo '    sortBtn.onclick = function() {';
echo '      dir = dir === "desc" ? "asc" : "desc";';
echo '      var rows = Array.from(tbody.querySelectorAll("tr"));';
echo '      rows.sort(function(a, b) {';
echo '        var ca = parseInt(a.getAttribute("data-count"), 10) || 0;';
echo '        var cb = parseInt(b.getAttribute("data-count"), 10) || 0;';
echo '        return dir === "asc" ? ca - cb : cb - ca;';
echo '      });';
echo '      rows.forEach(function(r) { tbody.appendChild(r); });';
echo '      sArrow.innerHTML = dir === "asc" ? "&#8593;" : "&#8595;";';
echo '    };';
echo '  }';
echo '};';
echo 'window.initUvTable();';
echo 'window.initPvdTable = function() {';
echo '  var table   = document.getElementById("pvdTable");';
echo '  if (!table) return;';
echo '  var tbody   = document.getElementById("pvdBody");';
echo '  var pSortBtn = document.getElementById("pvdPageSortBtn");';
echo '  var pArrow   = document.getElementById("pvdPageArrow");';
echo '  if (!tbody) return;';
echo '  var pageDir = "asc";';
echo '  var visitsDir = "desc";';
echo '  function setArrowState(active, dir) {';
echo '    if (pArrow) pArrow.innerHTML = active === "page" ? (dir === "asc" ? "&#8593;" : "&#8595;") : "&#8597;";';
echo '    var vArrow = document.getElementById("pvdVisitsArrow");';
echo '    if (vArrow) vArrow.innerHTML = active === "visits" ? (dir === "asc" ? "&#8593;" : "&#8595;") : "&#8597;";';
echo '  }';
echo '  function rebuildRows(rows) {';
echo '    while (tbody.firstChild) tbody.removeChild(tbody.firstChild);';
echo '    rows.forEach(function(row) { tbody.appendChild(row); });';
echo '  }';
echo '  if (pSortBtn) {';
echo '    pSortBtn.onclick = function() {';
echo '      pageDir = pageDir === "asc" ? "desc" : "asc";';
echo '      visitsDir = "desc";';
echo '      setArrowState("page", pageDir);';
echo '      var rows = Array.from(tbody.querySelectorAll("tr[data-page]"));';
echo '      rows.sort(function(a, b) {';
echo '        var pa = (a.getAttribute("data-page") || "").toLowerCase();';
echo '        var pb = (b.getAttribute("data-page") || "").toLowerCase();';
echo '        if (pa === pb) return 0;';
echo '        return pageDir === "asc" ? (pa > pb ? 1 : -1) : (pa < pb ? 1 : -1);';
echo '      });';
echo '      rebuildRows(rows);';
echo '    };';
echo '  }';
echo '  var vSortBtn = document.getElementById("pvdVisitsSortBtn");';
echo '  if (vSortBtn) {';
echo '    vSortBtn.onclick = function() {';
echo '      visitsDir = visitsDir === "desc" ? "asc" : "desc";';
echo '      pageDir = "asc";';
echo '      setArrowState("visits", visitsDir);';
echo '      var rows = Array.from(tbody.querySelectorAll("tr[data-page]"));';
echo '      rows.sort(function(a, b) {';
echo '        var va = parseInt(a.getAttribute("data-visits"), 10) || 0;';
echo '        var vb = parseInt(b.getAttribute("data-visits"), 10) || 0;';
echo '        return visitsDir === "asc" ? va - vb : vb - va;';
echo '      });';
echo '      rebuildRows(rows);';
echo '    };';
echo '  }';
echo '};';
echo 'window.initPvdTable();';
// Render empty chart; populate via AJAX
echo 'window.tsChart = new Chart(document.getElementById("timelineChart"), {';
echo '  type: "bar",';
echo '  data: { labels: [], datasets: [{ label: "Visits (selected pages)", data: [], backgroundColor: "rgba(75,192,192,0.25)", borderColor: "#4bc0c0", borderWidth: 1 }] },';
echo '  options: { plugins: { legend: { labels: { color: "#eee" } } }, scales: { x: { ticks: { color: "#eee" }, grid: { color: "#111" } }, y: { beginAtZero: true, ticks: { color: "#eee" }, grid: { color: "#111" } } }, responsive:true, maintainAspectRatio:false }';
echo '});';
echo 'new Chart(document.getElementById("pageChart"), {';
echo '  type: "bar",';
echo '  data: { labels: ' . json_encode($page_labels) . ', datasets: [{ label: "Page Views", data: ' . json_encode($page_data) . ', backgroundColor: "#ff6384" }] },';
echo '  options: { plugins: { legend: { display: false } }, scales: { x: { ticks: { color: "#eee" } }, y: { ticks: { color: "#eee" } } } }';
echo '});';
echo 'new Chart(document.getElementById("refererChart"), {';
echo '  type: "pie",';
echo '  data: { labels: ' . json_encode($referer_labels) . ', datasets: [{ label: "Referers", data: ' . json_encode($referer_data) . ', backgroundColor: ["#36a2eb","#ffcd56","#ff6384","#4bc0c0","#9966ff","#c9cbcf"] }] },';
echo '  options: { plugins: { legend: { labels: { color: "#eee" } } } }';
echo '});';
echo '</script>';

$pages_json = json_encode($page_labels);
$generic_pages_json = json_encode($generic_page_labels);
$exact_lang_pages_json = json_encode($exact_lang_page_labels);
$generic_lang_pages_json = json_encode($generic_lang_page_labels);
$top_pages = $page_labels;
// compute top 5 pages by page_views
arsort($page_views);
$top_pages = array_slice(array_keys($page_views), 0, 5);
$top_pages_json = json_encode(array_values($top_pages));

$top_generic_pages = array_slice(array_keys($generic_page_views), 0, 5);
$top_generic_pages_json = json_encode(array_values($top_generic_pages));

$top_exact_lang_pages = array_slice(array_keys($exact_lang_page_views), 0, 5);
$top_exact_lang_pages_json = json_encode(array_values($top_exact_lang_pages));

$top_generic_lang_pages = array_slice(array_keys($generic_lang_page_views), 0, 5);
$top_generic_lang_pages_json = json_encode(array_values($top_generic_lang_pages));

echo <<<HTML
</body></html>
<script>
(function(){
    function qs(id){return document.getElementById(id);} 
    function setCookie(name, value, days){
      var d = new Date();
      d.setTime(d.getTime() + (days*24*60*60*1000));
      document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
    }
    function getCookie(name){
      var key = name + '=';
      var parts = document.cookie.split(';');
      for(var i=0;i<parts.length;i++){
        var c = parts[i].trim();
        if(c.indexOf(key) === 0) return decodeURIComponent(c.substring(key.length));
      }
      return '';
    }

    var pageSelect = qs('ts_page');
    var pagesSelect = qs('ts_pages');
    var groupSelect = qs('ts_group');
    var startInput = qs('ts_start');
    var endInput = qs('ts_end');
    var refresh = qs('ts_refresh');
    var modeToggle = qs('ts_mode_toggle');
    var langToggle = qs('ts_lang_toggle');
    var langAllBtn = qs('ts_lang_all');
    var langEnBtn = qs('ts_lang_en');
    var langFrBtn = qs('ts_lang_fr');
    var langDeBtn = qs('ts_lang_de');
    var selectAllBtn = qs('ts_select_all');
    var resetBtn = qs('ts_reset');

    var exactPages = $pages_json || [];
    var genericPages = $generic_pages_json || [];
    var exactLangPages = $exact_lang_pages_json || [];
    var genericLangPages = $generic_lang_pages_json || [];
    var topPagesExact = $top_pages_json || [];
    var topPagesGeneric = $top_generic_pages_json || [];
    var topPagesExactLang = $top_exact_lang_pages_json || [];
    var topPagesGenericLang = $top_generic_lang_pages_json || [];
    var pageMode = 'generic';
    var langFold = false;
    var selectedLangs = []; // [] means all languages

    function pagesForMode(mode, fold){
      if (mode === 'generic') return fold ? genericLangPages : genericPages;
      return fold ? exactLangPages : exactPages;
    }
    function topPagesForMode(mode, fold){
      if (mode === 'generic') return fold ? topPagesGenericLang : topPagesGeneric;
      return fold ? topPagesExactLang : topPagesExact;
    }
    function modeSuffix(mode, fold){ return (mode === 'generic' ? 'generic' : 'exact') + (fold ? '_lang' : '_nolang'); }

    function detectLangClient(value){
      var s = String(value || '').trim();
      if(!s) return 'en';
      var q = s.indexOf('?');
      var path = q >= 0 ? s.substring(0, q) : s;
      var query = q >= 0 ? s.substring(q + 1) : '';

      if(query){
        try {
          var qp = new URLSearchParams(query);
          var qlang = (qp.get('lang') || '').toLowerCase();
          if(qlang === 'en' || qlang === 'fr' || qlang === 'de') return qlang;
        } catch(e) {}
      }
      path = path.replace(/\/+/g, '/');
      var m = path.match(/^\/(en|fr|de)(?=\/|$)/i);
      if(m) return m[1].toLowerCase();
      return 'en';
    }

    function langSet(){
      var out = {};
      selectedLangs.forEach(function(l){ out[l] = true; });
      return out;
    }

    function filterPagesBySelectedLang(pages){
      if(!selectedLangs.length) return pages.slice();
      var keep = langSet();
      return pages.filter(function(p){ return !!keep[detectLangClient(p)]; });
    }

    function normalizeGenericClient(p){
      var s = String(p || '').trim();
      if(!s) return '/';
      var q = s.indexOf('?');
      if(q >= 0) s = s.substring(0, q);
      s = s.replace(/\/+/g, '/');
      if(!s) s = '/';
      if(s.charAt(0) !== '/') s = '/' + s;
      if(s !== '/' && !/\.[a-z0-9]{1,8}$/i.test(s)) s = s.replace(/\/+$/, '') + '/';
      return s;
    }

    function foldLangClient(value){
      var s = String(value || '').trim();
      if(!s) return '/';
      var q = s.indexOf('?');
      var path = q >= 0 ? s.substring(0, q) : s;
      var query = q >= 0 ? s.substring(q + 1) : '';
      path = path.replace(/\/+/g, '/');
      if(!path) path = '/';
      if(path.charAt(0) !== '/') path = '/' + path;
      path = path.replace(/^\/(en|fr|de)(?=\/|$)/i, '');
      if(!path) path = '/';
      if(path.charAt(0) !== '/') path = '/' + path;
      if(query){
        var params = new URLSearchParams(query);
        params.delete('lang');
        query = params.toString();
      }
      return query ? (path + '?' + query) : path;
    }

    function remapSelectionForMode(values, mode, fold){
      var targetPages = filterPagesBySelectedLang(pagesForMode(mode, fold));
      var set = {};
      values.forEach(function(v){
        var mapped = mode === 'generic' ? normalizeGenericClient(v) : String(v || '');
        if (fold) mapped = foldLangClient(mapped);
        if(targetPages.indexOf(mapped) !== -1) set[mapped] = true;
      });
      return Object.keys(set);
    }

    function applySelected(selectEl, selectedValues){
      var wanted = {};
      (selectedValues || []).forEach(function(v){ wanted[v] = true; });
      Array.from(selectEl.options).forEach(function(o){ o.selected = !!wanted[o.value]; });
    }

    function repopulatePageOptions(selectedSingle, selectedMulti){
      var pages = filterPagesBySelectedLang(pagesForMode(pageMode, langFold));
      pageSelect.innerHTML = '<option value="">All pages</option>';
      pages.forEach(function(p){
        var opt=document.createElement('option');
        opt.value=p;
        opt.textContent=p;
        pageSelect.appendChild(opt);
      });

      pagesSelect.innerHTML = '';
      pages.forEach(function(p){
        var opt=document.createElement('option');
        opt.value=p;
        opt.textContent=p;
        opt.style.backgroundColor = '#111';
        opt.style.color = '#eee';
        pagesSelect.appendChild(opt);
      });

      if(selectedSingle && pages.indexOf(selectedSingle) !== -1){
        pageSelect.value = selectedSingle;
      } else {
        pageSelect.value = '';
      }
      applySelected(pagesSelect, selectedMulti || []);
    }

    function updateModeButton(){
      if(!modeToggle) return;
      modeToggle.textContent = pageMode === 'generic' ? 'Mode: Generic URLs' : 'Mode: Exact URLs + Queries';
    }

    function updateLangButton(){
      if(!langToggle) return;
      langToggle.textContent = langFold ? 'Lang fold: On' : 'Lang fold: Off';
    }

    function updateLanguageButtons(){
      var btns = [langAllBtn, langEnBtn, langFrBtn, langDeBtn];
      btns.forEach(function(b){ if(b){ b.style.opacity = '0.7'; b.style.boxShadow = 'none'; } });
      if(!selectedLangs.length){
        if(langAllBtn){ langAllBtn.style.opacity = '1'; langAllBtn.style.boxShadow = '0 0 0 1px #7fc0f0 inset'; }
      } else {
        selectedLangs.forEach(function(l){
          var btn = l === 'en' ? langEnBtn : (l === 'fr' ? langFrBtn : (l === 'de' ? langDeBtn : null));
          if(btn){ btn.style.opacity = '1'; btn.style.boxShadow = '0 0 0 1px #fff inset'; }
        });
      }
    }

    function selectAllCurrentModePages(){
      Array.from(pagesSelect.options).forEach(function(o){ o.selected = true; });
    }

    function resetTsControls(){
      var defaults = topPagesForMode(pageMode, langFold);
      repopulatePageOptions('', defaults);
      groupSelect.value = 'day';
      startInput.value = '';
      endInput.value = '';
      saveTsPrefs();
      fetchTimeseries();
    }

    function saveTsPrefs(){
      var selectedPages = Array.from(pagesSelect.selectedOptions).map(function(o){ return o.value; });
      var suffix = modeSuffix(pageMode, langFold);
      try {
        localStorage.setItem('viewlogs_ts_mode', pageMode);
        localStorage.setItem('viewlogs_ts_lang_fold', langFold ? '1' : '0');
        localStorage.setItem('viewlogs_ts_langs', JSON.stringify(selectedLangs));
        localStorage.setItem('viewlogs_ts_page_' + suffix, pageSelect.value || '');
        localStorage.setItem('viewlogs_ts_pages_' + suffix, JSON.stringify(selectedPages));
        localStorage.setItem('viewlogs_ts_group', groupSelect.value || 'day');
        localStorage.setItem('viewlogs_ts_start', startInput.value || '');
        localStorage.setItem('viewlogs_ts_end', endInput.value || '');
      } catch(e) {
        try {
          setCookie('viewlogs_ts_mode', pageMode, 60);
          setCookie('viewlogs_ts_lang_fold', langFold ? '1' : '0', 60);
          setCookie('viewlogs_ts_langs', JSON.stringify(selectedLangs), 60);
          setCookie('viewlogs_ts_page_' + suffix, pageSelect.value || '', 60);
          setCookie('viewlogs_ts_pages_' + suffix, JSON.stringify(selectedPages), 60);
          setCookie('viewlogs_ts_group', groupSelect.value || 'day', 60);
          setCookie('viewlogs_ts_start', startInput.value || '', 60);
          setCookie('viewlogs_ts_end', endInput.value || '', 60);
        } catch(e2){}
        console.warn('saveTsPrefs failed to write localStorage, falling back to cookies', e);
      }
    }

    function restoreTsPrefs(){
      var restoredAny = false;
      try {
        var savedMode = localStorage.getItem('viewlogs_ts_mode') || getCookie('viewlogs_ts_mode');
        if(savedMode === 'generic' || savedMode === 'exact') pageMode = savedMode;
        var savedLangFold = localStorage.getItem('viewlogs_ts_lang_fold') || getCookie('viewlogs_ts_lang_fold');
        langFold = savedLangFold === '1';

        var savedLangsRaw = localStorage.getItem('viewlogs_ts_langs') || getCookie('viewlogs_ts_langs');
        if(savedLangsRaw){
          try {
            var parsedLangs = JSON.parse(savedLangsRaw);
            if(Array.isArray(parsedLangs)){
              selectedLangs = parsedLangs.filter(function(l){ return l === 'en' || l === 'fr' || l === 'de'; });
            }
          } catch(e) {}
        }

        var suffix = modeSuffix(pageMode, langFold);
        var savedPage = localStorage.getItem('viewlogs_ts_page_' + suffix) || getCookie('viewlogs_ts_page_' + suffix);
        var savedPagesRaw = localStorage.getItem('viewlogs_ts_pages_' + suffix) || getCookie('viewlogs_ts_pages_' + suffix);
        var savedPages = [];
        if(savedPagesRaw){
          try {
            var parsed = JSON.parse(savedPagesRaw);
            if(Array.isArray(parsed)) savedPages = parsed;
          } catch(e) {}
        }

        repopulatePageOptions(savedPage || '', savedPages);
        if((savedPage && savedPage !== '') || (savedPages && savedPages.length)) restoredAny = true;

        var savedGroup = localStorage.getItem('viewlogs_ts_group') || getCookie('viewlogs_ts_group');
        if(savedGroup){ groupSelect.value = savedGroup; restoredAny = true; }
        var savedStart = localStorage.getItem('viewlogs_ts_start') || getCookie('viewlogs_ts_start');
        if(savedStart){ startInput.value = savedStart; restoredAny = true; }
        var savedEnd = localStorage.getItem('viewlogs_ts_end') || getCookie('viewlogs_ts_end');
        if(savedEnd){ endInput.value = savedEnd; restoredAny = true; }
      } catch(e) { console.warn('restoreTsPrefs failed', e); }
      updateModeButton();
      updateLangButton();
      updateLanguageButtons();
      return restoredAny;
    }

    var restored = restoreTsPrefs();
    if(!restored){
      repopulatePageOptions('', topPagesForMode(pageMode, langFold));
      updateModeButton();
      updateLangButton();
      updateLanguageButtons();
    }

    function collapsePagesSelect(){
      pagesSelect.size = 1;
      pagesSelect.style.maxHeight = '42px';
      pagesSelect.style.overflowY = 'hidden';
      pagesSelect.style.zIndex = '50';
    }

    function expandPagesSelect(){
      var visible = Math.min(Math.max(pagesSelect.options.length, 6), 20);
      pagesSelect.size = visible;
      pagesSelect.style.maxHeight = '520px';
      pagesSelect.style.overflowY = 'auto';
      pagesSelect.style.zIndex = '200';
    }

    collapsePagesSelect();
    pagesSelect.addEventListener('mousedown', function(e){
      if(pagesSelect.size === 1){
        e.preventDefault();
        expandPagesSelect();
        pagesSelect.focus();
      }
    });
    pagesSelect.addEventListener('focus', expandPagesSelect);
    pagesSelect.addEventListener('blur', collapsePagesSelect);

    function palette(n){ var cols=[]; var base=['#36a2eb','#ffcd56','#ff6384','#4bc0c0','#9966ff','#c9cbcf','#ff9f40','#8dd3c7','#bebada','#fb8072']; for(var i=0;i<n;i++){ cols.push(base[i % base.length]); } return cols; }

    function fetchTimeseries(){
        var page = pageSelect.value;
        var pagesMulti = Array.from(pagesSelect.selectedOptions).map(function(o){return o.value;});
        var group = groupSelect.value;
        var start = startInput.value;
        var end = endInput.value;
        var botFilter = botFilterSelect ? (botFilterSelect.value || 'all') : 'all';
      saveTsPrefs();
        var params = new URLSearchParams({ ajax:1, action:'timeseries', group:group });
        params.set('page_mode', pageMode);
        params.set('lang_fold', langFold ? '1' : '0');
        if(selectedLangs.length) params.set('lang_filters', selectedLangs.join(','));
        if(page) params.set('page', page);
        if(pagesMulti.length) params.set('pages', pagesMulti.join(','));
        if(start) params.set('start_date', start);
        if(end) params.set('end_date', end);
        params.set('bot_filter', botFilter);
        console.log('fetchTimeseries', { page_mode: pageMode, lang_fold: langFold, lang_filters: selectedLangs, page: page, pages: pagesMulti, group: group, start: start, end: end, bot_filter: botFilter, params: params.toString() });
        fetch(window.location.pathname + '?' + params.toString())
          .then(function(r){ return r.json(); })
          .then(function(json){
            if(json.datasets){
              var labels = json.labels || [];
              var cols = palette(json.datasets.length);
              var datasets = json.datasets.map(function(ds, idx){ return { label: ds.label, data: ds.data, backgroundColor: cols[idx], borderColor: cols[idx] }; });
              if(window.compareChart){ window.compareChart.data.labels = labels; window.compareChart.data.datasets = datasets; window.compareChart.update(); }
              if(window.tsChart){
                window.tsChart.data.labels = labels;
                if(page){
                  window.tsChart.data.datasets[0].label = page + ' visits';
                  window.tsChart.data.datasets[0].data = (json.datasets[0] && json.datasets[0].data) ? json.datasets[0].data : [];
                } else {
                  var totals = labels.map(function(_, i){
                    var sum = 0;
                    json.datasets.forEach(function(ds){ sum += Number((ds.data && ds.data[i]) || 0); });
                    return sum;
                  });
                  window.tsChart.data.datasets[0].label = 'Visits (selected pages)';
                  window.tsChart.data.datasets[0].data = totals;
                }
                window.tsChart.update();
              }
            } else {
              var labels = json.labels || [];
              var data = json.data || [];
              if(window.tsChart){ window.tsChart.data.labels = labels; window.tsChart.data.datasets[0].label = page ? (page + ' visits') : 'Visits'; window.tsChart.data.datasets[0].data = data; window.tsChart.update(); }
            }
          }).catch(function(err){ console.error('timeseries fetch error', err); });
    }

    window.compareChart = new Chart(document.getElementById('compareChart'), { type: 'bar', data: { labels: [], datasets: [] }, options: { responsive:true, plugins:{ legend:{ labels:{ color:'#eee' } } }, scales:{ x:{ ticks:{ color:'#eee' } }, y:{ ticks:{ color:'#eee' } } } } });

    [pageSelect, pagesSelect, groupSelect, startInput, endInput].forEach(function(el){
      el.addEventListener('change', saveTsPrefs);
    });
    if(modeToggle){
      modeToggle.addEventListener('click', function(e){
        e.preventDefault();
        var oldSingle = pageSelect.value || '';
        var oldMulti = Array.from(pagesSelect.selectedOptions).map(function(o){ return o.value; });
        pageMode = pageMode === 'generic' ? 'exact' : 'generic';
        var remappedSingle = remapSelectionForMode(oldSingle ? [oldSingle] : [], pageMode, langFold);
        var remappedMulti = remapSelectionForMode(oldMulti, pageMode, langFold);
        if(!remappedMulti.length) remappedMulti = topPagesForMode(pageMode, langFold);
        repopulatePageOptions(remappedSingle.length ? remappedSingle[0] : '', remappedMulti);
        updateModeButton();
        saveTsPrefs();
        fetchTimeseries();
      });
    }
    if(langToggle){
      langToggle.addEventListener('click', function(e){
        e.preventDefault();
        var oldSingle = pageSelect.value || '';
        var oldMulti = Array.from(pagesSelect.selectedOptions).map(function(o){ return o.value; });
        langFold = !langFold;
        var remappedSingle = remapSelectionForMode(oldSingle ? [oldSingle] : [], pageMode, langFold);
        var remappedMulti = remapSelectionForMode(oldMulti, pageMode, langFold);
        if(!remappedMulti.length) remappedMulti = topPagesForMode(pageMode, langFold);
        repopulatePageOptions(remappedSingle.length ? remappedSingle[0] : '', remappedMulti);
        updateLangButton();
        saveTsPrefs();
        fetchTimeseries();
      });
    }
    if(langAllBtn){
      langAllBtn.addEventListener('click', function(e){
        e.preventDefault();
        selectedLangs = [];
        var oldSingle = pageSelect.value || '';
        var oldMulti = Array.from(pagesSelect.selectedOptions).map(function(o){ return o.value; });
        var remappedSingle = remapSelectionForMode(oldSingle ? [oldSingle] : [], pageMode, langFold);
        var remappedMulti = remapSelectionForMode(oldMulti, pageMode, langFold);
        if(!remappedMulti.length) remappedMulti = topPagesForMode(pageMode, langFold);
        repopulatePageOptions(remappedSingle.length ? remappedSingle[0] : '', remappedMulti);
        updateLanguageButtons();
        saveTsPrefs();
        fetchTimeseries();
      });
    }
    function toggleSingleLanguage(lang){
      var idx = selectedLangs.indexOf(lang);
      if(idx === -1) selectedLangs.push(lang); else selectedLangs.splice(idx, 1);
      if(selectedLangs.length === 3){
        selectedLangs = [];
      }
      var oldSingle = pageSelect.value || '';
      var oldMulti = Array.from(pagesSelect.selectedOptions).map(function(o){ return o.value; });
      var remappedSingle = remapSelectionForMode(oldSingle ? [oldSingle] : [], pageMode, langFold);
      var remappedMulti = remapSelectionForMode(oldMulti, pageMode, langFold);
      if(!remappedMulti.length) remappedMulti = topPagesForMode(pageMode, langFold);
      repopulatePageOptions(remappedSingle.length ? remappedSingle[0] : '', remappedMulti);
      updateLanguageButtons();
      saveTsPrefs();
      fetchTimeseries();
    }
    if(langEnBtn){ langEnBtn.addEventListener('click', function(e){ e.preventDefault(); toggleSingleLanguage('en'); }); }
    if(langFrBtn){ langFrBtn.addEventListener('click', function(e){ e.preventDefault(); toggleSingleLanguage('fr'); }); }
    if(langDeBtn){ langDeBtn.addEventListener('click', function(e){ e.preventDefault(); toggleSingleLanguage('de'); }); }
    if(selectAllBtn){
      selectAllBtn.addEventListener('click', function(e){
        e.preventDefault();
        selectAllCurrentModePages();
        saveTsPrefs();
        fetchTimeseries();
      });
    }
    if(resetBtn){
      resetBtn.addEventListener('click', function(e){
        e.preventDefault();
        resetTsControls();
      });
    }
    refresh.addEventListener('click', function(e){ e.preventDefault(); fetchTimeseries(); });
    fetchTimeseries();
})();
</script>
HTML;
