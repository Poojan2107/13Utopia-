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
    index: "01",
    title: "Create",
    line: "What should exist.",
    body: "Brand, design, and experience — how a business is understood, expressed, and felt before a single feature ships.",
  },
  {
    slug: "build",
    index: "02",
    title: "Build",
    line: "What does not exist yet.",
    body: "Products, technology, AI, and systems engineered to work — not to decorate a deck.",
  },
  {
    slug: "grow",
    index: "03",
    title: "Grow",
    line: "What you have made.",
    body: "Marketing, performance, SEO, and content that turn attention into momentum — and momentum into market.",
  },
] as const;

/**
 * 03 — Worlds
 * One practice. Three expressions. Pinned chapter scrub.
 */
export function CreateBuildGrow() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 900px)").matches) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const next = Math.min(
            WORLDS.length - 1,
            Math.floor(self.progress * WORLDS.length),
          );
          setActive(next);
        },
      });

      gsap.from(wrap.querySelector(`.${styles.stage}`), {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrap,
          start: "top 70%",
          once: true,
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  const world = WORLDS[active];

  return (
    <section
      ref={wrapRef}
      id="worlds"
      className={styles.wrap}
      aria-labelledby="cbg-title"
    >
      <div className={styles.pin}>
        <div className={styles.stage}>
          <header className={styles.marker}>
            <span className={styles.index}>03</span>
            <span className={styles.markerRule} aria-hidden="true" />
            <span className={styles.markerLabel}>Worlds</span>
          </header>

          <div className={styles.intro}>
            <h2 id="cbg-title" className={styles.heading}>
              Three worlds.
              <br />
              <span className={styles.headingSoft}>One practice.</span>
            </h2>
            <p className={styles.lede}>
              Brand, technology, and growth are not three vendors. They are how
              ambition becomes real.
            </p>
          </div>

          <div className={styles.board}>
            <nav className={styles.tabs} aria-label="Worlds">
              {WORLDS.map((w, i) => (
                <button
                  key={w.slug}
                  type="button"
                  className={i === active ? styles.tabActive : styles.tab}
                  onClick={() => setActive(i)}
                  aria-current={i === active ? "true" : undefined}
                >
                  <span className={styles.tabIndex}>{w.index}</span>
                  <span className={styles.tabTitle}>{w.title}</span>
                </button>
              ))}
            </nav>

            <div className={styles.panel} key={world.slug}>
              <p className={styles.panelLine}>{world.line}</p>
              <p className={styles.panelBody}>{world.body}</p>
              <Link
                href={`/capabilities/${world.slug}`}
                className={styles.panelLink}
              >
                Explore {world.title}
                <span aria-hidden="true"> →</span>
              </Link>
            </div>
          </div>

          <div className={styles.progress} aria-hidden="true">
            {WORLDS.map((w, i) => (
              <span
                key={w.slug}
                className={i === active ? styles.dotActive : styles.dot}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
