<?php
include __DIR__ . '/../../php/i18n.php';
$locale = get_current_locale();
$articlePath = '/blog/money-work-worth/';

$pageTitle = $locale === 'fr'
	? 'Argent = Travail = Valeur : une histoire que nous avons tous héritée'
	: 'Money = Work = Worth: A Story We’ve All Inherited';

$metaDescriptionEn = 'How the equation of "work = worth" drives overproduction, overconsumption, and hides real contribution. Rethink value in a sustainable, regenerative economy.';
$metaDescriptionFr = 'Comment l’équation « travail = valeur » alimente la surproduction et la surconsommation, tout en invisibilisant des contributions essentielles. Repenser la valeur dans une économie régénérative.';

$metaKeywordsEn = 'Money, Work, Worth, Economy, Sustainability, Regenerative, Blog';
$metaKeywordsFr = 'Argent, Travail, Valeur, Économie, Durabilité, Régénératif, Blog';

$metaDescription = $locale === 'fr' ? $metaDescriptionFr : $metaDescriptionEn;
$metaKeywords = $locale === 'fr' ? $metaKeywordsFr : $metaKeywordsEn;

$canonicalUrl = localized_url($articlePath, $locale);

include __DIR__ . '/../../php/analytics.php';
?>
<!doctype html>
<html lang="<?php echo $locale; ?>">
<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
		<meta name="Description" content="<?php echo htmlspecialchars($metaDescription); ?>">
		<meta name="keywords" content="<?php echo htmlspecialchars($metaKeywords); ?>" />
		<meta name="author" content="My Drop In The Oceans">
		<meta name="robots" content="index, follow">
		<meta property="og:image" content="/images/backdrop_an_economy_linkedin.jpg">
		<meta property="og:image:type" content="image/png">
		<meta property="og:image:width" content="200">
		<meta property="og:image:height" content="200">
		<link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl); ?>" />
		<link rel="alternate" hreflang="en" href="<?php echo htmlspecialchars(localized_url($articlePath, 'en')); ?>" />
		<link rel="alternate" hreflang="fr" href="<?php echo htmlspecialchars(localized_url($articlePath, 'fr')); ?>" />
		<link rel="alternate" hreflang="x-default" href="<?php echo htmlspecialchars(localized_url($articlePath, 'en')); ?>" />
		<title><?php echo htmlspecialchars($pageTitle); ?></title>
		<meta property="og:title" content="<?php echo htmlspecialchars($pageTitle); ?>">
		<meta property="og:description" content="<?php echo htmlspecialchars($metaDescription); ?>">
		<meta property="og:url" content="<?php echo htmlspecialchars($canonicalUrl); ?>">
		<meta property="og:type" content="article">
		<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
		<link rel="apple-touch-icon" sizes="180x180" href="/images/connect-icons/apple-touch-icon.png">
		<link rel="stylesheet" type="text/css" href="/css/mydropintheoceans-style.css?v=<?php echo time(); ?>">
		<script src="//ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?v=20260203"></script>
		<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Article",
			"headline": "<?php echo htmlspecialchars($pageTitle, ENT_QUOTES); ?>",
			"description": "<?php echo htmlspecialchars($metaDescription, ENT_QUOTES); ?>",
			"image": "https://mydropintheoceans.org/images/backdrop_an_economy_linkedin.jpg",
			"author": {
				"@type": "Organization",
				"name": "My Drop In The Oceans"
			},
			"publisher": {
				"@type": "Organization",
				"name": "My Drop In The Oceans",
				"logo": {
					"@type": "ImageObject",
					"url": "https://mydropintheoceans.org/images/logo/mydropintheoceans_logo_large_no_drop.png"
				}
			},
			"datePublished": "2025-06-24",
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "<?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES); ?>"
			}
		}
		</script>
		<style>
			.linkedin-btn {
				display: inline-block;
				background: #0077b5;
				color: #fff !important;
				font-weight: bold;
				border-radius: 4px;
				padding: 6px 14px;
				margin-left: 8px;
				margin-top: -4px;
				text-decoration: none;
				font-size: 1em;
				vertical-align: middle;
				transition: background 0.2s;
			}
			.linkedin-btn:hover {
				background: #005983;
				color: #fff !important;
				text-decoration: none;
			}
			.blog-nav-link { font-weight: bold; color: #205080 !important; text-decoration: underline; font-size: 1.15em; }
			.blog-nav-label { display: inline-block; margin-right: 0.3em; font-weight: bold; color: #205080; font-size: 1.1em; }
			.blog-nav-upnext { color: #205080; font-weight: bold; }
			.blog-nav-question { color: #2a5d84; font-weight: bold; }
		</style>
</head>
<body style="border: 0;margin: 0;padding: 0;background-color: #080a23;">
	<div style="max-width: 1000px !important;margin-right: auto;margin-left: auto;">
		<?php include __DIR__ . '/../../php/site-header.php'; ?>
		<div style="background-size: cover; width:100%;height:120%;background-image: url(/images/background/MyDIO_back.jpg);background-repeat: no-repeat;background-position-x: center;background-position-y: 74px;position:fixed;max-width:1000px;">
		</div>
		<div style="border: 0;margin: 0;">
			<div id="landing_page" >
				<div style="padding-left: 15%;width: 85%; top: 30%;position: relative;height: 5%;"></div>
				<div class="intro_box"><br>
					<b><?php echo $locale === 'fr' ? 'Partie 2/7' : 'Part 2/7'; ?></b><br><?php echo htmlspecialchars($pageTitle); ?>
				</div>
				<div class="brown_page_spacer_top">
					<p></p>
					<p></p>
				</div>
				<div class="white_page_span">
					<p></p>
					<h1 class="header_one"><?php echo htmlspecialchars($pageTitle); ?></h1>
					<p></p>
					<div style="color: #888; font-size: 0.95em; margin-bottom: 1em;"><?php echo $locale === 'fr' ? 'Publié' : 'Published'; ?> 2025-06-24</div>
					<span class="span_text_box">
						<?php if ($locale === 'fr'): ?>
							<?php include __DIR__ . '/content-fr.php'; ?>
						<?php else: ?>
							<?php include __DIR__ . '/content-en.php'; ?>
						<?php endif; ?>
					</span>
				</div>
			</div>
		</div>
		<?php include __DIR__ . '/../../php/footer.php'; ?>
	</div>
</body>
</html>