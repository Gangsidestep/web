<?php
require "../../MyDIO_login/config.php";
if($MyDIOlogin->loggedIn)
	{// User logged in with new system
		$mem_id = $_COOKIE['MyDIOrememberme'];
		require "../../MyDIO_admin_login/config.php";
		//does user MASTER admin status?
		//if(\Fr\LS::$loggedIn)
		//	{
		//	}
			
		//else
		//	{	
				// User not logged in 
				//header("location: admin_choice.php");
				//exit();
		//	}
  
 	}
 else
	{// User not logged in 
	header("location: ../index.php");
    exit();
	}

     $hidden=true;


 if( isset($_POST['delete']) )
		  {
			 
			  $user_email=$_POST['user_email'];
			   //echo $user_email; exit();
			    $deleteAccount = 1;
								  if($deleteAccount === "does not exist")
										{
											$act_msg= "<label>User Does not Exist.</label>";
										 }
									elseif($deleteAccount === true)
										{
											$act_msg= "<label>Success. Account Deleted. <a href='login.php'>Log In</a></label>";
										}

		  }

 if( isset($_POST['submit']) )
		  {
				$user_email=$_POST['new_admin_email'];
				$us_id=$MyDIOlogin->get_id_with_email($user_email);
				if(!$us_id)
					{
						$hidden=false;
						$msg= "Email not linked to valid user account";
					}
					else
					{	
						$username = $_POST['new_admin_username'];
						$level = $_POST['admin_level'];
						$password = $_POST['new_admin_pass'];
						$retyped_password = $_POST['new_admin_pass2'];
						if( $username == "" || $password == '' || $retyped_password == '')
							{
								$msg= "<h2>Fields Left Blank</h2>";
								$hidden=false;
							}elseif( !ctype_alnum($username) ){
								$msg= "<h2>Invalid Username</h2>";
								$hidden=false;
							}elseif($password != $retyped_password){
								$msg= "<h2>Passwords Don't Match</h2>";
								$hidden=false;
							}
						else
							{	
								  $createAccount = \Fr\LS::register($username, $password, $us_id, $level, $user_email);
								  if($createAccount === "exists"){
									$msg= "<label>User Exists.</label>";
									$hidden=false;
								  }elseif($createAccount === true){
									$msg= "<label>Success. Created account. <a href='login.php'>Log In</a></label>";
									$hidden=false;
								  }
							}
					}
		  }


?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>My Drop In The Oceans | Admin Choice List</title>

<link rel="apple-touch-icon-precomposed" sizes="57x57" href="/images/connect-icons/mydio-icon-57x57-admin.JPG" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images/connect-icons/mydio-icon-72x72-admin.JPG" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images/connect-icons/mydio-icon-114x114-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/images/connect-icons/mydio-icon-144x144-precomposed.png" />
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
<link rel="shortcut icon" href="../../../images/favicon.ico">
<link href="../../css/twittermydiostyle.css" rel="stylesheet" type="text/css">
<link href="../../css/mydiostyle.css" rel="stylesheet" type="text/css">

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
  
<body class="no-sidebar header-detached">
<div id="fb-root"></div>
<!--[if lt IE 8]>
<div class="alert alert-error alert-top">Your browser is not supported. Please download a newer browser like <a href="https://www.google.com/chrome/">Google Chrome</a></div>
<![endif]--><noscript>
	<div class="alert alert-error alert-top">
		It looks like your browser doesn't support javascript. This page will work a lot better for you if you activate javascript or download a newer browser like <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a>
	</div>
</noscript>
<div class="header"><nav>
<a  class="hamburger"
			data-toggle="dropdown"
			data-func="LoadFromTopBar"
			href="../new_account.php">About</a> 
<li> · </li>
   <li class="logo nav-item"><a href="../new_account.php" class="home">MyDIO&apos;</a> </li>
    <ul class="dropdown-menu">
   <li><a href="about.php">About</a></li>
<li><a href="animation.php">Animation</a></li>
      <li class="divider"></li>
      <li><a href="credits.php">Credit</a></li>
      <li><a href="rewards.php">Reward</a></li> <li><a href="userlist.php">Spend</a></li>
       <li class="divider"></li>
      <li><a href="businesses.php">Businesses</a></li>
      
    </ul>
    <div><a href="../new_account.php" class="user-icon-mobile"
    data-toggle="dropdown"
			data-func="LoadFromTopBar"></a>    <ul id="user-actions" class="pull-right dropdown-menu">
    <li><a href="../../../checkoutofsite.php">Log out</a></li>  
   <li class="divider"></li>
    <li><a href="../account.php">Compte</a></li>


    
    </ul>
    </div>

    
</nav></div>

  
    
