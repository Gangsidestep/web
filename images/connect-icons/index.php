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
				if($mem_id===$_SESSION['MyDIO_admin_logSyscuruser'])
				{$admin=true;}
				else
				{$admin=false;}
				include("../login/loggedin/get-profile/get-profile.php");
			}
		else 
			{
				$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
				$logged 		= false;
			}
	}
if (!empty($_POST['MyDIO_page']))
	{
		$_SESSION['MyDIO_page']= $_POST['MyDIO_page'];
	}
	else
	{
		$_SESSION['MyDIO_page']= $_GET['p'];
		}
$server=$_SERVER['SCRIPT_URI'];
$redirect=urlencode($server);
$page="MyDIO Communities";

	// Process the creation of a new Community
if (isset($_POST['create_new_community'])&&$_POST['create_new_community']!=""){
	$community_name = $_POST['community_name'];
	$community_description = $_POST['community_description'];
	// get a new community unique identifier
	$community_id=\MyDIO_Functions\Functions_MyDIO::create_community_uid();
	include "community_image_and_thmb.php";
	//echo $community_id; exit();
	 $new_community=\MyDIO_Functions\Functions_MyDIO::create_community($community_id,$community_name,$community_description,$mem_id,$storethumbpath);
	//echo $community_id." & ".$storethumbpath; exit();
	//echo "<p>Community created.</p>";
	  //echo $community_id." & ".$new_community." & ".$storethumbpath.$test.$test2; exit();
	  unset($_POST);
	header("Location: /community/");
	exit();	
}
?>

<!DOCTYPE html>
<html lang="en">
<? include('../login/loggedin/headers.php') ?>
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

include "admin/language_support.php";

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
												<? if(empty($_POST['q']))
   			{ ?>
			document.getElementById("search_on").style.display='none';
				<? } 
				else
				 { ?> document.getElementById("search_on").style.display='';	<? } ?>
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
						<? if(empty($_POST['q']))
   			{ ?>
			document.getElementById("search_on").style.display='none';
				<? } 
				else
				 { ?> document.getElementById("search_on").style.display='';	<? } ?>
						
						document.getElementById("btn-search").style.top="-7px";
			}
			else {
				el.style.display = '';
						document.getElementById("about").style.display='none';
						document.getElementById("settings").style.display='none';
						document.getElementById("create").style.display='none';
						document.getElementById("about_commun").style.display='none';
						document.getElementById("search_of").style.display='none';
						document.getElementById("search_on").style.display='';
						document.getElementById("btn-search").style.top="-7px";
			}
			

			});
		});
 		jQuery(function($){
		$("a.create-btn").click(function(){
			<? //$_SESSION['MyDIO_page']="about"; ?>
			//alert('about');
			//document.getElementById("about-page").style.display="";
			document.getElementById("communities-page").style.display="none";
			document.getElementById("create").style.display="none";
			document.getElementById("create-communities-page").style.display="";
			
			//document.getElementById("spend-page").style.display="none";
						$.ajax({
					type: "POST",
					url: "index.php",
					data: { MyDIO_page: "create" }
					});
			});
		});
    </script>
  <div class="bdropbottom">
     <div class="fade_in">
		<div width="300px"> <a class="about_com"><div id="ShowMe5" class="under-title-comm"><? echo $scroll_down_title; ?></div></a></div>
            <div class="center-310">
                <form class="about_commun" autocomplete="off" action="#" method="POST" id="about_commun" <?php if ( $hidden ) echo 'style="display:none;"'; ?>>
                  <div class="admininfobox">
                    <div style="width:20px; position:absolute; height:20px; top:2px; text-align:right; left:278px;">
                    <a class="about_com"><h3>X</h3></a></div>
                     <b>About MyDIO Communities</b>
                     <p>&nbsp;</p>     
                   <? 
				   // find out if user has community active admin status
				   if($community_adm)
				   {
					   // Find out if this user has administrative access to any existing communities
					   $community_admin_dets=\MyDIO_Functions\Functions_MyDIO::community_admins($mem_id);
				   }
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
							<form id="create" method="get" action="" style="display:none;" >
							  <p>&nbsp;</p>    
								<a class="create-btn">  <input  class="btn" value="<? echo $add_leader_button; ?>"></a>
							</form>
							<!-- <form method="get" action="admin/index.php">
								<input  class="btn" type="submit" value="&nbsp;Community Admin&nbsp;">
							</form> -->
							<? } ?>
                    </div>
                    <div class="about_frame">
                    	<div id="communities-page" <? if($_SESSION['MyDIO_page']=='search_communities'||$_SESSION['MyDIO_page']=="")
								{
									echo " style='display:'';'";
									$_SESSION['MyDIO_page']="search_communities";
								}
							else
								{
									if($_SESSION['MyDIO_page']=='create_community')
										{
											echo " style='display:none;'";
										}
								}
								?> >  
								<? 
                                //$_SESSION['MyDIO_page']="rewards";
                                include "communities-content.php";
                                ?>
                            </div>
                            <div id="create-communities-page"  <? if(isset($_SESSION['MyDIO_page'])&&$_SESSION['MyDIO_page']=="create_community"){}else{ echo " style='display:none;'";} ?>>  
								<? 
                                //$_SESSION['MyDIO_page']="rewards";
                                include "admin/create-contents.php";
                                ?>
                            </div>
                            <? 
                                //echo     $new_community;
                                ?>
                        
                   

</div>
</div>
</div>

</body>
</html>
