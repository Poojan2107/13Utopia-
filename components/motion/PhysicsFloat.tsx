"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/PhysicsFloat.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  /** Amplitude in px */
  amp?: number;
  /** Cycle seconds */
  duration?: number;
};

/**
 * Animmaster physics-effects DNA — light float / bob (no full sim).
 * @see https://animmasterlib.dev/ (Physics Effects)
 */
export function PhysicsFloat({
  children,
  className,
  amp = 10,
  duration = 4.2,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: amp,
        rotate: amp > 8 ? 1.2 : 0.6,
        duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, el);

    return () => ctx.revert();
  }, [amp, duration]);

  return (
    <div ref={ref} className={cn(styles.root, className)}>
      {children}
    </div>
  );
}
