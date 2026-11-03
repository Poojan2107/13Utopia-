"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { revertGsapContext } from "@/components/motion/scrollFeel";
import styles from "@/styles/home/HomeAboutReveal.module.css";

gsap.registerPlugin(ScrollTrigger);

const LINES = [
  "We believe creative work needs",
  "focus. That's why we keep our",
  "team tight and our involvement",
  "high, so every project gets our full",
  "attention. We build brands from",
  "scratch or make them better.",
];

const STATEMENT = LINES.join(" ");

const PILLS = [
  { label: "Professional overthinkers", anchor: "keep", at: 0.34, tilt: -4 },
  { label: "Nerding out on design", anchor: "high,", at: 0.7, tilt: 5 },
  { label: "Allergic to generic", anchor: "brands", at: 0.9, tilt: -4.5 },
] as const;

const STAGGER = 0.54;
const STEP = 3.5;
/**
 * About pin, then the About section itself scrolling away, then the How We Work pin.
 * The line starts when the type finishes and ends when that last pin ends.
 */
const TYPE_END = 0.68;
const ABOUT_PIN = 2.8;
const CREATE_PIN = 2.2;
const LINE_SPAN = ABOUT_PIN + 1 + CREATE_PIN;

function clamp01(t: number): number {
  return Math.max(0, Math.min(1, t));
}

function strokeWidth() {
  const scale = Math.min(window.innerWidth / 1800, window.innerHeight / 1240) || 1;
  return 48 * scale;
}

