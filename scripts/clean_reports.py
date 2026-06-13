#!/usr/bin/env python3
import csv
import shutil
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

FILES = [
    ROOT / 'prioritized_missing_map.csv',
    ROOT / 'filesystem_link_report.csv',
    ROOT / 'filesystem_link_report_updated.csv',
]


def backup(p: Path):
    if p.exists():
        bak = p.with_suffix(p.suffix + f'.bak.{int(time.time())}')
        shutil.copy2(p, bak)
        print(f'backed up {p.name} -> {bak.name}')


def clean_filesystem_csv(p: Path):
    # remove rows whose source_file (first column) starts with ''
    tmp = p.with_suffix('.clean.tmp')
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
            first = row[0].strip()
            if first.startswith(''):
                continue
            writer.writerow(row)
    tmp.replace(p)
    print(f'cleaned {p.name} (removed  source rows)')


def clean_prioritized_map(p: Path):
    tmp = p.with_suffix('.clean.tmp')
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
            # expected: missing_target,count,source_files
            if len(row) < 3:
                writer.writerow(row)
                continue
            sources = row[2]
            parts = [s for s in sources.split(';') if s and not s.strip().startswith('')]
            row[2] = ';'.join(parts)
            writer.writerow(row)
    tmp.replace(p)
    print(f'cleaned {p.name} (removed  items from source lists)')


def main():
    for p in FILES:
        if not p.exists():
            print(f'skipping missing file {p.name}')
            continue
        backup(p)
        if p.name.startswith('filesystem_link_report'):
            clean_filesystem_csv(p)
        elif p.name == 'prioritized_missing_map.csv':
            clean_prioritized_map(p)


if __name__ == '__main__':
    main()
