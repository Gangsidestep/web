<?php
include __DIR__ . "/../php/analytics.php";
include_once __DIR__ . "/../php/i18n.php";

$locale = get_current_locale();
$canonicalUrl = localized_url('/privacy/', $locale);
$alternateEnUrl = localized_url('/privacy/', 'en');
$alternateFrUrl = localized_url('/privacy/', 'fr');
$alternateDeUrl = localized_url('/privacy/', 'de');
$pageTitles = [
	'en' => 'Privacy & Cookie Policy | My Drop in The Oceans',
	'fr' => 'Politique de confidentialite et cookies | My Drop In The Oceans',
	'de' => 'Datenschutz- und Cookie-Richtlinie | My Drop In The Oceans',
];
$metaDescriptions = [
	'en' => 'Read the Privacy and Cookie Policy for My Drop In The Oceans, including how contact form data is handled and how we protect personal information.',
	'fr' => 'Consultez la politique de confidentialite et de cookies de My Drop In The Oceans, y compris la gestion des donnees du formulaire de contact.',
	'de' => 'Lesen Sie die Datenschutz- und Cookie-Richtlinie von My Drop In The Oceans, inklusive Umgang mit Kontaktdaten und Datenschutzmassnahmen.',
];
$copy = [
	'en' => [
		'h1' => 'Privacy & Cookie Policy',
		'cookie_h3' => 'Cookie Policy',
		'cookie_p' => 'This website does not use cookies or tracking technologies.',
		'data_h3' => 'Data Protection',
		'data_p' => 'We are committed to protecting your privacy. Any information submitted through our contact form is used solely for the purpose of responding to your inquiry and is not shared with third parties. We do not collect, store, or track any personal data beyond what you voluntarily provide through the contact form.',
		'contact_h3' => 'Contact',
		'contact_p' => 'If you have any questions about this privacy policy, please ',
		'contact_link' => 'contact us',
	],
	'fr' => [
		'h1' => 'Politique de confidentialite et cookies',
		'cookie_h3' => 'Politique relative aux cookies',
		'cookie_p' => 'Ce site n\'utilise pas de cookies ni de technologies de suivi.',
		'data_h3' => 'Protection des donnees',
		'data_p' => 'Nous nous engageons a proteger votre vie privee. Les informations envoyees via notre formulaire de contact sont utilisees uniquement pour repondre a votre demande et ne sont pas partagees avec des tiers. Nous ne collectons ni ne suivons des donnees personnelles au-dela de celles que vous fournissez volontairement.',
		'contact_h3' => 'Contact',
		'contact_p' => 'Si vous avez des questions sur cette politique de confidentialite, veuillez ',
		'contact_link' => 'nous contacter',
	],
	'de' => [
		'h1' => 'Datenschutz- und Cookie-Richtlinie',
		'cookie_h3' => 'Cookie-Richtlinie',
		'cookie_p' => 'Diese Website verwendet keine Cookies oder Tracking-Technologien.',
		'data_h3' => 'Datenschutz',
		'data_p' => 'Wir verpflichten uns zum Schutz Ihrer Privatsphaere. Informationen aus dem Kontaktformular werden ausschliesslich zur Beantwortung Ihrer Anfrage genutzt und nicht an Dritte weitergegeben. Wir speichern oder verfolgen keine personenbezogenen Daten ueber die von Ihnen freiwillig bereitgestellten Angaben hinaus.',
		'contact_h3' => 'Kontakt',
		'contact_p' => 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, ',
		'contact_link' => 'kontaktieren Sie uns',
	],
];
$pageTitle = $pageTitles[$locale] ?? $pageTitles['en'];
$metaDescription = $metaDescriptions[$locale] ?? $metaDescriptions['en'];
$t = $copy[$locale] ?? $copy['en'];
?>
<!doctype html>
<html lang="<?php echo htmlspecialchars($locale, ENT_QUOTES, 'UTF-8'); ?>">
<head>
	<?php include __DIR__ . '/../php/seo_tags.php'; ?>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
	
	<meta name="keywords" content="Privacy Policy, Cookie Policy, Data Protection" />
	<link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8'); ?>" />
	<title><?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?></title> 
	<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
	<link rel="stylesheet" type="text/css" href="/css/mydropintheoceans-style.css?v=<?php echo time(); ?>">
	 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?v=20260203"></script>
</head>
<body style="border: 0;margin: 0;padding: 0;background-color: #080a23;">
  <div style="max-width: 1000px !important;margin-right: auto;margin-left: auto;">
	<div style="height:60px;background-color: white;width:100%;max-width:1000px; color: #fff!important;
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
			background-image: url(/images/logo/mydropintheoceans_logo_large_no_drop.png);
			height: 40px;
			background-size: contain;
			background-repeat: no-repeat;
			margin-left: auto;
			margin-right: auto;
			position: relative;
			background-position: center;
			margin-top: 13px;"></div>
	</div>
	<div style="background-size: cover; width:100%;height:120%;background-image: url(/images/background/MyDIO_back.jpg);background-repeat: no-repeat;background-position-x: center;background-position-y: 74px;position:fixed;max-width:1000px;"></div>
	<div style="border: 0;margin: 0;">
		<div id="privacy_content" >
			<div class="white_page_span" style="margin-top: 0;">
				<h1 class="header_one" style="margin-top: 100px;"><?php echo htmlspecialchars($t['h1'], ENT_QUOTES, 'UTF-8'); ?></h1>
				<p></p>
				<span class="span_text_box">
					<h3 style="color: #7f6665;"><?php echo htmlspecialchars($t['cookie_h3'], ENT_QUOTES, 'UTF-8'); ?></h3>
					<p style="line-height: 1.6;"><?php echo htmlspecialchars($t['cookie_p'], ENT_QUOTES, 'UTF-8'); ?></p>
					<h3 style="color: #7f6665;"><?php echo htmlspecialchars($t['data_h3'], ENT_QUOTES, 'UTF-8'); ?></h3>
					<p style="line-height: 1.6;"><?php echo htmlspecialchars($t['data_p'], ENT_QUOTES, 'UTF-8'); ?></p>
					<h3 style="color: #7f6665;"><?php echo htmlspecialchars($t['contact_h3'], ENT_QUOTES, 'UTF-8'); ?></h3>
					<p style="line-height: 1.6;"><?php echo htmlspecialchars($t['contact_p'], ENT_QUOTES, 'UTF-8'); ?><a href="<?php echo htmlspecialchars(localized_path('/contact/', $locale), ENT_QUOTES, 'UTF-8'); ?>" style="color: #7f6665; text-decoration: underline;"><?php echo htmlspecialchars($t['contact_link'], ENT_QUOTES, 'UTF-8'); ?></a>.</p>
				</span>
			</div>
		</div>
		<?php include '../php/footer.php'; ?>
	</div>
  </div>
</body>
</html>
