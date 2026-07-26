<?php 
include __DIR__ . '/../../php/analytics.php';
include __DIR__ . '/../../php/i18n.php';
$locale = get_current_locale();
$deContentPath = __DIR__ . '/content-de.php';
$frContentPath = __DIR__ . '/content-fr.php';
$hasDeContent = is_readable($deContentPath);
$hasFrContent = is_readable($frContentPath);
// Localized page title
$pageTitle = $locale === 'fr'
  ? 'Pourquoi les Suisses ont dit non à l\'argent gratuit'
  : ($locale === 'de' ? 'Warum die Schweiz Nein zu kostenlosem Geld sagte' : 'Why the Swiss Said No to Free Money');
$pageDescription = $locale === 'fr'
  ? 'Pourquoi le référendum suisse de 2016 sur le revenu universel a échoué et pourquoi un dividende citoyen pour la Nature est fondamentalement différent.'
  : ($locale === 'de'
      ? 'Was das Schweizer UBI-Referendum 2016 über Arbeit, Wert und Natur zeigte – und warum die Bürgerdividende für die Natur anders ist als das Grundeinkommen'
      : 'What the 2016 Swiss UBI referendum revealed about our emotional relationship with work, value, and nature — and why a Citizen\'s Dividend for Nature differs fundamentally from basic income.');
