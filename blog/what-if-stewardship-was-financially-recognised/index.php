<?php
include __DIR__ . '/../../php/analytics.php';
include __DIR__ . '/../../php/i18n.php';

$locale = get_current_locale();
$articlePath = '/blog/what-if-stewardship-was-financially-recognised/';
$canonicalUrl = localized_url($articlePath, $locale);

$deContentPath = __DIR__ . '/content-de.php';
$frContentPath = __DIR__ . '/content-fr.php';
$hasDeContent = is_readable($deContentPath);
$hasFrContent = is_readable($frContentPath);

// Provide alternate URLs for seo_tags.php only when the relevant language version exists.
$alternateEnUrl = localized_url($articlePath, 'en');
$alternateFrUrl = $hasFrContent ? localized_url($articlePath, 'fr') : '';
$alternateDeUrl = $hasDeContent ? localized_url($articlePath, 'de') : '';

// Provide meta description for seo_tags.php
$metaDescription = $locale === 'fr'
  ? "Et si les gestes de soin et de stewardship donnaient lieu à de vrais bénéfices tangibles ? Une réflexion sur l’économie régénératrice."
  : ($locale === 'de'
    ? "Was wäre, wenn Fürsorge und Stewardship konkret anerkannt würden? Eine Reflexion über regenerative Wirtschaft."
    : "What if acts of care and stewardship earned you real, tangible benefits? Exploring a regenerative economy.");

$pageTitle = $locale === 'fr'
  ? 'Et si la stewardship était reconnue financièrement ?'
  : ($locale === 'de' ? 'Was wäre, wenn Stewardship finanziell anerkannt würde?' : 'What if Stewardship Was Financially Recognised?');

$ogImage = 'https://mydropintheoceans.org/images/backdrop_an_economy_linkedin.jpg';
$isArticle = true;
?>
<!doctype html>
<html lang="<?php echo $locale; ?>">
<head>
  <?php include __DIR__ . '/../../php/seo_tags.php'; ?>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <!-- description, Open Graph, Twitter Card, hreflang and basic JSON-LD are handled by seo_tags.php -->
    <meta name="keywords" content="Stewardship, Financial Recognition, Regenerative Economy, Blog, Sustainability" />
    <meta name="author" content="My Drop In The Oceans">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="200">
    <meta property="og:image:height" content="200">
    <link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8'); ?>" />
    <title><?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?></title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/connect-icons/apple-touch-icon.png">
    <link rel="stylesheet" type="text/css" href="/css/mydropintheoceans-style.css?v=<?php echo time(); ?>">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?v=20260203"></script>
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
          <b><?php echo $locale === 'fr' ? 'Partie 3/7' : ($locale === 'de' ? 'Teil 3/7' : 'Part 3/7'); ?></b><br><?php echo htmlspecialchars($pageTitle); ?>
        </div>
        <div class="brown_page_spacer_top">
          <p></p>
          <p></p>
        </div>
        <div class="white_page_span">
          <p></p>
          <h1 class="header_one"><?php echo htmlspecialchars($pageTitle); ?></h1>
          <p></p>
          <div style="color: #888; font-size: 0.95em; margin-bottom: 1em;"><?php echo $locale === 'fr' ? 'Publié' : ($locale === 'de' ? 'Veröffentlicht' : 'Published'); ?> 2025-07-03</div>
          <span class="span_text_box">
            <?php if ($locale === 'fr' && $hasFrContent): ?>
              <?php include __DIR__ . '/content-fr.php'; ?>
            <?php elseif ($locale === 'de' && $hasDeContent): ?>
              <?php include $deContentPath; ?>
            <?php elseif ($locale === 'de'): ?>
              <p><em>Hinweis: Eine vollständige deutsche Version folgt bald. Derzeit wird die englische Fassung angezeigt.</em></p>
              <?php include __DIR__ . '/content-en.php'; ?>
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