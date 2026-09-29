from playwright.sync_api import sync_playwright
from pathlib import Path

out = Path(r"d:/13U/.tmp-qa")
out.mkdir(exist_ok=True)

with sync_playwright() as p:
    b = p.chromium.launch(headless=True, channel="chrome")
    page = b.new_page(viewport={"width": 1440, "height": 900})
    page.goto("http://localhost:3000/", wait_until="domcontentloaded")
    page.wait_for_timeout(2500)
    for name, sel in [
        ("belief", '[aria-label*="Belief"]'),
        ("caps", '[aria-label="Capabilities"]'),
        ("creed", '[aria-label="Studio Creed"]'),
        ("proof", '[aria-label="Work"]'),
        ("method", '[aria-label="Method"]'),
        ("explore", '[aria-label="Explore"]'),
        ("close", "#close"),
    ]:
        el = page.locator(sel).first
        try:
            el.scroll_into_view_if_needed(timeout=8000)
            page.wait_for_timeout(1100)
            page.screenshot(path=str(out / f"post-{name}.png"))
            print(name, "ok")
        except Exception as e:
            print(name, "fail", e)
    b.close()
