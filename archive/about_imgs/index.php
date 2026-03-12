<?php
//session_start()
include "../MyDIO_login/config.php";
include "../connection.php";
include "../MyDIO_functions/config_functions.php";
$user_ip=$_SERVER['REMOTE_ADDR'];

$page=$_SERVER['REQUEST_URI'];

if(!empty($_SESSION['MyDIO_beta']))
{
	$mem_id = "IX0sxWJalmcBY3Ka3nGzulIvi";
	$logged=true;
	$beta=true;
	include("../login/loggedin/get-profile/get-profile.php");
	$_SESSION['MyDIO_beta']=$mem_id;
}
else
{
if($MyDIOlogin->loggedIn)
	{
		$mem_id = $_SESSION['MyDIOusercookie'];
		$logged 		= true;
		include("../login/loggedin/get-profile/get-profile.php");
	}
else 
	{
		$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
		$logged 		= false;
	}
}

$server=$_SERVER['SCRIPT_URI'];
$redirect=urlencode($server);
$page="community";

?>

<!DOCTYPE html>
<html lang="en">
<head>
<title>My Drop In The Oceans | Quiz list</title>
<link rel="apple-touch-icon-precomposed" sizes="57x57" href="/images/connect-icons/mydio-icon-57x57-precomposed-green.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images/connect-icons/mydio-icon-72x72-precomposed-green.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images/connect-icons/mydio-icon-114x114-precomposed-green.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/images/connect-icons/mydio-icon-144x144-precomposed-green.png" />
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta property="fb:app_id" content="1476200282626466">
<meta property="og:type" content="MyDIO:website">
<meta property="og:site_name" content="My Drop In The Oceans">
<meta property="og:title" content="MyDIO Quizzes">
<meta property="og:image" content="https://www.mydropintheoceans.org/images/logo/mydio.jpg">
<meta property="og:description" content="Empowering People to Value Nature">
<meta property="og:url" content="https://www.mydropintheoceans.org/quizzes/play_mydio_quiz.php">
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
<?
if($logged)
{ 
$MyDIOlogin->full_menu($image,$page);
}
else 
{ 
?>
<div class="header"><nav>
<a  class="hamburger"
			data-toggle="dropdown"
			data-func="LoadFromTopBar"
			href="">About</a> <li> · </li>
   <li class="logo nav-item"><a href="#" class="home">MyDIO&apos;</a> </li>
    <ul class="dropdown-menu">
     <li><a href="../about.php">About Us</a></li>
     <!-- <li><a href="create_a_quiz.php">Create a new Quiz</a></li> 
      <li class="divider"></li> 
      <li><a href="../admin_choice.php">Admin Panel</a></li>-->
    </ul>
    <div><a href="/index.php" class="user-icon-mobile"
    data-toggle="dropdown"
			data-func="LoadFromTopBar"></a>
    <ul id="user-actions" class="pull-right dropdown-menu">
    <li><a href="/login/index.php?redirect=<? echo urlencode($server); ?>">Login</a></li>
    <li><a href="/index.php">Sign up</a></li>
    
    </ul>
    </div>

    
  </nav></div>

<? }
$hidden=true; ?>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
	<script>
    jQuery(function($){
        $("a.about_com").click(function(){
            $("form.about_commun").toggle(200, function(){
				});
			});
		});
	jQuery(function($){
        $("a.settings_com").click(function(){
			var el = document.getElementById("create");
			document.getElementById("about_commun").style.display='none';
			if ( el.style.display != 'none' ) {
				el.style.display = 'none';
			}
			else {
				el.style.display = '';
			}
				});
			});
			function checkform ( form )
{
  // see http://www.thesitewizard.com/archive/validation.shtml
  // for an explanation of this script and how to use it on your
  // own website

  // ** START **
  if (form.q.value == "") {

						var el = document.getElementById("search").style.display='none';
						document.getElementById("about").style.display='';
						document.getElementById("settings").style.display='';
						document.getElementById("search_of").style.display='';
						document.getElementById("search_on").style.display='none';
    return false ;
  }
  // ** END **
  return true ;
}
			 jQuery(function($){
        $("a.search_com").click(function(){
						var el = document.getElementById("search");


			if ( el.style.display != 'none' ) {
				el.style.display = 'none';
							document.getElementById("about").style.display='';
						document.getElementById("settings").style.display='';
						document.getElementById("search_of").style.display='';
						document.getElementById("search_on").style.display='none';
						document.getElementById("btn-search").style.top="-15px";
			}
			else {
				el.style.display = '';
						document.getElementById("about").style.display='none';
						document.getElementById("settings").style.display='none';
						document.getElementById("create").style.display='none';
						document.getElementById("about_commun").style.display='none';
						document.getElementById("search_of").style.display='none';
						document.getElementById("search_on").style.display='';
						document.getElementById("btn-search").style.top="-15px";
			}
			

			});
		});
    </script>
  <div class="bdropbottom">
     <div class="fade_in">
		<div width="300px"> <a class="about_com"><div id="ShowMe5" class="under-title-comm">MyDIO Communities</div></a></div>
            <div class="center-310">
            
                <form class="about_commun" autocomplete="off" action="#" method="POST" id="about_commun" <?php if ( $hidden ) echo 'style="display:none;"'; ?>>
                  <div class="admininfobox">
                    <div style="width:20px; position:absolute; height:20px; top:2px; text-align:right; left:278px;">
                    <a class="about_com"><h3>X</h3></a></div>
                     <b>About MyDIO Communities</b>
                     <p>&nbsp;</p>     
                   <? 
				   // Find out if this user has administrative access to any existing communities
				   $community_admin_dets=\MyDIO_Functions\Functions_MyDIO::community_admins($mem_id);
					?>
      <p style="text-align: justify;">MyDIO communities are empowered to help define, create and verify those actions which can be rewarded through the MyDIO platform.<p>&nbsp;</p> A MyDIO community needs to include a minimum of 3 members before being activated on the MyDIO platform
                        </p>
                        
                        <p>
                        <p>&nbsp;</p>             
                        </div>  
                          <p>&nbsp;</p>    
                    </form>  
                    <?
					include('search.php');
					if($logged)
                    {   
					 }
					else
						{ ?>
                       <div class="settings-not-logged"> <p>&nbsp;</p> 
                    		<h4 style="text-align:center;"><p>IN ORDER TO CREATE<p>OR EDIT COMMUNITIES<br>ON MyDIO PLEASE<p> <a href="../../login/index.php">LOGIN</a><br>OR<br><a href="../../signup/">REGISTER FOR A NEW ACCOUNT</a></h4>               
                    <? } ?>                
                    <? if($logged)
							{ ?>
							<form id="create" method="get" action="admin/create_community.php" style="display:none;" >
							  <p>&nbsp;</p>    
								<input  class="btn" type="submit" value="Create a new community">
							</form>
							<!-- <form method="get" action="admin/index.php">
								<input  class="btn" type="submit" value="&nbsp;Community Admin&nbsp;">
							</form> -->
							<? } ?>
                    </div>
                    <div class="about_frame">
                    <?php
                    
                    if(isset($_POST['q']))
                    {
                    $q = $_POST['q'];	
                    }
                    else
                    {
                    $q = '';	
                    }
                    
                    
                    if(empty($q))
                    {
                    $sql = "SELECT * FROM community WHERE status='APPROVED'";
                    }
                    else
                    {
                     $sql="SELECT * FROM community WHERE status='APPROVED' AND community_name LIKE '%" . $q . "%'  OR status='APPROVED' AND community_description LIKE '%" . $q  ."%'";	
                    }
                    
                    
                    
                    if (mysqli_query($bd,$sql)) 
                    {
                    $result = mysqli_query($bd,$sql);				
                    } 
                    
                    else 
                    {
                    echo "Error: " . $sql . "<br>" . mysqli_error($bd);
                    }
                    
                    
                    
                    while ( $output = mysqli_fetch_assoc($result)){
                        
                 ?> <li class="tile-list-community"> <?
            
                      if($community_admin_dets!=""){
									  //print_r($community_admin_dets);
									  foreach ($community_admin_dets as $value)
									  {
										   foreach ($value as $key => $newvalue)
										   {
											   if ($key=="community_id")
											   {
												    if($newvalue===$output['community_id'])
														 { ?>
														 <div class="edit-community"><form method='post' action='admin/community_admin.php'><input type='hidden' name='redirect' value='<? echo $_SERVER['PHP_SELF']; ?>'><input type='hidden' name='community_id' value='<? echo $output['community_id']; ?>'><input class='btn' type='submit' name='community_name' value='<? echo "Edit"; ?>'></form></div>
														 <? }
											   
											   }
										 
										   }}
									 echo $community_admin_dets['community_id'];
									
								  ?>
                        <? } 
						else
						{?>                  <? } 
                        
                        if(!empty($output['community_image'])){
                        
                        echo "<a style=\"text-decoration:none;\" href=\"profile.php?id=".$output['community_id']."\">";
                        echo "<div class=\"directory_image\" style=\"background: url('".$output['community_image']."');background-size: cover; height:155px; background-repeat: no-repeat;\">";
                    
                        echo "<div class=\"padding2\">";
                        echo "</div>";
                        echo "</div></a>";
                    
                       ?><table>
  <tr>
    <td colspan="2"><h5><? echo $output['community_name']; ?></h5></a></td>

  </tr>
  <tr>
    <td colspan="2"><? echo substr($output['community_description'], 0, '190') . "<a href='profile.php?id=".$output['community_id']."\'>..read more...</a>"; ?></td>
  </tr>
  </table>
  <table>
  <tr>
    <td align="left" valign="bottom"></td>
    <td align="right" valign="bottom" style="color:green;">rewardable actions</td>
  </tr>
</table>
<?

                        //echo "<p>".$output['community_description']."</p>";
                        
                        }
                        else {
                            echo "<a style=\"text-decoration:none;\" href=\"profile.php?id=".$output['community_id']."\">";
                            echo "<div class=\"directory_image\" style=\"background: url('".$output['community_image']."');background-size: cover; height:155px; background-repeat: no-repeat;\">";
                            
                            
                            echo "<div class=\"padding2\">";
                            
                            echo "</div>";
                            echo "</div>";
                            
                            echo "<h5>".$output['community_name']."</h5>";
                            echo "</a>";
                            echo substr($output['community_description'], 0, '170') . "<a href=\"profile.php?id=".$output['community_id']."\">..read more...</a>";
                        }
						       ?> </li><?
                        }
                        
                        
                    
                    ?>


</div>
</div>
</div>
<script src="/js/all-225.js"></script>
</body>
</html>
