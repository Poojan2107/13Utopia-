"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/ClipReveal.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Nav.Supply "appear on scroll" — clip wipe then rise */
  mode?: "clip" | "rise";
};

/**
 * Nav.Supply appear-on-scroll DNA — clip wipe into place.
 */
export function ClipReveal({ children, className, mode = "clip" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      if (mode === "clip") {
        gsap.fromTo(
          el,
          { clipPath: "inset(12% 8% 12% 8%)", opacity: 0.35, y: 28 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          },
        );
      } else {
        gsap.from(el, {
          opacity: 0,
          y: 20,
          duration: 0.55,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [mode]);

  return (
    <div ref={ref} className={cn(styles.root, className)}>
      {children}
    </div>
  );
}
