<?php
include "../../../MyDIO_login/config.php";
include("../../../connection.php");
session_start();		
if($_SESSION['MyDIO_beta']=="IX0sxWJalmcBY3Ka3nGzulIvi")
	{
		$mem_id = "IX0sxWJalmcBY3Ka3nGzulIvi";
		$logged=true;
		
		$_SESSION['MyDIO_beta']=$mem_id;
	}
else
	{
if($MyDIOlogin->loggedIn)
	{
		// User logged in with new system
		$logged=true;
		
		$mem_id = $_SESSION['MyDIOusercookie'];
	}
else
	{ 
		// User not logged in with old password system or Facebook login
		//echo $_SESSION['MyDIOusercookie'];
		//header("location: /login/");
	}
	}
include("../../../login/loggedin/get-profile/get-profile.php");
// if a company name has been posted to the page this take priority over SESSION
if(!isset($_POST['company']))
	{// No company name has been posted to the page!!


	if(isset($_GET['company_id']))
		{
			$companyid=$_GET['company_id'];
			$sql = "SELECT * FROM mydio_busi_7835 WHERE busi_mem_id_3753='$companyid'";
		}
	else
		{
			// No company name or ID has been posted to the page: EXIT!!
			header("location: /index.php");
			exit();
		}
	}
	
else
	{
		// a company name has been posted use it to define session company
		$companyname=$_POST['company'];
		$sql = "SELECT * FROM mydio_busi_7835 WHERE name_compan3='$companyname'";
	}

$result = mysqli_query($bd, $sql);
if($row = mysqli_fetch_array($result, MYSQLI_BOTH))
	{
		$companyname=$row['name_compan3'];
		$companyid	=$row['busi_mem_id_3753'];
		$email 		= $row['email'];
		$fname 		= $row['firstname'];
		$status 	= $row['dio_status'];
		$img		=$row['img2983locaton'];
		$logo		=$row['logo2983location'];
		$city		=$row['cit3e'];
		$cmpydescon	=$row['Description'];
		$ydio		=$row['why_mydio'];
		$wwwsite	=$row['w38bsite'];
		$condits	=$row['condits'];
		$map		=$row['map_google'];
		$address1	=$row['address1'];
		$address2	=$row['address2'];
		$postcode	=$row['postcode'];
		$drivers	=$row['loc_drivers'];
		$sub_industry =$row['sub_industry'];
		if($sub_industry=="private_chauffeured_transport")
		{$collaborators=true;}
		$mydio_store			=$row['MyDIOStore_active'];
		$rewardable_action=$row['rewardable_action'];
		$ecomm_status=$row['ecomm_active'];
		$sql = "SELECT * FROM community WHERE community_name='$companyname'";
		if (mysqli_query($bd,$sql)) 
			{
				$result = mysqli_query($bd,$sql);		
				$output = mysqli_fetch_assoc($result);
				$community_id = $output['community_id'];		
			} 
	}
	if($_GET['gps']&&$mydio_store)
		{
			header("location: /MyDIOnlineStore/product_list.php?company_id=".$companyid."&company_name=".$companyname);
		}
	$redirect=$_SERVER['PHP_SELF']."?company_id=".$companyid;
