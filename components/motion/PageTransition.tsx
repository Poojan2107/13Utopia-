"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import styles from "@/styles/motion/PageTransition.module.css";

/**
 * Page change — clip-path block + gold edge (Transitions 003 / 012 DNA).
 * Soft on purpose: no heavy multi-panel curtain.
 */
export function PageTransition() {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const first = useRef(true);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const veil = el.querySelector<HTMLElement>("[data-veil]");
    const block = el.querySelector<HTMLElement>("[data-block]");
    const edge = el.querySelector<HTMLElement>("[data-edge]");
    if (!veil || !block || !edge) return;

    if (first.current) {
      first.current = false;
      gsap.set(el, { autoAlpha: 0 });
      gsap.set([veil, block], { opacity: 0 });
      gsap.set(block, { clipPath: "inset(50% 0 50% 0)" });
      gsap.set(edge, { scaleX: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.set(el, { autoAlpha: 1 })
      .fromTo(veil, { opacity: 0 }, { opacity: 1, duration: 0.22 }, 0)
      .fromTo(
        block,
        { opacity: 1, clipPath: "inset(50% 0 50% 0)" },
        { clipPath: "inset(0% 0 0% 0)", duration: 0.34 },
        0.04,
      )
      .fromTo(
        edge,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.28 },
        0.12,
      )
      .to(edge, { scaleX: 0, transformOrigin: "right center", duration: 0.26 }, 0.4)
      .to(
        block,
        { clipPath: "inset(0% 0 100% 0)", duration: 0.32 },
        0.42,
      )
      .to(veil, { opacity: 0, duration: 0.28 }, 0.5)
      .set(el, { autoAlpha: 0 });
  }, [pathname]);

  return (
    <div ref={rootRef} className={styles.root} aria-hidden="true">
      <div className={styles.veil} data-veil />
      <div className={styles.block} data-block />
      <div className={styles.edge} data-edge />
    </div>
  );
}
