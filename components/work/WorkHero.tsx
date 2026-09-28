"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { MotionImage } from "@/components/motion/MotionMedia";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import { plates } from "@/content/plates";
import styles from "@/styles/work/WorkHero.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  images?: MotionImage[];
  eyebrow?: string;
  title?: string;
  lead?: string;
};

const DEFAULT_PLATES: MotionImage[] = [
  plates.work,
  plates.eliteSports,
  plates.kumarCotton,
  plates.trendyFashion,
];

/**
 * Work hub hero — pinned multi-plate scrub theater (Belief density).
 * Case evidence plates crossfade under monumental WORK.
 */
export function WorkHero({
  images = DEFAULT_PLATES,
  eyebrow = "Evidence",
  title = "Work",
  lead = "Case stories. Ambition, made measurable.",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const list = images.length ? images : DEFAULT_PLATES;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const stage = root.querySelector<HTMLElement>("[data-work-stage]");
    const plateEls = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-work-plate]"),
    );
    const copy = root.querySelectorAll("[data-work-line]");
    const breakEl = root.querySelector<HTMLElement>("[data-work-break]");

    if (!stage || plateEls.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(plateEls, { autoAlpha: 0 });
      gsap.set(plateEls[0], { autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(plateEls, { autoAlpha: 0, scale: 1.14 });
      gsap.set(plateEls[0], { autoAlpha: 1, scale: 1.08 });
      if (breakEl) gsap.set(breakEl, { autoAlpha: 0, y: -14 });
      gsap.set(copy, { autoAlpha: 0, y: 48 });

      const enter = gsap.timeline();
      if (breakEl) enter.to(breakEl, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.1);
      enter.to(
        copy,
        { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.1, ease: "power3.out" },
        0.25,
      );

      const seg = 1 / list.length;
      let last = -1;

      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: () =>
          `+=${Math.round(window.innerHeight * Math.max(2.8, list.length * 0.85))}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.7,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const idx = Math.min(
            list.length - 1,
            Math.floor(self.progress / seg + 0.001),
          );
          const local = (self.progress - idx * seg) / seg;

          if (idx !== last) {
            last = idx;
            setActive(idx);
            plateEls.forEach((p, i) => {
              gsap.to(p, {
                autoAlpha: i === idx ? 1 : 0,
                duration: 0.45,
                overwrite: true,
              });
            });
          }

          const plate = plateEls[idx];
          if (plate) {
            gsap.set(plate, {
              scale: gsap.utils.interpolate(1.1, 1, local),
            });
          }
        },
      });
    }, root);

    return () => ctx.revert();
  }, [list.length]);

  return (
    <section ref={rootRef} className={styles.root} aria-label="Work">
      <div className={styles.stage} data-work-stage>
        <div className={styles.plates} aria-hidden="true">
          {list.map((img, i) => (
            <div
              key={img.src}
              className={styles.plate}
              data-work-plate
              style={{ zIndex: i === active ? 2 : 1 }}
            >
              <Image
                src={img.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className={styles.plateImg}
                style={{ objectPosition: img.objectPosition ?? "50% 45%" }}
              />
            </div>
          ))}
          <div className={styles.veil} />
          <div className={styles.grain} />
        </div>

        <div className={styles.breakWrap} data-work-break>
          <UtopianBreak size="md" className={styles.break} />
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow} data-work-line>
            {eyebrow}
          </p>
          <h1 className={styles.title} data-work-line>
            {title}
          </h1>
          <p className={styles.lead} data-work-line>
            {lead}
          </p>
          <p className={styles.counter} data-work-line aria-live="polite">
            {String(active + 1).padStart(2, "0")}
            <span>/</span>
            {String(list.length).padStart(2, "0")}
          </p>
        </div>

        <p className={styles.cue} aria-hidden="true">
          Hold · scroll into proof
        </p>
      </div>
    </section>
  );
}
