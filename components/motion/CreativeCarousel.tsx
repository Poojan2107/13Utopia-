"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import gsap from "gsap";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { TextRoll } from "@/components/motion/TextRoll";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/CreativeCarousel.module.css";

export type CarouselSlide = {
  title: string;
  caption?: string;
  need: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
};

type Props = {
  slides: CarouselSlide[];
  eyebrow?: string;
  autoplay?: boolean;
  className?: string;
};

/**
 * Skiper50 creative carousel spirit — centered stage with 3D roll,
 * without Swiper. GSAP transforms + drag/keyboard.
 */
export function CreativeCarousel({
  slides,
  eyebrow = "Carousel",
  autoplay = true,
  className,
}: Props) {
  const [index, setIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const drag = useRef({ x: 0, active: false });

  const go = useCallback(
    (next: number) => {
      const n = slides.length;
      if (n === 0) return;
      setIndex(((next % n) + n) % n);
    },
    [slides.length],
  );

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = stage.querySelectorAll<HTMLElement>("[data-slide]");
    cards.forEach((card, i) => {
      const offset = i - index;
      const abs = Math.abs(offset);
      gsap.to(card, {
        xPercent: offset * 58,
        rotateY: offset * -42,
        z: -abs * 180,
        scale: abs === 0 ? 1 : Math.max(0.72, 1 - abs * 0.12),
        opacity: abs > 2 ? 0 : Math.max(0.25, 1 - abs * 0.35),
        duration: 0.85,
        ease: "power3.out",
        overwrite: true,
      });
    });
  }, [index, slides]);

  useEffect(() => {
    if (!autoplay || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => go(index + 1), 4200);
    return () => window.clearInterval(id);
  }, [autoplay, go, index, slides.length]);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    drag.current = { x: e.clientX, active: true };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.x;
    drag.current.active = false;
    if (Math.abs(dx) > 48) go(index + (dx < 0 ? 1 : -1));
  };

  return (
    <section className={cn(styles.root, className)} aria-label={eyebrow}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => go(index - 1)}
            aria-label="Previous"
          >
            ←
          </button>
          <span className={styles.counter}>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => go(index + 1)}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={stageRef}
        className={styles.stage}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          drag.current.active = false;
        }}
      >
        {slides.map((slide, i) => (
          <article
            key={slide.need}
            className={styles.slide}
            data-slide
            aria-hidden={i !== index}
          >
            <div className={styles.media}>
              <MediaPlaceholder
                aspect="wide"
                tone={slide.tone ?? "warm"}
                need={slide.need}
                fill
              />
            </div>
            <div className={styles.copy}>
              <h3 className={styles.title}>
                {i === index ? <TextRoll>{slide.title}</TextRoll> : slide.title}
              </h3>
              {slide.caption ? (
                <p className={styles.caption}>{slide.caption}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <div className={styles.dots} role="tablist" aria-label="Slides">
        {slides.map((slide, i) => (
          <button
            key={slide.need}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={cn(styles.dot, i === index && styles.dotActive)}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  );
}
