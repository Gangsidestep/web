<?php
//echo "My Drop In The Oceans";
include __DIR__ . "/../php/analytics.php";
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="robots" content="noindex, follow">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
	<meta name="Description" content="My Drop in The Oceans envisions a world in which value for Nature is guaranteed with every consumer choice by virtue of a Global Citizens Dividend for Nature.">
	<meta name="keywords" content="Sustainability, Dividend for Nature, Natural Capital," />
	<link rel="canonical" href="https://mydropintheoceans.org/contact/" />
	<title>Contact | My Drop in The Oceans</title>
	<link rel="icon" type="image/x-icon" href="favicon.ico">
	<link rel="stylesheet" type="text/css" href="/css/mydropintheoceans-style.css?v=<?php echo time(); ?>">
	
	<style>
		
</style>
	 <script src="//ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
	<script>
		$(document).ready(function () {	
			$('#Email').on('input', function() {
				var is_email=checkEmail();
				if(is_email){
					// Valid email format
					if($('#Message').val())
						{
							$("#contact-button").removeAttr('disabled').removeClass('button-contact').addClass("active-button-contact");	
						}	
				}
				else{
					$("#contact-button").attr('disabled','disabled').removeClass('active-button-contact').addClass("button-contact");
				}
			});
						$('#Message').on('input', function() {				
							var input=$(this);
							var message=$(this).val();
							if(message){
								var is_email=checkEmail();
								if(is_email)
									{
										$("#contact-button").removeAttr('disabled').removeClass('button-contact').addClass("active-button-contact");
									}
							}
							else{
								$("#contact-button").attr('disabled','disabled').removeClass('active-button-contact').addClass("button-contact");
							}	
						});
				  $("form").submit(function (event) {		
					// Get honeypot field name from the form
				var honeypotField = $('#company_name').attr('name');
					var formData = {
					  message: $("#Message").val(),
					  email: $("#Email").val(),
					  hp_hash: $("#hp_hash").val(),
					  form_timestamp: $("#form_timestamp").val(),
					  form_key: $("#form_key").val()
					};
					// Add honeypot field with empty value
					formData[honeypotField] = '';
					   
					  $.post( "/contact-form-process.php", formData)
							  .done(function( data ) {
						  if(data="success")
							  {
								  document.getElementById("response_box").innerHTML = "Thanks for getting in touch. We'll get back to you soon.";
								  document.getElementById("bottom_page_span").style.position = "fixed";
							  }
							  });
					event.preventDefault();
				  });
				});
			function checkEmail()
				{
						var input=$('#Email').val();
						var re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
						return re.test(input);	
				}
	function hide_landing_page(){
		//document.getElementById("landing_page").style.display = "none";
		document.getElementById("contact_box").style.display = "block";
		document.getElementById("cookie_box").style.display = "none";
		document.getElementById("contact_link").style.color = "#d0aea1";
		document.getElementById("home_page").style.color = "#fff";
		document.getElementById("cookie_link").style.color = "#fff";
		//document.getElementById("bottom_page_span").style.position = "relative";

		
		      setTimeout(()=> {
         window.scrollTo(0,0);
      }
      ,5);									
	}
	function show_landing_page(){
		document.getElementById("landing_page").style.display = "block";
		document.getElementById("contact_box").style.display = "none";
		document.getElementById("cookie_box").style.display = "none";
		document.getElementById("home_page").style.color = "#d0aea1";
		document.getElementById("contact_link").style.color = "#fff";
		document.getElementById("cookie_link").style.color = "#fff";
		document.getElementById("bottom_page_span").style.position = "relative";

		
		      setTimeout(()=> {
         window.scrollTo(0,0);
      }
      ,5);									
	}
	function show_cookie_page(){
		document.getElementById("landing_page").style.display = "none";
		document.getElementById("contact_box").style.display = "none";
		document.getElementById("cookie_box").style.display = "block";
		document.getElementById("contact_link").style.color = "#fff";
		document.getElementById("home_page").style.color = "#fff";
		document.getElementById("cookie_link").style.color = "#d0aea1";
		document.getElementById("bottom_page_span").style.position = "fixed";
		//document.getElementById("bottom_page_span").style.position = "relative";

		
		      setTimeout(()=> {
         window.scrollTo(0,0);
      }
      ,5);									
	}
	</script>	
</head>
<body style="border: 0;margin: 0;padding: 0;">
	<div style="height:60px;background-color: white;width:100%;	color: #fff!important;
		font-size: 18px!important;
		padding-top: 10px!important;
		padding-bottom: 10px!important;
		box-shadow: 0 0 20px 8px rgba(60,60,60,.06)!important;
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;position: fixed;z-index: 2;border-bottom: #8e807687;
		border-bottom-color: #8e807687;
		border-bottom-style: inset;
		border-bottom-width: thin;">
			<div style="width: 80%;
			background-image: url(/images/logo/mydiotextlarge.png);
			height: 30px;
			background-size: contain;
			background-repeat: no-repeat;
			margin-left: auto;
			margin-right: auto;
			position: relative;
			background-position: center;
			margin-top: 18px;"></div>
	</div>
	<div style="background-size: cover; width:100%;height:120%;background-image: url(/images/background/MyDIO_back.jpg);background-repeat: no-repeat;background-position-x: center;background-position-y: 80px;position:fixed">
	</div>
	
	
	<div style="border: 0;margin: 0;">
		<div id="contact_box"  >
			<div id="response_box" class="contact_box">Contact:
				<br>
				<p></p>
				<form id="fcf-form-id" class="fcf-form-class" method="post" action="/php/contact-form-process.php">
					<div class="fcf-form-group">

						<div class="form-input-group">
							<?php 
							// Generate random honeypot field name
							$honeypot_name = 'field_' . substr(md5(date('Ymd') . 'salt123'), 0, 8);
							$honeypot_hash = hash('sha256', $honeypot_name);
							$hp_left = rand(-9876, -8765);
							$hp_top = rand(-9876, -8765);
							?>
							<!-- Enhanced honeypot - positioned off-screen instead of display:none -->
							<input type="text" name="<?php echo $honeypot_name; ?>" id="company_name" style="position: absolute; left: <?php echo $hp_left; ?>px; top: <?php echo $hp_top; ?>px; width: 1px; height: 1px;" tabindex="-1" autocomplete="off" aria-hidden="true">
							<input type="hidden" name="hp_hash" id="hp_hash" value="<?php echo $honeypot_hash; ?>">
							<!-- Timestamp field to check form submission speed -->
							<input type="hidden" name="form_timestamp" id="form_timestamp" value="<?php echo time(); ?>">
							<input type="hidden" name="form_key" id="form_key" value="<?php echo hash('sha256', time() . 'form_salt_key'); ?>">
							<label for="Email" class="form-label">Email</label><br>
							<input type="email" id="Email" name="Email" class="form-input" autocomplete="email" required>
							<label for="Message" class="fcf-label">Message</label>
							<div class="fcf-input-group">
								<textarea id="Message" name="Message" class="fcf-form-control message-contact" rows="6" maxlength="3000" required></textarea>
							</div>
						</div>
						<div class="fcf-form-group">
							<button type="submit" id="contact-button" class="button-contact" disabled>Send</button>
						</div>
					</div>
				</form>
			</div>	
		</div>
		<?php include '../php/footer.php'; ?>
	</div>
</body>
</html>
<?

?>