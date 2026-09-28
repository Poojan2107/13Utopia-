"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { MotionImage } from "@/components/motion/MotionMedia";
import styles from "@/styles/home/CascadeReveal.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  images: MotionImage[];
  statement: string;
  kicker?: string;
  preStatement?: string;
};

const SPARK_COUNT = 12;

function OutroPanel({
  side,
  image,
  kicker,
  statement,
}: {
  side: "left" | "right";
  image?: MotionImage;
  kicker: string;
  statement: string;
}) {
  return (
    <div
      className={`${styles.outro} ${side === "left" ? styles.outroLeft : styles.outroRight}`}
      data-cascade-outro={side}
      aria-hidden={side === "right" ? true : undefined}
    >
      <div className={styles.outroMedia} aria-hidden="true">
        {image?.src ? (
          <Image
            src={image.src}
            alt=""
            fill
            sizes="100vw"
            className={styles.outroImg}
            style={{ objectPosition: image.objectPosition ?? "50% 45%" }}
          />
        ) : null}
        <span className={styles.outroVeil} />
        <span className={styles.outroGrain} />
      </div>
      <p className={styles.outroKicker}>{kicker}</p>
      <h2 className={styles.statement}>{statement}</h2>
    </div>
  );
}

/**
 * Fameestate Scroll DNA — image-backed structure.
 * Last reveal: two explicit full-bleed panels, diagonal clip, clean x-peel
 * (no rotation / no yPercent overwrite — that was the floating-box bug).
 * @see Awwwards_Master_Pack/01 - Scroll Animation/068 - Fameestate Scroll Animation
 */
export function CascadeReveal({
  images,
  statement,
  kicker = "Belief",
  preStatement = "Taste without systems is vanity. Systems without taste are invisible.",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bg = root.querySelector<HTMLElement>("[data-cascade-bg]");
    const revealer = root.querySelector<HTMLElement>("[data-cascade-revealer]");
    const filament = root.querySelector<HTMLElement>("[data-cascade-filament]");
    const content = root.querySelector<HTMLElement>("[data-cascade-content]");
    const imagesWrap = root.querySelector<HTMLElement>("[data-cascade-images]");
    const left = root.querySelector<HTMLElement>("[data-cascade-outro='left']");
    const right = root.querySelector<HTMLElement>("[data-cascade-outro='right']");
    const sparks = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-cascade-spark]"),
    );
    const imgs = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-cascade-img]"),
    );
    if (!bg || !revealer || !content || !imagesWrap || !left || !right) return;

    // Soft diagonal blade — panels stay full-bleed (inset: 0)
    gsap.set(left, {
      clipPath: "polygon(0% 0%, 52% 0%, 48% 100%, 0% 100%)",
      scale: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      transformOrigin: "50% 50%",
    });
    gsap.set(right, {
      clipPath: "polygon(52% 0%, 100% 0%, 100% 100%, 48% 100%)",
      scale: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      transformOrigin: "50% 50%",
    });
    gsap.set(imagesWrap, { scale: 1 });
    gsap.set(bg, { scale: 1.55 });
    gsap.set(revealer, {
      clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
      autoAlpha: 1,
    });
    gsap.set(filament, { xPercent: -50, scaleY: 0, autoAlpha: 0 });
    gsap.set(sparks, { autoAlpha: 0, scale: 0 });
    gsap.set(imgs, {
      clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${window.innerHeight * 2.4}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.55,
          invalidateOnRefresh: true,
        },
      });

      tl.to(bg, { scale: 1.08, duration: 0.55 }, 0);
      tl.to(
        filament,
        { scaleY: 1, autoAlpha: 1, duration: 0.18, ease: "none" },
        0,
      );
      sparks.forEach((spark, i) => {
        tl.to(
          spark,
          {
            autoAlpha: 1,
            scale: gsap.utils.random(0.7, 1.5),
            duration: 0.06,
            ease: "power2.out",
          },
          0.02 + i * 0.007,
        );
      });

      tl.to(
        revealer,
        {
          clipPath: "polygon(49.7% 0%, 50.3% 0%, 50.3% 100%, 49.7% 100%)",
          duration: 0.12,
        },
        0.16,
      );
      tl.to(
        revealer,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.28,
        },
        0.28,
      );
      tl.to([filament, ...sparks], { autoAlpha: 0, duration: 0.12 }, 0.32);
      tl.to(bg, { scale: 1, duration: 0.35 }, 0.28);

      const cascadeStart = 0.42;
      const cascadeStagger = 0.045;
      const cascadeDuration = 0.15;

      imgs.forEach((img, i) => {
        tl.to(
          img,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1,
            duration: cascadeDuration,
          },
          cascadeStart + i * cascadeStagger,
        );
      });

      // Statement panels scale in as one field
      const outroIn =
        cascadeStart + imgs.length * cascadeStagger + cascadeStagger * 0.4;
      tl.to(
        [left, right],
        { scale: 1, duration: cascadeDuration, ease: "none" },
        outroIn,
      );

      // Kill every prior layer hard so chrome never peeks through the rift
      tl.set(
        [bg, content, revealer, imagesWrap],
        { autoAlpha: 0, visibility: "hidden" },
        0.7,
      );

      // Seam reignites for the peel
      tl.set(filament, { scaleY: 1, autoAlpha: 1 }, 0.7);
      sparks.forEach((spark, i) => {
        tl.set(spark, { autoAlpha: 0.95, scale: 1 }, 0.7 + i * 0.001);
      });

      // Clean horizontal peel — keep yPercent/rotation untouched
      tl.to(
        left,
        { xPercent: -105, duration: 0.3, ease: "power1.in" },
        0.72,
      );
      tl.to(
        right,
        { xPercent: 105, duration: 0.3, ease: "power1.in" },
        0.72,
      );
      tl.to(
        [filament, ...sparks],
        { autoAlpha: 0, duration: 0.16 },
        0.9,
      );
      tl.to({}, { duration: 0.18 }, 0.96);
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
    };
  }, [images]);

  const cascadeImgs = images.slice(0, 3);
  const plateImg = images[1] ?? images[0];
  const outroImg = images[3] ?? images[2] ?? images[0];

  return (
    <section ref={rootRef} className={styles.root} aria-label={kicker}>
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
      </div>

      <div className={styles.content} data-cascade-content>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.preStatement}>{preStatement}</h2>
      </div>

      <div className={styles.filament} data-cascade-filament aria-hidden="true">
        <span className={styles.filamentGlow} />
        <span className={styles.filamentCore} />
        <span className={styles.filamentSheen} />
        {Array.from({ length: SPARK_COUNT }, (_, i) => (
          <span
            key={i}
            className={styles.spark}
            data-cascade-spark
            style={
              {
                "--spark-y": `${5 + (i / (SPARK_COUNT - 1)) * 90}%`,
                "--spark-x": `${(i % 2 === 0 ? -1 : 1) * (4 + (i % 5) * 2.5)}px`,
                "--spark-size": `${2 + (i % 4)}px`,
                "--spark-delay": `${(i % 7) * 0.11}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className={styles.revealer} data-cascade-revealer aria-hidden="true">
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
          </div>
        ))}
      </div>

      <OutroPanel
        side="left"
        image={outroImg}
        kicker={kicker}
        statement={statement}
      />
      <OutroPanel
        side="right"
        image={outroImg}
        kicker={kicker}
        statement={statement}
      />
    </section>
  );
}
