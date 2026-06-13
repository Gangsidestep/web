#!/usr/bin/env python3
import csv
from collections import Counter
import os
root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
csvp = os.path.join(root, 'filesystem_link_report_updated.csv')
out = os.path.join(root, 'missing_real_summary_updated.txt')

c = Counter()
rows = []
with open(csvp, newline='') as f:
    r = csv.DictReader(f)
    for row in r:
        if row['exists'].strip().lower() in ('no',''):
            link = row['resolved_path'].strip() or row['link'].strip()
            # simple clean up
            link = link.replace('\"','"').replace("\'","'")
            c[link]+=1
            rows.append(link)

with open(out,'w') as f:
    f.write(f"Distinct missing (cleaned): {len(c)}\n\nTop 200 missing targets:\n")
    for item,ct in c.most_common(200):
        f.write(f"  {ct:3d}  {item}\n")

print('Wrote', out)
