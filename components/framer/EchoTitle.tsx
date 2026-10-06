"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "@/styles/framer/EchoTitle.module.css";

const LAYERS = 6;

type EchoTitleProps = {
  text: string;
  className?: string;
};

/**
 * Perspective letter trail — pensatori BUILD echo, Neue Montreal.
 * Used on CREATE / BUILD / GROW world titles.
 */
export function EchoTitle({ text, className }: EchoTitleProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const word = text.replace(/\.$/, "");
  const period = text.endsWith(".") ? "." : "";

  return (
    <h2
      ref={ref}
      className={`${styles.root} ${className ?? ""} ${inView ? styles.inView : ""}`}
      aria-label={text}
      data-echo-title
    >
      <span className={styles.stack} aria-hidden="true">
        {Array.from({ length: LAYERS }, (_, i) => (
          <span
            key={i}
            className={styles.layer}
            style={
              {
                "--i": i,
                "--n": LAYERS - 1,
              } as React.CSSProperties
            }
          >
            {word}
            {period}
          </span>
        ))}
      </span>
      <span className={styles.front}>
        {word}
        {period}
      </span>
    </h2>
  );
}
