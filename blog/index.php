<?php
// Blog index page for My Drop In The Oceans
include __DIR__ . '/../php/i18n.php';
$locale = get_current_locale();

$blog_posts = [
    [
      'title' => 'Nature is Not a Charity—It’s an Economic Imperative',
      'title_fr' => 'La nature n’est pas une charité — c’est un impératif économique',
      'slug' => 'nature-is-not-a-charity/',
      'date' => '2025-01-01',
      'excerpt' => 'Why we must move beyond charity and embed nature into the heart of our economic system.',
      'excerpt_fr' => 'Pourquoi nous devons dépasser la logique de charité et intégrer la nature au cœur de notre système économique.',
    ],
    [
      'part' => 'Part 1/7',
      'part_fr' => 'Partie 1/7',
      'title' => 'Why the Swiss Said No to Free Money',
      'title_fr' => 'Pourquoi les Suisses ont dit non à l’argent gratuit',
      'slug' => 'why-the-swiss-said-no-to-free-money/',
      'date' => '2025-06-14',
      'excerpt' => 'What a historic vote revealed about our emotional relationship with Nature, work, money, and worth.',
      'excerpt_fr' => 'Ce qu’un vote historique a révélé sur notre relation émotionnelle à la nature, au travail, à l’argent et à la valeur.',
    ],
    [
      'part' => 'Part 2/7',
      'part_fr' => 'Partie 2/7',
      'title' => 'Money = Work = Worth: A Story We’ve All Inherited',
      'title_fr' => 'Argent = Travail = Valeur : une histoire que nous avons tous héritée',
      'slug' => 'money-work-worth/',
      'date' => '2025-06-24',
      'excerpt' => 'How the equation of “work = worth” drives overproduction, overconsumption — and hides real contribution.',
      'excerpt_fr' => 'Comment l’équation « travail = valeur » alimente la surproduction, la surconsommation et invisibilise la contribution réelle.',
    ],
    [
      'part' => 'Part 3/7',
      'part_fr' => 'Partie 3/7',
      'title' => 'What if Stewardship Was Financially Recognised?',
      'title_fr' => 'Et si la préservation était reconnue financièrement ?',
      'slug' => 'what-if-stewardship-was-financially-recognised/',
      'date' => '2025-07-03',
      'excerpt' => 'What if acts of care and stewardship earned you real, tangible benefits? Exploring a regenerative economy.',
      'excerpt_fr' => 'Et si les actes de soin et de préservation vous apportaient des bénéfices concrets ? Exploration d’une économie régénérative.',
    ],
    [
      'title' => 'Make Money First, Then (Maybe) Think of Nature',
      'title_fr' => 'Gagner de l’argent d’abord, puis (peut-être) penser à la nature',
      'slug' => 'make-money-first-then-think-of-nature/',
      'date' => '2026-02-28',
      'excerpt' => 'Why our economy puts profit before Nature — how a Citizen’s Dividend for Nature could align incentives and recognise natural capital in a market economy.',
      'excerpt_fr' => 'Pourquoi notre économie place le profit avant la nature — et comment un dividende citoyen pour la nature pourrait aligner les incitations et reconnaître le capital naturel dans une économie de marché.',
    ],
    // Add more posts here as you publish them
];

$pageTitle = $locale === 'fr'
    ? 'Blog | Analyses de My Drop In The Oceans'
    : 'Blog | Insights from My Drop In The Oceans';

$metaDescription = $locale === 'fr'
    ? 'Lisez les derniers articles et analyses de My Drop In The Oceans sur la durabilité, la régénération et la préservation.'
    : 'Read the latest blog posts and insights from My Drop In The Oceans. Explore sustainability, regenerative economy, stewardship, and more.';

$metaKeywords = $locale === 'fr'
    ? 'Blog, Analyses, Durabilité, Économie régénérative, Préservation, My Drop In The Oceans'
    : 'Blog, Insights, Sustainability, Regenerative Economy, Stewardship, My Drop In The Oceans';

$introLabel = $locale === 'fr' ? 'BLOG' : 'BLOG';
$headline = $locale === 'fr' ? 'Blog' : 'Blog';
$introText = $locale === 'fr'
    ? 'Analyses et actualités de My Drop In The Oceans.'
    : 'Insights and updates from My Drop In The Oceans.';

$publishedLabel = $locale === 'fr' ? 'Publié' : 'Published';

$canonicalUrl = localized_url('/blog/', $locale);
$alternateLocale = get_alternate_locale($locale);
$alternateUrl = localized_url('/blog/', $alternateLocale);

