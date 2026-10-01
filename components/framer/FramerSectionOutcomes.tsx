"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@/styles/framer/FramerSectionOutcomes.module.css";

interface Outcome {
  num: string;
  name: string;
  tagline: string;
  desc: string;
  deliverables: string[];
}

const OUTCOMES: Outcome[] = [
  {
    num: "01",
    name: "LAUNCH",
    tagline: "Bring something new into the world.",
    desc: "From unproven concept to market-defining category leader. We handle brand architecture, digital product build, and go-to-market ignition.",
    deliverables: ["Brand Identity", "MVP / Web App", "Launch Film & GTM"],
  },
  {
    num: "02",
    name: "GROW",
    tagline: "Scale acquisition without proportional spend.",
    desc: "Systematic growth engineering combining technical SEO dominance, conversion rate optimization, and retention compounding.",
    deliverables: ["Organic SEO Dominance", "CRO Experiments", "Pipeline Systems"],
  },
  {
    num: "03",
    name: "SCALE",
    tagline: "Infrastructure that never flinches under load.",
    desc: "Refactoring high-friction architectures into zero-latency cloud products ready for millions of concurrent interactions.",
    deliverables: ["Next.js & Edge Stack", "API Orchestration", "Database Sharding"],
  },
  {
    num: "04",
    name: "MODERNIZE",
    tagline: "Rescue your brand from the commodity trap.",
    desc: "Transforming legacy enterprise interfaces into tactile, unforgettable digital spaces that command premium valuation.",
    deliverables: ["Visual Rebrand", "Design System", "Modern Web Platform"],
  },
  {
    num: "05",
    name: "AUTOMATE",
    tagline: "Eliminate operational drag with fine-tuned AI.",
    desc: "Custom autonomous agent swarms and intelligent workflows that handle complex operations around the clock with zero fatigue.",
    deliverables: ["Custom LLM Agents", "Workflow Synthesis", "Internal Automation"],
  },
  {
    num: "06",
    name: "TRANSFORM",
    tagline: "Redefine what your entire industry expects.",
    desc: "Radical repositioning and category creation for ambitious enterprises ready to leave legacy competitors completely behind.",
    deliverables: ["Category Creation", "Spatial UI Systems", "Full Venture Redesign"],
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Objectives — Section 07.
 * Indexed mandate strip + active detail rail (A+B hybrid).
 * Work-parity chrome. No cards.
 */
export function FramerSectionOutcomes() {
  const [active, setActive] = useState(0);
  const current = OUTCOMES[active];

  return (
    <section
      className={styles.section}
      aria-label="Section 07: Client Outcomes"
      id="outcomes"
    >
      <div className={styles.eyebrowStrip}>
        <span className={styles.eyebrowNum}>07 // 10</span>
        <span className={styles.eyebrowSep}>·</span>
        <span className={styles.eyebrowLabel}>OBJECTIVES</span>
        <span className={styles.eyebrowMeta}>SIX MANDATES // ONE FOCUS</span>
      </div>

      <div className={styles.stage}>
        <div className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            What do you need to make happen?
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            Six transformation mandates. Select one — we engineer the rest.
          </motion.p>
        </div>

        <div className={styles.layout}>
          {/* Indexed strip */}
          <div
            className={styles.strip}
            role="listbox"
            aria-label="Client objectives"
            aria-activedescendant={`objective-${current.num}`}
          >
            {OUTCOMES.map((o, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={o.num}
                  id={`objective-${o.num}`}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  className={`${styles.row} ${isActive ? styles.rowActive : ""}`}
                  onClick={() => setActive(idx)}
                  onMouseEnter={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                >
                  <span className={styles.rowNum}>{o.num}</span>
                  <span className={styles.rowName}>{o.name}</span>
                  <span className={styles.rowTagline}>{o.tagline}</span>
                  <span className={styles.rowMark} aria-hidden="true">
                    {isActive ? "—" : "+"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active detail rail */}
          <aside className={styles.rail} aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.num}
                className={styles.railInner}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <p className={styles.railIndex}>
                  {`MANDATE ${current.num} // ${current.name}`}
                </p>
                <h3 className={styles.railTitle}>{current.tagline}</h3>
                <p className={styles.railDesc}>{current.desc}</p>

                <div className={styles.railDeliverables}>
                  <p className={styles.railDelivLabel}>DELIVERABLES</p>
                  <ul className={styles.railDelivList}>
                    {current.deliverables.map((d) => (
                      <li key={d} className={styles.railDelivItem}>
                        <span className={styles.railDelivDot} aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contact" className={styles.railCta}>
                  Initiate this mandate
                  <span aria-hidden="true"> →</span>
                </a>
              </motion.div>
            </AnimatePresence>
          </aside>
        </div>
      </div>
    </section>
  );
}
