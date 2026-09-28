"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { plates } from "@/content/plates";
import { company } from "@/content/site";
import { REVEAL } from "@/lib/motion/reveal";
import styles from "@/styles/home/CollectivePreview.module.css";

gsap.registerPlugin(ScrollTrigger);

export function CollectivePreview() {
  const ref = useRef<HTMLElement | null>(null);

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
      id="collective"
      className={styles.wrap}
      aria-labelledby="collective-title"
    >
      <div className={styles.media} aria-hidden="true">
        <Image
          src={plates.collective.src}
          alt=""
          fill
          sizes="100vw"
          className={styles.mediaImg}
          style={{ objectPosition: plates.collective.objectPosition }}
        />
        <span className={styles.mediaVeil} />
      </div>

      <div className={styles.inner}>
        <header className={styles.head} data-rise>
          <p className={styles.kicker}>People</p>
          <h2 id="collective-title" className={styles.heading}>
            Built by people who refuse default.
          </h2>
        </header>

        <div className={styles.split}>
          <p className={styles.body} data-rise>
            {company.about}
          </p>
          <p className={styles.note} data-rise>
            Based in Greater Toronto with practice across India and Canada.
            Named portraits ship with the next photography pass.
          </p>
        </div>

        <div className={styles.actions} data-rise>
          <Link href="/collective/leadership" className={styles.primary}>
            Meet leadership
            <span aria-hidden="true"> →</span>
          </Link>
          <Link href="/our-story" className={styles.secondary}>
            Read our story
          </Link>
        </div>
      </div>
    </section>
  );
}
