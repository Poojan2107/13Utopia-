"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/home/StudioCreed.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  className?: string;
  eyebrow?: string;
};

/**
 * Studio Creed — Centered Brand Word System.
 * Tight, high-impact scroll reveal without dead pinned spaces.
 */
export function StudioCreed({ className, eyebrow = "04 · Creed" }: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const stage = root.querySelector<HTMLElement>("[data-creed-stage]");
    const breakEl = root.querySelector<HTMLElement>("[data-creed-break]");
    const meta = root.querySelector<HTMLElement>("[data-creed-meta]");
    const lines = Array.from(
      root.querySelectorAll<HTMLElement>("[data-creed-line]"),
    );

    if (!stage || lines.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set([breakEl, meta, ...lines].filter(Boolean), {
        autoAlpha: 1,
        clearProps: "y,scale",
      });
      return;
    }

    const ctx = gsap.context(() => {
      if (breakEl) gsap.set(breakEl, { autoAlpha: 0, y: -16, scale: 0.9 });
      if (meta) gsap.set(meta, { autoAlpha: 0, y: 12 });
      gsap.set(lines, { autoAlpha: 0, y: 40, scale: 0.96 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          end: "bottom 30%",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      if (breakEl) {
        tl.to(breakEl, { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, ease: "power2.out" }, 0);
      }
      if (meta) {
        tl.to(meta, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }, 0.08);
      }
      lines.forEach((el, i) => {
        tl.to(
          el,
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" },
          0.15 + i * 0.15,
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className={cn(styles.root, className)}
      aria-label="Studio Creed"
    >
      <div className={styles.stage} data-creed-stage>
        <div className={styles.breakWrap} data-creed-break>
          <UtopianBreak size="lg" className={styles.breakMark} />
        </div>

        <p className={styles.meta} data-creed-meta>
          {eyebrow}
        </p>

        <h2 className={styles.lockup}>
          <span className={styles.line} data-creed-line suppressHydrationWarning>
            POSSIBILITY × AMBITION × EXECUTION
          </span>
          <span className={styles.line} data-creed-line style={{ color: "var(--color-gold, #e8c56a)" }} suppressHydrationWarning>
            = IMPACT.
          </span>
        </h2>
      </div>
    </section>
  );
}
