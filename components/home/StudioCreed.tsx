"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { plates } from "@/content/plates";
import type { MotionImage } from "@/components/motion/MotionMedia";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/home/StudioCreed.module.css";

gsap.registerPlugin(ScrollTrigger);

type CreedBeat = {
  title: string;
  body: string;
  image: MotionImage;
};

type Props = {
  className?: string;
  beats?: CreedBeat[];
};

const DEFAULT_BEATS: CreedBeat[] = [
  {
    title: "BE UNREAL.",
    body: "Refuse the familiar brief. Ambition starts where the obvious ends.",
    image: plates.create,
  },
  {
    title: "BE.",
    body: "Hold the center. Conviction without performance — presence as craft.",
    image: plates.build,
  },
  {
    title: "BE UNREASONABLE.",
    body: "Push past consensus. Build what the market has not yet asked for.",
    image: plates.grow,
  },
];

/**
 * Studio Creed — Scroll / 029 DNA: pinned image mask reveal.
 * Left: creed panels. Right: stacked plates wipe via clip-path.
 * @see Awwwards_Master_Pack/01 - Scroll Animation/029 - Gsap Pinned Image Mask Reveal On Scroll
 */
export function StudioCreed({ className, beats = DEFAULT_BEATS }: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || beats.length < 2) return;

    const arch = root.querySelector<HTMLElement>("[data-creed-arch]");
    const pinTarget = root.querySelector<HTMLElement>("[data-creed-pin]");
    const imgs = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-creed-img]"),
    );
    const wrappers = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-creed-wrap]"),
    );

    if (!arch || !pinTarget || imgs.length === 0) return;

    wrappers.forEach((el) => {
      const order = el.getAttribute("data-index");
      if (order !== null) el.style.zIndex = order;
    });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (reduce) {
      gsap.set(imgs, { clearProps: "clipPath,objectPosition" });
      return;
    }

    const ctx = gsap.context(() => {
      if (isMobile) {
        gsap.set(imgs, { objectPosition: "50% 60%" });
        imgs.forEach((image) => {
          gsap.to(image, {
            objectPosition: "50% 30%",
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
            },
          });
        });
        return;
      }

      gsap.set(imgs, {
        clipPath: "inset(0)",
        objectPosition: "50% 0%",
      });

      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: arch,
          start: "top top",
          end: "bottom bottom",
          pin: pinTarget,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      imgs.forEach((currentImage, index) => {
        const nextImage = imgs[index + 1];
        if (!nextImage) return;

        const sectionTimeline = gsap.timeline();
        sectionTimeline
          .to(
            currentImage,
            {
              clipPath: "inset(0px 0px 100%)",
              objectPosition: "50% 60%",
              duration: 1.5,
              ease: "none",
            },
            0,
          )
          .to(
            nextImage,
            {
              objectPosition: "50% 40%",
              duration: 1.5,
              ease: "none",
            },
            0,
          );
        mainTimeline.add(sectionTimeline);
      });
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      window.clearTimeout(t);
      ctx.revert();
    };
  }, [beats]);

  return (
    <section
      ref={rootRef}
      className={cn(styles.root, className)}
      aria-label="Studio Creed"
    >
      <div className={styles.intro}>
        <UtopianBreak size="sm" className={styles.break} />
        <p className={styles.eyebrow}>01 · Creed</p>
        <h2 className={styles.introLead}>
          Be unreal. Be. Be unreasonable.
        </h2>
      </div>

      <div className={styles.arch} data-creed-arch>
        <div className={styles.left} data-creed-left>
          {beats.map((beat) => (
            <article key={beat.title} className={styles.info} data-creed-info>
              <div className={styles.infoInner}>
                <p className={styles.header}>
                  {beat.title.replace(/\.$/, "")}
                  <span className={styles.period}>.</span>
                </p>
                <p className={styles.desc}>{beat.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.right} data-creed-pin>
          {beats.map((beat, i) => (
            <div
              key={beat.title}
              className={styles.imgWrapper}
              data-creed-wrap
              data-index={String(beats.length - i)}
            >
              <Image
                src={beat.image.src}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 540px"
                className={styles.img}
                data-creed-img
                style={{ objectPosition: beat.image.objectPosition ?? "50% 40%" }}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
