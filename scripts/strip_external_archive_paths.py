#!/usr/bin/env python3
import csv
import shutil
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

FILES = [
    ROOT / 'filesystem_link_report.csv',
    ROOT / 'filesystem_link_report_updated.csv',
]


def backup(p: Path):
    if p.exists():
        bak = p.with_suffix(p.suffix + f'.bak.{int(time.time())}')
        shutil.copy2(p, bak)
        print(f'backed up {p.name} -> {bak.name}')


def strip_archive(p: Path):
    tmp = p.with_suffix('.strip.tmp')
    with p.open(newline='') as fh_in, tmp.open('w', newline='') as fh_out:
        reader = csv.reader(fh_in)
        writer = csv.writer(fh_out)
        try:
            header = next(reader)
        except StopIteration:
            return
        writer.writerow(header)
        for row in reader:
            if not row:
                continue
            # expected columns: source_file,link,link_type,resolved_path,exists,note
            if len(row) < 4:
                writer.writerow(row)
                continue
            link = row[1].strip()
            resolved = row[3].strip()
            if (link.startswith('http://') or link.startswith('https://')) and resolved.startswith(''):
                row[3] = ''
                # append note
                if len(row) >= 6 and row[5].strip():
                    row[5] = row[5] + ' | external_archive_cleared'
                elif len(row) >= 6:
                    row[5] = 'external_archive_cleared'
                else:
                    # ensure note column exists
                    while len(row) < 6:
                        row.append('')
                    row[5] = 'external_archive_cleared'
            writer.writerow(row)
    tmp.replace(p)
    print(f'stripped external archive resolved_path in {p.name}')


def main():
    for p in FILES:
        if not p.exists():
            print(f'skipping missing file {p.name}')
            continue
        backup(p)
        strip_archive(p)


if __name__ == '__main__':
    main()
