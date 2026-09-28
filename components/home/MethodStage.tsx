"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { plates } from "@/content/plates";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/home/MethodStage.module.css";

gsap.registerPlugin(ScrollTrigger);

export type MethodStep = {
  title: string;
  meta: string;
  body: string;
  deliverables?: string[];
};

type Props = {
  items: readonly MethodStep[] | MethodStep[];
  eyebrow?: string;
  lead?: string;
};

const STEP_OUTPUTS: Record<string, string[]> = {
  Question: ["Assumptions Audit", "Market Tensions", "Strategic Angle"],
  Imagine: ["Creative Concepts", "Worldview Definition", "Prototyping"],
  Define: ["Core Direction", "Brand System", "Technical Scope"],
  Create: ["Identity & Language", "3D / CGI Assets", "UX Experience"],
  Build: ["Next.js Architecture", "Performance Tuning", "AI Pipelines"],
  Grow: ["SEO Engine", "Demand Gen", "Compounding Market Share"],
};

/**
 * MethodStage — Pinned editorial Process Theater.
 * Synchronized step timeline with gold filament tracking and stage plate.
 */
export function MethodStage({
  items,
  eyebrow = "Methodology",
  lead = "Six moves. One compounding practice.",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const steps = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-step-card]"),
    );

    const ctx = gsap.context(() => {
      steps.forEach((stepEl, idx) => {
        ScrollTrigger.create({
          trigger: stepEl,
          start: "top 65%",
          end: "bottom 35%",
          onEnter: () => setActiveStep(idx),
          onEnterBack: () => setActiveStep(idx),
        });

        gsap.fromTo(
          stepEl,
          { autoAlpha: 0.25, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stepEl,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, [items.length]);

  return (
    <section ref={rootRef} className={styles.section} aria-label={eyebrow}>
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.wrap}>
        {/* Left Flank: Sticky Studio Plate */}
        <aside className={styles.visual}>
          <div className={styles.plate}>
            <Image
              src={plates.build.src}
              alt="13 Utopia Method and Engineering"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.plateImg}
            />
            <div className={styles.plateVeil} aria-hidden="true" />
            <div className={styles.plateCopy}>
              <span className={styles.plateKicker}>{eyebrow}</span>
              <h2 className={styles.plateLead}>{lead}</h2>
              <div className={styles.plateActiveBadge}>
                <span className={styles.pulseDot} aria-hidden="true" />
                <span>
                  PHASE {String(activeStep + 1).padStart(2, "0")} / 06 —{" "}
                  {items[activeStep]?.title.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Flank: Timeline Roadmap */}
        <div className={styles.rail}>
          <div className={styles.stepList}>
            {items.map((step, idx) => {
              const isActive = idx === activeStep;
              const outputs =
                step.deliverables || STEP_OUTPUTS[step.title] || [];

              return (
                <article
                  key={step.title}
                  className={cn(styles.stepCard, isActive && styles.stepActive)}
                  data-step-card
                >
                  <div className={styles.stepHeader}>
                    <div className={styles.stepIndex}>
                      <span className={styles.indexNum}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.indexMeta}>{step.meta}</span>
                    </div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>

                  <p className={styles.stepBody}>{step.body}</p>

                  {outputs.length > 0 ? (
                    <div className={styles.stepOutputs}>
                      <span className={styles.outputLabel}>Outputs:</span>
                      <div className={styles.outputPills}>
                        {outputs.map((out) => (
                          <span key={out} className={styles.outputPill}>
                            {out}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>

          <div className={styles.railFooter}>
            <Link href="/connect/start-a-project" className={styles.methodCta} data-magnetic>
              Put the method to work <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
