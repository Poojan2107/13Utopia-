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

    const screenPoint = (svg: SVGSVGElement, x: number, y: number) => {
      const point = svg.createSVGPoint();
      point.x = x;
      point.y = y;
      const ctm = svg.getScreenCTM();
      return ctm ? point.matrixTransform(ctm) : point;
    };

    const connector = () => {
      const period = periodRef.current;
      const route = document.querySelector<SVGPathElement>("[data-line-draw]");
      const svg = route?.ownerSVGElement;
      if (!period || !route || !svg) return null;
      const dot = period.getBoundingClientRect();
      const dotX = dot.left + dot.width / 2;
      const dotY = dot.top + dot.height * 0.62;
      const len = route.getTotalLength();
      const step = 14;
      const samples: Array<{ x: number; y: number }> = [];
      for (let d = 0; d <= len; d += step) {
        const local = route.getPointAtLength(d);
        const screen = screenPoint(svg, local.x, local.y);
        samples.push({ x: screen.x, y: screen.y });
      }
      const margin = 36;
      let joinAt = samples.findIndex(
        (sample) =>
          sample.x >= -margin &&
          sample.x <= window.innerWidth + margin &&
          sample.y >= -margin &&
          sample.y <= window.innerHeight + margin,
      );
      const onScreen = joinAt >= 0;
      if (!onScreen) joinAt = 0;
      const join = onScreen
        ? samples[joinAt]
        : { x: samples[0].x, y: window.innerHeight + 24 };
      const lead = samples[Math.min(joinAt + 4, samples.length - 1)];
      const span = Math.hypot(lead.x - join.x, lead.y - join.y) || 1;
      const ux = (lead.x - join.x) / span;
      const uy = (lead.y - join.y) / span;
      const endX = join.x;
      const endY = join.y;
      const reach = Math.hypot(endX - dotX, endY - dotY);
      const turn = Math.max(72, Math.min(reach * 0.36, 170));
      const c1x = dotX + Math.min(turn * 0.6, Math.max(48, (endX - dotX) * 0.4));
      const c2x = endX - ux * turn * 0.35;
      const c2y = endY - uy * turn * 0.35;

      let follow = "";
      if (onScreen) {
        for (let index = joinAt + 1; index < samples.length; index += 1) {
          const sample = samples[index];
          follow += ` L ${sample.x.toFixed(1)} ${sample.y.toFixed(1)}`;
        }
      }

      const hand = `M ${dotX.toFixed(1)} ${dotY.toFixed(1)} C ${c1x.toFixed(1)} ${dotY.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${endX.toFixed(1)} ${endY.toFixed(1)}`;
      return { d: `${hand}${follow}`, hand };
    };

    const paintLine = (progress: number) => {
      const bridge = drawRef.current;
      const route = document.querySelector<SVGPathElement>("[data-line-draw]");
      const ghost = document.querySelector<SVGPathElement>("[data-line-ghost]");
      const pen = document.querySelector<SVGGElement>("[data-line-pen]");
      const period = periodRef.current;
      const create = document.querySelector<HTMLElement>("#create-path");
      if (!bridge || !route || !create) return;

      routeLength = route.getTotalLength() || 1;
      const shape = connector();
      route.style.strokeDasharray = `${routeLength}`;

      if (progress <= 0 || !shape) {
        bridge.style.opacity = "0";
        bridge.style.strokeDashoffset = "1";
        route.style.strokeDashoffset = `${routeLength}`;
        if (ghost) ghost.style.opacity = "0";
        if (period) period.style.opacity = "1";
        if (pen) pen.style.opacity = "0";
        return;
      }

      bridge.setAttribute("d", shape.hand);
      const handLength = bridge.getTotalLength() || 1;
      bridge.setAttribute("d", shape.d);
      bridge.style.strokeWidth = `${strokeWidth()}`;
      const bridgeLength = bridge.getTotalLength() || 1;
      const routePx = Math.max(0, bridgeLength - handLength);
      const drawn = clamp01(progress) * bridgeLength;
      const joined = drawn >= handLength - 1;
      bridge.style.strokeDasharray = `${bridgeLength}`;
      bridge.style.strokeDashoffset = `${Math.max(0, bridgeLength - drawn)}`;
      bridge.style.opacity = drawn > handLength * 0.012 ? "1" : "0";
      route.style.opacity = "0";
      if (ghost) ghost.style.opacity = joined ? "1" : "0";

      if (period) period.style.opacity = drawn > handLength * 0.04 ? "0" : "1";
      if (pen) {
        const along = routePx > 1 ? Math.max(0, drawn - handLength) / routePx : 0;
        const tip = route.getPointAtLength(Math.min(routeLength, along * routeLength));
        pen.setAttribute("transform", `translate(${tip.x} ${tip.y})`);
        pen.style.opacity = along > 0.02 && along < 0.985 ? "1" : "0";
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

    let paintFrame = 0;
    const schedulePaint = (progress: number) => {
      cancelAnimationFrame(paintFrame);
      paintFrame = requestAnimationFrame(() => paintLine(progress));
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${LINE_SPAN * 100}%`,
        scrub: true,
        anticipatePin: 0,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          schedulePaint(lineProgress(self.progress));
        },
        onLeave: () => schedulePaint(1),
        onLeaveBack: () => schedulePaint(0),
        onRefresh: (self) => {
          const fresh = document.querySelector<SVGPathElement>("[data-line-draw]");
          routeLength = fresh?.getTotalLength() || 1;
          schedulePaint(lineProgress(self.progress));
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

    return () => {
      cancelAnimationFrame(paintFrame);
      revertGsapContext(ctx);
    };
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