?>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCn6C041sdi9PdqPRo_dpCcYwC7h-5QwBU&v=3.11&sensor=false" type="text/javascript"></script>

  <? if($map=='address found')
  		{ ?>
			<script type="text/javascript">
					// check DOM Ready
				$(document).ready(function() {
				// execute
				(function() {
				// map options
				var options = {
				zoom: 15,
				center: new google.maps.LatLng(46.2000, 6.1500)
				};
			// init map
				var map = new google.maps.Map(document.getElementById('map_frame'), options);
				
				 $.ajax({
                    url: '../../../api/business/google_markers.php',
                    success:function(data){
                        //Loop through each location.
                        $.each(data, function(){
                            //Plot the location as a marker           
                       var pos = new google.maps.LatLng(this.lat, this.lng);
                            var company = (this.name_compan3);
                            var companyid = (this.busi_mem_id_3753);
                            var address1 = (this.address1);
                            var postcode = (this.postcode);
                            var city = (this.cit3e);
                            var country = (this.country);
                            if(company=='<? echo $companyname ?>')
                                {
                                    map.setCenter(pos); 
                                    var marker = new google.maps.Marker
                                        ({
                                            position: pos, animation: google.maps.Animation.BOUNCE,
                                            map: map,
                                            icon: '/images/white_Marker_blue.png'
                                        
                                          });		
                                }
                         else   {var marker = new google.maps.Marker({
                                position: pos,
                                map: map,
                                icon: '/images/blue_Marker_white.png'      
                            });}
                                                (function(marker) {
                            // add click event
                            google.maps.event.addListener(marker, 'click', function() {
        
                            var hrefaddress="<a href='spendbusinessprofile.php?company_id="+companyid;
                            
                            infowindow = new google.maps.InfoWindow({
                            content: "<div style=\"color: #000; text-align: left;\" >"+ hrefaddress +"'><b>" + company +"</a></b><p>"+ address1 +", "+city +", "+ country + "</div>"
                            });
                            infowindow.open(map, marker);
                            });
                        
                            })(marker);
        
                        });
                    }
                });
			})();
			}
			);
        </script>
<? } ?>

  <? if($collaborators)
  		{ ?>
				<script type="text/javascript">
                var map;      
                // check DOM Ready
                $(document).ready(function() {
                // execute
                (function() {
                // map options
                var options = {
                zoom: 16,
                center: new google.maps.LatLng(46.2000, 6.1500),
				    zoomControl: true,
					zoomControlOptions: {
						position: google.maps.ControlPosition.LEFT_CENTER
					},
					scaleControl: true,
					streetViewControl: true,
					streetViewControlOptions: {
						position: google.maps.ControlPosition.LEFT_TOP
					},
					fullscreenControl: true
  
                };   
                          if(navigator.geolocation)
						  { 
                            navigator.geolocation.getCurrentPosition(function(position) { 
                            initialLocation = new 
                            google.maps.LatLng(position.coords.latitude,position.coords.longitude); 
                                var lat = position.coords.latitude;
                                var lng = position.coords.longitude;
                                initialize();
                             codeLatLng(lat, lng);
                              map.setCenter(initialLocation); 
                              
                              var myMarker = new google.maps.Marker({
                                        position: initialLocation,
                                        map: map,
                                         icon: '/images/white_Marker_blue.png',
                                         draggable:true,
                                         title:"Move to new pickup"	
                                    });                             
                    google.maps.event.addListener(myMarker, 'dragend', function(evt){
                    codeLatLng(evt.latLng.lat().toFixed(5), evt.latLng.lng().toFixed(5));
                });
                google.maps.event.addListener(myMarker, 'dragstart', function(evt){
                    document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
                });
                (function(myMarker)
                                        {
                                            // add click event
                                            google.maps.event.addListener(myMarker, 'click', function() {
                                                    infowindow = new google.maps.InfoWindow({
                                                                    content: "<div style=\"color: #51b36d; text-align: left;\" ><b>Move to new pick up location</a></b><p></div>"
                                                                });
                
                                                            
                                             if (infowindow)
                                                {
                                                    infowindow.close();
                                                }
                                            infowindow.open(map, myMarker);
                                            map.setCenter(pos);
                                            smoothZoom(map, 15, map.getZoom()); // call smoothZoom, parameters map, final zoomLevel, and starting zoom level
                                              // the smooth zoom function
                                            function smoothZoom (map, max, cnt)
                                                {
                                                    map.setZoom(15)
                                                    if (cnt >= max)
                                                        {
                                                            return;
                                                        }
                                                    else
                                                        {
                                                            y = google.maps.event.addListener(map, 'zoom_changed', function(event){
                                                                //google.maps.event.removeListener(y);
                                                                self.smoothZoom(map, max, cnt + 1);
                                                                    });		
                                                            setTimeout(function(){map.setZoom(cnt)}, 80);
                                                        }
                                                }
                                                            });
                                            })(myMarker);
  
                            }); 
                          }       
                          var geocoder;
                            function initialize()
                                {
                                    geocoder = new google.maps.Geocoder();
                                }
                          
                            function codeLatLng(lat, lng)
                                {
										var latlng = new google.maps.LatLng(lat, lng);
										geocoder.geocode({'latLng': latlng}, function(results, status) {
										  if (status == google.maps.GeocoderStatus.OK) {
										  console.log(results)
											if (results[1]) {
											 //formatted address
											 document.getElementById('show-address').innerHTML="<b>Pickup location: </b>" + results[0].formatted_address ;
										 document.getElementById('pickup_address').setAttribute("value", results[0].formatted_address);
										 document.getElementById('pickup_lat').setAttribute("value", lat);
										 document.getElementById('pickup_lng').setAttribute("value", lng);
											 //alert(results[0].formatted_address)
											//find country name
												 for (var i=0; i<results[0].address_components.length; i++) {
												for (var b=0;b<results[0].address_components[i].types.length;b++) {
									
												//there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
													if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
														//this is the object you are looking for
														city= results[0].address_components[i];
														break;
													}
												}
											}
											//city data
											//alert(city.short_name + " " + city.long_name)
									
									
											} else {
											  alert("Enter an address");
											}
										  } else {
											alert("Geocoder failed due to: " + status);
										  }
										});
                                  }
                        
                        
                // init map
                map = new google.maps.Map(document.getElementById('map_frame'), options); 
                 $.ajax({
                            url: 'https://www.mydropintheoceans.org/api/business/google_driver_markers.php',
                            success:function(data){
                                //Loop through each location.
                                $.each(data, function(){
                                    //Plot the location as a marker		
                              var pos = new google.maps.LatLng(this.lat, this.lng);	
                                var companyid = (this.driver_id);
                                var online = (this.online_status);
                                var last = (this.last_location);
                                var actual_t= <? echo time(); ?>;
                                if(online==false)
                                {
                                     var marker = new google.maps.Marker({
                                        position: pos,
                                        map: map,
                                        icon: '/images/white_Marker_taki_offline_bike____OFF.png'	
                                    });
                                    
                                }
                                else
                                {
                                    var marker = new google.maps.Marker({
                                        position: pos,
                                        map: map,
                                        icon: '/images/white_Marker_taki_bike.png'	
                                    });
                                }
                          
                           (function(marker)
                                        {
                                            // add click event
                                            google.maps.event.addListener(marker, 'click', function() {
                                            var hrefaddress="<a href='../../login/loggedin/aboutmydio/spendbusinessprofile.php?company_id="+companyid;
                                            if(online==false)
                                                {
                                                    infowindow = new google.maps.InfoWindow({
                                                                    content: "<div style=\"color: #000; text-align: left;\" ><b>Offline since: "+actual_t+" "+last+"</a></b><p></div>"
                                                                });
                                                }
                                            else
                                                {
                                                            infowindow = new google.maps.InfoWindow({
                                                                    content: "<div style=\"color: #000; text-align: left;\" ><b>" + companyid +"</a></b><p></div>"
                                                                });
                                                }
                                             if (infowindow)
                                                {
                                                    infowindow.close();
                                                }
                                            infowindow.open(map, marker);
                                            map.setCenter(pos);
                                            smoothZoom(map, 15, map.getZoom()); // call smoothZoom, parameters map, final zoomLevel, and starting zoom level
                                              // the smooth zoom function
                                            function smoothZoom (map, max, cnt)
                                                {
                                                    map.setZoom(15)
                                                    if (cnt >= max)
                                                        {
                                                            return;
                                                        }
                                                    else
                                                        {
                                                            y = google.maps.event.addListener(map, 'zoom_changed', function(event){
                                                                //google.maps.event.removeListener(y);
                                                                self.smoothZoom(map, max, cnt + 1);
                                                                    });		
                                                            setTimeout(function(){map.setZoom(cnt)}, 80);
                                                        }
                                                }
                                                            });
                                            })(marker);
                                });
                            },
                        });    
                })();       
                }
                );  
                // the smooth zoom function
				function smoothZoom (map, max, cnt)
					{
						//map.setZoom(max);
					if (cnt >= max)
						{
							return;
						}
					else {
						y = google.maps.event.addListener(map, 'zoom_changed', function(event){
							google.maps.event.removeListener(y);
							self.smoothZoom(map, max, cnt + 1);
								});
							setTimeout(function(){map.setZoom(cnt)}, 160);
							}
					}      
				function newCenter(newlat,newlng)
					 {				
						var newcent = new google.maps.LatLng(newlat,newlng);
						map.setCenter(newcent);
						smoothZoom(map, 18, map.getZoom());
					}    																				
            
            </script>

