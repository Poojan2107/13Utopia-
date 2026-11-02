"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Share of the about pin spent on the type. The line starts after this. */
export const LINE_TYPE_END = 0.68;

function clamp01(t: number) {
  return Math.max(0, Math.min(1, t));
}

let overlay: SVGSVGElement | null = null;
let ghost: SVGPathElement | null = null;
let ink: SVGPathElement | null = null;
let forced: number | null = null;

function ensureOverlay() {
  if (overlay) return;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("aria-hidden", "true");
  svg.style.cssText =
    "position:fixed;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none;z-index:8";
  const lead = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const draw = document.createElementNS("http://www.w3.org/2000/svg", "path");
  for (const node of [lead, draw]) {
    node.setAttribute("fill", "none");
    node.setAttribute("stroke-linecap", "round");
    node.setAttribute("stroke-linejoin", "round");
  }
  lead.setAttribute("stroke", "rgba(255,255,255,0.16)");
  draw.setAttribute("stroke", "#ffffff");
  svg.append(lead, draw);
  document.body.appendChild(svg);
  overlay = svg;
  ghost = lead;
  ink = draw;
}

export function unmountWorkLine() {
  overlay?.remove();
  overlay = null;
  ghost = null;
  ink = null;
  forced = null;
}

function screenOf(svg: SVGSVGElement, ctm: DOMMatrix, x: number, y: number) {
  const pt = svg.createSVGPoint();
  pt.x = x;
  pt.y = y;
  return pt.matrixTransform(ctm);
}

/**
 * One scroll-drawn stroke: from the about full stop, onto the How We Work
 * path, then along that path. Rebuilt from live positions so the join stays
 * on the grey stroke while the page moves.
 */
export function paintWorkLine(force?: number) {
  if (typeof document === "undefined") return;
  if (force != null) forced = force;
  ensureOverlay();
  if (!ghost || !ink) return;

  const period = document.querySelector<HTMLElement>("[data-line-period]");
  const draw = document.querySelector<SVGPathElement>("[data-line-draw]");
  const pen = document.querySelector<SVGGElement>("[data-line-pen]");
  const svg = draw?.ownerSVGElement;
  if (!period || !draw || !svg) return;

  const ctm = svg.getScreenCTM();
  if (!ctm) return;

  const len = draw.getTotalLength();
  if (!len) return;

  const box = period.getBoundingClientRect();
  const x0 = box.left + box.width * 0.5;
  const y0 = box.top + box.height * 0.62;
  const scale = Math.hypot(ctm.a, ctm.b) || 1;
  const width = 48 * scale;
  // Meet the existing stroke after it has turned, and arrive along its tangent
  // so the two strokes share one direction instead of ending in a cap.
  const overlap = Math.min(len * 0.1, Math.max(width * 8, 160));
  const land = draw.getPointAtLength(overlap);
  const behind = draw.getPointAtLength(Math.max(0, overlap - Math.min(90, overlap * 0.45)));
  const landS = screenOf(svg, ctm, land.x, land.y);
  const backS = screenOf(svg, ctm, behind.x, behind.y);
  const ax = landS.x - backS.x;
  const ay = landS.y - backS.y;
  const alen = Math.hypot(ax, ay) || 1;
  const dx = landS.x - x0;
  const dy = landS.y - y0;
  const c1x = x0 + dx * 0.78;
  const c1y = y0 + dy * 0.08;
  const c2x = landS.x - (ax / alen) * Math.max(width * 1.4, 36);
  const c2y = landS.y - (ay / alen) * Math.max(width * 1.4, 36);

  const d = [
    `M ${x0.toFixed(1)} ${y0.toFixed(1)}`,
    `C ${c1x.toFixed(1)} ${c1y.toFixed(1)},`,
    `${c2x.toFixed(1)} ${c2y.toFixed(1)},`,
    `${landS.x.toFixed(1)} ${landS.y.toFixed(1)}`,
  ].join(" ");

  ghost.setAttribute("d", d);
  ink.setAttribute("d", d);
  ghost.style.strokeWidth = `${width}`;
  ink.style.strokeWidth = `${width}`;

  const bridgeLen = ink.getTotalLength() || 1;
  let bridgeT = 0;
  let curveT = 0;

  if (forced != null) {
    bridgeT = clamp01(forced);
    curveT = bridgeT;
  } else {
    const about = document.getElementById("about-practice");
    const create = document.getElementById("create-path");
    const aboutST = ScrollTrigger.getAll().find((st) => st.trigger === about);
    const createST = ScrollTrigger.getAll().find((st) => st.trigger === create);
    if (aboutST && createST) {
      const y = aboutST.scroll();
      const typeAt =
        aboutST.start + (aboutST.end - aboutST.start) * LINE_TYPE_END;
      const joinAt = aboutST.end;
      const overlapT = clamp01(overlap / len);
      const tipT = Math.min(0.22, overlapT + 0.08);
      if (y <= typeAt) {
        bridgeT = 0;
        curveT = 0;
      } else if (y < joinAt) {
        bridgeT = clamp01((y - typeAt) / Math.max(1, joinAt - typeAt));
        curveT = bridgeT > 0.72 ? ((bridgeT - 0.72) / 0.28) * tipT : 0;
      } else {
        bridgeT = 1;
        const t = clamp01(createST.progress);
        curveT = tipT + t * (1 - tipT);
      }
    }
  }

  const lead = bridgeT === 0 ? 0 : Math.min(1, bridgeT * 1.16);
  ghost.style.strokeDasharray = `${bridgeLen}`;
  ink.style.strokeDasharray = `${bridgeLen}`;
  ghost.style.strokeDashoffset = `${bridgeLen * (1 - lead)}`;
  ink.style.strokeDashoffset = `${bridgeLen * (1 - bridgeT)}`;

  draw.style.strokeDasharray = `${len}`;
  draw.style.strokeDashoffset = `${len * (1 - curveT)}`;

  if (pen) {
    const tip = draw.getPointAtLength(Math.max(0, len * curveT));
    pen.setAttribute("transform", `translate(${tip.x} ${tip.y})`);
    pen.style.opacity = curveT > 0.02 && curveT < 0.985 ? "1" : "0";
  }

  period.style.opacity = bridgeT > 0.04 ? "0" : "1";
}
