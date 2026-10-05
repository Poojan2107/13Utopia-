"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/components/work-showcase/projects";
import styles from "@/styles/framer/FramerSectionWork.module.css";

// Curated selection — first 4 from 13U's live work index (Jesper Landberg architecture)
const FEATURED = PROJECTS.slice(0, 4).map((p, i) => ({
  id: p.slug,
  num: String(i + 1).padStart(2, "0"),
  name: p.title.toUpperCase(),
  category: p.role.toUpperCase(),
  disciplines: (p.role.split("&").map((s) => s.trim()).slice(0, 3)),
  tagline: p.description.split(".")[0].trim() + ".",
  description: p.description,
  year: p.year,
  image: p.image,
  accent: "#ffffff",
  url: p.url,
}));

export function FramerSectionWork() {
  const [activeProject, setActiveProject] = useState(0);
  const current = FEATURED[activeProject];

  return (
    <section className={styles.section} aria-label="Section 06: Work & Proof" id="work">
      <div className={styles.container}>
        {/* Left Column: Curated Ledger */}
        <div className={styles.leftCol}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.headerBlock}
          >
            <h2 className={styles.mainTitle}>PROOF.</h2>
            <p className={styles.subTitle}>
              Ideas are cheap. We prefer what survives contact with reality.
            </p>
          </motion.div>

          {/* Project Ledger */}
          <nav className={styles.projectList} aria-label="Selected Projects">
            {FEATURED.map((p, idx) => {
              const isSelected = idx === activeProject;
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`${styles.projectRow} ${
                    isSelected ? styles.projectRowActive : ""
                  }`}
                  onClick={() => setActiveProject(idx)}
                  onMouseEnter={() => setActiveProject(idx)}
                  role="button"
                  tabIndex={0}
                  data-cursor="view"
                  aria-pressed={isSelected}
                >
                  <div className={styles.rowMain}>
                    <span className={styles.rowNum}>{p.num}</span>
                    <span className={styles.rowName}>{p.name}</span>
                    <span className={styles.rowYear}>{p.year}</span>
                  </div>
                  <div className={styles.rowMeta}>
                    <span className={styles.rowCategory}>{p.category}</span>
                  </div>
                  {isSelected && (
                    <motion.div
                      layoutId="activeRowIndicator"
                      className={styles.rowIndicator}
                      style={{ backgroundColor: p.accent }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.footnote}
          >
            <span className={styles.footnoteDot} />
            <span>THIS IS WHAT HAPPENS WHEN WE CREATE. BUILD. GROW.</span>
          </motion.div>
        </div>

        {/* Right Column: Dynamic Project Stage */}
        <div className={styles.rightCol}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={styles.stageContainer}
          >
            <div className={styles.visualFrame}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={`${current.name} Case Specimen`}
                  className={styles.projectImage}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  loading="eager"
                />
              </AnimatePresence>

              <div className={styles.editorialBadge}>
                <span
                  className={styles.accentDot}
                  style={{ backgroundColor: current.accent }}
                />
                <span className={styles.badgeText}>
                  {current.name} · {current.year}
                </span>
              </div>
            </div>

            {/* Overlaid Project Telemetry */}
            <div className={styles.metaPanel}>
              <div className={styles.metaTop}>
                <div className={styles.disciplinePills}>
                  {current.disciplines.map((d, i) => (
                    <span key={i} className={styles.pill}>
                      {d}
                    </span>
                  ))}
                </div>
                {current.url && (
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.statBox}
                    style={{ textDecoration: "none" }}
                    aria-label={`Visit ${current.name}`}
                  >
                    <span
                      className={styles.statNumber}
                      style={{ color: current.accent }}
                    >
                      ↗
                    </span>
                    <span className={styles.statLabel}>LIVE SITE</span>
                  </a>
                )}
              </div>

              <div className={styles.metaBottom}>
                <h3 className={styles.tagline}>{current.tagline}</h3>
                <p className={styles.desc}>{current.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
