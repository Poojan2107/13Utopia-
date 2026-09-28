"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionMedia, type MotionImage } from "@/components/motion/MotionMedia";
import { HoverTilt } from "@/components/motion/HoverTilt";
import { MaskHover } from "@/components/motion/MaskHover";
import { TextRoll } from "@/components/motion/TextRoll";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/ExpandGallery.module.css";

gsap.registerPlugin(ScrollTrigger);

export type ExpandItem = {
  title: string;
  code?: string;
  need: string;
  href?: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
  image?: MotionImage;
};

type Props = {
  items: ExpandItem[];
  eyebrow?: string;
  lead?: string;
  className?: string;
  id?: string;
};

/**
 * Skiper52 expand + Animmaster scroll enter —
 * panels clip-rise on scroll, then hover expands.
 */
export function ExpandGallery({
  items,
  eyebrow = "Gallery",
  lead,
  className,
  id,
}: Props) {
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const head = root.querySelector<HTMLElement>(`.${styles.head}`);
    const panels = root.querySelectorAll<HTMLElement>(`.${styles.panel}`);

    const ctx = gsap.context(() => {
      if (head) {
        gsap.from(head.children, {
          opacity: 0,
          y: 18,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: root, start: "top 80%", once: true },
        });
      }

      gsap.fromTo(
        panels,
        {
          clipPath: "inset(18% 10% 18% 10%)",
          opacity: 0.15,
          y: 40,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 78%", once: true },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [items.length]);

  return (
    <section
      ref={rootRef}
      id={id}
      className={cn(styles.root, className)}
      aria-label={eyebrow}
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </header>
      <div className={styles.row}>
        {items.map((item, i) => {
          const isActive = i === active;
          const panel = (
            <>
              <div className={styles.media}>
                <MaskHover>
                  <HoverTilt max={6} className={styles.tilt}>
                    <div data-mask-media>
                      <MotionMedia
                        aspect="portrait"
                        tone={item.tone ?? "warm"}
                        need={item.need}
                        image={item.image}
                        fill
                        sizes="(max-width: 900px) 90vw, 40vw"
                        priority={i === 0}
                      />
                    </div>
                  </HoverTilt>
                </MaskHover>
              </div>
              <div className={styles.veil} aria-hidden="true" />
              <div className={styles.meta}>
                <span className={styles.code}>
                  {item.code ?? `# ${String(i + 1).padStart(2, "0")}`}
                </span>
                <span className={styles.title}>
                  {isActive ? <TextRoll>{item.title}</TextRoll> : item.title}
                </span>
              </div>
            </>
          );

          const shared = {
            className: cn(styles.panel, isActive && styles.panelActive),
            onMouseEnter: () => setActive(i),
            onFocus: () => setActive(i),
          };

          return item.href ? (
            <Link
              key={item.need}
              href={item.href}
              {...shared}
              data-magnetic
              data-cursor="view"
              aria-current={isActive ? "true" : undefined}
            >
              {panel}
            </Link>
          ) : (
            <button
              key={item.need}
              type="button"
              {...shared}
              aria-pressed={isActive}
            >
              {panel}
            </button>
          );
        })}
      </div>
    </section>
  );
}
