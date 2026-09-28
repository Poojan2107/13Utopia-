"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/home/MethodChapter.module.css";

gsap.registerPlugin(ScrollTrigger);

export type MethodBeat = {
  title: string;
  meta: string;
  body: string;
};

type Props = {
  items: readonly MethodBeat[] | MethodBeat[];
  eyebrow?: string;
};

const BLIND_DETAILS = [
  {
    phase: "Phase 01 · Diagnostic",
    directive: "Start with the root problem. Question defaults, test assumptions, and identify the true barrier to growth.",
    deliverable: "Problem Architecture & Assumption Audit",
    tags: ["Root Cause", "Assumption Audit", "Core Problem"],
  },
  {
    phase: "Phase 02 · Concept",
    directive: "Explore unconstrained possibilities. Imagine bolder directions, concept architectures, and differentiated angles.",
    deliverable: "Strategic Concepts & Visual Territory",
    tags: ["Creative Direction", "Hypotheses", "Differentiation"],
  },
  {
    phase: "Phase 03 · Strategy",
    directive: "Cut the noise and decide. Turn high-potential concepts into an unambiguous roadmap, technical scope, and brief.",
    deliverable: "Scope Specification & System Roadmap",
    tags: ["Clarity", "Scope Definition", "Roadmap"],
  },
  {
    phase: "Phase 04 · Formation",
    directive: "Give the vision tangible form. Craft high-end brand identity, digital UI/UX, CGI motion, and persuasive copy.",
    deliverable: "Brand Identity, UI/UX System & Content",
    tags: ["Design Craft", "UI/UX", "CGI Motion"],
  },
  {
    phase: "Phase 05 · Engineering",
    directive: "Build high-performance reality. Engineer robust platforms, custom AI systems, automation pipelines, and infrastructure.",
    deliverable: "Production Code, AI Pipelines & Systems",
    tags: ["Modern Stack", "AI Workflows", "Performance"],
  },
  {
    phase: "Phase 06 · Velocity",
    directive: "Put the engine to work. Drive organic demand with technical SEO, conversion optimization, and continuous improvement.",
    deliverable: "Demand Engine, SEO Strategy & Growth Loops",
    tags: ["SEO Dominance", "Conversion Loops", "Scale"],
  },
];

/**
 * MethodChapter — Kinetic Vertical Blinds (Awwwards 009).
 * 6 full-height interactive vertical columns spanning the screen with fluid hover expansion.
 */
export function MethodChapter({
  items,
  eyebrow = "06 · Method",
}: Props) {
  const [activeBlind, setActiveBlind] = useState(0);
  const rootRef = useRef<HTMLElement | null>(null);
  const list = [...items];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(root.querySelectorAll("[data-method-rise]"), {
        autoAlpha: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className={styles.root} aria-label="Method">
      <div className={styles.ambientGlow} aria-hidden="true" />

      {/* Header */}
      <header className={styles.header} data-method-rise>
        <div className={styles.headLeft}>
          <div className={styles.eyebrowRow}>
            <UtopianBreak size="sm" className={styles.break} />
            <p className={styles.meta}>{eyebrow}</p>
          </div>
          <h2 className={styles.lead}>How We Work.</h2>
        </div>
        <p className={styles.headSub}>
          Six deliberate moves that turn ambition into shipped reality. Hover each phase to inspect the system.
        </p>
      </header>

      {/* Kinetic Vertical Blinds Stage */}
      <div className={styles.blindsStage} data-method-rise>
        {list.map((step, i) => {
          const detail = BLIND_DETAILS[i] ?? BLIND_DETAILS[0];
          const isActive = i === activeBlind;

          return (
            <article
              key={step.title}
              className={cn(styles.blind, isActive && styles.blindActive)}
              onMouseEnter={() => setActiveBlind(i)}
              onFocus={() => setActiveBlind(i)}
              onClick={() => setActiveBlind(i)}
            >
              <div className={styles.blindGlow} aria-hidden="true" />

              {/* Compressed Vertical Spine */}
              <div className={styles.spine}>
                <span className={styles.spineNum}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.spineTitle}>{step.title}</span>
                <span className={styles.spineDot} aria-hidden="true" />
              </div>

              {/* Expanded Narrative Panel */}
              <div className={styles.expandedContent}>
                <div className={styles.contentHead}>
                  <div className={styles.numRow}>
                    <span className={styles.contentNum}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.phaseTag}>{detail.phase}</span>
                  </div>
                  
                  <h3 className={styles.contentTitle}>
                    {step.title}
                    <span className={styles.goldDot}>.</span>
                  </h3>
                  <p className={styles.directive}>{detail.directive}</p>
                </div>

                <div className={styles.contentMiddle}>
                  <p className={styles.bodyCopy}>{step.body}</p>
                  
                  <div className={styles.deliverablePill}>
                    <span className={styles.deliverableLabel}>Milestone Deliverable</span>
                    <span className={styles.deliverableText}>{detail.deliverable}</span>
                  </div>
                </div>

                <div className={styles.contentFoot}>
                  <div className={styles.tagsGroup}>
                    {detail.tags.map((t) => (
                      <span key={t} className={styles.tagItem}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/connect/start-a-project"
                    className={styles.ctaButton}
                    data-magnetic
                  >
                    <span>Put this to work</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