<div class="bdropbottom">
<p>&nbsp;</p>

         <div class="tableframebox">
<? if(isset($_SESSION['MyDIO_admin_logSyscuruser'])){echo  $_SESSION['MyDIO_admin_logSyscuruser']."<p>";} ?>
  ADMIN ACCESS PROFILES
   <form class="add_admin_form" autocomplete="off" action="#" method="POST" id="add_admin_form" <?php if ( $hidden ) echo 'style="display:none;"'; ?>>
  
  <div class="admininfobox">

    <div style="width:20px; position:absolute; height:20px; top:2px; text-align:right; left:278px;">
    <form action=""><a class="addadmin"><h3>X</h3></a></form></div>
     Add New Admin Profile
     <br>
     <p><? echo $msg; ?>&nbsp;</p>
     
      <input class="span4" type="email" name="new_admin_email" placeholder="New Admin User Account Email"/>
     <input class="span4" type="text" name="new_admin_username" placeholder="Username"/>
     <input class="span4" type="password" name="new_admin_pass" placeholder="Password"/>
    <input class="span4" type="password" name="new_admin_pass2" placeholder="Password repeat"/>
     <p>
              <select class="span4 height4" name="admin_level" >
              <option selected="selected" disabled="disabled">Select Admin Level</option>
                <option value="VIEW" />View</option>
                <option value="EDIT" />Edit</option>
                <option value="BUSINESS" />Business</option>
                <option value="USER" />User</option>
                <option value="MASTER"/>Master</option>
                                </select>
                                 <p>&nbsp;</p>
                                <button name="submit">Register</button>  
                                 <p>&nbsp;</p>
 </div>  
  <p>&nbsp;</p>
    </form>  
    <table border="0" cellspacing="2" cellpadding="3" width="305px">
  <tr>
  		<td align="right" width="50%">
         <a class="addadmin">
        <input class="btn" name="add_admin" type="submit" value="Add New Admin">
         </a>
        </td>
 		<td align="left" width="50%">
        <a href="admin_choice.php">
         <input class="btn" type="submit" value="Admin Panel">
         </a>
        
		</td>
	</tr>
</table>
 <?
 
include('../../admin_connection.php');
 echo $act_msg;
 $n=1;
 $sql = "SELECT * FROM admeen_id";
			$result = mysqli_query($abd, $sql);
			while($row = mysqli_fetch_assoc($result))
			{ ?>
<li class='tile-list-admin'>

  <table border="0" cellspacing="2" cellpadding="3"  width="100%">
               
  <tr>
  
 <td align="left" colspan="2">
				 <?
				
				echo "User Email: ".$row['admeen_email']."<p>";
				?>
            </td>
              <tr>
    <td align="left" colspan="2">

            <?
				echo "Username: ".$row['username'];
				?>
				</td> 
                </tr>   <tr>
 <td align="left" width="200px">
        <script type="text/javascript">
							
								</script>
                               
 <form name="profile<? echo $n; ?>" method="get" action="">
  Admin level: 
 <select name="admin_level" onchange="change-level()">
                <option value="MASTER" <? if($row['admin_level']=="MASTER"){echo "selected";}
				?>/>Master</option>
                <option value="EDIT" <? if($row['admin_level']=="EDIT"){echo "selected";}
				?>/>Edit</option>
                <option value="VIEW" <? if($row['admin_level']=="VIEW"){echo "selected";}
				?>/>View</option>
                <option value="BUSINESS" <? if($row['admin_level']=="BUSINESS"){echo "selected";}
				?>/>Business</option>
                <option value="USER" <? if($row['admin_level']=="USER"){echo "selected";}
				?>/>User</option>
                                </select>
                                </form>
                         
            </td>
 <td align="left">
				<form method="post" action="">
             <input type="hidden" name="user_email"  value="<? echo $row['admeen_email'] ?>">
<input type="submit" name="delete" value="Delete">
</form>
            </td>
  </tr>
   </table>
   </li>
  <? $n++;
  } ?>


      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>

 	  
  
<script>
jQuery(function($){
    $("a.addadmin").click(function(){
        $("form.add_admin_form").toggle(200, function(){
        });
    });
});
</script>	
      <table border="0" cellspacing="2" cellpadding="3" width="305px">
  <tr>
  		<td align="right" width="50%">
         <a class="addadmin">
        <input class="btn" name="add_admin" type="submit" value="Add New Admin">
         </a>
        </td>
 		<td align="left" width="50%">
        <a href="admin_choice.php">
         <input class="btn" type="submit" value="Admin Panel">
         </a>
        
		</td>
	</tr>
</table>


 </div>
  

 <p>&nbsp;</p>
</div>
		<script src="/js/all-225.js"></script>

</body>
</html>