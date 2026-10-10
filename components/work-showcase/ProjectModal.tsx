"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Project, PROJECTS } from "./projects";
import styles from "./WorkShowcase.module.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
}

// 1:1 Jesper Landberg Cinematic Cubic-Bezier Curve (Apple fluid ease-out)
const EASING = [0.16, 1, 0.3, 1] as const;
const TRANSITION_DURATION = 0.48;

// Tripled set of projects to allow infinite seamless looping in both directions
const REPEATED_PROJECTS: { project: Project; virtualIndex: number }[] = [
  ...PROJECTS.map((p) => ({ project: p, virtualIndex: 0 })),
  ...PROJECTS.map((p) => ({ project: p, virtualIndex: 1 })),
  ...PROJECTS.map((p) => ({ project: p, virtualIndex: 2 })),
].map((item, idx) => ({ project: item.project, virtualIndex: idx }));

function SheetCard({
  project,
  isActive,
  onClose,
  onClick,
}: {
  project: Project;
  isActive: boolean;
  onClose?: () => void;
  onClick?: () => void;
}) {
  const galleryImages =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  return (
    <article
      className={`${styles.sheetCard} ${
        isActive ? styles.sheetCardActive : styles.sheetCardRelated
      }`}
      role="dialog"
      aria-modal={isActive}
      aria-labelledby={`sheet-title-${project.slug}`}
      onClick={!isActive ? onClick : undefined}
      title={!isActive ? project.title : undefined}
    >
      {/* Left Column: Title, Description, Pills */}
      <div className={styles.sheetLeftCol}>
        <h1 id={`sheet-title-${project.slug}`} className={styles.sheetTitle}>
          {project.title}
        </h1>

        <div className={styles.sheetDescription}>{project.description}</div>

        <div className={styles.sheetPillsRow}>
          {/* External link button with micro-interaction */}
          <a
            href={project.url || "https://13utopia.com"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitPill}
            aria-label={`Visit ${project.title}`}
            data-cursor="hover"
            tabIndex={isActive ? 0 : -1}
          >
            <svg
              width="13"
              height="13"
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

          <div className={styles.capsulesGroup}>
            <span className={styles.metaPill}>{project.year || "2026"}</span>

            <span
              className={styles.trophyIcon}
              role="img"
              aria-label="Awwwards recognition"
            >
              🏆
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Scrollable Media Stack (Completely Hidden Scrollbar) */}
      <div className={styles.sheetRightCol}>
        <div className={styles.mediaStack}>
          {project.video ? (
            <div
              className={styles.mediaFrame}
              style={{ aspectRatio: project.aspectRatio || "16 / 9" }}
            >
              <video
                className={styles.mediaImg}
                src={project.video}
                poster={project.image}
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
              style={{ aspectRatio: project.aspectRatio || "16 / 9" }}
            >
              <img
                src={imgUrl}
                alt={`${project.title} asset ${i + 1}`}
                loading="eager"
                decoding="sync"
                className={styles.mediaImg}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 1:1 Jesper Close button matching Image 5 (Crisp thin ring with centered cross) */}
      {isActive && onClose && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className={styles.sheetCloseBtn}
          aria-label="Close project"
          data-cursor="hover"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </article>
  );
}

export default function ProjectModal({
  project,
  onClose,
  onSelectProject,
}: ProjectModalProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Preload all project assets in memory cache for instant, zero-delay switching
  useEffect(() => {
    PROJECTS.forEach((p) => {
      if (p.image) {
        const img = new Image();
        img.src = p.image;
      }
      p.gallery?.forEach((g) => {
        const img = new Image();
        img.src = g;
      });
    });
  }, []);

  // Map initial project to the middle set (indexes 4..7)
  const initialOriginalIndex = project
    ? PROJECTS.findIndex((p) => p.slug === project.slug)
    : 0;
  const [virtualIndex, setVirtualIndex] = useState(
    initialOriginalIndex >= 0 ? initialOriginalIndex + PROJECTS.length : PROJECTS.length
  );

  const getStep = useCallback(() => {
    if (railRef.current) {
      const cardWidth = railRef.current.offsetWidth;
      const gap = window.innerWidth >= 650 ? 40 : 24;
      return cardWidth + gap;
    }
    return window.innerWidth - 100;
  }, []);

  const slideToIndex = useCallback(
    (targetIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);

      // Immediately activate target card on Frame 0 so content is 100% visible with zero delay
      setVirtualIndex(targetIndex);

      const len = PROJECTS.length;
      const origIdx = ((targetIndex % len) + len) % len;
      if (onSelectProject) {
        onSelectProject(PROJECTS[origIdx]);
      }

      const step = getStep();
      const targetX = -targetIndex * step;

      animate(x, targetX, {
        duration: TRANSITION_DURATION,
        ease: EASING,
        onComplete: () => {
          let normalizedIndex = targetIndex;
          // Quietly re-center to the middle loop set to allow infinite navigation
          if (targetIndex >= len * 2) {
            normalizedIndex = targetIndex - len;
            x.set(-normalizedIndex * step);
            setVirtualIndex(normalizedIndex);
          } else if (targetIndex < len) {
            normalizedIndex = targetIndex + len;
            x.set(-normalizedIndex * step);
            setVirtualIndex(normalizedIndex);
          }
          setIsAnimating(false);
        },
      });
    },
    [isAnimating, getStep, x, onSelectProject]
  );

  const handleSlideNext = useCallback(() => {
    slideToIndex(virtualIndex + 1);
  }, [slideToIndex, virtualIndex]);

  const handleSlidePrev = useCallback(() => {
    slideToIndex(virtualIndex - 1);
  }, [slideToIndex, virtualIndex]);

  // Sync virtual index if external project changes
  useEffect(() => {
    if (!project) return;
    const origIdx = PROJECTS.findIndex((p) => p.slug === project.slug);
    if (origIdx >= 0) {
      const targetV = origIdx + PROJECTS.length;
      if (targetV !== virtualIndex) {
        setVirtualIndex(targetV);
        const step = getStep();
        x.set(-targetV * step);
      }
    }
  }, [project?.slug]);

  // Initialize position on mount
  useEffect(() => {
    const step = getStep();
    x.set(-virtualIndex * step);
  }, [getStep, virtualIndex, x]);

  // Keyboard navigation: Esc to close, Arrow keys for prev/next
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handleSlidePrev();
      if (e.key === "ArrowRight") handleSlideNext();
    };
    if (project) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose, handleSlidePrev, handleSlideNext]);

  if (!project) return null;

  return (
    <div
      className={styles.sheetOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* 1:1 Jesper Landberg Continuous Multi-Card Slider Rail */}
      <motion.div
        ref={railRef}
        className={styles.sliderRail}
        style={{ x }}
        drag={isAnimating ? false : "x"}
        dragConstraints={{ left: -999999, right: 999999 }}
        dragElastic={0.15}
        onDragEnd={(_, info) => {
          const step = getStep();
          const swipeThreshold = 40;
          const velocityThreshold = 140;

          if (
            info.offset.x < -swipeThreshold ||
            info.velocity.x < -velocityThreshold
          ) {
            handleSlideNext();
          } else if (
            info.offset.x > swipeThreshold ||
            info.velocity.x > velocityThreshold
          ) {
            handleSlidePrev();
          } else {
            // Snap back cleanly to current card
            animate(x, -virtualIndex * step, {
              duration: 0.32,
              ease: EASING,
            });
          }
        }}
      >
        {REPEATED_PROJECTS.map((item, idx) => (
          <SheetCard
            key={`${item.project.slug}-${idx}`}
            project={item.project}
            isActive={idx === virtualIndex}
            onClose={onClose}
            onClick={() => slideToIndex(idx)}
          />
        ))}
      </motion.div>
    </div>
  );
}
