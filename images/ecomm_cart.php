<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>My Drop In The Oceans</title>
 <script src="/js/all-225.js"></script>
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.4.2.min.js"></script>
	<script type="text/javascript" src="https://ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.min.js"></script>
  <link rel="shortcut icon" href="/images/favicon.ico">
<link href="/css/twittermydiostyle.css" rel="stylesheet" type="text/css">
<link href="/css/mydiostyle.css" rel="stylesheet" type="text/css">
    
</head>
<body class="no-sidebar header-detached">
  <? 
  session_start();
include('../connection.php');
require "../api/3rd_party_business_login/api_business_config.php";
include "../MyDIO_login/config.php";
  if($MyDIOlogin->loggedIn)
	{
		$mem_id = $_SESSION['MyDIOusercookie'];
	  // User logged in with new system
	  		$logged=true;
	}
	else
	{

	}
				include "../resources/pluralize.php";	

$sql = "SELECT * FROM member WHERE mem_id_18927321='$mem_id'";
$result = mysqli_query($bd, $sql);
if(mysqli_num_rows($result) > 0)
	{
		if($row = mysqli_fetch_array($result, MYSQLI_BOTH))
			{
				$email 		= $row['efgemail'];
				$fname 		= $row['fname'];
				$lname 		= $row['lname'];
				$balance 	= $row['acc_balance'];
				$foolname 	= $row['abcfullname'];
				$city 		= $row['cit3e'];
				$postcode 	= $row['post_code'];
				$balance 	= $row['acc_balance'];
				$foolname 	= $row['abcfullname'];
				$image=$row['picture'];
				if($row['abcfbuid']!=='0' && $image=='')
					{
						$image_test="https://graph.facebook.com/".$row['abcfbuid']."/picture?type=large";
		$photo2 = "https://profile.ak.fbcdn.net/static-ak/rsrc.php/v1/yL/r/HsTZSDw4avx.gif";
		ini_set('allow-url-fopen','on');
					if (md5(file_get_contents($image_test)) ==  md5(file_get_contents($photo2)))
						{
							   //echo "NO PICTURE";
						}
					else
						{
							$image="https://graph.facebook.com/".$row['abcfbuid']."/picture?type=large";
						}
					}
				if ($city=="Geneva" && $postcode=="")
						{	
							header("location: newgenevaaccount.php");
							exit();
						}else if($city=="" && $postcode=="")
							{header("location: locationaccount.php");
							exit();}
			}
	}
else
	{
	$MyDIOlogin->logoutcheckout_en();
	header("location: /index.php");
	exit();
	}


