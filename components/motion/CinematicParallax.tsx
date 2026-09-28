"use client";

import { useEffect, useId, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionMedia, type MotionImage } from "@/components/motion/MotionMedia";
import styles from "@/styles/motion/CinematicParallax.module.css";

gsap.registerPlugin(ScrollTrigger);

export type CinematicScene = {
  title: string;
  caption?: string;
  meta?: string;
  need: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
  image?: MotionImage;
};

type Props = {
  scenes: CinematicScene[];
  eyebrow?: string;
};

/**
 * Siena-inspired cinematic parallax (Skiper29 / siena.film spirit):
 * sticky stage, SVG mask opening, media scale, documentary chrome.
 * GSAP + Lenis — not the Pro Skiper package.
 */
export function CinematicParallax({ scenes, eyebrow = "Reel" }: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const maskRef = useRef<SVGRectElement | null>(null);
  const plateRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const uid = useId().replace(/:/g, "");
  const clipId = `cine-mask-${uid}`;

  useEffect(() => {
    const root = rootRef.current;
    if (!root || scenes.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const maskHost = root.querySelector<HTMLElement>("[data-mask-host]");
    const play = root.querySelector<HTMLElement>("[data-play]");
    const letterboxes = root.querySelectorAll<HTMLElement>("[data-letter]");
    const copyLayers = root.querySelectorAll<HTMLElement>("[data-copy]");
    const scales = root.querySelectorAll<HTMLElement>("[data-plate-scale]");
    const rect = maskRef.current;

    const ctx = gsap.context(() => {
      if (rect) {
        gsap.set(rect, {
          attr: { x: 0.14, y: 0.11, width: 0.72, height: 0.78, rx: 0.028 },
        });
      }
      gsap.set(scales, { scale: 1.32 });
      gsap.set(play, { opacity: 1, scale: 1 });
      gsap.set(letterboxes, { scaleY: 1, opacity: 1 });
      gsap.set(copyLayers, { opacity: 0, y: 28 });
      if (copyLayers[0]) gsap.set(copyLayers[0], { opacity: 1, y: 0 });
      plateRefs.current.forEach((el, i) => {
        if (el) gsap.set(el, { opacity: i === 0 ? 1 : 0 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.85,
          onUpdate: (self) => {
            const i = Math.min(
              scenes.length - 1,
              Math.floor(self.progress * scenes.length),
            );
            setActive(i);
          },
        },
      });

      // Act 1 — SVG mask opens to full frame (Siena / Skiper29)
      if (rect) {
        tl.to(
          rect,
          {
            attr: { x: 0, y: 0, width: 1, height: 1, rx: 0 },
            duration: 0.38,
            ease: "none",
          },
          0,
        );
      } else if (maskHost) {
        gsap.set(maskHost, { clipPath: "inset(11% 14% round 1.35rem)" });
        tl.to(
          maskHost,
          {
            clipPath: "inset(0% 0% round 0rem)",
            duration: 0.38,
            ease: "none",
          },
          0,
        );
      }

      tl.to(scales, { scale: 1, duration: 0.38, ease: "none" }, 0)
        .to(play, { opacity: 0, scale: 0.72, duration: 0.22, ease: "none" }, 0.05)
        .to(
          letterboxes,
          { scaleY: 0, opacity: 0, duration: 0.28, ease: "none" },
          0.08,
        );

      if (scenes.length > 1) {
        const sceneSpan = 0.62 / scenes.length;
        scenes.forEach((_, i) => {
          const start = 0.38 + i * sceneSpan;
          if (i > 0) {
            const prev = plateRefs.current[i - 1];
            const curr = plateRefs.current[i];
            if (prev) {
              tl.to(prev, { opacity: 0, duration: sceneSpan * 0.55, ease: "none" }, start);
            }
            if (curr) {
              tl.fromTo(
                curr,
                { opacity: 0 },
                { opacity: 1, duration: sceneSpan * 0.55, ease: "none" },
                start,
              );
            }
            tl.to(
              copyLayers[i - 1],
              { opacity: 0, y: -16, duration: sceneSpan * 0.4, ease: "none" },
              start,
            );
            tl.fromTo(
              copyLayers[i],
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: sceneSpan * 0.45, ease: "none" },
              start + sceneSpan * 0.08,
            );
          }
          const scaleEl = plateRefs.current[i]?.querySelector<HTMLElement>(
            "[data-plate-scale]",
          );
          if (scaleEl) {
            tl.to(
              scaleEl,
              {
                scale: i === 0 ? 1.02 : 1.08,
                duration: sceneSpan,
                ease: "none",
              },
              start,
            );
          }
        });
      } else {
        tl.to({}, { duration: 0.62 }, 0.38);
      }
    }, root);

    return () => ctx.revert();
  }, [scenes]);

  const scrollVh = Math.max(180, scenes.length * 85);

  return (
    <section
      ref={rootRef}
      className={styles.root}
      style={{ height: `${scrollVh}vh` }}
      aria-label={eyebrow}
    >
      <div className={styles.sticky}>
        <div className={styles.stage}>
          <svg
            className={styles.svgDefs}
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                <rect
                  ref={maskRef}
                  x="0.14"
                  y="0.11"
                  width="0.72"
                  height="0.78"
                  rx="0.028"
                />
              </clipPath>
            </defs>
          </svg>

          <div
            className={styles.maskHost}
            data-mask-host
            style={{ clipPath: `url(#${clipId})` }}
          >
            {scenes.map((scene, i) => (
              <div
                key={scene.need}
                ref={(el) => {
                  plateRefs.current[i] = el;
                }}
                className={styles.scene}
                style={{ opacity: i === 0 ? 1 : 0, zIndex: i }}
              >
                <div className={styles.scale} data-plate-scale>
                  <MotionMedia
                    aspect="hero"
                    tone={scene.tone ?? "warm"}
                    need={scene.need}
                    image={scene.image}
                    fill
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.vignette} aria-hidden="true" />
          <div
            className={`${styles.letterbox} ${styles.letterboxTop}`}
            data-letter
            aria-hidden="true"
          />
          <div
            className={`${styles.letterbox} ${styles.letterboxBottom}`}
            data-letter
            aria-hidden="true"
          />

          <div className={styles.play} data-play aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className={styles.chrome}>
          <div className={styles.topRow}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <span className={styles.counter}>
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(scenes.length).padStart(2, "0")}
            </span>
          </div>

          <div className={styles.copyStack}>
            {scenes.map((scene) => (
              <div key={scene.title} className={styles.copyLayer} data-copy>
                {scene.meta ? <p className={styles.meta}>{scene.meta}</p> : null}
                <h2 className={styles.title}>{scene.title}</h2>
                {scene.caption ? (
                  <p className={styles.caption}>{scene.caption}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.progress} aria-hidden="true">
          {scenes.map((scene, i) => (
            <span
              key={scene.need}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            />
          ))}
        </div>

        <div className={styles.reducedList} aria-hidden="true">
          {scenes.map((scene) => (
            <div key={`rm-${scene.need}`} className={styles.reducedCard}>
              <MotionMedia
                aspect="wide"
                tone={scene.tone ?? "warm"}
                need={scene.need}
                image={scene.image}
              />
              {scene.meta ? <p className={styles.meta}>{scene.meta}</p> : null}
              <h2 className={styles.title}>{scene.title}</h2>
              {scene.caption ? (
                <p className={styles.caption}>{scene.caption}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
