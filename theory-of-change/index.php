<?php
echo "<!-- My Drop In The Oceans - Theory of Change -->\n";
include "/home/clients/a87f9485d236547310279906c2e64cab/php/form_salt.php";
include __DIR__ . "/../php/i18n.php";
include __DIR__ . "/../php/analytics.php";
$form_token = "";
$rand = time();
if (isset($form_salt) && $form_salt != "") {
	$form_token = hash('sha256', $rand . $form_salt);
}

$locale = get_current_locale();
$isFr = $locale === 'fr';

$pageTitle = $isFr
	? 'Théorie du changement : aligner l’économie et la nature à grande échelle'
	: 'Theory of Change: Aligning Economy and Nature at Scale';

$metaDescription = $isFr
	? 'Une théorie du changement qui aligne les incitations économiques avec les réalités écologiques, afin de rendre le capital naturel visible et opérationnel à grande échelle.'
	: 'A Theory of Change aligning economic incentives with ecological reality — making natural capital financially legible and structurally scalable.';

$metaKeywords = $isFr
	? 'théorie du changement, économie et Nature, dividende citoyen pour la Nature, capital naturel, économie écologique, incitations économiques, économie régénérative'
	: 'theory of change, aligning economy and Nature, citizen’s dividend for Nature, natural capital, ecological economics, economic incentives, regenerative economy';

$ogTitle = $isFr
	? 'Théorie du changement : aligner l’économie et la nature'
	: 'Theory of Change: Aligning Economy and Nature';

$host = $_SERVER['HTTP_HOST'] ?? 'mydropintheoceans.org';
$requestPath = parse_url($_SERVER['REQUEST_URI'] ?? '/theory-of-change/', PHP_URL_PATH) ?: '/theory-of-change/';
$requestPath = '/' . ltrim($requestPath, '/');

$pathWithoutLocale = preg_replace('#^/(en|fr)(?=/|$)#i', '', $requestPath);
if ($pathWithoutLocale === '' || $pathWithoutLocale === false) {
	$pathWithoutLocale = '/';
}

if ($pathWithoutLocale !== '/' && substr($pathWithoutLocale, -1) !== '/') {
	$pathWithoutLocale .= '/';
}

$canonicalPath = $isFr ? '/fr' . $pathWithoutLocale : $pathWithoutLocale;
$canonicalUrl = 'https://' . $host . $canonicalPath;
$alternateEnUrl = 'https://' . $host . $pathWithoutLocale;
$alternateFrUrl = 'https://' . $host . '/fr' . $pathWithoutLocale;
$xDefaultUrl = $alternateEnUrl;

$webPageDescription = $isFr
	? 'Une théorie du changement visant à aligner les incitations économiques avec les réalités écologiques, pour rendre le capital naturel visible dans les décisions quotidiennes.'
	: 'A Theory of Change for aligning economic incentives with ecological reality — making natural capital economically legible so regeneration is structurally supported at scale.';

$faqSchema = $isFr
	? [
		[
			'question' => 'Qu’est-ce qu’une théorie du changement en durabilité ?',
			'answer' => 'Une théorie du changement en durabilité décrit comment transformer un système en reliant incitations, institutions et décisions du quotidien. Elle ne se limite pas à des objectifs affichés : elle précise comment les signaux de valeur doivent évoluer pour soutenir la résilience écologique et sociale.'
		],
		[
			'question' => 'Qu’est-ce qu’un dividende citoyen pour la Nature ?',
			'answer' => 'Le dividende citoyen pour la Nature part de l’idée que les systèmes naturels constituent une richesse commune. Il vise à rendre la valeur écologique lisible dans l’économie afin que la préservation soit structurellement soutenue, et non dépendante du seul volontariat.'
		],
		[
			'question' => 'Comment mydio.com applique-t-il cette théorie du changement ?',
			'answer' => 'mydio.com teste cette logique dans des transactions réelles. En intégrant la reconnaissance de choix durables dans les dépenses quotidiennes, l’initiative cherche à réorienter progressivement les signaux de valeur vers des priorités régénératives.'
		],
		[
			'question' => 'Pourquoi repenser les incitations économiques est-il essentiel pour la durabilité ?',
			'answer' => 'Les efforts de durabilité restent limités lorsque le système récompense surtout l’extraction à court terme. Repenser les incitations permet de rendre les pratiques régénératives visibles, crédibles et viables à grande échelle.'
		],
		[
			'question' => 'Comment légitimer un dividende citoyen pour la Nature ?',
			'answer' => 'Sa légitimité à long terme dépend d’une appropriation démocratique par les citoyens, combinée à des cadres scientifiques et institutionnels capables de mesurer, valider et améliorer dans le temps la reconnaissance de la valeur écologique.'
		]
	]
	: [
		[
			'question' => 'What is a theory of change in sustainability?',
			'answer' => 'A theory of change in sustainability explains how systemic transformation can occur by identifying the causal links between incentives, institutions, and everyday decisions. Rather than focusing only on targets or commitments, it examines how economic value signals must evolve to support long-term ecological and social resilience.'
		],
		[
			'question' => 'What is a Citizen’s Dividend for Nature?',
			'answer' => 'The Citizen’s Dividend for Nature is a structural recognition that natural systems constitute shared wealth. It focuses on system design that makes ecological value economically legible — so stewardship can be structurally supported rather than dependent on voluntary sacrifice.'
		],
		[
			'question' => 'How does mydio.com apply this theory of change?',
			'answer' => 'mydio.com applies this logic within everyday transactions. By embedding recognition of sustainable choices into daily spending, it explores how value signals can gradually reflect regenerative priorities rather than contradict them.'
		],
		[
			'question' => 'Why is redesigning economic incentives important for sustainability?',
			'answer' => 'Sustainability efforts often struggle when they operate within systems that reward short-term extraction. Redesigning economic incentives helps ensure regenerative actions are structurally supported and economically legible at scale.'
		],
		[
			'question' => 'How would a Citizen’s Dividend for Nature be legitimised?',
			'answer' => 'Its long-term legitimacy would depend on democratic adoption by citizens, together with scientific and public-institutional frameworks capable of measuring, validating, and refining how ecological value is recognised over time.'
		]
	];
