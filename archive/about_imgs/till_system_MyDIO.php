<?php
session_start();
include('../connection.php');
require "../api/3rd_party_business_login/api_business_config.php";
include "../MyDIO_login/config.php";
$logged=false;
if(isset($_SESSION['MyDIO_admin_logSyscuruser']))
	{
		$admin=true;
		$debug=true;
	}
if($MyDIO_API->loggedIn)
			{
				$cmpyid = $_SESSION['MyDIObusiusercookie'];
			  // User logged in with new system
			 // echo "arrived".$cmpyid; exit();
			}
		else
			{
				{header("location: /login/loggedin/aboutmydio/spend.php");}
			}	
	$server=$_SERVER['SCRIPT_URI'];
		if($MyDIOlogin->loggedIn)
			{
				$mem_id = $_SESSION['MyDIOusercookie'];
				// User logged in with new system
				$logged=true;
			}
		else
			{
				$balance='?';
				$logged=false;
			}
include("../login/loggedin/get-profile/get-profile.php");
include "../resources/pluralize.php";
$qry="SELECT * FROM mydio_busi_7835 WHERE busi_mem_id_3753='$cmpyid'";
		$result=mysqli_query($bd, $qry);
		if($row = mysqli_fetch_array($result, MYSQLI_BOTH)) 
			{
				$companyname			=$row['name_compan3'];
				$cmpydescrip			=$row['Description'];
				$status					=$row['dio_status'];
				$ydio					=$row['why_mydio'];
				$condits				=$row['condits'];
				$w3bsight				=$row['w38bsite'];
				$img					=$row['img2983locaton'];
				$logo					=$row['logo2983location'];
				$ecomm_status			=$row['ecomm_active'];
				$ecomm_public			=$row['public_key'];
				$ecomm_private			=$row['private_key'];
				$ecomm_password			=$row['ecomm_password'];
				$ecomm_platform			=$row['ecomm_platform'];
				$ecomm_address			=$row['ecomm_address'];
				$API					=$row['MyDIOStore_external_api_address'];
				$key					=$row['MyDIOStore_external_api_sk'];
				$eshop					=$row['MyDIOStore_external_api_pk'];
			}
if($fname==null and $fname=="")
	{
		$fname=$foolname;
	}
//get percent from company status
$percent_dio=0.05;
$percent_cur=0.95;
//get exchange from currency api
$exchange=10;
// currency
$currency = " CHF";
$hidden=true;
?>
<html><head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $companyname; ?></title>	
 	<script src="/js/all-225.js"></script>
<meta property="fb:app_id" content="1476200282626466">
<meta property="og:type" content="article" />
<meta property="og:image" content="https://www.mydropintheoceans.org/businesssignup/<? echo preg_replace('/\s+/', '%20', $logo); ?>">
<meta property="og:image:width" content="400" />
<meta property="og:site_name" content="My Drop In The Oceans" />
<meta property="og:title" content="<? echo $companyname ?> via the MyDIO Store">
<meta property="og:description" content="<? echo $cmpydescrip ?>">
<meta property="og:url" content="https://www.mydropintheoceans.org/MyDIOnlineStore/product_list.php?company_id=<? echo $cmpyid ?>" >
<link rel="shortcut icon" href="/images/favicon.ico">   
<link href="/css/twittermydiostyle.css" rel="stylesheet" type="text/css">
<link href="/css/mydiostyle.css" rel="stylesheet" type="text/css">   
</head>
<body class="no-sidebar header-detached">
<script src="https://ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.min.js"></script>
  <?
  	if($logged==true)	
		{ 
		$about="";
		$MyDIOlogin->full_menu($image,$about);
		}
	else
		{
   ?>
            <div class="header"><nav>
            <a  class="hamburger"
                data-toggle="dropdown"
                data-func="LoadFromTopBar"
                href="/login/loggedin/account.php">About</a> <li> · </li>
            <li class="logo nav-item"><a href="/login/loggedin/account.php" class="home">MyDIO&apos;</a> </li>
            <ul class="dropdown-menu">
            <li><a href="/login/loggedin/aboutmydio/about.php?p=about">About MyDIO</a></li>
            <li><a href="/login/loggedin/aboutmydio/animation.php">Animation</a></li>
            <!-- <li><a href="create_a_quiz.php">Create a new Quiz</a></li> 
            <li class="divider"></li> 
            <li><a href="../admin_choice.php">Admin Panel</a></li>-->
            </ul>
            <div><a href="/index.php" class="user-icon-mobile"
            data-toggle="dropdown"
                    data-func="LoadFromTopBar"></a>
            <ul id="user-actions" class="pull-right dropdown-menu">
            <li><a href="/login/index.php?redirect=<? echo urlencode($server); ?>">Login</a></li>
            <li><a href="/index.php">Signup</a></li>        
            </ul>
            </div>
          	</nav>
          	</div>
          <?			
		}
    ?>
