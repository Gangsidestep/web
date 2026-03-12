<?php 
session_start();
require "../../MyDIO_login/config.php";
if($MyDIOlogin->loggedIn)
	{
		$mem_id = $_COOKIE['MyDIOrememberme'];
		require "../../MyDIO_admin_login/config.php";
		if(\Fr\LS::$loggedIn)
		{

				//echo "COOL".\Fr\LS::$loggedIn."w"; exit();
			}
		else
			{	
				// User not logged in as admin
	//echo "COOL".\Fr\LS::$loggedIn."s"; exit();
				
				if(isset($_POST['action_login']))
					{
						$identification = $_POST['username'];
						$password = $_POST['password'];
						$remember=$_POST['remember_me'];
						if($identification == "" || $password == ""){
							$msg = array("Error1", "Username / Password Wrong !");
							}
						else
							{
								$login = \Fr\LS::login($identification, $password, $remember );
								if($login === false)
									{
										$msg = array("Error2", "Username / Password Wrong !");
									}
								else if(is_array($login) && $login['status'] == "blocked")
									{
										$msg = array("Error3", "Too many login attempts. You can attempt login after ". $login['minutes'] ." minutes (". $login['seconds'] ." seconds)");
									}
									else
									{
										if(\Fr\LS::$loggedIn==true)
										{
											header("location: ../index.php");
											exit();
										}
			$msg = array("LOGGED IN", "");}
							}
					}
			}
	}
else
	{// User not logged in 
			header("location: ../index.php");
    		exit();
	}

		?>
	
    <!DOCTYPE html>
<html lang="en">
<head>

 <title>My Drop In The Oceans | Admin Login</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta property="fb:app_id" content="1476200282626466">
<meta property="og:type" content="MyDIO:website">
<meta property="og:site_name" content="My Drop In The Oceans">
<meta property="og:title" content="MyDIO">
<meta property="og:image" content="https://www.mydropintheoceans.org/images/logo/mydio.jpg">
<meta property="og:description" content="Empowering People to Value Nature">
<meta property="og:url" content="www.mydropintheoceans.org">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@My_DIO">
<meta name="twitter:title" content="Empowering People to Value Nature">
<meta name="twitter:description" content="www.mydropintheoceans.org">
<meta name="twitter:image:src" content="https://www.mydropintheoceans.org/images/logo/mydio.jpg">
<meta name="twitter:app:name:iphone" content="My Drop In The Oceans">
<meta name="twitter:app:id:iphone" content="">
<meta name="twitter:app:name:ipad" content="My Drop In The Oceans">
<meta name="twitter:app:id:ipad" content="">
<link rel="shortcut icon" href="../../images/favicon.ico">
<link href="/css/twittermydiostyle.css" rel="stylesheet" type="text/css">
  
 <script type="text/javascript">
    function validateForm()
    {
	
	var invalid = " "; // Invalid character is a space
	var minLength = 6; // Minimum length

    var b=document.forms["reg"]["email"].value;
	var c=document.forms["reg"]["password"].value;
  	var atpos = b.indexOf("@");
   	var dotpos = b.lastIndexOf(".");
    if ((a==null || a=="") && (b==null || b=="") && (c==null || c==""))
    {
    alert("All Field must be filled out");
    return false;
    }
	
	if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=b.length)
	{
         alert("Not a valid e-mail address");
         return false;
     }
    

	if (b==null || b=="")
    {
    alert("email must be filled out");
    return false;
    }
	
	if (c==null || c=="")
    {
    alert("password must be filled out");
    return false;
    }
	// check for minimum length of password
	if (document.forms["reg"]["password"].value.length < minLength)
	{
	alert('Your password must be at least ' + minLength + ' characters long. Try again.');
	return false;
	}
	// check for spaces in password
	if (document.forms["reg"]["password"].value.indexOf(invalid) > -1)
	{
	alert("Sorry, spaces are not allowed.");
	return false;
	}
	return true;}
    </script>
  </head>
  
