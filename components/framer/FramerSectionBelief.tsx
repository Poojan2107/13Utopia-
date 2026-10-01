"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import styles from "@/styles/framer/FramerSectionBelief.module.css";

/**
 * Conviction — Section 02
 * RXK structure · 13 Utopia voice · gold only on brand + DEFAULT
 */

const EASE = [0.16, 1, 0.3, 1] as const;

type TokenKind = "plain" | "brand" | "copy";

type Token = {
  text: string;
  kind?: TokenKind;
};

type Line = readonly Token[];

/** Brand-positioned stack — pure RXK monochrome typography */
const LINES: readonly Line[] = [
  [{ text: "13UTOPIA", kind: "brand" }, { text: "©", kind: "copy" }, { text: "IS" }],
  [{ text: "THE" }, { text: "DIGITAL" }, { text: "STUDIO" }],
  [{ text: "FOR" }, { text: "FOUNDERS" }, { text: "WHO" }],
  [{ text: "QUESTION" }, { text: "THE" }, { text: "DEFAULT" }],
] as const;

const SUB =
  "We imagine what could be and build what comes next — for founders ready to leave the default behind.";

function BrandMark() {
  return (
    <>
      <span className={styles.ink}>13UTOPIA</span>
    </>
  );
}

function TokenLabel({ token }: { token: Token }) {
  if (token.kind === "brand") return <BrandMark />;
  if (token.kind === "copy") {
    return <span className={styles.copyright}>©</span>;
  }
  return <>{token.text}</>;
}

function Word({ token }: { token: Token }) {
  const label = <TokenLabel token={token} />;

  return (
    <span className={styles.word}>
      <span className={styles.wordAbove}>{label}</span>
      <span className={styles.wordUnder} aria-hidden="true">
        {label}
      </span>
    </span>
  );
}

export function FramerSectionBelief() {
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -8% 0px",
  });
  const [forceShow, setForceShow] = useState(false);
  const show = reduce || inView || forceShow;

  useEffect(() => {
    const t = window.setTimeout(() => setForceShow(true), 1800);
    return () => window.clearTimeout(t);
  }, []);

  const aria =
    "13UTOPIA is the digital studio for founders who question the default.";

  return (
    <section
      id="conviction"
      className={styles.section}
      aria-label="02: Conviction"
      data-theme="light"
    >
      <div className={styles.stage} ref={stageRef}>
        <h2 className={styles.title} aria-label={aria}>
          {LINES.map((tokens, li) => (
            <span className={styles.ligne} key={li}>
              <motion.span
                className={styles.ligneChild}
                initial={false}
                animate={show ? { y: "0%", opacity: 1 } : { y: "105%", opacity: 1 }}
                transition={{
                  duration: reduce ? 0 : 1.05,
                  ease: EASE,
                  delay: reduce ? 0 : 0.06 + li * 0.08,
                }}
              >
                {tokens.map((token, wi) => (
                  <Word key={`${li}-${wi}`} token={token} />
                ))}
              </motion.span>
            </span>
          ))}
        </h2>

        <motion.p
          className={styles.sub}
          initial={false}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{
            duration: reduce ? 0 : 0.75,
            ease: EASE,
            delay: reduce ? 0 : 0.45,
          }}
        >
          {SUB}
        </motion.p>
      </div>
    </section>
  );
}
