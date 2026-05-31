import requests
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET

SITEMAP_URL = "https://mydropintheoceans.org/sitemap.xml"  # Change to your live sitemap URL
TIMEOUT = 10

SEO_ELEMENTS = [
    'title',
    'meta[name="description"]',
    'link[rel="canonical"]',
    'h1',
    'link[rel="alternate"]',
    'meta[name="robots"]',
    'meta[property^="og:"]',
    'meta[name^="twitter:"]',
    'script[type="application/ld+json"]',
]


def get_sitemap_urls(sitemap_url):
    resp = requests.get(sitemap_url, timeout=TIMEOUT)
    resp.raise_for_status()
    root = ET.fromstring(resp.content)
    ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    urls = [url.text for url in root.findall('.//sm:url/sm:loc', ns)]
    return urls


def check_seo_elements(url):
    try:
        resp = requests.get(url, timeout=TIMEOUT)
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, 'html.parser')
        results = {}
        # Title
        results['title'] = bool(soup.title and soup.title.string.strip())
        # Meta description
        desc = soup.find('meta', attrs={'name': 'description'})
        results['meta_description'] = bool(desc and desc.get('content', '').strip())
        # Canonical
        canonical = soup.find('link', rel='canonical')
        results['canonical'] = bool(canonical and canonical.get('href', '').strip())
        # H1
        h1 = soup.find('h1')
        results['h1'] = bool(h1 and h1.text.strip())
        # Alternate/hreflang
        alternates = soup.find_all('link', rel='alternate')
        results['alternate'] = bool(alternates)
        # Robots meta
        robots = soup.find('meta', attrs={'name': 'robots'})
        results['robots'] = bool(robots and robots.get('content', '').strip())
        # Open Graph
        og = soup.find('meta', attrs={'property': lambda v: v and v.startswith('og:')})
        results['open_graph'] = bool(og)
        # Twitter Card
        twitter = soup.find('meta', attrs={'name': lambda v: v and v.startswith('twitter:')})
        results['twitter_card'] = bool(twitter)
        # Structured Data
        ld_json = soup.find('script', type='application/ld+json')
        results['structured_data'] = bool(ld_json)
        return results
    except Exception as e:
        return {'error': str(e)}


def main():
    print("Fetching URLs from sitemap...")
    urls = get_sitemap_urls(SITEMAP_URL)
    print(f"Found {len(urls)} URLs. Checking SEO elements...")
    for url in urls:
        results = check_seo_elements(url)
        if 'error' in results:
            print(f"ERROR: {url} -> {results['error']}")
            continue
        missing = [k for k, v in results.items() if not v]
        if missing:
            print(f"{url}")
            print(f"  Missing: {', '.join(missing)}")
    print("\nCheck complete. URLs not listed have all key SEO elements.")

if __name__ == "__main__":
    main()
