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
// Delete Item Question to Admin, and Delete Product if they choose
if (isset($_GET['deleteid'])) {
	echo 'Do you really want to delete product with ID of ' . $_GET['deleteid'] . '? <a href="inventory_list.php?yesdelete=' . $_GET['deleteid'] . '">Yes</a> | <a href="inventory_list.php">No</a>';
	exit();
}
if (isset($_GET['yesdelete'])) {
	// remove item from system and delete its picture
	// delete from database
	$id_to_delete = $_GET['yesdelete'];
	$sql = mysqli_query($bd,"DELETE FROM products WHERE id='$id_to_delete' LIMIT 1") or die (mysqli_error());
	// unlink the image from server
	// Remove The Pic -------------------------------------------
    $pictodelete = ("../inventory_images/$id_to_delete.jpg");
    if (file_exists($pictodelete)) {
       		    unlink($pictodelete);
    }
	header("location: inventory_list.php"); 
    exit();
}
?>
<?php 
// Parse the form data and add inventory item to the system
if (isset($_POST['product_name'])) {
	
    $product_name = safe($_POST['product_name']);
	$price = safe($_POST['price']);
	$category = safe($_POST['category']);
	$subcategory = safe($_POST['subcategory']);
	$details = safe($_POST['details']);
	// See if that product name is an identical match to another product in the system
	$sql = mysqli_query($bd,"SELECT id FROM products WHERE product_name='$product_name' LIMIT 1");
	$productMatch = mysqli_num_rows($sql); // count the output amount
    if ($productMatch > 0) {
		echo 'Sorry you tried to place a duplicate "Product Name" into the system, <a href="inventory_list.php">click here</a>';
		exit();
	}
	// Add this product into the database now
	$sql = mysqli_query($bd,"INSERT INTO products (product_name, price, details, category, subcategory, date_added,busi_id) 
        VALUES('$product_name','$price','$details','$category','$subcategory',now(),'$cmpyid')") or die (mysqli_error());
     $pid = mysqli_insert_id($bd);
	// Place image in the folder 
	$newname = $pid.".jpg";
	
	move_uploaded_file( $_FILES['fileField']['tmp_name'], "../inventory_images/".$newname);
	//echo $newname."ok";exit();
	header("location: inventory_list.php"); 
    exit();
}
?>
<?php 
// This block grabs the whole list for viewing
$product_list = "";
if(isset($cmpyid))
	{
		$sql = mysqli_query($bd,"SELECT * FROM products WHERE busi_id='$cmpyid' ORDER BY date_added DESC");
	}
else
{
	$sql = mysqli_query($bd,"SELECT * FROM products ORDER BY date_added DESC");
}
$ic=0;
$productCount = mysqli_num_rows($sql); // count the output amount
if ($productCount > 0) {
	while($row = mysqli_fetch_assoc($sql)){ 
	$ic++;
	$qc="QR_".$ic;
             $id = $row["id"];
			 $product_name = $row["product_name"];
			 $price = $row["price"];
			 $img_src="../inventory_images/" . $id .".jpg";
							if (file_exists($img_src))
								{
								 // Do Nothing
								}
							else
								{
									$img_src="../inventory_images/empty_img.jpg";	
								}
			 $date_added = strftime("%b %d, %Y", strtotime($row["date_added"]));
			 $product_list .= "
			 <table border='0'>
        <tr><p>---------------------------------------------------<p>
          <td class='product-image' width='100px' height='100px' background=". $img_src ."></td>
          <td class='product-image' width='100px' height='100px' ><a href='javascript:printImage($qc);'><img src='https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=https://mydropintheoceans.org/MyDIOnlineStore/product_qr.php?id=$id-:-$cmpyid' id='".$qc."' title='<? echo $product_name; ?>' height='102' /></img></a></td>
          </tr>
		  <tr><p>Product ID: $id - <strong>$product_name</strong> - $$price - <em>Added $date_added</em> &nbsp; &nbsp; &nbsp;<p><a href='inventory_edit.php?pid=$id'>edit</a> &bull;<a href='inventory_list.php?deleteid=$id'>delete</a></td>
        </tr>
      </table>";
    }
} else {
	$product_list = "You have no products listed in your store yet";
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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

<script type="text/javascript">
function printImage(ic)
{
        var printWindow = window.open('', 'Print Window','height=600,width=600');
        printWindow.document.write('<html><head><title>Print Window</title>');
        printWindow.document.write('</head><body ><img src=\'');
        printWindow.document.write(ic.src);
        printWindow.document.write('\' /></body></html>');
        printWindow.document.close();
        printWindow.print();
}



</script>
<script src="/js/all-225.js"></script>
</head>


<body class="no-sidebar header-detached">
  <?
  $MyDIO_API->full_business_menu($logo);
  ?>
  <div class="busiframe">
  <div class="bdropbottom">
<div align="center" id="mainWrapper">
  <?php //include_once("../template_header.php");?>
  <div class="center-310">
  <div id="pageContent"><br />
    <div align="right" style="margin-right:32px;"></div>
<div align="left" style="margin-left:24px;">
     <h2><?php if(isset($name)){echo $name;} ?>Inventory list</h2><a href="inventory_list.php#inventoryForm">+ Add New Inventory Item</a>
      <?php echo $product_list; ?>
      
</div>
    <hr />
    <a name="inventoryForm" id="inventoryForm"></a>
    <h3>
    &darr; Add New Inventory &darr; </h3>
    <form action="inventory_list.php" enctype="multipart/form-data" name="myForm" id="myform" method="post">
    <table width="300px" border="0" cellspacing="0" cellpadding="6">
      <tr>
        <td width="20%" align="right" class="non-mobile">Product Name</td>
        <td width="80%"><label>
          <input class="span4" name="product_name" type="text" id="product_name" size="64" />
        </label></td>
      </tr>
      <tr>
        <td align="right" class="non-mobile">Product Price</td>
        <td><label>
          <? echo $currency; ?>
          <input class="span4" name="price" type="text" id="price" size="12" />
        </label></td>
      </tr>
      <tr>
        <td align="right" class="non-mobile">Category</td>
        <td>
		    <select class="span4" name="category" id="category" onchange="selectChange()" >
              <option value="" disabled selected>Category</option>
              <?php
              $c=0;
                $category = mysqli_query($bd,"SELECT product_category_name FROM product_categories");		  
                  while ($sql = mysqli_fetch_array($category))
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
						
							
							  <tr id = "<?php echo $categoryname[$sc]; ?>" <? if($sc==1){}else{echo "style='display:none'";} ?>>
								<td width="20%" align="right" class="non-mobile">Subcategory</td>
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
												  
													<option value="<?php echo $select_subcat['product_subcategory_name']; ?>" ><?php echo $select_subcat['product_subcategory_name']; ?>
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
      <tr>
        <td align="right" class="non-mobile">Product Details</td>
        <td><label>
          <textarea class="span4" name="details" id="details" cols="64" rows="5"></textarea>
        </label></td>
      </tr>
      <tr>
        <td align="right" class="non-mobile">Product Image</td>
        <td><label>
          <input type="file" name="fileField" id="fileField" />
        </label></td>
      </tr>      
      <tr>
        <td class="non-mobile">&nbsp;</td>
        <td><label>
                <input name="subcategory"  id="subcategory" type="hidden" value="" />
          <input type="submit" name="button" id="button" value="Add This Item Now" />
        </label></td>
      </tr>
    </table>
    </form>
    </div>
    <br />
  <br />
  </div>
   <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
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
  <?php //include_once("../template_footer.php");?>
</div>
</div>
</div>
</body>
</html>