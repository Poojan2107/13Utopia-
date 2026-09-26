"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import styles from "@/styles/motion/PageTransition.module.css";

/**
 * Animmaster-class page transition — gold-edge curtain wipe on route change.
 */
export function PageTransition() {
  const pathname = usePathname();
  const curtainRef = useRef<HTMLDivElement | null>(null);
  const first = useRef(true);

  useEffect(() => {
    const el = curtainRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (first.current) {
      first.current = false;
      gsap.set(el, { yPercent: -101 });
      return;
    }

    const panels = el.querySelectorAll("[data-panel]");
    const mark = el.querySelector("[data-mark]");

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
    });

    tl.set(el, { autoAlpha: 1, yPercent: 0 })
      .fromTo(
        panels,
        { yPercent: 101 },
        { yPercent: 0, duration: 0.55, stagger: 0.05 },
        0,
      )
      .fromTo(
        mark,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35 },
        0.25,
      )
      .to(mark, { opacity: 0, duration: 0.2 }, 0.55)
      .to(
        panels,
        { yPercent: -101, duration: 0.55, stagger: 0.04 },
        0.5,
      )
      .set(el, { autoAlpha: 0 });
  }, [pathname]);

  return (
    <div
      ref={curtainRef}
      className={styles.curtain}
      aria-hidden="true"
    >
      <div className={styles.panel} data-panel />
      <div className={`${styles.panel} ${styles.panelGold}`} data-panel />
      <div className={styles.panel} data-panel />
      <p className={styles.mark} data-mark>
        13 UTOPIA
      </p>
    </div>
  );
}