<div class="bdropbottom">
 <div class="fade_in">
       <div id="balance_full" style="display:none;"><?php echo round($balance, 0, PHP_ROUND_HALF_DOWN); ?></div>             
                                 <table class="ecomm-tableadjust">
    <tr>
      <td class="size" height="100" bgcolor="#FFF" background="../../../businesssignup/<?php echo $img; ?>">
      <p>&nbsp;</p>           
    </td>
    <td class="size" height="100" width="170px" bgcolor="#FFF" >
     <table align="left" width="170px" >  
    <tr valign="top">
      <div class="logonav"><div class="bus_ecomm_logo"  style="background-image: url('../../../businesssignup/<?php echo $logo; ?>');"></div></div>
		<div>
      <td width="77" height="46" align="left" padding="3">&nbsp;</td>
      <td width="203" align="left" padding="3"></td>
    </tr>
    <tr valign="top">
      <td height="60" padding="3" align="left" valign="bottom" colspan="2">
          <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
      <h5><?php echo $companyname; ?></h5><h6><?php echo $city ?></h6>
        <p>
        </td>
      </tr>
        </table>             
    </td>
    </tr>
      </table>
 <div class="tableframebox">
 
        <?php
		$mydio_store=false;
							// IS this MyDIO businsess account linked to a 3rd party ecommerce store
		if($ecomm_status=="TRUE")
			{	
				//echo "true";
				if($mydio_store)
					{
						
					}
					else
					{
						
						}
				if($ecomm_platform=="Woocommerce")
					{			
						$cart="/woo_app/ecomm_cart.php";
					}
				else
					{
						$cart="/shopify_master/ecomm_cart.php";
					}
			}

		if(isset($_POST['amounts']))
			{
				$amount=$_POST['amounts']+1;
			}
		else
			{
				$amount=0;
			}
		if(isset($_POST['minus']))
			{
				$amount=$_POST['amounts']-1;
			} 		
	   if(isset($cmpyid))
			{
				$sql = mysqli_query($bd,"SELECT * FROM products WHERE busi_id='$cmpyid 'ORDER BY date_added DESC LIMIT 6");
			}
		else 
			{
				// Check to see the URL variable is set and that it exists in the database
				if (isset($_GET['id']))
					{
						// Connect to the MySQL database  
						$product_id=$_GET['id'];
						$product_id = preg_replace('#[^0-9]#i', '',$product_id); 
						// Use this var to check to see if this ID exists, if yes then get the product 
						// details, if no then exit this script and give message why
						$sql = mysqli_query($bd,"SELECT * FROM products WHERE id='$product_id' LIMIT 1");
					}
				else
					{
						$sql = mysqli_query($bd,"SELECT * FROM products");
					}
			}
