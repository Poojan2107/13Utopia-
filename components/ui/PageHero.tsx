"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/utils/cn";
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

    gsap.set(lines, { yPercent: 110 });
    gsap.set(fades, { opacity: 0, y: 18 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(lines, { yPercent: 0, duration: 1, stagger: 0.08 }, 0.05).to(
      fades,
      { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 },
      0.28,
    );
  }, []);

  const displayLines = splitTitle(title);

  return (
    <header ref={ref} className={cn(styles.hero, styles[layout], className)}>
      <div className={styles.atmosphere} aria-hidden="true" />
      <Container className={styles.inner}>
        <div className={styles.copy}>
          {eyebrow ? (
            <p className={styles.eyebrow} data-hero-reveal>
              {eyebrow}
            </p>
          ) : null}
          <h1 className={styles.title}>
            {displayLines.map((line) => (
              <span key={line} className={styles.titleMask}>
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
          <div className={styles.media} data-hero-reveal>
            {media}
          </div>
        ) : null}
      </Container>
    </header>
  );
}

function splitTitle(title: string): string[] {
  if (title.includes("\n")) return title.split("\n").filter(Boolean);
  // Prefer natural phrase breaks over raw word-count midpoints
  const breaks = [" — ", " – ", " - ", ": ", "? ", " × ", " · "];
  for (const b of breaks) {
    if (title.includes(b)) {
      const i = title.indexOf(b);
      const left = title.slice(0, i + (b.trim() === "?" ? 1 : 0)).trim();
      const right = title.slice(i + b.length).trim();
      if (left && right) return [left + (b.trim() === "?" ? "?" : ""), right];
    }
  }
  const words = title.split(" ");
  if (words.length <= 5) return [title];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
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
