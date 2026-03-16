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

    // Convert dd.mm.yyyy to yyyy-mm-dd for comparison
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
            $date = substr($ts, 0, 10);
            if ($start_date && $date < $start_date) continue;
            if ($end_date   && $date > $end_date)   continue;
            $p = $v['page'] ?? '';
            if ($filter_page !== '' && $p !== $filter_page) continue;
        $visitor_id = $v['visitor_id'] ?? '';
        if ($filter_visitor !== '' && $visitor_id !== $filter_visitor) continue;
            $results[] = [
                'timestamp'  => $ts,
                'ip'         => $v['ip'] ?? '(not logged)',
                'page'       => $p,
          'visitor_id' => $visitor_id,
                'referer'    => $v['referer'] ?? '',
                'user_agent' => $v['user_agent'] ?? '',
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
    echo '<h2>Unique Visitors Per Page</h2>';
    echo '<table><thead><tr><th>Page</th><th>Unique Visitors</th></tr></thead><tbody>';
    if (!empty($unique_visitors_per_page)) {
        foreach ($unique_visitors_per_page as $page => $visitors) {
            echo '<tr><td>' . htmlspecialchars($page) . '</td><td>' . count($visitors) . '</td></tr>';
        }
    } else {
        echo '<tr><td colspan="2">No data for selected date range.</td></tr>';
    }
    echo '</tbody></table>';

    $daily_page_views = [];
    foreach ($visits as $data) {
        $date = substr($data['timestamp'], 0, 10);
        $page = $data['page'];
        if (!isset($daily_page_views[$date])) $daily_page_views[$date] = [];
        $daily_page_views[$date][$page] = ($daily_page_views[$date][$page] ?? 0) + 1;
    }
    echo '<h3>Pages Visited Per Day</h3>';
    echo '<div style="overflow-x:auto; max-width:100vw;">';
    echo '<table style="background:#111;color:#eee;border-radius:6px;padding:1em;width:100%;min-width:400px;">';
    echo '<tr><th>Date</th><th>Page</th><th>Visits</th></tr>';
    foreach ($daily_page_views as $date => $pages) {
        foreach ($pages as $page => $count) {
            echo '<tr><td>' . htmlspecialchars($date) . '</td><td>' . htmlspecialchars($page) . '</td><td>' . $count . '</td></tr>';
        }
    }
    echo '</table></div>';
    exit;
}