<? } ?>

<title>My Drop In The Oceans | MyDIO <? echo $companyname; ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta property="fb:app_id" content="1476200282626466">
<meta property="og:type" content="article" />
<meta property="og:site_name" content="My Drop In The Oceans" />
<meta property="og:title" content="MyDIO">
<meta property="og:image" content="https://www.mydropintheoceans.org/images/logo/mydio.jpg">
<meta property="og:description" content="Empowering People to Value Nature">
<meta property="og:url" content="www.mydropintheoceans.org">

<meta property="og:image:width" content="450"/>

<meta property="og:image:height" content="298"/>
<meta property="og:description" content="Compare your lifestyle to a list of endandgered species to see which wild animal you would be most likely to save first">


<meta property="og:image" content="https://www.mydropintheoceans.org<? echo $companyname ?>">
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
  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
  
<body leftmargin="3px" marginwidth="3px" 
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
if($logged)
	{ 
		$MyDIOlogin->full_menu($image);
	}
else 
	{ 
	?>
        <div class="header"><nav>
        <a  class="hamburger"
                    data-toggle="dropdown"
                    data-func="LoadFromTopBar"
                    href="loggedin/account.php">About</a> <li> · </li>
           <li class="logo nav-item"><a href="account.php" class="home">MyDIO&apos;</a> </li>
            <ul class="dropdown-menu">
             <li><a href="/about.php">About Us</a></li>
             <!-- <li><a href="create_a_quiz.php">Create a new Quiz</a></li> 
              <li class="divider"></li> 
              <li><a href="../admin_choice.php">Admin Panel</a></li>-->
            </ul>
            <div><a href="/index.php" class="user-icon-mobile"
            data-toggle="dropdown"
                    data-func="LoadFromTopBar"></a>
            <ul id="user-actions" class="pull-right dropdown-menu">
            <li><a href="/login/index.php?redirect=<? echo urlencode($redirect); ?>">Login</a></li>
            <li><a href="/signup/index.php?redirect=<? echo urlencode($redirect); ?>">Sign up</a></li>        
            </ul>
            </div>    
          </nav>
         </div>
	<? } ?>
  
    <div class="busiframe">
  <div class="bdropbottom">
   <div class="fade_in">
