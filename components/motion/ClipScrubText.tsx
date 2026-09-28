"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/ClipScrubText.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  id?: string;
};

/**
 * Animmaster Scroll Animation / 61 DNA — clip scrub reveal on scroll.
 * @see animmaster/_lab/Scroll-Animation-61
 */
export function ClipScrubText({
  children,
  className,
  as: Tag = "h2",
  id,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.setProperty("--clip-value", "72%");

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        end: "center 35%",
        scrub: 0.85,
        onUpdate: (self) => {
          const clip = Math.max(0, 72 - self.progress * 72);
          el.style.setProperty("--clip-value", `${clip}%`);
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={cn(styles.root, className)}
      data-text={children}
    >
      <span className={styles.base} aria-hidden="true">
        {children}
      </span>
      <span className={styles.fill}>{children}</span>
    </Tag>
  );
}
