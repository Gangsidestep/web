<?php 
session_start();
include('../../connection.php');
require "../../api/3rd_party_business_login/api_business_config.php";

if($MyDIO_API->loggedIn)
	{
		$cmpyid = $_SESSION['MyDIObusiusercookie'];
	  // User logged in with new system
	 // echo "arrived".$cmpyid; exit();
	 $sql = "SELECT * FROM mydio_busi_7835 WHERE busi_mem_id_3753='$cmpyid'";
		$result = mysqli_query($bd, $sql);
		
		if($row = mysqli_fetch_array($result, MYSQLI_BOTH))
			{
					$email = $row['email'];
					$companyname = $row['name_compan3'];
					$fname = $row['firstname'];
					$status = $row['dio_status'];
					$img=$row['img2983locaton'];
					$logo=$row['logo2983location'];
					$city=$row['cit3e'];
					$wwwsite=$row['w38bsite'];
					$_SESSION['COMPANY_NAME_ID']=$companyname;
	 $id=$cmpyid;
			}
			$currency=$MyDIO_API->get_currency;
	 if(isset($_GET['name'])&&$_GET['name']!=="")
	 	{
			$id=$_GET['name'];
			$name=$id." - ";
			}
	}
	else
	{
		require_once('../../admin/level2/auth_admin.php');
		$mem_id = $_SESSION['SESS_MEMBER_ID'];
		$admin_id = $_SESSION['SESS_ADMIN_ID'];
		$sql = "SELECT * FROM admeen_id WHERE admeenid='$mem_id' AND username='$admin_id'";
		$result = mysqli_query($bd, $sql);
		if(mysqli_num_rows($result) > 0)
		if($row = mysqli_fetch_array($result, MYSQLI_BOTH))
			{
					 $id=$admin_id;
			}
		else
			{
				header("location: ../admin/adminlogin.php");
				exit();
			}
	}
