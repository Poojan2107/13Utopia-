"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import styles from "@/styles/framer/FramerSectionBelief.module.css";

/**
 * Conviction — Section 02
 * RXK structure · 13 Utopia voice · gold only on brand + DEFAULT
 */

const EASE = [0.16, 1, 0.3, 1] as const;

type TokenKind = "plain" | "brand" | "copy" | "gold";

type Token = {
  text: string;
  kind?: TokenKind;
};

type Line = readonly Token[];

/** Brand-positioned stack — RXK Studio exact structure: 1 line + creative + 3 lines */
const LINE_TOP: Line = [
  { text: "13UTOPIA", kind: "brand" },
  { text: "©", kind: "copy" },
  { text: "IS" },
] as const;

const LINES_BOTTOM: readonly Line[] = [
  [{ text: "THE" }, { text: "DIGITAL" }, { text: "STUDIO" }],
  [{ text: "FOR" }, { text: "FOUNDERS" }, { text: "WHO" }],
  [{ text: "QUESTION" }, { text: "THE" }, { text: "DEFAULT", kind: "gold" }],
] as const;

const SUB =
  "We imagine what could be and build what comes next — for founders ready to leave the default behind.";

function BrandMark() {
  return (
    <>
      <span className={styles.gold}>1</span>
      <span className={styles.ink}>3</span>
      <span className={styles.ink}>UTOPIA</span>
    </>
  );
}

function TokenLabel({ token }: { token: Token }) {
  if (token.kind === "brand") return <BrandMark />;
  if (token.kind === "copy") {
    return <span className={styles.copyright}>©</span>;
  }
  if (token.kind === "gold") {
    return <span className={styles.gold}>{token.text}</span>;
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

function formatClock(d: Date) {
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const offsetMin = -d.getTimezoneOffset();
  const sign = offsetMin >= 0 ? "+" : "-";
  const abs = Math.abs(offsetMin);
  const oh = String(Math.floor(abs / 60));
  return `${hh}:${mm} GMT${sign}${oh}`;
}

export function FramerSectionBelief() {
  const reduce = useReducedMotion();
  const [clock, setClock] = useState("—");
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -8% 0px",
  });
  const [forceShow, setForceShow] = useState(false);
  const show = reduce || inView || forceShow;

  useEffect(() => {
    const tick = () => setClock(formatClock(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

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
      <div className={styles.chrome} aria-hidden="true">
        <span className={styles.chromeTime}>{clock}</span>
      </div>

      <div className={styles.stage} ref={stageRef}>
        <h2 className={styles.title} aria-label={aria}>
          {/* Line 1: 13UTOPIA© IS */}
          <span className={styles.ligne}>
            <motion.span
              className={styles.ligneChild}
              initial={false}
              animate={show ? { y: "0%", opacity: 1 } : { y: "105%", opacity: 1 }}
              transition={{
                duration: reduce ? 0 : 1.05,
                ease: EASE,
                delay: reduce ? 0 : 0.06,
              }}
            >
              {LINE_TOP.map((token, wi) => (
                <Word key={`top-${wi}`} token={token} />
              ))}
            </motion.span>
          </span>

          {/* Creative Interactive Element / Accent Badge */}
          <motion.div
            className={styles.creativeWrapper}
            initial={false}
            animate={show ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.95 }}
            transition={{
              duration: reduce ? 0 : 0.85,
              ease: EASE,
              delay: reduce ? 0 : 0.2,
            }}
          >
            <div className={styles.creativePill}>
              <span className={styles.pulseDot} />
              <span className={styles.creativeTag}>
                ANOMALOUS DIGITAL LAB · DELHI / TORONTO
              </span>
              <span className={styles.sparkle}>✦</span>
            </div>
          </motion.div>

          {/* Lines 2, 3, 4: 3-line monumental block */}
          {LINES_BOTTOM.map((tokens, li) => (
            <span className={styles.ligne} key={li}>
              <motion.span
                className={styles.ligneChild}
                initial={false}
                animate={show ? { y: "0%", opacity: 1 } : { y: "105%", opacity: 1 }}
                transition={{
                  duration: reduce ? 0 : 1.05,
                  ease: EASE,
                  delay: reduce ? 0 : 0.28 + li * 0.09,
                }}
              >
                {tokens.map((token, wi) => (
                  <Word key={`bot-${li}-${wi}`} token={token} />
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
            delay: reduce ? 0 : 0.6,
          }}
        >
          {SUB}
        </motion.p>
      </div>
    </section>
  );
}
