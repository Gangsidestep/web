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
		<div id="landing_page">
			<div style="padding-left: 15%;width: 85%; top: 30%;position: relative;height: 5%;"> </div>

			<div class="intro_box"><br>
				<b>Theory of Change</b>
			</div>

			<div class="white_page_span" id="bottom_page_span">
				<h1 class="header_one">Theory of Change for Sustainability</h1>

				<h2 class="header_two" style="margin-top: 10px;">Aligning economy and Nature through value signals</h2>

				<span class="span_text_box">
					This Theory of Change reflects the evolution of <i>my drop in the oceans</i> from a foundational vision to a framework being actively
					applied through real-world initiatives such as <a href="https://mydio.com/" class="link" target="_blank" rel="noopener noreferrer">mydio.com</a>.
					The core idea is systemic: economic systems can be improved for lasting impact by correcting how ecological value and natural capital are
					recognised, priced, and made economically legible.
				</span>
				<p></p>

				<span class="span_text_box">
					A useful way to describe the challenge is sequencing: in today’s economy, the default instruction is often “make money first, then (maybe) think of Nature.”
					That sequencing turns stewardship into economic risk, because responsibility becomes asymmetric when value signals reward short-term extraction more reliably than regeneration.
					For a short, accessible reflection on this framing, see
					<a href="/blog/make-money-first-then-think-of-nature/" class="link">Make Money First, Then (Maybe) Think of Nature</a>.
				</span>

				<p></p>
				<span class="span_text_box">
					If you want supporting context, explore related essays including
					<a href="/blog/nature-is-not-a-charity/" class="link">Nature is Not a Charity—It’s an Economic Imperative</a>,
					<a href="/blog/what-if-stewardship-was-financially-recognised/" class="link">What if stewardship was financially recognised?</a>,
					and <a href="/blog/why-the-swiss-said-no-to-free-money/" class="link">Why the Swiss Said No to Free Money</a> (on legitimacy and public acceptance).
				</span>

				<h2 class="header_two">From Sustainability Commitments to Systemic Change</h2>
				<span class="span_text_box">
					Sustainability has moved from the margins of public debate to the centre of economic and political discourse. Governments set targets,
					companies publish commitments, and individuals express growing concern. Yet progress toward durable systemic change remains uneven.<br><br>

					This is not primarily a question of awareness or intention. It reflects a deeper structural tension: the economic systems shaping everyday
					decisions continue, in many cases, to reward short-term extraction more reliably than long-term regeneration.<br><br>

					As long as environmental and social value remain only partially reflected in market signals, sustainability initiatives face inherent constraints.
					Efforts to improve outcomes operate within systems whose incentives were not designed with ecological limits or social resilience in mind.<br><br>

					The challenge, therefore, is not to persuade individuals to act against prevailing incentives, nor to rely solely on voluntary commitments.
					It is to realign the underlying value signals that guide economic decision-making — consistently, credibly, and at scale.<br><br>

					Transformation, in this context, requires redesigning how value is defined, recognised, and circulated so that regeneration and resilience are not
					exceptional choices, but structurally supported ones.
				</span>

				<h2 class="header_two">Recognising Natural Capital as Foundational Wealth</h2>
				<span class="span_text_box">
					If value is to be redesigned, the starting point must be clarified. What, ultimately, is being valued — and for whom?<br><br>

					Modern economies are built on forms of capital that are interdependent but unevenly recognised. Financial capital is measured with precision.
					Human and social capital are increasingly acknowledged, though not always consistently integrated into decision-making. Natural capital —
					the ecological systems that underpin all economic activity — remains only partially reflected in market signals and institutional accounting.
					The recognition and stewardship of natural capital is essential for a resilient future.<br><br>

					Yet Nature is not an external input to the economy. It is its precondition. Every form of wealth, public or private, depends upon ecological stability,
					biodiversity, water cycles, and climate systems that no balance sheet fully captures.<br><br>

					Recognising Nature as foundational rather than residual shifts the logic of value creation. It moves the conversation from mitigating externalities after
					the fact to structuring economic participation around long-term system health.
				</span>

				<h2 class="header_two">Citizen’s Dividend for Nature: A Structural Recognition</h2>
				<span class="span_text_box">
					It is from this reframing that the concept of a Citizen’s Dividend for Nature emerges.<br><br>

					The aim is not to create new value artificially, but to make the real economic value generated by healthy natural systems visible and economically legible.<br><br>

					The dividend is not conceived as a subsidy, nor as a compensatory payment. It is a structural recognition that natural systems constitute shared wealth —
					and that economic activity derived from that shared wealth carries reciprocal responsibility. In this sense, the dividend represents both entitlement and obligation:
					entitlement to benefit from regenerative systems, and obligation to contribute to their continuity.<br><br>

					Crucially, this is not a moral appeal. It is a design question: how do we make ecological value economically legible enough to compete with — and complement —
					the conventional signals through which good stewardship is recognised in the private sector (wages, profits, dividends, investment confidence)?<br><br>

					In governance terms, the long-term legitimacy of such a mechanism depends on more than private adoption alone. Public legitimacy ultimately comes through citizens and democratic process, while scientific credibility and public institutions help determine how ecological value is measured, validated, and translated into robust frameworks over time.<br><br>

					The long-term implementation of such a mechanism would therefore require institutional stewardship. Democratic legitimacy would ultimately rest with citizens and public governance, while scientific institutions would contribute to defining and refining the ecological indicators underlying the dividend. Operationally, the mechanism could be administered through financial and digital infrastructure capable of translating ecological value signals into everyday economic transactions — ensuring that recognition of natural capital becomes practically embedded within the real economy rather than remaining an abstract accounting exercise.
				</span>

				<h2 class="header_two">Putting the Theory of Change into Practice</h2>
				<span class="span_text_box">
					Translating this recognition into practice requires mechanisms that operate within the everyday economy.<br><br>

					If natural capital is to be treated as foundational wealth, its value must become visible not only in regulatory frameworks or institutional reporting,
					but within the ordinary decisions that shape economic life. Households, businesses, and communities encounter value signals daily — through prices,
					incentives, and the circulation of benefits.<br><br>

					For systemic alignment to occur, these signals must begin to reflect regenerative priorities rather than contradict them.<br><br>

					It is within this context that practical instruments emerge — instruments designed to embed recognition of shared natural wealth directly into transactional activity.
					Initiatives such as <a href="https://mydio.com/" class="link" target="_blank" rel="noopener noreferrer">mydio.com</a> represent one attempt to apply how value signals and economic
					incentives can be recalibrated at the level of everyday participation: aligning immediate economic benefit with longer-term ecological and social resilience, and shifting
					value creation from extraction toward regeneration.<br><br>

					One way of understanding the longer-term direction is as a dynamic form of VAT. The difference is fundamental: in a conventional tax model, consumers must work harder to pay the added value charged within the system. In a Citizen’s Dividend for Nature model, the added value attributed to Nature would increasingly be met through a dividend generated by better collective stewardship of natural capital. The closer ecological accounting comes to real balance, the less dynamic such pricing would need to be.<br><br>

					In this sense, implementation does not replace the theory. It subjects it to lived conditions — allowing refinement, accountability, and continuous learning.<br><br>

					The theory of change is therefore not static. It is being examined in motion.<br><br>

					<b>In summary, the logic of change is as follows:</b> when economic mechanisms make the value of natural capital visible and shareable, the value signals that guide everyday decisions begin to shift. Individual and organisational behaviour gradually incorporates the benefits of regeneration more consistently. As these signals become more coherent and more widely embedded in the real economy, the overall economic balance progressively moves from a logic of profitable extraction toward one of viable regeneration.
				</span>

				<h2 class="header_two">Measuring Systemic Progress</h2>
				<span class="span_text_box">
					A theory of change must be testable. If economic incentives are being realigned, this shift should become visible in measurable patterns of participation and value circulation.<br><br>

					One primary indicator is the total value and volume of transactions flowing through mechanisms that recognise natural capital. This reflects not only adoption, but the degree to which ecological value is becoming economically legible within everyday activity.<br><br>

					Complementary indicators include growth in active participation (citizens and businesses), the proportion of spending influenced by regenerative incentives, and the observable shift in purchasing patterns toward goods and services aligned with long-term ecological resilience.<br><br>

					Environmental outcomes also matter. Carbon emissions are one important indicator, while other measures — including biodiversity-related metrics and emerging natural capital accounting approaches — are still evolving. The purpose of the mechanism is not to depend on one perfect metric from the outset, but to create an incentive infrastructure capable of integrating progressively better measures as science and public institutions refine them over time.<br><br>

					Progress, in this sense, is not defined solely by declarations or commitments, but by the measurable circulation of value signals that support regeneration rather than extraction.
				</span>

				<h2 class="header_two">The Direction of Travel: Building a Regenerative Economic System</h2>
				<span class="span_text_box">
					Systemic transformation does not occur through declarations alone. It unfolds through the gradual realignment of incentives, institutions, and everyday participation.<br><br>

					The theory of change articulated here is therefore not a fixed blueprint. It is a framework grounded in the recognition that natural, social, and human systems
					constitute real forms of wealth — and that durable prosperity depends on their regeneration within a truly regenerative economic system.<br><br>

					As practical initiatives test these principles under real-world conditions, the framework evolves. Its purpose is not to prescribe a single solution, but to clarify
					the direction of travel: toward economic systems in which regeneration is structurally supported, responsibility is shared, and value is defined broadly enough to sustain
					the future it seeks to create.
				</span>

				<div class="framing-box">
					<h3>Key concepts</h3>
					<p><strong>Natural capital</strong><br>
					The ecological systems — climate stability, biodiversity, soil, oceans, water cycles — that underpin all economic and social activity.</p>

					<p><strong>Value signals</strong><br>
					The cues that guide everyday decisions (prices, incentives, returns, rules), indicating what the system rewards and what it treats as secondary.</p>

					<p><strong>Economic legibility</strong><br>
					The extent to which ecological contribution and responsibility are visible within the economy — not only in principle, but in how benefits and costs are accounted for.</p>
				</div>

				<div class="cta-box">
					<h3>From framework to participation</h3>
					<p>This Theory of Change is intended to be practical. It points toward an economy where ecological foundations are treated as shared wealth and where everyday value signals reflect that reality. If you want an accessible entry point into the sequencing problem this framework addresses, read <a href="/blog/make-money-first-then-think-of-nature/" class="link">Make Money First, Then (Maybe) Think of Nature</a> — and explore how initiatives such as <a href="https://mydio.com/" class="link" target="_blank" rel="noopener noreferrer">mydio.com</a> are testing these ideas in real transactions.</p>
				</div>

				<div class="social-share-bar">
					<div class="share-label">Share:</div>
					<a href="https://www.linkedin.com/shareArticle?mini=true&url=https://mydropintheoceans.org/theory-of-change/" target="_blank" rel="noopener noreferrer" class="social-link"><img src="/images/social/linkedin.svg" alt="LinkedIn" style="width:28px;height:28px;vertical-align:middle;"></a>
					<a href="https://twitter.com/intent/tweet?url=https://mydropintheoceans.org/theory-of-change/&text=Theory%20of%20Change%3A%20Aligning%20Economy%20and%20Nature" target="_blank" rel="noopener noreferrer" class="social-link"><img src="/images/social/twitter.svg" alt="Twitter" style="width:28px;height:28px;vertical-align:middle;"></a>
					<a href="https://www.facebook.com/sharer/sharer.php?u=https://mydropintheoceans.org/theory-of-change/" target="_blank" rel="noopener noreferrer" class="social-link"><img src="/images/social/facebook.svg" alt="Facebook" style="width:28px;height:28px;vertical-align:middle;"></a>
					<a href="https://wa.me/?text=Theory%20of%20Change%3A%20Aligning%20Economy%20and%20Nature%20https://mydropintheoceans.org/theory-of-change/" target="_blank" rel="noopener noreferrer" class="social-link"><img src="/images/social/whatsapp.svg" alt="WhatsApp" style="width:28px;height:28px;vertical-align:middle;"></a>
				</div>

				<div class="related-links" style="margin: 1.25em 0; padding: 1em; background: #f6f6f6; border-radius: 4px;">
					<strong>Related pages</strong>
					<ul style="font-size: 0.82em;list-style:none;padding:0;margin:0.5em 0 0 0;display:flex;flex-wrap:wrap;gap:0.75em;">
						<li><a class="link" href="/">Visit homepage</a></li>|
						<li><a class="link" href="/blog/">Browse the blog</a></li>|
						<li><a class="link" href="/blog/make-money-first-then-think-of-nature/">Make Money First, Then (Maybe) Think of Nature — essay</a></li>|
						<li><a class="link" href="/blog/nature-is-not-a-charity/">Nature is Not a Charity — essay</a></li>|
						<li><a class="link" href="/blog/money-work-worth/">Money = Work = Worth — essay</a></li>|
						<li><a class="link" href="/blog/what-if-stewardship-was-financially-recognised/">Stewardship recognised — essay</a></li>|
						<li><a class="link" href="/blog/why-the-swiss-said-no-to-free-money/">Why the Swiss Said No to Free Money — essay</a></li>|
						<li><a class="link" href="/contact/">Contact the team</a></li>
					</ul>
				</div>

			</div>

			<div class="brown_page_spacer_bottom"><p></p><p></p></div>
			<div style="padding-left: 15%;width: 85%; background-color: #7f66654a; top: 35%;position: relative;font-size: 30px;font-family: sans-serif;height: 200px;padding-top: 15px;"><p></p></div>

			<div class="white_page_span" style="margin-top: 40px;">
				<h2 class="header_two">Frequently Asked Questions</h2>

				<div class="faq-item">
					<h3 class="header_three">What is a theory of change in sustainability?</h3>
					<span>A theory of change in sustainability explains how systemic transformation can occur by identifying the causal links between incentives, institutions, and everyday decisions. Rather than focusing only on targets or commitments, it examines how economic value signals must evolve to support long-term ecological and social resilience.</span>
				</div>

				<div class="faq-item" style="margin-top: 18px;">
					<h3 class="header_three">What is a Citizen’s Dividend for Nature?</h3>
					<span>The Citizen’s Dividend for Nature is a structural recognition that natural systems constitute shared wealth. It focuses on system design that makes ecological value economically legible — so stewardship can be structurally supported rather than dependent on voluntary sacrifice.</span>
				</div>

				<div class="faq-item" style="margin-top: 18px;">
					<h3 class="header_three">How does mydio.com apply this theory of change?</h3>
					<span>mydio.com applies this logic within everyday transactions. By embedding recognition of sustainable choices into daily spending, it explores how value signals can gradually reflect regenerative priorities rather than contradict them.</span>
				</div>

				<div class="faq-item" style="margin-top: 18px;">
					<h3 class="header_three">Why is redesigning economic incentives important for sustainability?</h3>
					<span>Sustainability efforts often struggle when they operate within systems that reward short-term extraction. Redesigning economic incentives helps ensure regenerative actions are structurally supported and economically legible at scale.</span>
				</div>

				<div class="faq-item" style="margin-top: 18px;">
					<h3 class="header_three">How would a Citizen’s Dividend for Nature be legitimised?</h3>
					<span>Its long-term legitimacy would depend on democratic adoption by citizens, together with scientific and public-institutional frameworks capable of measuring, validating, and refining how ecological value is recognised over time.</span>
				</div>
			</div>
		</div>
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