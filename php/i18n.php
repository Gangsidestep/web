<?php

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
 * English remains the default unless the user has explicitly selected
 * another supported locale (stored in cookie).
 */
function get_preferred_locale(): string
{
    $supported = get_supported_locales();

    if (!empty($_COOKIE['user_locale']) && in_array($_COOKIE['user_locale'], $supported, true)) {
        return $_COOKIE['user_locale'];
    }

    return 'en';
}

function get_current_locale(): string
{
    $defaultLocale = 'en';
    $supportedLocales = get_supported_locales();

    if (!empty($_SERVER['REDIRECT_APP_LOCALE']) && in_array($_SERVER['REDIRECT_APP_LOCALE'], $supportedLocales, true)) {
        return $_SERVER['REDIRECT_APP_LOCALE'];
    }

    $requestUri = $_SERVER['REQUEST_URI'] ?? '/';
    $path = parse_url($requestUri, PHP_URL_PATH) ?: '/';
    $segments = array_values(array_filter(explode('/', trim($path, '/'))));

    if (!empty($segments[0]) && in_array($segments[0], $supportedLocales, true)) {
        return $segments[0];
    }

    return $defaultLocale;
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
 *   read the preferred locale from cookie and redirect only when the user
 *   has explicitly chosen a non-English locale.
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

    if ($explicitLocale === null) {
        // No locale in URL — redirect to preferred locale (cookie) if not English
        $preferred = get_preferred_locale();
        if ($preferred !== 'en') {
            $host        = $_SERVER['HTTP_HOST'] ?? 'mydropintheoceans.org';
            $redirectUrl = 'https://' . $host . '/' . $preferred . $path;
            if ($queryString !== '') {
                $redirectUrl .= '?' . $queryString;
            }
            header('Location: ' . $redirectUrl, true, 302);
            exit;
        }
    }
})();

function localized_path(string $path, ?string $locale = null): string
{
    $activeLocale = $locale ?? get_current_locale();
    $cleanPath = '/' . ltrim($path, '/');

    foreach (get_supported_locales() as $supportedLocale) {
        $prefix = '/' . $supportedLocale . '/';
        if (strpos($cleanPath, $prefix) === 0) {
            return $cleanPath;
        }

        if ($cleanPath === '/' . $supportedLocale) {
            return $cleanPath;
        }
    }

    if ($cleanPath === '/') {
        return '/' . $activeLocale . '/';
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
