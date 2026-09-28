"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { plates } from "@/content/plates";
import { getFeaturedCaseStudies } from "@/lib/content";
import { REVEAL } from "@/lib/motion/reveal";
import styles from "@/styles/home/FeaturedWork.module.css";

gsap.registerPlugin(ScrollTrigger);

const CASE_PLATES = [plates.work, plates.create, plates.build] as const;

export function FeaturedWork() {
  const ref = useRef<HTMLElement | null>(null);
  const cases = getFeaturedCaseStudies();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-rise]"), {
        opacity: 0,
        y: REVEAL.y,
        duration: REVEAL.duration,
        stagger: REVEAL.stagger,
        ease: REVEAL.ease,
        clearProps: "all",
        scrollTrigger: { trigger: el, start: REVEAL.start, once: true },
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
        <header className={styles.head} data-rise>
          <p className={styles.kicker}>Selected work</p>
          <h2 id="work-title" className={styles.heading}>
            How ambition becomes evidence.
          </h2>
          <p className={styles.pendingLede}>
            Stories from published client feedback on{" "}
            <a href="https://13utopia.com/" className={styles.sourceLink}>
              13utopia.com
            </a>
            . Photography kit in place — verified metrics land when cleared.
          </p>
        </header>
      </div>

      <ul className={styles.strips}>
        {cases.map((item, i) => {
          const plate = CASE_PLATES[i % CASE_PLATES.length]!;
          return (
            <li
              key={item.slug}
              className={i % 2 === 1 ? styles.stripAlt : styles.strip}
              data-rise
            >
              <div className={styles.stripMedia}>
                <div className={styles.stripImgWrap}>
                  <Image
                    src={plate.src}
                    alt={plate.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 52vw"
                    className={styles.stripImg}
                    style={{ objectPosition: plate.objectPosition }}
                  />
                </div>
                <span className={styles.stripVeil} aria-hidden="true" />
                <span className={styles.stripWorld}>{item.client}</span>
              </div>
              <div className={styles.stripCopy}>
                <p className={styles.stripIndex}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className={styles.stripClient}>{item.industry}</p>
                <h3 className={styles.stripTitle}>
                  <Link
                    href={`/work/${item.slug}`}
                    className={styles.stripTitleLink}
                  >
                    {item.title}
                  </Link>
                </h3>
                <dl className={styles.stripMeta}>
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
                <Link href={`/work/${item.slug}`} className={styles.stripLink}>
                  Read the case study
                  <span aria-hidden="true"> →</span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.inner}>
        <Link href="/work" className={styles.all} data-rise>
          View all work
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
