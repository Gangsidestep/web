<?php
session_start();
$creds_file = __DIR__ . '/../../php_private/admin_credentials.php';
$creds = is_readable($creds_file) ? include $creds_file : null;
if (!is_array($creds) || !isset($creds['user'], $creds['pass_hash'])) {
    header('HTTP/1.0 503 Service Unavailable');
    echo 'Admin credentials not configured.';
    exit;
}

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $user = $_POST['user'] ?? '';
  $pass = $_POST['pass'] ?? '';
  $hash = $creds['pass_hash'] ?? null;
  if ($user === $creds['user'] && $hash && password_verify($pass, $hash)) {
    // Successful login
    $_SESSION['admin_authenticated'] = true;
    $return = $_GET['return'] ?? 'view-logs.php';
    header('Location: ' . $return);
    exit;
  }
  $error = 'Incorrect username or password.';
}
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Admin Login</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>body{font-family:Arial,Helvetica,sans-serif;background:#f5f6f7;color:#111;padding:2em}form{max-width:360px;margin:1em auto;padding:1em;background:#fff;border-radius:6px;box-shadow:0 2px 6px rgba(0,0,0,.08)}label{display:block;margin:0.5em 0 0.2em}input{width:100%;padding:.5em;margin-bottom:.5em}button{padding:.6em 1em}</style>
</head>
<body>
  <form method="post" action="">
    <h2>Admin Login</h2>
    <?php if ($error): ?>
      <div style="color:#b00020;margin-bottom:.5em"><?php echo htmlspecialchars($error); ?></div>
    <?php endif; ?>
    <label for="user">Username</label>
    <input id="user" name="user" autocomplete="username">
    <label for="pass">Password</label>
    <input id="pass" name="pass" type="password" autocomplete="current-password">
    <div style="margin-top:.5em">
      <button type="submit">Sign in</button>
      <a href="/" style="margin-left:1em;color:#666;">Home</a>
    </div>
  </form>
</body>
</html>
