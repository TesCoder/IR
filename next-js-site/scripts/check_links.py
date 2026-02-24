import requests, bs4
from urllib.parse import urljoin

"""
Check all links in the website to ensure they are working.

Usage:
python check_links.py

Output:
- Prints all links that are not working
- Prints all links that are not in the start URL
- Prints all links that are not in the seen set
- Prints all links that are not in the q list
- Prints all links that are not in the seen set
"""

start = "http://localhost:3000/"
seen = set([start])
q = [start]
while q:
    url = q.pop()
    try:
        r = requests.get(url, timeout=10)
    except Exception as e:
        print("FAIL", url, e)
        continue
    if r.status_code >= 400:
        print("FAIL", url, r.status_code)
    soup = bs4.BeautifulSoup(r.text, "html.parser")
    for a in soup.find_all("a", href=True):
        link = urljoin(url, a["href"])
        if link.startswith(start) and link not in seen:
            seen.add(link)
            q.append(link)