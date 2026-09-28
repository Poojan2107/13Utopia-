"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/TextLink";
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
 * Inner-page hero — cinema plate for hub/detail routes.
 * `full` = edge-to-edge media with copy overlaid (default for marketing hubs).
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

    const tl = gsap.timeline({ defaults: { ease: REVEAL.ease } });

    tl.fromTo(
      lines,
      { opacity: 0, y: REVEAL.y },
      {
        opacity: 1,
        y: 0,
        duration: REVEAL.duration,
        stagger: REVEAL.stagger,
        clearProps: "transform,opacity",
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
        clearProps: "transform,opacity",
      },
      0.12,
    );
  }, []);

  const displayLines = splitTitle(title);
  const isCinema = layout === "full" && Boolean(media);

  return (
    <header
      ref={ref}
      className={cn(
        styles.hero,
        styles[layout],
        isCinema && styles.cinema,
        className,
      )}
    >
      {isCinema ? (
        <>
          <div className={styles.cinemaMedia} data-hero-media aria-hidden="true">
            {media}
          </div>
          <div className={styles.cinemaVeil} aria-hidden="true" />
          <div className={styles.cinemaGrain} aria-hidden="true" />
        </>
      ) : (
        <div className={styles.atmosphere} aria-hidden="true" />
      )}

      <Container className={styles.inner}>
        <div className={styles.copy}>
          {eyebrow ? (
            <p className={styles.eyebrow} data-hero-reveal>
              {eyebrow}
            </p>
          ) : null}
          <span className={styles.rule} aria-hidden="true" />
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

        {!isCinema && media ? (
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
    <aside className={styles.related} aria-label={title}>
      <div className={styles.relatedHead}>
        <p className={styles.relatedEyebrow}>Continue</p>
        <h2 className={styles.relatedTitle}>{title}</h2>
      </div>
      <ul className={styles.relatedList}>
        {items.map((item, i) => (
          <li key={item.href} className={styles.relatedItem}>
            <ArrowLink href={item.href} className={styles.relatedLink}>
              <span className={styles.relatedIndex} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.relatedLabel}>{item.label}</span>
            </ArrowLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
