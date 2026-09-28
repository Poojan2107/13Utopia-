"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home/VoiceLine.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  quote: string;
  attribution: string;
  role: string;
  company: string;
};

/**
 * Editorial client quote monolith with gold flourish and verification stamp.
 */
export function VoiceLine({ quote, attribution, role, company }: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        root.querySelectorAll("[data-voice-fade]"),
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <aside ref={rootRef} className={styles.wrap} aria-label="Client voice">
      <div className={styles.ambientGlow} aria-hidden="true" />
      
      <div className={styles.mark} data-voice-fade aria-hidden="true">
        “
      </div>

      <p className={styles.kicker} data-voice-fade>
        Client Perspective
      </p>

      <blockquote className={styles.quote} data-voice-fade>
        <p className={styles.quoteText}>“{quote}”</p>
        <footer className={styles.attr}>
          <div className={styles.avatarPill}>
            <span className={styles.avatarInitial}>
              {attribution.charAt(0)}
            </span>
            <cite className={styles.author}>{attribution}</cite>
          </div>
          <span className={styles.role}>
            {role} — <span className={styles.company}>{company}</span>
          </span>
        </footer>
      </blockquote>

      <Link href="/work" className={styles.link} data-voice-fade data-magnetic>
        Explore client records
        <span aria-hidden="true"> →</span>
      </Link>
    </aside>
  );
}