<? //echo $_COOKIE['MyDIOlogin']."<p>hi<p>".$_COOKIE['MyDIOrememberme']."<p>".$_SESSION['MyDIOusercookie']; 
?>
         <table id="fullprofile1" class="tableadjust">
    <tr>
      <?php echo "<a href=//$wwwsite>" ?>
      <td class="size" height="180" rowspan="2" background="../../../businesssignup/<?php echo $img; ?>">
      <p>&nbsp;</p>
              
    </td>
		<?php echo "</a>" ?>

    </tr>
   
     
      </table>

    
	<div class="busyprofile">
               <div class="logonav"><div class="buslogo"  style="background-image: url('../../../businesssignup/<?php echo $logo; ?>');"></div></div>
		<div>
	    <div class="fullprofile" id="fullprofile2">

	   

     <table align="left" width="300" >
    
    <tr valign="top">
      <td width="77" height="46" align="left" padding="3">&nbsp;</td>
      <td width="203" align="left" padding="3"><h5><?php echo $companyname ?></h5><h6><?php echo $city ?></h6></td>
    </tr>  
    <tr valign="top">

      <td height="60" padding="3" align="left" colspan="2">
        <p>
          <h6><?php echo $cmpydescon ?></h6>
        </td>
      </tr>
        </table> 
         					<script>
								jQuery(function($){
								$("a.driver-map").click(function(){
									$("div.reveal_map").slideToggle(120, function(){});
									});
								});
								jQuery(function($){
								$("a.user-location").click(function(){
									$("div.reveal_location").slideToggle(120, function(){});
									 document.getElementById('map_frame').style.height="520px";

									 document.getElementById('map_frame').style.maxWidth = "312px";
									 document.getElementById('map_frame').style.position="fixed";
									 document.getElementById('map_frame').style.left="auto"; 
									  document.getElementById('map_frame').style.right="auto"; 
									 document.getElementById('map_frame').style.top="44px";
									 document.getElementById('fullprofile1').style.display="none";
									  document.getElementById('fullprofile2').style.display="none";
									   document.getElementById('fullprofile3').style.display="none";
									    document.getElementById('fullprofile4').style.display="none";
										 document.getElementById('fullprofile5').style.display="none";
										  document.getElementById('fullprofile6').style.display="none";
										   document.getElementById('fullprofile7').style.display="none";
										    document.getElementById('fullprofile8').style.display="none";
											   document.getElementById('fullprofile9').style.display="none";
									});
								});
								jQuery(function($){
								$("a.cancel").click(function(){
									cancel_driver_order();
									$("div.reveal_location").slideToggle(120, function(){});
									 document.getElementById('map_frame').style.height="210px";
									 document.getElementById('map_frame').style.width="304px";
									 document.getElementById('map_frame').style.position="relative";
									 document.getElementById('map_frame').style.top="";
									 document.getElementById('fullprofile1').style.display="";
									  document.getElementById('fullprofile2').style.display="";
									   document.getElementById('fullprofile3').style.display="";
									    document.getElementById('fullprofile4').style.display="";
										 document.getElementById('fullprofile5').style.display="";
										  document.getElementById('fullprofile6').style.display="";
										   document.getElementById('fullprofile7').style.display="";
										    document.getElementById('fullprofile8').style.display="";
											   document.getElementById('fullprofile9').style.display="";
									});
								});
								$(document).ready(function () {
									   $("#change").on('click', function () {
										  newLocation(55.749792,37.632495);
										});
									});
							</script>
  <?

 if($drivers)
	{ ?>
 
    <!-- <a name="btn-top"></a><a class="driver-map"><button type='submit' class='btn-large-blue'>
      <table>
      <tr>
      <td>
	 <h4>Pay <?php echo $status; ?>% here with DIO<br></h4> 
      </td>
      	<td>
      <img src="/images/icon_MyDIO.png" width="40" height="40">
	   </td>
      </tr>
      </table></button></a>    <h6>&nbsp;</h6> -->
                <?
		}
		else
		{
		if($ecomm_status=='TRUE' OR $mydio_store)
			{ ?>
                <form action="/MyDIOnlineStore/product_list.php" target="_self">
                <input type="hidden" name="company_name" value='<? echo $companyname; ?>' >
                <?
            }
		else
			{ 
				if(!$logged)
					{    ?>   
					<form class="businessspend"	method='post' action='/signup/index.php?redirect=<? echo urlencode($redirect); ?>'>
					<? }
				else
					{
					?>
                        <form class="businessspend"	method='post' action='../issue_store_voucher.php?company_id=<? echo $companyid; ?>'>
                          <?
                    }
			}
		
			?> 
	<input type='hidden' name='company_id'	value='<? echo $companyid; ?>'>
	  <button type='submit' class='btn-large-blue'>
      <table height="50px">
      <tr>
      <td>
	 <h4>Pay <?php echo $status; ?>% here with DIO<br></h4> 
      </td>
      	<td>
      <img src="/images/icon_MyDIO.png" width="40" height="40">
	   </td>
      </tr>
      </table></button></form>
<? } ?> 
    </div>
     <? if($drivers)
	 	{ ?>
            <div class="reveal_map"><div id="map_frame" class="small_map_cadre"></div></div>
             <p>&nbsp;</p>
            <div><a class="user-location"><button class="btn btn-flat btn-action btn-primary btn-large btn-large-green">Order a Taxi-Bike</button></a> <p>&nbsp;</p></div>                
     <? } ?>
     
     
        </div>

     <div class="fullprofile" id="fullprofile3">

         <?
		
		$sql = "SELECT * FROM community_action_participating_businesses WHERE busi_id='$companyid'";
		if (mysqli_query($bd,$sql)) 
			{
				$result = mysqli_query($bd,$sql);
				$rows = mysqli_num_rows($result);
				if ($rows > '0')
					{
				
						while ($output = mysqli_fetch_assoc($result))
							{		
								$act_id = $output['action_id'];
								$sql = "SELECT * FROM community_actions WHERE action_id='$act_id'";
								if (mysqli_query($bd,$sql)) 
									{
									$result = mysqli_query($bd,$sql);				
									} 
								else 
									{
										echo "Error: " . $sql . "<br>" . mysqli_error($bd);
									}
							
								$rows = mysqli_num_rows($result);
								if ($rows > '0')
									{  
								   		while ( $output = mysqli_fetch_assoc($result))
											{
												echo "<div class=\"rewardable_actions\">";
												echo "<div class=\"padding_actions\">";
												//echo "<div class=\"profile_name\">".$output['action_name']."</div>";
												if (!empty($output['action_image']))
													{
														echo "<div class=\"profile_image\" style=\"background: url('".$output['action_image']."'); background-size: cover; height:150px;\"></div>";
													}
												//echo "<div class=\"profile\">";
												echo "<div class=\"whitebackground\">";
												echo "<div class=\"padding\">";
												echo "<h4><p>Rewardable actions at ".$companyname."<br><a href='/community/action.php?redirect=".$redirect."&id=".$output['community_id']."&action=".$output['action_id']."'>".$output['action_name']."</a></h4>";
												if (!empty($output['action_description']))
													{
														echo " <table align='left' width='300' >
														<tr valign='top'>
														  <td  align='left' padding='3'><h6>".substr($output['action_description'], 0, '210') . "</h6><a href='/community/action.php?id=".$output['community_id']."&action=".$output['action_id']."'> - Read More...</a>";
														echo "<br></td></tr></table>";
													}
												//echo "<div style=\"text-align:center;\"><a class=\"btn\" href='action.php?id=".$output['community_id']."&action=".$output['action_id']."'>Earn ".$output['dio']." DIO</a></div>";
													echo "<div style=\"text-align:center;\"><a href='/community/action.php?redirect=".$redirect."&id=".$output['community_id']."&action=".$output['action_id']."'><button class=\"btn btn-flat btn-action btn-primary btn-large\"> Earn "; if($output['percentage_invoice']){ echo ($output['dio']+0)."% in DIO";}else{echo ($output['dio']+0)." DIO";}; echo "</button></a></div>";
												echo "</div>";
												//echo "</div>";
												echo "<br>";	
												echo "</div>";
												echo "</div>";
												echo "</div>";	
											}
									}
								
							}
						}
				}
				?>
            <p>

    </div>

    <div class="fullprofile" id="fullprofile4">

	    <? if(!$address1==''){ ?>

     <table align="left" width="300" >
    
    <tr valign="top">
      <td  align="left" padding="3"><h5>Address</h5></td>
    </tr>
    <tr valign="top">

      <td height="60" padding="3" align="left" colspan="2">
        <p>
          <h6><? echo $address1 ?><p>
            <? if(!$address2==''){ ?><? echo $address2 ?><p> <? } ?>
 			<? echo $postcode ?><p>
          <?php echo $city ?></h6>
        </td>
      </tr>
        </table>
        <? } ?>
        <? if($map=='address found'){ ?>
<div id="map_frame" class="small_map_cadre"></div>
           
     <? } ?>
     
     
	    <? if(! $ydio==''){ ?>
        </div>
        
        
   <div class="fullprofile" id="fullprofile5">
     <table align="left" width="300" >
    
    <tr valign="top">
      <td  align="left" padding="3"><h5>Why we accept DIO:</h5>
	</td>
    </tr>
    <tr valign="top">

      <td height="60" padding="3" align="left" colspan="2">
        <p>
          <h6><? echo $ydio ?><p>
           </h6>
        </td>
      </tr>
        </table>
        <? } ?>
            <p>

    </div>
      <? if(! $wwwsite==''){ ?>
         <div class="fullprofile" id="fullprofile6">

          <table id="fullprofile9" align="left" width="300" >
    <tr valign="top">

      <td height="30" padding="3" align="left" colspan="2">
        <p>
          <h6>          <form action="<?php echo "//".$wwwsite ?>" target="_blank" method="get">

<button type="submit" class="btn btn-flat-black btn-primary btn-large-black">WEBSITE</button>
</form>
           </h6>
        </td>
      </tr>
        </table>
         <? } ?>

