"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { MotionImage } from "@/components/motion/MotionMedia";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import styles from "@/styles/home/CascadeReveal.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  images: MotionImage[];
  statement: string;
  kicker?: string;
  preStatement?: string;
  body?: string;
};

const CASCADE_PLATE_TAGS = [
  "PLATE 01 // ARCHITECTURE & CRAFT",
  "PLATE 02 // SUB-100MS SYSTEMS",
  "PLATE 03 // COMPOUNDING MOMENTUM",
  "PLATE 04 // MEASURED EVIDENCE",
];

/**
 * CascadeReveal — 13 UTOPIA Bespoke Haute-Couture Fameestate Engine.
 *
 * Choreography:
 * 1. Ambient Background scale 1.4 -> 1.0 + Pre-statement read
 * 2. Central Gold Laser Filament pierces vertically -> opens to full rectangular curtain
 * 3. Multi-image cascading depth plates expand with luxury plate stamps
 * 4. Monumental Obsidian Gates part outward (Left: -105%, Right: +105%), seamlessly
 *    releasing the user into the Capabilities Chapter.
 *
 * @see Awwwards_Master_Pack/01 - Scroll Animation/068 - Fameestate Scroll Animation
 */
export function CascadeReveal({
  images,
  statement,
  kicker = "02 · Belief",
  preStatement = "The obvious answer is rarely the only answer.",
  body = "Every business inherits assumptions — about its brand, its technology, its customers, and how growth is supposed to work. We question those assumptions first. Then we decide what is worth keeping, what needs to change, and what could exist instead.",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const heroBackground = root.querySelector<HTMLElement>("[data-hero-bg]");
    const heroContent = root.querySelector<HTMLElement>("[data-hero-content]");
    const laserBeam = root.querySelector<HTMLElement>("[data-laser-beam]");
    const heroRevealer = root.querySelector<HTMLElement>("[data-hero-revealer]");
    const heroImagesWrapper = root.querySelector<HTMLElement>("[data-hero-images]");
    const heroImages = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-hero-img]"),
    );
    const outroLeft = root.querySelector<HTMLElement>("[data-outro-left]");
    const outroRight = root.querySelector<HTMLElement>("[data-outro-right]");
    const centralSeam = root.querySelector<HTMLElement>("[data-central-seam]");

    if (!heroBackground || !heroContent || !heroRevealer || !heroImagesWrapper || !outroLeft || !outroRight) {
      return;
    }

    const ctx = gsap.context(() => {
      // ── Initial Luxury States ──
      gsap.set(heroBackground, { scale: 1.4, autoAlpha: 1 });
      gsap.set(heroContent, { autoAlpha: 1, y: 0 });
      if (laserBeam) gsap.set(laserBeam, { scaleY: 0, opacity: 0, transformOrigin: "center top" });
      gsap.set(heroRevealer, {
        clipPath: "polygon(49.6% 50%, 50.4% 50%, 50.4% 50%, 49.6% 50%)",
        autoAlpha: 1,
      });
      gsap.set(heroImagesWrapper, { scale: 1, autoAlpha: 1 });
      gsap.set(heroImages, {
        scale: 0,
        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
        autoAlpha: 1,
      });

      // Split dual-panel obsidian gate states
      gsap.set(outroLeft, {
        scale: 0,
        xPercent: 0,
        clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
        autoAlpha: 1,
      });
      gsap.set(outroRight, {
        scale: 0,
        xPercent: 0,
        clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
        autoAlpha: 1,
      });
      if (centralSeam) gsap.set(centralSeam, { opacity: 0, scaleY: 0 });

      // ── Master Scroll Timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * 5.5)}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Background zooms smoothly down
      tl.to(heroBackground, { scale: 1, duration: 0.45, ease: "none" }, 0);

      // 2. Gold Laser Filament ignites and cuts vertically
      if (laserBeam) {
        tl.to(laserBeam, { opacity: 1, scaleY: 1, duration: 0.15, ease: "power2.out" }, 0.05);
        tl.to(laserBeam, { opacity: 0, duration: 0.2 }, 0.28);
      }

      // 3. Vertical Slit stretches top-to-bottom
      tl.to(
        heroRevealer,
        {
          clipPath: "polygon(49.6% 0%, 50.4% 0%, 50.4% 100%, 49.6% 100%)",
          duration: 0.2,
          ease: "none",
        },
        0.05,
      );

      // 4. Slit expands outward into full-bleed rectangular curtain
      tl.to(
        heroRevealer,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.32,
          ease: "power2.inOut",
        },
        0.22,
      );

      tl.to(heroContent, { autoAlpha: 0, y: -40, duration: 0.22, ease: "power2.in" }, 0.18);

      // 5. Staggered Cascading Depth Plates expand with luxury scale
      const cascadeStart = 0.42;
      const cascadeStagger = 0.055;
      const cascadeDuration = 0.18;

      heroImages.forEach((heroImage, index) => {
        tl.to(
          heroImage,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1,
            duration: cascadeDuration,
            ease: "power2.out",
          },
          cascadeStart + index * cascadeStagger,
        );
      });

      // 6. Outro Dual Obsidian Gates Scale to Full Presence
      const outroScaleTime = cascadeStart + heroImages.length * cascadeStagger + 0.03;
      tl.to(
        [outroLeft, outroRight],
        { scale: 1, duration: cascadeDuration, ease: "power2.out" },
        outroScaleTime,
      );

      if (centralSeam) {
        tl.to(centralSeam, { opacity: 1, scaleY: 1, duration: 0.15, ease: "power2.out" }, outroScaleTime + 0.05);
      }

      // 7. Settle Earlier Layers at 0.72
      tl.set(
        [heroBackground, heroContent, heroRevealer, heroImagesWrapper],
        { autoAlpha: 0 },
        0.72,
      );
      tl.set(root, { backgroundColor: "transparent" }, 0.72);

      // 8. Monumental Obsidian Gates Part Horizontally (Left: -105%, Right: +105%)
      tl.to(
        outroLeft,
        { xPercent: -105, duration: 0.28, ease: "power3.inOut" },
        0.74,
      );
      tl.to(
        outroRight,
        { xPercent: 105, duration: 0.28, ease: "power3.inOut" },
        0.74,
      );
      if (centralSeam) {
        tl.to(centralSeam, { opacity: 0, duration: 0.15 }, 0.74);
      }
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, [images]);

  const cascadeImgs = images.slice(0, 3);
  const plateImg = images[1] ?? images[0];
  const statementImg = images[3] ?? images[2] ?? images[0];

  const renderStatementContent = () => (
    <>
      <div className={styles.statementMedia} aria-hidden="true">
        {statementImg?.src ? (
          <Image
            src={statementImg.src}
            alt=""
            fill
            sizes="100vw"
            className={styles.statementImg}
            style={{ objectPosition: statementImg.objectPosition ?? "50% 45%" }}
          />
        ) : null}
        <span className={styles.statementVeil} />
        <span className={styles.statementGrain} />
      </div>

      <div className={styles.statementInner}>
        <div className={styles.statementEyebrowRow}>
          <UtopianBreak size="sm" className={styles.statementBreak} />
          <p className={styles.statementKicker}>{kicker}</p>
        </div>

        <h2 className={styles.statementHeading}>{statement}</h2>
        {body ? <p className={styles.statementBody}>{body}</p> : null}
      </div>
    </>
  );

  return (
    <section ref={rootRef} className={styles.root} aria-label={kicker}>
      {/* ── 1. Hero Background (Scale 1.4 -> 1.0) ── */}
      <div className={styles.bg} data-hero-bg>
        {images[0]?.src ? (
          <Image
            src={images[0].src}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.bgImg}
          />
        ) : null}
        <span className={styles.bgVeil} />
        <span className={styles.bgGrain} />
      </div>

      {/* ── 2. Hero Content (Intro Belief Statement) ── */}
      <div className={styles.preContent} data-hero-content>
        <div className={styles.eyebrowRow}>
          <UtopianBreak size="sm" className={styles.break} />
          <p className={styles.kicker}>{kicker}</p>
        </div>
        <h2 className={styles.preStatement}>{preStatement}</h2>
      </div>

      {/* ── 3. Central Gold Laser Filament ── */}
      <div className={styles.laserBeam} data-laser-beam aria-hidden="true" />

      {/* ── 4. Fameestate Revealer Curtain ── */}
      <div className={styles.revealer} data-hero-revealer aria-hidden="true">
        {plateImg?.src ? (
          <Image
            src={plateImg.src}
            alt=""
            fill
            sizes="100vw"
            className={styles.revealerImg}
            style={{ objectPosition: plateImg.objectPosition ?? "50% 40%" }}
          />
        ) : null}
        <span className={styles.revealerVeil} />
        <span className={styles.revealerNoise} />
      </div>

      {/* ── 5. Cascading Depth Plates (Center Polygon Expand) ── */}
      <div className={styles.images} data-hero-images aria-hidden="true">
        {cascadeImgs.map((img, i) => (
          <div key={`${img.src}-${i}`} className={styles.img} data-hero-img>
            <span className={styles.plateStamp}>{CASCADE_PLATE_TAGS[i]}</span>
            <Image
              src={img.src}
              alt=""
              fill
              sizes="100vw"
              className={styles.imgMedia}
              style={{ objectPosition: img.objectPosition ?? "50% 50%" }}
            />
            <span className={styles.imgVeil} />
          </div>
        ))}
      </div>

      {/* ── 6. Dual-Panel Split Obsidian Gates (Left & Right Parting) ── */}
      <div className={styles.outroWrapper} aria-hidden="true">
        <div className={`${styles.outroPanel} ${styles.outroLeft}`} data-outro-left>
          {renderStatementContent()}
        </div>
        <div className={`${styles.outroPanel} ${styles.outroRight}`} data-outro-right>
          {renderStatementContent()}
        </div>
        <div className={styles.centralSeam} data-central-seam />
      </div>
    </section>
  );
}
