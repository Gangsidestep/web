import requests
import xml.etree.ElementTree as ET
import json
import datetime
import os

# IndexNow API endpoint
INDEXNOW_API = "https://api.indexnow.org/indexnow"

# Your IndexNow key and host
data = {
    "host": "mydropintheoceans.org",
    "key": "d96d8f20545846359840c69009683916",
    "urlList": []
}

# Parse sitemap.xml to get all URLs
sitemap_path = "sitemap.xml"  # Correct path for running from web directory
tree = ET.parse(sitemap_path)
root = tree.getroot()

# The namespace in the sitemap
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}

for url in root.findall('sm:url', ns):
    loc = url.find('sm:loc', ns)
    if loc is not None and loc.text:
        data["urlList"].append(loc.text.strip())

# Send POST request to IndexNow
response = requests.post(INDEXNOW_API, json=data)

# Print to stdout for immediate feedback
print(f"Status code: {response.status_code}")
print(f"Response: {response.text}")
print(f"Submitted {len(data['urlList'])} URLs to IndexNow.")

# Also append a local log entry for auditing
log_entry = {
    'timestamp': datetime.datetime.utcnow().isoformat() + 'Z',
    'submitted_count': len(data['urlList']),
    'status_code': response.status_code,
    'response_text': response.text,
    'urls': data['urlList']
}

log_path = os.path.join(os.path.dirname(__file__), 'indexnow_submit.log')
try:
    with open(log_path, 'a', encoding='utf-8') as f:
        f.write(json.dumps(log_entry, ensure_ascii=False) + "\n")
    print(f"Logged submission to {log_path}")
except Exception as e:
    print(f"Failed to write log: {e}")
