#!/usr/bin/env python3
import re
import os
import csv
from urllib.parse import urlparse

root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
out = os.path.join(root, 'filesystem_link_report_updated.csv')

link_re = re.compile(r"(?:src|href)\s*=\s*[\"']([^\"']+)[\"']", re.I)

rows = []
for dirpath, dirs, files in os.walk(root):
    # skip .git and node_modules
    if '.git' in dirpath or 'node_modules' in dirpath:
        continue
    for fname in files:
        if not fname.lower().endswith(('.php','.html','.htm','.js','.css')):
            continue
        path = os.path.join(dirpath, fname)
        rel = os.path.relpath(path, root)
        try:
            with open(path, 'r', errors='ignore') as f:
                txt = f.read()
        except Exception as e:
            continue
        for m in link_re.finditer(txt):
            link = m.group(1).strip()
            # classify
            if link.startswith('http://') or link.startswith('https://'):
                ltype = 'external'
                parsed = urlparse(link)
                resolved = parsed.path.lstrip('/')
                exists = 'n/a'
                # check local file if same host
            elif link.startswith('//'):
                ltype = 'protocol_relative'
                resolved = link.lstrip('/').lstrip('/')
                exists = 'no'
            elif link.startswith('/'):
                ltype = 'internal_root'
                resolved = link.lstrip('/')
                exists = 'yes' if os.path.exists(os.path.join(root, resolved)) else 'no'
            else:
                ltype = 'internal_rel'
                resolved = os.path.normpath(os.path.join(os.path.dirname(rel), link)).replace('\\','/')
                # normalize
                exists = 'yes' if os.path.exists(os.path.join(root, resolved)) else 'no'
            rows.append((rel, link, ltype, resolved, exists, ''))

# write CSV
with open(out, 'w', newline='') as csvfile:
    w = csv.writer(csvfile)
    w.writerow(['source_file','link','link_type','resolved_path','exists','note'])
    for r in rows:
        w.writerow(r)

print('Wrote', out)
