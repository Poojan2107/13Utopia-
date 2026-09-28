"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/TextRepetitionScroll.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  totalWords?: number;
  tyIncrement?: number;
  delayIncrement?: number;
  className?: string;
  kicker?: string;
};

/**
 * Awwwards 023 — Text Repetition Scroll Effect (Demo 3 Port).
 * Generates stacked ghost typography layers that expand and collapse on scroll.
 * @see Awwwards_Master_Pack/01 - Scroll Animation/023 - Text Repetition Scroll Effect  Demo 3
 */
export function TextRepetitionScroll({
  text,
  totalWords = 7,
  tyIncrement = 18,
  delayIncrement = 0.06,
  className,
  kicker,
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = el.querySelectorAll<HTMLElement>("[data-rep-word]");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.35,
        },
      });

      // Phase 1: Expand ghosts; center stays solid
      scrollTl.to(
        words,
        {
          ease: "power2.out",
          opacity: (_, target) =>
            (target as HTMLElement).classList.contains(styles.wordCenter)
              ? 1
              : 0.35,
          yPercent: (_, target) => Number((target as HTMLElement).dataset.ty || 0),
          stagger: {
            amount: 0.15,
            from: "center",
          },
        },
        0,
      );

      // Phase 2: Collapse ghosts
      scrollTl.to(
        words,
        {
          ease: "power2.in",
          opacity: (_, target) =>
            (target as HTMLElement).classList.contains(styles.wordCenter)
              ? 1
              : 0,
          yPercent: 0,
          stagger: {
            amount: 0.15,
            from: "center",
          },
        },
        0.55,
      );
    }, el);

    return () => ctx.revert();
  }, [totalWords, tyIncrement, delayIncrement]);

  const half = Math.floor(totalWords / 2);
  const layers = Array.from({ length: totalWords }, (_, i) => {
    let ty = 0;
    let delay = 0;
    let isCenter = false;

    if (i === totalWords - 1) {
      ty = 0;
      delay = 0;
      isCenter = true;
    } else if (i < half) {
      ty = half * tyIncrement - tyIncrement * i;
      delay = delayIncrement * (half - i) - delayIncrement;
    } else {
      ty = -1 * (half * tyIncrement - (i - half) * tyIncrement);
      delay = delayIncrement * (half - (i - half)) - delayIncrement;
    }

    return {
      index: i,
      ty,
      delay,
      isCenter,
    };
  });

  return (
    <div ref={rootRef} className={cn(styles.wrap, className)}>
      {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
      <div className={styles.stage}>
        {layers.map((layer) => (
          <span
            key={layer.index}
            className={cn(
              styles.word,
              layer.isCenter ? styles.wordCenter : styles.wordGhost,
            )}
            data-rep-word
            data-ty={layer.ty}
            data-delay={layer.delay}
            aria-hidden={!layer.isCenter}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
