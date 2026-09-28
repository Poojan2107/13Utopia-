"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionMedia, type MotionImage } from "@/components/motion/MotionMedia";
import { TextRoll } from "@/components/motion/TextRoll";
import { LinkPreview } from "@/components/motion/LinkPreview";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/ScrollListIndex.module.css";

gsap.registerPlugin(ScrollTrigger);

export type ScrollListItem = {
  href: string;
  title: string;
  body?: string;
  meta?: string;
  cta?: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
  need: string;
  image?: MotionImage;
};

type Props = {
  items: ScrollListItem[];
  className?: string;
  label?: string;
};

/** Dense scroll list + sticky preview + Animmaster link float */
export function ScrollListIndex({ items, className, label }: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 900px)").matches;
    if (reduce || mobile) {
      const first = root.querySelector<HTMLElement>("[data-preview]");
      if (first) gsap.set(first, { autoAlpha: 1 });
      root.querySelectorAll("[data-line]").forEach((line, i) => {
        line.classList.toggle(styles.itemActive, i === 0);
      });
      return;
    }

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-line]"),
      );
      const previews = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-preview]"),
      );

      gsap.set(previews, { autoAlpha: 0, scale: 1.04 });
      if (previews[0]) gsap.set(previews[0], { autoAlpha: 1, scale: 1 });
      lines[0]?.classList.add(styles.itemActive);

      const state = { active: 0 };

      const setActive = (index: number) => {
        if (index === state.active) return;
        const next = previews[index];
        const prev = previews[state.active];
        if (!next) return;

        lines.forEach((line, i) => {
          line.classList.toggle(styles.itemActive, i === index);
        });

        if (prev) {
          gsap.to(prev, {
            autoAlpha: 0,
            scale: 1.06,
            duration: 0.5,
            ease: "power2.inOut",
            overwrite: true,
          });
        }
        gsap.fromTo(
          next,
          { autoAlpha: 0.15, scale: 1.08 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.65,
            ease: "power2.out",
            overwrite: true,
          },
        );
        state.active = index;
      };

      lines.forEach((line, i) => {
        const drift = i % 2 === 0 ? -28 : 28;

        ScrollTrigger.create({
          trigger: line,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.55,
          onUpdate: (self) => {
            const p = self.progress;
            const wave = Math.sin(p * Math.PI);
            const center = 1 - Math.min(1, Math.abs(p - 0.5) * 2.2);
            gsap.set(line, {
              x: drift * wave,
              opacity: 0.35 + 0.65 * center,
            });
          },
        });

        ScrollTrigger.create({
          trigger: line,
          start: "top 58%",
          end: "bottom 42%",
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        });
      });

      gsap.from(lines, {
        opacity: 0,
        y: 32,
        duration: 0.65,
        stagger: 0.06,
        ease: "power2.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: root,
          start: "top 78%",
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [items]);

  return (
    <section ref={rootRef} className={cn(styles.wrap, className)}>
      {label ? <p className={styles.label}>{label}</p> : null}

      <div className={styles.stage}>
        <ul className={styles.list}>
          {items.map((item, i) => (
            <li key={item.href} className={styles.item} data-line>
              <Link
                href={item.href}
                className={styles.link}
                data-preview-id={item.href}
                data-cursor="hover"
                data-magnetic
              >
                <span className={styles.num}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.copy}>
                  {item.meta ? (
                    <span className={styles.meta}>{item.meta}</span>
                  ) : null}
                  <span className={styles.title}>
                    <TextRoll>{item.title}</TextRoll>
                  </span>
                  {item.body ? (
                    <span className={styles.body}>{item.body}</span>
                  ) : null}
                  <span className={styles.cta}>
                    {item.cta ?? "Enter"}
                    <span aria-hidden="true"> →</span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.preview} aria-hidden="true">
          <div className={styles.previewPin}>
            {items.map((item, i) => (
              <div key={item.href} className={styles.previewPlate} data-preview>
                <MotionMedia
                  aspect="portrait"
                  tone={item.tone ?? "warm"}
                  need={item.need}
                  image={item.image}
                  fill
                  sizes="(max-width: 900px) 100vw, 36vw"
                />
                <span className={styles.previewCaption}>
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <LinkPreview
        items={items.map((item) => ({
          selector: item.href,
          need: item.need,
          tone: item.tone,
          image: item.image,
        }))}
      />
    </section>
  );
}
