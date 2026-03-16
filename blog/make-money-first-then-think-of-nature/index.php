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

            <p>There is a phrase that quietly governs much of our modern economy:</p>

            <blockquote>First make money.<br>
            Then — if there is enough left over — think of Nature.</blockquote>

            <p>It is rarely stated so bluntly.<br>
            Fact is, structurally, that is how the system works.</p>

            <p>Businesses are created to generate profit.<br>
            Individuals work to secure income.<br>
            Governments measure success through economic performance.</p>

            <p>Only once those objectives are secured — or appear stable — do we ask:</p>

            <ul>
              <li>Can we afford to reduce emissions?</li>
              <li>Can we afford biodiversity protection?</li>
              <li>Can we afford regenerative agriculture?</li>
            </ul>

            <p>Nature enters the conversation as a cost centre.<br>
            A constraint.<br>
            An afterthought.</p>

            <p>And that is not because people do not care.</p>
            <p>It is because the system makes it risky to care first.</p>

            <h2 class="header_two">The Structural Burden</h2>

            <p>Imagine a business owner.</p>

            <p>Margins are tight.<br>
            Competition is global.<br>
            Investors expect returns.</p>

            <p>Now add a moral expectation:</p>

            <blockquote>“Please internalise the cost of environmental impact.”</blockquote>

            <p>In theory, that sounds reasonable.<br>
            In practice, it means:</p>

            <ul>
              <li>Higher production costs</li>
              <li>Lower short-term profitability</li>
              <li>Potential competitive disadvantage</li>
            </ul>

            <p>If competitors do not internalise those same costs, the responsible actor is structurally penalised.</p>

            <p>So we introduce voluntary labels.<br>
            CSR reports.<br>
            Offset schemes.<br>
            ESG ratings.</p>

            <p>All well-intentioned.</p>

            <p>But notice what they share:</p>
            <p>They sit on top of the economic engine — not inside it.</p>

            <p>Nature remains external.</p>

            <h2 class="header_two">The Individual Dilemma</h2>

            <p>The same logic applies at the household level.</p>

            <p>An individual might want to:</p>

            <ul>
              <li>Buy organic</li>
              <li>Travel less</li>
              <li>Invest responsibly</li>
              <li>Support sustainable brands</li>
            </ul>

            <p>But income constraints are real — and immediate.<br>
            Rent is real.<br>
            Energy bills are real.</p>

            <p>The costs to Nature, by contrast, are often long-term and only partially reflected in today’s market signals — deferred rather than directly felt at the point of transaction.</p>

            <p>When budgets are tight, sustainability becomes conditional:</p>

            <blockquote>“I’ll make the sustainable choice — if I can afford it.”</blockquote>

            <p>And once again, Nature becomes something we consider <em>after</em> financial security.</p>

            <p>The system quietly teaches us that caring for Nature is a luxury good.</p>

            <p>Yet the consequences of environmental degradation are not luxuries.<br>
            They affect food systems, health, water, and long-term stability.</p>

            <p>The contradiction is obvious.</p>
            <p>The incentives are not.</p>

            <h2 class="header_two">The Design Problem</h2>

            <p>Much of the environmental debate focuses on behaviour:</p>

            <p>Why don’t consumers change faster?<br>
            Why don’t corporations act more boldly?<br>
            Why don’t governments regulate more aggressively?</p>

            <p>But beneath these questions lies a deeper design issue.</p>

            <p>Our economy rewards financial extraction first.<br>
            It asks ecological responsibility second.</p>

            <p>Profit is measured quarterly.<br>
            Nature regenerates over decades.</p>

            <p>Financial returns are mandatory.<br>
            Environmental stewardship is optional.</p>

            <p>Under such design conditions, even well-meaning actors are constrained.</p>

            <p>We are asking businesses and individuals to price Nature into a system that was never built to recognise its value in the first place.</p>

            <p>That is not just difficult.</p>
            <p>It is structurally incoherent.</p>

            <h2 class="header_two">When Responsibility Becomes Risk</h2>

            <p>If a company voluntarily increases costs to protect ecosystems, it risks losing market share.</p>

            <p>If a country raises standards unilaterally, it risks capital flight.</p>

            <p>If an individual pays more for sustainable goods, they personally absorb the premium.</p>

            <p>Responsibility becomes asymmetric.</p>

            <p>And asymmetric responsibility does not scale.</p>

            <p>This helps explain why awareness does not automatically translate into systemic change.</p>

            <p>The issue is not that people fail to understand the crisis.</p>
            <p>It is that responsibility is misaligned with reward.</p>

            <p>We have created an economy where protecting Nature often carries financial friction — rather than financial reinforcement.</p>

            <h2 class="header_two">The Invisible Subsidy</h2>

            <p>There is an uncomfortable truth at the centre of this conversation:</p>

            <p>Nature is still being subsidised by invisibility.</p>

            <p>We do not pay the full cost of soil degradation.<br>
            We do not pay the full cost of biodiversity collapse.<br>
            We do not pay the full cost of carbon accumulation.</p>

            <p>Those costs are deferred.</p>

            <p>To future generations.<br>
            To vulnerable communities.<br>
            To ecosystems that do not have balance sheets.</p>

            <p>In accounting terms, they remain off-balance-sheet.</p>

            <p>In ecological terms, they accumulate.</p>

            <p>As long as these costs remain external, the instruction remains the same:</p>

            <blockquote>Make money first.<br>
            Think of Nature later.</blockquote>

            <h2 class="header_two">Reversing the Sequence</h2>

            <p>What if we reversed the order?</p>

            <p>What if ecological value were embedded directly into financial flows — 
            rather than treated as an afterthought?</p>

            <p>This is where the idea of a <strong>Citizen’s Dividend for Nature</strong> becomes relevant.</p>

            <p>Instead of placing the burden of pricing Nature solely on businesses or individual consumers, the value generated by preserving and regenerating natural capital could be redistributed as tangible economic benefit.</p>

            <p>In such a framework:</p>

            <ul>
              <li>Sustainable behaviour would not be a financial penalty.</li>
              <li>Ecological stewardship would generate measurable value.</li>
              <li>Citizens would share directly in the benefits of protected ecosystems.</li>
            </ul>

            <p>Rather than asking:</p>
            <blockquote>“Can we afford to protect Nature?”</blockquote>

            <p>We would begin asking:</p>
            <blockquote>“How do we structure the economy so that protecting Nature generates value for everyone?”</blockquote>

            <p>The shift is subtle but profound.</p>

            <p>From sacrifice to alignment.<br>
            From voluntary virtue to systemic design.<br>
            From afterthought to foundation.</p>

            <h2 class="header_two">Beyond Afterthought Economics</h2>

            <p>If natural systems constitute shared wealth, then economic structures cannot treat their protection as discretionary. The question is not whether ecological responsibility should exist alongside profit, but whether profit can be meaningfully defined without reference to the systems that make it possible.</p>

            <p>When value signals reflect ecological contribution directly, the burden shifts. Responsibility is no longer a voluntary add-on layered onto financial success. It becomes embedded within how success itself is interpreted. In that shift, protecting Nature ceases to be a secondary consideration and becomes part of the logic by which economic participation is evaluated.</p>

            <h2 class="header_two">A Question of Structure</h2>

            <p>We often ask:</p>
            <p>Why don’t people care enough?</p>

            <p>But perhaps the more important question is:</p>

            <p><strong>Why does the system make caring economically risky?</strong></p>

            <p>If protecting Nature remains structurally secondary to profit,<br>
            we will continue oscillating between growth and guilt.</p>

            <p>But if we embed natural capital into the logic of economic reward — if we recognise that ecosystems are foundational assets rather than external inputs — then protecting Nature becomes rational, not exceptional.</p>

            <p>The challenge is not persuading people that Nature matters.</p>
            <p>Most already know that.</p>

            <p>The challenge is redesigning the sequence.</p>

            <p>So that the instruction is no longer:</p>

            <blockquote>Make money first.<br>
            Then (maybe) think of Nature.</blockquote>

            <p>But rather:</p>

            <blockquote>Value and protect Nature —<br>
            and let the economy reflect that reality.</blockquote>

            <p>That is not a moral appeal.</p>
            <p>It is a structural proposition.</p>
            <p>And structure is where lasting change begins.</p>

            <!-- Glossary / framing box -->
            <div class="framing-box">
              <h3>Key concepts</h3>
              <p><strong>Natural capital</strong><br>
              The ecological systems — climate stability, biodiversity, soil, oceans, water cycles — that underpin all economic activity.</p>

              <p><strong>Value signals</strong><br>
              The cues that shape everyday decisions (prices, incentives, returns, rules), indicating what the system rewards and what it treats as secondary.</p>

              <p><strong>Economic legibility</strong><br>
              The extent to which a contribution is visible and recognised within the economic system — not only morally, but in the way benefits and costs are accounted for.</p>
            </div>

            <!-- CTA (end-of-page thematic link) -->
            <div class="cta-box">
              <h3>From framework to participation</h3>
              <p>Systemic change does not begin with declarations — it begins where everyday economic choices are made. The Citizen’s Dividend for Nature is one practical expression of this direction, exploring how ecological value can become visible within ordinary transactions. Participation, refinement, and shared learning are part of shaping value signals that reflect the realities upon which all prosperity depends.</p>
            </div>

            <div class="social-share-bar">
              <div class="share-label">Share:</div>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo urlencode($canonicalUrl); ?>" target="_blank" rel="noopener" class="social-link"><img src="/images/social/linkedin.svg" alt="LinkedIn" style="width:28px;height:28px;vertical-align:middle;"></a>
              <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode($canonicalUrl); ?>&text=<?php echo urlencode($pageTitle); ?>" target="_blank" rel="noopener" class="social-link"><img src="/images/social/twitter.svg" alt="Twitter" style="width:28px;height:28px;vertical-align:middle;"></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode($canonicalUrl); ?>" target="_blank" rel="noopener" class="social-link"><img src="/images/social/facebook.svg" alt="Facebook" style="width:28px;height:28px;vertical-align:middle;"></a>
              <a href="https://wa.me/?text=<?php echo urlencode($pageTitle . ' ' . $canonicalUrl); ?>" target="_blank" rel="noopener" class="social-link"><img src="/images/social/whatsapp.svg" alt="WhatsApp" style="width:28px;height:28px;vertical-align:middle;"></a>
            </div>

            <div style="font-size: 0.95em; color: #222; margin-top: 2em;">
              <p><strong>Related reading:</strong></p>
              <ul>
                <li><a class="blog-nav-link" href="<?php echo htmlspecialchars(localized_path('/theory-of-change/', $locale)); ?>">Theory of Change — including the Citizen’s Dividend for Nature</a></li>
                <li><a class="blog-nav-link" href="<?php echo htmlspecialchars(localized_path('/blog/why-the-swiss-said-no-to-free-money/', $locale)); ?>">Why the Swiss Said No to Free Money</a></li>
                <li><a class="blog-nav-link" href="<?php echo htmlspecialchars(localized_path('/blog/', $locale)); ?>">Browse all essays on economy and Nature</a></li>
              </ul>
              <p>Have questions or want to share your thoughts? <a class="blog-nav-link" href="<?php echo htmlspecialchars(localized_path('/contact/', $locale)); ?>">Contact us here</a>.</p>
              <p>Want to know more about our mission? Visit the <a class="blog-nav-link" href="<?php echo htmlspecialchars(localized_path('/', $locale)); ?>">About page</a>.</p>
              <p>We value your privacy. Read our <a class="blog-nav-link" href="<?php echo htmlspecialchars(localized_path('/privacy/', $locale)); ?>">full Privacy Policy</a>.</p>
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