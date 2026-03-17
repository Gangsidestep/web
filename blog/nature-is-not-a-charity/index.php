<?php
include __DIR__ . '/../../php/i18n.php';
$locale = get_current_locale();
$articlePath = '/blog/nature-is-not-a-charity/';

$pageTitle = $locale === 'fr'
  ? 'La Nature n’est pas une charité — c’est une nécessité'
  : 'Nature is Not a Charity—It’s an Economic Imperative';

$metaDescriptionEn = 'Why we must move beyond charity and make Nature central to our economy. Nature’s value is an economic imperative for a sustainable future.';
$metaDescriptionFr = 'Pourquoi la Nature ne peut pas dépendre des dons. Vers une économie où les choix durables sont reconnus, valorisés et alignés avec le capital naturel.';

$metaKeywordsEn = 'Nature, charity, economic imperative, regenerative economy, sustainable choices, natural capital, ecological value';
$metaKeywordsFr = 'Nature, charité, économie régénérative, choix durables, capital naturel, durabilité, valeur écologique';

$metaDescription = $locale === 'fr' ? $metaDescriptionFr : $metaDescriptionEn;
$metaKeywords = $locale === 'fr' ? $metaKeywordsFr : $metaKeywordsEn;

$canonicalHost = 'mydropintheoceans.org';
$requestPath = parse_url($_SERVER['REQUEST_URI'] ?? $articlePath, PHP_URL_PATH) ?: $articlePath;
$requestPath = '/' . ltrim($requestPath, '/');

$pathWithoutLocale = preg_replace('#^/(en|fr)(?=/|$)#i', '', $requestPath);
if ($pathWithoutLocale === '' || $pathWithoutLocale === false) {
  $pathWithoutLocale = '/';
}

if ($pathWithoutLocale !== '/' && substr($pathWithoutLocale, -1) !== '/') {
  $pathWithoutLocale .= '/';
}

$queryString = $_SERVER['QUERY_STRING'] ?? '';
if ($locale === 'en' && preg_match('#^/en(?=/|$)#i', $requestPath)) {
  $redirectTarget = 'https://' . $canonicalHost . $pathWithoutLocale;
  if ($queryString !== '') {
    $redirectTarget .= '?' . $queryString;
  }
  header('Location: ' . $redirectTarget, true, 301);
  exit;
}

$canonicalPath = $locale === 'fr' ? '/fr' . $pathWithoutLocale : $pathWithoutLocale;
$canonicalUrl = 'https://' . $canonicalHost . $canonicalPath;
$alternateEnUrl = 'https://' . $canonicalHost . $pathWithoutLocale;
$alternateFrUrl = 'https://' . $canonicalHost . '/fr' . $pathWithoutLocale;
$xDefaultUrl = $alternateEnUrl;

include __DIR__ . '/../../php/analytics.php';
?>
<!doctype html>
<html lang="<?php echo $locale; ?>">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

<!-- SEO -->
<meta name="description" content="<?php echo htmlspecialchars($metaDescription); ?>">
<meta name="keywords" content="<?php echo htmlspecialchars($metaKeywords); ?>">
<meta name="author" content="My Drop In The Oceans">
<meta name="robots" content="index, follow">

<link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl); ?>">
<link rel="alternate" hreflang="en" href="<?php echo htmlspecialchars($alternateEnUrl); ?>">
<link rel="alternate" hreflang="fr" href="<?php echo htmlspecialchars($alternateFrUrl); ?>">
<link rel="alternate" hreflang="x-default" href="<?php echo htmlspecialchars($xDefaultUrl); ?>">

<!-- Open Graph -->
<meta property="og:title" content="<?php echo htmlspecialchars($pageTitle); ?>">
<meta property="og:description" content="<?php echo htmlspecialchars($metaDescription); ?>">
<meta property="og:url" content="<?php echo htmlspecialchars($canonicalUrl); ?>">
<meta property="og:type" content="article">
<meta property="og:image" content="https://mydropintheoceans.org/images/backdrop_an_economy_linkedin.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="812">
<meta property="og:image:height" content="424">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?php echo htmlspecialchars($pageTitle); ?>">
<meta name="twitter:description" content="<?php echo htmlspecialchars($metaDescription); ?>">
<meta name="twitter:image" content="https://mydropintheoceans.org/images/backdrop_an_economy_linkedin.jpg">

<title><?php echo htmlspecialchars($pageTitle); ?></title>

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
 "datePublished": "2025-01-01",
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
</style>
</head>

<body style="border:0;margin:0;padding:0;background-color:#080a23;">
<div style="max-width:1000px;margin-right:auto;margin-left:auto;">

<?php include __DIR__ . '/../../php/site-header.php'; ?>

<div style="background-size:cover;width:100%;height:120%;
background-image:url(/images/background/MyDIO_back.jpg);
background-repeat:no-repeat;background-position-x:center;
background-position-y:74px;position:fixed;max-width:1000px;"></div>

<div style="border:0;margin:0;">
<div id="landing_page">

<div style="padding-left:15%;width:85%;top:30%;position:relative;height:5%;"></div>

<div class="intro_box"><br>
<b><?php echo $locale === 'fr' ? 'La Nature n’est pas une charité' : 'Nature is Not a Charity'; ?></b>
</div>

<div class="brown_page_spacer_top">
<p></p>
<p></p>
</div>

<div class="white_page_span">

<p></p>

<h1 class="header_one"><?php echo htmlspecialchars($pageTitle); ?></h1>

<div style="color:#888;font-size:0.95em;margin-bottom:1em;">
<?php echo $locale === 'fr' ? 'Publié' : 'Published'; ?> 2025-01-01
</div>

<span class="span_text_box">

<?php if ($locale === 'fr'): ?>

<?php include __DIR__ . '/content-fr.php'; ?>

<?php else: ?>

<!-- English content unchanged -->

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