?>
<!doctype html>
<html lang="<?php echo $locale; ?>">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

	<title><?php echo htmlspecialchars($pageTitle); ?></title>
	<meta name="description" content="<?php echo htmlspecialchars($metaDescription); ?>">
	<meta name="keywords" content="<?php echo htmlspecialchars($metaKeywords); ?>">
	<meta name="author" content="My Drop In The Oceans">
	<meta name="robots" content="index, follow">

	<link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl); ?>" />
	<link rel="alternate" hreflang="en" href="<?php echo htmlspecialchars($alternateEnUrl); ?>" />
	<link rel="alternate" hreflang="fr" href="<?php echo htmlspecialchars($alternateFrUrl); ?>" />
	<link rel="alternate" hreflang="x-default" href="<?php echo htmlspecialchars($xDefaultUrl); ?>" />

	<!-- Open Graph -->
	<meta property="og:title" content="<?php echo htmlspecialchars($ogTitle); ?>">
	<meta property="og:description" content="<?php echo htmlspecialchars($metaDescription); ?>">
	<meta property="og:url" content="<?php echo htmlspecialchars($canonicalUrl); ?>">
	<meta property="og:type" content="article">
	<meta property="og:image" content="https://mydropintheoceans.org/images/backdrop_an_economy_linkedin.jpg">
	<meta property="og:image:type" content="image/jpeg">
	<meta property="og:image:width" content="1200">
	<meta property="og:image:height" content="630">

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="<?php echo htmlspecialchars($ogTitle); ?>">
	<meta name="twitter:description" content="<?php echo htmlspecialchars($metaDescription); ?>">
	<meta name="twitter:image" content="https://mydropintheoceans.org/images/backdrop_an_economy_linkedin.jpg">

	<link rel="icon" href="https://mydropintheoceans.org/favicon.ico" type="image/x-icon">
	<link rel="icon" href="https://mydropintheoceans.org/images/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" sizes="180x180" href="/images/connect-icons/apple-touch-icon.png">
	<link rel="stylesheet" type="text/css" href="../css/mydropintheoceans-style.css?v=<?php echo time(); ?>">

	<script src="//ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?v=<?php echo time(); ?>"></script>

	<!-- Structured data: WebPage -->
	<script type="application/ld+json">
	<?php
	$webPageSchema = [
		'@context' => 'https://schema.org',
		'@type' => 'WebPage',
		'name' => $ogTitle,
		'url' => $canonicalUrl,
		'description' => $webPageDescription,
		'isPartOf' => [
			'@type' => 'WebSite',
			'name' => 'My Drop In The Oceans',
			'url' => 'https://mydropintheoceans.org/'
		],
		'publisher' => [
			'@type' => 'Organization',
			'name' => 'My Drop In The Oceans',
			'url' => 'https://mydropintheoceans.org/'
		]
	];
	echo json_encode($webPageSchema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
	?>
	</script>

	<style>
		/* Lightweight glossary + CTA styling (kept minimal + self-contained) */
		.framing-box {
			background: #f7f7f7;
			border-left: 4px solid #2a5d84;
			padding: 14px 16px;
			margin: 20px 0 18px 0;
			border-radius: 6px;
		}
		.framing-box h3 {
			margin: 0 0 10px 0;
			font-size: 1.05em;
		}
		.framing-box p {
			margin: 0 0 8px 0;
		}
		.framing-box p:last-child { margin-bottom: 0; }

		.cta-box{
			background: #fff;
			border: 1px solid rgba(0,0,0,0.08);
			padding: 14px 16px;
			margin: 18px 0 10px 0;
			border-radius: 6px;
		}
		.cta-box h3{
			margin: 0 0 8px 0;
			font-size: 1.05em;
		}
		.cta-box p{
			margin: 0;
		}
	</style>

	<script>
		$(document).ready(function () {
			$('#Email').on('input', function() {
				var is_email = checkEmail();
				if (is_email) {
					// Valid email format
					if ($('#Message').val()) {
						$("#contact-button").removeAttr('disabled').removeClass('button-contact').addClass("active-button-contact");
					}
				} else {
					$("#contact-button").attr('disabled','disabled').removeClass('active-button-contact').addClass("button-contact");
				}
			});

			$('#Message').on('input', function() {
				var message = $(this).val();
				if (message) {
					var is_email = checkEmail();
					if (is_email) {
						$("#contact-button").removeAttr('disabled').removeClass('button-contact').addClass("active-button-contact");
					}
				} else {
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

				$.post("../contact-form-process.php", formData)
					.done(function( data ) {
						if (data="success") {
							document.getElementById("response_box").innerHTML = "Thanks for getting in touch. We'll get back to you soon.";
							document.getElementById("bottom_page_span").style.position = "fixed";
						}
					});

				event.preventDefault();
			});
		});

		function checkEmail() {
			var input = $('#Email').val();
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
			}, 5);
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
			}, 5);
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
			}, 5);
		}
	</script>
