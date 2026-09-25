"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home/FinalCTA.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * 06 — Close
 * Manifesto invitation. End on worldview, not SaaS theater.
 */
export function FinalCTA() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-reveal]"), {
        opacity: 0,
        y: 40,
        duration: 0.95,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
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

      <div className={styles.inner}>
        <header className={styles.marker} data-reveal>
          <span className={styles.index}>06</span>
          <span className={styles.markerRule} aria-hidden="true" />
          <span className={styles.markerLabel}>Next</span>
        </header>

        <p className={styles.mantra} data-reveal>
          BE UNREAL.
          <br />
          BE UNREASONABLE.
        </p>

        <h2 id="final-cta-title" className={styles.title} data-reveal>
          What are you trying
          <br />
          to make happen?
        </h2>

        <p className={styles.lead} data-reveal>
          Tell us the problem. We&rsquo;ll help determine what should be created,
          built, and grown — beyond the obvious answer.
        </p>

        <div className={styles.actions} data-reveal>
          <Link href="/connect/start-a-project" className={styles.primary}>
            Start a Project
            <span aria-hidden="true"> →</span>
          </Link>
          <Link href="/connect/discovery" className={styles.secondary}>
            Schedule a Discovery
          </Link>
        </div>
      </div>
    </section>
  );
}
