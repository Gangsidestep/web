<?php
include __DIR__ . '/../../php/analytics.php';
include __DIR__ . '/../../php/i18n.php';

$locale = get_current_locale();
$articlePath = '/blog/building-bridges-2026-missing-bridge/';
$canonicalUrl = localized_url($articlePath, $locale);
$alternateEnUrl = localized_url($articlePath, 'en');
$alternateFrUrl = localized_url($articlePath, 'fr');
$alternateDeUrl = localized_url($articlePath, 'de');
$pageTitle = $locale === 'fr'
    ? 'Building Bridges 2026 : le pont qui nous manque peut-être encore'
    : ($locale === 'de'
        ? 'Building Bridges 2026: Die Brücke, die uns vielleicht noch fehlt'
        : 'Building Bridges 2026: The Bridge We May Still Be Missing');
$metaDescription = $locale === 'fr'
    ? 'Depuis Building Bridges 2026 à Genève : comment relier la valeur écologique partagée aux contributions et à la participation économique du quotidien.'
    : ($locale === 'de'
        ? 'Gedanken von Building Bridges 2026 in Genf: Wie sich gemeinsamer ökologischer Wert mit Beiträgen und wirtschaftlicher Teilhabe im Alltag verbinden lässt.'
        : 'Reflections from Building Bridges 2026 in Geneva on connecting shared ecological value with contribution and everyday economic participation.');
$metaKeywords = 'Building Bridges 2026, Nature, shared ecological value, economic agency, sustainability, My Drop In The Oceans';
$ogImage = 'https://mydropintheoceans.org/images/blog/building-bridges-2026/02_plenary_blog.jpg';
$isArticle = true;
?>
<!doctype html>
<html lang="<?php echo htmlspecialchars($locale, ENT_QUOTES, 'UTF-8'); ?>">
<head>
  <?php include __DIR__ . '/../../php/seo_tags.php'; ?>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <meta name="keywords" content="<?php echo htmlspecialchars($metaKeywords, ENT_QUOTES, 'UTF-8'); ?>">
  <meta name="author" content="My Drop In The Oceans">
  <meta property="og:image:type" content="image/jpeg">
  <link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8'); ?>">
  <title><?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?></title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/images/connect-icons/apple-touch-icon.png">
  <link rel="stylesheet" type="text/css" href="/css/mydropintheoceans-style.css?v=<?php echo date('Ymd'); ?>">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?v=<?php echo date('Ymd'); ?>"></script>
  <style>
    .blog-nav-link { font-weight: bold; color: #2a5d84 !important; text-decoration: underline; }
    figure figcaption { font-size: 0.85em; font-style: italic; }
    .cta-box { background: #fff; border: 1px solid rgba(0,0,0,0.08); padding: 14px 16px; margin: 18px 0 8px; border-radius: 6px; }
    .cta-box h3 { margin: 0 0 8px; font-size: 1.05em; }
    .cta-box p { margin: 0; }
    .framing-box { background: #f7f7f7; border-left: 4px solid #2a5d84; padding: 14px 16px; margin: 28px 0 18px; border-radius: 6px; }
    .framing-box h3 { margin: 0 0 10px; font-size: 1.05em; }
  </style>
</head>
<body style="border: 0;margin: 0;padding: 0;background-color: #080a23;">
  <div style="max-width: 1000px !important;margin-right: auto;margin-left: auto;">
    <?php include __DIR__ . '/../../php/site-header.php'; ?>
    <div style="background-size: cover;width:100%;height:120%;background-image:url(/images/background/MyDIO_back.jpg);background-repeat:no-repeat;background-position:center 74px;position:fixed;max-width:1000px;"></div>
    <div id="landing_page">
      <div style="padding-left:15%;width:85%;top:30%;position:relative;height:5%;"></div>
      <div class="intro_box"><br><?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?></div>
      <div class="brown_page_spacer_top"><p></p><p></p></div>
      <div class="white_page_span">
        <p></p>
        <h1 class="header_one"><?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?></h1>
        <div class="published-date"><?php echo $locale === 'fr' ? 'Publié' : ($locale === 'de' ? 'Veröffentlicht' : 'Published'); ?> 2026-10-12</div>
        <span class="span_text_box">
          <?php
          if ($locale === 'fr') {
              include __DIR__ . '/content-fr.php';
          } elseif ($locale === 'de') {
              include __DIR__ . '/content-de.php';
          } else {
              include __DIR__ . '/content-en.php';
          }
          ?>
        </span>
      </div>
    </div>
    <?php include __DIR__ . '/../../php/footer.php'; ?>
  </div>
</body>
</html>