?>
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Log Viewer</title>
<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
body { font-family: Arial, sans-serif; background: #222; color: #eee; }
.chart-container { background: #111; padding: 1em; border-radius: 6px; margin-bottom: 2em; min-height: 320px; }
canvas { min-height: 300px; width: 100% !important; display: block; }
pre { background: #111; padding: 1em; border-radius: 6px; overflow-x: auto; }
select,button { font-size: 1em; }
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
$visits = [];
$page_views = [];
$referers = [];
$daily_visits = [];
foreach ($lines as $line) {
    $data = json_decode($line, true);
    if (!$data) continue;
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
echo ' <button type="submit">Filter</button>';
echo '</form>';
echo '<div id="uniqueVisitorsTable">';
echo '<h2>Unique Visitors Per Page</h2>';
echo '<table><thead><tr><th>Page</th><th>Unique Visitors</th></tr></thead><tbody>';
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
foreach ($unique_visitors_per_page as $page => $visitors) {
    echo '<tr><td>' . htmlspecialchars($page) . '</td><td>' . count($visitors) . '</td></tr>';
}
echo '</tbody></table></div>';

// Chart containers
echo '<div style="margin:0 0 1em 0; display:flex; gap:0.5em; align-items:center; flex-wrap:wrap;">';
echo '<label>Page (single): <select id="ts_page" style="min-width:320px;"></select></label>';
echo '<label>Compare pages: <select id="ts_pages" multiple size="4" style="min-width:320px;max-width:600px;"></select></label>';
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
    <th style="padding:6px 8px;text-align:left;">Visitor Key</th>
    <th style="padding:6px 8px;text-align:left;">Mine?</th>
    <th style="padding:6px 8px;text-align:left;">Visits</th>
    <th style="padding:6px 8px;text-align:left;">Unique Pages</th>
    <th style="padding:6px 8px;text-align:left;">First Seen</th>
    <th style="padding:6px 8px;text-align:left;">Last Seen</th>
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
  document.getElementById("journey_repeat_only").addEventListener("change", renderFromRows);
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
    if(start) params.set("start_date", start);
    if(end)   params.set("end_date",   end);
    if(page)  params.set("page",       page);
    if(visitorHash) params.set("visitor_id", visitorHash);
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
      tbody.innerHTML = "<tr><td colspan='6' style='padding:8px;color:#888;'>No results for selected period.</td></tr>";
      journeyTbody.innerHTML = "<tr><td colspan='8' style='padding:8px;color:#888;'>No journeys for selected period.</td></tr>";
      document.getElementById("ip_summary").textContent = "0 visits";
      return;
    }

    var excludeMine = document.getElementById("ip_exclude_mine").checked;
    var displayed = excludeMine ? rows.filter(function(r){ return !isMineRow(r); }) : rows.slice();

    if(!displayed.length){
      tbody.innerHTML = "<tr><td colspan='6' style='padding:8px;color:#888;'>All rows are excluded as your own activity.</td></tr>";
      journeyTbody.innerHTML = "<tr><td colspan='8' style='padding:8px;color:#888;'>No journeys after exclusion.</td></tr>";
      document.getElementById("ip_summary").textContent = "0 visits after exclusion";
      return;
    }

    var ips = {};
    var hashes = {};
    displayed.forEach(function(r){ ips[r.ip] = (ips[r.ip]||0)+1; hashes[r.visitor_id || "(empty)"] = (hashes[r.visitor_id || "(empty)"]||0)+1; });
    document.getElementById("ip_summary").textContent =
      displayed.length + " visit(s) · " + Object.keys(ips).length + " unique IP(s) · " + Object.keys(hashes).length + " unique hash(es)" + (excludeMine ? " · mine excluded" : "");

    displayed.forEach(function(r){
      var tr = document.createElement("tr");
      tr.style.borderBottom = "1px solid #333";
      if(isMineRow(r)){ tr.style.background = "rgba(255, 205, 86, 0.12)"; }
      var ua = r.user_agent || "";
      var uaShort = ua.length > 60 ? ua.substring(0,60)+"…" : ua;
      var ref = r.referer || "";
      var refShort = ref.length > 40 ? ref.substring(0,40)+"…" : ref;
      var hashCount = hashes[r.visitor_id || "(empty)"] || 0;
      tr.innerHTML =
        "<td style='padding:5px 8px;white-space:nowrap;'>" + escHtml(r.timestamp) + "</td>" +
        "<td style='padding:5px 8px;white-space:nowrap;font-family:monospace;cursor:pointer;' data-mark-ip='" + escAttr(r.ip || "") + "' title='Click to mark this IP as mine'>" + escHtml(r.ip) + "</td>" +
        "<td style='padding:5px 8px;white-space:nowrap;font-family:monospace;cursor:pointer;' data-mark-hash='" + escAttr(r.visitor_id || "") + "' title='Click to mark this hash as mine'>" + escHtml(r.visitor_id || "") + (hashCount > 1 ? " <span style='color:#ffcd56;'>(" + hashCount + "x)</span>" : "") + "</td>" +
        "<td style='padding:5px 8px;'>" + escHtml(r.page) + "</td>" +
        "<td style='padding:5px 8px;' title='" + escAttr(ref) + "'>" + escHtml(refShort) + "</td>" +
        "<td style='padding:5px 8px;' title='" + escAttr(ua) + "'>" + escHtml(uaShort) + "</td>";
      tbody.appendChild(tr);
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
      if(b.visitCount !== a.visitCount) return b.visitCount - a.visitCount;
      return strcmpTime(b.lastSeen, a.lastSeen);
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
  renderMineTags();
})();
IPJS;
echo '</script>';

// Chart.js script
echo '<script>';
echo 'document.getElementById("dateFilterForm").addEventListener("submit", function(e) {';
echo '    e.preventDefault();';
echo '    const form = e.target;';
echo '    const startDate = form.start_date.value;';
echo '    const endDate = form.end_date.value;';
echo '    const params = new URLSearchParams(window.location.search);';
echo '    params.set("start_date", startDate);';
echo '    params.set("end_date", endDate);';
echo '    params.set("ajax", "1");';
echo '    fetch(window.location.pathname + "?" + params.toString())';
echo '        .then(response => response.text())';
echo '        .then(html => {';
echo '            document.getElementById("uniqueVisitorsTable").innerHTML = html;';
echo '        });';
echo '});';
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
    pages.forEach(function(p){ var opt=document.createElement('option'); opt.value=p; opt.textContent=p; pagesSelect.appendChild(opt); });
    Array.from(pagesSelect.options).forEach(function(o){ if(topPages.indexOf(o.value) !== -1) o.selected = true; });

    function palette(n){ var cols=[]; var base=['#36a2eb','#ffcd56','#ff6384','#4bc0c0','#9966ff','#c9cbcf','#ff9f40','#8dd3c7','#bebada','#fb8072']; for(var i=0;i<n;i++){ cols.push(base[i % base.length]); } return cols; }

    function fetchTimeseries(){
        var page = pageSelect.value;
        var pagesMulti = Array.from(pagesSelect.selectedOptions).map(function(o){return o.value;});
        var group = groupSelect.value;
        var start = startInput.value;
        var end = endInput.value;
        var params = new URLSearchParams({ ajax:1, action:'timeseries', group:group });
        if(page) params.set('page', page);
        if(pagesMulti.length) params.set('pages', pagesMulti.join(','));
        if(start) params.set('start_date', start);
        if(end) params.set('end_date', end);
        fetch(window.location.pathname + '?' + params.toString())
          .then(function(r){ return r.json(); })
          .then(function(json){
            if(json.datasets){
              var labels = json.labels || [];
              var cols = palette(json.datasets.length);
              var datasets = json.datasets.map(function(ds, idx){ return { label: ds.label, data: ds.data, backgroundColor: cols[idx], borderColor: cols[idx] }; });
              if(window.compareChart){ window.compareChart.data.labels = labels; window.compareChart.data.datasets = datasets; window.compareChart.update(); }
              if(page && window.tsChart){ window.tsChart.data.labels = json.labels; window.tsChart.data.datasets[0].data = json.datasets[0].data || []; window.tsChart.update(); }
            } else {
              var labels = json.labels || [];
              var data = json.data || [];
              if(window.tsChart){ window.tsChart.data.labels = labels; window.tsChart.data.datasets[0].data = data; window.tsChart.update(); }
            }
          }).catch(function(err){ console.error('timeseries fetch error', err); });
    }

    window.compareChart = new Chart(document.getElementById('compareChart'), { type: 'bar', data: { labels: [], datasets: [] }, options: { responsive:true, plugins:{ legend:{ labels:{ color:'#eee' } } }, scales:{ x:{ ticks:{ color:'#eee' } }, y:{ ticks:{ color:'#eee' } } } } });

    refresh.addEventListener('click', function(e){ e.preventDefault(); fetchTimeseries(); });
    fetchTimeseries();
})();
</script>
HTML;