</div>
      <? 
		$sql = "SELECT * FROM products WHERE busi_id='$companyid'";
		$result = mysqli_query($bd,$sql);
		if($row = mysqli_fetch_array($result))
			{ ?>
         <div class="fullprofile" id="fullprofile7">

          <table align="left" width="300" >
    <tr valign="top">

      <td height="30" padding="3" align="left" colspan="2">
        <p>
          <h6>          <form action="/MyDIOnlineStore/product_list.php" target="_blank">
<input type="hidden" name="company_id" value='<? echo $companyid; ?>' >
<input type="hidden" name="company_name" value='<? echo $companyname; ?>' >
<button type="submit" class="btn btn-flat-black btn-primary btn-large-black">SHOP</button>
</form>
           </h6>
        </td>
      </tr>
        </table>
         <? } 

		if($ecomm_status=='TRUE')
			{ ?>
        </div> <div class="fullprofile" id="fullprofile8">

          <table align="left" width="300" >
    <tr valign="top">

      <td height="30" padding="3" align="left" colspan="2">
        <p>
          <h6>          <form action="/MyDIOnlineStore/product_list.php" target="_blank">
<input type="hidden" name="company_id" value='<? echo $companyid; ?>' >
<input type="hidden" name="company_name" value='<? echo $companyname; ?>' >
<button type="submit" class="btn btn-flat-black btn-primary btn-large-black">E-SHOP</button>
</form>
           </h6>
        </td>
      </tr>
        </table>
         <? } ?>


