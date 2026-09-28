"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { MotionImage } from "@/components/motion/MotionMedia";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import { plates } from "@/content/plates";
import styles from "@/styles/work/WorkFinale.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  image?: MotionImage;
  statement?: string;
  support?: string;
  title?: string;
  lead?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

/**
 * Work Finale — full-bleed cinema closer. No container chrome.
 */
export function WorkFinale({
  image = plates.grow,
  statement = "Ambition becomes evidence when Create, Build, and Grow move together.",
  support = "Stories from published client work. Metrics only when verified.",
  title = "Have a story to write?",
  lead = "Bring the challenge. We’ll find the move.",
  primaryHref = "/connect/start-a-project",
  primaryLabel = "Start a Project",
  secondaryHref = "/capabilities",
  secondaryLabel = "Capabilities",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stage = root.querySelector<HTMLElement>("[data-finale-stage]");
    const plate = root.querySelector<HTMLElement>("[data-finale-plate]");
    const lines = root.querySelectorAll("[data-finale-line]");

    if (!stage) return;

    const ctx = gsap.context(() => {
      if (plate) gsap.set(plate, { scale: 1.16 });
      gsap.set(lines, { autoAlpha: 0, y: 36 });

      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: () => `+=${Math.round(window.innerHeight * 2.2)}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.65,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (plate) {
            gsap.set(plate, {
              scale: gsap.utils.interpolate(1.16, 1, self.progress),
            });
          }
          const reveal = gsap.utils.clamp(0, 1, (self.progress - 0.08) / 0.35);
          lines.forEach((el, i) => {
            const local = gsap.utils.clamp(0, 1, (reveal - i * 0.08) / 0.4);
            gsap.set(el, {
              autoAlpha: local,
              y: gsap.utils.interpolate(36, 0, local),
            });
          });
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className={styles.root} aria-label="Close">
      <div className={styles.stage} data-finale-stage>
        <div className={styles.plate} data-finale-plate>
          <Image
            src={image.src}
            alt={image.alt || ""}
            fill
            sizes="100vw"
            className={styles.plateImg}
            style={{ objectPosition: image.objectPosition ?? "55% 50%" }}
          />
          <div className={styles.veil} aria-hidden="true" />
          <div className={styles.grain} aria-hidden="true" />
        </div>

        <div className={styles.inner}>
          <div className={styles.top} data-finale-line>
            <UtopianBreak size="sm" className={styles.break} />
            <p className={styles.eyebrow}>Proof</p>
          </div>
          <p className={styles.statement} data-finale-line>
            {statement}
          </p>
          <p className={styles.support} data-finale-line>
            {support}
          </p>
          <h2 className={styles.title} data-finale-line>
            {title}
          </h2>
          <p className={styles.lead} data-finale-line>
            {lead}
          </p>
          <div className={styles.actions} data-finale-line>
            <Link href={primaryHref} className={styles.primary} data-magnetic>
              {primaryLabel}
              <span aria-hidden="true"> →</span>
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className={styles.secondary} data-magnetic>
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
