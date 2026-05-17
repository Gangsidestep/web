<?php
// Single-flow IP -> country lookup with full-response caching and safe logging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$log_file = __DIR__ . '/ip_country_error.log';
	// @file_put_contents($log_file, date('c') . " Cache hit for $ip, country={$country}\n", FILE_APPEND);
	$error = error_get_last();
	if ($error && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
		@file_put_contents($log_file, date('c') . " FATAL: {$error['message']} in {$error['file']}:{$error['line']}\n", FILE_APPEND);
	}

header('Content-Type: application/json');

$ip = isset($_GET['ip']) ? trim($_GET['ip']) : '';
if (!$ip || !filter_var($ip, FILTER_VALIDATE_IP)) {
	echo json_encode(['country' => '']);
	exit;
}

$cache_file = __DIR__ . '/ip_country.json';
if (!file_exists($cache_file)) {
	if (@file_put_contents($cache_file, json_encode([])) === false) {
		@file_put_contents($log_file, date('c') . " Failed to create cache file $cache_file\n", FILE_APPEND);
		echo json_encode(['country' => '', 'error' => 'Failed to create cache file.']);
		exit;
	}
	@chmod($cache_file, 0666);
	@file_put_contents($log_file, date('c') . " Created cache file $cache_file\n", FILE_APPEND);
}
if (!file_exists($log_file)) {
	@file_put_contents($log_file, date('c') . " Log file created\n");
}

$token = '5bfe67fa7ea864';
$cache = [];
$raw = @file_get_contents($cache_file);
if ($raw !== false) {
	$tmp = json_decode($raw, true);
	if (is_array($tmp)) {
		$cache = $tmp;
	} else {
		@file_put_contents($log_file, date('c') . " Invalid JSON in cache file, resetting\n", FILE_APPEND);
		$cache = [];
	}
} else {
	@file_put_contents($log_file, date('c') . " Failed to read cache file\n", FILE_APPEND);
}

$country = '';
// Prefer cached full response
if (isset($cache[$ip]) && is_array($cache[$ip])) {
	$country = isset($cache[$ip]['country_code']) ? $cache[$ip]['country_code'] : (isset($cache[$ip]['country']) ? $cache[$ip]['country'] : '');
	@file_put_contents($log_file, date('c') . " Cache hit for $ip, country={$country}\n", FILE_APPEND);
	if ($country !== '') {
		echo json_encode(['country' => $country]);
		exit;
	}
}

// Call API
$url = "https://api.ipinfo.io/lite/" . urlencode($ip);
$opts = [
	'http' => [
		'method' => 'GET',
		'header' => "Authorization: Bearer $token\r\n",
		'timeout' => 5
	]
];
$context = stream_context_create($opts);
$resp = @file_get_contents($url, false, $context);
if ($resp === false) {
	$err = error_get_last();
	@file_put_contents($log_file, date('c') . " file_get_contents failed for $url. Error: " . print_r($err, true) . "\n", FILE_APPEND);
	// Fallback to cURL if available (useful when allow_url_fopen is Off)
	if (function_exists('curl_version')) {
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer $token"]);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_TIMEOUT, 5);
		// Prefer any available IP family
		if (defined('CURLOPT_IPRESOLVE')) {
			curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_WHATEVER);
		}
		$curlResp = curl_exec($ch);
		if ($curlResp === false) {
			$cerr = curl_error($ch);
			@file_put_contents($log_file, date('c') . " curl failed for $url: $cerr\n", FILE_APPEND);
		} else {
			$resp = $curlResp;
			@file_put_contents($log_file, date('c') . " curl success for $url\n", FILE_APPEND);
		}
		curl_close($ch);
	}
} 
if ($resp === false) {
	// nothing to decode; will be handled below
} else {
	$data = json_decode($resp, true);
		if (json_last_error() !== JSON_ERROR_NONE) {
		@file_put_contents($log_file, date('c') . " JSON decode error for $ip: " . json_last_error_msg() . " | Response: $resp\n", FILE_APPEND);
	} elseif (is_array($data)) {
		$country = isset($data['country_code']) ? $data['country_code'] : (isset($data['country']) ? $data['country'] : '');
		if ($country !== '') {
			$cache[$ip] = $data;
			if (@file_put_contents($cache_file, json_encode($cache), LOCK_EX) === false) {
				@file_put_contents($log_file, date('c') . " Failed to write cache file\n", FILE_APPEND);
			}
			// @file_put_contents($log_file, date('c') . " API hit for $ip, country={$country}\n", FILE_APPEND);
		} else {
			@file_put_contents($log_file, date('c') . " API response missing country for $ip: $resp\n", FILE_APPEND);
		}
	}
}

if (empty($country)) {
	@file_put_contents($log_file, date('c') . " Country lookup failed for $ip, no country determined\n", FILE_APPEND);
	echo json_encode(['country' => '', 'error' => 'Country lookup failed, see log file.']);
} else {
	echo json_encode(['country' => $country]);
}

exit;
?>
