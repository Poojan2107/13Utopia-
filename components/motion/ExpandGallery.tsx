"use client";

import { useState } from "react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { TextRoll } from "@/components/motion/TextRoll";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/ExpandGallery.module.css";

export type ExpandItem = {
  title: string;
  code?: string;
  need: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
};

type Props = {
  items: ExpandItem[];
  eyebrow?: string;
  className?: string;
};

/**
 * Skiper52 ExpandOnHover — horizontal flex expand gallery.
 * CSS-driven; MediaPlaceholder until real assets land.
 */
export function ExpandGallery({
  items,
  eyebrow = "Gallery",
  className,
}: Props) {
  const [active, setActive] = useState(0);

  return (
    <section className={cn(styles.root, className)} aria-label={eyebrow}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <div className={styles.row}>
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.need}
              type="button"
              className={cn(styles.panel, isActive && styles.panelActive)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-pressed={isActive}
            >
              <div className={styles.media}>
                <MediaPlaceholder
                  aspect="portrait"
                  tone={item.tone ?? "warm"}
                  need={item.need}
                  fill
                />
              </div>
              <div className={styles.meta}>
                <span className={styles.code}>
                  {item.code ?? `# ${String(i + 1).padStart(2, "0")}`}
                </span>
                <span className={styles.title}>
                  {isActive ? <TextRoll>{item.title}</TextRoll> : item.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
