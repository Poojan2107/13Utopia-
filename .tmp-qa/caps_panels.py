from playwright.sync_api import sync_playwright
from pathlib import Path

out = Path(r"d:/13U/.tmp-qa")

with sync_playwright() as p:
    b = p.chromium.launch(headless=True, channel="chrome")
    page = b.new_page(viewport={"width": 1440, "height": 900})
    page.goto("http://localhost:3000/", wait_until="domcontentloaded")
    page.wait_for_timeout(2500)

    # Jump to first capability panel by disabling smooth scroll behavior
    page.evaluate(
        """() => {
      document.documentElement.style.scrollBehavior = 'auto';
      const panels = document.querySelectorAll('[data-caps-panel]');
      if (panels[0]) {
        const y = panels[0].getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo(0, y);
      }
      return panels.length;
    }"""
    )
    page.wait_for_timeout(800)
    page.screenshot(path=str(out / "caps-create.png"))

    page.evaluate(
        """() => {
      const panels = document.querySelectorAll('[data-caps-panel]');
      if (panels[1]) {
        const y = panels[1].getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo(0, y);
      }
    }"""
    )
    page.wait_for_timeout(800)
    page.screenshot(path=str(out / "caps-build.png"))

    print("caps panels done")
    b.close()
