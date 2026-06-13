#!/usr/bin/env python3
import shutil
import time
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
EXCLUDE_DIRS = {'.git', '.venv', 'node_modules', '.cache'}
MAX_BYTES = 5 * 1024 * 1024


def is_text_file(p: Path):
    try:
        data = p.open('rb').read(1024)
    except Exception:
        return False
    if b'\x00' in data:
        return False
    return True


def backup(p: Path):
    bak = p.with_name(p.name + f'.bak.{int(time.time())}')
    shutil.copy2(p, bak)
    return bak


def purge_file(p: Path):
    try:
        st = p.stat()
    except Exception:
        return False
    if st.st_size > MAX_BYTES:
        return False
    if not is_text_file(p):
        return False
    s = p.read_text(errors='ignore')
    if '' not in s:
        return False
    bak = backup(p)
    s2 = s.replace('', '')
    p.write_text(s2)
    print(f'purged {p.relative_to(ROOT)} (backup: {bak.name})')
    return True


def main():
    changed = 0
    for root, dirs, files in __import__('os').walk(ROOT):
        # filter dirs
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for fname in files:
            p = Path(root) / fname
            try:
                rel = p.relative_to(ROOT)
            except Exception:
                rel = p
            if purge_file(p):
                changed += 1
    print(f'Completed. Files changed: {changed}')


if __name__ == '__main__':
    main()
