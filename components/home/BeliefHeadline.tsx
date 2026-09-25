"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home/BrandWorldview.module.css";

gsap.registerPlugin(ScrollTrigger);

const ENDINGS = ["right", "only", "true"] as const;

/**
 * Headline lines + scrubbed gold resolve — driven by ScrollTrigger
 * so it stays in sync with Lenis.
 */
export function BeliefHeadline() {
  const rootRef = useRef<HTMLHeadingElement | null>(null);
  const [index, setIndex] = useState(0);
  const reduceRef = useRef(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    reduceRef.current = reduce;
    if (reduce) {
      setIndex(ENDINGS.length - 1);
      return;
    }

    const section = el.closest("section");
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const next = Math.min(
            ENDINGS.length - 1,
            Math.floor(self.progress * ENDINGS.length),
          );
          setIndex(next);
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const ending = ENDINGS[index];

  useEffect(() => {
    if (reduceRef.current) return;
    const el = rootRef.current?.querySelector(`.${styles.swap}`);
    if (!el) return;
    gsap.fromTo(
      el,
      { y: "0.35em", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
    );
  }, [index]);

  return (
    <h2
      ref={rootRef}
      id="worldview-title"
      className={styles.title}
      aria-label={`The obvious answer isn't always the ${ending} one.`}
    >
      <span className={styles.lineMask}>
        <span className={`${styles.titleLine} ${styles.lineInner}`} data-line>
          The obvious
        </span>
      </span>
      <span className={styles.lineMask}>
        <span className={`${styles.titleLine} ${styles.lineInner}`} data-line>
          answer isn&rsquo;t
        </span>
      </span>
      <span className={styles.lineMask}>
        <span className={`${styles.titleLine} ${styles.lineInner}`} data-line>
          always
        </span>
      </span>
      <span className={styles.lineMask}>
        <span
          className={`${styles.titleResolve} ${styles.lineInner}`}
          data-line
        >
          the{" "}
          <span className={styles.swap} key={ending} aria-live="polite">
            {ending}
          </span>
          &nbsp;one.
        </span>
      </span>
    </h2>
  );
}
