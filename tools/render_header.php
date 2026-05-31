<?php
// Usage: php tools/render_header.php "/path/"
$path = $argv[1] ?? '/';
$_SERVER['REQUEST_URI'] = $path;
$_SERVER['HTTP_HOST'] = 'mydropintheoceans.org';
// Ensure includes work
chdir(__DIR__ . '/..');
ob_start();
include __DIR__ . '/../php/site-header.php';
$contents = ob_get_clean();
// Extract the select element for clarity
if (preg_match('/<select[^>]*id="language-switcher"[^>]*>(.*?)<\/select>/si', $contents, $m)) {
    echo "-- language-switcher for {$path} --\n";
    echo trim($m[0]) . "\n";
    // show option values
    if (preg_match_all('/<option[^>]*value="([^"]+)"[^>]*>(.*?)<\/option>/si', $m[1], $opts)) {
        foreach ($opts[1] as $i => $val) {
            $label = trim(strip_tags($opts[2][$i]));
            echo "  Option: {$label} -> {$val}\n";
        }
    }
} else {
    echo "No language-switcher select found for {$path}\n";
}

// Also print the onchange JS for debugging
if (preg_match('/onchange="([^"]+)"/', $contents, $m2)) {
    echo "\n-- onchange JS --\n";
    echo $m2[1] . "\n";
}

