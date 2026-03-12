<?php
echo "<!-- My Drop In The Oceans - Theory of Change -->\n";
include "/home/clients/a87f9485d236547310279906c2e64cab/php/form_salt.php";
include __DIR__ . "/../php/analytics.php";
$form_token="";
$rand=time();
if(isset($form_salt)&&$form_salt!="")
	{
		$form_token=hash('sha256', $rand.$form_salt);
	}
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
	<meta name="Description" content="The Theory of Change behind My Drop in The Oceans—how to correct the timing mismatch between sustainable value creation and economic recognition.">
	<meta name="keywords" content="Theory of Change, Sustainability, Natural Capital, Economic Systems" />
	<meta name="author" content="My Drop In The Oceans">
	<meta property="og:image" content="/images/backdrop_an_economy_linkedin.jpg">
	<meta property="og:image:type" content="image/png">
	<meta property="og:image:width" content="200">
	<meta property="og:image:height" content="200">
	<link rel="canonical" href="https://mydropintheoceans.org/theory-of-change/" />
	<title>Theory of Change | My Drop in The Oceans</title> 
	<link rel="icon" type="image/x-icon" href="../images/favicon.ico">
	<link rel="stylesheet" type="text/css" href="../css/mydropintheoceans-style.css?v=20260203">
	<link rel="apple-touch-icon" sizes="180x180" href="/images/connect-icons/apple-touch-icon.png">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?v=20260203"></script>
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
					var formData = {
					  message: $("#Message").val(),
					  email: $("#Email").val(),
						rand: '<?php echo $rand; ?>',
						token: '<?php echo $form_token; ?>'
					};
					   
					  $.post( "../contact-form-process.php", formData)
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
		document.getElementById("landing_page").style.display = "none";
		document.getElementById("contact_box").style.display = "block";
		document.getElementById("cookie_box").style.display = "none";
		document.getElementById("contact_link").style.color = "#d0aea1";
		document.getElementById("home_page").style.color = "#fff";
		document.getElementById("cookie_link").style.color = "#fff";
		document.getElementById("theory_link").style.color = "#fff";
		
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
		document.getElementById("theory_link").style.color = "#fff";
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
		document.getElementById("theory_link").style.color = "#fff";
		document.getElementById("bottom_page_span").style.position = "fixed";
		
		      setTimeout(()=> {
         window.scrollTo(0,0);
      }
      ,5);									
	}
	</script>	
