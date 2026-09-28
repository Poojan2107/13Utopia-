"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/HoverTilt.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  /** Max tilt degrees */
  max?: number;
};

/**
 * Animmaster hover + mouse DNA — perspective tilt toward cursor.
 * @see https://animmasterlib.dev/ (Hover Effects / Mouse Effects)
 */
export function HoverTilt({ children, className, max = 8 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(el, {
        rotateY: x * max,
        rotateX: -y * max,
        transformPerspective: 900,
        duration: 0.45,
        ease: "power2.out",
      });
      const shine = el.querySelector<HTMLElement>("[data-shine]");
      if (shine) {
        gsap.to(shine, {
          backgroundPosition: `${50 + x * 60}% ${50 + y * 60}%`,
          duration: 0.45,
          ease: "power2.out",
        });
      }
    };

    const onLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.55,
        ease: "power3.out",
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);

  return (
    <div ref={ref} className={cn(styles.root, className)} data-cursor="hover">
      {children}
      <span className={styles.shine} data-shine aria-hidden="true" />
    </div>
  );
}
