"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextRoll } from "@/components/motion/TextRoll";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/AccordionRail.module.css";

gsap.registerPlugin(ScrollTrigger);

export type AccordionItem = {
  title: string;
  body: string;
  meta?: string;
};

type Props = {
  items: AccordionItem[];
  eyebrow?: string;
  lead?: string;
  className?: string;
};

/**
 * Method accordion — Scroll 070 FAQ DNA: scroll advances open panel;
 * click still works for precise control.
 */
export function AccordionRail({
  items,
  eyebrow = "Method",
  lead,
  className,
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 700px)").matches) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root,
        start: "top 55%",
        end: "bottom 45%",
        scrub: true,
        onUpdate: (self) => {
          const next = Math.min(
            items.length - 1,
            Math.floor(self.progress * items.length),
          );
          setOpen(next);
        },
      });
    }, root);

    return () => ctx.revert();
  }, [items.length]);

  return (
    <section
      ref={rootRef}
      className={cn(styles.root, className)}
      aria-label={eyebrow}
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </header>

      <ul className={styles.list}>
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li
              key={item.title}
              className={cn(styles.item, isOpen && styles.itemOpen)}
            >
              <button
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                onClick={() => setOpen(i)}
                data-magnetic
              >
                <span className={styles.num}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.title}>
                  {isOpen ? <TextRoll>{item.title}</TextRoll> : item.title}
                </span>
                {item.meta ? (
                  <span className={styles.meta}>{item.meta}</span>
                ) : null}
                <span className={styles.mark} aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                className={cn(styles.panel, isOpen && styles.panelOpen)}
                aria-hidden={!isOpen}
              >
                <p className={styles.body}>{item.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
