"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home/FeaturedWork.module.css";

gsap.registerPlugin(ScrollTrigger);

const STORIES = [
  {
    world: "Create",
    index: "01",
    title: "Seen before sold.",
    line: "Identity that makes ambition legible.",
    body: "When a category challenger needs the market to feel them before they understand them — brand, narrative, and experience become the first product.",
  },
  {
    world: "Build",
    index: "02",
    title: "Real on day one.",
    line: "Systems over spectacle.",
    body: "When the brief demands a product that works under pressure — interfaces, infrastructure, and intelligence engineered for use, not applause.",
  },
  {
    world: "Grow",
    index: "03",
    title: "Momentum that holds.",
    line: "Attention into market.",
    body: "When growth cannot be a campaign that expires — performance, SEO, and content built as a machine that compounds.",
  },
] as const;

/**
 * 04 — Proof
 * Cinematic narrative strips. No apology. No fake clients.
 * Proof as how 13 Utopia thinks in public.
 */
export function FeaturedWork() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const strips = el.querySelectorAll("[data-strip]");
      strips.forEach((strip) => {
        const media = strip.querySelector("[data-strip-media]");
        const copy = strip.querySelectorAll("[data-strip-copy]");

        gsap.from(copy, {
          opacity: 0,
          y: 48,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: strip,
            start: "top 75%",
            once: true,
          },
        });

        if (media) {
          gsap.fromTo(
            media,
            { scale: 1.12, opacity: 0.35 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: strip,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="proof"
      className={styles.wrap}
      aria-labelledby="work-title"
    >
      <div className={styles.inner}>
        <header className={styles.head}>
          <div className={styles.marker}>
            <span className={styles.markerIndex}>04</span>
            <span className={styles.markerRule} aria-hidden="true" />
            <span className={styles.markerLabel}>Proof</span>
          </div>
          <h2 id="work-title" className={styles.heading}>
            How ambition
            <br />
            becomes evidence.
          </h2>
        </header>
      </div>

      <ul className={styles.strips}>
        {STORIES.map((s, i) => (
          <li
            key={s.index}
            className={i % 2 === 1 ? styles.stripAlt : styles.strip}
            data-strip
          >
            <div className={styles.stripMedia} data-strip-media aria-hidden="true">
              <span className={styles.stripGlow} />
              <span className={styles.stripWorld}>{s.world}</span>
            </div>
            <div className={styles.stripCopy}>
              <p className={styles.stripIndex} data-strip-copy>
                {s.index}
              </p>
              <h3 className={styles.stripTitle} data-strip-copy>
                {s.title}
              </h3>
              <p className={styles.stripLine} data-strip-copy>
                {s.line}
              </p>
              <p className={styles.stripBody} data-strip-copy>
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.inner}>
        <Link href="/work" className={styles.all}>
          Enter the work
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
