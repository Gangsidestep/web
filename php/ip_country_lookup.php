<?php
// ip_country_lookup.php: Persistent IP-to-country lookup and storage with error logging
// Usage: /php/ip_country_lookup.php?ip=8.8.8.8
header('Content-Type: application/json');
$ip = isset($_GET['ip']) ? trim($_GET['ip']) : '';
if (!$ip || !filter_var($ip, FILTER_VALIDATE_IP)) {
    echo json_encode(['country' => '']);
    exit;
}
$cache_file = __DIR__ . '/ip_country.json';
$log_file = __DIR__ . '/ip_country_error.log';
$token = '5bfe67fa7ea864'; // Your ipinfo.io token
$cache = [];
// Read cache file safely
if (file_exists($cache_file)) {
    $raw = @file_get_contents($cache_file);
    if ($raw !== false) {
        $cache = json_decode($raw, true);
        if (!is_array($cache)) {
            $cache = [];
            @file_put_contents($log_file, date('c') . " Invalid JSON in cache file\n", FILE_APPEND);
        }
    } else {
        @file_put_contents($log_file, date('c') . " Failed to read cache file\n", FILE_APPEND);
    }
}
if (isset($cache[$ip]) && is_string($cache[$ip]) && strlen($cache[$ip]) === 2) {
    echo json_encode(['country' => $cache[$ip]]);
    exit;
}
// Not found, call API
$url = "https://api.ipinfo.io/lite/" . urlencode($ip) . "?token=" . $token;
$resp = @file_get_contents($url);
$country = '';
if ($resp !== false) {
    $data = json_decode($resp, true);
    if (isset($data['country']) && strlen($data['country']) === 2) {
        $country = $data['country'];
        $cache[$ip] = $country;
        // Try to write cache file safely
        if (@file_put_contents($cache_file, json_encode($cache)) === false) {
            @file_put_contents($log_file, date('c') . " Failed to write cache file\n", FILE_APPEND);
        }
    } else {
        @file_put_contents($log_file, date('c') . " API response missing country for $ip: $resp\n", FILE_APPEND);
    }
} else {
    @file_put_contents($log_file, date('c') . " API request failed for $ip ($url)\n", FILE_APPEND);
}
echo json_encode(['country' => $country]);
?>
