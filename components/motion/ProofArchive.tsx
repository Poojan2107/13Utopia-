"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { MotionImage } from "@/components/motion/MotionMedia";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
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
 * ProofArchive — Luxury Awwwards 3D Project Theater with Browser Chrome & Live Synchronization.
 * @see Awwwards_Master_Pack/01 - Scroll Animation/071 - Sticky Cards
 */
export function ProofArchive({
  cases,
  eyebrow = "05 · Work",
  lead = "Selected Projects.",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const metaRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || cases.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (window.matchMedia("(max-width: 900px)").matches) {
      root.dataset.mode = "stack";
      return;
    }
    root.dataset.mode = "theater";

    const cards = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-card]"),
    );
    if (!cards.length) return;

    const totalCards = cards.length;
    const transitions = Math.max(1, totalCards - 1);
    const segmentSize = 1 / transitions;

    const cardYOffset = 16;
    const cardScaleStep = 0.1;
    const cardExitRotation = 12;
    const cardExitZ = 320;
    const cardExitY = -180;
    const cardParkedY = -240;

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
          `+=${Math.round(window.innerHeight * Math.max(2.0, (totalCards - 1) * 1.1 + 0.6))}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.45,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const activeCardIndex = Math.min(
            Math.floor(progress / segmentSize),
            transitions - 1,
          );
          const segProgress =
            (progress - activeCardIndex * segmentSize) / segmentSize;

          const nextActive = Math.min(
            progress >= 0.95 ? totalCards - 1 : activeCardIndex,
            totalCards - 1,
          );
          if (nextActive !== lastActive) {
            lastActive = nextActive;
            setActive(nextActive);
            const meta = metaRef.current;
            if (meta) {
              gsap.fromTo(
                meta,
                { autoAlpha: 0, y: 14 },
                { autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out" },
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
            } else if (i === activeCardIndex && i < totalCards - 1) {
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
                (segProgress - 0.2) / 0.8,
              );
              const easedSeg = gsap.parseEase("back.out(1.5)")(delayedSeg);
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
          <div className={styles.copyTop}>
            <UtopianBreak size="sm" className={styles.break} />
            <p className={styles.eyebrow}>{eyebrow}</p>
          </div>
          
          <h2 className={styles.lead}>{lead}</h2>

          <div
            ref={metaRef}
            className={styles.activeMeta}
            aria-live="polite"
            key={activeCase?.need}
          >
            <div className={styles.counterRow}>
              <span className={styles.counter}>
                {String(active + 1).padStart(2, "0")}
                <span className={styles.counterSep}>/</span>
                {String(cases.length).padStart(2, "0")}
              </span>
              {activeCase?.meta ? (
                <span className={styles.metaBadge}>{activeCase.meta}</span>
              ) : null}
            </div>

            <h3 className={styles.activeTitle}>{activeCase?.title}</h3>
            
            {activeCase?.body ? (
              <p className={styles.activeBody}>{activeCase.body}</p>
            ) : null}

            <div className={styles.actionRow}>
              {activeCase?.href ? (
                <Link
                  href={activeCase.href}
                  className={styles.cta}
                  data-magnetic
                >
                  Inspect Case Story
                  <span aria-hidden="true"> →</span>
                </Link>
              ) : null}
              <Link href="/work" className={styles.allWorkLink}>
                View All Work
              </Link>
            </div>
          </div>
        </aside>

        <div className={styles.cards}>
          {cases.map((c, i) => {
            const isActive = i === active;
            return (
              <article
                key={c.need}
                className={cn(styles.card, isActive && styles.cardActive)}
                data-card
                style={{ zIndex: cases.length - i }}
              >
                {/* Browser Frame Chrome */}
                <div className={styles.browserHeader}>
                  <div className={styles.browserDots} aria-hidden="true">
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <div className={styles.browserUrl}>
                    <span className={styles.lockIcon} aria-hidden="true">🔒</span>
                    <span>13utopia.com/work/{c.need.toLowerCase().replace(/[^a-z0-9]/g, "-")}</span>
                  </div>
                  <span className={styles.caseNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className={styles.cardPreviewWrap}>
                  {c.image?.src ? (
                    <Image
                      src={c.image.src}
                      alt={c.image.alt || c.title}
                      fill
                      sizes="(max-width: 1000px) 90vw, 48vw"
                      className={styles.cardImg}
                      priority={i === 0}
                    />
                  ) : (
                    <div className={styles.cardFallback} />
                  )}
                  <span className={styles.cardVeil} aria-hidden="true" />
                </div>

                <div className={styles.cardFoot}>
                  <span className={styles.footClient}>{c.need}</span>
                  <span className={styles.footAction}>Inspect Case ↗</span>
                </div>

                {c.href ? (
                  <Link
                    href={c.href}
                    className={styles.cardCoverLink}
                    aria-label={`View ${c.title}`}
                  />
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
