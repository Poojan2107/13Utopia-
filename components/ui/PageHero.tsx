"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/TextLink";
import { SvgDraw } from "@/components/motion/SvgDraw";
import { PhysicsFloat } from "@/components/motion/PhysicsFloat";
import { cn } from "@/lib/utils/cn";
import { REVEAL } from "@/lib/motion/reveal";
import styles from "@/styles/ui/PageHero.module.css";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  media?: React.ReactNode;
  layout?: "standard" | "full" | "split";
  className?: string;
};

/**
 * Inner-page hero — Animmaster hero + SVG + physics DNA.
 * @see https://animmasterlib.dev/ (Hero / SVG / Physics)
 */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  media,
  layout = "standard",
  className,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lines = el.querySelectorAll("[data-hero-line]");
    const fades = el.querySelectorAll("[data-hero-reveal]");
    const plate = el.querySelector<HTMLElement>("[data-hero-media]");

    const tl = gsap.timeline({ defaults: { ease: REVEAL.ease } });

    tl.fromTo(
      lines,
      { opacity: 0, y: REVEAL.y },
      {
        opacity: 1,
        y: 0,
        duration: REVEAL.duration,
        stagger: REVEAL.stagger,
        clearProps: "transform",
      },
      0.04,
    ).fromTo(
      fades,
      { opacity: 0, y: REVEAL.y },
      {
        opacity: 1,
        y: 0,
        duration: REVEAL.duration,
        stagger: REVEAL.stagger,
        clearProps: "all",
      },
      0.12,
    );

    if (plate) {
      tl.fromTo(
        plate,
        { clipPath: "inset(10% 8% 10% 8%)", opacity: 0.4, scale: 1.04 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          scale: 1,
          duration: 1.05,
          ease: "power3.out",
        },
        0.18,
      );
    }
  }, []);

  const displayLines = splitTitle(title);

  return (
    <header ref={ref} className={cn(styles.hero, styles[layout], className)}>
      <div className={styles.atmosphere} aria-hidden="true">
        <PhysicsFloat amp={14} duration={6.5} className={styles.floatOrb}>
          <span className={styles.orb} />
        </PhysicsFloat>
      </div>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          {eyebrow ? (
            <p className={styles.eyebrow} data-hero-reveal>
              {eyebrow}
            </p>
          ) : null}
          <SvgDraw variant="rule" className={styles.rule} />
          <h1 className={styles.title}>
            {displayLines.map((line) => (
              <span key={line} className={styles.titleLine}>
                <span data-hero-line>{line}</span>
              </span>
            ))}
          </h1>
          {description ? (
            <p className={styles.description} data-hero-reveal>
              {description}
            </p>
          ) : null}
          {children ? (
            <div className={styles.children} data-hero-reveal>
              {children}
            </div>
          ) : null}
        </div>
        {media ? (
          <div className={styles.media} data-hero-reveal data-hero-media>
            {media}
          </div>
        ) : null}
      </Container>
    </header>
  );
}

function splitTitle(title: string): string[] {
  if (title.includes("\n")) return title.split("\n").filter(Boolean);
  const breaks = [" — ", " – ", ": ", "? ", " × ", " · "];
  for (const b of breaks) {
    if (!title.includes(b)) continue;
    const i = title.indexOf(b);
    const keepMark = b.trim() === "?";
    const left = title.slice(0, i + (keepMark ? 1 : 0)).trim();
    const right = title.slice(i + b.length).trim();
    if (left && right) return [keepMark ? `${left}?` : left, right];
  }
  return [title];
}

type RelatedProps = {
  title: string;
  items: { href: string; label: string }[];
};

export function RelatedLinks({ title, items }: RelatedProps) {
  if (!items.length) return null;
  return (
    <aside className={styles.related} aria-label={title} data-reveal>
      <h2 className={styles.relatedTitle}>{title}</h2>
      <ul className={styles.relatedList}>
        {items.map((item) => (
          <li key={item.href}>
            <ArrowLink href={item.href}>{item.label}</ArrowLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
