"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/PageReveal.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Stagger children marked with data-reveal */
  stagger?: boolean;
  y?: number;
  start?: string;
};

/**
 * Premium page-body reveal. Use once per page region (not on HomeHero).
 */
export function PageReveal({
  children,
  className,
  stagger = true,
  y = 28,
  start = "top 84%",
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const items = root.querySelectorAll("[data-reveal]");
      if (stagger && items.length) {
        gsap.from(items, {
          opacity: 0,
          y: 16,
          duration: 0.55,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            once: true,
          },
        });
        return;
      }

      gsap.from(root, {
        opacity: 0,
        y: 16,
        duration: 0.55,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [stagger, y, start]);

  return (
    <div ref={rootRef} className={cn(styles.root, className)}>
      {children}
    </div>
  );
}
