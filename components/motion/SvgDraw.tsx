"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/SvgDraw.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  className?: string;
  /** Horizontal rule vs. decorative flourish */
  variant?: "rule" | "flourish";
};

/**
 * Animmaster SVG-animation DNA — stroke draws in on scroll.
 * @see https://animmasterlib.dev/ (SVG Animations)
 */
export function SvgDraw({ className, variant = "rule" }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const paths = root.querySelectorAll<SVGPathElement | SVGLineElement>(
      "[data-draw]",
    );
    const ctx = gsap.context(() => {
      paths.forEach((path) => {
        const length =
          "getTotalLength" in path ? path.getTotalLength() : 240;
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: variant === "flourish" ? 1.35 : 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, [variant]);

  if (variant === "flourish") {
    return (
      <div
        ref={rootRef}
        className={cn(styles.root, styles.flourish, className)}
        aria-hidden="true"
      >
        <svg viewBox="0 0 320 48" fill="none" className={styles.svg}>
          <path
            data-draw
            d="M4 36 C48 8, 96 8, 160 28 C224 48, 272 40, 316 12"
            className={styles.stroke}
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className={cn(styles.root, styles.rule, className)}
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 4" fill="none" className={styles.svg} preserveAspectRatio="none">
        <line
          data-draw
          x1="0"
          y1="2"
          x2="400"
          y2="2"
          className={styles.stroke}
        />
      </svg>
    </div>
  );
}
