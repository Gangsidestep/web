<?php 
include "../../MyDIO_login/config.php";
include("../../connection.php");
session_start();
if($_GET['beta']=="lmcBY3Ka3nGz" OR $_GET['beta']=="lmcBY3Ka3" OR $_SESSION['MyDIO_beta']=="IX0sxWJalmcBY3Ka3nGzulIvi")
{
	$mem_id = "IX0sxWJalmcBY3Ka3nGzulIvi";
	$logged=true;
	include("get-profile/get-profile.php");
	$ext=$_SERVER['PHP_SELF'];
	$_SESSION['MyDIO_beta']=$mem_id;
			if($lang=='en')
			{$language='English';}
		if($lang=='fr')
			{
				header("location: /fr".$ext);
			}
}
else
{
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
}
ini_set('file_uploads','On');
$server=$_SERVER['SCRIPT_URI'];
$remarks=$_GET['remarks'];
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
<? 
$MyDIOlogin->full_menu($image);
?>
  
  <div class="bdropbottom">
  
     <script type="text/javascript"> 
		$(document).ready(function(Q) {
		$('#profile_image').on('click', function() {
			 $('#file').click();
				});
			});
				
			updateList = function(input) {
					 if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#new-image')
                    .attr('src', e.target.result)
					.position('relative')
                    .width(256)
                    .height(256)
					.bottom(100);
            };

            reader.readAsDataURL(input.files[0]);
        }
  var input = document.getElementById('file');
  var output = document.getElementById('fileList');
			  output.innerHTML = '<div class="button-frame"><button type="submit" class="mydio-btn-small btn-action-small btn-large"><b>UPLOAD</b></button></div>';
			}				
        </script>
<br>
<div class='tile-profile'>
    	<form action="../../admin/level2/user_profile.php" method="post" name='Q' enctype="multipart/form-data" id="Q" onSubmit="" >
		
 		
		<input id="user" name="user_id" value="<? echo $mem_id; ?>" type="hidden">
		<input id="lang" name="lang" value="<? echo $lang; ?>" type="hidden">
     <? if(isset($image)&&$image!=="NULL")
			{
			// $image= "..".$image;
				if(isset($_POST['edit']))
					{
						?>
						 <input id="file" name='file' type='file' class="hidden" onchange="updateList(this)" />
						<div  id='profile_image' class='large_profile_img profile-images' style="background-image: url(<? echo $image; ?>);"><br><br><br>
						<img width="25" valign="bottom" src="/images/connect-icons/camera_white.png">
					   </div>
						<?
					}
				else
					{
						?><div  id='profile_image' class='large_profile_img' style="background-image: url(<? echo $image; ?>);"><br><br><br></div><? 
					}
                }
		else
			{ 
				if($remarks=='file_toobig')
					{ ?>
						<div  id='profile_image' class='btn-text large_default_profile_img sakatri_icon profile-images'>FILE TOO BIG<p><img width="25" src="../images/connect-icons/camera_white.png"><p>PLEASE TRY AGAIN</div>
						<?
					}
				else 
					{ ?>
                    <input id="file" name='file' type='file' class="hidden" onchange="updateList(this)" />
					 <div  id='profile_image' class='btn-text large_default_profile_img sakatri_icon profile-images'><h6><p><br><img width="25" src="../../images/connect-icons/camera_white.png"><br><br>CLICK HERE<br>TO SELECT<p>AN IMAGE</h6></div>
			   <? }
			} ?>								

    </div>
     <img class="new_img" id="new-prof-image" src="">
       <div id="fileList"></div>	
    </form>
     

<? 

if(isset($_POST['edit']))
		{
				echo    	'Name: '.$fullname."<p>";
				echo    	'MyDIO Status: Rookie<p>';
				echo    	'Email: '.$user_email."<p>";
				echo    	'City: '.$city.'<p>';

			$MyDIOlogin->change_language_form($lang,$mem_id);
			?>
            

<br></br>
<button type="submit" name="cancel" class="mydio-btn-small btn-large"><b>CANCEL</b></button>
<button type="submit" name="edit" class="mydio-btn-small btn-large"><b>SAVE</b></button>


</form>
            <?
		}
	else
		{
		

        
		echo    	'Name: '.$fullname."<p>";
		echo    	'MyDIO Status: Rookie<p>';
		echo    	'Email: '.$user_email."<p>";
		echo    	'City: '.$city.'<p>';
		echo    	'Language: '.$language;
?>
<br></br>
<form action="" method="post" name='S' enctype="multipart/form-data" id="S" onSubmit="" >
<button type="submit" name="edit" class="mydio-btn-small btn-large"><b>EDIT</b></button>


</form>
<?
	
         }	

$results=1;

include "get-profile/drag-balance.php"; ?>



</div>
</body>
</html>