</div>


            
	 </div> 
    </div>
     <p>&nbsp;</p>  <p>&nbsp;</p>
<? 	if($drivers)
	{ ?>
    <script>
    jQuery(function($){
                    $("a.confirm").click(function(){
						                 $.post('../../../MyDIO_functions/order_transport.php', $("form.order-transport").serialize(), function(data)
                                            {
                                                if(data==1)
														{
															//alert('white' + data);
															//document.getElementById("toggle_loc_button").style.backgroundColor="#51b36d";
																		//document.getElementById("driver_status").setAttribute("value", 'false');
																		document.getElementById("confirmed").innerHTML="<h4 align='center'><b>Waiting for a driver</b></h4>";
																		document.getElementById("confirmed").style.color="green";
																		window.setInterval( function ()
																					{ 
																						
																									get_order_status();
																							
																					}, 2000 //check every 2 seconds
																				);
														}
                                                    else
														{
															//alert(data);
															 if(data==2)
															 {
																document.getElementById("confirmed").innerHTML="<h4 align='center'><b>Already waiting for a driver</b></h4>";
																document.getElementById("confirmed").style.color="green";
																window.setInterval( function ()
																					{ 
																						
																									get_order_status();
																							
																					}, 2000 //check every 2 seconds
																				);
																 }
																 else
																 {
															//alert('reds' + data);
															if(data==8)
															{
																document.getElementById("confirmed").innerHTML="<h3 align='center' class='confirm'><b>Please <a href='/login/index.php?redirect=<? echo urlencode($redirect); ?>'>Login</a> or <a href='/signup/index.php?redirect=<? echo urlencode($redirect); ?>'>Signup</a></b></h3>";
																
																}
																else
																{
															//document.getElementById("toggle_loc_button").style.backgroundColor="#EC8774";
															//document.getElementById("driver_status").setAttribute("value", 1);
															document.getElementById("confirmed").innerHTML="Failed order - try again";
															document.getElementById("confirmed").style.color="red";
																}
																 }
															
														}
                                               				
                                           			 });

                                            
                    });
                });
				
		function cancel_driver_order()
			{
				//alert ('cancelled');
				 $.post('../../../MyDIO_functions/cancel_transport.php', $("form.cancel-transport").serialize(), function(data)
                                            {
                                                if(data==1)
														{
															//alert('white' + data);
															//document.getElementById("toggle_loc_button").style.backgroundColor="#51b36d";
																		//document.getElementById("driver_status").setAttribute("value", 'false');
																		document.getElementById("confirmed").innerHTML="<h4 align='center'><b>Order Cancelled - Move marker to select a new pick up location</b></h4>";
																		document.getElementById("confirmed").style.color="green";
														}
                                                    else
														{
															//alert('red' + data);
															//document.getElementById("toggle_loc_button").style.backgroundColor="#EC8774";
															//document.getElementById("driver_status").setAttribute("value", 1);
															document.getElementById("confirmed").innerHTML="Failed order - try again";
															document.getElementById("confirmed").style.color="red";
															
														}
                                               				
                                           			 });
				}
	function get_order_status()
			{
				 $.post('../../../MyDIO_functions/get_my_taxi_orders.php', $("form.order-transport").serialize(), function(data)
                                            {
                                                if(data.length>0)
														{
															//alert('white' + data);
															
															if(data!='')
															{
																//alert('we' + data);
																if(data==2)
																{
																	// no driver coming
																	document.getElementById("confirmed").innerHTML="<h4 align='center'><b>Waiting for a driver</b></h4>";
																	document.getElementById("confirmed").style.color="green";
																}
																else
																{
																$.each(data, function(key,value)
																	{
																		var driver =value.driver_id;
																		if(value.driver_id!='')
																			{
																				$.post('../../../MyDIO_functions/get_taxi_data.php', { driver_id: value.driver_id }, function(taxidata)
																					{
																						alert('white' + taxidata);
																						if(taxidata.length>0)
																								{
																									alert('white' + taxidata);
																									
																									
																								}
																					});
																			}
																	
																
															//document.getElementById("toggle_loc_button").style.backgroundColor="#51b36d";
																		//document.getElementById("driver_status").setAttribute("value", 'false');
																		document.getElementById("confirmed").innerHTML="<h4 align='center'><b>Driver "+driver+" coming</b></h4>";
																		document.getElementById("confirmed").style.color="green";
																	});
																}
																	
															}
														}
                                                    else
														{
															alert('red' + data);
															//document.getElementById("toggle_loc_button").style.backgroundColor="#EC8774";
															//document.getElementById("driver_status").setAttribute("value", 1);
															document.getElementById("confirmed").innerHTML="Failed order - try again";
															document.getElementById("confirmed").style.color="red";
															
														}
                                               				
                                           			 });
				}
				
				
				</script>
     <div class="reveal_location" style="width:308px;margin-left:auto;margin-right:auto;display:none;" >
              <div id="confirm_button" class="bottom_fixed_white">
              <table width="304" border="0" cellspacing="2" cellpadding="3">
               <tr>
     <td colspan="2" id="confirmed" ><a class="change" style="color:#51b36d;"><b>Move marker to change pickup location</b></a></td>
  </tr>
  <tr>
   <td id="show-address" colspan="2">&nbsp;</td>
   </tr>
  <tr>
     <td ><h4><a class="cancel" style="color:#900">Cancel</a></h4></td>
     <td align="right"><h4><a class="confirm">Confirm</a></h4></td>
  </tr>
</table>
<form id="order-transport" class="order-transport" action="">
<input type="hidden" id="pickup_address" name="pickup_address" value="" />
<input type="hidden" id="pickup_lat" name="pickup_lat" value="" />
<input type="hidden" id="pickup_lng" name="pickup_lng" value="" />
<input type="hidden" id="company" name="company" value="<? echo $companyid; ?>" />
<input type="hidden" id="user_id" name="user_id" value="<? echo $mem_id; ?>" />
</form>
<form id="cancel-transport" class="cancel-transport" action="">
<input type="hidden" id="company" name="company" value="<? echo $companyid; ?>" />
<input type="hidden" id="user_id" name="user_id" value="<? echo $mem_id; ?>" />
</form>



                  </div>
         	</div>
    <?
		}
	?>

   
    </div>
    </div>
    </div>
    </div>

  <div class="to-top hidden">
  
  <a id="toTop" href="../#">
  <div class="to-top-icon icon"></div></a>
	</div>

 
<script src="../../../js/all-225.js"></script>
</body>
</html>