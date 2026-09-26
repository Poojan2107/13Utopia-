"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home/FinalCTA.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * 09 — Close
 * Manifesto gravity. The ask after the worldview.
 */
export function FinalCTA() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const lines = el.querySelectorAll("[data-rise]");
      gsap.from(lines, {
        yPercent: 120,
        duration: 1.1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(el.querySelectorAll("[data-fade]"), {
        opacity: 0,
        y: 28,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.35,
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="close"
      className={styles.wrap}
      aria-labelledby="final-cta-title"
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.silkHint} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={styles.marker} data-fade>
          <span className={styles.markerIndex}>09</span>
          <span className={styles.markerRule} aria-hidden="true" />
          <span className={styles.markerLabel}>Begin</span>
        </header>

        <p className={styles.mantra} data-fade>
          <span>BE UNREAL.</span>
          <span>BE UNREASONABLE.</span>
        </p>

        <h2 id="final-cta-title" className={styles.title}>
          <span className={styles.mask}>
            <span data-rise>What are you</span>
          </span>
          <span className={styles.mask}>
            <span data-rise>trying to make</span>
          </span>
          <span className={styles.mask}>
            <span data-rise>happen?</span>
          </span>
        </h2>

        <p className={styles.lead} data-fade>
          Bring the problem. We&rsquo;ll question the obvious — then create,
          build, and grow what comes next.
        </p>

        <div className={styles.actions} data-fade>
          <Link href="/connect/start-a-project" className={styles.primary}>
            Start a Project
            <span aria-hidden="true"> →</span>
          </Link>
          <Link href="/connect/discovery" className={styles.secondary}>
            Discovery
          </Link>
        </div>
      </div>
    </section>
  );
}