<body 
	class="no-sidebar header-detached">
<div id="fb-root"></div>
<!--[if lt IE 8]>
<div class="alert alert-error alert-top">Your browser is not supported. Please download a newer browser like <a href="https://www.google.com/chrome/">Google Chrome</a></div>
<![endif]--><noscript>
	<div class="alert alert-error alert-top">
		It looks like your browser doesn't support javascript. This page will work a lot better for you if you activate javascript or download a newer browser like <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a>
	</div>
</noscript>
<div class="header"><nav>

            <li> · </li>
   <li class="logo nav-item">
   <a href="#" class="home">MyDIO&apos;</a> </li>

    <div><a href="/index.php" class="user-icon-mobile"
    data-toggle="dropdown"
			data-func="LoadFromTopBar"></a>
    <ul id="user-actions" class="pull-right dropdown-menu">
    <li><a href="../../checkoutofsite.php">Checkout</a></li>
    </ul>
    </div>

    
  </nav></div>
  
  <div class="bdroplogin">
  <h2>Admin 2nd level Login</h2>
  <p></p>
  <p></p>
  <? echo "User: ".$mem_id."<p>Cookie: ".$_COOKIE['MyDIO_admin_logSyslogin'] ; if(isset($_SESSION['MyDIO_admin_logSyscuruser'])){echo  "<p>admin: ".$_SESSION['MyDIO_admin_logSyscuruser']."<p>";} ?>
  <p></p>
 <?php
 echo \Fr\LS::$config;
  echo " <p>".\Fr\LS::$loggedIn;
      if(isset($msg)){
        echo "<h2>{$msg[0]}</h2><p>{$msg[1]}</p>";
      }
      ?>
    <form name="loginform" class="signup form-fancy" action="#" method="post">
    <table border="0" align="center" cellpadding="2" cellspacing="5">
    <tr>
    <td colspan="2">
    <!--the code bellow is used to display the message of the input validation-->
    <?php
    if( isset($_SESSION['ERRMSG_ARR']) && is_array($_SESSION['ERRMSG_ARR']) && count($_SESSION['ERRMSG_ARR']) >0 ) {
    echo '<ul class="err">';
    foreach($_SESSION['ERRMSG_ARR'] as $msg) {
    echo '<li>',$msg,'</li>';
    }
    echo '</ul>';
    unset($_SESSION['ERRMSG_ARR']);
    }
    ?>
    </td>
    </tr>
    <tr>
    <td><input name="username" type="text" class="span4" placeholder="Username" /></td>
    </tr>
    <tr>
    <td>
      <input type="hidden" name="remember_me" value="true"/> 
      <input name="password" type="password" class="span4"placeholder="password"/><p><?php 
							$remarks=$_GET['remarks'];
							if ($remarks=="wrong_password")
							{echo '<h5>Forgotten your password:<p><a href="forgotPass.php"> Renew Password Here</a></h5><p>&nbsp;</p>';}
							//$MyDIOlogin->debug_session_cookies();
			
							?></td>
    </tr>
    <tr>
    <td>
       <p>  <button type="submit" class="            			
                        btn 
                		btn-not-huge-but-pretty-big
                        signup
                        " name="action_login">&nbsp;
                    <img src="../../images/connect-icons/dio_animat32s.gif"   width="24" height="24">
          &nbsp;&nbsp;Login with Email&nbsp;&nbsp;&nbsp;</button></td>
    </tr>
    </table>
    </form>
    </div>
<div class="control-group ">
					

</div>
<div class="totop"><nav><li class="logo nav-item"><a href="/index.php" class="home">MyDIO&apos;</a> </li>

</nav></div>

  <div class="to-top hidden">
  
  <a id="toTop" href="#">
  <div class="to-top-icon icon"></div></a>
	</div>


<script src="/js/all-225.js"></script>
 
</body>
</html>