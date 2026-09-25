"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BeliefHeadline } from "./BeliefHeadline";
import styles from "@/styles/home/BrandWorldview.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * Section 02 — Belief
 * Editorial chapter with GSAP entrance + Lenis-synced resolve.
 * Hero is intentionally untouched.
 */
export function BrandWorldview() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const marker = section.querySelector(`.${styles.marker}`);
      const lines = section.querySelectorAll("[data-line]");
      const rule = section.querySelector(`.${styles.responseRule}`);
      const lead = section.querySelector(`.${styles.lead}`);
      const body = section.querySelector(`.${styles.body}`);
      const footer = section.querySelector(`.${styles.footer}`);

      gsap.set([marker, lead, body, footer].filter(Boolean), {
        opacity: 0,
        y: 28,
      });
      gsap.set(lines, { yPercent: 110 });
      if (rule) gsap.set(rule, { scaleX: 0, transformOrigin: "left center" });

      const enter = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          // Start after hero has largely left — don't fight silk
          start: "top 72%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      enter
        .to(marker, { opacity: 1, y: 0, duration: 0.55 }, 0)
        .to(
          lines,
          {
            yPercent: 0,
            duration: 0.95,
            stagger: 0.1,
            ease: "power3.out",
          },
          0.12,
        )
        .to(rule, { scaleX: 1, duration: 0.55 }, 0.45)
        .to(lead, { opacity: 1, y: 0, duration: 0.7 }, 0.52)
        .to(body, { opacity: 1, y: 0, duration: 0.7 }, 0.64)
        .to(footer, { opacity: 1, y: 0, duration: 0.65 }, 0.82);

      // Soft parallax on atmosphere — soul without noise
      const atmosphere = section.querySelector(`.${styles.atmosphere}`);
      if (atmosphere) {
        gsap.fromTo(
          atmosphere,
          { opacity: 0.35 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="worldview"
      className={styles.wrap}
      aria-labelledby="worldview-title"
    >
      <div className={styles.atmosphere} aria-hidden="true" />

      <div className={styles.spread}>
        <div className={styles.frame}>
          <header className={styles.marker}>
            <span className={styles.index}>02</span>
            <span className={styles.markerRule} aria-hidden="true" />
            <span className={styles.markerLabel}>Belief</span>
          </header>

          <div className={styles.columns}>
            <div className={styles.left}>
              <BeliefHeadline />
            </div>

            <div className={styles.right}>
              <span className={styles.responseRule} aria-hidden="true" />
              <p className={styles.lead}>
                Most businesses don&rsquo;t need another obvious answer.
              </p>
              <p className={styles.body}>
                We question what already works, find what doesn&rsquo;t, and build
                what comes next.
              </p>
            </div>
          </div>

          <footer className={styles.footer}>
            <p className={styles.footerNote}>What follows is how we work.</p>
            <Link href="#worlds" className={styles.footerLink}>
              Create · Build · Grow
              <span aria-hidden="true"> →</span>
            </Link>
          </footer>
        </div>
      </div>
    </section>
  );
}