?>
<?php 
// Script Error Reporting
error_reporting(E_ALL);
ini_set('display_errors', '1');
?>
<?php 
// Parse the form data and add inventory item to the system
if (isset($_POST['product_name'])) {
	
	$pid = safe($_POST['thisID']);
    $product_name = safe($_POST['product_name']);
	$price = safe($_POST['price']);
	$category = safe($_POST['category']);
	$subcategory = safe($_POST['subcategory']);
	$details = safe($_POST['details']);
	// See if that product name is an identical match to another product in the system
	$sql = mysqli_query($bd,"UPDATE products SET product_name='$product_name', price='$price', details='$details', category='$category', subcategory='$subcategory' WHERE id='$pid'");
	if ($_FILES['fileField']['tmp_name'] != "") {
	    // Place image in the folder 
	    $newname = "$pid.jpg";
	    move_uploaded_file($_FILES['fileField']['tmp_name'], "../inventory_images/$newname");
	}
	header("location: inventory_list.php"); 
    exit();
}
?>
<?php 
// Gather this product's full information for inserting automatically into the edit form below on page
if (isset($_GET['pid'])) {
	$targetID = $_GET['pid'];
    $sql = mysqli_query($bd,"SELECT * FROM products WHERE id='$targetID' LIMIT 1");
    $productCount = mysqli_num_rows($sql); // count the output amount
	$product_list = "";
    if ($productCount > 0) {
	    while($row = mysqli_fetch_assoc($sql)){ 
             $id = $row["id"];
			 $product_name = $row["product_name"];
			 $price = $row["price"];
			 $category = $row["category"];
			 $subcategory = $row["subcategory"];
			 $details = $row["details"];
			 $date_added = strftime("%b %d, %Y", strtotime($row["date_added"]));
			 $product_list .= "Product ID: $id - <strong>$product_name</strong> - $$price - <em>Added $date_added</em> &nbsp; &nbsp; &nbsp; <a href='inventory_edit.php?pid=$id'>edit</a> &bull; <a href='inventory_list.php?deleteid=$id'>delete</a><br />";
			  $image = $row["product_image"];
			 $img_src="../inventory_images/" . $id .".jpg";
							if (file_exists($img_src))
								{
								 // Do Nothing
								}
							else
								{
									if(!empty($image))
									{$img_src=$image;}
									else{
									$img_src="../inventory_images/empty_img.jpg";	
									}
								}
		
		}
    } else {
	    echo "Sorry dude that crap dont exist.";
		exit();
    }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<title>Store Inventory</title>
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
<link rel="shortcut icon" href="/images/favicon.ico">
<link href="/css/twittermydiostyle.css" rel="stylesheet" type="text/css">
<link href="/css/mydiostyle.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="../style/style.css" type="text/css" media="screen" />
</head>
<script src="/js/all-225.js"></script>

<body class="no-sidebar header-detached">
  <?
  $MyDIO_API->full_business_menu($logo,$cmpyid,'');
  ?>

   <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
  <div class="bdropbottom">
    <div class="center-object">
  <div id="pageContent" class="pageContent"><br />
    <div align="right" style="margin-right:32px;"><a href="inventory_list.php#inventoryForm">+ Add New Inventory Item</a></div>
<div align="left" style="margin-left:24px;">
      <h2>Inventory list</h2>
      <?php echo $product_list; ?>
    </div>
    <hr />
    <a name="inventoryForm" id="inventoryForm"></a>
    <h3>
    &darr; Edit Inventory Item &darr;
    </h3>
     <form action="product_image.php" method="post" name='Q' enctype="multipart/form-data" id="Q" onSubmit="" >
     <table width='100%' border='0'>
      <tr>
      <td class='product-image'>
		  </td>
         

          <td id='product_image' class='product-image profile-images' width='150px' height='150px' background="<? echo $img_src; ?>">
           <img width="25" valign="bottom" src="/images/connect-icons/camera_white.png">
		  </td>
                     
          <td class='product-image' width='150px' height='120px' ><a href='javascript:printImage($qc);'><img src='https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=https://mydropintheoceans.org/MyDIOnlineStore/product_qr.php?id=$id-:-$cmpyid' id='".$qc."' title='<? echo $product_name; ?>' height='152' /></img></a>
		  </td>
		   <td class='product-image'>
		  </td>
          </tr>
          <tr>
          <td colspan="4">
            <input id="file" name='file' type='file' class="hidden" onChange="updateList()" />
             <input name='busi_id' type='hidden' value="<? echo $cmpyid; ?>" />
              <input name='pid' type='hidden' value="<? echo $targetID; ?>" />
            <div id="fileList"></div>	     
 
    	  </td>
    </tr>
          </table>
             </form>
    <form action="inventory_edit.php" enctype="multipart/form-data" name="myForm" id="myform" method="post">
    <table width="90%" border="0" cellspacing="0" cellpadding="6">
      <tr>
        <td width="20%" align="right">Product Name</td>
        <td width="80%"><label>
          <input name="product_name" type="text" id="product_name" size="64" value="<?php echo $product_name; ?>" />
        </label></td>
      </tr>
      <tr>
        <td align="right">Product Price</td>
        <td><label>
          $
          <input name="price" type="text" id="price" size="12" value="<?php echo $price; ?>" />
        </label></td>
      </tr>
    <tr>
        <td align="right">Category</td>
         <td>
         <select class="span4" name="category" id="category" onchange="selectChange()" >
              <option value="<?php echo  $category; ?>" selected><?php echo  $category; ?></option>
              <?php
              $c=0;
                $categ = mysqli_query($bd,"SELECT product_category_name FROM product_categories");		  
                  while ($sql = mysqli_fetch_array($categ))
                  {
                      $c++;
                      $categoryname[$c] = $sql['product_category_name'];
                  }
                  $s=1;
                  while ($s<=$c)
                  { ?>
                      <option value="<?php echo  $categoryname[$s]; ?>"><?php echo  $categoryname[$s]; ?></option>
                      
                      <?
                      $s++;
                  }
                      ?>
                </select>  
       </td>
      </tr>
      <?
				$sc=1;
			  while ($sc<=$c)
				  { ?>
						
							
							  <tr id = "<?php echo $categoryname[$sc]; ?>" <? if($categoryname[$sc]==$category){}else{echo "style='display:none'";} ?> >
								<td width="20%" align="right">Subcategory</td>
								<td>
											<select class="span4" name="subcat<?php echo "_".$sc; ?>" id="Sub<?php echo "_".$sc; ?>" onchange="SubcatChange(this.value)">
												<option value="" disabled selected>-----</option>
				
											<?
												$sci=1;
												$sqls = mysqli_query($bd,"SELECT product_subcategory_name FROM product_subcategories WHERE product_category_name='$categoryname[$sc]'");
							
												
												while ($select_subcat = mysqli_fetch_array($sqls))
													{ 
													//print_r($select_subcat);
													 ?>
												  
													<option value="<?php echo $select_subcat['product_subcategory_name']; ?>" <?php if($select_subcat['product_subcategory_name']==$subcategory){echo "selected";} ?>  ><?php echo $select_subcat['product_subcategory_name']; ?>
													</option>
												<?php
												
													$sci++;
													} ?>
											</select>
				
										</td>
							  </tr>
						 
					  
						<?php 
						//echo $sc;
						$sc++;
						
			  }
					 ?>
                      <script type="text/javascript">
		  
			$(document).ready(function(Q) {
			$('#product_image').on('click', function() {
   				 $('#file').click();
					});

				});
				
updateList = function() {
  var input = document.getElementById('file');
  var output = document.getElementById('fileList');

  output.innerHTML = '<div class="button-frame"><button type="submit" class="mydio-btn-small btn-action-small btn-large"><b>UPLOAD</b></button></div>';
}				

            </script>
        <td align="right">Product Details</td>
        <td><label>
          <textarea name="details" id="details" cols="64" rows="5"><?php echo $details; ?></textarea>
        </label></td>
      </tr>
     
      <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td> <a href="product_list.php" ><button type="submit" />Back to inventory</button></a></td>
        <td>
          &nbsp;<label>
        <input name="subcategory"  id="subcategory" type="hidden" value="<?php echo $subcategory; ?>" />
          <input name="thisID" type="hidden" value="<?php echo $targetID; ?>" />
          <input type="submit" name="button" id="button" value="Make Changes" />
        </label></td>
      </tr>
    </table>
    </form>
    <br />
    
  <br />

     <script >
	 var op = null;
	 var divon = null;
	 function SubcatChange(op)
	  {
				$(function() {										 
							document.getElementById("subcategory").setAttribute("value", op);
					
						});
					
			}	 
	  function selectChange()
		  {
				$(function() {										 
					$("#category > option").each(function(){
						
						var divoff = null;
						if(this.selected)
						{
							if(divon!=null)
							{
								//alert(divon);
							divon.style.display = 'none';
							}
							divon = document.getElementById(this.value);
							divon.style.display = '';
							
						}
						});
					});
			}
	</script>  
    </div>
      </div>
    </div>
</div>
</body>
</html>