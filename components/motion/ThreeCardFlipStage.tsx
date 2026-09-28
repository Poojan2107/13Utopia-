"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { plates } from "@/content/plates";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/ThreeCardFlipStage.module.css";

gsap.registerPlugin(ScrollTrigger);

const CARDS_DATA = [
  {
    id: "card-1",
    num: "01",
    brandPillar: "ONE · CREATE",
    title: "Artistic Inception",
    desc: "Couture visual systems, high-fashion 3D CGI, and sensory brand worlds designed to leave a mark.",
    href: "/capabilities/create",
    image: plates.create,
    highlight: true, // 1 of 13 Utopia
  },
  {
    id: "card-2",
    num: "—",
    brandPillar: "THE NEXUS · BUILD",
    title: "Living Architecture",
    desc: "Sub-100ms headless systems, WebGL dynamics, and custom AI engines engineered to compound.",
    href: "/capabilities/build",
    image: plates.build,
    highlight: false,
  },
  {
    id: "card-3",
    num: "03",
    brandPillar: "THREE · GROW",
    title: "Market Velocity",
    desc: "Algorithmic SEO supremacy, full-funnel acquisition, and compounding revenue scale.",
    href: "/capabilities/grow",
    image: plates.grow,
    highlight: true, // 3 of 13 Utopia
  },
];

/**
 * Awwwards 040 — 3D Card Gap & Flip Theater (Custom Port).
 * Highlights Cards 1 and 3 as 13 UTOPIA's signature "ONE & THREE".
 * Pinned scrubbed timeline with gap separation + 3D flip + outward flare physics.
 * @see Awwwards_Master_Pack/01 - Scroll Animation/040 - Component Demo
 */
export function ThreeCardFlipStage() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cardContainer = root.querySelector<HTMLElement>("[data-card-container]");
    const stickyHeader = root.querySelector<HTMLElement>("[data-sticky-header]");
    const card1 = root.querySelector<HTMLElement>("#flip-card-1");
    const card2 = root.querySelector<HTMLElement>("#flip-card-2");
    const card3 = root.querySelector<HTMLElement>("#flip-card-3");
    const allCards = root.querySelectorAll<HTMLElement>("[data-flip-card]");

    if (!cardContainer || !stickyHeader || !card1 || !card2 || !card3) return;

    let isGapDone = false;
    let isFlipDone = false;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1000px)", () => {
        // Master scrub timeline for seamless 120fps playback
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: `+=${window.innerHeight * 2}px`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
          },
        });

        // 1. Sticky header entry
        tl.fromTo(
          stickyHeader,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.2 },
          0,
        );

        // 2. Container width easing
        tl.fromTo(
          cardContainer,
          { width: "78%" },
          { width: "66%", ease: "power1.inOut", duration: 0.3 },
          0,
        );

        // 3. Separation into individual cards with gap and full border radius
        tl.to(
          cardContainer,
          { gap: "24px", ease: "power2.inOut", duration: 0.25 },
          0.25,
        );

        tl.to(
          [card1, card2, card3],
          { borderRadius: "18px", ease: "power2.inOut", duration: 0.25 },
          0.25,
        );

        // 4. 3D Card Flip (180deg)
        tl.to(
          allCards,
          {
            rotationY: 180,
            duration: 0.45,
            ease: "power2.inOut",
            stagger: 0.08,
          },
          0.45,
        );

        // 5. Outward flare for Card 1 & Card 3 (Highlighting 1 & 3 of 13 Utopia)
        tl.to(
          card1,
          {
            y: 28,
            rotationZ: -12,
            duration: 0.4,
            ease: "power2.out",
          },
          0.6,
        );

        tl.to(
          card3,
          {
            y: 28,
            rotationZ: 12,
            duration: 0.4,
            ease: "power2.out",
          },
          0.6,
        );

        tl.to(
          card2,
          {
            y: -10,
            duration: 0.4,
            ease: "power2.out",
          },
          0.6,
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className={styles.section} aria-label="13 Utopia Pillars">
      <div className={styles.ambientGlow} aria-hidden="true" />

      <header className={styles.stickyHeader} data-sticky-header>
        <p className={styles.eyebrow}>
          <span>THE 13 UTOPIA MATRIX</span>
          <span className={styles.sep} aria-hidden="true">
            ✦
          </span>
          <span>ONE & THREE</span>
        </p>
        <h2 className={styles.title}>
          Three worlds with <span className={styles.goldText}>one purpose.</span>
        </h2>
      </header>

      <div className={styles.cardContainer} data-card-container>
        {CARDS_DATA.map((card, idx) => (
          <div
            key={card.id}
            id={`flip-card-${idx + 1}`}
            className={cn(styles.card, card.highlight && styles.highlightedCard)}
            data-flip-card
          >
            {/* FRONT FACE (Visual Photography Plate) */}
            <div className={styles.cardFront}>
              <Image
                src={card.image.src}
                alt={card.title}
                fill
                sizes="(max-width: 900px) 100vw, 30vw"
                className={styles.cardImg}
              />
              <div className={styles.frontVeil} />
              <div className={styles.frontLabel}>
                <span className={styles.frontNum}>{card.num}</span>
                <span className={styles.frontPillar}>{card.brandPillar}</span>
              </div>
            </div>

            {/* BACK FACE (Luxury Gilded Copy & Action) */}
            <div className={styles.cardBack}>
              <div className={styles.backAtmosphere} />
              <div className={styles.backTop}>
                <span className={styles.backBadge}>
                  {card.highlight ? `★ PILLAR ${card.num}` : "PILLAR"}
                </span>
                <span className={styles.backPillar}>{card.brandPillar}</span>
              </div>

              <div className={styles.backMid}>
                <h3 className={styles.backTitle}>{card.title}</h3>
                <p className={styles.backDesc}>{card.desc}</p>
              </div>

              <div className={styles.backBottom}>
                <Link href={card.href} className={styles.cardCta} data-magnetic>
                  Explore Pillar <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
