<?php
// Blog index page for My Drop In The Oceans
$blog_posts = [
    [
      'title' => 'Nature is Not a Charity—It’s an Economic Imperative',
      'slug' => 'nature-is-not-a-charity/',
      'date' => '2025-01-01',
      'excerpt' => 'Why we must move beyond charity and embed nature into the heart of our economic system.',
    ],
    [
      'part' => 'Part 1/7',
      'title' => 'Why the Swiss Said No to Free Money',
      'slug' => 'why-the-swiss-said-no-to-free-money/',
      'date' => '2025-06-14',
      'excerpt' => 'What a historic vote revealed about our emotional relationship with Nature, work, money, and worth.',
    ],
    [
      'part' => 'Part 2/7',
      'title' => 'Money = Work = Worth: A Story We’ve All Inherited',
      'slug' => 'money-work-worth/',
      'date' => '2025-06-24',
      'excerpt' => 'How the equation of “work = worth” drives overproduction, overconsumption — and hides real contribution.',
    ],
    [
      'part' => 'Part 3/7',
      'title' => 'What if Stewardship Was Financially Recognised?',
      'slug' => 'what-if-stewardship-was-financially-recognised/',
      'date' => '2025-07-03',
      'excerpt' => 'What if acts of care and stewardship earned you real, tangible benefits? Exploring a regenerative economy.',
    ],
    [
      'title' => 'Make Money First, Then (Maybe) Think of Nature',
      'slug' => 'make-money-first-then-think-of-nature/',
      'date' => '2026-02-28',
      'excerpt' => 'Why our economy puts profit before Nature — how a Citizen’s Dividend for Nature could align incentives and recognise natural capital in a market economy.',
    ],
    // Add more posts here as you publish them
];
include __DIR__ . '/../php/analytics.php';
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="description" content="Read the latest blog posts and insights from My Drop In The Oceans. Explore sustainability, regenerative economy, stewardship, and more." />
    <meta name="keywords" content="Blog, Insights, Sustainability, Regenerative Economy, Stewardship, My Drop In The Oceans" />
    <meta name="author" content="My Drop In The Oceans">
    <meta property="og:image" content="/images/backdrop_an_economy_linkedin.jpg">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="200">
    <meta property="og:image:height" content="200">
    <link rel="canonical" href="https://mydropintheoceans.org/blog/" />
    <title>Blog | Insights from My Drop In The Oceans</title>
    <meta property="og:title" content="Blog | Insights from My Drop In The Oceans" />
    <meta property="og:description" content="Read the latest blog posts and insights from My Drop In The Oceans. Explore sustainability, regenerative economy, stewardship, and more." />
    <link rel="icon" type="image/x-icon" href="../images/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/connect-icons/apple-touch-icon.png">
    <link rel="stylesheet" type="text/css" href="../css/mydropintheoceans-style.css?v=<?php echo date('Ymd'); ?>">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?v=<?php echo date('Ymd'); ?>"></script>
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
        background-image: url(../images/logo/mydropintheoceans_logo_large_no_drop.png);
        height: 40px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        background-position: center;
        margin-top: 13px;"></div>
    </div>
    <div style="background-size: cover; width:100%;height:120%;background-image: url(../images/background/MyDIO_back.jpg);background-repeat: no-repeat;background-position-x: center;background-position-y: 74px;position:fixed;max-width:1000px;">
    </div>
    <div style="border: 0;margin: 0;">
      <div id="landing_page" >
        <div style="padding-left: 15%;width: 85%; top: 30%;position: relative;height: 5%;"></div>
        <div class="intro_box"><br>
          <b>BLOG</b>
        </div>
        <div class="brown_page_spacer_top">
          <p></p>
          <p></p>
        </div>
        <div class="white_page_span">
          <p></p>
          <h1 class="header_one">Blog</h1>
          <p></p>
          <span class="span_text_box">
            Insights and updates from My Drop In The Oceans.
          </span>
          <ul style="list-style: none; padding: 0;">
            <?php foreach ($blog_posts as $post): ?>
              <li style="margin-bottom: 2em;">
                <h2 style="color:#2a5d84; font-size:1em; font-weight:700; margin-bottom:0.2em; padding-right:0.5em; word-break:break-word; background:none;">
                  <?php if (isset($post['part'])): ?>
                    <span style="color:#7f6665; font-size:0.8em; font-weight:400; background:none;"><?php echo htmlspecialchars($post['part']); ?></span><br>
                  <?php endif; ?>
                  <a href="<?php echo $post['slug']; ?>" style="color:#2a5d84; font-size:1em; font-weight:700; text-decoration:none; background:none;"><?php echo htmlspecialchars($post['title']); ?></a>
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
                <div class="published-date">Published <?php echo $published_readable; ?></div>
                <div style="color:#222; font-size:0.98em; padding-right:0.5em; background:none;"><?php echo htmlspecialchars($post['excerpt']); ?></div>
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
