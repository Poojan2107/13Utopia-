from playwright.sync_api import sync_playwright
from pathlib import Path

out = Path(r"d:\13U\.tmp-qa")
out.mkdir(parents=True, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, channel="chrome")
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto("http://localhost:3000/", wait_until="domcontentloaded")
    page.wait_for_timeout(2000)

    # Creed intro (top of section)
    creed = page.locator('[aria-label="Studio Creed"]').first
    creed.scroll_into_view_if_needed()
    page.wait_for_timeout(700)
    page.screenshot(path=str(out / "creed-intro.png"))

    # First creed beat mid-pin
    page.mouse.wheel(0, 900)
    page.wait_for_timeout(900)
    page.screenshot(path=str(out / "creed-beat.png"))

    # Method head
    method = page.locator('[aria-label="Method"]').first
    method.scroll_into_view_if_needed()
    page.wait_for_timeout(900)
    page.screenshot(path=str(out / "method-head.png"))

    # Explore head
    explore = page.locator('[aria-label="Explore"]').first
    explore.scroll_into_view_if_needed()
    page.wait_for_timeout(900)
    page.screenshot(path=str(out / "explore-head.png"))

    # Close after settle
    close = page.locator("#close").first
    close.scroll_into_view_if_needed()
    page.wait_for_timeout(2200)
    page.screenshot(path=str(out / "close-settled.png"))

    print("done")
    browser.close()
