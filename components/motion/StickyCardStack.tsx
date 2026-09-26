"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { TextRoll } from "@/components/motion/TextRoll";
import styles from "@/styles/motion/StickyCardStack.module.css";

gsap.registerPlugin(ScrollTrigger);

export type StickyCard = {
  title: string;
  body?: string;
  meta?: string;
  href?: string;
  need: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
};

type Props = {
  cards: StickyCard[];
  eyebrow?: string;
  /** Add rotation like skiper17 (default true) */
  rotate?: boolean;
};

/**
 * Skiper16 + 17 spirit — sticky card stack, scale + optional rotate on scroll.
 * GSAP + Lenis (existing), not framer-motion.
 */
export function StickyCardStack({
  cards,
  eyebrow = "Stack",
  rotate = true,
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || cards.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-card]"),
      );

      items.forEach((card, i) => {
        const targetScale = Math.max(0.72, 1 - (items.length - i - 1) * 0.08);
        const rot = rotate ? (i % 2 === 0 ? -2.4 : 2.4) : 0;

        gsap.fromTo(
          card,
          { scale: 1, rotate: 0 },
          {
            scale: targetScale,
            rotate: rot,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 12%",
              end: "bottom top",
              scrub: 0.85,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, [cards, rotate]);

  return (
    <section ref={rootRef} className={styles.root} aria-label={eyebrow}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <div className={styles.stack}>
        {cards.map((card, i) => {
          const inner = (
            <>
              <div className={styles.media}>
                <MediaPlaceholder
                  aspect="wide"
                  tone={card.tone ?? "warm"}
                  need={card.need}
                  fill
                />
              </div>
              <div className={styles.copy}>
                <span className={styles.num}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {card.meta ? <p className={styles.meta}>{card.meta}</p> : null}
                <h3 className={styles.title}>
                  <TextRoll>{card.title}</TextRoll>
                </h3>
                {card.body ? <p className={styles.body}>{card.body}</p> : null}
              </div>
            </>
          );

          return (
            <article
              key={card.need}
              className={styles.card}
              data-card
              style={{ zIndex: i + 1, top: `calc(6rem + ${i * 0.65}rem)` }}
            >
              {card.href ? (
                <Link href={card.href} className={styles.cardLink}>
                  {inner}
                </Link>
              ) : (
                <div className={styles.cardLink}>{inner}</div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
