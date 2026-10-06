"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollBlurTextProps {
  children: React.ReactNode;
  className?: string;
  maxBlur?: number;
  scaleEffect?: boolean;
  interactiveFocus?: boolean;
  glowOnFocus?: boolean;
  isHero?: boolean;
}

/**
 * ScrollBlurText
 * Signature TheMindDrama / Awwwards optical depth-of-field scroll & interaction blur.
 * Uses exponential optical aperture curves + interactive pointer lens focus.
 */
export function ScrollBlurText({
  children,
  className = "",
  maxBlur = 24,
  scaleEffect = true,
  interactiveFocus = true,
  glowOnFocus = true,
  isHero = false,
}: ScrollBlurTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isPointerHovered, setIsPointerHovered] = useState(false);
  const [pointerPos, setPointerPos] = useState({ x: 50, y: 50 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isHero ? ["start start", "end start"] : ["start end", "end start"],
  });

  // Hyper-smooth spring physics for organic camera lens feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    restDelta: 0.0005,
  });

  // Optical curve: Hero starts at 0px blur and defocusses as scrolled away
  const blurProgress = useTransform(
    smoothProgress,
    isHero
      ? [0, 0.35, 0.75, 1]
      : [0, 0.22, 0.42, 0.5, 0.58, 0.78, 1],
    isHero
      ? [0, 0, maxBlur * 0.6, maxBlur]
      : [maxBlur, maxBlur * 0.55, 0, 0, 0, maxBlur * 0.55, maxBlur]
  );

  const opacityProgress = useTransform(
    smoothProgress,
    isHero
      ? [0, 0.4, 0.8, 1]
      : [0, 0.22, 0.42, 0.5, 0.58, 0.78, 1],
    isHero
      ? [1, 1, 0.4, 0.15]
      : [0.2, 0.5, 1, 1, 1, 0.5, 0.2]
  );

  const scaleProgress = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    scaleEffect ? [0.93, 1, 0.93] : [1, 1, 1]
  );

  const trackingProgress = useTransform(
    smoothProgress,
    [0, 0.45, 0.55, 1],
    ["0.04em", "normal", "normal", "0.04em"]
  );

  const filterString = useTransform(blurProgress, (v) => {
    if (isPointerHovered) return "blur(0px)";
    return `blur(${v.toFixed(1)}px)`;
  });

  const activeOpacity = useTransform(opacityProgress, (v) => {
    if (isPointerHovered) return 1;
    return v;
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!interactiveFocus || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPointerPos({ x, y });
    },
    [interactiveFocus]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseEnter={() => interactiveFocus && setIsPointerHovered(true)}
      onMouseLeave={() => interactiveFocus && setIsPointerHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        filter: filterString,
        opacity: activeOpacity,
        scale: scaleProgress,
        letterSpacing: trackingProgress,
        willChange: "filter, opacity, transform, letter-spacing",
        transition: isPointerHovered
          ? "filter 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease"
          : "none",
        position: "relative",
      }}
    >
      {children}
      {glowOnFocus && isPointerHovered && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-20%",
            background: `radial-gradient(circle at ${pointerPos.x}% ${pointerPos.y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
            pointerEvents: "none",
            borderRadius: "inherit",
            mixBlendMode: "screen",
          }}
        />
      )}
    </motion.div>
  );
}

