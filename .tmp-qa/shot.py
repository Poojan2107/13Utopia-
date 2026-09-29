from playwright.sync_api import sync_playwright
from pathlib import Path

out = Path(r"d:\13U\.tmp-qa")
out.mkdir(parents=True, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, channel="chrome")
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto("http://localhost:3000/", wait_until="domcontentloaded")
    page.wait_for_timeout(2500)
    page.screenshot(path=str(out / "home-hero.png"))

    for name, sel in [
        ("creed", '[aria-label="Studio Creed"]'),
        ("method", '[aria-label="Method"]'),
        ("explore", '[aria-label="Explore"]'),
        ("close", "#close"),
    ]:
        el = page.locator(sel).first
        el.scroll_into_view_if_needed()
        page.wait_for_timeout(1000)
        page.screenshot(path=str(out / f"{name}.png"))

    print("done")
    browser.close()
