"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { plates } from "@/content/plates";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
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

const STEP_PLATES = [
  plates.work,
  plates.create,
  plates.build,
  plates.grow,
  plates.collective,
  plates.heroSculpture,
] as const;

const STEP_OUTPUTS: Record<string, string[]> = {
  Question: ["Assumptions Audit", "Market Tensions", "Strategic Angle"],
  Imagine: ["Creative Concepts", "Worldview Definition", "Prototyping"],
  Define: ["Core Direction", "Brand System", "Technical Scope"],
  Create: ["Identity & Language", "3D / CGI Assets", "UX Experience"],
  Build: ["Next.js Architecture", "Performance Tuning", "AI Pipelines"],
  Grow: ["SEO Engine", "Demand Gen", "Compounding Market Share"],
};

/**
 * MethodStage — full-viewport pinned scrub theater (Belief-density).
 * Image plates crossfade under monumental step type.
 */
export function MethodStage({
  items,
  eyebrow = "Methodology",
  lead = "Six moves. One compounding practice.",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const list = [...items];

  useEffect(() => {
    const root = rootRef.current;
    if (!root || list.length === 0) return;

    const stage = root.querySelector<HTMLElement>("[data-method-stage]");
    const platesEls = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-method-plate]"),
    );
    const panels = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-method-panel]"),
    );

    if (!stage || panels.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 900px)").matches;

    if (reduce || isMobile) {
      root.dataset.mode = "stack";
      gsap.set(panels, { clearProps: "all" });
      gsap.set(platesEls, { clearProps: "all" });
      if (platesEls[0]) gsap.set(platesEls[0], { autoAlpha: 1 });
      return;
    }
    root.dataset.mode = "theater";

    const ctx = gsap.context(() => {
      gsap.set(panels, { autoAlpha: 0, y: 36 });
      gsap.set(panels[0], { autoAlpha: 1, y: 0 });
      gsap.set(platesEls, { autoAlpha: 0, scale: 1.08 });
      if (platesEls[0]) gsap.set(platesEls[0], { autoAlpha: 1, scale: 1 });

      const seg = 1 / list.length;

      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: () => `+=${Math.round(window.innerHeight * Math.max(4.5, list.length * 0.85))}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.75,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const idx = Math.min(
            list.length - 1,
            Math.floor(self.progress / seg + 0.0001),
          );
          setActiveStep((prev) => (prev === idx ? prev : idx));

          panels.forEach((panel, i) => {
            const on = i === idx;
            gsap.to(panel, {
              autoAlpha: on ? 1 : 0,
              y: on ? 0 : 28,
              duration: 0.35,
              overwrite: "auto",
            });
          });
          platesEls.forEach((plate, i) => {
            const on = i === idx;
            gsap.to(plate, {
              autoAlpha: on ? 1 : 0,
              scale: on ? 1 : 1.06,
              duration: 0.55,
              overwrite: "auto",
            });
          });
        },
      });
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 180);

    return () => {
      window.clearTimeout(t);
      ctx.revert();
    };
  }, [list.length]);

  return (
    <section ref={rootRef} className={styles.section} aria-label={eyebrow}>
      <div className={styles.stage} data-method-stage>
        <div className={styles.plates} aria-hidden="true">
          {list.map((step, i) => {
            const plate = STEP_PLATES[i % STEP_PLATES.length];
            return (
              <div
                key={step.title}
                className={styles.plate}
                data-method-plate
              >
                <Image
                  src={plate.src}
                  alt=""
                  fill
                  sizes="100vw"
                  className={styles.plateImg}
                  style={{ objectPosition: plate.objectPosition ?? "50% 45%" }}
                  priority={i === 0}
                />
              </div>
            );
          })}
          <span className={styles.veil} />
        </div>

        <header className={styles.head}>
          <div className={styles.headTop}>
            <UtopianBreak size="sm" className={styles.break} />
            <p className={styles.eyebrow}>{eyebrow}</p>
          </div>
          <p className={styles.lead}>{lead}</p>
          <p className={styles.counter}>
            {String(activeStep + 1).padStart(2, "0")}
            <span>/</span>
            {String(list.length).padStart(2, "0")}
          </p>
        </header>

        <div className={styles.panels}>
          {list.map((step) => (
            <div
              key={step.title}
              className={styles.panel}
              data-method-panel
            >
              <p className={styles.meta}>{step.meta}</p>
              <h2 className={styles.title}>{step.title}</h2>
              <p className={styles.body}>{step.body}</p>
              {STEP_OUTPUTS[step.title] ? (
                <ul className={styles.outputs}>
                  {(step.deliverables || STEP_OUTPUTS[step.title] || []).map(
                    (out) => (
                      <li key={out}>{out}</li>
                    ),
                  )}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link
            href="/connect/start-a-project"
            className={styles.cta}
            data-magnetic
          >
            Put the method to work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
