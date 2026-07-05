<?php

declare(strict_types=1);

function cron_fail(int $statusCode, string $message): void
{
    http_response_code($statusCode);
    header('Content-Type: text/plain; charset=UTF-8');
    echo $message . "\n";
    exit;
}

function cron_get_key_from_file(): string
{
    $path = __DIR__ . '/../credentials/cron_key.txt';
    if (!is_file($path)) {
        return '';
    }

    $key = trim((string) file_get_contents($path));
    return $key;
}

function cron_require_key(): void
{
    $expected = cron_get_key_from_file();
    if ($expected === '') {
        cron_fail(500, 'Missing cron key file: credentials/cron_key.txt');
    }

    $provided = isset($_GET['key']) ? (string) $_GET['key'] : '';
    if ($provided === '' || !hash_equals($expected, $provided)) {
        cron_fail(403, 'Forbidden');
    }
}

function cron_set_google_credentials(): void
{
    $path = __DIR__ . '/../credentials/gsc-service-account.json';
    if (!is_file($path)) {
        cron_fail(500, 'Missing credentials file: credentials/gsc-service-account.json');
    }
    putenv('GOOGLE_APPLICATION_CREDENTIALS=' . $path);
}

function cron_run_commands(array $commands): void
{
    $root = realpath(__DIR__ . '/..');
    if ($root === false) {
        cron_fail(500, 'Cannot resolve project root path');
    }

    $command = 'cd ' . escapeshellarg($root) . ' && ' . implode(' && ', $commands) . ' 2>&1';

    if (!function_exists('exec')) {
        cron_fail(500, 'Command execution is disabled in this PHP environment (exec unavailable)');
    }

    $output = [];
    $exitCode = 0;
    exec($command, $output, $exitCode);
    $stdout = implode("\n", $output);
    $stderr = '';

    header('Content-Type: text/plain; charset=UTF-8');
    echo 'UTC: ' . gmdate('c') . "\n";
    echo 'Exit code: ' . $exitCode . "\n\n";
    if ($stdout !== '') {
        echo "STDOUT:\n" . $stdout . "\n";
    }
    if ($stderr !== '') {
        echo "STDERR:\n" . $stderr . "\n";
    }

    if ($exitCode !== 0) {
        http_response_code(500);
    }
}
