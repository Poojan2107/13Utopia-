"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getFeaturedCaseStudies } from "@/lib/content";
import styles from "@/styles/home/FeaturedWork.module.css";

gsap.registerPlugin(ScrollTrigger);

const PLATES = [
  {
    image: "/images/hero/hero-gold-sculpture.jpg",
    alt: "Gold silk sculpture — case atmosphere",
    objectPosition: "70% 55%",
    world: "Create",
  },
  {
    image: "/metal-human/metal-human.jpg",
    alt: "Metallic bust — case atmosphere",
    objectPosition: "48% 18%",
    world: "Build",
  },
  {
    image: "/images/hero/portal.jpg",
    alt: "Light portal — case atmosphere",
    objectPosition: "55% 40%",
    world: "Grow",
  },
] as const;

/**
 * 04 — Proof
 * Curated case strips from content — honest placeholders, no invented metrics.
 */
export function FeaturedWork() {
  const ref = useRef<HTMLElement | null>(null);
  const cases = getFeaturedCaseStudies();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const strips = el.querySelectorAll("[data-strip]");
      strips.forEach((strip) => {
        const img = strip.querySelector("[data-strip-img]");
        const copy = strip.querySelectorAll("[data-strip-copy]");

        gsap.from(copy, {
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: strip,
            start: "top 75%",
            once: true,
          },
        });

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.14 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: strip,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="proof"
      className={styles.wrap}
      aria-labelledby="work-title"
    >
      <div className={styles.inner}>
        <header className={styles.head}>
          <div className={styles.marker}>
            <span className={styles.markerIndex}>04</span>
            <span className={styles.markerRule} aria-hidden="true" />
            <span className={styles.markerLabel}>Proof</span>
          </div>
          <h2 id="work-title" className={styles.heading}>
            How ambition
            <br />
            becomes evidence.
          </h2>
        </header>
      </div>

      <ul className={styles.strips}>
        {cases.map((item, i) => {
          const plate = PLATES[i % PLATES.length]!;
          const index = String(i + 1).padStart(2, "0");
          return (
            <li
              key={item.slug}
              className={i % 2 === 1 ? styles.stripAlt : styles.strip}
              data-strip
            >
              <div className={styles.stripMedia} data-strip-media>
                <div className={styles.stripImgWrap} data-strip-img>
                  <Image
                    src={plate.image}
                    alt={plate.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 52vw"
                    className={styles.stripImg}
                    style={{ objectPosition: plate.objectPosition }}
                  />
                </div>
                <span className={styles.stripVeil} aria-hidden="true" />
                <span className={styles.stripWorld}>{plate.world}</span>
              </div>
              <div className={styles.stripCopy}>
                <p className={styles.stripIndex} data-strip-copy>
                  {index}
                </p>
                <p className={styles.stripClient} data-strip-copy>
                  {item.client}
                </p>
                <h3 className={styles.stripTitle} data-strip-copy>
                  <Link href={`/work/${item.slug}`} className={styles.stripTitleLink}>
                    {item.title}
                  </Link>
                </h3>
                <dl className={styles.stripMeta} data-strip-copy>
                  <div>
                    <dt>Challenge</dt>
                    <dd>{item.challenge}</dd>
                  </div>
                  <div>
                    <dt>What we did</dt>
                    <dd>{item.move}</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>{item.result}</dd>
                  </div>
                </dl>
                <Link href={`/work/${item.slug}`} className={styles.stripLink} data-strip-copy>
                  Full case
                  <span aria-hidden="true"> →</span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.inner}>
        <Link href="/work" className={styles.all}>
          View all work
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
