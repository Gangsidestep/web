#!/usr/bin/env python3
import urllib.request, urllib.error
import urllib.parse
import sys
import re
from http.client import HTTPResponse

OUT='inspection_output.txt'

def fetch_robots(base):
    try:
        with urllib.request.urlopen(base + '/robots.txt') as r:
            txt = r.read().decode('utf-8', errors='ignore')
            lines = [l.strip() for l in txt.splitlines()]
            dis = [l.split(':',1)[1].strip() for l in lines if l.lower().startswith('disallow:')]
            return txt, dis
    except Exception as e:
        return '', []

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, hdrs, newurl):
        raise urllib.error.HTTPError(req.full_url, code, msg, hdrs, fp)


def head_no_redirect(url):
    req = urllib.request.Request(url, method='HEAD')
    opener = urllib.request.build_opener(NoRedirect)
    try:
        with opener.open(req, timeout=10) as resp:
            return resp.status, dict(resp.getheaders())
    except urllib.error.HTTPError as e:
        return e.code, dict(e.headers)
    except Exception as e:
        return None, {'error': str(e)}


def final_url_and_status(url):
    req = urllib.request.Request(url, method='GET')
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            final = resp.geturl()
            status = resp.getcode()
            body = resp.read().decode('utf-8', errors='ignore')
            return final, status, body
    except Exception as e:
        return None, None, ''


def extract_canonical(html):
    m = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]*href=["\']([^"\']+)["\']', html, re.I)
    return m.group(1) if m else ''


def extract_meta_robots(html):
    m = re.search(r'<meta[^>]+name=["\']robots["\'][^>]*content=["\']([^"\']+)["\']', html, re.I)
    return m.group(1) if m else ''


def path_from_url(url):
    p = urllib.parse.urlparse(url).path
    if not p:
        p='/'
    return p

if __name__=='__main__':
    base='https://mydropintheoceans.org'
    robots_txt, disallows = fetch_robots(base)
    with open(OUT,'w') as out:
        out.write('GSC URL Inspection - ' + __import__('datetime').datetime.utcnow().isoformat() + '\n\n')
        out.write('robots.txt:\n')
        out.write(robots_txt + '\n')
        for url in open('gsc_examples.txt'):
            url = url.strip()
            if not url: continue
            out.write('=== ' + url + ' ===\n')
            st, headers = head_no_redirect(url)
            out.write('-- initial response (no redirects) --\n')
            out.write(f'status: {st}\n')
            for k,v in headers.items():
                out.write(f'{k}: {v}\n')
            out.write('-- final after redirects (follow) --\n')
            final, status, body = final_url_and_status(url)
            out.write(f'final_status: {status} final_url: {final}\n')
            can = extract_canonical(body)
            meta = extract_meta_robots(body)
            out.write('-- rel=canonical (if any) --\n')
            out.write('canonical_href: ' + (can or '<none>') + '\n')
            out.write('-- meta robots (if any) --\n')
            out.write('meta_robots: ' + (meta or '<none>') + '\n')
            # robots check
            p = path_from_url(url)
            out.write('-- robots.txt disallow check --\n')
            for d in disallows:
                if not d: continue
                if p.startswith(d):
                    out.write('DISALLOWS: ' + d + '\n')
            out.write('\n')
    print('Wrote', OUT)
