					 <script>
							jQuery(function($){
							$("a.product_id_<? echo $product_id; ?>").click(function(){
								//$("div.product_form_<? echo $product_id; ?>").slideToggle(120, function(){});

				jQuery(function($){
                    $("a.descript_<? echo $product_id; ?>").click(function(){
                        $("#descript_form_<? echo $product_id; ?>").slideToggle(120, function(){
                        });
                    });
                });
					jQuery(function($){
                    $("a.descript_close<? echo $product_id; ?>").click(function(){
                        $("#descript_form_<? echo $product_id; ?>").slideToggle(120, function(){
                        });
                    });
                });
									jQuery(function($){
                    $("a.insufficient_close<? echo $product_id; ?>").click(function(){
                        $("#insufficient<? echo $product_id; ?>").slideToggle(10, function(){
                        });
                    });
                });
			jQuery(function($){
                    $("a.cancel_order").click(function(){
                       document.getElementById("confirm").style.display="none";
					   document.getElementById("balance").style.color="#FFF";
					   	document.getElementById("balance").innerHTML = "<?php echo round($balance, 0, PHP_ROUND_HALF_DOWN); ?>";
						document.getElementById("balance_full").innerHTML =  "<?php echo round($balance, 0, PHP_ROUND_HALF_DOWN); ?>";
						document.getElementById("total_items_ordered").setAttribute("value", 0);
						document.getElementById("total_order_CHF").setAttribute("value", 0);
						document.getElementById("amount_<?php echo $product_id; ?>").setAttribute("value", 0);
						document.getElementById("dio_<?php echo $product_id; ?>").setAttribute("value", 0);
						document.getElementById("quantity_<?php echo $product_id; ?>").setAttribute("value", 0);
						document.getElementById("show-dio_<?php echo $product_id; ?>").innerHTML = '';
						document.getElementById("show_<?php echo $product_id; ?>").innerHTML = '';
						document.getElementById("product_<?php echo $product_id; ?>").setAttribute("value", 0);
								 jQuery(function($){
											$("div.product_form_<? echo $product_id; ?>").slideUp(120);
										});
                    });
                });
				</script>
                       <div class="center-310-ecomm">
				<div class="product-description" id="insufficient<? echo $product_id; ?>" <?php if ( $hidden ) echo 'style="display:none;"'; ?>>
                 <p align="center" ><p>&nbsp;</p>Not enough DIO<p>&nbsp;</p></p>
                <div class="close-it"> <a class="insufficient_close<? echo $product_id; ?>" ><button class="btn btn-close btn-primary btn-large">X</button></a></div>   
                </div>
                </div>
                        <li class="tile-user-busilist">
				 		<div class="buyprofile">     
							<table width="100%" border="0" cellspacing="0" cellpadding="1" height="120px">
							<tr>
							<a href="product_qr.php?id='<? echo $product_id; ?>'"><td rowspan="2" class="product-tile" width="100px" height="100px" background="<? echo $filename; ?>">
							<p>&nbsp;</p></td></a>
							<td align="left" valign="top" style="padding:0px; font-size:14px; height:70px; padding-left:9px"><? echo $product_name; ?><br />
							</td>
								<td align="right" valign="top" style="padding:0px;"><? echo $currency; ?><p><? echo $price; ?>
								</td>	
							</tr>
                            <tr>
                            <td align="right" valign="top" style="padding:5px;" colspan="2">
                                <input style="font-size:22px;width:24px;" type="button" name="minus" id="minus_<?php echo $product_id; ?>" class="btn-large btn-minus" onclick="minusnumbers_<?php echo $product_id; ?>();" value="-" /> 
								 <a class="product_id_<? echo $product_id; ?>"><button class="btn-blue" id="order_qty_<?php echo $product_id; ?>" style="position:relative;"></button></a>
                                 <input style="font-size:22px;width:24px;"  type="button" name="button" class=" btn-large btn-add" onclick="addnumbers_<?php echo $product_id; ?>();" id="button_<?php echo $product_id; ?>" value="+" />
                            	</td>
                            </tr>
							</table>
						 </div>
						 <div class='product_form_<? echo $product_id; ?>' <?php if ( $hidden ) echo 'style="display:none;"'; ?> >
						<div id='results'></div>
			  			<div class="purchase-btns" >
					  <form id="add_amount" name="add_order" method="post" action=""> 
				   
					  <table width="300px" border="0" cellspacing="1" cellpadding="1" color="#FFF" style="display:none;">
		  				<tr>
                      <td rowspan="2"> <input style="font-size:24px;" type="button" name="minus" id="minus_<?php echo $product_id; ?>" class="btn-large btn-minus" onclick="minusnumbers_<?php echo $product_id; ?>();" value="-" /> </td>
                    <td colspan="3" id="product-y_<?php echo $product_id; ?>"></td>
                        <td rowspan="2">  <h1><input style="font-size:24px;"  type="button" name="button" class=" btn-large btn-add" onclick="addnumbers_<?php echo $product_id; ?>();" id="button_<?php echo $product_id; ?>" value="+" /></h1></td>
                      </tr>
                      <tr>
                    <td id="show_<?php echo $product_id; ?>"></td>
                     <td>+</td>
                    <td id="show-dio_<?php echo $product_id; ?>"></td>
                      </tr>
                    </table>
			  		</form>  
                    		<?	if($logged) { ?>
		
					<form id="add_order_<?php echo $product_id; ?>" name="add_order_<?php echo $product_id; ?>" method="post" action="#">
						<?	} else { ?>
							
							
						            <form method='POST' action="/login/index.php?redirect=<? echo urlencode($server); ?>" />
				 <? } ?>

<script>
jQuery(function($){
    // Product button click
    $("a.product_id_<?php echo $product_id; ?>").click(function(){
        // $("div.product_form_<?php echo $product_id; ?>").slideToggle(120);
    });

    // Description open
    $("a.descript_<?php echo $product_id; ?>").click(function(){
        $("#descript_form_<?php echo $product_id; ?>").slideToggle(120);
    });

    // Description close
    $("a.descript_close<?php echo $product_id; ?>").click(function(){
        $("#descript_form_<?php echo $product_id; ?>").slideToggle(120);
    });

    // Insufficient DIO close
    $("a.insufficient_close<?php echo $product_id; ?>").click(function(){
        $("#insufficient<?php echo $product_id; ?>").slideToggle(10);
    });

    // Cancel order
    $("a.cancel_order").click(function(){
        document.getElementById("confirm").style.display="none";
        document.getElementById("balance").style.color="#FFF";
        document.getElementById("balance").innerHTML = "<?php echo round($balance, 0, PHP_ROUND_HALF_DOWN); ?>";
        document.getElementById("balance_full").innerHTML = "<?php echo round($balance, 0, PHP_ROUND_HALF_DOWN); ?>";
        document.getElementById("total_items_ordered").setAttribute("value", 0);
        document.getElementById("total_order_CHF").setAttribute("value", 0);
        document.getElementById("amount_<?php echo $product_id; ?>").setAttribute("value", 0);
        document.getElementById("dio_<?php echo $product_id; ?>").setAttribute("value", 0);
        document.getElementById("quantity_<?php echo $product_id; ?>").setAttribute("value", 0);
        document.getElementById("show-dio_<?php echo $product_id; ?>").innerHTML = '';
        document.getElementById("show_<?php echo $product_id; ?>").innerHTML = '';
        document.getElementById("product_<?php echo $product_id; ?>").setAttribute("value", 0);
        $("div.product_form_<?php echo $product_id; ?>").slideUp(120);
    });
});
</script>
                            <input type="hidden" name="hash" id="hash" value="" />
                            <input type="hidden" name="product" id="product" value="<?php echo $product_id; ?>" />
                            <input type="hidden" name="price" id="price" value="<?php echo $price; ?>" />
                            <input type="hidden" name="email" id="email" value="<?php echo $user_email; ?>" />
                            <input type="hidden" name="mem_id" id="mem_id" value="<?php echo $mem_id; ?>" />
                            <input type='hidden' id='total_items_ordered' name='total_items_ordered' value='' />
                            <input type="hidden" name="eshop" id="eshop" value="<?php echo $eshop; ?>" />
                            <input type="hidden" name="product_name" id="product_name" value="<?php echo $product_name; ?>" />
                            <input type="hidden" name="amount" id="amount_<?php echo $product_id; ?>" value="<?php echo $price*$amount*$percent_cur; ?>" />
                            <input type="hidden" name="quantity" id="quantity_<?php echo $product_id; ?>" value="<?php echo $amount; ?>" />
                            <input type="hidden" name="dio" id="dio_<?php echo $product_id; ?>" value="<?php echo $price*$amount*$percent_dio*$exchange; ?>" />
                            <button type="submit" name="button" class="btn btn-large btn-flat btn-primary btn-pay" id="button" value="Confirm purchase" /><div id="buy_<?php echo $product_id; ?>"></div></button>
                          </form>				  
		
						  <p id="showed"></p>
		<script type="text/javascript">
		function shownumber(){
			prodid="<?php echo $product_id; ?>";
			count++;
			var e = document.getElementById("amount_<?php echo $product_id; ?>").value;
			var d = document.getElementById("dio_<?php echo $product_id; ?>").value;
			var tio = document.getElementById("total_items_ordered").value;
			var q = document.getElementById("quantity_<?php echo $product_id; ?>").value;
			var add = e + "<p><h6><? echo $currency; ?></h6>";
			var dio = d + "<p><h6>DIO</h6>";
			if(q>1)
						{
							var y = q + "<?php //echo " ".Inflect::pluralize($product_name_safe); ?>";
							var yB = "Order " + y;
						}else
						{
					if(q<1)
					{
					//var y = "none";
					var yB = "";
					}
					else
					{
					var y = q + "<?php //echo " ".$product_name; ?>";
					var yB = "Order " + y;
					}
				}		
			document.getElementById("show_<?php echo $product_id; ?>").innerHTML = add;
			document.getElementById("show-dio_<?php echo $product_id; ?>").innerHTML = dio;
			document.getElementById("buy_<?php echo $product_id; ?>").innerHTML = yB;
			if(q>0)
	{
		document.getElementById("buy_<?php echo $product_id; ?>").style.color="#0F6";
		 jQuery(function($){
                    $("div.product_form_<? echo $product_id; ?>").slideToggle(120, function(){
                        });
                    });
		document.getElementById("product_<?php echo $product_id; ?>").setAttribute("value", q);
			<? if($impact){ }else { ?>	
		document.getElementById("confirm").style.display="";
	<? } ?>
			}
		}
		function addnumbers_<?php echo $product_id; ?>(strUser)
			{
			var tot = document.getElementById("total_order_CHF").value;
			var e = document.getElementById("amount_<?php echo $product_id; ?>").value;
			var d = document.getElementById("dio_<?php echo $product_id; ?>").value;
			var tio = document.getElementById("total_items_ordered").value;
			var q = document.getElementById("quantity_<?php echo $product_id; ?>").value;
				var newnum=parseFloat(e) + parseFloat("<? echo $price*$percent_cur; ?>");
				var newdio=parseFloat(d) + parseFloat("<? echo $price*$percent_dio*$exchange; ?>");
				var newCHF=parseFloat(newnum)+parseFloat(tot);
				newnum=Math.round(newnum*100.0)/100.0;
				newdio=Math.round(newdio*100.0)/100.0;
				var newq=parseFloat(q) + 1;
				var add =  newnum + "<p><h6><? echo $currency; ?></h6>";
				var dio = newdio + "<p><h6>DIO</h6>";
				if(newq>1)
						{
							var y = newq + "<?php //echo " ".Inflect::pluralize($product_name); ?>";
							var yB = "Order " + y;
						}else
						{if(newq<1)
					{
					//var y = "none";
					var yB = "";
					
					}
					else
					{
					var y = newq + "<?php //echo " ".$product_name; ?>";
					var yB = "Order " + y;
					}}
				
				var bal = document.getElementById("balance_full");
				var newbal = +bal.innerHTML;
				var ne= -parseFloat("<? echo $price*$percent_dio*$exchange; ?>");
				var newbal = newbal + ne;
				if(newbal<0)
					{
						// not enough DIO to pay %
						//alert('Insufficient DIO balance');
						document.getElementById("insufficient<? echo $product_id; ?>").style.display="";
					}
				else{				
				document.getElementById("amount_<?php echo $product_id; ?>").setAttribute("value", newnum);
				document.getElementById("dio_<?php echo $product_id; ?>").setAttribute("value", newdio);
				document.getElementById("quantity_<?php echo $product_id; ?>").setAttribute("value", newq);
				document.getElementById("show-dio_<?php echo $product_id; ?>").innerHTML = dio;
				document.getElementById("show_<?php echo $product_id; ?>").innerHTML = add;
				document.getElementById("buy_<?php echo $product_id; ?>").innerHTML = yB;
				document.getElementById("order_qty_<?php echo $product_id; ?>").innerHTML = y;
				document.getElementById("total_order_CHF").setAttribute("value", 10);
				document.getElementById("total_order").innerHTML = newCHF + " CHF";
				
				
				document.getElementById("buy_<?php echo $product_id; ?>").style.color="#0F6";
				var newtio= +tio + 1;
				///// This section Added to integrate + - buttons directly in the product view while toggling the order info
					if(newq==1)
					{
				 jQuery(function($){
                    $("div.product_forrm_<? echo $product_id; ?>").slideToggle(120, function(){
                        });
                    });
					}
					//////////
				document.getElementById("total_items_ordered").setAttribute("value", newtio);
				document.getElementById("product_<?php echo $product_id; ?>").setAttribute("value", newq);
					<? if($impact){ }else { ?>	
				document.getElementById("confirm").style.display="";
				<? } ?>
				document.getElementById("balance").innerHTML = Math.round(newbal);
				document.getElementById("balance").style.color="#FC6";
				document.getElementById("balance_full").innerHTML = newbal;
				}
			}
		function minusnumbers_<?php echo $product_id; ?>(strUser)
			{				
				var e = document.getElementById("amount_<?php echo $product_id; ?>").value;
				var d = document.getElementById("dio_<?php echo $product_id; ?>").value;
				var tio = document.getElementById("total_items_ordered").value;
				var q = document.getElementById("quantity_<?php echo $product_id; ?>").value;
				var newnum=parseFloat(e) - parseFloat("<? echo $price*$percent_cur; ?>");
						var newdio=parseFloat(d) - parseFloat("<? echo $price*$percent_dio*$exchange; ?>");
						var dioam=parseFloat("<? echo $price*$percent_dio*$exchange; ?>");
						newnum=Math.round(newnum*100.0)/100.0;
						newdio=Math.round(newdio*100.0)/100.0;
						var newq=parseFloat(q) - 1;
				if(parseFloat(e)<=0)
					{}
				else
					{
						if(newq<1)
							{
								newq=0;
								newnum=0;
								newdio=0;
							}
						var add = newnum + "<p><h6><? echo $currency; ?></h6>";
						var dio = newdio + "<p><h6>DIO</h6>";
						if(newq>1)
							{
								var y = newq + "<?php //echo " ".Inflect::pluralize($product_name); ?>";
								var yB = "Order " + y;
							}
						else
							{
								if(newq<1)
									{
										//var y = "none";
										var yB = "";
									}
								else
									{
									var y = newq + "<?php //echo " ".$product_name; ?>";
									var yB = "Order " + y;
									}
							} 
						var oldbal = document.getElementById("balance_full");
						var nd = +oldbal.innerHTML;
						newbal = +nd + +dioam;
						document.getElementById("product_<?php echo $product_id; ?>").setAttribute("value", newq);
						document.getElementById("amount_<?php echo $product_id; ?>").setAttribute("value", newnum);
						document.getElementById("dio_<?php echo $product_id; ?>").setAttribute("value", newdio);
						document.getElementById("quantity_<?php echo $product_id; ?>").setAttribute("value", newq);
						document.getElementById("show_<?php echo $product_id; ?>").innerHTML = add;
						document.getElementById("show-dio_<?php echo $product_id; ?>").innerHTML = dio;
						document.getElementById("buy_<?php echo $product_id; ?>").innerHTML = yB;
						document.getElementById("order_qty_<?php echo $product_id; ?>").innerHTML = y;
						var newtio= +tio - 1;
						document.getElementById("total_items_ordered").setAttribute("value", newtio);
										if(newtio!=0){
						document.getElementById("balance").style.color="#FC6";
						}
						else
						{
						document.getElementById("balance").style.color="white";
							}
						if(newq<1)
						{
						document.getElementById("buy_<?php echo $product_id; ?>").style.color="white";
						
						 jQuery(function($){
							$("div.product_form_<? echo $product_id; ?>").slideToggle(120, function(){
								});
							});
						}
						if(newtio<1)
						{
										document.getElementById("confirm").style.display = "none";
						}
						document.getElementById("balance").innerHTML = Math.round(newbal);
						document.getElementById("balance_full").innerHTML = newbal;	
					}
			}
			var s = document.getElementById("order_entry").innerHTML;
			document.getElementById("order_entry").innerHTML = s +'<input type="hidden" id="<? echo "product_".$product_id; ?>" name="product<?php echo $itms; ?>_<?php echo $product_id; ?>" value="0" /><input type="hidden" id="<? echo "price_".$product_id; ?>" name="price<?php echo $itms; ?>_<?php echo $product_id; ?>" value="<?php echo $price; ?>" /><input type="hidden" id="<? echo "name_".$product_id; ?>" name="name<?php echo $itms; ?>_<?php echo $product_id; ?>" value="<?php echo $product_name; ?>" />';
			document.getElementById("itms").setAttribute("value", <?php echo $itms; ?>);	
			shownumber();
			</script>
		</div>
     </li>