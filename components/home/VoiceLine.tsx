"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import styles from "@/styles/home/VoiceLine.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  quote?: string;
  attribution?: string;
  role?: string;
  company?: string;
  eyebrow?: string;
  metric?: string;
  metricLabel?: string;
};

/**
 * VoiceLine — Sleek luxury client proof monolith with metric highlights.
 */
export function VoiceLine({
  quote = "13 UTOPIA didn’t just rebuild our digital presence — they gave us the brand authority and high-conversion systems to dominate our category.",
  attribution = "Rahul Sharma",
  role = "Marketing Director",
  company = "Elite Sports Gear",
  eyebrow = "08 · Verified Impact",
  metric = "+240%",
  metricLabel = "Traffic & Conversion Growth",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        root.querySelectorAll("[data-voice-fade]"),
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 78%",
            once: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className={styles.root} aria-label="Client review">
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.card} data-voice-fade>
        <div className={styles.cardGlow} aria-hidden="true" />
        
        <header className={styles.cardHeader}>
          <div className={styles.eyebrowRow}>
            <UtopianBreak size="sm" className={styles.break} />
            <p className={styles.eyebrow}>{eyebrow}</p>
          </div>

          <div className={styles.metricPill}>
            <span className={styles.metricVal}>{metric}</span>
            <span className={styles.metricDesc}>{metricLabel}</span>
          </div>
        </header>

        <div className={styles.quoteWrap}>
          <span className={styles.quoteMark} aria-hidden="true">“</span>
          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>{quote}</p>
          </blockquote>
        </div>

        <footer className={styles.cardFooter}>
          <div className={styles.authorGroup}>
            <div className={styles.avatarRing}>
              <span className={styles.avatarInitials}>
                {attribution.charAt(0)}
              </span>
            </div>
            <div className={styles.authorDetails}>
              <div className={styles.nameRow}>
                <cite className={styles.authorName}>{attribution}</cite>
                <span className={styles.verifiedBadge}>Verified Partner</span>
              </div>
              <p className={styles.authorRole}>
                {role} · <span className={styles.companyName}>{company}</span>
              </p>
            </div>
          </div>

          <Link
            href="/work/elite-sports-gear"
            className={styles.caseLink}
            data-magnetic
          >
            Inspect Case Story
            <span aria-hidden="true"> →</span>
          </Link>
        </footer>
      </div>
    </section>
  );
}
