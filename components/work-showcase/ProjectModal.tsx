"use client";

import React, { useEffect, useCallback } from "react";
import { Project, PROJECTS } from "./projects";
import styles from "./WorkShowcase.module.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
}

export default function ProjectModal({
  project,
  onClose,
  onSelectProject,
}: ProjectModalProps) {
  // Find current index and neighbors
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
      onSelectProject(prevProject);
    }
  }, [prevProject, onSelectProject]);

  const handleNext = useCallback(() => {
    if (nextProject && onSelectProject) {
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
      {/* Peaking Previous Project Card (Left side) */}
      {prevProject && (
        <aside
          className={`${styles.relatedCard} ${styles.relatedPrev}`}
          onClick={handlePrev}
          title={`Previous: ${prevProject.title}`}
          aria-label={`Previous project: ${prevProject.title}`}
        >
          <div className={styles.relatedContent}>
            <span className={styles.relatedTitle}>{prevProject.title}</span>
          </div>
        </aside>
      )}

      {/* Main Expansive Project Sheet (Exact Jesper Landberg Architecture) */}
      <article
        className={styles.sheetContainer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-sheet-title"
      >
        {/* Left Column: Sticky Editorial Info */}
        <div className={styles.sheetLeftCol}>
          <div className={styles.sheetLeftTop}>
            <h1 id="project-sheet-title" className={styles.sheetTitle}>
              {project.title}
            </h1>

            <p className={styles.sheetDescription}>{project.description}</p>

            <div className={styles.sheetPillsRow}>
              {/* External link button */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.visitPill}
                  aria-label={`Visit ${project.title} live website`}
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
            </div>
          </div>

          {/* Bottom Left Minimal Progress / Scroll Indicator Ring */}
          <div className={styles.sheetScrollRing} aria-hidden="true" />
        </div>

        {/* Right Column: Scrollable Media Gallery Stack */}
        <div className={styles.sheetRightCol}>
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
        </div>

        {/* Top-Right Circular Black Close Button */}
        <button
          type="button"
          onClick={onClose}
          className={styles.sheetCloseBtn}
          aria-label="Close project sheet"
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
      </article>

      {/* Peaking Next Project Card (Right side) */}
      {nextProject && (
        <aside
          className={`${styles.relatedCard} ${styles.relatedNext}`}
          onClick={handleNext}
          title={`Next: ${nextProject.title}`}
          aria-label={`Next project: ${nextProject.title}`}
        >
          <div className={styles.relatedContent}>
            <span className={styles.relatedTitle}>{nextProject.title}</span>
          </div>
        </aside>
      )}
    </div>
  );
}
