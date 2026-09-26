"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home/CreateBuildGrow.module.css";

gsap.registerPlugin(ScrollTrigger);

const WORLDS = [
  {
    slug: "create",
    num: "01",
    title: "Create",
    verb: "What should exist.",
    body: "Brand. Design. Experience. How a business is understood before it is sold — and felt before it is explained.",
    image: "/images/hero/hero-gold-sculpture.jpg",
    alt: "Gold silk and metallic form — the Create world",
    objectPosition: "58% 42%",
  },
  {
    slug: "build",
    num: "02",
    title: "Build",
    verb: "What does not exist yet.",
    body: "Products. Technology. AI. Systems. Engineering that has to work on day one — not decorate a deck.",
    image: "/metal-human/metal-human.jpg",
    alt: "Metallic human bust — the Build world",
    objectPosition: "50% 28%",
  },
  {
    slug: "grow",
    num: "03",
    title: "Grow",
    verb: "What you have made.",
    body: "Marketing. Performance. SEO. Content. Attention turned into momentum — momentum into market.",
    image: "/images/hero/portal.jpg",
    alt: "Portal of light — the Grow world",
    objectPosition: "62% 45%",
  },
] as const;

/**
 * 03 — Worlds
 * Sticky dual plane: type + real image. Scroll owns the crossfade.
 */
export function CreateBuildGrow() {
  const wrapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 900px)").matches;
    if (reduce || mobile) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(
        wrap.querySelectorAll("[data-world-panel]"),
      );
      const media = gsap.utils.toArray<HTMLElement>(
        wrap.querySelectorAll("[data-world-media]"),
      );
      const bar = wrap.querySelector(`.${styles.progressFill}`);
      const ticks = gsap.utils.toArray<HTMLElement>(
        wrap.querySelectorAll("[data-world-tick]"),
      );

      gsap.set(panels, { autoAlpha: 0 });
      gsap.set(media, { autoAlpha: 0, scale: 1.06 });
      gsap.set(panels[0], { autoAlpha: 1 });
      gsap.set(media[0], { autoAlpha: 1, scale: 1 });
      if (bar) gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
      ticks.forEach((t, i) => t.classList.toggle(styles.tickActive, i === 0));

      const state = { i: -1 };

      const show = (index: number) => {
        if (index === state.i) return;
        const nextPanel = panels[index];
        const nextMedia = media[index];
        if (!nextPanel || !nextMedia) return;

        gsap.killTweensOf([...panels, ...media]);

        panels.forEach((p, pi) => {
          gsap.set(p, { autoAlpha: pi === index ? 1 : 0 });
        });
        media.forEach((m, mi) => {
          if (mi === index) {
            gsap.fromTo(
              m,
              { autoAlpha: 0.35, scale: 1.05 },
              {
                autoAlpha: 1,
                scale: 1,
                duration: 0.7,
                ease: "power2.out",
                overwrite: true,
              },
            );
          } else {
            gsap.to(m, {
              autoAlpha: 0,
              duration: 0.45,
              ease: "power1.inOut",
              overwrite: true,
            });
          }
        });

        const title = nextPanel.querySelector("[data-world-title]");
        const detail = nextPanel.querySelectorAll("[data-world-in]");
        if (title) {
          gsap.fromTo(
            title,
            { yPercent: 12, opacity: 0.4 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
              overwrite: true,
            },
          );
        }
        if (detail.length) {
          gsap.fromTo(
            detail,
            { y: 12, opacity: 0.35 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              stagger: 0.04,
              ease: "power2.out",
              overwrite: true,
            },
          );
        }

        ticks.forEach((t, i) =>
          t.classList.toggle(styles.tickActive, i === index),
        );
        state.i = index;
      };

      ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (bar) gsap.set(bar, { scaleX: self.progress });
          const raw =
            self.progress >= 0.999
              ? WORLDS.length - 1
              : Math.floor(self.progress * WORLDS.length);
          show(Math.min(WORLDS.length - 1, Math.max(0, raw)));
        },
        onRefresh: (self) => {
          if (bar) gsap.set(bar, { scaleX: self.progress });
          const raw =
            self.progress >= 0.999
              ? WORLDS.length - 1
              : Math.floor(self.progress * WORLDS.length);
          state.i = -1;
          show(Math.min(WORLDS.length - 1, Math.max(0, raw)));
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      id="worlds"
      className={styles.wrap}
      aria-label="Create, Build, and Grow"
    >
      <div className={styles.pin}>
        <div className={styles.stage}>
          <header className={styles.top}>
            <div className={styles.marker}>
              <span className={styles.markerIndex}>03</span>
              <span className={styles.markerRule} aria-hidden="true" />
              <span className={styles.markerLabel}>Worlds</span>
            </div>
            <p className={styles.eyebrow}>One practice. Three expressions.</p>
          </header>

          <div className={styles.split}>
            <div className={styles.copyCol}>
              <div className={styles.viewport}>
                {WORLDS.map((w) => (
                  <article
                    key={w.slug}
                    className={styles.panel}
                    data-world-panel
                    data-world={w.slug}
                  >
                    <p className={styles.num} data-world-in>
                      {w.num}
                    </p>
                    <h2 className={styles.title} data-world-title>
                      {w.title}
                    </h2>
                    <p className={styles.verb} data-world-in>
                      {w.verb}
                    </p>
                    <p className={styles.body} data-world-in>
                      {w.body}
                    </p>
                    <Link
                      href={`/capabilities/${w.slug}`}
                      className={styles.link}
                      data-world-in
                    >
                      Enter {w.title}
                      <span aria-hidden="true"> →</span>
                    </Link>
                  </article>
                ))}
              </div>

              <ol className={styles.ticks} aria-hidden="true">
                {WORLDS.map((w) => (
                  <li
                    key={w.slug}
                    data-world-tick
                    className={styles.tick}
                  >
                    {w.title}
                  </li>
                ))}
              </ol>
            </div>

            <div className={styles.mediaCol} aria-hidden="true">
              {WORLDS.map((w) => (
                <div
                  key={w.slug}
                  className={styles.mediaPlate}
                  data-world-media
                  data-world={w.slug}
                >
                  <Image
                    src={w.image}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 52vw"
                    className={styles.mediaImg}
                    style={{ objectPosition: w.objectPosition }}
                    priority={w.slug === "create"}
                  />
                  <span className={styles.mediaVeil} />
                  <span className={styles.mediaEdge} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.progress} aria-hidden="true">
            <span className={styles.progressFill} />
          </div>

          <div className={styles.mobileStack}>
            {WORLDS.map((w) => (
              <article key={w.slug} className={styles.mobileCard}>
                <div className={styles.mobileMedia}>
                  <Image
                    src={w.image}
                    alt={w.alt}
                    fill
                    sizes="100vw"
                    className={styles.mediaImg}
                    style={{ objectPosition: w.objectPosition }}
                  />
                  <span className={styles.mediaVeil} />
                </div>
                <p className={styles.num}>{w.num}</p>
                <h2 className={styles.title}>{w.title}</h2>
                <p className={styles.verb}>{w.verb}</p>
                <p className={styles.body}>{w.body}</p>
                <Link href={`/capabilities/${w.slug}`} className={styles.link}>
                  Enter {w.title}
                  <span aria-hidden="true"> →</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
