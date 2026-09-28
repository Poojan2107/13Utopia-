"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/ProofShowcase.module.css";

gsap.registerPlugin(ScrollTrigger);

export type ProofShowcaseItem = {
  href: string;
  title: string;
  meta: string;
  image: { src: string; alt: string; objectPosition?: string };
  featured?: boolean;
};

type Props = {
  items: ProofShowcaseItem[];
  eyebrow?: string;
  lead?: string;
  className?: string;
};

/**
 * Proof — full-bleed 1+3 cinema grid (Sticky Grid Scroll DNA).
 * Edge-to-edge plates; no thin sidebar UI.
 */
export function ProofShowcase({
  items,
  eyebrow = "Proof",
  lead = "One record. Three echoes.",
  className,
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  const featured = items.find((i) => i.featured) ?? items[0];
  const satellites = items.filter((i) => i !== featured).slice(0, 3);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const stage = root.querySelector<HTMLElement>("[data-proof-stage]");
    const cells = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-proof-cell]"),
    );
    const head = root.querySelector<HTMLElement>("[data-proof-head]");

    if (!stage || cells.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set([head, ...cells].filter(Boolean), { clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      const odd = cells.filter((_, i) => i % 2 === 1);
      const even = cells.filter((_, i) => i % 2 === 0);
      const dy = Math.round(window.innerHeight * 0.7);

      gsap.set(even, { y: -dy * 0.85, autoAlpha: 0 });
      gsap.set(odd, { y: dy * 0.85, autoAlpha: 0 });
      if (head) gsap.set(head, { autoAlpha: 0, y: 20 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * 3.2)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      if (head) tl.to(head, { autoAlpha: 1, y: 0, duration: 0.45 }, 0);

      tl.to(even, { y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.9 }, 0.08);
      tl.to(odd, { y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.9 }, 0.08);

      tl.to(
        root.querySelector("[data-proof-hero]"),
        { scale: 1.045, duration: 0.85, ease: "power1.inOut" },
        1.0,
      );
      tl.to(
        root.querySelectorAll("[data-proof-sat]"),
        {
          xPercent: (i) => (i === 0 ? -8 : i === 2 ? 8 : 0),
          duration: 0.85,
        },
        1.0,
      );

      tl.to({}, { duration: 0.7 });
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 180);

    return () => {
      window.clearTimeout(t);
      ctx.revert();
    };
  }, [items.length]);

  if (!featured) return null;

  return (
    <section
      ref={rootRef}
      className={cn(styles.root, className)}
      aria-label={eyebrow}
    >
      <div className={styles.stage} data-proof-stage>
        <header className={styles.head} data-proof-head>
          <div className={styles.headTop}>
            <UtopianBreak size="sm" className={styles.break} />
            <p className={styles.eyebrow}>{eyebrow}</p>
          </div>
          <h2 className={styles.lead}>{lead}</h2>
          <Link href="/work" className={styles.allLink} data-magnetic>
            All records <span aria-hidden="true">→</span>
          </Link>
        </header>

        <div className={styles.grid}>
          <Link
            href={featured.href}
            className={cn(styles.cell, styles.hero)}
            data-proof-cell
            data-proof-hero
          >
            <Image
              src={featured.image.src}
              alt={featured.image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 66vw"
              className={styles.img}
              style={{
                objectPosition: featured.image.objectPosition ?? "50% 50%",
              }}
              priority
            />
            <div className={styles.veil} aria-hidden="true" />
            <div className={styles.meta}>
              <span className={styles.metaLabel}>{featured.meta}</span>
              <span className={styles.metaTitle}>{featured.title}</span>
            </div>
          </Link>

          {satellites.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(styles.cell, styles.sat)}
              data-proof-cell
              data-proof-sat
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(max-width: 900px) 100vw, 34vw"
                className={styles.img}
                style={{
                  objectPosition: item.image.objectPosition ?? "50% 50%",
                }}
              />
              <div className={styles.veil} aria-hidden="true" />
              <div className={styles.meta}>
                <span className={styles.metaLabel}>{item.meta}</span>
                <span className={styles.metaTitle}>{item.title}</span>
              </div>
            </Link>
          ))}

          {satellites.length < 3
            ? Array.from({ length: 3 - satellites.length }).map((_, i) => (
                <Link
                  key={`fill-${i}`}
                  href="/work"
                  className={cn(styles.cell, styles.sat, styles.fill)}
                  data-proof-cell
                  data-proof-sat
                >
                  <div className={styles.fillInner}>
                    <UtopianBreak size="md" />
                    <span>Explore work</span>
                  </div>
                </Link>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
