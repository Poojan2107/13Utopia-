"use client";

import { type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/TextRoll.module.css";

type Props = {
  children: string;
  className?: string;
  /** Center stagger origin (skiper58 `center`) */
  center?: boolean;
  as?: "span" | "div";
};

/**
 * Skiper58-inspired text roll — dual-line character hover.
 * Pure CSS; no framer-motion.
 */
export function TextRoll({
  children,
  className,
  center = false,
  as: Tag = "span",
}: Props) {
  const chars = Array.from(children);

  return (
    <Tag
      className={cn(styles.root, center && styles.center, className)}
      aria-label={children}
    >
      <span className={styles.line} aria-hidden="true">
        {chars.map((ch, i) => (
          <span
            key={`a-${i}`}
            className={styles.char}
            style={{ "--i": i, "--n": chars.length } as CSSProperties}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>
      <span className={styles.line} aria-hidden="true">
        {chars.map((ch, i) => (
          <span
            key={`b-${i}`}
            className={styles.char}
            style={{ "--i": i, "--n": chars.length } as CSSProperties}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>
    </Tag>
  );
}

/** Convenience when wrapping a Next Link — children must be plain string */
export function TextRollLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  if (typeof children !== "string") {
    return <span className={className}>{children}</span>;
  }
  return <TextRoll className={className}>{children}</TextRoll>;
}
