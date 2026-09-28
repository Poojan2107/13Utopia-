"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import { plates } from "@/content/plates";
import { company } from "@/content/site";
import styles from "@/styles/home/FinalCTA.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  kicker?: string;
};

const PILLARS = [
  { label: "Response", val: "Within 24 Hours" },
  { label: "Standard", val: "Partner-Led Delivery" },
  { label: "Presence", val: "India & Canada" },
] as const;

/**
 * FinalCTA — Awwwards Closing Theater with Magnetic Action Portal & Studio Guarantees.
 */
export function FinalCTA({ kicker = "09 · Begin" }: Props = {}) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Parallax background
      const media = el.querySelector<HTMLElement>("[data-cta-media]");
      if (media) {
        gsap.fromTo(
          media,
          { scale: 1.15, y: -20 },
          {
            scale: 1,
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          },
        );
      }

      // Staggered rise
      gsap.from(el.querySelectorAll("[data-cta-fade]"), {
        opacity: 0,
        y: 32,
        duration: 0.95,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 72%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="close"
      className={styles.wrap}
      aria-labelledby="final-cta-title"
    >
      {/* Background Plate & Veils */}
      <div className={styles.media} aria-hidden="true">
        <div className={styles.mediaScale} data-cta-media>
          <Image
            src={plates.grow.src}
            alt=""
            fill
            sizes="100vw"
            className={styles.mediaImg}
            style={{ objectPosition: "50% 45%" }}
          />
        </div>
        <span className={styles.mediaVeil} />
        <span className={styles.mediaGrain} />
      </div>

      <div className={styles.inner}>
        {/* Top Kicker & Break */}
        <header className={styles.header} data-cta-fade>
          <div className={styles.eyebrowRow}>
            <UtopianBreak size="sm" className={styles.break} />
            <p className={styles.kicker}>{kicker}</p>
          </div>
          <p className={styles.manifesto}>BE UNREAL. BE UNREASONABLE.</p>
        </header>

        {/* Main Stage Lockup */}
        <div className={styles.stageGrid}>
          <div className={styles.headlineCol}>
            <h2 id="final-cta-title" className={styles.title} data-cta-fade>
              Ready to build
              <br />
              something
              <br />
              <span className={styles.goldText}>unreal?</span>
            </h2>

            <p className={styles.lead} data-cta-fade>
              Have a problem worth solving, a brand ready to redefine its space,
              or a product that needs high-performance engineering? Let&rsquo;s talk.
            </p>
          </div>

          {/* Action Portal Card */}
          <div className={styles.actionCard} data-cta-fade>
            <div className={styles.cardGlow} aria-hidden="true" />
            
            <div className={styles.cardHead}>
              <span className={styles.cardBadge}>Project Intake</span>
              <span className={styles.statusLive}>
                <span className={styles.liveDot} />
                Booking Q4 / 2026
              </span>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardPrompt}>
                Bring the ambition.
                <br />
                We&rsquo;ll build the engine.
              </h3>
              <p className={styles.cardDesc}>
                Direct access to design leads, systems architects, and growth partners.
              </p>
            </div>

            <div className={styles.buttonGroup}>
              <Link
                href="/connect/start-a-project"
                className={styles.primaryBtn}
                data-magnetic
              >
                <span>Start a Project</span>
                <span className={styles.btnArrow} aria-hidden="true">→</span>
              </Link>
              
              <Link
                href="/connect/general"
                className={styles.secondaryBtn}
                data-magnetic
              >
                <span>Schedule a Call</span>
                <span className={styles.btnArrow} aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className={styles.directChannel}>
              <span className={styles.channelLabel}>Or write directly:</span>
              <a href={`mailto:${company.email}`} className={styles.channelLink}>
                {company.email}
              </a>
            </div>
          </div>
        </div>

        {/* Studio Commitments Bar */}
        <div className={styles.pillarsBar} data-cta-fade>
          {PILLARS.map((p) => (
            <div key={p.label} className={styles.pillarItem}>
              <span className={styles.pillarLabel}>{p.label}</span>
              <span className={styles.pillarVal}>{p.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
