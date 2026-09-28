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

/**
 * CascadeReveal — Awwwards Cinematic Aperture & Layered Depth Theater.
 * Pure natural transitions: Optical iris bloom -> Cascading image depth -> Monumental Statement -> Seamless release.
 */
export function CascadeReveal({
  images,
  statement,
  kicker = "02 · Belief",
  preStatement = "The obvious answer isn't always the right one.",
  body = "Good work starts by asking better questions. We look at what exists, challenge what isn't working, and find a clearer way forward — whether that means changing the brand, rebuilding the product or rethinking how the business grows.",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bg = root.querySelector<HTMLElement>("[data-cascade-bg]");
    const preContent = root.querySelector<HTMLElement>("[data-cascade-pre]");
    const irisPlate = root.querySelector<HTMLElement>("[data-cascade-iris]");
    const irisGlow = root.querySelector<HTMLElement>("[data-cascade-iris-glow]");
    const imagesWrap = root.querySelector<HTMLElement>("[data-cascade-images]");
    const imgs = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-cascade-img]"),
    );
    const statementCanvas = root.querySelector<HTMLElement>(
      "[data-cascade-statement]",
    );

    if (!bg || !preContent || !irisPlate || !imagesWrap || !statementCanvas) return;

    // Initial states
    gsap.set(bg, { scale: 1.15, autoAlpha: 1 });
    gsap.set(preContent, { autoAlpha: 1, y: 0 });
    gsap.set(irisPlate, {
      clipPath: "circle(0% at 50% 50%)",
      scale: 1.1,
      autoAlpha: 1,
    });
    if (irisGlow) {
      gsap.set(irisGlow, { scale: 0, autoAlpha: 0 });
    }
    gsap.set(imgs, {
      clipPath: "circle(0% at 50% 50%)",
      scale: 1.15,
      autoAlpha: 1,
    });
    gsap.set(statementCanvas, {
      autoAlpha: 0,
      scale: 0.96,
      y: 30,
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * 1.8)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Initial presence & subtle atmospheric zoom
      tl.to(bg, { scale: 1.05, duration: 0.35, ease: "none" }, 0);

      // 2. Optical Iris Bloom expands from center with gold radiance
      if (irisGlow) {
        tl.to(
          irisGlow,
          { scale: 1.5, autoAlpha: 0.85, duration: 0.25, ease: "power2.out" },
          0.05,
        );
        tl.to(irisGlow, { autoAlpha: 0, duration: 0.2 }, 0.28);
      }

      tl.to(
        irisPlate,
        {
          clipPath: "circle(85% at 50% 50%)",
          scale: 1,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.08,
      );
      tl.to(preContent, { autoAlpha: 0, y: -30, duration: 0.2 }, 0.12);

      // 3. Cascading visual depth plates expand smoothly
      const cascadeStart = 0.32;
      const cascadeStagger = 0.08;
      const cascadeDuration = 0.22;

      imgs.forEach((img, i) => {
        tl.to(
          img,
          {
            clipPath: "circle(90% at 50% 50%)",
            scale: 1,
            duration: cascadeDuration,
            ease: "power2.out",
          },
          cascadeStart + i * cascadeStagger,
        );
      });

      // 4. Statement Canvas smoothly emerges with full-bleed luxury backplate
      const statementIn = cascadeStart + imgs.length * cascadeStagger + 0.04;
      tl.to(
        statementCanvas,
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.28,
          ease: "power2.out",
        },
        statementIn,
      );

      // 5. Clean release — slight depth push to transition naturally into next section
      tl.to(
        statementCanvas,
        {
          scale: 0.98,
          y: -15,
          duration: 0.2,
          ease: "none",
        },
        0.82,
      );
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
    };
  }, [images]);

  const cascadeImgs = images.slice(0, 3);
  const plateImg = images[1] ?? images[0];
  const statementImg = images[3] ?? images[2] ?? images[0];

  return (
    <section ref={rootRef} className={styles.root} aria-label={kicker}>
      {/* Ambient Background Plate */}
      <div className={styles.bg} data-cascade-bg>
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

      {/* Pre-Statement Screen */}
      <div className={styles.preContent} data-cascade-pre>
        <div className={styles.eyebrowRow}>
          <UtopianBreak size="sm" className={styles.break} />
          <p className={styles.kicker}>{kicker}</p>
        </div>
        <h2 className={styles.preStatement}>{preStatement}</h2>
      </div>

      {/* Iris Optical Aperture Glow */}
      <div className={styles.irisGlow} data-cascade-iris-glow aria-hidden="true" />

      {/* Iris Revealer Aperture Plate */}
      <div className={styles.irisPlate} data-cascade-iris aria-hidden="true">
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

      {/* Cascading Image Depth Plates */}
      <div className={styles.images} data-cascade-images aria-hidden="true">
        {cascadeImgs.map((img, i) => (
          <div key={`${img.src}-${i}`} className={styles.img} data-cascade-img>
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

      {/* Single Unified Statement Canvas — Pure, unobstructed luxury typography */}
      <div className={styles.statementCanvas} data-cascade-statement>
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
      </div>
    </section>
  );
}
