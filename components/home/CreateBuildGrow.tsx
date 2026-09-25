"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home/CreateBuildGrow.module.css";

gsap.registerPlugin(ScrollTrigger);

const WORLDS = [
  {
    slug: "create",
    num: "01",
    title: "Create",
    verb: "What should exist.",
    body: "Brand. Design. Experience. How a business is understood before it is sold — and felt before it is explained.",
  },
  {
    slug: "build",
    num: "02",
    title: "Build",
    verb: "What does not exist yet.",
    body: "Products. Technology. AI. Systems. Engineering that has to work on day one — not decorate a deck.",
  },
  {
    slug: "grow",
    num: "03",
    title: "Grow",
    verb: "What you have made.",
    body: "Marketing. Performance. SEO. Content. Attention turned into momentum — momentum into market.",
  },
] as const;

/**
 * 03 — Worlds
 * Immersive sticky chapter. Scroll enters each world.
 */
export function CreateBuildGrow() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 900px)").matches;
    if (reduce || mobile) {
      // Show all / first panel accessible without scrub
      const first = wrap.querySelector<HTMLElement>("[data-world]");
      if (first) gsap.set(first, { autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const first = wrap.querySelector<HTMLElement>(
        `[data-world="${WORLDS[0].slug}"]`,
      );
      if (first) gsap.set(first, { autoAlpha: 1 });

      const bar = wrap.querySelector(`.${styles.progressFill}`);
      if (bar) {
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          },
        );
      }

      ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const next = Math.min(
            WORLDS.length - 1,
            Math.floor(self.progress * WORLDS.length),
          );
          if (next !== activeRef.current) {
            activeRef.current = next;
            setActive(next);
          }
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(max-width: 900px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const panel = wrap.querySelector<HTMLElement>(
      `[data-world="${WORLDS[active].slug}"]`,
    );
    if (!panel) return;

    const others = wrap.querySelectorAll<HTMLElement>("[data-world]");
    others.forEach((p) => {
      if (p !== panel) gsap.to(p, { autoAlpha: 0, duration: 0.3 });
    });

    const title = panel.querySelector("[data-world-title]");
    const rest = panel.querySelectorAll("[data-world-in]");

    gsap.to(panel, { autoAlpha: 1, duration: 0.4 });
    gsap.fromTo(
      title,
      { yPercent: 30, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    );
    gsap.fromTo(
      rest,
      { y: 18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.07,
        ease: "power3.out",
        delay: 0.1,
      },
    );
  }, [active]);

  return (
    <section
      ref={wrapRef}
      id="worlds"
      className={styles.wrap}
      aria-label="Create, Build, and Grow"
    >
      <div className={styles.pin}>
        <div className={styles.stage}>
          <header className={styles.top}>
            <div className={styles.marker}>
              <span className={styles.markerIndex}>03</span>
              <span className={styles.markerRule} aria-hidden="true" />
              <span className={styles.markerLabel}>Worlds</span>
            </div>
            <p className={styles.eyebrow}>One practice. Three expressions.</p>
          </header>

          <div className={styles.viewport}>
            {WORLDS.map((w, i) => (
              <article
                key={w.slug}
                className={styles.panel}
                data-world={w.slug}
                aria-hidden={i !== active}
              >
                <p className={styles.num} data-world-in>
                  {w.num}
                </p>
                <h2 className={styles.title} data-world-title>
                  {w.title}
                </h2>
                <p className={styles.verb} data-world-in>
                  {w.verb}
                </p>
                <p className={styles.body} data-world-in>
                  {w.body}
                </p>
                <Link
                  href={`/capabilities/${w.slug}`}
                  className={styles.link}
                  data-world-in
                  tabIndex={i === active ? 0 : -1}
                >
                  Enter {w.title}
                  <span aria-hidden="true"> →</span>
                </Link>
              </article>
            ))}
          </div>

          <div className={styles.progress} aria-hidden="true">
            <span className={styles.progressFill} />
          </div>

          <div className={styles.mobileStack}>
            {WORLDS.map((w) => (
              <article key={w.slug} className={styles.mobileCard}>
                <p className={styles.num}>{w.num}</p>
                <h2 className={styles.title}>{w.title}</h2>
                <p className={styles.verb}>{w.verb}</p>
                <p className={styles.body}>{w.body}</p>
                <Link href={`/capabilities/${w.slug}`} className={styles.link}>
                  Enter {w.title}
                  <span aria-hidden="true"> →</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
