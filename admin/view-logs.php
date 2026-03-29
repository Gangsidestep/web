<?php
// Session-based admin authentication (avoids browser basic-auth popups).
session_start();
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

  return ['is_bot' => false, 'reason' => ''];
}

function visit_matches_bot_filter($visit, $mode) {
  $mode = get_bot_filter_mode($mode);
  if ($mode === 'all') return true;
  $info = detect_obvious_bot($visit);
  return $mode === 'bots' ? !empty($info['is_bot']) : empty($info['is_bot']);
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

    // Timeseries endpoint: return JSON of counts for a specific page grouped by hour/day/week
    if (isset($_GET['action']) && $_GET['action'] === 'timeseries') {
        $start_date = isset($_GET['start_date']) && $_GET['start_date'] !== '' ? convertDate($_GET['start_date']) : null;
        $end_date = isset($_GET['end_date']) && $_GET['end_date'] !== '' ? convertDate($_GET['end_date']) : null;
        $group = $_GET['group'] ?? 'day';
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
                $p = $v['page'] ?? '';
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
            $p = $v['page'] ?? '';
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
$visits = [];
$page_views = [];
$referers = [];
$daily_visits = [];
foreach ($lines as $line) {
    $data = json_decode($line, true);
    if (!$data) continue;
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
</div>
<div style="display:flex;gap:0.5em;align-items:center;flex-wrap:wrap;margin-bottom:0.75em;">
  <label style="font-size:0.85em;"><input type="checkbox" id="ip_exclude_mine"> Exclude my activity</label>
  <label style="font-size:0.85em;">My IP: <input type="text" id="mine_ip_input" placeholder="203.0.113.10" style="font-size:0.9em;min-width:140px;"></label>
  <button id="mine_add_ip" style="font-size:0.8em;">Add IP</button>
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
    <th style="padding:6px 8px;text-align:left;">IP(s)</th>
    <th style="padding:6px 8px;text-align:left;">Journey (sample)</th>
  </tr></thead>
  <tbody id="journey_tbody"><tr><td colspan="8" style="padding:8px;color:#888;">Load visit data to build journeys.</td></tr></tbody>
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
  document.getElementById("ip_exclude_mine").addEventListener("change", renderFromRows);
  document.getElementById("journey_repeat_only").addEventListener("change", function(){
    saveJourneyRepeatOnly(this.checked);
    renderFromRows();
  });
  document.getElementById("mine_add_ip").addEventListener("click", function(e){ e.preventDefault(); addMineIp(document.getElementById("mine_ip_input").value.trim()); renderFromRows(); });
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
      journeyTbody.innerHTML = "<tr><td colspan='8' style='padding:8px;color:#888;'>No journeys for selected period.</td></tr>";
      document.getElementById("ip_summary").textContent = "0 visits";
      return;
    }

    var excludeMine = document.getElementById("ip_exclude_mine").checked;
    var displayed = excludeMine ? rows.filter(function(r){ return !isMineRow(r); }) : rows.slice();

    if(!displayed.length){
      tbody.innerHTML = "<tr><td colspan='7' style='padding:8px;color:#888;'>All rows are excluded as your own activity.</td></tr>";
      journeyTbody.innerHTML = "<tr><td colspan='8' style='padding:8px;color:#888;'>No journeys after exclusion.</td></tr>";
      document.getElementById("ip_summary").textContent = "0 visits after exclusion";
      return;
    }

    var ips = {};
    var hashes = {};
    displayed.forEach(function(r){ ips[r.ip] = (ips[r.ip]||0)+1; hashes[r.visitor_id || "(empty)"] = (hashes[r.visitor_id || "(empty)"]||0)+1; });
    document.getElementById("ip_summary").textContent =
      displayed.length + " visit(s) · " + Object.keys(ips).length + " unique IP(s) · " + Object.keys(hashes).length + " unique hash(es)" + (excludeMine ? " · mine excluded" : "");

    // Helper to fetch country code for an IP (client-side, free API, with cache)
    var countryCache = {};
    function fetchCountry(ip, cb) {
      if (!ip) { cb(""); return; }
      if (countryCache[ip]) { cb(countryCache[ip]); return; }
      fetch("/php/ip_country_lookup.php?ip=" + encodeURIComponent(ip))
        .then(function(r){ return r.json(); })
        .then(function(data){
          var code = (data && data.country && data.country.length === 2) ? data.country : "";
          countryCache[ip] = code;
          cb(code);
        })
        .catch(function(){ cb(""); });
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
      fetchCountry(r.ip, function(code){
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
        "<td style='padding:5px 8px;font-family:monospace;'>" + escHtml(g.ipList.join(", ")) + "</td>" +
        "<td style='padding:5px 8px;'>" + escHtml(g.samplePath) + "</td>";
      journeyTbody.appendChild(tr);
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
echo '  type: "line",';
echo '  data: { labels: [], datasets: [{ label: "Visits", data: [], borderColor: "#4bc0c0", backgroundColor: "rgba(75,192,192,0.2)", fill: true }] },';
echo '  options: { plugins: { legend: { labels: { color: "#eee" } } }, scales: { x: { ticks: { color: "#eee" } }, y: { ticks: { color: "#eee" } } } }';
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
$top_pages = $page_labels;
// compute top 5 pages by page_views
arsort($page_views);
$top_pages = array_slice(array_keys($page_views), 0, 5);
$top_pages_json = json_encode(array_values($top_pages));

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
    // Populate pages list from existing page labels
    var pages = $pages_json || [];
    pageSelect.innerHTML = '<option value="">All pages</option>';
    pages.forEach(function(p){ var opt=document.createElement('option'); opt.value=p; opt.textContent=p; pageSelect.appendChild(opt); });
    var topPages = $top_pages_json || [];
    pages.forEach(function(p){
      var opt=document.createElement('option');
      opt.value=p;
      opt.textContent=p;
      opt.style.backgroundColor = '#111';
      opt.style.color = '#eee';
      pagesSelect.appendChild(opt);
    });

    function saveTsPrefs(){
      var selectedPages = Array.from(pagesSelect.selectedOptions).map(function(o){ return o.value; }).slice(0, 30);
      setCookie('viewlogs_ts_page', pageSelect.value || '', 60);
      setCookie('viewlogs_ts_pages', JSON.stringify(selectedPages), 60);
      setCookie('viewlogs_ts_group', groupSelect.value || 'day', 60);
      setCookie('viewlogs_ts_start', startInput.value || '', 60);
      setCookie('viewlogs_ts_end', endInput.value || '', 60);
    }

    function restoreTsPrefs(){
      var restoredAny = false;
      var savedPage = getCookie('viewlogs_ts_page');
      if(savedPage !== ''){
        Array.from(pageSelect.options).forEach(function(o){ if(o.value === savedPage) o.selected = true; });
        restoredAny = true;
      }

      var savedPagesRaw = getCookie('viewlogs_ts_pages');
      if(savedPagesRaw){
        try {
          var savedPages = JSON.parse(savedPagesRaw);
          if(Array.isArray(savedPages) && savedPages.length){
            Array.from(pagesSelect.options).forEach(function(o){ o.selected = savedPages.indexOf(o.value) !== -1; });
            restoredAny = true;
          }
        } catch(e) {}
      }

      var savedGroup = getCookie('viewlogs_ts_group');
      if(savedGroup){ groupSelect.value = savedGroup; restoredAny = true; }
      var savedStart = getCookie('viewlogs_ts_start');
      if(savedStart){ startInput.value = savedStart; restoredAny = true; }
      var savedEnd = getCookie('viewlogs_ts_end');
      if(savedEnd){ endInput.value = savedEnd; restoredAny = true; }

      return restoredAny;
    }

    var restored = restoreTsPrefs();
    if(!restored){
      Array.from(pagesSelect.options).forEach(function(o){ if(topPages.indexOf(o.value) !== -1) o.selected = true; });
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
        if(page) params.set('page', page);
        if(pagesMulti.length) params.set('pages', pagesMulti.join(','));
        if(start) params.set('start_date', start);
        if(end) params.set('end_date', end);
        params.set('bot_filter', botFilter);
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
    refresh.addEventListener('click', function(e){ e.preventDefault(); fetchTimeseries(); });
    fetchTimeseries();
})();
</script>
HTML;
