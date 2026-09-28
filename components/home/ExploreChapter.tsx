"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import styles from "@/styles/home/ExploreChapter.module.css";

gsap.registerPlugin(ScrollTrigger);

const PORTALS = [
  {
    href: "/work",
    title: "Work",
    sub: "Evidence of ambition realized.",
  },
  {
    href: "/solutions",
    title: "Solutions",
    sub: "Launch. Scale. Transform.",
  },
  {
    href: "/collective",
    title: "Collective",
    sub: "Craft across India and the world.",
  },
  {
    href: "/perspective",
    title: "Perspective",
    sub: "Signal on design, software, brand.",
  },
] as const;

/**
 * Explore — creed design language.
 * Break · meta · monumental portals. No hover-menu pack, no tag pills.
 */
export function ExploreChapter() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(root.querySelectorAll("[data-explore-rise]"), {
        autoAlpha: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 78%",
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="explore"
      className={styles.root}
      aria-label="Explore"
    >
      <div className={styles.inner}>
        <div className={styles.mark} data-explore-rise>
          <UtopianBreak size="md" />
        </div>
        <p className={styles.meta} data-explore-rise>
          05 · Explore
        </p>

        <h2 className={styles.lead} data-explore-rise>
          <span className={styles.leadLine}>Where the</span>
          <span className={styles.leadLine}>practice opens.</span>
          <span className={styles.hair} aria-hidden="true" />
        </h2>

        <nav className={styles.list} aria-label="Site portals">
          {PORTALS.map((p, i) => (
            <Link
              key={p.href}
              href={p.href}
              className={styles.row}
              data-explore-rise
              data-magnetic
              data-cursor="view"
            >
              <span className={styles.num}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.word}>{p.title}</span>
              <span className={styles.sub}>{p.sub}</span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
