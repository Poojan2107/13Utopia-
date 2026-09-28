"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextSplit } from "@/components/motion/TextSplit";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { SvgDraw } from "@/components/motion/SvgDraw";
import { plates } from "@/content/plates";
import styles from "@/styles/home/FinalCTA.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * Close theater — full-bleed media + scramble manifesto.
 */
export function FinalCTA() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-fade]"), {
        opacity: 0,
        y: 24,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      });

      const media = el.querySelector<HTMLElement>("[data-cta-media]");
      if (media) {
        gsap.fromTo(
          media,
          { scale: 1.16 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.55,
            },
          },
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="close"
      className={styles.wrap}
      aria-labelledby="final-cta-title"
    >
      <div className={styles.media} aria-hidden="true">
        <div className={styles.mediaScale} data-cta-media>
          <Image
            src={plates.grow.src}
            alt=""
            fill
            sizes="100vw"
            className={styles.mediaImg}
            style={{ objectPosition: "50% 55%" }}
          />
        </div>
        <span className={styles.mediaVeil} />
        <span className={styles.mediaGrain} />
      </div>

      <div className={styles.inner}>
        <ScrambleText as="p" className={styles.manifesto}>
          BE UNREAL. BE UNREASONABLE.
        </ScrambleText>

        <p className={styles.kicker} data-fade>
          Begin
        </p>

        <SvgDraw variant="flourish" className={styles.flourish} />

        <TextSplit
          id="final-cta-title"
          as="h2"
          mode="word"
          className={styles.title}
        >
          What are you trying to make happen?
        </TextSplit>

        <p className={styles.lead} data-fade>
          Bring the problem. We&rsquo;ll question the obvious — then create,
          build, and grow what comes next.
        </p>

        <div className={styles.actions} data-fade>
          <Link
            href="/connect/start-a-project"
            className={styles.primary}
            data-magnetic
          >
            Start a project
            <span aria-hidden="true"> →</span>
          </Link>
          <Link
            href="/connect/discovery"
            className={styles.secondary}
            data-magnetic
          >
            Book a discovery call
          </Link>
        </div>
      </div>
    </section>
  );
}
