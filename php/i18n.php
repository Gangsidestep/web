<?php

function get_supported_locales(): array
{
    return ['en', 'fr'];
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
    return $locale === 'fr' ? 'en' : 'fr';
}
