import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "../public/images/steel/plate-field.jpg");
const out = path.join(__dirname, "../public/images/steel/plate-symmetric.jpg");

const w = 1920;
const h = 1080;
const bandH = Math.floor(h * 0.4);
const midH = h - bandH * 2;
const featherH = Math.floor(bandH * 0.5);

const srcMeta = await sharp(src).metadata();
const sw = srcMeta.width;
const sh = srcMeta.height;
const cropH = Math.floor(sh * 0.42);

const floorBuf = await sharp(src)
  .extract({ left: 0, top: sh - cropH, width: sw, height: cropH })
  .resize(w, bandH, { fit: "fill" })
  .modulate({ brightness: 1.08, saturation: 0.95 })
  .sharpen(1.0)
  .toBuffer();

const topBuf = await sharp(floorBuf).flip().toBuffer();
const botBuf = floorBuf;

const midGrain = await sharp(floorBuf)
  .resize(w, midH, { fit: "fill" })
  .modulate({ brightness: 0.18 })
  .blur(14)
  .toBuffer();

const featherSvgBot = Buffer.from(`<svg width="${w}" height="${featherH}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000" stop-opacity="0"/>
      <stop offset="55%" stop-color="#000" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.95"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
</svg>`);

const featherSvgTop = Buffer.from(`<svg width="${w}" height="${featherH}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000" stop-opacity="0.95"/>
      <stop offset="45%" stop-color="#000" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
</svg>`);

const warmBot = Buffer.from(`<svg width="${w}" height="${bandH}">
  <defs>
    <linearGradient id="w" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d2b48c" stop-opacity="0.22"/>
      <stop offset="40%" stop-color="#c8a878" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#w)"/>
</svg>`);

const warmTop = Buffer.from(`<svg width="${w}" height="${bandH}">
  <defs>
    <linearGradient id="w" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000" stop-opacity="0"/>
      <stop offset="60%" stop-color="#c8a878" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#d2b48c" stop-opacity="0.22"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#w)"/>
</svg>`);

// Extra ridge highlight strips (multi-plate craft)
const ridgeBot = Buffer.from(`<svg width="${w}" height="${bandH}">
  <defs>
    <linearGradient id="r1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff" stop-opacity="0"/>
      <stop offset="18%" stop-color="#f0e6d4" stop-opacity="0.35"/>
      <stop offset="22%" stop-color="#fff" stop-opacity="0"/>
      <stop offset="48%" stop-color="#e8dcc8" stop-opacity="0.2"/>
      <stop offset="52%" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#r1)"/>
</svg>`);

const ridgeTop = Buffer.from(`<svg width="${w}" height="${bandH}">
  <defs>
    <linearGradient id="r1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="48%" stop-color="#fff" stop-opacity="0"/>
      <stop offset="52%" stop-color="#e8dcc8" stop-opacity="0.2"/>
      <stop offset="78%" stop-color="#fff" stop-opacity="0"/>
      <stop offset="82%" stop-color="#f0e6d4" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#r1)"/>
</svg>`);

const topPlate = await sharp(topBuf)
  .composite([
    { input: warmTop, blend: "soft-light" },
    { input: ridgeTop, blend: "screen" },
    { input: featherSvgTop, top: bandH - featherH, left: 0, blend: "over" },
  ])
  .toBuffer();

const botPlate = await sharp(botBuf)
  .composite([
    { input: warmBot, blend: "soft-light" },
    { input: ridgeBot, blend: "screen" },
    { input: featherSvgBot, top: 0, left: 0, blend: "over" },
  ])
  .toBuffer();

await sharp({
  create: { width: w, height: h, channels: 3, background: { r: 6, g: 6, b: 8 } },
})
  .composite([
    { input: midGrain, top: bandH, left: 0 },
    { input: topPlate, top: 0, left: 0 },
    { input: botPlate, top: bandH + midH, left: 0 },
  ])
  .jpeg({ quality: 94 })
  .toFile(out);

console.log("wrote", out);
