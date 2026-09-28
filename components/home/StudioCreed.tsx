"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/home/StudioCreed.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  kicker?: string;
  line?: string;
  className?: string;
};

/**
 * Awwwards Scroll / 015 — Containeranimation Splittext.
 * Pinned horizontal scrub + per-char ST via containerAnimation.
 * Motion ranges tempered so Didone hairlines stay readable mid-scrub.
 * @see Awwwards_Master_Pack/01 - Scroll Animation/015 - Containeranimation Splittext
 */
export function StudioCreed({
  kicker = "Studio Creed",
  line = "UNREAL · UNREASONABLE",
  className,
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrapper = root.querySelector<HTMLElement>(`.${styles.horizontal}`);
    const text = root.querySelector<HTMLElement>(`.${styles.horizontalText}`);
    const chars = root.querySelectorAll<HTMLElement>("[data-creed-char]");
    const progress = root.querySelector<HTMLElement>("[data-creed-progress]");
    if (!wrapper || !text || !chars.length) return;

    const ctx = gsap.context(() => {
      const scrollTween = gsap.to(text, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          pinSpacing: true,
          scrub: 0.65,
          anticipatePin: 1,
          end: () => `+=${Math.max(text.scrollWidth * 0.85, window.innerWidth * 2)}`,
          onUpdate: (self) => {
            if (progress) progress.style.transform = `scaleX(${self.progress})`;
          },
        },
      });

      // Tempered pack DNA — readable Didone (not ±200 / ±20 chaos)
      chars.forEach((char) => {
        gsap.from(char, {
          yPercent: gsap.utils.random(-70, 70),
          rotation: gsap.utils.random(-8, 8),
          autoAlpha: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: "left 95%",
            end: "left 42%",
            scrub: 0.8,
          },
        });
      });
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    const t = window.setTimeout(refresh, 120);

    return () => {
      window.clearTimeout(t);
      ctx.revert();
    };
  }, [line]);

  const chars = Array.from(line);

  return (
    <section
      ref={rootRef}
      className={cn(styles.root, className)}
      aria-label={kicker}
    >
      <div className={styles.atmosphere} aria-hidden="true">
        <span className={styles.bloom} />
        <span className={styles.bloomSecondary} />
        <span className={styles.filament} />
        <span className={styles.vignette} />
        <span className={styles.grain} />
      </div>

      <p className={styles.kicker}>{kicker}</p>

      <div className={styles.horizontal}>
        <div className={styles.container}>
          <h2 className={styles.horizontalText} aria-label={line}>
            {chars.map((ch, i) => {
              if (ch === " ") {
                return (
                  <span key={`sp-${i}`} className={styles.space} aria-hidden="true">
                    {"\u00A0"}
                  </span>
                );
              }
              const isDot = ch === "·" || ch === "•";
              return (
                <span
                  key={i}
                  className={cn(styles.char, isDot && styles.dot)}
                  data-creed-char
                >
                  {ch}
                </span>
              );
            })}
          </h2>
        </div>

        <div className={styles.progress} aria-hidden="true">
          <span className={styles.progressFill} data-creed-progress />
        </div>
      </div>
    </section>
  );
}
