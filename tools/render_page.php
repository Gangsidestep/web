<?php
// Usage: php tools/render_page.php "/path/to/page/"
$path = $argv[1] ?? '/';
$_SERVER['REQUEST_URI'] = $path;
$_SERVER['HTTP_HOST'] = 'mydropintheoceans.org';
chdir(__DIR__ . '/..');
ob_start();
include __DIR__ . '/../blog/why-the-swiss-said-no-to-free-money/index.php';
$contents = ob_get_clean();

// Extract <title>
if (preg_match('/<title[^>]*>(.*?)<\/title>/si', $contents, $t)) {
    echo "<title>: " . trim(strip_tags($t[1])) . "\n";
} else {
    echo "<title> not found\n";
}

// Extract og:title
if (preg_match('/<meta[^>]*property="og:title"[^>]*content="([^"]+)"/si', $contents, $og)) {
    echo "og:title: " . trim($og[1]) . "\n";
} else {
    echo "og:title not found\n";
}

// Extract twitter:title
if (preg_match('/<meta[^>]*name="twitter:title"[^>]*content="([^"]+)"/si', $contents, $tw)) {
    echo "twitter:title: " . trim($tw[1]) . "\n";
} else {
    echo "twitter:title not found\n";
}

// Extract JSON-LD headline if present
if (preg_match('/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/si', $contents, $js)) {
    $json = trim($js[1]);
    // try to decode
    $decoded = json_decode($json, true);
    if ($decoded && isset($decoded['headline'])) {
        echo "JSON-LD headline: " . $decoded['headline'] . "\n";
    } else {
        echo "JSON-LD present but no headline or could not decode\n";
    }
} else {
    echo "No JSON-LD script found\n";
}

// Extract H1
if (preg_match('/<h1[^>]*>(.*?)<\/h1>/si', $contents, $m)) {
    echo "H1: " . trim(strip_tags($m[1])) . "\n";
} else {
    echo "No H1 found\n";
}

