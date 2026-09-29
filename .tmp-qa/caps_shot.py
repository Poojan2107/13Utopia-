from playwright.sync_api import sync_playwright
from pathlib import Path

out = Path(r"d:\13U\.tmp-qa")
with sync_playwright() as p:
    b = p.chromium.launch(headless=True, channel="chrome")
    page = b.new_page(viewport={"width": 1440, "height": 900})
    page.goto("http://localhost:3000/", wait_until="domcontentloaded")
    page.wait_for_timeout(2000)
    page.evaluate(
        """() => {
      const el = document.querySelector('[aria-label="Capabilities"]');
      if (!el) return 'missing';
      const y = el.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo(0, y);
      return String(Math.round(y));
    }"""
    )
    page.wait_for_timeout(1200)
    page.screenshot(path=str(out / "caps-top.png"))
    print("ok")
    b.close()
