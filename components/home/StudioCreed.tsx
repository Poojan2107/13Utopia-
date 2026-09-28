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
};

/**
 * Studio Creed — brand design language (1:3 Word System).
 * Utopian Break · gold meta · monumental Didone · hairline.
 */
export function StudioCreed({ className }: Props) {
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
    const hair = root.querySelector<HTMLElement>("[data-creed-hair]");

    if (!stage || lines.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set([breakEl, meta, hair, ...lines].filter(Boolean), {
        autoAlpha: 1,
        clearProps: "y,scaleX",
      });
      return;
    }

    const ctx = gsap.context(() => {
      if (breakEl) gsap.set(breakEl, { autoAlpha: 0, y: -12 });
      if (meta) gsap.set(meta, { autoAlpha: 0, y: 10 });
      gsap.set(lines, { autoAlpha: 0, y: 36 });
      if (hair) gsap.set(hair, { scaleX: 0, autoAlpha: 0.9 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * 2.4)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      if (breakEl) tl.to(breakEl, { autoAlpha: 1, y: 0, duration: 0.4 }, 0);
      if (meta) tl.to(meta, { autoAlpha: 1, y: 0, duration: 0.45 }, 0.15);
      lines.forEach((el, i) => {
        tl.to(el, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.35 + i * 0.18);
      });
      if (hair) tl.to(hair, { scaleX: 1, autoAlpha: 1, duration: 0.8 }, 0.55);
      tl.to({}, { duration: 0.7 });
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 180);

    return () => {
      window.clearTimeout(t);
      ctx.revert();
    };
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
          01 · Creed
        </p>

        <h2 className={styles.lockup}>
          <span className={styles.line} data-creed-line>
            Be unreal. Be. Be
          </span>
          <span className={styles.line} data-creed-line>
            unreasonable.
          </span>
          <span className={styles.hair} data-creed-hair aria-hidden="true" />
        </h2>
      </div>
    </section>
  );
}
