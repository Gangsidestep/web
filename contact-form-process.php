<?php
if(empty($_POST))
{
	exit;
}

// Rate limiting setup
session_start();
$rate_limit_file = '/tmp/contact_form_rate_limit.json';

function check_rate_limit($ip, $rate_limit_file) {
    // Load rate limit data
    $rate_data = [];
    if (file_exists($rate_limit_file)) {
        $rate_data = json_decode(file_get_contents($rate_limit_file), true);
        if (!is_array($rate_data)) $rate_data = [];
    }
    
    // Clean old entries (older than 1 hour)
    $current_time = time();
    foreach ($rate_data as $key => $data) {
        if ($current_time - $data['time'] > 3600) {
            unset($rate_data[$key]);
        }
    }
    
    // Check submissions from this IP in last 10 minutes
    $recent_submissions = 0;
    if (isset($rate_data[$ip])) {
        foreach ($rate_data[$ip]['submissions'] as $timestamp) {
            if ($current_time - $timestamp < 600) { // 10 minutes
                $recent_submissions++;
            }
        }
    }
    
    // Allow max 3 submissions per 10 minutes
    if ($recent_submissions >= 3) {
        return false;
    }
    
    // Record this submission
    if (!isset($rate_data[$ip])) {
        $rate_data[$ip] = ['submissions' => [], 'time' => $current_time];
    }
    $rate_data[$ip]['submissions'][] = $current_time;
    
    // Save rate limit data
    file_put_contents($rate_limit_file, json_encode($rate_data));
    
    return true;
}

if (isset($_POST['email'])&&isset($_POST['message'])) {

    // EDIT THE FOLLOWING TWO LINES:
    $email_to = "david@mydropintheoceans.org";
    $email_subject = "New form submissions";

    function problem($error)
    {
        echo "We're sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br><br>";
        echo $error . "<br><br>";
        echo "Please go back and fix these errors.<br><br>";
        die();
    }

    // Rate limiting check
    $user_ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    if (!check_rate_limit($user_ip, $rate_limit_file)) {
        problem("Too many submissions. Please wait a few minutes before trying again.");
    }

    // Anti-bot check 1: Validate honeypot field exists and is empty
    if (!isset($_POST['hp_hash'])) {
        exit; // Missing hash field
    }
    
    // Reconstruct honeypot field name and verify it's empty
    $expected_honeypot = 'field_' . substr(md5(date('Ymd') . 'salt123'), 0, 8);
    $expected_hash = hash('sha256', $expected_honeypot);
    
    if ($_POST['hp_hash'] !== $expected_hash) {
        exit; // Hash mismatch
    }
    
    if (!empty($_POST[$expected_honeypot])) {
        exit; // Bot detected - honeypot was filled
    }

    // Anti-bot check 2: Time-based check (minimum 3 seconds to fill form)
    if (isset($_POST['form_timestamp'])) {
        $time_elapsed = time() - intval($_POST['form_timestamp']);
        if ($time_elapsed < 3) {
            exit; // Bot detected - form submitted too quickly
        }
        // Also reject if timestamp is more than 1 hour old (potential replay attack)
        if ($time_elapsed > 3600) {
            problem("Form session expired. Please refresh the page and try again.");
        }
    } else {
        exit; // Missing timestamp field
    }
    
    // Anti-bot check 3: Verify form key exists
    if (!isset($_POST['form_key']) || strlen($_POST['form_key']) !== 64) {
        exit; // Missing or invalid form key
    }

    // validation expected data exists
    if ( !isset($_POST['email']) || !isset($_POST['message']) )
	{
        problem("We're sorry, but there appears to be a problem with the form you submitted.");
    }

    $email = $_POST['email']; // required
    $message = $_POST['message']; // required

    $error_message = "";
    $email_exp = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'The Email address you entered does not appear to be valid.<br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'The Message you entered do not appear to be valid.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    <!-- INCLUDE YOUR SUCCESS MESSAGE BELOW -->
success

<?php
}
else
{
	// echo "no data";
	exit;
}
?>