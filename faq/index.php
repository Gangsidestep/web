<?php
include $_SERVER['DOCUMENT_ROOT'] . '/php/i18n.php';
$locale = get_current_locale();
$alternateLocale = get_alternate_locale($locale);
$pagePath = '/faq/';

if ($locale === 'fr') {
  $pageTitle = 'Capital naturel au point de transaction';
  $metaTitle = 'FAQ : Capital naturel au point de transaction | MyDIO';
  $metaDescription = 'Questions fréquentes sur la théorie du changement de My Drop In The Oceans : rendre la valeur écologique visible et partageable dans les transactions quotidiennes.';
  $metaKeywords = 'FAQ, My Drop In The Oceans, théorie du changement, capital naturel, Nature, transactions quotidiennes, point de transaction, dividende citoyen pour la Nature, gouvernance, légitimité, greenwashing, mydio.com';
  $publishedLabel = 'Publié';
  $sectionLabel = 'FAQ';
} elseif ($locale === 'de') {
  $pageTitle = 'Naturkapital am Transaktionspunkt';
  $metaTitle = 'FAQ: Naturkapital am Transaktionspunkt | MyDIO';
  $metaDescription = 'Häufige Fragen zur Theory of Change von My Drop In The Oceans: ökologischen Wert in alltäglichen Transaktionen sichtbar und teilbar machen.';
  $metaKeywords = 'FAQ, My Drop In The Oceans, Theory of Change, Naturkapital, Natur, alltägliche Transaktionen, Transaktionspunkt, Bürgerdividende für die Natur, Governance, Legitimität, Greenwashing, mydio.com';
  $publishedLabel = 'Veröffentlicht';
  $sectionLabel = 'FAQ';
} else {
  $pageTitle = 'Natural Capital at the Point of Transaction';
  $metaTitle = 'FAQ: Natural Capital at Transaction Point | MyDIO';
  $metaDescription = 'Frequently asked questions on the My Drop In The Oceans Theory of Change: making ecological value visible and shareable in everyday transactions.';
  $metaKeywords = 'FAQ, My Drop In The Oceans, theory of change, natural capital, Nature, everyday transactions, point of transaction, Citizen\'s Dividend for Nature, governance, legitimacy, greenwashing, mydio.com';
  $publishedLabel = 'Published';
  $sectionLabel = 'FAQ';
}


$canonicalUrl = localized_url($pagePath, $locale);

// Include language-specific FAQ content to populate $faqData
// Use output buffering to suppress HTML output during data inclusion
ob_start();
if ($locale === 'fr') {
  include __DIR__ . '/content-fr.php';
} elseif ($locale === 'de') {
  include __DIR__ . '/content-de.php';
} else {
  include __DIR__ . '/content-en.php';
}
ob_end_clean(); // Discard buffered output; $faqData is now defined

$schemaFaqItems = [];
foreach ($faqData[$locale] as $item) {
  $schemaFaqItems[] = [
    '@type' => 'Question',
    'name' => $item[0],
    'acceptedAnswer' => [
      '@type' => 'Answer',
      'text' => $item[1]
    ]
  ];
}

$faqSchema = [
  '@context' => 'https://schema.org',
  '@type' => 'FAQPage',
  'mainEntity' => $schemaFaqItems
];

$articleSchema = [
  '@context' => 'https://schema.org',
  '@type' => 'Article',
  'headline' => $pageTitle,
  'alternativeHeadline' => $metaTitle,
  'description' => $metaDescription,
  'image' => 'https://mydropintheoceans.org/images/backdrop_an_economy_linkedin.jpg',
  'author' => [
    '@type' => 'Organization',
    'name' => 'My Drop In The Oceans'
  ],
  'publisher' => [
    '@type' => 'Organization',
    'name' => 'My Drop In The Oceans',
    'logo' => [
      '@type' => 'ImageObject',
      'url' => 'https://mydropintheoceans.org/images/logo/mydropintheoceans_logo_large_no_drop.png'
    ]
  ],
  'datePublished' => '2026-05-20',
  'dateModified' => '2026-05-20',
  'mainEntityOfPage' => [
    '@type' => 'WebPage',
    '@id' => $canonicalUrl
  ]
];