include __DIR__ . '/../php/analytics.php';
?>
<!doctype html>
<html lang="<?php echo $locale; ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="description" content="<?php echo htmlspecialchars($metaDescription); ?>" />
    <meta name="keywords" content="<?php echo htmlspecialchars($metaKeywords); ?>" />
    <meta name="author" content="My Drop In The Oceans">
    <meta property="og:image" content="/images/backdrop_an_economy_linkedin.jpg">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="200">
    <meta property="og:image:height" content="200">
    <link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl); ?>" />
    <link rel="alternate" hreflang="en" href="<?php echo htmlspecialchars(localized_url('/blog/', 'en')); ?>" />
    <link rel="alternate" hreflang="fr" href="<?php echo htmlspecialchars(localized_url('/blog/', 'fr')); ?>" />
    <link rel="alternate" hreflang="x-default" href="<?php echo htmlspecialchars(localized_url('/blog/', 'en')); ?>" />
    <title><?php echo htmlspecialchars($pageTitle); ?></title>
    <meta property="og:title" content="<?php echo htmlspecialchars($pageTitle); ?>" />
    <meta property="og:description" content="<?php echo htmlspecialchars($metaDescription); ?>" />
    <link rel="icon" type="image/x-icon" href="../images/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/connect-icons/apple-touch-icon.png">
    <link rel="stylesheet" type="text/css" href="../css/mydropintheoceans-style.css?v=<?php echo date('Ymd'); ?>">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?v=<?php echo date('Ymd'); ?>"></script>
</head>
<body style="border: 0;margin: 0;padding: 0;background-color: #080a23;">
  <div style="max-width: 1000px !important;margin-right: auto;margin-left: auto;">
    <?php include __DIR__ . '/../php/site-header.php'; ?>
    <div style="background-size: cover; width:100%;height:120%;background-image: url(../images/background/MyDIO_back.jpg);background-repeat: no-repeat;background-position-x: center;background-position-y: 74px;position:fixed;max-width:1000px;">
    </div>
    <div style="border: 0;margin: 0;">
      <div id="landing_page" >
        <div style="padding-left: 15%;width: 85%; top: 30%;position: relative;height: 5%;"></div>
        <div class="intro_box"><br>
          <b><?php echo htmlspecialchars($introLabel); ?></b>
        </div>
        <div class="brown_page_spacer_top">
          <p></p>
          <p></p>
        </div>
        <div class="white_page_span">
          <p></p>
          <h1 class="header_one"><?php echo htmlspecialchars($headline); ?></h1>
          <p></p>
          <span class="span_text_box">
            <?php echo htmlspecialchars($introText); ?>
          </span>
          <ul style="list-style: none; padding: 0;">
            <?php foreach ($blog_posts as $post): ?>
              <li style="margin-bottom: 2em;">
                <h2 style="color:#2a5d84; font-size:1em; font-weight:700; margin-bottom:0.2em; padding-right:0.5em; word-break:break-word; background:none;">
                  <?php if (isset($post['part'])): ?>
                    <span style="color:#7f6665; font-size:0.8em; font-weight:400; background:none;"><?php echo htmlspecialchars($locale === 'fr' ? ($post['part_fr'] ?? $post['part']) : $post['part']); ?></span><br>
                  <?php endif; ?>
                  <a href="<?php echo htmlspecialchars(localized_path('/blog/' . $post['slug'], $locale)); ?>" style="color:#2a5d84; font-size:1em; font-weight:700; text-decoration:none; background:none;"><?php echo htmlspecialchars($locale === 'fr' ? ($post['title_fr'] ?? $post['title']) : $post['title']); ?></a>
                </h2>
                <?php
                  // Format date YYYY-MM-DD to a readable form like "January 1st 2025"
                  $published_raw = isset($post['date']) ? $post['date'] : '';
                  $published_readable = htmlspecialchars($published_raw);
                  $dt = DateTime::createFromFormat('Y-m-d', $published_raw);
                  if ($dt && $dt->format('Y-m-d') === $published_raw) {
                    $published_readable = $dt->format('F jS Y');
                  }
                ?>
                <div class="published-date"><?php echo htmlspecialchars($publishedLabel); ?> <?php echo $published_readable; ?></div>
                <div style="color:#222; font-size:0.98em; padding-right:0.5em; background:none;"><?php echo htmlspecialchars($locale === 'fr' ? ($post['excerpt_fr'] ?? $post['excerpt']) : $post['excerpt']); ?></div>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      </div>
    </div>
    <?php include __DIR__ . '/../php/footer.php'; ?>
  </div>
</body>
</html>
