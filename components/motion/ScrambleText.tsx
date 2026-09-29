"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/ScrambleText.module.css";

gsap.registerPlugin(ScrollTrigger);

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ····";

type Props = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** Trigger on scroll into view */
  once?: boolean;
};

/**
 * Animmaster Text Animations DNA — scramble reveal (no Club plugin).
 * @see animmaster/_lab/Text-Animations-1
 */
export function ScrambleText({
  children,
  className,
  as: Tag = "p",
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    const textEl = textRef.current;
    if (!el || !textEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const original = children;
    let frame = 0;
    let tween: gsap.core.Tween | null = null;

    const run = () => {
      const len = original.length;
      const state = { t: 0 };
      tween = gsap.to(state, {
        t: 1,
        duration: Math.min(1.6, 0.55 + len * 0.02),
        ease: "none",
        onUpdate: () => {
          frame += 1;
          const reveal = Math.floor(state.t * len);
          let out = "";
          for (let i = 0; i < len; i++) {
            if (original[i] === " " || original[i] === "." || original[i] === "\n") {
              out += original[i];
            } else if (i < reveal) {
              out += original[i];
            } else {
              out += CHARS[(frame + i * 7) % CHARS.length];
            }
          }
          if (textRef.current) {
            textRef.current.innerText = out;
          }
        },
        onComplete: () => {
          if (textRef.current) {
            textRef.current.innerText = original;
          }
        },
      });
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 82%",
        once,
        onEnter: run,
      });
    }, el);

    return () => {
      tween?.kill();
      ctx.revert();
    };
  }, [children, once]);

  return (
    <Tag ref={ref as never} className={cn(styles.root, className)} aria-label={children}>
      <span ref={textRef} suppressHydrationWarning>
        {children}
      </span>
    </Tag>
  );
}