export function HomeAboutReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const glyphRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const pillRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const periodRef = useRef<HTMLSpanElement | null>(null);
  const ghostRef = useRef<SVGPathElement | null>(null);
  const drawRef = useRef<SVGPathElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const chars = glyphRefs.current.filter(
      (node): node is HTMLSpanElement => node != null,
    );
    const pills = pillRefs.current.filter(
      (node): node is HTMLSpanElement => node != null,
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let routeLength = 1;
    let frozenStart: { x: number; y: number } | null = null;
    let frozenCurve: Array<{ x: number; y: number }> | null = null;

    const fitScale = () =>
      Math.min(window.innerWidth / 1800, window.innerHeight / 1240) || 1;

    const screenPoint = (svg: SVGSVGElement, x: number, y: number) => {
      const point = svg.createSVGPoint();
      point.x = x;
      point.y = y;
      const ctm = svg.getScreenCTM();
      return ctm ? point.matrixTransform(ctm) : point;
    };

    const periodDot = () => {
      const nodes = Array.from(section.querySelectorAll("span"));
      const last = nodes.filter(
        (node): node is HTMLSpanElement =>
          node instanceof HTMLSpanElement &&
          node.textContent === "." &&
          node.children.length === 0,
      ).pop();
      if (!last) return null;
      const rect = last.getBoundingClientRect();
      // Ignore transient off-screen pin/transform readings.
      if (rect.top < -80 || rect.top > window.innerHeight + 80) {
        if (frozenStart) {
          return { x: frozenStart.x, y: frozenStart.y, el: last };
        }
        return null;
      }
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height * 0.62,
        el: last,
      };
    };

    const buildCurve = (
      dotX: number,
      dotY: number,
      join: { x: number; y: number },
      ux: number,
      uy: number,
    ) => {
      const dx = join.x - dotX;
      const dy = join.y - dotY;
      const reach = Math.hypot(dx, dy) || 1;
      // Keep the outbound handle modest so the turn doesn't bow across the grey path.
      const leave = Math.max(90, Math.min(Math.abs(dx) * 0.55 + 40, 180));
      const arrive = Math.max(140, Math.min(reach * 0.45, 240));
      const overlap = strokeWidth() * 1.05;
      const tipX = join.x + ux * overlap;
      const tipY = join.y + uy * overlap;
      const maxX = window.innerWidth - 20;
      const c1x = Math.min(maxX, dotX + leave);
      // Bend down early so the stroke reads as a curve from the first pixels.
      const c1y = dotY + Math.max(36, Math.max(0, dy) * 0.28);
      let c2x = tipX - ux * arrive;
      let c2y = tipY - uy * arrive;
      if (c2x > maxX) {
        const t = (maxX - tipX) / (c2x - tipX || 1);
        c2x = tipX + (c2x - tipX) * t;
        c2y = tipY + (c2y - tipY) * t;
      }
      // Soft S: leave the full stop rightward, ease down, arrive on the path tangent.
      return [
        { x: dotX, y: dotY },
        { x: c1x, y: c1y },
        { x: c2x, y: c2y },
        { x: tipX, y: tipY },
      ];
    };

    const livePoints = () => {
      const period = periodDot();
      const route = document.querySelector<SVGPathElement>("[data-line-draw]");
      const svg = route?.ownerSVGElement;
      if (!period || !route || !svg) return null;
      const len = route.getTotalLength() || 1;
      const origin = route.getPointAtLength(0);
      const ahead = route.getPointAtLength(Math.min(56, len));
      const originScreen = screenPoint(svg, origin.x, origin.y);
      const next = screenPoint(svg, ahead.x, ahead.y);
      const span = Math.hypot(next.x - originScreen.x, next.y - originScreen.y) || 1;
      const ux = (next.x - originScreen.x) / span;
      const uy = (next.y - originScreen.y) / span;

      // Keep the join on-screen so the turn never shoots off below the fold.
      const join = {
        x: Math.min(originScreen.x, window.innerWidth - 12),
        y: Math.min(Math.max(originScreen.y, 24), window.innerHeight + 20),
      };

      // Prefer the live full-stop while it is on screen so the turn stays attached to the text.
      const useLive = period.y > 24 && period.y < window.innerHeight - 24;
      if (useLive) frozenStart = { x: period.x, y: period.y };
      else if (!frozenStart) frozenStart = { x: period.x, y: period.y };

      const points = buildCurve(frozenStart.x, frozenStart.y, join, ux, uy);
      return { points, skip: 0, period: period.el, ux, uy, join };
    };

    const pathFrom = (points: Array<{ x: number; y: number }>) =>
      `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)} C ${points[1].x.toFixed(1)} ${points[1].y.toFixed(1)}, ${points[2].x.toFixed(1)} ${points[2].y.toFixed(1)}, ${points[3].x.toFixed(1)} ${points[3].y.toFixed(1)}`;

    const paintLine = (progress: number) => {
      const bridge = drawRef.current;
      const route = document.querySelector<SVGPathElement>("[data-line-draw]");
      const ghost = document.querySelector<SVGPathElement>("[data-line-ghost]");
      const pen = document.querySelector<SVGGElement>("[data-line-pen]");
      const create = document.querySelector<HTMLElement>("#create-path");
      if (!bridge || !route || !create) return;

      routeLength = route.getTotalLength() || 1;
      const createTop = create.getBoundingClientRect().top;
      const live = livePoints();
      route.style.strokeDasharray = `${routeLength}`;

      if (progress <= 0.001 || !live) {
        frozenStart = null;
        frozenCurve = null;
        bridge.style.opacity = "0";
        bridge.removeAttribute("d");
        bridge.style.strokeDashoffset = "1";
        route.style.strokeDashoffset = `${routeLength}`;
        route.style.opacity = "0";
        if (ghost) ghost.style.opacity = "0";
        if (live?.period) live.period.style.opacity = "1";
        else if (periodRef.current) periodRef.current.style.opacity = "1";
        if (pen) pen.style.opacity = "0";
        return;
      }

      // Freeze the turn once How We Work is near, so the join stops reshaping.
      if (createTop <= window.innerHeight * 0.55) {
        if (!frozenCurve) {
          const join = live.points[3];
          frozenCurve = live.points.map((point) => ({
            x: point.x - join.x,
            y: point.y - join.y,
          }));
        }
      } else {
        frozenCurve = null;
      }

      const points = frozenCurve
        ? frozenCurve.map((point) => ({
            x: point.x + live.points[3].x,
            y: point.y + live.points[3].y,
          }))
        : live.points;

      bridge.setAttribute("d", pathFrom(points));
      bridge.style.strokeWidth = `${strokeWidth()}`;
      const bridgeLength = bridge.getTotalLength() || 1;
      const skip = frozenCurve ? 0 : live.skip;
      const rest = Math.max(1, routeLength - skip);
      const routePx = rest * fitScale();
      const handEnd =
        (ABOUT_PIN + 1 - ABOUT_PIN * TYPE_END) /
        (LINE_SPAN - ABOUT_PIN * TYPE_END);
      const drawn =
        progress < handEnd
          ? (progress / Math.max(0.001, handEnd)) * bridgeLength
          : bridgeLength +
            ((progress - handEnd) / Math.max(0.001, 1 - handEnd)) * routePx;
      const bridgeDrawn = Math.min(drawn, bridgeLength) / bridgeLength;
      const along = Math.max(0, drawn - bridgeLength) / fitScale();

      bridge.style.strokeDasharray = `${bridgeLength}`;
      bridge.style.strokeDashoffset = `${bridgeLength * (1 - bridgeDrawn)}`;
      const bridgeVisible = bridgeDrawn > 0.012 && along < strokeWidth() * 1.1;
      bridge.style.opacity = bridgeVisible ? "1" : "0";

      route.style.opacity = "1";
      if (skip > 0) {
        route.style.strokeDasharray = `0 ${skip} ${along} ${routeLength}`;
        route.style.strokeDashoffset = "0";
      } else {
        route.style.strokeDasharray = `${routeLength}`;
        route.style.strokeDashoffset = `${Math.max(0, routeLength - along)}`;
      }

      if (ghost) ghost.style.opacity = "0";

      if (live.period) live.period.style.opacity = bridgeDrawn > 0.04 ? "0" : "1";
      if (pen) {
        const tip = route.getPointAtLength(
          Math.min(routeLength, skip + along),
        );
        pen.setAttribute("transform", `translate(${tip.x} ${tip.y})`);
        const routeT = (skip + along) / routeLength;
        pen.style.opacity = along > 8 && routeT < 0.985 ? "1" : "0";
      }
    };

    if (reducedMotion) {
      gsap.set(chars, {
        color: "#ffffff",
        scale: 1,
        textShadow: "0px 0px 0px rgba(255,255,255,0)",
      });
      gsap.set(pills, { opacity: 1, scale: 1, y: 0 });
      const route = document.querySelector<SVGPathElement>("[data-line-draw]");
      routeLength = route?.getTotalLength() || 1;
      paintLine(1);
      return;
    }

    const total = Math.max(1, (chars.length - 1) * STAGGER + STEP * 2);
    const route = document.querySelector<SVGPathElement>("[data-line-draw]");
    routeLength = route?.getTotalLength() || 1;

    const lineStart = (ABOUT_PIN * TYPE_END) / LINE_SPAN;
    const lineProgress = (progress: number) =>
      clamp01((progress - lineStart) / (1 - lineStart));

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${LINE_SPAN * 100}%`,
        scrub: true,
        anticipatePin: 0,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          paintLine(lineProgress(self.progress));
        },
        onLeave: () => paintLine(1),
        onLeaveBack: () => paintLine(0),
        onRefresh: (self) => {
          frozenStart = null;
          frozenCurve = null;
          const fresh = document.querySelector<SVGPathElement>("[data-line-draw]");
          routeLength = fresh?.getTotalLength() || 1;
          paintLine(lineProgress(self.progress));
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=280%",
          pin: true,
          pinSpacing: true,
          scrub: true,
          anticipatePin: 0,
          invalidateOnRefresh: true,
        },
      });

      chars.forEach((el, index) => {
        const at = index * STAGGER;
        tl.to(
          el,
          {
            color: "#ffffff",
            scale: 1.12,
            textShadow:
              "0.45px 0.45px 0 rgba(255,255,255,0.85), -0.45px -0.45px 0 rgba(255,255,255,0.85)",
            duration: STEP,
            ease: "power1.out",
            immediateRender: false,
          },
          at,
        );
        tl.to(
          el,
          {
            color: "#ffffff",
            scale: 1,
            textShadow: "0px 0px 0px rgba(255,255,255,0)",
            duration: STEP,
            ease: "power1.inOut",
            immediateRender: false,
          },
          at + STEP,
        );
      });

      pills.forEach((el, index) => {
        const tilt = PILLS[index]?.tilt ?? 0;
        const at = (PILLS[index]?.at ?? 0.5) * total;
        gsap.set(el, { opacity: 0, scale: 0.6, y: 18, rotation: tilt });
        tl.to(
          el,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotation: tilt,
            duration: 6,
            ease: "back.out(2)",
          },
          at,
        );
      });

      tl.to({}, { duration: total * ((1 - TYPE_END) / TYPE_END) }, total);
    }, section);

    return () => revertGsapContext(ctx);
  }, []);

  let glyphIndex = 0;

  return (
    <section
      ref={sectionRef}
      id="about-practice"
      className={styles.section}
      aria-label="A bit about us"
    >
      <div className={styles.frame}>
        <p className={styles.eyebrow}>A bit about us</p>
        <div className={styles.copy}>
          <p className={styles.statement} aria-label={STATEMENT}>
            {LINES.map((line, lineIndex) => (
              <span key={line} className={styles.line}>
                {line.split(" ").map((word, wordIndex, words) => {
                  const pillIndex = PILLS.findIndex((pill) => pill.anchor === word);
                  const pill = pillIndex >= 0 ? PILLS[pillIndex] : null;
                  return (
                    <span key={`${word}-${wordIndex}`}>
                      <span className={styles.word}>
                        {[...word].map((glyph, glyphOffset, glyphs) => {
                          const index = glyphIndex;
                          glyphIndex += 1;
                          const isStop =
                            lineIndex === LINES.length - 1 &&
                            wordIndex === words.length - 1 &&
                            glyphOffset === glyphs.length - 1;
                          return (
                            <span
                              key={`${glyph}-${index}`}
                              ref={(node) => {
                                glyphRefs.current[index] = node;
                                if (isStop) periodRef.current = node;
                              }}
                              className={styles.glyph}
                              aria-hidden="true"
                            >
                              {glyph}
                            </span>
                          );
                        })}
                        {pill ? (
                          <span
                            ref={(node) => {
                              pillRefs.current[pillIndex] = node;
                            }}
                            className={styles.badge}
                          >
                            {pill.label}
                          </span>
                        ) : null}
                      </span>
                      {wordIndex < words.length - 1 ? " " : ""}
                    </span>
                  );
                })}
              </span>
            ))}
          </p>
        </div>
      </div>
      {mounted
        ? createPortal(
            <svg className={styles.bridge} aria-hidden="true">
              <path ref={ghostRef} className={styles.bridgeGhost} />
              <path ref={drawRef} className={styles.bridgeDraw} />
            </svg>,
            document.body,
          )
        : null}
    </section>
  );
}
