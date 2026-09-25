"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/home/BrandWorldview.module.css";

const ENDINGS = ["right", "only", "true"] as const;

/**
 * Scroll-resolved headline — the final word shifts as the chapter holds.
 * Always keeps “the ___ one.” on a single line.
 */
export function BeliefHeadline() {
  const rootRef = useRef<HTMLHeadingElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onScroll = () => {
      const section = el.closest("section");
      if (!section) return;

      const sRect = section.getBoundingClientRect();
      const total = sRect.height - window.innerHeight;
      if (total <= 0) {
        setIndex(0);
        return;
      }

      const progressed = Math.min(1, Math.max(0, -sRect.top / total));
      const next = Math.min(ENDINGS.length - 1, Math.floor(progressed * ENDINGS.length));
      setIndex(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const ending = ENDINGS[index];

  return (
    <h2
      ref={rootRef}
      id="worldview-title"
      className={styles.title}
      aria-label={`The obvious answer isn't always the ${ending} one.`}
    >
      <span className={styles.titleLine}>The obvious</span>
      <span className={styles.titleLine}>answer isn&rsquo;t</span>
      <span className={styles.titleLine}>always</span>
      <span className={styles.titleResolve}>
        the{" "}
        <span className={styles.swap} key={ending} aria-live="polite">
          {ending}
        </span>
        &nbsp;one.
      </span>
    </h2>
  );
}
