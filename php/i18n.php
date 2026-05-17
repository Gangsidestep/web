<?php

// Language auto-redirects remain disabled to avoid phantom URL issues,
// but localized URLs (/fr/... and /de/...) are fully supported.

function get_supported_locales(): array
{
    return ['en', 'fr', 'de'];
}

/**
 * Parse the browser's Accept-Language header and return the best matching
 * supported locale, falling back to 'en'.
 */
function get_browser_locale(): string
{
    $supported = get_supported_locales();
    $acceptLanguage = $_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? '';

    if (empty($acceptLanguage)) {
        return 'en';
    }

    $langs = [];
    foreach (explode(',', $acceptLanguage) as $part) {
        $part = trim($part);
        if (preg_match('/^([a-zA-Z]{2,3})(?:-[a-zA-Z0-9]+)*(?:;q=([\d.]+))?$/', $part, $m)) {
            $lang = strtolower($m[1]);
            $q    = isset($m[2]) ? (float) $m[2] : 1.0;
            // Keep only the highest q-value per language tag
            if (!isset($langs[$lang]) || $langs[$lang] < $q) {
                $langs[$lang] = $q;
            }
        }
    }

    arsort($langs);

    foreach (array_keys($langs) as $lang) {
        if (in_array($lang, $supported, true)) {
            return $lang;
        }
    }

    return 'en';
}

/**
 * Return the user's preferred locale.
 *
 * Priority:
 * 1) Explicit locale cookie set by the language switcher.
 * 2) Browser Accept-Language best match.
 * 3) English fallback.
 */
function get_preferred_locale(): string
{
    $supported = get_supported_locales();

    if (!empty($_COOKIE['user_locale']) && in_array($_COOKIE['user_locale'], $supported, true)) {
        return $_COOKIE['user_locale'];
    }

    return get_browser_locale();
}

function get_current_locale(): string
{
    $supported = get_supported_locales();
    $path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
    $path = '/' . ltrim($path, '/');

    // 1) Explicit locale from URL prefix (/fr/... or /de/...)
    foreach ($supported as $loc) {
        if ($path === '/' . $loc || strpos($path, '/' . $loc . '/') === 0) {
            return $loc;
        }
    }

    // 2) Explicit locale from rewrite environment (set in .htaccess)
    if (!empty($_SERVER['REDIRECT_APP_LOCALE']) && in_array($_SERVER['REDIRECT_APP_LOCALE'], $supported, true)) {
        return $_SERVER['REDIRECT_APP_LOCALE'];
    }

    // 3) User preference (cookie or browser)
    $preferred = get_preferred_locale();
    if (in_array($preferred, $supported, true)) {
        return $preferred;
    }

    return 'en';
}

/**
 * Called automatically on include.
 *
 * - If the URL already carries an explicit locale prefix (/fr/…, /de/…) or
 *   .htaccess injected REDIRECT_APP_LOCALE, serve that locale directly.
 *   Do NOT auto-write the locale cookie here; cookie persistence is handled
 *   only by the manual language switcher.
 *
 * - If there is NO locale prefix (bare /blog/, /theory-of-change/, …),
 *   read the preferred locale (cookie first, then browser language) and
 *   redirect only when it resolves to a non-English locale.
 *   English is the default, so no redirect for 'en'.
 */
(function () {
    if (headers_sent()) {
        return;
    }
    if (strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
        return;
    }

    $supported      = get_supported_locales();
    $requestUri     = $_SERVER['REQUEST_URI'] ?? '/';
    $path           = parse_url($requestUri, PHP_URL_PATH) ?: '/';
    $path           = '/' . ltrim($path, '/');
    $queryString    = $_SERVER['QUERY_STRING'] ?? '';

    // Detect explicit locale from .htaccess env var
    $envLocale = !empty($_SERVER['REDIRECT_APP_LOCALE'])
              && in_array($_SERVER['REDIRECT_APP_LOCALE'], $supported, true)
              ? $_SERVER['REDIRECT_APP_LOCALE']
              : null;

    // Detect explicit locale from URL path prefix
    $urlLocale = null;
    foreach ($supported as $loc) {
        if ($path === '/' . $loc || strpos($path, '/' . $loc . '/') === 0) {
            $urlLocale = $loc;
            break;
        }
    }

    $explicitLocale = $urlLocale ?? $envLocale;

    // Intentionally no auto-redirect logic: keep canonical URL behavior stable
    // and avoid generating phantom locale URLs from user-agent preference.
})();

function localized_path(string $path, ?string $locale = null): string
{
    $activeLocale = $locale ?? get_current_locale();
    $cleanPath = '/' . ltrim($path, '/');

    // English is canonical without a locale prefix.
    if ($activeLocale === 'en') {
        if ($cleanPath === '/en') {
            return '/';
        }
        if (strpos($cleanPath, '/en/') === 0) {
            return substr($cleanPath, 3) ?: '/';
        }
    }

    foreach (get_supported_locales() as $supportedLocale) {
        $prefix = '/' . $supportedLocale . '/';
        if (strpos($cleanPath, $prefix) === 0) {
            if ($supportedLocale === 'en') {
                return substr($cleanPath, 3) ?: '/';
            }
            return $cleanPath;
        }

        if ($cleanPath === '/' . $supportedLocale) {
            if ($supportedLocale === 'en') {
                return '/';
            }
            return $cleanPath;
        }
    }

    if ($cleanPath === '/') {
        if ($activeLocale === 'en') {
            return '/';
        }
        return '/' . $activeLocale . '/';
    }

    if ($activeLocale === 'en') {
        return $cleanPath;
    }

    return '/' . $activeLocale . $cleanPath;
}

function localized_url(string $path, ?string $locale = null): string
{
    $host = $_SERVER['HTTP_HOST'] ?? 'mydropintheoceans.org';
    return 'https://' . $host . localized_path($path, $locale);
}

function get_alternate_locale(string $locale): string
{
    if ($locale === 'fr') {
        return 'en';
    }

    if ($locale === 'de') {
        return 'en';
    }

    return 'fr';
}
