<?php
include "../../../MyDIO_login/config.php";
if($MyDIOlogin->loggedIn)
	{
		$mem_id = $_SESSION['MyDIOusercookie'];
	  // User logged in with new system
	}
else
	{ 
		// User not logged in with old password system or Facebook login
		header("location: ../../../login/");
	}
session_start();
include("../../../connection.php");
include("../../../login/loggedin/get-profile/get-profile.php");
?>

<!doctype html>
<html>
<head>
<title>My Drop In The Oceans | Rewards</title>
<meta charset="utf-8">
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
<link href="/css/twittermydiostyle.css" rel="stylesheet" type="text/css">
<link href="/css/mydiostyle.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.9.1.js"></script>
  <script type="text/javascript" src="jquery.tiltedpage-scroll.js"></script>
  <link href='tiltedpage-scroll.css' rel='stylesheet' type='text/css'>
  <style>
    html {
      height: 100%;
    }
    body {
      background: #F1f1f2;
      padding: 0;
      text-align: center;
      font-family: 'open sans';
      position: relative;
      margin: 0;
      height: 100%;
    }
    
    .wrapper {
    	height: auto !important;
    	height: 100%;
    	margin: 0 auto; 
    	overflow: hidden;
    }
    
    a {
      text-decoration: none;
    }
    
    
    
    h1, h2 {
      width: 100%;
      float: left;
    }
    h1 {
      margin-top: 100px;
      color: #999;
      margin-bottom: 5px;
      font-size: 70px;
      font-weight: 100;
    }
    h2 {
      padding: 00px 20px 30px 20px;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      letter-spacing: 0px;
      color: #888;
      font-size: 20px;
      line-height: 100%;
      font-weight: 100;
      margin-top: 10px;
      margin-bottom: 0;
    }
    
    
    .pointer {
      color: #00B0FF;
      font-family: 'Pacifico';
      font-size: 24px;
      margin-top: 15px;
      position: absolute;
      top: 130px;
      right: -40px;
    }
    .pointer2 {
      color: #00B0FF;
      font-family: 'Pacifico';
      font-size: 24px;
      margin-top: 15px;
      position: absolute;
      top: 130px;
      left: -40px;
    }
    pre {
      margin: 80px auto;
    }
    pre code {
      padding: 35px;
      border-radius: 5px;
      font-size: 15px;
      background: rgba(0,0,0,0.1);
      border: rgba(0,0,0,0.05) 5px solid;
      max-width: 500px;
    }


    .main {
      float: left;
      width: 300px;
      margin: 0 auto;
    }
    
    
    .main h1 {
      padding:20px 50px 10px;
      float: left;
      width: 100%;
      font-size: 60px;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      font-weight: 100;
      margin: 0;
      padding-top: 55px;
      font-family: 'Open Sans';
      letter-spacing: -1px;
      text-transform: capitalize;
    }
   
    .main h1.demo1 {
      background: #1ABC9C;
    }
    
    .reload.bell {
      font-size: 12px;
      padding: 20px;
      width: 45px;
      text-align: center;
      height: 47px;
      border-radius: 50px;
      -webkit-border-radius: 50px;
      -moz-border-radius: 50px;
    }
    
    .reload.bell #notification {
      font-size: 25px;
      line-height: 140%;
    }
    
    .reload, .btn{
      display: inline-block;
      border-radius: 3px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      display: inline-block;
      line-height: 100%;
      padding: 0.7em;
      text-decoration: none;
      width: 100px;
      line-height: 140%;
      font-size: 17px;
      font-family: Open Sans;
      font-weight: bold;
      -webkit-box-shadow: none;
      box-shadow: none;
      background-color: #4D90FE;
      background-image: -webkit-linear-gradient(top,#4D90FE,#4787ED);
      background-image: -webkit-moz-gradient(top,#4D90FE,#4787ED);
      background-image: linear-gradient(top,#4d90fe,#4787ed);
      border: 1px solid #3079ED;
      color: #FFF;
    }
    .reload:hover{
      background: #317af2;
    }

    .clear {
      width: auto;
    }

    .back:hover {
      background: #eee;
    }
    
    
    .page-container {
      float: left;
      width: 100%;
      margin: 0 auto 300px;
      position: relative;
    }
    .panorama {
      width: 100%;
      float: left;
      margin-top: -5px;
      height: 700px;
    }
    
    .panorama .credit {
      background: rgba(0,0,0,0.2);
      color: white;
      font-size: 12px;
      text-align: center;
      position: absolute;
      bottom: 0;
      right: 0;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      float: right;
    }
    
    .main {
      margin-bottom: 50px;
      overflow: hidden;
    }
    .tps-section {
      width: 100% !important;
      max-width: 1000px;
      margin: 0 auto;
      height: 170px;
    }
    
    .tps-section .tps-wrapper {
      border-radius: 5px;
    }
    .tps-section .tps-wrapper h1 {
      position: relative;
      height: 100%;
      position: absolute;
    }
    .tps-section .tps-wrapper h1 a{
      color: white;
      position: absolute;
      background: rgba(0,0,0,0.25);
      width: 100%;
      height: 100%;
      top: 0;
      padding-top: 225px;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      left: 0;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 4px;
      font-size: 20px;
      font-size: 14px;
      line-height: 190%;
    }
    
    .tps-section .tps-wrapper h1 a small{
      text-transform: none;
      font-style: italic;
      font-weight: 400;
      font-family: noto serif;
      letter-spacing: 1px;
      font-size: 14px;
    }
    
    .tps-section:nth-child(1n+1) .tps-wrapper {
      background: url(demo1.jpg) center center;
      background-size: cover;
    }
    
    .tps-section:nth-child(2n+1) .tps-wrapper {
      background:  url(demo2.jpg) center center;
      background-size: cover;
    }
    
    .tps-section:nth-child(3n+1) .tps-wrapper {
      background:  url(demo3.jpg) center center;
      background-size: cover;
    }
    
    .tps-section:nth-child(4n+1) .tps-wrapper {
      background:  url(demo4.jpg) center center;
      background-size: cover;
    }
    
    .header {
      overflow: hidden;
      clear: both;
    }
	</style>
	<script>
	  $(document).ready(function(){
      $(".main").tiltedpage_scroll({
        angle: 20
      });
		});
		
	  </script>
    <link rel="stylesheet" href="../css/demo.css">
    <script src="../js/demo.js"></script>
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
$MyDIOlogin->full_menu($image);
?>
<div class="bdropbottom">
      <div class="wrapper">	

  	  <div class="main">
	   	 
      
      
      <? 
$sql = "SELECT * FROM Reward_categories";
$result = mysqli_query($bd, $sql);
if($result === FALSE)
{
		header("location: /login/");
	}
	$i=1;
while($row=mysqli_fetch_array($result, MYSQLI_BOTH))
	{
    	$rew_nm = str_replace(' ','<br>',mb_strtoupper($row['reward_category'], 'UTF-8'));
		$rew_id = $row['reward_category_id'];
		$rew_im = $row['reward_category_img'];
		$rew_lk = $row['action_page_link'];
		?>
  	  <section>
           <div>
            <li class='tile-user-busilist'>
            <? if($rew_lk!=""){
				?>    <form id='reg' name='reg' method='post' action='<? echo $rew_lk; ?>'>   <?
				}else{ ?>
              <form id='reg' name='reg' method='post' action='../../../reward/category.php?category=<? echo $rew_id; ?>'>
               <? } ?>
                 <button type='submit' class='rewards' >
                  <table width="300">
                    <tr>
                      <td class="size-logo" width="180" height="135" rowspan="2" background="<? echo $rew_im; ?>"></td>
                    <td padding="2" align="center" width="40%"><br><h5><? echo $rew_nm; ?></h5><br>
                    </tr>
                  </table>
            	</button>
            	</form>
            </li> 
              </div>
      </section>     
        <?
  
		$i++;
	}
?>

      
    </div>
    </div>
    </div>
</body>
</html>