</head>
<body style="border: 0;margin: 0;padding: 0;background-color: #080a23;">
  <div style="max-width: 1000px !important;margin-right: auto;margin-left: auto;">
	<div style="height:60px;background-color: white;width:100%;max-width:1000px;	color: #fff!important;
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
			background-image: url(../images/logo/mydropintheoceans_logo_large_no_drop.png);
			height: 40px;
			background-size: contain;
			background-repeat: no-repeat;
			margin-left: auto;
			margin-right: auto;
			position: relative;
			background-position: center;
			margin-top: 13px;"></div>
	</div>
	<div style="background-size: cover; width:100%;height:120%;background-image: url(../images/background/MyDIO_back.jpg);background-repeat: no-repeat;background-position-x: center;background-position-y: 74px;position:fixed;max-width:1000px;">
	</div>
	
	
	<div style="border: 0;margin: 0;">
		<div id="landing_page" >
		<div style="padding-left: 15%;width: 85%; top: 30%;position: relative;height: 5%;">	</div>
		<div class="intro_box"><br>
			<b>THEORY OF CHANGE</b>
		</div>
			
		<div class="brown_page_spacer_top">
		<p></p>

		<p></p>
	</div>
	<div class="white_page_span">
		<p></p>
		<h1 class="header_one">The Theory of Change behind my drop in the oceans</h1>
		<p></p>
		<span class="span_text_box">
	The ideas behind <i><a href="/" style="color: inherit; text-decoration: none;">my drop in the oceans</a></i> did not emerge as abstract reflection or philosophical critique. They emerged from a practical frustration: the widening gap between what genuinely creates long-term value for society and Nature, and what our economic systems currently recognise, price, and reward.
			</span>
		<p></p>
		<span class="span_text_box">
		Across debates on climate, sustainability, and responsibility, attention often focuses on awareness, motivation, or behaviour change. Yet the deeper issue lies elsewhere. Our systems remain remarkably efficient at pricing short-term consumption, while remaining structurally blind to the long-term value created by everyday sustainable choices. As a result, behaviours that protect Nature, strengthen social cohesion, and reduce future costs are framed as optional, altruistic, or secondary.
			</span>
		<p></p>
		<span class="span_text_box">
		This Theory of Change starts from a simple but uncomfortable premise: <a href="/blog/nature-is-not-a-charity.php" style="color:#2a5d84; text-decoration:inherit;"><b>Nature is not a charity. It is an economic imperative.</b></a>
        </span>
		<p></p>
	</div>
		<div class="brown_page_spacer">
		<p></p>

		<p></p>
	</div>
	<div class="white_page_span">
		<p></p>
		<span class="header_two">Nature is productive capital, not a moral cause</span>
		<p></p>
		<span class="span_text_box">
		Nature underpins everything an economy depends on: health, food systems, mobility, resilience, and social stability. Yet environmental degradation continues to be treated as an externality, while regenerative behaviour is framed as sacrifice. This disconnect has real consequences. When sustainability is presented as a moral appeal, it becomes discretionary. When it is framed as charity, it appears affordable only to the wealthy.
		<br><br>
		That framing is not just inaccurate — it is counterproductive. It reinforces the idea that wealth must first be accumulated, regardless of how, and only later used to repair ecological or social damage. In reality, the erosion of natural and social systems is already imposing real economic costs — just delayed, dispersed, and poorly attributed.
		<br><br>
		The problem, then, is not motivation. It is mispricing.
		</span>
		<p></p>
	</div>
	<div class="brown_page_spacer">
		<p></p>

		<p></p>
	</div>
	<div class="white_page_span">
		<p></p>
		<span class="header_two">Value without contribution lacks legitimacy</span>
		<p></p>
		<span class="span_text_box">
		This becomes particularly clear when observing public resistance to economic proposals promising "free money". <a href="/blog/why-the-swiss-said-no-to-free-money.php" style="color:#2a5d84; text-decoration:inherit;"><b>The Swiss vote against unconditional handouts</b></a> was not a rejection of solidarity. It was a rejection of value disconnected from contribution.
		<br><br>
		People intuitively understand that money must correspond to value created. They are not opposed to redistribution, but they resist systems where recognition appears arbitrary or detached from effort, responsibility, or behaviour. This distinction matters deeply for sustainability. When sustainable behaviour is framed as something that must be bribed or subsidised, its legitimacy is undermined.
		<br><br>
		What people respond to instead is fair accounting — the recognition of value that already exists.
		</span>
		<p></p>
	</div>
	<div class="brown_page_spacer">
		<p></p>

		<p></p>
	</div>
	<div class="white_page_span">
		<p></p>
		<span class="header_two">The core failure: a timing mismatch</span>
		<p></p>
		<span class="span_text_box">
		Modern economic systems suffer from a structural timing problem. The costs of sustainable choices are immediate and individual, while their benefits are long-term and collective. Choosing public transport, consuming less, buying better products, or supporting local services often costs more today — financially, in time, or in convenience.
		<br><br>
		At the same time, the benefits of these choices — reduced emissions, improved public health, lower infrastructure costs, greater resilience — materialise later and are absorbed by society as a whole. The individual bears the cost; the system captures the value.
		<br><br>
		Short-term systems therefore overvalue consumption and undervalue restraint, efficiency, and responsibility. This is not a behavioural failure. It is a structural one.
		<br><br>
		Correcting it does not require moral pressure. It requires bringing future value into the present.
		</span>
		<p></p>
	</div>
	<div class="brown_page_spacer">
		<p></p>

		<p></p>
	</div>
	<div class="white_page_span">
		<p></p>
		<span class="header_two">The intervention: a three-phase economic logic</span>
		<p></p>
		<span class="span_text_box">