?>
            <form method='POST' action="<? echo $cart; ?>" />
  			<input type='hidden' name='company_id' value='<? echo $cmpyid; ?>' />
   			<input type='hidden' name='customer_email' value='<? echo $user_email; ?>' />
   			<input type='hidden' name='city' value='<? echo $city; ?>' />
       		 <input type='hidden' name='fname' value='<? echo $fname; ?>' />
             <input type='hidden' name='lname' value='<? echo $lname; ?>' />
             <input type='hidden' name='postcode' value='<? echo $postcode; ?>' />
             <input type='hidden' id='itms' name='itms' value='' />
             <input type='hidden' id='total_items_ordered' name='total_itms_ordered' value='' />
              <input type='hidden' id='total_order_CHF' name='total_CHF_ordered' value='' />
       		 <div id="order_entry"></div>
              <div id="confirm" style="width:300px;margin-left:auto;margin-right:auto;display:none;" >
              <div id="confirm_button" class="bottom_fixed">
                  <a class="cancel_order">
                  <button type="button" name="cancel" value="cancel" class="mydio-btn btn-cancel-x-small btn-large"><b>CANCEL</b></button>
                  </a>&nbsp;&nbsp;&nbsp;
                  <button type="submit" name="confirm" value="confirm"  class="mydio-btn btn-action-x-small btn-large"><b>CONFIRM</b></button>
              </div>
         	</div>
			 </form>
             <script>	
				 jQuery(function($){
					$("a.till_1").click(function(){
						$("div.till_1").slideToggle(400, function(){
						});
						$("div.till_2").slideToggle(400, function(){
						});
					});
				});
			</script>	
		<a class='till_1'>Till 1</a>&nbsp;&nbsp;<a class='till_1'>Till 2</a><p>
        <?
			//include "../login/loggedin/get-profile/drag-balance.php";
		$productCount = mysqli_num_rows($sql); // count the output amount
		// DOES this MyDIO businsess account include inventory listings in the MyDIO Database
		if ($productCount > 0)
			{
				$mydio_store=true;
				$order="";
				$itms=1;
				$itms_ordered=0;
				$amount=0;
				$hidden=true;
				?><script>
				var prodid=[];
				var count=1;
				</script>
				<?
				// get all the product details
				while($row = mysqli_fetch_assoc($sql))
					{ 
						 $product_name = $row["product_name"];
						 $product_id = $row["id"];
						 $price = $row["price"];
						 $details = $row["details"];
						 $image = $row["product_image"];
						 $category = $row["category"];
						 $subcategory = $row["subcategory"];
						 $filename="inventory_images/" . $product_id . ".jpg";
							if (file_exists($filename))
								{
								 // Do Nothing
								}
							else
								{	
								if(!empty($image))
									{$filename=$image;}
									else{
									$filename="../inventory_images/empty_img.jpg";	
									}
								}
						 $date_added = strftime("%b %d, %Y", strtotime($row["date_added"]));
						 // The hidden order button
						 $impact=true;
						 ?> <div class="till_1" /> <?
						 include "product_list_buttons_till_1.php"; 
						 	 ?> </div> <?
							 	 ?>
                                <div class="till_2" style="display:none;"/> <?
						 include "product_list_buttons_till_2.php"; 
						 	 ?> </div><?							 
					 $itms++;
				 }	}	
				 ?>
							  <button type="submit" name="total_order" class="btn btn-large btn-flat btn-primary btn-pay" id="total_order" value="Confirm purchase" /><div id="total_order">00.00 CHF</div></button><?
		
					// IS this MyDIO businsess account linked to a 3rd party ecommerce store
		if($ecomm_status=="TRUE")
			{	
				//echo "true";
				if($mydio_store&&$ecomm_platform!="")
					{
						echo "<p>Ecommerce Store: <p>";
					}
					else
					{
						
						}
				if($ecomm_platform=="Woocommerce")
					{
						//echo $ecomm_address."<p>";
						include "../woo_app/ecomm_products.php";				
					}
				else
					{
						include "../MyDIO_app/ecomm_products.php";
						$cart="ecomm_cart.php";
					}
			}
		mysqli_close($bd);
?>
   </div>    		        
     </div>
     <p>&nbsp;</p>
     <p>&nbsp;</p>
  <div>
 </div>
   </div> 
</body>
</html>