include $_SERVER['DOCUMENT_ROOT'] . '/php/analytics.php';
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
    <link rel="alternate" hreflang="en" href="<?php echo htmlspecialchars(localized_url($pagePath, 'en')); ?>" />
    <link rel="alternate" hreflang="fr" href="<?php echo htmlspecialchars(localized_url($pagePath, 'fr')); ?>" />
    <link rel="alternate" hreflang="de" href="<?php echo htmlspecialchars(localized_url($pagePath, 'de')); ?>" />
    <link rel="alternate" hreflang="x-default" href="<?php echo htmlspecialchars(localized_url($pagePath, 'en')); ?>" />

    <!-- Open Graph -->
    <meta property="og:title" content="<?php echo htmlspecialchars($metaTitle); ?>">
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
    <meta name="twitter:title" content="<?php echo htmlspecialchars($metaTitle); ?>">
    <meta name="twitter:description" content="<?php echo htmlspecialchars($metaDescription); ?>">
    <meta name="twitter:image" content="https://mydropintheoceans.org/images/backdrop_an_economy_linkedin.jpg">
    <meta name="twitter:image:alt" content="<?php echo htmlspecialchars($pageTitle); ?>">

    <title><?php echo htmlspecialchars($metaTitle); ?></title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/connect-icons/apple-touch-icon.png">
    <link rel="stylesheet" type="text/css" href="/css/mydropintheoceans-style.css?v=<?php echo time(); ?>">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?v=<?php echo date('Ymd'); ?>"></script>

    <script type="application/ld+json">
    <?php echo json_encode($articleSchema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT); ?>
    </script>

    <script type="application/ld+json">
    <?php echo json_encode($faqSchema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT); ?>
    </script>

    <style>
      .blog-nav-link { font-weight: bold; color: #2a5d84 !important; text-decoration: underline; }

      .faq-intro {
        font-size: 1.08em;
        line-height: 1.55;
      }

      .framing-box {
        background: #f7f7f7;
        border-left: 4px solid #2a5d84;
        padding: 14px 16px;
        margin: 28px 0 22px 0;
        border-radius: 6px;
      }

      .framing-box h2 {
        margin-top: 0;
      }

      .framing-box p {
        margin: 0;
      }

      .span_text_box h2.header_two {
        margin-top: 34px;
      }

      .span_text_box ul {
        margin-top: 8px;
        margin-bottom: 18px;
      }
    </style>
</head>

<body style="border: 0;margin: 0;padding: 0;background-color: #080a23;">
  <div style="max-width: 1000px !important;margin-right: auto;margin-left: auto;">
    <?php include $_SERVER['DOCUMENT_ROOT'] . '/php/site-header.php'; ?>

    <div style="background-size: cover; width:100%;height:120%;background-image: url(/images/background/MyDIO_back.jpg);background-repeat: no-repeat;background-position-x: center;background-position-y: 74px;position:fixed;max-width:1000px;">
    </div>

    <div style="border: 0;margin: 0;">
      <div id="landing_page" >
        <div style="padding-left: 15%;width: 85%; top: 30%;position: relative;height: 5%;"></div>

        <div class="intro_box"><br>
          <b><?php echo htmlspecialchars($sectionLabel); ?></b><br><?php echo htmlspecialchars($pageTitle); ?>
        </div>

        <div class="brown_page_spacer_top">
          <p></p>
          <p></p>
        </div>

        <div class="white_page_span">
          <p></p>
          <h1 class="header_one"><?php echo htmlspecialchars($pageTitle); ?></h1>
          <p></p>
          <div class="published-date">
            <?php echo htmlspecialchars($publishedLabel); ?> 2026-05-20
          </div>

          <span class="span_text_box">
            <?php if ($locale === 'fr'): ?>
              <?php include __DIR__ . '/content-fr.php'; ?>
            <?php elseif ($locale === 'de'): ?>
              <?php include __DIR__ . '/content-de.php'; ?>
            <?php else: ?>
              <?php include __DIR__ . '/content-en.php'; ?>
            <?php endif; ?>
          </span>
        </div>
      </div>
    </div>

    <?php include $_SERVER['DOCUMENT_ROOT'] . '/php/footer.php'; ?>
  </div>
</body>
</html>
