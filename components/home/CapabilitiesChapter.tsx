"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import styles from "@/styles/home/CapabilitiesChapter.module.css";

gsap.registerPlugin(ScrollTrigger);

const WORLDS = [
  {
    word: "Create",
    href: "/capabilities/create",
    sub: "Brand · Design · CGI · Experience",
  },
  {
    word: "Build",
    href: "/capabilities/build",
    sub: "Web · Product · Systems · AI",
  },
  {
    word: "Grow",
    href: "/capabilities/grow",
    sub: "SEO · Campaigns · Content · Demand",
  },
] as const;

/**
 * Capabilities — creed design language.
 * Break · meta · monumental verbs · no kinetic theater, no cards.
 */
export function CapabilitiesChapter() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(root.querySelectorAll("[data-caps-rise]"), {
        autoAlpha: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.1,
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
      id="worlds"
      className={styles.root}
      aria-label="Capabilities"
    >
      <div className={styles.inner}>
        <div className={styles.mark} data-caps-rise>
          <UtopianBreak size="md" />
        </div>
        <p className={styles.meta} data-caps-rise>
          03 · Capabilities
        </p>

        <h2 className={styles.lead} data-caps-rise>
          <span className={styles.leadLine}>Create. Build.</span>
          <span className={styles.leadLine}>Grow.</span>
          <span className={styles.hair} aria-hidden="true" />
        </h2>

        <p className={styles.support} data-caps-rise>
          Three worlds. One practice.
        </p>

        <nav className={styles.list} aria-label="Capability worlds">
          {WORLDS.map((w, i) => (
            <Link
              key={w.href}
              href={w.href}
              className={styles.row}
              data-caps-rise
              data-magnetic
              data-cursor="view"
            >
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.word}>{w.word}</span>
              <span className={styles.sub}>{w.sub}</span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </nav>

        <Link
          href="/capabilities"
          className={styles.foot}
          data-caps-rise
          data-magnetic
        >
          All capabilities
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
