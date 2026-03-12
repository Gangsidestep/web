<?php
/**
 * Simple Privacy-Friendly Analytics Logger
 * Logs page views without using cookies
 * Uses hashed visitor ID that changes daily for privacy
 */

// Configuration
$log_file = __DIR__ . '/analytics/visits.log';
$log_dir = dirname($log_file);

// Ensure log directory exists
if (!file_exists($log_dir)) {
    mkdir($log_dir, 0755, true);
}

// Get visitor data
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
$page = $_SERVER['REQUEST_URI'] ?? '/';
$referer = $_SERVER['HTTP_REFERER'] ?? 'direct';
$timestamp = date('Y-m-d H:i:s');
$date_only = date('Y-m-d');

// Create anonymous visitor ID (changes daily for privacy)
// Hash of: IP + User Agent + Date (so same visitor appears as different ID each day)
$visitor_id = substr(hash('sha256', $ip . $user_agent . $date_only . 'salt_change_this'), 0, 16);

// Prepare log entry
$log_entry = json_encode([
    'timestamp' => $timestamp,
    'visitor_id' => $visitor_id,
    'page' => $page,
    'referer' => $referer,
    'user_agent' => $user_agent
]) . "\n";

// Write to log file (append mode)
file_put_contents($log_file, $log_entry, FILE_APPEND | LOCK_EX);

// Optional: Clean old logs (older than 90 days) and archive them
if (rand(1, 100) === 1) { // Only run cleanup 1% of the time
    clean_old_logs($log_file, 90);
}

function clean_old_logs($file, $days = 90) {
    if (!file_exists($file)) return;
    
    $cutoff = strtotime("-{$days} days");
    $lines = file($file);
    $kept_lines = [];
    $archive_data = []; // Group old data by month for archiving
    
    foreach ($lines as $line) {
        $data = json_decode($line, true);
        if (!$data) continue;
        
        $timestamp = strtotime($data['timestamp']);
        
        if ($timestamp > $cutoff) {
            // Keep recent data
            $kept_lines[] = $line;
        } else {
            // Archive old data grouped by month
            $month = date('Y-m', $timestamp);
            if (!isset($archive_data[$month])) {
                $archive_data[$month] = [];
            }
            $archive_data[$month][] = $line;
        }
    }
    
    // Save archives before deleting old data
    $archive_dir = dirname($file) . '/archives';
    if (!empty($archive_data) && !file_exists($archive_dir)) {
        mkdir($archive_dir, 0755, true);
    }
    
    foreach ($archive_data as $month => $lines) {
        $archive_file = $archive_dir . '/visits-' . $month . '.log';
        
        // Append to existing archive if it exists, or create new one
        file_put_contents($archive_file, implode('', $lines), FILE_APPEND | LOCK_EX);
    }
    
    // Update main log file with only recent data
    file_put_contents($file, implode('', $kept_lines));
    
    // Compress old archives (older than 6 months)
    compress_old_archives($archive_dir);
}

function compress_old_archives($archive_dir) {
    if (!file_exists($archive_dir)) return;
    
    $cutoff = strtotime("-6 months");
    $files = glob($archive_dir . '/visits-*.log');
    
    foreach ($files as $file) {
        // Extract date from filename: visits-YYYY-MM.log
        if (preg_match('/visits-(\d{4}-\d{2})\.log$/', $file, $matches)) {
            $file_date = strtotime($matches[1] . '-01');
            
            // Compress if older than 6 months and not already compressed
            if ($file_date < $cutoff) {
                $gz_file = $file . '.gz';
                
                if (!file_exists($gz_file)) {
                    // Compress the file
                    $content = file_get_contents($file);
                    $gz = gzopen($gz_file, 'w9');
                    gzwrite($gz, $content);
                    gzclose($gz);
                    
                    // Delete original uncompressed file
                    unlink($file);
                }
            }
        }
    }
}
?>
