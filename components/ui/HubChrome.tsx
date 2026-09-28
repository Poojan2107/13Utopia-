"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionMedia, type MotionImage } from "@/components/motion/MotionMedia";
import { SvgDraw } from "@/components/motion/SvgDraw";
import { TextSplit } from "@/components/motion/TextSplit";
import { MaskHover } from "@/components/motion/MaskHover";
import { HoverTilt } from "@/components/motion/HoverTilt";
import { PhysicsFloat } from "@/components/motion/PhysicsFloat";
import { ScrambleText } from "@/components/motion/ScrambleText";
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

/** Editorial beat — TextSplit + SVG + mask hover plate */
export function HubBridge({
  eyebrow,
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

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-bridge]"), {
        opacity: 0,
        y: 16,
        duration: 0.55,
        stagger: 0.05,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className={styles.bridge}>
      <div className={styles.bridgeCopy}>
        {eyebrow ? (
          <p className={styles.bridgeEyebrow} data-bridge>
            {eyebrow}
          </p>
        ) : null}
        <SvgDraw variant="rule" className={styles.bridgeRule} />
        <TextSplit as="p" mode="word" className={styles.bridgeStatement}>
          {statement}
        </TextSplit>
        {support ? (
          <p className={styles.bridgeSupport} data-bridge>
            {support}
          </p>
        ) : null}
      </div>
      <div className={styles.bridgeMedia} data-bridge>
        <MaskHover>
          <HoverTilt max={5}>
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

    const ctx = gsap.context(() => {
      const cards = el.querySelectorAll("[data-strip]");
      gsap.from(cards, {
        opacity: 0,
        y: 16,
        duration: 0.55,
        stagger: 0.05,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });
      cards.forEach((card) => {
        const img = card.querySelector("[data-strip-inner]");
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -3 },
          {
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
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

/** Hub close — physics float + SVG + text split */
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

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-close]"), {
        opacity: 0,
        y: 14,
        duration: 0.55,
        stagger: 0.05,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className={styles.closer}>
      <div className={styles.closerGlow} aria-hidden="true" />
      <PhysicsFloat amp={9} duration={5.4} className={styles.closerFloat}>
        <span className={styles.closerOrb} aria-hidden="true" />
      </PhysicsFloat>
      <ScrambleText as="p" className={styles.closerMantra}>
        {mantra.join(" ")}
      </ScrambleText>
      <SvgDraw variant="flourish" className={styles.closerRule} />
      <TextSplit as="h2" mode="word" className={styles.closerTitle}>
        {title}
      </TextSplit>
      {lead ? (
        <p className={styles.closerLead} data-close>
          {lead}
        </p>
      ) : null}
      <div className={styles.closerActions} data-close>
        <Link href={primaryHref} className={styles.closerPrimary} data-magnetic>
          {primaryLabel}
          <span aria-hidden="true"> →</span>
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link
            href={secondaryHref}
            className={styles.closerSecondary}
            data-magnetic
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
