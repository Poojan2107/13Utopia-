"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { plates } from "@/content/plates";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/home/ExploreChapter.module.css";

gsap.registerPlugin(ScrollTrigger);

const PORTALS = [
  {
    href: "/work",
    title: "Work",
    sub: "Projects we've shipped.",
    image: plates.work,
  },
  {
    href: "/solutions",
    title: "Solutions",
    sub: "Launch, grow, scale, modernize.",
    image: plates.build,
  },
  {
    href: "/collective",
    title: "Collective",
    sub: "The people behind the work.",
    image: plates.collective,
  },
  {
    href: "/perspective",
    title: "Perspective",
    sub: "Notes on brand, product and growth.",
    image: plates.grow,
  },
] as const;

type Props = {
  eyebrow?: string;
};

/**
 * Explore — full-bleed stage + portal rows.
 * Active row drives the plate. Concrete labels.
 */
export function ExploreChapter({ eyebrow = "07 · Explore" }: Props = {}) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(root.querySelectorAll("[data-explore-rise]"), {
        autoAlpha: 0,
        y: 26,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 72%",
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="explore"
      className={styles.root}
      aria-label="Explore"
      onMouseLeave={() => setActive(0)}
    >
      <div className={styles.stage} aria-hidden="true">
        {PORTALS.map((p, i) => (
          <div
            key={p.href}
            className={cn(styles.plate, i === active && styles.plateOn)}
          >
            <Image
              src={p.image.src}
              alt=""
              fill
              sizes="100vw"
              className={styles.plateImg}
              style={{ objectPosition: p.image.objectPosition ?? "50% 45%" }}
              priority={i === 0}
            />
          </div>
        ))}
        <span className={styles.veil} />
        <span className={styles.grain} />
      </div>

      <div className={styles.inner}>
        <div className={styles.head} data-explore-rise>
          <UtopianBreak size="sm" className={styles.break} />
          <p className={styles.meta}>{eyebrow}</p>
          <h2 className={styles.lead}>
            Explore what
            <br />
            we&rsquo;ve built.
          </h2>
        </div>

        <nav className={styles.list} aria-label="Site portals">
          {PORTALS.map((p, i) => (
            <Link
              key={p.href}
              href={p.href}
              className={cn(styles.row, i === active && styles.rowOn)}
              data-explore-rise
              data-magnetic
              data-cursor="view"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className={styles.num}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.word}>{p.title}</span>
              <span className={styles.sub}>{p.sub}</span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
