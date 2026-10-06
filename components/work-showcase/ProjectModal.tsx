"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, PROJECTS } from "./projects";
import styles from "./WorkShowcase.module.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
}

const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 300,
  damping: 32,
  mass: 0.8,
} as const;

export default function ProjectModal({
  project,
  onClose,
  onSelectProject,
}: ProjectModalProps) {
  const [direction, setDirection] = useState<1 | -1>(1);

  const currentIndex = project
    ? PROJECTS.findIndex((p) => p.slug === project.slug)
    : -1;
  const prevProject =
    currentIndex > 0
      ? PROJECTS[currentIndex - 1]
      : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    currentIndex < PROJECTS.length - 1
      ? PROJECTS[currentIndex + 1]
      : PROJECTS[0];

  const handlePrev = useCallback(() => {
    if (prevProject && onSelectProject) {
      setDirection(-1);
      onSelectProject(prevProject);
    }
  }, [prevProject, onSelectProject]);

  const handleNext = useCallback(() => {
    if (nextProject && onSelectProject) {
      setDirection(1);
      onSelectProject(nextProject);
    }
  }, [nextProject, onSelectProject]);

  // Keyboard navigation: Esc to close, Arrow keys for prev/next
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    if (project) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose, handlePrev, handleNext]);

  if (!project) return null;

  const galleryImages =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  const vignettes =
    project.vignettes && project.vignettes.length > 0
      ? project.vignettes
      : galleryImages;

  return (
    <div
      className={styles.sheetOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Fixed Navigation Meta Rail */}
      <div className={styles.sliderHeaderRail}>
        <div className={styles.sliderMetaBadge}>
          <span className={styles.sliderLiveDot} />
          <span>PROJECT {currentIndex + 1} / {PROJECTS.length}</span>
          <span className={styles.sliderMetaSep}>·</span>
          <span className={styles.sliderMetaTitle}>{project.title}</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className={styles.sliderCloseBtn}
          aria-label="Close project viewer"
          data-cursor="hover"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Peaking Previous Project Card (Left side - Exact Jesper Landberg Layout) */}
      {prevProject && (
        <aside
          className={`${styles.relatedCard} ${styles.relatedPrev}`}
          onClick={handlePrev}
          title={`Previous: ${prevProject.title}`}
          aria-label={`Previous project: ${prevProject.title}`}
          data-cursor="hover"
        >
          <div className={styles.relatedContent}>
            <span className={styles.relatedTitle}>{prevProject.title}</span>
            <span className={styles.relatedYear}>{prevProject.year}</span>
          </div>
          <div className={styles.relatedArrowBtn} aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
        </aside>
      )}

      {/* Main Expansive Project Sheet with Smooth Spring Directional Transitions */}
      <AnimatePresence mode="popLayout" custom={direction} initial={false}>
        <motion.article
          key={project.slug}
          custom={direction}
          className={styles.sheetContainer}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-sheet-title"
          initial={{
            opacity: 0,
            x: direction > 0 ? 120 : -120,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: SPRING_TRANSITION,
          }}
          exit={{
            opacity: 0,
            x: direction > 0 ? -120 : 120,
            scale: 0.96,
            transition: { duration: 0.22, ease: "easeOut" },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, { offset, velocity }) => {
            const swipeThreshold = 50;
            const velocityThreshold = 250;
            if (offset.x < -swipeThreshold || velocity.x < -velocityThreshold) {
              handleNext();
            } else if (offset.x > swipeThreshold || velocity.x > velocityThreshold) {
              handlePrev();
            }
          }}
        >
          {/* Left Column: Sticky Editorial Info */}
          <div className={styles.sheetLeftCol}>
            <div className={styles.sheetLeftTop}>
              <motion.h1
                id="project-sheet-title"
                className={styles.sheetTitle}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                {project.title}
              </motion.h1>

              <motion.p
                className={styles.sheetDescription}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className={styles.sheetPillsRow}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                {/* External link button */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.visitPill}
                    aria-label={`Visit ${project.title} live website`}
                    data-cursor="hover"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                )}

                {/* Year Capsule Pill */}
                <span className={styles.metaPill}>{project.year}</span>

                {/* Role / Client Capsule Pill */}
                {project.role && (
                  <span className={styles.metaPill}>{project.role}</span>
                )}
              </motion.div>
            </div>

            {/* Bottom Left Minimal Progress / Scroll Indicator Ring */}
            <div className={styles.sheetScrollRing} aria-hidden="true" />
          </div>

          {/* Right Column: Scrollable Media Gallery Stack */}
          <motion.div
            className={styles.sheetRightCol}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            {/* 5-Column Vignette / Mosaic Grid (Signature Jesper Landberg feature) */}
            {vignettes.length > 0 && (
              <div className={styles.vignetteGrid}>
                {vignettes.map((imgUrl, i) => (
                  <div key={i} className={styles.vignetteItem}>
                    <img
                      src={imgUrl}
                      alt={`${project.title} detail ${i + 1}`}
                      loading="lazy"
                      className={styles.vignetteImg}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Stacked Large Aspect-Ratio Frames */}
            <div className={styles.mediaStack}>
              {project.video ? (
                <div
                  className={styles.mediaFrame}
                  style={{ aspectRatio: project.aspectRatio }}
                >
                  <video
                    className={styles.mediaImg}
                    src={project.video}
                    poster={project.image}
                    controls
                    playsInline
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    aria-label={`${project.title} reel`}
                  />
                </div>
              ) : null}
              {galleryImages.map((imgUrl, i) => (
                <div
                  key={i}
                  className={styles.mediaFrame}
                  style={{ aspectRatio: project.aspectRatio }}
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} preview shot ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className={styles.mediaImg}
                  />
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.frameVisitBtn}
                      aria-label={`Open ${project.title} live`}
                      data-cursor="hover"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.article>
      </AnimatePresence>

      {/* Peaking Next Project Card (Right side - Exact Jesper Landberg Layout) */}
      {nextProject && (
        <aside
          className={`${styles.relatedCard} ${styles.relatedNext}`}
          onClick={handleNext}
          title={`Next: ${nextProject.title}`}
          aria-label={`Next project: ${nextProject.title}`}
          data-cursor="hover"
        >
          <div className={styles.relatedContent}>
            <span className={styles.relatedTitle}>{nextProject.title}</span>
            <span className={styles.relatedYear}>{nextProject.year}</span>
          </div>
          <div className={styles.relatedArrowBtn} aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </aside>
      )}
    </div>
  );
}



