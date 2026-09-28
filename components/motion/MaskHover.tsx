"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/MaskHover.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Animmaster hover DNA — clip-mask wipe on pointer enter.
 * @see https://animmasterlib.dev/ (Hover Effects)
 */
export function MaskHover({ children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const media = el.querySelector<HTMLElement>("[data-mask-media]");
    if (!media) return;

    gsap.set(media, { clipPath: "inset(12% 12% 12% 12%)", scale: 1.06 });

    const onEnter = () => {
      gsap.to(media, {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to(media, {
        clipPath: "inset(12% 12% 12% 12%)",
        scale: 1.06,
        duration: 0.55,
        ease: "power2.inOut",
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className={cn(styles.root, className)} data-cursor="view">
      {children}
    </div>
  );
}
