<?php
session_start();
include "MyDIO_login/config.php";
include("connection.php");
if($MyDIOlogin->loggedIn)
	{
		// User logged in with new system
		$mem_id = $_SESSION['MyDIOusercookie'];
		$logged=true;
		include("login/loggedin/get-profile/get-profile.php");
	}
else
	{ 
		$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
		switch ($lang)
			{
				case "fr":
					//echo "PAGE FR";
					header("Location: about_fr.php");
					exit();	
				break;
				default:
				//echo "PAGE EN - Setting Default";
				//include EN in all other cases of different lang detection
			}
		$logged=false;
	}
if (!empty($_POST['MyDIO_page'])) {
    $_SESSION['MyDIO_page']= $_POST['MyDIO_page'];
}
		include "MyDIO_functions/config_functions.php";
		$bus_stops=\MyDIO_Functions\Functions_MyDIO::get_busstop_locations('TPG');
		//echo "Bus Stops: ".$bus_stops; exit();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>My Drop In The Oceans | Tracking</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta property="fb:app_id" content="1476200282626466">
<meta property="og:type" content="MyDIO:website">
<meta property="og:site_name" content="My Drop In The Oceans">
<meta property="og:title" content="mydio_busi_7835">
<meta property="og:image" content="https://www.mydropintheoceans.org/images/logo/mydio_busi_7835.jpg">
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
<link rel="shortcut icon" href="images/favicon.ico">
<link href="/css/twittermydiostyle.css" rel="stylesheet" type="text/css">
<link href="/css/mydiostyle.css" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCn6C041sdi9PdqPRo_dpCcYwC7h-5QwBU&v=3.11&sensor=false" type="text/javascript"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCn6C041sdi9PdqPRo_dpCcYwC7h-5QwBU&v&libraries=places">

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

   
<script src="/js/all-225.js"></script>
  </head>
  <style>
	input, textarea { -webkit-box-sizing: border-box; }
	input { width: 100%; font-size: 20px; }
	textarea { width: 100%; height: 200px; }
	input[type="button"],
	input[type="submit"] { width: 24%; }
	body { text-align: center; }
</style>
<body 
	class="no-sidebar">
<div id="fb-root"></div>
<!--[if lt IE 8]>
<div class="alert alert-error alert-top">Your browser is not supported. Please download a newer browser like <a href="https://www.google.com/chrome/">Google Chrome</a></div>
<![endif]--><noscript>
	<div class="alert alert-error alert-top">
		It looks like your browser doesn't support javascript. This page will work a lot better for you if you activate javascript or download a newer browser like <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a>
	</div>
</noscript>
 <script>
		jQuery(function($){
		$("a.rewards-btn").click(function(){
			//alert('rewards');
			document.getElementById("about-page").style.display="none";
			document.getElementById("rewards-page").style.display="";
			$.ajax({
					type: "POST",
					url: "about.php",
					data: { MyDIO_page: "rewards" }
					});
			});
		});
				jQuery(function($){
		$("a.about-btn").click(function(){
			<? //$_SESSION['MyDIO_page']="about"; ?>
			//alert('about');
			document.getElementById("about-page").style.display="";
			document.getElementById("rewards-page").style.display="none";
						$.ajax({
					type: "POST",
					url: "about.php",
					data: { MyDIO_page: "about" }
					});
			});
		});
</script>
  <div class="bdropbottom">
   <div class="fade_in">
 <form action="" name="myform" id="myform" method="post">
	<!--<input name="t_action" value="http://save.php">-->
	<textarea readonly name="message" ></textarea>
    <input value="Tracking coordinates" type="hidden" name="subject">
	<input value="Start Tracking" type="button" onclick="startTracking();this.disabled=true;">
	<input value="Reset Trip" type="button" onclick="resetTrip();">
	<input value="Use Server" type="button" onclick="sendreport();">
</form>
<script>

	// check DOM Ready
				$(document).ready(function() {
				// execute
				(function() {
				// map options
				var options = {
				zoom: 17,
				center: new google.maps.LatLng(46.2000, 6.1500)
				};
			// init map
				var map = new google.maps.Map(document.getElementById('map_frame'), options);
				 //var pos= new google.maps.LatLng(46.2000, 6.1500);
				  //addMarker(pos);
			var overlay;
overlay = new google.maps.OverlayView();
overlay.draw = function() {};
overlay.setMap(map);

    var point = new google.maps.Point(event.pageX,event.pageY);
    var locate = overlay.getProjection().fromContainerPixelToLatLng(point); //get map coordinates by click
				
			 //infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
 // alert(locate);  
  service.nearbySearch({
    location: locate,
    radius: 500,
    type: ['bus_station'],
  }, callback);
  
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
		//alert(results.length);
      //createMarker(results[i]);
	//alert(results[i].geometry.location);
	  addMarker(results[i].geometry.location);

    }
  }
}

			  function addMarker(pos) 
			  {
					var marker = new google.maps.Marker
												({
													position: pos,
													//animation: google.maps.Animation.BOUNCE,
													map: map,
													icon: '../images/mydio_spot.png'
												  });
			  }
	 }
	 
	 
	 )();
			}
			);




  
</script>
<div class="center-308">
<div class="reveal_map"><div id="map_frame" class="track_map_cadre"></div></div></div>
  </div>		
</div>
<div class="control-group ">
					

</div>

<div class="totop"><nav><li class="logo nav-item"><a href="#" class="home">MyDIO&apos;</a> </li>

</nav></div>
  <div class="to-top hidden">
  
  <a id="toTop" href="#">
  <div class="to-top-icon icon"></div></a>
	</div>


 
 
</body>
</html>