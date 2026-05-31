<?php
// Reusable SEO tags include: robots, Twitter Card, and basic JSON-LD structured data
// Expects optional variables in the including file: $pageTitle, $metaDescription, $canonicalUrl, $ogImage

if (!isset($pageTitle)) {
    $pageTitle = $metaTitle ?? ($pageTitle ?? '');
}

if (!isset($metaDescription)) {
    $metaDescription = $metaDescription ?? '';
}

if (!isset($canonicalUrl)) {
    // build current URL fallback
    $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'] ?? 'mydropintheoceans.org';
    $requestUri = $_SERVER['REQUEST_URI'] ?? '/';
    $canonicalUrl = $scheme . '://' . $host . $requestUri;
}

if (!isset($ogImage) || empty($ogImage)) {
    $ogImage = 'https://mydropintheoceans.org/images/backdrop_an_economy_linkedin.jpg';
}

// Robots default
?>
<meta name="robots" content="index, follow">
<?php if (!empty($metaDescription)): ?>
<meta name="description" content="<?php echo htmlspecialchars($metaDescription, ENT_QUOTES, 'UTF-8'); ?>">
<?php endif; ?>

<!-- Open Graph -->
<meta property="og:title" content="<?php echo htmlspecialchars($pageTitle ?: ($metaTitle ?? ''), ENT_QUOTES, 'UTF-8'); ?>">
<?php if (!empty($metaDescription)): ?>
<meta property="og:description" content="<?php echo htmlspecialchars($metaDescription, ENT_QUOTES, 'UTF-8'); ?>">
<?php endif; ?>
<meta property="og:url" content="<?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8'); ?>">
<meta property="og:image" content="<?php echo htmlspecialchars($ogImage, ENT_QUOTES, 'UTF-8'); ?>">
<meta property="og:type" content="<?php echo isset($isArticle) && $isArticle ? 'article' : 'website'; ?>">
<?php if (!empty($alternateEnUrl) || !empty($alternateFrUrl) || !empty($alternateDeUrl)): ?>
    <?php if (!empty($alternateEnUrl)): ?><link rel="alternate" hreflang="en" href="<?php echo htmlspecialchars($alternateEnUrl, ENT_QUOTES, 'UTF-8'); ?>" /><?php endif; ?>
    <?php if (!empty($alternateFrUrl)): ?><link rel="alternate" hreflang="fr" href="<?php echo htmlspecialchars($alternateFrUrl, ENT_QUOTES, 'UTF-8'); ?>" /><?php endif; ?>
    <?php if (!empty($alternateDeUrl)): ?><link rel="alternate" hreflang="de" href="<?php echo htmlspecialchars($alternateDeUrl, ENT_QUOTES, 'UTF-8'); ?>" /><?php endif; ?>
    <?php if (!empty($alternateEnUrl)): ?><link rel="alternate" hreflang="x-default" href="<?php echo htmlspecialchars($alternateEnUrl, ENT_QUOTES, 'UTF-8'); ?>" /><?php endif; ?>
<?php endif; ?>

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?php echo htmlspecialchars($pageTitle ?: ($metaTitle ?? ''), ENT_QUOTES, 'UTF-8'); ?>">
<?php if (!empty($metaDescription)): ?>
<meta name="twitter:description" content="<?php echo htmlspecialchars($metaDescription, ENT_QUOTES, 'UTF-8'); ?>">
<?php endif; ?>
<meta name="twitter:image" content="<?php echo htmlspecialchars($ogImage, ENT_QUOTES, 'UTF-8'); ?>">

<!-- Basic JSON-LD structured data for WebPage/Article when available -->
<script type="application/ld+json">
<?php
$ld = [
    "@context" => "https://schema.org",
    "@type" => isset($isArticle) && $isArticle ? "Article" : "WebPage",
    "name" => $pageTitle ?: ($metaTitle ?? ''),
    "description" => $metaDescription ?: '',
    "url" => $canonicalUrl,
    "publisher" => [
        "@type" => "Organization",
        "name" => "My Drop In The Oceans",
        "logo" => [
            "@type" => "ImageObject",
            "url" => "https://mydropintheoceans.org/images/logo/mydropintheoceans_logo_large_no_drop.png"
        ]
    ]
];
echo json_encode($ld, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
?>
</script>