if($fname==null and $fname=="")
	{
		$fname=$foolname;
	}
  
  
  
  if($logged)	
		{ ?>
		<? 
		$MyDIOlogin->full_menu($image);
		?>
			<?
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
            <li><a href="/about.php">About Us</a></li>
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
<p>&nbsp;</p>
<?
session_start();
if(isset($_GET['company_id']))
	{
		$cmpyid=$_GET['company_id'];
	}
else 
	{
	if(isset($_POST['company_id']))
		{
			// echo "really true";
			$cmpyid=$_POST['company_id'];
			$itms=$_POST['itms'];
			$fname=$_POST['fname'];
			$lname=$_POST['lname'];
			$postcode=$_POST['postcode'];
			$city=$_POST['city'];
		}
	else
		{
			?>
<script type="text/javascript">
window.history.go(-2);
</script>
			

<?php
			header("location: /index.php");
		}
	}
			print_r($_POST);
			foreach($_POST as $key => $value)
			{
				//echo $key."=".$value."<p>";
				if($key=="total_DIO")
				{
					$dio_amount=round($value,2);
					
					
					}
				$itm=1;
				while($itm<=$itms)
				{
				if (strpos($key,"product".$itm."_") !== false)
					{
						// product id number is delivered in the format "product(number of the item in list)_(id number of the item)
						// i.e. in order to get the id number we need to explode the string or replace/remove the unwanted part
						 $product[$itm]=str_replace("product".$itm."_","",$key);
						 $qty[$itm]=$value;
						 //echo $product[$itm]." : ".$qty[$itm]."<p>";
					 	
					 
					}
				if (strpos($key,"name".$itm."_") !== false)
					{
						 $name[$itm]=$value;
						 echo "<p>ITEM".$key." : ".$qty[$itm]."<p>CAT";exit();
					 	
					 
					}
				if (strpos($key,"price".$itm."_") !== false)
					{
						 $price[$itm]=$value;
						 $bill[$itm]=$value*$qty[$itm];
						 $total_bill=$total_bill+$bill[$itm];
						
					 	
					 
					}
					$itm++;
				}
			
				}
				//get percent from company status
			$percent_dio=0.05;
			$percent_cur=0.95;
			//get exchange from currency api
			$exchange=10;
			// currency
			$currency = " CHF";
			$dio_amount=$total_bill*$percent_dio*$exchange;
			if($dio_amount<=$balance)
					{ 
						$dio_stat=true;
						 echo "FULL PRICE<p>".$total_bill." CHF<p><p>&nbsp;</p>";
						//echo "<b>PAY<p> ".$dio_amount." DIO<p>+<p>".$total_bill*$percent_cur." ".$currency."</b><p>";
					}
					else
					{
						echo "<p>DIO Balance insufficient";
						$dio_stat=false;
						}

			
			 
			//print_r($_POST);
			$qry="SELECT * FROM mydio_busi_7835 WHERE busi_mem_id_3753='$cmpyid'";
		$result=mysqli_query($bd, $qry);
		if($row = mysqli_fetch_array($result, MYSQLI_BOTH)) 
			{
				$ecomm_status			=$row['ecomm_active'];
				$ecomm_public			=$row['public_key'];
				$ecomm_private			=$row['private_key'];
				$ecomm_password			=$row['ecomm_password'];
				$ecomm_address			=$row['ecomm_address'];
				$company_name			=$row['name_compan3'];
				$company_email			=$row['email3781'];
			}
		
			$order_qty				=$_GET['number'];
			$order_id				=$_GET['id'];
			//echo $order_id."<p>".$order_qty."<p>";
		
$email=$_POST['customer_email'];
if(isset($cmpyid)&&$ecomm_status=="TRUE")
		{
			//echo "<p>really true";

		}
else
	{
		return false;
		exit();
	}
require '../MyDIOnlineStore/functions.php';
//$orders = shopify_call($ecomm_password,$ecomm_address, "/cart/update.js", $query, 'POST',array("Content-Type: application/json"));
//$discount = shopify_call($ecomm_password,$ecomm_address, "/admin/discounts.json", $discount_code, 'POST',array("Content-Type: application/json"));
//print_r($discount);

$itms_count=1;
  if($logged)	
		{ $time=time();
// md5 because the security risk associated with this token is very low since already associated with 2 unique accounts
$token = hash("md5", "{$cmpyid}{$time}");
?>
		
<form action='/shopify_master/post_to_shopify.php?ecomm_address=<? echo $ecomm_address."/cart/"; ?>&token=<? echo $token; ?>&time=<? echo $time; ?>&email=<? echo $email; ?>&dio_amount=<? echo $dio_amount; ?>&company_name=<? echo $company_name; ?>&company_id=<? echo $cmpyid; ?>&company_email=<? echo $company_email; ?>' method="POST">
<? }
else
{ 
		$server=$_SERVER['SCRIPT_URI']."?id=".$_GET['id'];
		?>
<form action='/login/index.php?redirect=<? echo urlencode($server); ?>' method="POST">
<?
	
	} ?>
<input type="hidden" name="note" value='MyDIO order token: <? echo $token?>' />
<input type="hidden" name="checkout[email]" value="<? echo $email; ?>" />
<input type="hidden" name="checkout[shipping_address][first_name]" value="<? echo $fname; ?>" />
<input type="hidden" name="checkout[shipping_address][last_name]" value="<? echo $lname; ?>" />
<input type="hidden" name="checkout[shipping_address][zip]" value="<? echo $postcode; ?>" />
<input type="hidden" name="checkout[shipping_address][city]" value="<? echo $city; ?>" />
<?
$products_ordered=0;
while($itms_count<=$itms)
	{ ?>
		<? if($qty[$itms_count]>0 &&$products_ordered==0){
            $products_ordered++; ?>
        <div class="center-310">
        <table align="left" style="font-size:14px">
        <?
        echo "<tr><td align='left'>Product ordered</td><td>Quantity</td></tr>";
        }
        if($qty[$itms_count]>0){ 
        echo "<tr><td align='left' width='130px'>".$name[$itms_count]."</td><td width='20'>".$qty[$itms_count]."</td></tr>"; } ?>
        <input type="hidden" id='<? echo "product".$itm; ?>' name="updates[<? echo $product[$itms_count];  ?>]" value="<? echo $qty[$itms_count];  ?>" />
		<? $itms_count++;
	} ?>
</table><br />
<p>&nbsp;</p><?
if($dio_stat)
{
?>













<input type="hidden" name="checkout[discount][code]" value="MyDIO_5" />
<p>&nbsp;</p>
<button type="submit" class="mydio-btn btn-action-x-small btn-large" >Confirm Your Order With DIO</button>
</form>
<? }
else
{
?>
<p>&nbsp;</p>
<button type="submit" class="btn btn-large btn-flat btn-primary btn-pay" >Confirm Order Without DIO</button>
</form>
<p>&nbsp;</p>
<?
}
//exit();
			
			  echo "</div><p>&nbsp;</p><span style='color:#FC6;font-size:18px;'><b>YOU SAVE<p>".round($total_bill*$percent_dio,2)." CHF</b></span><p>";

?>
         		
                 
<script src="https://code.jquery.com/ui/1.8.21/jquery-ui.min.js"></script>
<script src="/js/jquery.ui.touch-punch.min.js"></script>
     <script>
	  $(function() {
          $( "#MyDIOdragme" ).draggable();
        });
     </script>
     <p>&nbsp;</p>
     <p>&nbsp;</p>
  <div>

    

 </div>
  <div id="MyDIOdragme" ><div class="backdrop1"></div>
      <div class="draggable-dio nav-item" style="color:#FC6;"><?php echo round($balance-$dio_amount, 0, PHP_ROUND_HALF_DOWN); ?></div>


</div>

   </div> 
</body>
</html>