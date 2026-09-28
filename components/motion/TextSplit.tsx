"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/TextSplit.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** word | char — Animmaster text animation family */
  mode?: "word" | "char";
  once?: boolean;
  id?: string;
};

/**
 * Animmaster text animation DNA — words/chars rise on scroll.
 * @see https://animmasterlib.dev/ (Text Animations)
 */
export function TextSplit({
  children,
  className,
  as: Tag = "h2",
  mode = "word",
  once = true,
  id,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const units = el.querySelectorAll<HTMLElement>("[data-unit]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        units,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          stagger: mode === "char" ? 0.018 : 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [children, mode, once]);

  const parts =
    mode === "char"
      ? Array.from(children)
      : children.split(/(\s+)/).filter(Boolean);

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={cn(styles.root, className)}
      aria-label={children}
    >
      {parts.map((part, i) => {
        if (mode === "word" && /^\s+$/.test(part)) {
          return <span key={`sp-${i}`}> </span>;
        }
        return (
          <span key={i} className={styles.mask}>
            <span className={styles.unit} data-unit>
              {part === " " ? "\u00A0" : part}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
