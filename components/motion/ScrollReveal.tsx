"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Stagger selector inside the root, e.g. "[data-reveal]" */
  childSelector?: string;
  y?: number;
  start?: string;
};

/**
 * Generic scroll reveal for post-hero sections.
 * Never mount this on HomeHero.
 */
export function ScrollReveal({
  children,
  className,
  childSelector = "[data-reveal]",
  y = 36,
  start = "top 82%",
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const targets = root.querySelectorAll(childSelector);
      if (!targets.length) {
        gsap.from(root, {
          opacity: 0,
          y,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start,
            toggleActions: "play none none none",
          },
        });
        return;
      }

      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.85,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root,
          start,
          toggleActions: "play none none none",
        },
      });
    }, root);

    return () => ctx.revert();
  }, [childSelector, y, start]);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
