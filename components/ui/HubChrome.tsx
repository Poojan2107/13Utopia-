"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionMedia, type MotionImage } from "@/components/motion/MotionMedia";
import { MaskHover } from "@/components/motion/MaskHover";
import { HoverTilt } from "@/components/motion/HoverTilt";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import { plateForTone, type PlateTone } from "@/content/plates";
import styles from "@/styles/ui/HubChrome.module.css";

gsap.registerPlugin(ScrollTrigger);

type BridgeProps = {
  eyebrow?: string;
  statement: string;
  support?: string;
  need: string;
  tone?: PlateTone;
  image?: MotionImage;
};

/** Editorial beat — TextSplit + MaskHover plate */
export function HubBridge({
  eyebrow = "The Practice",
  statement,
  support,
  need,
  tone = "warm",
  image,
}: BridgeProps) {
  const ref = useRef<HTMLElement | null>(null);
  const plate = image ?? plateForTone(tone);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = el.querySelectorAll("[data-bridge]");
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className={styles.bridge}>
      <div className={styles.bridgeCopy}>
        <div className={styles.bridgeEyebrowRow} data-bridge>
          <UtopianBreak size="sm" className={styles.bridgeBreak} />
          <p className={styles.bridgeEyebrow}>{eyebrow}</p>
        </div>
        <h2 className={styles.bridgeStatement} data-bridge>
          {statement}
        </h2>
        {support ? (
          <p className={styles.bridgeSupport} data-bridge>
            {support}
          </p>
        ) : null}
      </div>
      <div className={styles.bridgeMedia} data-bridge>
        <MaskHover>
          <HoverTilt max={4}>
            <div data-mask-media>
              <MotionMedia
                aspect="wide"
                tone={tone}
                need={need}
                image={plate}
                fill={false}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </HoverTilt>
        </MaskHover>
      </div>
    </section>
  );
}

type StripProps = {
  plates: { need: string; tone?: PlateTone; image?: MotionImage }[];
};

/** Dense visual strip — hover tilt + mask DNA */
export function HubFilmStrip({ plates }: StripProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = el.querySelectorAll("[data-strip]");
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className={styles.strip} aria-hidden="true">
      {plates.map((p) => (
        <div key={p.need} className={styles.stripCard} data-strip>
          <MaskHover className={styles.stripMask}>
            <HoverTilt max={4} className={styles.stripTilt}>
              <div className={styles.stripInner} data-strip-inner data-mask-media>
                <MotionMedia
                  aspect="portrait"
                  tone={p.tone ?? "dark"}
                  need={p.need}
                  image={p.image ?? plateForTone(p.tone ?? "dark")}
                  fill={false}
                  sizes="(max-width: 900px) 45vw, 28vw"
                />
              </div>
            </HoverTilt>
          </MaskHover>
        </div>
      ))}
    </section>
  );
}

type CloserProps = {
  mantra?: string[];
  title: string;
  lead?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

/** Hub close — monumental studio closer */
export function HubCloser({
  mantra = ["BE UNREAL.", "BE UNREASONABLE."],
  title,
  lead,
  primaryHref = "/connect/start-a-project",
  primaryLabel = "Start a Project",
  secondaryHref,
  secondaryLabel,
}: CloserProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = el.querySelectorAll("[data-close]");
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className={styles.closer}>
      <div className={styles.closerEyebrowRow} data-close>
        <UtopianBreak size="sm" className={styles.closerBreak} />
        <p className={styles.closerMantra}>{mantra.join(" ")}</p>
      </div>
      
      <h2 className={styles.closerTitle} data-close>
        {title}
      </h2>
      
      {lead ? (
        <p className={styles.closerLead} data-close>
          {lead}
        </p>
      ) : null}

      <div className={styles.closerActions} data-close>
        <Link href={primaryHref} className={styles.closerPrimary} data-magnetic>
          <span>{primaryLabel}</span>
          <span aria-hidden="true"> →</span>
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link
            href={secondaryHref}
            className={styles.closerSecondary}
            data-magnetic
          >
            <span>{secondaryLabel}</span>
            <span aria-hidden="true"> ↗</span>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
