<?php
// Detect current page based on REQUEST_URI
$current_page = $_SERVER['REQUEST_URI'];
$is_home = ($current_page === '/' || $current_page === '/index.php');
$is_theory = (strpos($current_page, '/theory-of-change') !== false);
$is_contact = (strpos($current_page, '/contact') !== false);
$is_privacy = (strpos($current_page, '/privacy') !== false);
// Blog detection
$is_blog = (strpos($current_page, '/blog') !== false);
// Detect if current page is the blog index (ends with /blog or /blog/)
$is_blog_index = preg_match('#/blog/?$#', $current_page) === 1;

// Set active colors
$home_color = $is_home ? '#d0aea1' : '#fff';
$theory_color = $is_theory ? '#d0aea1' : '#fff';
$contact_color = $is_contact ? '#d0aea1' : '#fff';
$privacy_color = $is_privacy ? '#d0aea1' : '#fff';
$blog_color = $is_blog ? '#d0aea1' : '#fff';

// Determine if we should use onclick or href for home link
$home_link = $is_home ? 'onclick="show_landing_page()"' : 'href="/"';
$theory_link = $is_theory ? '' : 'href="/theory-of-change"';
$contact_link = $is_contact ? '' : 'href="/contact"';
$privacy_link = $is_privacy ? '' : 'href="/privacy"';
// Determine blog link behavior:
// - If URL ends with /blog or /blog/ -> provide href (link to blog index)
// - If URL contains /blog but is not the index (i.e. a blog post) -> leave blank (no href)
// - For all other pages -> provide href to blog
if ($is_blog_index) {
	$blog_link = 'href="/blog"';
} elseif ($is_blog) {
	// inside a blog post (e.g. /blog/some-post) - no href attribute
	$blog_link = '';
} else {
	$blog_link = 'href="/blog"';
}
?>
<div id="bottom_page_span" class="bottom_page_span">
	<div style="width:90%;max-width:600px;margin-left:auto;margin-right:auto;margin-top:20px;margin-bottom:60px;">
		<span class="link" id="home_page" <?php echo $home_link; ?> style="color:<?php echo $home_color; ?>"><?php echo $is_home ? 'Home' : '<a href="/">Home</a>'; ?></span> | 
		<span class="link" id="theory_link" <?php echo $theory_link; ?> style="color:<?php echo $theory_color; ?>"><?php echo $is_theory ? 'Theory of Change' : '<a href="/theory-of-change">Theory of Change</a>'; ?></span> | 
		<span class="link" id="contact_link" <?php echo $contact_link; ?> style="color:<?php echo $contact_color; ?>"><?php echo $is_contact ? 'Contact' : '<a href="/contact">Contact</a>'; ?></span> | 
		<span class="link" id="blog_link" <?php echo $blog_link; ?> style="color:<?php echo $blog_color; ?>"><?php echo $is_blog_index ? 'Blog' : '<a href="/blog">Blog</a>'; ?></span> | 
		<span class="link" id="privacy_link" <?php echo $privacy_link; ?> style="color:<?php echo $privacy_color; ?>"><?php echo $is_privacy ? 'Privacy' : '<a href="/privacy">Privacy</a>'; ?></span>
		<p></p>
		<span class="copyright_span">© <?php echo date("Y"); ?> My Drop In The Oceans, All Rights Reserved</span>		
	</div>
</div>
