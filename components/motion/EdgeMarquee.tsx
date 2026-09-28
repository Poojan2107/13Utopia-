"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";
import type { MotionImage } from "@/components/motion/MotionMedia";
import styles from "@/styles/motion/EdgeMarquee.module.css";

gsap.registerPlugin(ScrollTrigger);

export type EdgeMarqueeItem = {
  href: string;
  title: string;
  tags: string[];
  images?: MotionImage[];
  image?: MotionImage;
  need?: string;
  body?: string;
};

type Props = {
  items: EdgeMarqueeItem[];
  eyebrow?: string;
  lead?: string;
  className?: string;
  id?: string;
};

function closestEdge(
  x: number,
  y: number,
  w: number,
  h: number,
): "top" | "bottom" {
  const top = (x - w / 2) ** 2 + (y - 0) ** 2;
  const bottom = (x - w / 2) ** 2 + (y - h) ** 2;
  return top < bottom ? "top" : "bottom";
}

/**
 * Hover Effects / 004 — Menu With Marquee Hover (pack-max rebuild).
 * Edge-aware gold wipe + continuous image/tag marquee theater.
 * @see Awwwards_Master_Pack/08 - Hover Effects/004 - Menu With Marquee Hover
 */
export function EdgeMarquee({
  items,
  eyebrow = "Explore",
  lead,
  className,
  id,
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const head = root.querySelector<HTMLElement>(`.${styles.head}`);
      const rows = root.querySelectorAll<HTMLElement>(`[data-edge-row]`);

      if (!reduce) {
        if (head) {
          gsap.fromTo(
            head,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: head,
                start: "top 90%",
                once: true,
              },
            },
          );
        }

        if (rows.length) {
          gsap.fromTo(
            rows,
            { autoAlpha: 0, y: 36 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: root.querySelector(`.${styles.menu}`),
                start: "top 92%",
                once: true,
              },
            },
          );
        }
      }
    }, root);

    if (!fine || reduce) {
      return () => ctx.revert();
    }

    const rows = root.querySelectorAll<HTMLElement>("[data-edge-row]");
    const cleanups: Array<() => void> = [];
    const defaults = { duration: 0.6, ease: "expo.out" as const };

    rows.forEach((row) => {
      const link = row.querySelector<HTMLElement>("[data-edge-link]");
      const marquee = row.querySelector<HTMLElement>("[data-edge-marquee]");
      const inner = row.querySelector<HTMLElement>("[data-edge-inner]");
      const title = row.querySelector<HTMLElement>("[data-edge-title]");
      if (!link || !marquee || !inner) return;

      const findEdge = (ev: MouseEvent) => {
        const rect = row.getBoundingClientRect();
        return closestEdge(
          ev.clientX - rect.left,
          ev.clientY - rect.top,
          rect.width,
          rect.height,
        );
      };

      const enter = (ev: MouseEvent) => {
        const edge = findEdge(ev);
        row.dataset.open = "true";
        gsap
          .timeline({ defaults })
          .set(marquee, { y: edge === "top" ? "-101%" : "101%" }, 0)
          .set(inner, { y: edge === "top" ? "101%" : "-101%" }, 0)
          .to([marquee, inner], { y: "0%" }, 0);
        if (title) {
          gsap.to(title, { autoAlpha: 0.12, duration: 0.35, ease: "power2.out" });
        }
      };

      const leave = (ev: MouseEvent) => {
        const edge = findEdge(ev);
        row.dataset.open = "false";
        gsap
          .timeline({ defaults })
          .to(marquee, { y: edge === "top" ? "-101%" : "101%" }, 0)
          .to(inner, { y: edge === "top" ? "101%" : "-101%" }, 0);
        if (title) {
          gsap.to(title, { autoAlpha: 1, duration: 0.4, ease: "power2.out" });
        }
      };

      link.addEventListener("mouseenter", enter);
      link.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        link.removeEventListener("mouseenter", enter);
        link.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      ctx.revert();
      cleanups.forEach((fn) => fn());
    };
  }, [items]);

  return (
    <section
      ref={rootRef}
      id={id}
      className={cn(styles.root, className)}
      aria-label={eyebrow}
    >
      <div className={styles.wrap}>
        <header className={styles.head}>
          <div className={styles.headMeta}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <p className={styles.count} aria-hidden="true">
              {String(items.length).padStart(2, "0")}
            </p>
          </div>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
        </header>

        <nav className={styles.menu}>
          {items.map((item, i) => {
            const imgs =
              item.images && item.images.length > 0
                ? item.images
                : item.image
                  ? [item.image]
                  : [];

            const half = item.tags.flatMap((tag, ti) => {
              const img = imgs[ti % Math.max(imgs.length, 1)];
              return [
                { kind: "tag" as const, value: tag, key: `t-${ti}` },
                ...(img
                  ? [
                      {
                        kind: "img" as const,
                        value: img.src,
                        pos: img.objectPosition ?? "50% 50%",
                        key: `i-${ti}`,
                      },
                    ]
                  : []),
              ];
            });
            // Triple loop for denser continuous scroll
            const loop = [
              ...half.map((p) => ({ ...p, key: `a-${p.key}` })),
              ...half.map((p) => ({ ...p, key: `b-${p.key}` })),
              ...half.map((p) => ({ ...p, key: `c-${p.key}` })),
            ];

            return (
              <div key={item.href} className={styles.item} data-edge-row>
                <Link
                  href={item.href}
                  className={styles.link}
                  data-edge-link
                  data-cursor="view"
                  data-magnetic
                >
                  <span className={styles.index} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.title} data-edge-title>
                    {item.title}
                  </span>
                  <span className={styles.metaSnippet} aria-hidden="true">
                    {item.tags.slice(0, 2).join(" · ")}
                  </span>
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </Link>
                <div
                  className={styles.marquee}
                  data-edge-marquee
                  aria-hidden="true"
                >
                  <div className={styles.marqueeInnerWrap} data-edge-inner>
                    <div
                      className={styles.marqueeInner}
                      style={{
                        animationDuration: `${12 + (i % 3) * 2}s`,
                      }}
                    >
                      {loop.map((piece) =>
                        piece.kind === "tag" ? (
                          <span key={piece.key} className={styles.tag}>
                            {piece.value}
                          </span>
                        ) : (
                          <span
                            key={piece.key}
                            className={styles.img}
                            style={{
                              backgroundImage: `url(${piece.value})`,
                              backgroundPosition: piece.pos,
                            }}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
