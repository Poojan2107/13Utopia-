"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICE_WORLDS } from "@/data/services";
import styles from "@/styles/services/ServicesHorizontalShowcase.module.css";

const WORLDS = [
  {
    ...SERVICE_WORLDS.create,
    category: "BRANDING · VISUAL IDENTITY · UI/UX",
  },
  {
    ...SERVICE_WORLDS.build,
    category: "WEB APPS · SAAS · AI WORKFLOWS",
  },
  {
    ...SERVICE_WORLDS.grow,
    category: "SEO · PERFORMANCE ADS · CRO",
  },
] as const;

export function ServicesHorizontalShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);
      const totalScrollDistance = Math.max(3000, window.innerHeight * 3.6);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
      });

      const panels = gsap.utils.toArray<HTMLElement>(`.${styles.panel}`);

      ScrollTrigger.create({
        id: "services-horizontal-scroll",
        animation: tween,
        trigger: section,
        start: "top top",
        end: () => `+=${totalScrollDistance}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;

          // Continuous Gaussian optical depth-of-field bell curve
          panels.forEach((panel, i) => {
            const labelEl = panel.querySelector(`.${styles.panelLabel}`) as HTMLElement;
            const copyEl = panel.querySelector(`.${styles.panelCopy}`) as HTMLElement;

            // Target focal progress per panel: 0.0 -> CREATE, 0.50 -> BUILD, 1.0 -> GROW
            const targetP = i * 0.5;
            const distance = Math.abs(p - targetP);

            // Gaussian bell curve: 1.0 at center, smoothly decays with zero abrupt corners
            const focus = Math.exp(-Math.pow(distance / 0.26, 2));

            const blurAmount = (1 - focus) * 24;
            const opacityAmount = 0.22 + focus * 0.78;
            const scaleAmount = 0.94 + focus * 0.06;
            const letterSpacing = (1 - focus) * 0.035;

            if (labelEl && !labelEl.dataset.hovered) {
              labelEl.style.filter = `blur(${blurAmount.toFixed(1)}px)`;
              labelEl.style.opacity = opacityAmount.toFixed(2);
              labelEl.style.transform = `scale(${scaleAmount.toFixed(3)}) translate3d(0,0,0)`;
              labelEl.style.letterSpacing = `${letterSpacing.toFixed(3)}em`;
            }

            if (copyEl && !copyEl.dataset.hovered) {
              const secondaryBlur = (1 - focus) * 6;
              copyEl.style.filter = `blur(${secondaryBlur.toFixed(1)}px)`;
            }
          });
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleLabelMouseEnter = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const el = e.currentTarget;
    el.dataset.hovered = "true";
    el.style.filter = "blur(0px)";
    el.style.opacity = "1";
    el.style.transform = "scale(1.02) translate3d(0,0,0)";
  };

  const handleLabelMouseLeave = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const el = e.currentTarget;
    delete el.dataset.hovered;
  };

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Services Horizontal Showcase">
      {/* Main Horizontal Track */}
      <div className={styles.trackContainer}>
        <div ref={trackRef} className={styles.track}>
          {WORLDS.map((w, idx) => (
            <div key={w.slug} className={styles.panel}>
              <div className={styles.panelContent}>
                <div className={styles.panelCopy}>
                  <div className={styles.panelMetaRail}>
                    <span className={styles.panelIndex}>0{idx + 1} // 03</span>
                    <span className={styles.panelCategory}>{w.category}</span>
                  </div>

                  {/* Progressive Defocus / Blur Typography */}
                  <h2
                    className={styles.panelLabel}
                    onMouseEnter={handleLabelMouseEnter}
                    onMouseLeave={handleLabelMouseLeave}
                    data-cursor="hover"
                  >
                    {w.label}.
                  </h2>
                  <p className={styles.panelTitle}>{w.title}</p>
                  <p className={styles.panelLead}>{w.heroLead}</p>

                  {/* Architectural Capability Matrix */}
                  <div className={styles.capabilitiesMatrix}>
                    {w.capabilities.map((c) => (
                      <div key={c.num} className={styles.capabilityRow}>
                        <span className={styles.capNum}>{c.num}</span>
                        <span className={styles.capTitle}>{c.title}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.actionRow}>
                    <Link
                      href="/contact"
                      className={styles.worldLink}
                      data-cursor="hover"
                    >
                      <span>{w.ctaLabel || `Start with ${w.label}`}</span>
                      <span className={styles.linkArrow} aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href="/work"
                      className={styles.ghostLink}
                      data-cursor="hover"
                    >
                      <span>Selected Work ↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
