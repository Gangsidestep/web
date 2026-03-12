    <div class="section">
        <h2>Unique Visitors Per Page</h2>
        <table>
            <thead>
                <tr>
                    <th>Page</th>
                    <th>Unique Visitors</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Prepare unique visitors per page
                        $unique_visitors_per_page = [];
                        foreach ($visits as $data) {
                            $page = $data['page'];
                            $visitor_id = $data['visitor_id'];
                            if (!isset($unique_visitors_per_page[$page])) {
                                $unique_visitors_per_page[$page] = [];
                            }
                            $unique_visitors_per_page[$page][$visitor_id] = true;
                        }
                        foreach ($unique_visitors_per_page as $page => $visitors) {
                        ?>
                        <tr>
                            <td><?php echo htmlspecialchars($page); ?></td>
                            <td><?php echo count($visitors); ?></td>
                        </tr>
                        <?php } ?>
            </tbody>
        </table>
    </div>
<?php
/**
 * Simple Analytics Viewer
 * View your website analytics data
 */

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function debug_log($msg) {
    file_put_contents(__DIR__ . '/analytics/debug.log', $msg . "\n", FILE_APPEND);
}

$log_file = __DIR__ . '/analytics/visits.log';

if (!file_exists($log_file)) {
    die('No analytics data available yet.');
}

// Get date range from query params
$days = isset($_GET['days']) ? (int)$_GET['days'] : 7;
$cutoff = strtotime("-{$days} days");

// Read and parse log file
$lines = @file($log_file);
if ($lines === false) {
    debug_log('Failed to read log file: ' . $log_file);
    die('Error reading log file.');
}
$visits = [];
$page_views = [];
$referers = [];
$daily_visits = [];

foreach ($lines as $i => $line) {
    $data = json_decode($line, true);
    if (!$data) {
        debug_log("Line $i: JSON decode failed: $line");
        continue;
    }
    $visit_time = strtotime($data['timestamp']);
    if ($visit_time === false) {
        debug_log("Line $i: Invalid timestamp: " . $data['timestamp']);
        continue;
    }
    if ($visit_time < $cutoff) continue;
    $visits[] = $data;
    // Count page views
    $page = $data['page'];
    $page_views[$page] = ($page_views[$page] ?? 0) + 1;
    // Count referers
    if ($data['referer'] !== 'direct') {
        $referer_host = parse_url($data['referer'], PHP_URL_HOST) ?? $data['referer'];
        $referers[$referer_host] = ($referers[$referer_host] ?? 0) + 1;
    }
    // Count daily visits
    $date = substr($data['timestamp'], 0, 10);
    $daily_visits[$date] = ($daily_visits[$date] ?? 0) + 1;
}

// Sort data
arsort($page_views);
arsort($referers);
ksort($daily_visits);

// Get unique visitors
$unique_visitors = count(array_unique(array_column($visits, 'visitor_id')));

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analytics Dashboard - My Drop in The Oceans</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
        }
        h1 { color: #333; }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .stat-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .stat-value {
            font-size: 2em;
            font-weight: bold;
            color: #7f6665;
        }
        .stat-label {
            color: #666;
            margin-top: 5px;
        }
        table {
            width: 100%;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #eee;
        }
        th {
            background: #7f6665;
            color: white;
            font-weight: 600;
        }
        .section {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin: 20px 0;
        }
        .filters {
            margin: 20px 0;
        }
        .filters a {
            display: inline-block;
            padding: 8px 16px;
            margin: 0 5px;
            background: #7f6665;
            color: white;
            text-decoration: none;
            border-radius: 4px;
        }
        .filters a.active {
            background: #5f4645;
        }
    </style>
</head>
<body>
    <h1>📊 Analytics Dashboard</h1>
    
    <div class="filters">
        <a href="?days=1" <?php echo $days === 1 ? 'class="active"' : ''; ?>>Last 24h</a>
        <a href="?days=7" <?php echo $days === 7 ? 'class="active"' : ''; ?>>Last 7 days</a>
        <a href="?days=30" <?php echo $days === 30 ? 'class="active"' : ''; ?>>Last 30 days</a>
        <a href="?days=90" <?php echo $days === 90 ? 'class="active"' : ''; ?>>Last 90 days</a>
    </div>
    
    <div class="stats-grid">
        <div class="stat-card">
            <div class="stat-value"><?php echo count($visits); ?></div>
            <div class="stat-label">Total Page Views</div>
        </div>
        <div class="stat-card">
            <div class="stat-value"><?php echo $unique_visitors; ?></div>
            <div class="stat-label">Unique Visitors*</div>
        </div>
        <div class="stat-card">
            <div class="stat-value"><?php echo count($page_views); ?></div>
            <div class="stat-label">Pages Viewed</div>
        </div>
        <div class="stat-card">
            <div class="stat-value"><?php echo count($referers); ?></div>
            <div class="stat-label">Referral Sources</div>
        </div>
    </div>
    
    <div class="section">
        <h2>Daily Visits</h2>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Page Views</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($daily_visits as $date => $count): ?>
                <tr>
                    <td><?php echo $date; ?></td>
                    <td><?php echo $count; ?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    
    <div class="section">
        <h2>Top Pages</h2>
        <table>
            <thead>
                <tr>
                    <th>Page</th>
                    <th>Views</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($page_views as $page => $count): ?>
                <tr>
                    <td><?php echo htmlspecialchars($page); ?></td>
                    <td><?php echo $count; ?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    
    <?php if (!empty($referers)): ?>
    <div class="section">
        <h2>Referral Sources</h2>
        <table>
            <thead>
                <tr>
                    <th>Source</th>
                    <th>Visits</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($referers as $referer => $count): ?>
                <tr>
                    <td><?php echo htmlspecialchars($referer); ?></td>
                    <td><?php echo $count; ?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <?php endif; ?>
    
    <p style="color: #666; font-size: 0.9em; margin-top: 40px;">
        * Visitor IDs are anonymous and change daily for privacy. Same visitor appears as different ID each day.
    </p>
</body>
</html>
