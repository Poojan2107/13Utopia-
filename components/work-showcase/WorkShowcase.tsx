"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import { PROJECTS, Project, RepeatedProject } from "./projects";
import Navigation from "./Navigation";
import ProjectModal from "./ProjectModal";
import { CardMetric } from "./ThreeCanvas";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AmbientField } from "@/components/motion";
import styles from "./WorkShowcase.module.css";

// Client-only dynamic WebGL Three.js Canvas
const ThreeCanvas = dynamic(() => import("./ThreeCanvas"), {
  ssr: false,
});

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function WorkShowcase() {
  const [activeView, setActiveView] = useState<"featured" | "full">("featured");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Repeat the 8 projects 3 times for seamless wrapping
  const repeatedProjects: RepeatedProject[] = useMemo(() => {
    return [
      ...PROJECTS.map((p, i) => ({
        ...p,
        uniqueId: `set0-${i}-${p.slug}`,
        originalIndex: i,
      })),
      ...PROJECTS.map((p, i) => ({
        ...p,
        uniqueId: `set1-${i}-${p.slug}`,
        originalIndex: i,
      })),
      ...PROJECTS.map((p, i) => ({
        ...p,
        uniqueId: `set2-${i}-${p.slug}`,
        originalIndex: i,
      })),
    ];
  }, []);

  const selectedProjectRef = useRef(selectedProject);
  useEffect(() => {
    selectedProjectRef.current = selectedProject;
  }, [selectedProject]);

  const handleCardClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  // Shared physics refs (read directly in RAF loop)
  const scrollCurrentRef = useRef(0);
  const velocityRef = useRef(0);
  const cardMetricsRef = useRef<CardMetric[]>([]);
  const singleLoopWidthRef = useRef<number>(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const physicsRef = useRef({
    current: 0,
    target: 0,
    velocity: 0,
    isDragging: false,
    dragStartX: 0,
    lastX: 0,
    lastTime: 0,
    pointerVelocity: 0,
  });

  // Gate all scroll/drag input to when this section is actually in the viewport
  const isInViewRef = useRef(false);
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleCardMetricsReady = useCallback(
    (metrics: CardMetric[], singleW: number) => {
      cardMetricsRef.current = metrics;
      singleLoopWidthRef.current = singleW;

      // Center the middle set on first load
      if (physicsRef.current.current === 0 && singleW > 0) {
        const initialCenterOffset =
          singleW - (window.innerWidth - metrics[8]?.wPx || 400) / 2;
        physicsRef.current.current = initialCenterOffset;
        physicsRef.current.target = initialCenterOffset;
        scrollCurrentRef.current = initialCenterOffset;
      }
    },
    []
  );

  // High-performance physics loop (Direct RAF — no React state churn during scroll)
  useEffect(() => {
    const p = physicsRef.current;
    let animId: number;

    const onWheel = (e: WheelEvent) => {
      if (!isInViewRef.current) return;
      if (activeView !== "featured") return;
      if (selectedProjectRef.current) return;
      const factor =
        e.deltaMode === 1 ? 20 : e.deltaMode === 2 ? window.innerHeight : 1;
      const rawDelta =
        (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) * factor;
      p.target += rawDelta * 0.70;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!isInViewRef.current) return;
      if (activeView !== "featured") return;
      if (selectedProjectRef.current) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest("button") || target?.closest("a")) return;

      p.isDragging = true;
      p.dragStartX = e.clientX;
      p.lastX = e.clientX;
      p.lastTime = performance.now();
      p.pointerVelocity = 0;

      document.documentElement.classList.add("grabbing");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!p.isDragging) return;
      const now = performance.now();
      const dt = Math.max(now - p.lastTime, 1);
      const delta = p.lastX - e.clientX;

      // Instantaneous velocity (px/frame)
      p.pointerVelocity = (delta / dt) * 16.67;
      p.target += delta * 1.05;

      // Tightly couple current to target during active drag for zero input lag
      p.current += (p.target - p.current) * 0.30;

      p.lastX = e.clientX;
      p.lastTime = now;
    };

    const onPointerUp = () => {
      if (!p.isDragging) return;
      p.isDragging = false;
      document.documentElement.classList.remove("grabbing");

      // Apply organic momentum throw (clamped to prevent jarring velocity jumps)
      if (Math.abs(p.pointerVelocity) > 0.4) {
        const throwMagnitude = Math.min(Math.abs(p.pointerVelocity) * 7.2, 950);
        p.target += Math.sign(p.pointerVelocity) * throwMagnitude;
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (!isInViewRef.current) return;
      if (activeView !== "featured") return;
      p.isDragging = true;
      p.lastX = e.touches[0].clientX;
      p.lastTime = performance.now();
      p.pointerVelocity = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!p.isDragging) return;
      const now = performance.now();
      const dt = Math.max(now - p.lastTime, 1);
      const delta = (p.lastX - e.touches[0].clientX) * 1.15;

      p.pointerVelocity = (delta / dt) * 16.67;
      p.target += delta;
      p.current += (p.target - p.current) * 0.30;

      p.lastX = e.touches[0].clientX;
      p.lastTime = now;
    };

    const onTouchEnd = () => {
      if (!p.isDragging) return;
      p.isDragging = false;
      if (Math.abs(p.pointerVelocity) > 0.4) {
        const throwMagnitude = Math.min(Math.abs(p.pointerVelocity) * 7.5, 900);
        p.target += Math.sign(p.pointerVelocity) * throwMagnitude;
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!isInViewRef.current) return;
      if (selectedProjectRef.current) return;
      if (activeView !== "featured") return;
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const isDesktop = window.innerWidth > 650;
      const gap = isDesktop ? 120 : 40;
      const firstMetric = cardMetricsRef.current[0];
      const step = (firstMetric?.wPx || 600) + gap;

      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === "d" ||
        e.key === "D"
      ) {
        e.preventDefault();
        p.target += step;
      } else if (
        e.key === "ArrowLeft" ||
        e.key === "ArrowUp" ||
        e.key === "a" ||
        e.key === "A"
      ) {
        e.preventDefault();
        p.target -= step;
      } else if (e.key === "Enter" || e.key === " ") {
        // Find currently centered card and open it
        const singleW = singleLoopWidthRef.current;
        const totalSpan = singleW * 3;
        const ww = window.innerWidth;
        if (totalSpan > 0 && cardMetricsRef.current.length > 0) {
          e.preventDefault();
          let closestMetric = cardMetricsRef.current[0];
          let minDist = Infinity;
          for (const m of cardMetricsRef.current) {
            let cardScreenX = (m.leftPx - p.current) % totalSpan;
            if (cardScreenX < -m.wPx - 200) cardScreenX += totalSpan;
            if (cardScreenX > totalSpan - m.wPx - 200) cardScreenX -= totalSpan;
            const cardCenter = cardScreenX + m.wPx / 2;
            const dist = Math.abs(cardCenter - ww / 2);
            if (dist < minDist) {
              minDist = dist;
              closestMetric = m;
            }
          }
          if (closestMetric?.project) {
            setSelectedProject(closestMetric.project);
          }
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("keydown", onKeyDown);

    // Main physics integration tick (Silky exponential glide ~0.076)
    const tick = () => {
      animId = requestAnimationFrame(tick);

      const diff = p.target - p.current;
      p.current += diff * 0.076;
      p.velocity = diff * 0.076;

      scrollCurrentRef.current = p.current;
      velocityRef.current = p.velocity;

      // Keep target and current within safe numeric bounds via modulo without jumping
      const singleW = singleLoopWidthRef.current;
      if (singleW > 0) {
        const totalSpan = singleW * 3;
        if (p.current > totalSpan * 10) {
          p.current %= totalSpan;
          p.target %= totalSpan;
        } else if (p.current < -totalSpan * 10) {
          p.current = (p.current % totalSpan) + totalSpan;
          p.target = (p.target % totalSpan) + totalSpan;
        }
      }
    };

    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.classList.remove("grabbing");
    };
  }, [activeView]);

  return (
    <main ref={mainRef} className={styles.main}>
      {/* Background Volumetric Liquid Smoke & Stardust */}
      <AmbientField showEmblem={false} />

      {/* Global Brand Header */}
      <SiteHeader />

      {/* Three.js WebGL Layer: 3D Ribbon S-Curve + Floor Grid + Specular Normal Sheen */}
      {activeView === "featured" && (
        <ThreeCanvas
          repeatedProjects={repeatedProjects}
          scrollCurrentRef={scrollCurrentRef}
          velocityRef={velocityRef}
          onCardClick={handleCardClick}
          onCardMetricsReady={handleCardMetricsReady}
        />
      )}

      {/* Bottom Floating HUD Dock */}
      <Navigation
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* Accessibility DOM Layer */}
      {activeView === "featured" && (
        <div ref={trackRef} className={styles.srOnly} aria-label="Featured Projects List">
          {PROJECTS.map((project) => (
            <button
              key={project.slug}
              onClick={() => setSelectedProject(project)}
            >
              {project.title} — {project.role} ({project.year})
            </button>
          ))}
        </div>
      )}

      {/* Full View: Clean Editorial Project Index List */}
      {activeView === "full" && (
        <div className={styles.fullContainer}>
          <div className={styles.fullInner}>
            <div className={styles.fullMeta}>
              <span>04 // WORK INDEX</span>
              <span>·</span>
              <span className={styles.fullMetaTag}>THE ARCHIVE</span>
            </div>
            <h1 className={styles.fullHeader}>
              SELECTED COMMISSIONS &amp; ARCHIVE
            </h1>
            <p className={styles.fullSubtitle}>
              Curated client commissions spanning brand identities, high-scale digital platforms, 3D spatial experiences, and growth engines.
            </p>
            <ul className={styles.projectList}>
              {PROJECTS.map((project) => (
                <li
                  key={project.slug}
                  onClick={() => setSelectedProject(project)}
                  className={styles.projectRow}
                  data-cursor="hover"
                >
                  <span className={styles.projectRowTitle}>
                    {project.title}
                  </span>
                  <div className={styles.projectRowMeta}>
                    <span className={styles.projectRowYear}>{project.year}</span>
                    <span className={styles.projectRowRole}>{project.role}</span>
                    <ArrowUpRight className={styles.arrowIcon} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}
