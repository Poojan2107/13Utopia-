"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { TextRoll } from "@/components/motion/TextRoll";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/StaggerGrid.module.css";

gsap.registerPlugin(ScrollTrigger);

export type GridCell = {
  title: string;
  body?: string;
  href?: string;
  need: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
};

type Props = {
  cells: GridCell[];
  eyebrow?: string;
  className?: string;
};

/**
 * Animmaster grid animation — staggered clip / rise reveal.
 */
export function StaggerGrid({ cells, eyebrow = "Grid", className }: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const items = root.querySelectorAll("[data-cell]");
      gsap.from(items, {
        y: 64,
        opacity: 0,
        clipPath: "inset(18% 8% 18% 8%)",
        duration: 1,
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
  }, [cells]);

  return (
    <section
      ref={rootRef}
      className={cn(styles.root, className)}
      aria-label={eyebrow}
    >
      <p className={styles.eyebrow}>{eyebrow}</p>
      <ul className={styles.grid}>
        {cells.map((cell) => {
          const inner = (
            <>
              <div className={styles.media}>
                <MediaPlaceholder
                  aspect="square"
                  tone={cell.tone ?? "warm"}
                  need={cell.need}
                  fill
                />
              </div>
              <div className={styles.copy}>
                <h3 className={styles.title}>
                  <TextRoll>{cell.title}</TextRoll>
                </h3>
                {cell.body ? <p className={styles.body}>{cell.body}</p> : null}
              </div>
            </>
          );

          return (
            <li key={cell.need} className={styles.cell} data-cell>
              {cell.href ? (
                <Link href={cell.href} className={styles.link} data-cursor="hover">
                  {inner}
                </Link>
              ) : (
                <div className={styles.link}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
