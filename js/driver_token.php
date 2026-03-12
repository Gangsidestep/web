<?php 
include "../../MyDIO_login/config.php";
include("../../connection.php");
session_start();
if($MyDIOlogin->loggedIn)	
	{// User logged in with new system

		$mem_id = $_SESSION['MyDIOusercookie'];
		$logged=true;
		$ext=$_SERVER['PHP_SELF'];
		include("../../login/loggedin/get-profile/get-profile.php");
		if($lang=='en')
			{$language='English';}
		if($lang=='fr')
			{
				header("location: /fr".$ext);
			}
	}
else
	{// User not logged in with new system  
		header("location: ../../index.php");
	}
?>
<!DOCTYPE html>
<html lang="en">
<?php
$page_name ="User Profile";
include('../../login/loggedin/headers.php') ?>
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
<?php 
if($logged)
{
	//$MyDIOlogin->full_menu($image);
}
?>
  
  <div class="bdropbottom">
         <br>
         <div class="center-310">
Please enter your email to confirm your registration

    	<form action="../../admin/level2/user_profile.php" method="post" name='Q' enctype="multipart/form-data" id="Q" onSubmit="" >
				 <?php if(!empty($_GET['token'])){
					 ?>
                      		<input name="token" value="<?php echo $_GET['token']; ?>" type="hidden">
                     <?php
 				 echo $image;
					 
					 }else
				 {
					 header("location: ../../index.php");
		 			 } ?>
		<input name="email" class="span4" value="" placeholder="User Email"></input>
<p>
       <button type="submit" class="btn btn-flat btn-primary btn-large">CONFIRM REGISTRATION</button>
    </form>
    </div>
</div>
</body>
</html>