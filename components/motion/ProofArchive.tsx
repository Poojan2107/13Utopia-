"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { MotionImage } from "@/components/motion/MotionMedia";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/ProofArchive.module.css";

gsap.registerPlugin(ScrollTrigger);

export type ProofCase = {
  title: string;
  body?: string;
  meta?: string;
  href?: string;
  need: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
  image?: MotionImage;
  stat?: string;
  statLabel?: string;
  stack?: string[];
};

type Props = {
  cases: ProofCase[];
  eyebrow?: string;
  lead?: string;
};

/**
 * Faithful port — Awwwards Scroll / 071 Sticky Cards (amped cinema).
 * Longer pin, deeper 3D exit, live copy crossfade.
 * @see Awwwards_Master_Pack/01 - Scroll Animation/071 - Sticky Cards
 */
export function ProofArchive({
  cases,
  eyebrow = "Proof",
  lead = "Shipped work. Scroll the records.",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const metaRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || cases.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-card]"),
    );
    if (!cards.length) return;

    const totalCards = cards.length;
    const transitions = Math.max(1, totalCards - 1);
    const segmentSize = 1 / transitions;

    const cardYOffset = 12;
    const cardScaleStep = 0.15;
    const cardExitRotation = 20;
    const cardExitZ = 350;
    const isMobile = window.matchMedia("(max-width: 1000px)").matches;
    const cardExitY = isMobile ? -420 : -200;
    const cardParkedY = isMobile ? -480 : -250;

    cards.forEach((card, i) => {
      gsap.set(card, {
        xPercent: -50,
        yPercent: -50 + i * cardYOffset,
        scale: 1 - i * cardScaleStep,
        rotation: 0,
        z: 0,
        transformOrigin: "50% 50%",
      });
    });

    let lastActive = -1;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: () =>
          `+=${Math.round(window.innerHeight * Math.max(3.2, totalCards * 1.35))}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.35,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const activeCardIndex = Math.min(
            Math.floor(progress / segmentSize),
            transitions - 1,
          );
          const segProgress =
            (progress - activeCardIndex * segmentSize) / segmentSize;

          const nextActive = Math.min(activeCardIndex, totalCards - 1);
          if (nextActive !== lastActive) {
            lastActive = nextActive;
            setActive(nextActive);
            const meta = metaRef.current;
            if (meta) {
              gsap.fromTo(
                meta,
                { autoAlpha: 0, y: 18 },
                { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" },
              );
            }
          }

          cards.forEach((card, i) => {
            if (i < activeCardIndex) {
              gsap.set(card, {
                yPercent: cardParkedY,
                rotation: cardExitRotation,
                z: cardExitZ,
                scale: 1,
              });
            } else if (i === activeCardIndex) {
              const exitProgress = gsap.parseEase("power2.in")(segProgress);
              gsap.set(card, {
                yPercent: gsap.utils.interpolate(-50, cardExitY, exitProgress),
                rotation: gsap.utils.interpolate(
                  0,
                  cardExitRotation,
                  exitProgress,
                ),
                z: gsap.utils.interpolate(0, cardExitZ, exitProgress),
                scale: 1,
              });
            } else {
              const behindIndex = i - activeCardIndex;
              const delayedSeg = gsap.utils.clamp(
                0,
                1,
                (segProgress - 0.3) / 0.7,
              );
              const easedSeg = gsap.parseEase("back.out(2)")(delayedSeg);
              const currentYOffset = (behindIndex - easedSeg) * cardYOffset;
              const currentScale =
                1 - (behindIndex - easedSeg) * cardScaleStep;

              gsap.set(card, {
                yPercent: -50 + currentYOffset,
                rotation: 0,
                z: 0,
                scale: currentScale,
              });
            }
          });
        },
      });
    }, root);

    return () => ctx.revert();
  }, [cases.length]);

  const activeCase = cases[active] ?? cases[0];

  return (
    <section ref={rootRef} className={styles.root} aria-label={eyebrow}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.stage}>
        <aside className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
          <div
            ref={metaRef}
            className={styles.activeMeta}
            aria-live="polite"
            key={activeCase?.need}
          >
            <span className={styles.counter}>
              {String(active + 1).padStart(2, "0")}
              <span className={styles.counterSep}>/</span>
              {String(cases.length).padStart(2, "0")}
            </span>
            {activeCase?.meta ? (
              <p className={styles.meta}>{activeCase.meta}</p>
            ) : null}
            <h3 className={styles.activeTitle}>{activeCase?.title}</h3>
            {activeCase?.body ? (
              <p className={styles.activeBody}>{activeCase.body}</p>
            ) : null}
            {activeCase?.href ? (
              <Link
                href={activeCase.href}
                className={styles.cta}
                data-magnetic
              >
                Inspect case
                <span aria-hidden="true"> →</span>
              </Link>
            ) : null}
          </div>
        </aside>

        <div className={styles.cards}>
          {cases.map((c, i) => {
            const cardInner = (
              <>
                {c.image?.src ? (
                  <Image
                    src={c.image.src}
                    alt={c.image.alt || c.title}
                    fill
                    sizes="(max-width: 1000px) 78vw, 42vw"
                    className={styles.cardImg}
                    priority={i === 0}
                  />
                ) : (
                  <div className={styles.cardFallback} />
                )}
                <span className={styles.cardVeil} aria-hidden="true" />
                <div className={styles.cardCopy}>
                  <span className={styles.cardNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className={styles.cardTitle}>{c.title}</h4>
                </div>
              </>
            );

            return (
              <article
                key={c.need}
                className={cn(styles.card, i === active && styles.cardActive)}
                data-card
                style={{ zIndex: cases.length - i }}
              >
                {c.href ? (
                  <Link href={c.href} className={styles.cardLink}>
                    {cardInner}
                  </Link>
                ) : (
                  <div className={styles.cardLink}>{cardInner}</div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