// article path + localized canonical/alternates
$articlePath = '/blog/why-the-swiss-said-no-to-free-money/';
$canonicalUrl = localized_url($articlePath, $locale);
$alternateEnUrl = localized_url($articlePath, 'en');
$alternateFrUrl = $hasFrContent ? localized_url($articlePath, 'fr') : '';
$alternateDeUrl = $hasDeContent ? localized_url($articlePath, 'de') : '';
$metaDescription = $pageDescription;
$isArticle = true;
$ogImage = 'https://mydropintheoceans.org/images/backdrop_an_economy_linkedin.jpg';
?>
<!doctype html>
<html lang="<?php echo htmlspecialchars($locale, ENT_QUOTES, 'UTF-8'); ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

    <!-- SEO -->
    <meta name="keywords" content="Universal Basic Income, Switzerland, Stewardship, Economy, Blog, Sustainability">
    <meta name="author" content="My Drop In The Oceans">
  <?php include __DIR__ . '/../../php/seo_tags.php';
  
  $seoTitle = $locale === 'fr'
    ? 'Suisse 2016 : pourquoi le revenu universel a été rejeté'
    : ($locale === 'de'
        ? 'Schweizer Grundeinkommen: Warum die Initiative scheiterte'
        : 'Why the Swiss Said No to Free Money | Swiss UBI Referendum');
        ?>
        
    <link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8'); ?>" />

    <title><?php echo htmlspecialchars($seoTitle, ENT_QUOTES, 'UTF-8'); ?></title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/connect-icons/apple-touch-icon.png">
    <link rel="stylesheet" type="text/css" href="/css/mydropintheoceans-style.css?v=<?php echo time(); ?>">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?v=<?php echo date('Ymd'); ?>"></script>

    <script type="application/ld+json">
    <?php
    $articleSchema = [
        '@context' => 'https://schema.org',
        '@type' => 'Article',
        'headline' => $pageTitle,
        'description' => $pageDescription,
        'inLanguage' => $locale,
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
        'datePublished' => '2025-06-14',
        'mainEntityOfPage' => [
          '@type' => 'WebPage',
          '@id' => $canonicalUrl
        ]
    ];
    echo json_encode($articleSchema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    ?>
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
          <b>Part 1/7</b><br><?php echo htmlspecialchars($pageTitle ?? 'Why the Swiss Said No to Free Money'); ?>
        </div>

        <div class="brown_page_spacer_top">
          <p></p>
          <p></p>
        </div>

        <div class="white_page_span">
          <p></p>
          <h1 class="header_one"><?php echo htmlspecialchars($pageTitle ?? 'Why the Swiss Said No to Free Money'); ?></h1>
          <p></p>
          <div class="published-date">Published 2025-06-14</div>

          <span class="span_text_box">
            <?php if ($locale === 'fr' && $hasFrContent): ?>
              <?php include __DIR__ . '/content-fr.php'; ?>
            <?php elseif ($locale === 'de' && $hasDeContent): ?>
              <?php include __DIR__ . '/content-de.php'; ?>
            <?php else: ?>
            <p>What a historic vote revealed about our emotional relationship with Nature, work, money, and worth.</p>
            <p>
              <div class="ch-flag-emoji-box">
                <svg width="24" height="24" viewBox="0 0 512 512" aria-label="Swiss flag">
                  <rect width="512" height="512" fill="#FF0000"></rect>
                  <rect x="195" y="106" width="120" height="300" fill="#fff"></rect>
                  <rect x="106" y="195" width="300" height="120" fill="#fff"></rect>
                </svg>
              </div>
            Almost 10 years ago, 2016, Switzerland held a world-1st national referendum:</p>
            <blockquote>💬 Should all adults receive a Universal Basic Income (UBI)—unconditional, no strings attached?<br>💡 Everyone gets a basic allowance, no matter what you earn. No matter your job.</blockquote>
            <p>Result?<br>❌ 76.9% voted no<br>Even in one of the world’s wealthiest, securest democracies, nearly 4/5 people said: “Nope!”</p>
            <p>So what really happened?<br>It wasn’t about inflation. Or budgets. Or laziness. It was about something deeper:<br>👉 A powerful emotional belief that money must be earned through work<br>🧠 "You don’t get something for nothing"<br>💼 "Only work creates worth"<br>💸 "No work = no pay"</p>
            <p>Even people who supported the idea felt uneasy. As if receiving money without producing something violated a deep inner contract. Switzerland just happened to put it to a vote.</p>
            <p>But this isn’t a Swiss story. 🌍 It’s global.</p>
            <p>So, here’s the real question:<br>💡 What about all the value we create for the planet that isn’t paid?</p>
            <ul>
              <li>🌍 Protecting Nature</li>
              <li>🚆 Choosing the train over the car</li>
              <li>🛒 Buying local and seasonal</li>
              <li>🏘️ Sharing resources instead of consuming more</li>
              <li>🔄 Repairing, reusing, recycling</li>
            </ul>
            <p>These are all acts of stewardship. They reduce harm. They restore balance. They bring long-term value for everyone.</p>
            <p>But in today’s economy?<br>⚠️ They often count for nothing<br>💥 Or worse—they’re actively disincentivised</p>
            <p>Why?<br>Because a product or behaviour that harms people or the planet…<br>…can still dominate in market value, while those that care, protect, or sustain don’t.</p>
            <p>🧾 In other words: the system rewards exploitation over stewardship.</p>
            <p>🌀 The series ahead<br>In this 7-part series, we’ll explore:</p>
            <ul>
              <li>✅ Why we tie money to personal worth</li>
              <li>✅ How this shapes our emotional resistance to change</li>
              <li>✅ What it would mean to value stewardship as well as productivity</li>
              <li>✅ How mydio.com introduces a second, complementary form of credit or value creation—one rooted in care, sustainability and shared benefit</li>
            </ul>
            <p>It's not about rejecting money.<br>It’s about balance!</p>
            <p><span class="blog-nav-label blog-nav-upnext">⏩ Up next:</span> <a class="blog-nav-link" href="/blog/money-work-worth/">Money = Work = Worth: A Story We’ve All Inherited</a></p>
            <p>🔁 Follow to stay in the loop<br>💬 And tell us below:<br>Have you ever felt like your ecological or social choices were invisible in the economy—despite being so valuable?</p>

            <!-- Added SEO/context section WITHOUT changing the LinkedIn-posted text above -->
            <h2 class="header_two" style="margin-top: 1.2em;">Universal Basic Income vs a Citizen’s ecological dividend</h2>
            <p>
              Universal Basic Income (UBI) is typically framed as an unconditional income floor — a basic allowance intended to support people regardless of work status.
              A Citizen’s ecological dividend is different in purpose and design: it is grounded in the idea that <em>natural capital is foundational shared wealth</em>, and that
              the economy currently fails to make ecological value financially legible in the same way it makes productivity legible (wages, profits, dividends).
            </p>
            <p>
              In other words, this isn’t mainly about decoupling income from work. It’s about correcting value signals so stewardship can compete with — and complement —
              the short-term incentives that dominate today, and so ecological value can be recognised credibly, transparently, and at scale. For the wider framework, see our
              <a class="blog-nav-link" href="/theory-of-change/">Theory of Change — overview</a>.
            </p>

            <div class="social-share-bar">
              <div class="share-label">Share:</div>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://mydropintheoceans.org/blog/why-the-swiss-said-no-to-free-money/" target="_blank" rel="noopener" class="social-link"><img src="/images/social/linkedin.svg" alt="LinkedIn" style="width:28px;height:28px;vertical-align:middle;"></a>
              <a href="https://twitter.com/intent/tweet?url=https://mydropintheoceans.org/blog/why-the-swiss-said-no-to-free-money/&text=<?php echo urlencode($pageTitle ?? 'Why the Swiss Said No to Free Money'); ?>" target="_blank" rel="noopener" class="social-link"><img src="/images/social/twitter.svg" alt="Twitter" style="width:28px;height:28px;vertical-align:middle;"></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://mydropintheoceans.org/blog/why-the-swiss-said-no-to-free-money/" target="_blank" rel="noopener" class="social-link"><img src="/images/social/facebook.svg" alt="Facebook" style="width:28px;height:28px;vertical-align:middle;"></a>
              <a href="https://wa.me/?text=<?php echo urlencode(($pageTitle ?? 'Why the Swiss Said No to Free Money') . ' ' . 'https://mydropintheoceans.org/blog/why-the-swiss-said-no-to-free-money/'); ?>" target="_blank" rel="noopener" class="social-link"><img src="/images/social/whatsapp.svg" alt="WhatsApp" style="width:28px;height:28px;vertical-align:middle;"></a>
            </div>

            <div style="font-size: 0.95em; color: #222; margin-top: 2em;">
              <p>For a deeper look at how we can correct the mismatch between value and reward, see our <a class="blog-nav-link" href="/theory-of-change/">Theory of Change framework</a>.</p>
              <p>Explore more about why nature is not a charity in <a class="blog-nav-link" href="/blog/nature-is-not-a-charity/">this article on Nature as an Economic Imperative</a>.</p>
              <p>Have questions or want to share your thoughts? <a class="blog-nav-link" href="/contact/">Contact us here</a>.</p>
              <p>Want to know more about our mission? Visit the <a class="blog-nav-link" href="/theory-of-change/">About page</a> to learn about My Drop In The Oceans.</p>
              <p>Explore more stories and insights on our <a class="blog-nav-link" href="/blog/">main Blog page</a>.</p>
              <p>We value your privacy. Read our <a class="blog-nav-link" href="/privacy/">full Privacy Policy</a>.</p>
            </div>
          <?php endif; ?>
          </span>
        </div>
      </div>
    </div>

    <?php include __DIR__ . '/../../php/footer.php'; ?>
  </div>
</body>
</html>
