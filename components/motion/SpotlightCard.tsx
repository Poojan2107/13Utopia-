"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/SpotlightCard.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Animmaster mouse effect — gold spotlight follows cursor inside the card.
 * @see https://animmasterlib.dev/ (Mouse Effects)
 */
export function SpotlightCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const spot = el.querySelector<HTMLElement>("[data-spot]");
    if (!spot) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(spot, {
        x,
        y,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(spot, { opacity: 0, duration: 0.35 });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className={cn(styles.root, className)} data-cursor="hover">
      <span className={styles.spot} data-spot aria-hidden="true" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
