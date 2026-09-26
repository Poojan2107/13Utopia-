"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import styles from "@/styles/ui/HubChrome.module.css";

gsap.registerPlugin(ScrollTrigger);

type BridgeProps = {
  eyebrow?: string;
  statement: string;
  support?: string;
  need: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
};

/** Goodside-style editorial beat — big statement + atmosphere plate */
export function HubBridge({
  eyebrow,
  statement,
  support,
  need,
  tone = "warm",
}: BridgeProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-bridge]"), {
        opacity: 0,
        y: 36,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 72%", once: true },
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
        <p className={styles.bridgeStatement} data-bridge>
          {statement}
        </p>
        {support ? (
          <p className={styles.bridgeSupport} data-bridge>
            {support}
          </p>
        ) : null}
      </div>
      <div className={styles.bridgeMedia} data-bridge>
        <MediaPlaceholder aspect="wide" tone={tone} need={need} />
      </div>
    </section>
  );
}

type StripProps = {
  plates: { need: string; tone?: BridgeProps["tone"] }[];
};

/** Dense visual strip — three atmospheric plates */
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
        y: 48,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      });
      cards.forEach((card) => {
        const img = card.querySelector("[data-strip-inner]");
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -6 },
          {
            yPercent: 6,
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
          <div className={styles.stripInner} data-strip-inner>
            <MediaPlaceholder aspect="portrait" tone={p.tone ?? "dark"} need={p.need} />
          </div>
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

/** Airvoir / homepage FinalCTA energy for hubs */
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
        y: 32,
        duration: 0.95,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 70%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className={styles.closer}>
      <div className={styles.closerGlow} aria-hidden="true" />
      <p className={styles.closerMantra} data-close>
        {mantra.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
      <h2 className={styles.closerTitle} data-close>
        {title}
      </h2>
      {lead ? (
        <p className={styles.closerLead} data-close>
          {lead}
        </p>
      ) : null}
      <div className={styles.closerActions} data-close>
        <Link href={primaryHref} className={styles.closerPrimary}>
          {primaryLabel}
          <span aria-hidden="true"> →</span>
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link href={secondaryHref} className={styles.closerSecondary}>
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
