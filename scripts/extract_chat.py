#!/usr/bin/env python3
from bs4 import BeautifulSoup
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
HTML_PATH = ROOT.parent / 'chatgptPPE.html'
OUT_PATH = ROOT.parent / 'chatgptPPE_extracted_full.txt'

if not HTML_PATH.exists():
    print(f"ERROR: source file not found: {HTML_PATH}")
    sys.exit(1)

html = HTML_PATH.read_text(encoding='utf-8')
soup = BeautifulSoup(html, 'lxml')

# Find conversation sections in document order
sections = soup.find_all('section', attrs={"data-turn": True})

with OUT_PATH.open('w', encoding='utf-8') as f:
    if not sections:
        # fallback: try any element with data-message-author-role
        msg_nodes = soup.find_all(attrs={"data-message-author-role": True})
        for node in msg_nodes:
            role = node.get('data-message-author-role', 'unknown')
            # remove hidden labels if present
            for h in node.find_all('h4', class_='sr-only'):
                h.decompose()
            text = node.get_text(separator='\n', strip=True)
            lines = [l.strip() for l in text.splitlines() if l.strip()]
            text_clean = '\n'.join(lines)
            f.write(f"{role.capitalize()}:\n")
            f.write(text_clean + "\n\n")
            f.write("---\n\n")
    else:
        for sec in sections:
            role = sec.get('data-turn', 'unknown')
            # remove UI-only labels
            for h in sec.find_all('h4', class_='sr-only'):
                h.decompose()
            text = sec.get_text(separator='\n', strip=True)
            lines = [l.strip() for l in text.splitlines() if l.strip()]
            text_clean = '\n'.join(lines)
            f.write(f"{role.capitalize()}:\n")
            f.write(text_clean + "\n\n")
            f.write("---\n\n")

print(f"Wrote {OUT_PATH}")