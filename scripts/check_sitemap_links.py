import requests
import xml.etree.ElementTree as ET
from urllib.parse import urljoin, urlparse

SITEMAP_URL = "https://mydropintheoceans.org/sitemap.xml"  # Change to your live sitemap URL
TIMEOUT = 10


def get_sitemap_urls(sitemap_url):
    resp = requests.get(sitemap_url, timeout=TIMEOUT)
    resp.raise_for_status()
    root = ET.fromstring(resp.content)
    ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    urls = [url.text for url in root.findall('.//sm:url/sm:loc', ns)]
    return urls


def check_url(url):
    try:
        resp = requests.head(url, allow_redirects=True, timeout=TIMEOUT)
        status = resp.status_code
        final_url = resp.url
        return status, final_url
    except Exception as e:
        return None, str(e)


def main():
    print("Fetching URLs from sitemap...")
    urls = get_sitemap_urls(SITEMAP_URL)
    print(f"Found {len(urls)} URLs. Checking...")
    broken = []
    redirected = []
    for url in urls:
        status, final = check_url(url)
        if status is None:
            print(f"ERROR: {url} -> {final}")
            broken.append((url, final))
        elif status == 404:
            print(f"404: {url}")
            broken.append((url, '404'))
        elif 300 <= status < 400:
            print(f"REDIRECT: {url} -> {final}")
            redirected.append((url, final))
        elif status >= 400:
            print(f"ERROR {status}: {url}")
            broken.append((url, str(status)))
    print("\nSummary:")
    print(f"Broken URLs: {len(broken)}")
    for url, reason in broken:
        print(f"  {url} -> {reason}")
    print(f"Redirected URLs: {len(redirected)}")
    for url, target in redirected:
        print(f"  {url} -> {target}")

if __name__ == "__main__":
    main()
