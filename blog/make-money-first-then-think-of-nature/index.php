<?php
include __DIR__ . '/../../php/i18n.php';
$locale = get_current_locale();
$alternateLocale = get_alternate_locale($locale);
$articlePath = '/blog/make-money-first-then-think-of-nature/';

$metaDescriptionEn = 'Why our economy puts profit before Nature — how a Citizen’s Dividend for Nature could align incentives and recognise natural capital in a market economy';
$metaDescriptionFr = 'Pourquoi notre économie pousse à gagner de l’argent avant de penser à la Nature. Comment un dividende citoyen peut aligner l’économie avec le capital naturel.';

$pageTitle = $locale === 'fr'
  ? 'Gagner de l\'argent d\'abord, puis (peut-être) penser à la Nature'
  : 'Make Money First, Then (Maybe) Think of Nature';

$metaKeywordsEn = 'Nature, natural capital, Citizen’s Dividend for Nature, economy, incentives, stewardship, sustainability, ecological value, My Drop In The Oceans';
$metaKeywordsFr = 'Nature, capital naturel, dividende citoyen pour la Nature, économie, incitations économiques, durabilité, biodiversité, valeur écologique, My Drop In The Oceans';
$metaKeywords = $locale === 'fr' ? $metaKeywordsFr : $metaKeywordsEn;
$metaDescription = $locale === 'fr' ? $metaDescriptionFr : $metaDescriptionEn;
$canonicalUrl = localized_url($articlePath, $locale);

include __DIR__ . '/../../php/analytics.php';
?>
<!doctype html>
<html lang="<?php echo $locale; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

    <!-- SEO -->
    <meta name="description" content="<?php echo htmlspecialchars($metaDescription); ?>">
    <meta name="keywords" content="<?php echo htmlspecialchars($metaKeywords); ?>">
    <meta name="author" content="My Drop In The Oceans">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl); ?>" />
    <link rel="alternate" hreflang="en" href="<?php echo htmlspecialchars(localized_url($articlePath, 'en')); ?>" />
    <link rel="alternate" hreflang="fr" href="<?php echo htmlspecialchars(localized_url($articlePath, 'fr')); ?>" />
    <link rel="alternate" hreflang="x-default" href="<?php echo htmlspecialchars(localized_url($articlePath, 'en')); ?>" />

    <!-- Open Graph -->
    <meta property="og:title" content="<?php echo htmlspecialchars($pageTitle); ?>">
    <meta property="og:description" content="<?php echo htmlspecialchars($metaDescription); ?>">
    <meta property="og:url" content="<?php echo htmlspecialchars($canonicalUrl); ?>">
    <meta property="og:type" content="article">
    <meta property="og:image" content="https://mydropintheoceans.org/images/backdrop_an_economy_linkedin.jpg">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="812">
    <meta property="og:image:height" content="424">
    <meta property="og:image:alt" content="<?php echo htmlspecialchars($pageTitle); ?>">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo htmlspecialchars($pageTitle); ?>">
    <meta name="twitter:description" content="<?php echo htmlspecialchars($metaDescription); ?>">
    <meta name="twitter:image" content="https://mydropintheoceans.org/images/backdrop_an_economy_linkedin.jpg">
    <meta name="twitter:image:alt" content="<?php echo htmlspecialchars($pageTitle); ?>">

    <title><?php echo htmlspecialchars($pageTitle); ?></title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/connect-icons/apple-touch-icon.png">
    <link rel="stylesheet" type="text/css" href="/css/mydropintheoceans-style.css?v=<?php echo time(); ?>">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?v=<?php echo date('Ymd'); ?>"></script>

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
      "datePublished": "2026-02-28",
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
      .blog-nav-link { font-weight: bold; color: #2a5d84 !important; text-decoration: underline; }
      .blog-nav-label { display: inline-block; margin-right: 0.3em; }
      .blog-nav-upnext { color: #4b3c1a; font-weight: bold; }
      .blog-nav-question { color: #2a5d84; font-weight: bold; }

      /* Lightweight glossary + CTA styling (kept minimal + self-contained) */
      .framing-box {
        background: #f7f7f7;
        border-left: 4px solid #2a5d84;
        padding: 14px 16px;
        margin: 28px 0 18px 0;
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
        margin: 18px 0 8px 0;
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
          <b><?php echo $locale === 'fr' ? 'Blog' : 'Blog'; ?></b><br><?php echo htmlspecialchars($pageTitle); ?>
        </div>

        <div class="brown_page_spacer_top">
          <p></p>
          <p></p>
        </div>

        <div class="white_page_span">
          <p></p>
          <h1 class="header_one"><?php echo htmlspecialchars($pageTitle); ?></h1>
          <p></p>
          <div class="published-date"><?php echo $locale === 'fr' ? 'Publié' : 'Published'; ?> 2026-02-28</div>

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