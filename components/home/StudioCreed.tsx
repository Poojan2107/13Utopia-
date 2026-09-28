"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { MotionImage } from "@/components/motion/MotionMedia";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/home/StudioCreed.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  className?: string;
  image?: MotionImage;
};

/**
 * Studio Creed — Belief-density, image-backed 1:3 Word System.
 * Full-bleed plate + veil + monumental type. Not empty black.
 */
export function StudioCreed({
  className,
  image = {
    src: "/images/sculpt/create-craft.jpg",
    alt: "",
    objectPosition: "50% 40%",
  },
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const stage = root.querySelector<HTMLElement>("[data-creed-stage]");
    const plate = root.querySelector<HTMLElement>("[data-creed-plate]");
    const breakEl = root.querySelector<HTMLElement>("[data-creed-break]");
    const be = root.querySelector<HTMLElement>("[data-creed-be]");
    const units = Array.from(
      root.querySelectorAll<HTMLElement>("[data-creed-unit]"),
    );
    const floor = root.querySelector<HTMLElement>("[data-creed-floor]");

    if (!stage || !be || units.length < 3) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set([breakEl, be, floor, plate, ...units].filter(Boolean), {
        autoAlpha: 1,
        clearProps: "y,scale",
      });
      return;
    }

    const ctx = gsap.context(() => {
      if (plate) gsap.set(plate, { scale: 1.18 });
      if (breakEl) gsap.set(breakEl, { autoAlpha: 0, y: -16 });
      gsap.set(be, { autoAlpha: 0, y: 64, scale: 1.05 });
      gsap.set(units, { autoAlpha: 0, y: 52 });
      if (floor) gsap.set(floor, { scaleX: 0, autoAlpha: 0.85 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * 3.6)}`,
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
        tl.to(breakEl, { autoAlpha: 1, y: 0, duration: 0.45 }, 0.1);
      }
      tl.to(be, { autoAlpha: 1, y: 0, scale: 1, duration: 0.95 }, 0.3);
      units.forEach((el, i) => {
        tl.to(el, { autoAlpha: 1, y: 0, duration: 0.55 }, 1.1 + i * 0.2);
      });
      if (floor) {
        tl.to(floor, { scaleX: 1, autoAlpha: 1, duration: 0.7 }, 1.4);
      }
      tl.to({}, { duration: 0.85 });
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 180);

    return () => {
      window.clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className={cn(styles.root, className)}
      aria-label="Studio Creed"
    >
      <div className={styles.stage} data-creed-stage>
        <div className={styles.plate} data-creed-plate aria-hidden="true">
          <Image
            src={image.src}
            alt=""
            fill
            sizes="100vw"
            className={styles.plateImg}
            style={{ objectPosition: image.objectPosition ?? "50% 40%" }}
            priority
          />
          <span className={styles.plateVeil} />
          <span className={styles.plateGrain} />
        </div>

        <div className={styles.breakWrap} data-creed-break>
          <UtopianBreak size="lg" className={styles.breakMark} />
        </div>

        <div className={styles.lockup}>
          <p className={styles.be} data-creed-be>
            BE
          </p>
          <div className={styles.response}>
            <p className={styles.unit} data-creed-unit>
              UNREAL<span className={styles.dot}>.</span>
            </p>
            <p className={styles.unit} data-creed-unit>
              BE<span className={styles.dot}>.</span>
            </p>
            <p className={styles.unit} data-creed-unit>
              UNREASONABLE<span className={styles.dot}>.</span>
            </p>
          </div>
        </div>

        <div className={styles.floor} data-creed-floor aria-hidden="true">
          <span className={styles.floorMeta}>01</span>
          <span className={styles.floorRail} />
          <span className={styles.floorMeta}>03</span>
        </div>

        <h2 className={styles.visuallyHidden}>
          Be unreal. Be. Be unreasonable.
        </h2>
      </div>
    </section>
  );
}
