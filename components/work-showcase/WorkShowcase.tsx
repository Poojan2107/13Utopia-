"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import { PROJECTS, Project, RepeatedProject } from "./projects";
import Navigation from "./Navigation";
import ProfileModal from "./ProfileModal";
import NewsletterModal from "./NewsletterModal";
import ProjectModal from "./ProjectModal";
import { CardMetric } from "./ThreeCanvas";
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
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

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
      const factor =
        e.deltaMode === 1 ? 24 : e.deltaMode === 2 ? window.innerHeight : 1;
      const delta =
        (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) * factor;
      p.target += delta * 0.75;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!isInViewRef.current) return;
      if (activeView !== "featured") return;
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
      p.target += delta * 1.1;

      // Tightly couple current to target during active drag for zero input lag
      p.current += (p.target - p.current) * 0.35;

      p.lastX = e.clientX;
      p.lastTime = now;
    };

    const onPointerUp = () => {
      if (!p.isDragging) return;
      p.isDragging = false;
      document.documentElement.classList.remove("grabbing");

      // Apply organic momentum throw
      if (Math.abs(p.pointerVelocity) > 0.5) {
        p.target += p.pointerVelocity * 8;
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
      const delta = (p.lastX - e.touches[0].clientX) * 1.25;

      p.pointerVelocity = (delta / dt) * 16.67;
      p.target += delta;
      p.current += (p.target - p.current) * 0.35;

      p.lastX = e.touches[0].clientX;
      p.lastTime = now;
    };

    const onTouchEnd = () => {
      if (!p.isDragging) return;
      p.isDragging = false;
      if (Math.abs(p.pointerVelocity) > 0.5) {
        p.target += p.pointerVelocity * 10;
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

    // Main physics integration tick
    const tick = () => {
      animId = requestAnimationFrame(tick);

      const diff = p.target - p.current;
      p.current += diff * 0.085;
      p.velocity = diff * 0.085;

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
      document.documentElement.classList.remove("grabbing");
    };
  }, [activeView]);

  return (
    <main ref={mainRef} className={styles.main}>
      {/* Three.js WebGL Layer: 3D Ribbon S-Curve + Floor Grid + Specular Normal Sheen */}
      {activeView === "featured" && (
        <ThreeCanvas
          repeatedProjects={repeatedProjects}
          scrollCurrentRef={scrollCurrentRef}
          velocityRef={velocityRef}
          hoveredSlug={hoveredSlug}
          onCardClick={(project) => setSelectedProject(project)}
          onCardMetricsReady={handleCardMetricsReady}
        />
      )}

      {/* Floating Header & Navigation */}
      <Navigation
        isProfileOpen={isProfileOpen}
        setIsProfileOpen={setIsProfileOpen}
        isNewsletterOpen={isNewsletterOpen}
        setIsNewsletterOpen={setIsNewsletterOpen}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Profile Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
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
              onMouseEnter={() => setHoveredSlug(project.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
            >
              {project.title} — {project.role} ({project.year})
            </button>
          ))}
        </div>
      )}

      {/* Full View: Clean Project Index List */}
      {activeView === "full" && (
        <div className={styles.fullContainer}>
          <div className={styles.fullInner}>
            <h1 className={styles.fullHeader}>
              The Archive — Every Project by Name
            </h1>
            <ul className={styles.projectList}>
              {PROJECTS.map((project) => (
                <li
                  key={project.slug}
                  onClick={() => setSelectedProject(project)}
                  className={styles.projectRow}
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
