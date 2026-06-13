<?php
// Detect current page based on REQUEST_URI
$current_page = $_SERVER['REQUEST_URI'];
$is_home = preg_match('#^/(?:$|index\.php$|fr/?$|de/?$)#', $current_page) === 1;
$is_theory = (strpos($current_page, '/theory-of-change') !== false);
$is_contact = (strpos($current_page, '/contact') !== false);
$is_privacy = (strpos($current_page, '/privacy') !== false);
// Blog detection
$is_blog = (strpos($current_page, '/blog') !== false);
// FAQ detection
$is_faq = (strpos($current_page, '/faq') !== false);
// Detect if current page is the blog index (ends with /blog or /blog/)
$is_blog_index = preg_match('#/blog/?$#', $current_page) === 1;

// Set active colors
$home_color = $is_home ? '#d0aea1' : '#fff';
$theory_color = $is_theory ? '#d0aea1' : '#fff';
$contact_color = $is_contact ? '#d0aea1' : '#fff';
$privacy_color = $is_privacy ? '#d0aea1' : '#fff';
$blog_color = $is_blog ? '#d0aea1' : '#fff';
$faq_color = $is_faq ? '#d0aea1' : '#fff';

// Determine if we should use onclick or href for home link
$locale_for_links = function_exists('get_current_locale') ? get_current_locale() : 'en';
$home_url = function_exists('localized_path') ? localized_path('/', $locale_for_links) : '/';
$theory_url = function_exists('localized_path') ? localized_path('/theory-of-change/', $locale_for_links) : '/theory-of-change/';
$faq_url = function_exists('localized_path') ? localized_path('/faq/', $locale_for_links) : '/faq/';
$contact_url = function_exists('localized_path') ? localized_path('/contact/', $locale_for_links) : '/contact/';
$blog_url = function_exists('localized_path') ? localized_path('/blog/', $locale_for_links) : '/blog/';
$privacy_url = function_exists('localized_path') ? localized_path('/privacy/', $locale_for_links) : '/privacy/';

$home_link = $is_home ? 'onclick="show_landing_page()"' : 'href="' . htmlspecialchars($home_url, ENT_QUOTES, 'UTF-8') . '"';
$theory_link = $is_theory ? '' : 'href="' . htmlspecialchars($theory_url, ENT_QUOTES, 'UTF-8') . '"';
$contact_link = $is_contact ? '' : 'href="' . htmlspecialchars($contact_url, ENT_QUOTES, 'UTF-8') . '"';
$privacy_link = $is_privacy ? '' : 'href="' . htmlspecialchars($privacy_url, ENT_QUOTES, 'UTF-8') . '"';
// Determine blog link behavior:
// - If URL ends with /blog or /blog/ -> provide href (link to blog index)
// - If URL contains /blog but is not the index (i.e. a blog post) -> leave blank (no href)
// - For all other pages -> provide href to blog
if ($is_blog_index) {
	$blog_link = 'href="' . htmlspecialchars($blog_url, ENT_QUOTES, 'UTF-8') . '"';
} elseif ($is_blog) {
	// inside a blog post (e.g. /blog/some-post) - no href attribute
	$blog_link = '';
} else {
	$blog_link = 'href="' . htmlspecialchars($blog_url, ENT_QUOTES, 'UTF-8') . '"';
}
?>
<div id="bottom_page_span" class="bottom_page_span">
	<div style="width:90%;max-width:600px;margin-left:auto;margin-right:auto;margin-top:20px;margin-bottom:60px;">
		<span class="link" id="home_page" <?php echo $home_link; ?> style="color:<?php echo $home_color; ?>"><?php echo $is_home ? 'Home' : '<a href="' . htmlspecialchars($home_url, ENT_QUOTES, 'UTF-8') . '">Home</a>'; ?></span> | 
		<span class="link" id="theory_link" <?php echo $theory_link; ?> style="color:<?php echo $theory_color; ?>"><?php echo $is_theory ? 'Theory of Change' : '<a href="' . htmlspecialchars($theory_url, ENT_QUOTES, 'UTF-8') . '">Theory of Change</a>'; ?></span> | 
		<span class="link" id="faq_link" <?php echo $is_faq ? '' : 'href="' . htmlspecialchars($faq_url, ENT_QUOTES, 'UTF-8') . '"'; ?> style="color:<?php echo $faq_color; ?>"><?php echo $is_faq ? 'FAQ' : '<a href="' . htmlspecialchars($faq_url, ENT_QUOTES, 'UTF-8') . '">FAQ</a>'; ?></span> | 
		<span class="link" id="contact_link" <?php echo $contact_link; ?> style="color:<?php echo $contact_color; ?>"><?php echo $is_contact ? 'Contact' : '<a href="' . htmlspecialchars($contact_url, ENT_QUOTES, 'UTF-8') . '">Contact</a>'; ?></span> | 
		<span class="link" id="blog_link" <?php echo $blog_link; ?> style="color:<?php echo $blog_color; ?>"><?php echo $is_blog_index ? 'Blog' : '<a href="' . htmlspecialchars($blog_url, ENT_QUOTES, 'UTF-8') . '">Blog</a>'; ?></span> | 
		<span class="link" id="privacy_link" <?php echo $privacy_link; ?> style="color:<?php echo $privacy_color; ?>"><?php echo $is_privacy ? 'Privacy' : '<a href="' . htmlspecialchars($privacy_url, ENT_QUOTES, 'UTF-8') . '">Privacy</a>'; ?></span>
		<p></p>
		<span class="copyright_span">© <?php echo date("Y"); ?> My Drop In The Oceans, All Rights Reserved</span>		
	</div>
</div>
