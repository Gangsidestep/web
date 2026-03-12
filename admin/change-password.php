<?php
session_start();
$creds_file = __DIR__ . '/../../php_private/admin_credentials.php';
$creds = is_readable($creds_file) ? include $creds_file : null;
if (empty($_SESSION['admin_authenticated'])) {
    header('Location: login.php');
    exit;
}
if (!is_array($creds) || !isset($creds['pass_hash'])) {
    echo 'Credentials file missing or invalid.';
    exit;
}
$msg = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $current = $_POST['current'] ?? '';
    $new = $_POST['new'] ?? '';
    $confirm = $_POST['confirm'] ?? '';
    if ($new === '' || $new !== $confirm) {
        $msg = 'New passwords do not match or are empty.';
    } elseif (!password_verify($current, $creds['pass_hash'])) {
        $msg = 'Current password is incorrect.';
    } else {
        $new_hash = password_hash($new, PASSWORD_DEFAULT);
        $content = "<?php\nreturn ['user' => 'admin', 'pass_hash' => '" . $new_hash . "'];\n";
        $tmp = $creds_file . '.tmp';
        if (file_put_contents($tmp, $content) !== false && rename($tmp, $creds_file)) {
            $msg = 'Password changed successfully.';
        } else {
            $msg = 'Failed to write credentials file. Check permissions.';
        }
    }
}
?>
<!doctype html>
<html><head><meta charset="utf-8"><title>Change Admin Password</title></head><body>
<h2>Change Admin Password</h2>
<?php if ($msg): ?><div><?php echo htmlspecialchars($msg); ?></div><?php endif; ?>
<form method="post">
  <label>Current password<br><input name="current" type="password"></label><br>
  <label>New password<br><input name="new" type="password"></label><br>
  <label>Confirm new password<br><input name="confirm" type="password"></label><br>
  <button type="submit">Change password</button>
  <a href="view-logs.php" style="margin-left:1em">Back</a>
</form>
</body></html>
