"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { MotionImage } from "@/components/motion/MotionMedia";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import { plates } from "@/content/plates";
import styles from "@/styles/work/WorkManifest.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  image?: MotionImage;
  lineOne?: string;
  lineTwo?: string;
  lineThree?: string;
  floor?: string;
};

/**
 * Work Manifest — Creed-density image-backed 1:3 Word System for the hub.
 * One law. Three beats. Full-bleed plate, not empty black.
 */
export function WorkManifest({
  image = plates.create,
  lineOne = "Proof",
  lineTwo = "is the only",
  lineThree = "language",
  floor = "Ambition without evidence is costume.",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const stage = root.querySelector<HTMLElement>("[data-manifest-stage]");
    const plate = root.querySelector<HTMLElement>("[data-manifest-plate]");
    const breakEl = root.querySelector<HTMLElement>("[data-manifest-break]");
    const units = Array.from(
      root.querySelectorAll<HTMLElement>("[data-manifest-unit]"),
    );
    const floorEl = root.querySelector<HTMLElement>("[data-manifest-floor]");

    if (!stage || units.length < 3) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set([breakEl, floorEl, plate, ...units].filter(Boolean), {
        autoAlpha: 1,
        clearProps: "y,scale",
      });
      return;
    }

    const ctx = gsap.context(() => {
      if (plate) gsap.set(plate, { scale: 1.2 });
      if (breakEl) gsap.set(breakEl, { autoAlpha: 0, y: -16 });
      gsap.set(units, { autoAlpha: 0, y: 56 });
      if (floorEl) gsap.set(floorEl, { autoAlpha: 0, y: 24 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * 3.2)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      if (plate) {
        tl.to(plate, { scale: 1, duration: 1.4, ease: "none" }, 0);
      }
      if (breakEl) {
        tl.to(breakEl, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.05);
      }
      tl.to(units[0]!, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.15);
      tl.to(units[1]!, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.4);
      tl.to(units[2]!, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.65);
      if (floorEl) {
        tl.to(floorEl, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.95);
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className={styles.root} aria-label="Work law">
      <div className={styles.stage} data-manifest-stage>
        <div className={styles.plate} data-manifest-plate>
          <Image
            src={image.src}
            alt={image.alt || ""}
            fill
            sizes="100vw"
            className={styles.plateImg}
            style={{ objectPosition: image.objectPosition ?? "50% 40%" }}
          />
          <div className={styles.veil} aria-hidden="true" />
          <div className={styles.grain} aria-hidden="true" />
        </div>

        <div className={styles.breakWrap} data-manifest-break>
          <UtopianBreak size="lg" className={styles.break} />
        </div>

        <div className={styles.words}>
          <p className={styles.unit} data-manifest-unit>
            {lineOne}
          </p>
          <p className={styles.unitSoft} data-manifest-unit>
            {lineTwo}
          </p>
          <p className={styles.unitGold} data-manifest-unit>
            {lineThree}
          </p>
        </div>

        <p className={styles.floor} data-manifest-floor>
          {floor}
        </p>
      </div>
    </section>
  );
}
