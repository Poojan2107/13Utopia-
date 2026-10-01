"use client";

import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import dynamic from "next/dynamic";
import { PROJECTS, RepeatedProject } from "@/components/work-showcase/projects";
import ProjectModal from "@/components/work-showcase/ProjectModal";
import { CardMetric } from "@/components/work-showcase/ThreeCanvas";
import { EchoTitle } from "@/components/framer/EchoTitle";
import type { Project } from "@/components/work-showcase/projects";
import styles from "@/styles/home/HomeSectionWork.module.css";

// Client-only — heavy WebGL
const ThreeCanvas = dynamic(
  () => import("@/components/work-showcase/ThreeCanvas"),
  { ssr: false }
);

/**
 * HomeSectionWork — Section 06 on the homepage.
 *
 * The exact same Jesper Landberg 3D ribbon carousel (ThreeCanvas) and
 * physics engine as the standalone /work page — with a monumental title
 * introduction header, site-parity eyebrow, and minimal archive link.
 */
export function HomeSectionWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Repeat the 8 projects 3× for seamless loop
  const repeatedProjects: RepeatedProject[] = useMemo(
    () => [
      ...PROJECTS.map((p, i) => ({ ...p, uniqueId: `set0-${i}-${p.slug}`, originalIndex: i })),
      ...PROJECTS.map((p, i) => ({ ...p, uniqueId: `set1-${i}-${p.slug}`, originalIndex: i })),
      ...PROJECTS.map((p, i) => ({ ...p, uniqueId: `set2-${i}-${p.slug}`, originalIndex: i })),
    ],
    []
  );

  const handleCardClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  // Physics state — direct refs, no React churn
  const scrollCurrentRef = useRef(0);
  const velocityRef = useRef(0);
  const cardMetricsRef = useRef<CardMetric[]>([]);
  const singleLoopWidthRef = useRef<number>(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

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

  // Gate all input events — only active when section is in the viewport
  const isInViewRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => { isInViewRef.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleCardMetricsReady = useCallback(
    (metrics: CardMetric[], singleW: number) => {
      cardMetricsRef.current = metrics;
      singleLoopWidthRef.current = singleW;
      if (physicsRef.current.current === 0 && singleW > 0) {
        const initialCenterOffset =
          singleW - (window.innerWidth - (metrics[8]?.wPx || 400)) / 2;
        physicsRef.current.current = initialCenterOffset;
        physicsRef.current.target = initialCenterOffset;
        scrollCurrentRef.current = initialCenterOffset;
      }
    },
    []
  );

  // Physics loop
  useEffect(() => {
    const p = physicsRef.current;
    let animId: number;

    const onWheel = (e: WheelEvent) => {
      if (!isInViewRef.current) return;
      const factor =
        e.deltaMode === 1 ? 24 : e.deltaMode === 2 ? window.innerHeight : 1;
      const delta =
        (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) * factor;
      p.target += delta * 0.75;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!isInViewRef.current) return;
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
      p.pointerVelocity = (delta / dt) * 16.67;
      p.target += delta * 1.1;
      p.current += (p.target - p.current) * 0.35;
      p.lastX = e.clientX;
      p.lastTime = now;
    };

    const onPointerUp = () => {
      if (!p.isDragging) return;
      p.isDragging = false;
      document.documentElement.classList.remove("grabbing");
      if (Math.abs(p.pointerVelocity) > 0.5) {
        p.target += p.pointerVelocity * 8;
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (!isInViewRef.current) return;
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

    const tick = () => {
      animId = requestAnimationFrame(tick);
      const diff = p.target - p.current;
      p.current += diff * 0.085;
      p.velocity = diff * 0.085;
      scrollCurrentRef.current = p.current;
      velocityRef.current = p.velocity;
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

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

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
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-label="06: The Work — 3D Portfolio Showcase"
      className={styles.section}
    >
      {/* Section eyebrow */}
      <div className={styles.eyebrow} aria-hidden="true">
        <span className={styles.eyebrowNum}>06 // 10</span>
        <span className={styles.eyebrowSep}>·</span>
        <span className={styles.eyebrowLabel}>THE ARCHIVE</span>
        <a href="/work" className={styles.archiveLink} aria-label="View full work archive">
          VIEW FULL ARCHIVE
          <span aria-hidden="true"> →</span>
        </a>
      </div>

      {/* Monumental Work Section Title Header */}
      <div className={styles.headerBlock}>
        <div className={styles.titleWrap}>
          <EchoTitle text="WORK." className={styles.workEchoTitle} />
          <p className={styles.workLead}>
            Anomalies in production. Spatial architectures, bespoke SaaS platforms, and living brands.
          </p>
        </div>
        <div className={styles.interactionHint} aria-hidden="true">
          <span className={styles.hintDot} />
          <span className={styles.hintText}>3D ORBIT · DRAG OR SCROLL TO EXPLORE</span>
        </div>
      </div>

      {/* The 3D canvas — full width ribbon carousel */}
      <div className={styles.canvasWrap}>
        <ThreeCanvas
          repeatedProjects={repeatedProjects}
          scrollCurrentRef={scrollCurrentRef}
          velocityRef={velocityRef}
          onCardClick={handleCardClick}
          onCardMetricsReady={handleCardMetricsReady}
          className={styles.canvasAbsolute}
        />
      </div>

      {/* Accessibility layer — SR only */}
      <div
        ref={trackRef}
        className={styles.srOnly}
        aria-label="Featured Projects List"
      >
        {PROJECTS.map((project) => (
          <button
            key={project.slug}
            onClick={() => setSelectedProject(project)}
          >
            {project.title} — {project.role} ({project.year})
          </button>
        ))}
      </div>

      {/* Project detail modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </section>
  );
}
