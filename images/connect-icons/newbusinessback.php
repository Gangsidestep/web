<?php
include('../connection.php');
require "../api/3rd_party_business_login/api_business_config.php";
require "../MyDIO_admin_login/config.php";
	require "../MyDIO_login/config.php";
	\Fr\LS::init();
	if(\Fr\LS::$loggedIn)
		{
			if($_GET['company_id']!="")
				{
					$cmpyid=$_GET['company_id'];
				}
										
			$admin_id=$_SESSION['MyDIO_admin_logSyscuruser'];
		}
	else
		{
			if($MyDIO_API->loggedIn)
				{
					$cmpyid = $_SESSION['MyDIObusiusercookie'];
				  // User logged in with new system
				 // echo "arrived".$cmpyid; exit();
				}
			else
				{
					header("location: bus_login.php");
				}
		}
require "../MyDIO_functions/config_functions.php";
session_start();
	
echo "id".$cmpyid;exit();
$sql = "SELECT * FROM mydio_busi_7835 WHERE busi_mem_id_3753='$cmpyid'";
$result = mysqli_query($bd, $sql);

if($row = mysqli_fetch_array($result, MYSQLI_BOTH)) {
    $email = $row['email'];
      $companyname = $row['name_compan3'];
	  $fname = $row['firstname'];
        $status = $row['dio_status'];
		$img=$row['img2983locaton'];
		$logo=$row['logo2983location'];
		$city=$row['cit3e'];
		$wwwsite=$row['w38bsite'];
		$_SESSION['COMPANY_NAME_ID']=$companyname;
}?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>My Drop In The Oceans | <? echo $companyname ?></title>
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
<link rel="shortcut icon" href="../images/favicon.ico">
<link href="/css/twittermydiostyle.css" rel="stylesheet" type="text/css">
<link href="/css/mydiostyle.css" rel="stylesheet" type="text/css">
 
<script>document.documentElement.className += " js"; </script>
  <!--[if lt IE 9]><script src="../js/vendor/respond.min.js"></script>
<script>document.documentElement.className += " ie lt9";
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('footer');
document.createElement('time');
</script><![endif]-->



  
 <script src="https://connect.facebook.net/en_US/all.js" async="" id="facebook-jssdk"></script> 
  
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

  <?
  $MyDIO_API->full_business_menu($logo);
  ?>
  <div class="busiframe">
  <div class="bdropbottom">
  

<div >
		  <p>&nbsp;</p>
	  <p>Welcome back!</p>
	  <h6>
		  <p>	      Here you can edit and preview<br>
      your company profile:</p>
		  <p>&nbsp;</p>
 
      
      <?php
    //-query  the database table  
   $sql="SELECT * FROM mydio_busi_7835 WHERE busi_mem_id_3753='$cmpyid'";  
   //-run  the query against the mysql query function  
 $result=mysqli_query($bd, $sql);  
   //-create  while loop and loop through result set  
   while($row=mysqli_fetch_array($result, MYSQLI_BOTH))
   {  $back=$row['logo2983location'];
   $company=$row['name_compan3'];
       $fullback= "../../../businesssignup/".$back; 
  echo "<form id='reg' name='reg' method='post' action='spendbusinessprofile.php'>
  <input type='hidden'
								name='company'
								value='$company'>
								
				
								
								
								
		<button type='submit' class='rewards' >
		<table width='300' height='180' >
			<tr>
				<td class=size-logo rowspan='2' height='120' width='180' background='$fullback'>
					<p>&nbsp;</p>"; if ($back==""){ echo "
					<p>Go to <p>'Edit your profile' <p>to insert <p> your logo</p>
					<p>&nbsp;</p>"; }else{echo "
					<p>&nbsp;</p>"; } echo"
				</td>
				<td padding='2px' height='50' width='110'>
					<h4>". $row['name_compan3']."</h4><h6>". $row['cit3e']."</h6>
				</td>
			</tr>
      <table>
      </table>
      </div></td></tr></table></button></form>";
	"}";
	}  
  ?>
      
      




         
    
    <p>&nbsp;</p>
    <form action="editmybusprofile.php" method="get">

<button type="submit" class="btn btn-flat btn-primary btn-large">EDIT YOUR PROFILE</button>
</form>
    <p>&nbsp;</p>

		  </div>
    
	
</div>
</div>
 
<div class="totop">
<nav>
<li class="logo nav-item"><a href="../login/loggedin/new_account.php" class="home">MyDIO&apos;</a> </li>
</nav>
</div>

  <div class="to-top hidden">
  
  <a id="toTop" href="#">
  <div class="to-top-icon icon"></div></a>
	</div>


<script src="../js/all-225.js"></script>
 
</body>
</html>