"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/HeroEnter.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Animmaster hero-animation DNA — staged entrance for the first viewport.
 * Wraps hero content; CSS fallback still works if JS is late.
 * @see https://animmasterlib.dev/ (Hero Animations)
 */
export function HeroEnter({ children, className }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const left = root.querySelector<HTMLElement>("[data-hero-left]");
    const right = root.querySelector<HTMLElement>("[data-hero-right]");
    const floor = root.querySelector<HTMLElement>("[data-hero-floor]");
    const rules = root.querySelectorAll<HTMLElement>("[data-hero-rule]");
    const media = root.querySelector<HTMLElement>("[data-hero-media]");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      if (media) {
        tl.fromTo(
          media,
          { opacity: 0.2, scale: 1.08 },
          { opacity: 1, scale: 1, duration: 1.55 },
          0,
        );
      }

      if (left) {
        tl.fromTo(
          left,
          { opacity: 0, x: -36 },
          { opacity: 1, x: 0, duration: 1.15 },
          0.18,
        );
      }

      if (right) {
        tl.fromTo(
          right,
          { opacity: 0, x: 36 },
          { opacity: 1, x: 0, duration: 1.15 },
          0.32,
        );
      }

      if (rules.length) {
        rules.forEach((rule, i) => {
          const fromRight = rule.className.includes("ruleRight");
          tl.fromTo(
            rule,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.85,
              ease: "power3.inOut",
              transformOrigin: fromRight ? "right center" : "left center",
            },
            0.55 + i * 0.07,
          );
        });
      }

      if (floor) {
        tl.fromTo(
          floor,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.9 },
          0.72,
        );
      }
    }, root);

    root.classList.add(styles.armed);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className={cn(styles.root, className)}>
      {children}
    </div>
  );
}
