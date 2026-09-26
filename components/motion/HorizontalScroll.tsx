"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { TextRoll } from "@/components/motion/TextRoll";
import styles from "@/styles/motion/HorizontalScroll.module.css";

gsap.registerPlugin(ScrollTrigger);

export type HorizPanel = {
  title: string;
  meta?: string;
  href?: string;
  need: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
};

type Props = {
  panels: HorizPanel[];
  eyebrow?: string;
  lead?: string;
};

/**
 * Animmaster scroll animation — pinned horizontal chapter.
 */
export function HorizontalScroll({
  panels,
  eyebrow = "Across",
  lead,
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track || panels.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 800px)").matches) return;

    const ctx = gsap.context(() => {
      const total = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: () => -Math.max(0, total),
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${Math.max(total, window.innerHeight)}`,
          pin: true,
          scrub: 0.85,
          invalidateOnRefresh: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [panels]);

  return (
    <section ref={rootRef} className={styles.root} aria-label={eyebrow}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </div>
      <div ref={trackRef} className={styles.track}>
        {panels.map((panel, i) => {
          const body = (
            <>
              <div className={styles.media}>
                <MediaPlaceholder
                  aspect="portrait"
                  tone={panel.tone ?? "warm"}
                  need={panel.need}
                  fill
                />
              </div>
              <div className={styles.copy}>
                <span className={styles.num}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {panel.meta ? <p className={styles.meta}>{panel.meta}</p> : null}
                <h3 className={styles.title}>
                  <TextRoll>{panel.title}</TextRoll>
                </h3>
              </div>
            </>
          );

          return (
            <article key={panel.need} className={styles.panel}>
              {panel.href ? (
                <Link href={panel.href} className={styles.panelLink} data-magnetic>
                  {body}
                </Link>
              ) : (
                <div className={styles.panelLink}>{body}</div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
