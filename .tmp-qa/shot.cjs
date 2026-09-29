const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const out = "d:/13U/.tmp-qa";
fs.mkdirSync(out, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.setDefaultTimeout(60000);
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(out, "home-hero.png") });

  for (const [name, sel] of [
    ["creed", '[aria-label="Studio Creed"]'],
    ["method", '[aria-label="Method"]'],
    ["explore", '[aria-label="Explore"]'],
    ["close", "#close"],
  ]) {
    const el = page.locator(sel).first();
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(900);
    await page.screenshot({ path: path.join(out, `${name}.png`) });
  }

  console.log("done");
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
