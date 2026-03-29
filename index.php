<?php
include_once __DIR__ . '/php/i18n.php';
include __DIR__ . '/php/analytics.php';

$locale = get_current_locale();
$isFr = ($locale === 'fr');
$isDe = ($locale === 'de');

// Canonical URL for this locale
$canonicalBase = 'https://mydropintheoceans.org';
$canonicalUrl = $isDe ? $canonicalBase . '/de/' : ($isFr ? $canonicalBase . '/fr/' : $canonicalBase . '/');

// Locale-specific metadata
if ($isDe) {
	$pageTitle    = "Eine Wirtschaft, die fuer die Natur funktioniert — My Drop In the Oceans";
	$pageDesc     = "Ein Rahmen zur Ausrichtung wirtschaftlicher Anreize an der oekologischen Realitaet. Wie eine Buergerdividende fuer die Natur Naturkapital messbar und skalierbar macht.";
	$pageKeywords = "Buergerdividende fuer die Natur, Naturkapital, oekologische Oekonomie, wirtschaftliche Anreize, Stewardship, naturpositive Wirtschaft";
	$htmlLang     = 'de';
} elseif ($isFr) {
	$pageTitle    = "Une economie qui fonctionne pour la Nature — My Drop In the Oceans";
	$pageDesc     = "Un cadre pour aligner les incitations economiques sur la realite ecologique. Comment une Dividende pour la Nature rend le capital naturel lisible et a l'echelle.";
	$pageKeywords = "Dividende citoyenne pour la Nature, capital naturel, economie ecologique, incitations economiques, intendance, economie regeneratrice";
	$htmlLang     = 'fr';
} else {
	$pageTitle    = "Aligning Economy and Nature: A Dividend for Natural Capital — My Drop In the Oceans";
	$pageDesc     = "A framework to align economic incentives with ecological reality. See how a Dividend for Nature makes natural capital legible and scalable.";
	$pageKeywords = "Citizen's Dividend for Nature, natural capital, ecological economics, economic incentives, stewardship, nature-positive economy";
	$htmlLang     = 'en';
}
?>
<!doctype html>
<html lang="<?php echo $htmlLang; ?>">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title><?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?></title>

	<meta name="description" content="<?php echo htmlspecialchars($pageDesc, ENT_QUOTES, 'UTF-8'); ?>">
	<meta name="keywords"    content="<?php echo htmlspecialchars($pageKeywords, ENT_QUOTES, 'UTF-8'); ?>">
	<meta name="author" content="My Drop In The Oceans">
	<meta name="robots" content="index, follow">

	<link rel="canonical" href="<?php echo $canonicalUrl; ?>">

	<!-- hreflang -->
	<link rel="alternate" hreflang="en"        href="https://mydropintheoceans.org/">
	<link rel="alternate" hreflang="fr"        href="https://mydropintheoceans.org/fr/">
	<link rel="alternate" hreflang="de"        href="https://mydropintheoceans.org/de/">
	<link rel="alternate" hreflang="x-default" href="https://mydropintheoceans.org/">

	<!-- Open Graph -->
	<meta property="og:title"        content="<?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?>">
	<meta property="og:description"  content="<?php echo htmlspecialchars($pageDesc, ENT_QUOTES, 'UTF-8'); ?>">
	<meta property="og:type"         content="website">
	<meta property="og:url"          content="<?php echo $canonicalUrl; ?>">
	<meta property="og:image"        content="https://mydropintheoceans.org/images/social-preview.jpg">
	<meta property="og:image:type"   content="image/jpeg">
	<meta property="og:image:width"  content="1200">
	<meta property="og:image:height" content="630">

	<!-- Twitter Card -->
	<meta name="twitter:card"        content="summary_large_image">
	<meta name="twitter:title"       content="<?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?>">
	<meta name="twitter:description" content="<?php echo htmlspecialchars($pageDesc, ENT_QUOTES, 'UTF-8'); ?>">
	<meta name="twitter:image"       content="https://mydropintheoceans.org/images/social-preview.jpg">

	<link rel="icon" href="https://mydropintheoceans.org/favicon.ico" type="image/x-icon">
	<link rel="icon" href="https://mydropintheoceans.org/images/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" sizes="180x180" href="/images/connect-icons/apple-touch-icon.png">
	<link rel="stylesheet" type="text/css" href="/css/mydropintheoceans-style.css?v=<?php echo time(); ?>">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?v=<?php echo date('Ymd'); ?>"></script>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "My Drop In the Oceans",
			"url": "https://mydropintheoceans.org/",
			"potentialAction": {
				"@type": "SearchAction",
				"target": "https://mydropintheoceans.org/?s={search_term_string}",
				"query-input": "required name=search_term_string"
			}
		}
	</script>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "My Drop In the Oceans",
			"url": "https://mydropintheoceans.org/",
			"logo": "https://mydropintheoceans.org/images/logo/mydropintheoceans_logo_large_no_drop.png",
			"sameAs": [
				"https://www.linkedin.com/company/my-drop-in-the-oceans/",
				"https://www.facebook.com/mydropintheoceans/"
			]
		}
	</script>

	<!-- FAQ structured data (keeps existing schema; adds FAQPage for richer understanding) -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": [
				{
					"@type": "Question",
					"name": "Is this a universal basic income?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "No. While it uses the language of a dividend, the focus is ecological accounting and incentive design: aligning economic signals with the value of natural capital and stewardship."
					}
				},
				{
					"@type": "Question",
					"name": "How is this different from carbon pricing?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Carbon pricing addresses a specific externality. A Citizen’s Dividend for Nature addresses the broader question of how ecological wealth is recognised, measured and distributed within economic structures."
					}
				},
				{
					"@type": "Question",
					"name": "Why link this to everyday transactions?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Because incentives work where people and organisations make decisions. Bringing ecological value into day-to-day exchange helps close the gap between long-term benefits and immediate financial recognition."
					}
				}
			]
		}
	</script>


</head>
<body style="border: 0;margin: 0;padding: 0;background-color: #080a23;">
  <div style="max-width: 1000px !important;margin-right: auto;margin-left: auto;">
		<?php include __DIR__ . '/php/site-header.php'; ?>
	<div style="background-size: cover; width:100%;height:120%;background-image: url(/images/background/MyDIO_back.jpg);background-repeat: no-repeat;background-position-x: center;background-position-y: 74px;position:fixed;max-width:1000px;">
	</div>
	
	
	<main id="main" style="border: 0;margin: 0;">
		<div id="landing_page">
		<div style="padding-left: 15%;width: 85%; top: 30%;position: relative;height: 5%;"></div>
		<div class="intro_box"><br>
			<b>NATURE. <br>PEOPLE. <br>MONEY.</b>
		</div>
			
		<div class="brown_page_spacer_top">
		<p></p>
		<p></p>
		</div>

		<div class="white_page_span">
		<?php
		if ($isDe) {
			include __DIR__ . '/php/home-de.php';
		} elseif ($isFr) {
			include __DIR__ . '/php/home-fr.php';
		} else {
			include __DIR__ . '/php/home-en.php';
		}
		?>
		</div>

		<div class="brown_page_spacer_bottom">
			<p></p>

			<p></p>
		</div>
		<div style="padding-left: 15%;width: 85%; background-color: #7f66654a; top: 35%;position: relative;font-size: 30px;font-family: sans-serif;height: 200px;padding-top: 15px;">
			<p></p>
		</div>
	</div>	
	</main>
	<?php include 'php/footer.php'; ?>
  </div>
</body>
</html>