From within this way of thinking, different practical responses can emerge. One such response is <i><a href="https://mydio.com" target="_blank" rel="noopener" style="color: inherit; text-decoration: none;">mydio.com</a></i> — a commercial vehicle designed to apply this Theory of Change within everyday economic activity. It does not replace the theory; it operationalises one part of it.
		<br><br>
		The underlying logic unfolds in three phases.
		</span>
		<p></p>
		<span class="span_text_box">
		<b>Phase 1: Recognising value where it already exists</b><br>
		Public services such as public transport already generate immense economic value. They reduce emissions, improve air quality, support access to work and education, lower healthcare costs, and strengthen social cohesion. Yet this value remains largely invisible at the individual level.
		<br><br>
		The first step is therefore recognition. Sustainable behaviour is not created; it already exists. What is missing is acknowledgment that it is economically productive.
		</span>
		<p></p>
		<span class="span_text_box">
		<b>Phase 2: Circulating value through everyday spending</b><br>
		Once recognised, that value can circulate. Points linked to sustainable public services flow into a closed-loop network of partner businesses focused on everyday spending. These points reduce effective cost without being framed as discounts or subsidies.
		<br><br>
		Businesses are not compensated by the system. They choose to accept points as part of their own commercial logic, using them to attract and retain customers while aligning with behaviours that reduce long-term societal costs. Value is not created from nothing; it is re-timed and reallocated.
		</span>
		<p></p>
		<span class="span_text_box">
		<b>Phase 3: Shifting perception from sacrifice to recognition</b><br>
		Over time, this mechanism changes perception. Sustainable choices are no longer framed as sacrifices for the greater good, nor as privileged acts affordable only to some. They are recognised as behaviours that already create value — and are therefore acknowledged economically.
		<br><br>
		Sustainability moves out of the realm of virtue and into the realm of economic reality.
		</span>
		<p></p>
	</div>
	<div class="brown_page_spacer">
		<p></p>

		<p></p>
	</div>
	<div class="white_page_span">
		<p></p>
		<span class="header_two">What this Theory of Change does — and does not — claim</span>
		<p></p>
		<span class="span_text_box">
		This Theory of Change does not claim to save the planet, replace public policy, or fix capitalism overnight. It does something more grounded. It restores credibility to the idea that everyday choices already matter economically, even if existing systems fail to recognise them.
		<br><br>
		By correcting the timing of value recognition, it challenges two persistent assumptions: that sustainability is a privilege, and that growth must come first while responsibility follows later. Neither is true. Both persist because value has been narrowly defined.
		</span>
		<p></p>
	</div>
	<div class="brown_page_spacer">
		<p></p>

		<p></p>
	</div>
	<div class="white_page_span">
		<p></p>
		<span class="header_two">Redefining growth and value without rejecting economics</span>
		<p></p>
		<span class="span_text_box">
		This Theory of Change does not reject markets, money, or growth. It rejects narrow definitions of growth and value. Growth measured purely in transaction volume, extracted resources, or short-term financial return is an incomplete and increasingly misleading proxy for prosperity.
		<br><br>
		A functioning economy must recognise Nature, people, and social systems not as moral abstractions, but as productive assets. Cleaner air, healthier ecosystems, reduced congestion, and stronger social cohesion are not side benefits — they are conditions for durable economic activity. When these dimensions are ignored, apparent growth masks rising future costs.
		<br><br>
	<i><a href="/" style="color: inherit; text-decoration: none;">my drop in the oceans</a></i> exists to make this misalignment visible and to explore how it can be corrected. <i><a href="https://mydio.com" target="_blank" rel="noopener" style="color: inherit; text-decoration: none;">mydio.com</a></i> represents one practical, commercial application of that thinking: a way of bringing future value into the present, not through moral pressure or redistribution, but through better accounting.
	<br><br>
	The ambition is deliberately modest and quietly radical at the same time. Not to tell people how to behave, not to oppose economics, and not to promise systemic transformation overnight — but to change what the system notices, counts, and values. When that shift occurs, sustainable choices no longer need to be defended as sacrifice or sold as virtue. They simply appear for what they already are: economically productive behaviour that has been overlooked for too long.
	<br><br>
	To learn more about our vision for an economy that works for Nature, <a href="/" style="color: inherit; text-decoration: underline;">visit our main page</a> or <a href="/contact" style="color: inherit; text-decoration: underline;">get in touch</a>.
		</span>
		<p></p>
	</div>
	<div class="brown_page_spacer_bottom">
		<p></p>

		<p></p>
	</div>
	<div style="padding-left: 15%;width: 85%; background-color: #7f66654a; top: 35%;position: relative;font-size: 30px;font-family: sans-serif;height: 200px;padding-top: 15px;">
		<p></p>
	</div>
			</div>	
		<div id="contact_box"  style="display:none;">
			<div id="response_box" class="contact_box">Contact:
				<br>
				<p></p>
				<form id="fcf-form-id" class="fcf-form-class" method="post" action="../php/contact-form-process.php">
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
							<input type="hidden" name="hp_hash" value="<?php echo $honeypot_hash; ?>">
							<!-- Timestamp field to check form submission speed -->
							<input type="hidden" name="form_timestamp" value="<?php echo time(); ?>">
							<input type="hidden" name="form_key" value="<?php echo hash('sha256', time() . 'form_salt_key'); ?>">
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
			<div id="cookie_box"  style="display:none;">
			<div id="cookie_info_box" class="contact_box">
				No cookies are used at this time on this website

			</div>	
		</div>
		<?php include '../php/footer.php'; ?>
	</div>
  </div>
</body>
</html>
<?

?>