</head>

<body style="border: 0;margin: 0;padding: 0;background-color: #080a23;">
  <div style="max-width: 1000px !important;margin-right: auto;margin-left: auto;">
	<?php include __DIR__ . '/../php/site-header.php'; ?>

	<div style="background-size: cover; width:100%;height:120%;background-image: url(../images/background/MyDIO_back.jpg);background-repeat: no-repeat;background-position-x: center;background-position-y: 74px;position:fixed;max-width:1000px;">
	</div>

	<div style="border: 0;margin: 0;">
		<?php if ($isFr): ?>
			<?php include __DIR__ . '/content-fr.php'; ?>
		<?php else: ?>
			<?php include __DIR__ . '/content-en.php'; ?>
		<?php endif; ?>

		<div id="contact_box" style="display:none;">
			<div id="response_box" class="contact_box"><?php echo $isFr ? 'Contact :' : 'Contact:'; ?>
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
							<input type="text" name="<?php echo $honeypot_name; ?>" id="company_name" style="position: absolute; left: <?php echo $hp_left; ?>px; top: <?php echo $hp_top; ?>px; width: 1px; height: 1px;" tabindex="-1" autocomplete="off" aria-hidden="true">
							<input type="hidden" name="hp_hash" value="<?php echo $honeypot_hash; ?>">
							<input type="hidden" name="form_timestamp" value="<?php echo time(); ?>">
							<input type="hidden" name="form_key" value="<?php echo hash('sha256', time() . 'form_salt_key'); ?>">

							<label for="Email" class="form-label">Email</label><br>
							<input type="email" id="Email" name="Email" class="form-input" autocomplete="email" required>

							<label for="Message" class="fcf-label"><?php echo $isFr ? 'Message' : 'Message'; ?></label>
							<div class="fcf-input-group">
								<textarea id="Message" name="Message" class="fcf-form-control message-contact" rows="6" maxlength="3000" required></textarea>
							</div>
						</div>

						<div class="fcf-form-group">
							<button type="submit" id="contact-button" class="button-contact" disabled><?php echo $isFr ? 'Envoyer' : 'Send'; ?></button>
						</div>
					</div>
				</form>
			</div>
		</div>

		<?php include '../php/footer.php'; ?>
	</div>
  </div>

<script type="application/ld+json">
<?php
$faqMainEntity = [];
foreach ($faqSchema as $faqItem) {
	$faqMainEntity[] = [
		'@type' => 'Question',
		'name' => $faqItem['question'],
		'acceptedAnswer' => [
			'@type' => 'Answer',
			'text' => $faqItem['answer']
		]
	];
}

$faqPageSchema = [
	'@context' => 'https://schema.org',
	'@type' => 'FAQPage',
	'mainEntity' => $faqMainEntity,
];

echo json_encode($faqPageSchema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
?>
</script>

</body>
</html>
<?php
// (intentionally blank)
?>