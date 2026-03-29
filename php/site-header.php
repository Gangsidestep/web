<?php
if (!function_exists('get_current_locale')) {
    include_once __DIR__ . '/i18n.php';
}

$headerLocale = isset($locale) ? $locale : get_current_locale();
$supportedLocales = get_supported_locales();

$requestUri = $_SERVER['REQUEST_URI'] ?? '/';
$requestPath = parse_url($requestUri, PHP_URL_PATH) ?: '/';
$requestPath = '/' . ltrim($requestPath, '/');

foreach ($supportedLocales as $supportedLocale) {
    $prefix = '/' . $supportedLocale;
    if ($requestPath === $prefix) {
        $requestPath = '/';
        break;
    }

    if (strpos($requestPath, $prefix . '/') === 0) {
        $requestPath = substr($requestPath, strlen($prefix));
        if ($requestPath === '') {
            $requestPath = '/';
        }
        break;
    }
}

$headerLanguageOptions = [];
foreach ($supportedLocales as $supportedLocale) {
    $headerLanguageOptions[$supportedLocale] = localized_url($requestPath, $supportedLocale);
}

$languageLabel = $headerLocale === 'fr'
    ? 'Langue'
    : ($headerLocale === 'de' ? 'Sprache' : 'Language');
?>
<style>
@media (max-width: 560px) {
    .site-header-outer { height: 84px !important; }
    .header-logo-inner { margin-top: 40px !important; }
}
</style>
<div class="site-header-outer" style="height:60px;background-color: white;width:100%;max-width:1000px; color: #fff!important;
    font-size: 18px!important;
    padding-top: 10px!important;
    padding-bottom: 10px!important;
    box-shadow: 0 0 20px 8px rgba(60,60,60,.06)!important;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;position: fixed;z-index: 2;border-bottom: #8e807687;
    border-bottom-color: #8e807687;
    border-bottom-style: inset;
    border-bottom-width: thin;left:0;right:0;margin:0 auto;">
    <div class="header-logo-inner" style="width: 80%;
    background-image: url(/images/logo/mydropintheoceans_logo_large_no_drop.png);
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    background-position: center;
    margin-top: 13px;"></div>

    <div style="position:absolute; right:14px; top:16px; display:flex; align-items:center; gap:6px;">
      <span aria-hidden="true" style="font-size:18px; line-height:1; color:#2a5d84;">🌐</span>
      <label for="language-switcher" style="position:absolute; left:-9999px;"><?php echo htmlspecialchars($languageLabel); ?></label>
      <select id="language-switcher" onchange="if(this.value){var m=this.value.match(/\/(en|fr|de)(\/|$)/);var lang=m?m[1]:'en';var d=new Date();d.setTime(d.getTime()+60*24*60*60*1000);document.cookie='user_locale='+lang+';expires='+d.toUTCString()+';path=/;SameSite=Lax';window.location.href=this.value;}" style="border:1px solid #c8ced4; border-radius:4px; background:#fff; color:#2a5d84; font-size:13px; font-weight:700; padding:4px 8px;">
        <?php foreach ($supportedLocales as $supportedLocale): ?>
          <option value="<?php echo htmlspecialchars($headerLanguageOptions[$supportedLocale]); ?>" <?php echo $headerLocale === $supportedLocale ? 'selected' : ''; ?>><?php echo strtoupper(htmlspecialchars($supportedLocale)); ?></option>
        <?php endforeach; ?>
      </select>
    </div>
</div>
