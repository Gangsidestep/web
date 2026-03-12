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
