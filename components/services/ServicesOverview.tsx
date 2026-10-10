"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { FramerSectionCTA } from "@/components/framer/FramerSectionCTA";
import { ServicesHorizontalShowcase } from "@/components/services/ServicesHorizontalShowcase";
import {
  EASE,
  fadeUp,
  staggerParent,
  viewportOnce,
} from "@/components/services/svcMotion";
import { AmbientField, SmoothScrollProvider, ScrollBlurText } from "@/components/motion";
import { Plus3DCanvas } from "@/components/plus-ex/Plus3DCanvas";
import styles from "@/styles/services/ServicesOverview.module.css";

/**
 * Pinned & Omnipresent 3D Architectural Emblem Stage:
 * Visible across Hero, Horizontal Showcase (CREATE, BUILD, GROW), Alliance, and CTA.
 * Fades out ONLY when entering the SiteFooter.
 */
function FixedServices3DStage({
  mainRef,
  footerRef,
}: {
  mainRef: React.RefObject<HTMLElement | null>;
  footerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [progress, setProgress] = useState(0);
  const [hideInFooter, setHideInFooter] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mainEl = mainRef.current;
    const footerEl = footerRef.current;
    if (!mainEl) return;

    let triggerMain: ScrollTrigger | null = null;
    let triggerFooter: ScrollTrigger | null = null;

    const timer = setTimeout(() => {
      triggerMain = ScrollTrigger.create({
        trigger: mainEl,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      });

      if (footerEl) {
        triggerFooter = ScrollTrigger.create({
          trigger: footerEl,
          start: "top 92%",
          end: "bottom top",
          onToggle: (self) => {
            setHideInFooter(self.isActive);
          },
        });
      }
    }, 60);

    let observer: IntersectionObserver | null = null;
    if (footerEl && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHideInFooter(true);
          } else {
            const rect = footerEl.getBoundingClientRect();
            if (rect.top >= window.innerHeight * 0.9) {
              setHideInFooter(false);
            }
          }
        },
        { threshold: [0, 0.05] }
      );
      observer.observe(footerEl);
    }

    return () => {
      clearTimeout(timer);
      triggerMain?.kill();
      triggerFooter?.kill();
      observer?.disconnect();
    };
  }, [mainRef, footerRef]);

  return (
    <div
      className={`${styles.fixed3DStage} ${hideInFooter ? styles.stageHidden : ""}`}
      aria-hidden="true"
    >
      <Plus3DCanvas progress={progress} entryProgress={1} onlyThirteen={true} />
    </div>
  );
}

export function ServicesOverview() {
  const mainRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  return (
    <SmoothScrollProvider>
      {/* Signature 3D Titanium "13" Emblem & Ambient Background - Centered */}
      <AmbientField showEmblem={false} />
      <SiteHeader />

      {/* Persistent 3D Titanium "13" Emblem across entire services page, hidden ONLY in footer */}
      <FixedServices3DStage mainRef={mainRef} footerRef={footerRef} />

      <main ref={mainRef} className={styles.page}>
        {/* HERO SECTION - FULL VIEWPORT CENTERED */}
        <section className={styles.hero}>
          <motion.div
            className={styles.heroContent}
            variants={staggerParent}
            initial="hidden"
            animate="show"
          >
            <ScrollBlurText isHero maxBlur={16} interactiveFocus glowOnFocus>
              <h1 className={styles.title}>
                CREATE. BUILD. GROW.
              </h1>
            </ScrollBlurText>

            <motion.p
              className={styles.lead}
              variants={fadeUp}
              transition={{ duration: 0.85, ease: EASE }}
            >
              We craft bespoke visual identity systems, high-performance web software, and algorithmic growth engines under one unified roof.
            </motion.p>
          </motion.div>
        </section>

        {/* LOCKED GSAP HORIZONTAL SCROLL SHOWCASE */}
        <ServicesHorizontalShowcase />

        {/* ALLIANCE / INTEGRATED DELIVERY SECTION */}
        <motion.section
          className={styles.allianceSection}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <div className={styles.allianceCard}>
            <div className={styles.allianceTop}>
              <span className={styles.allianceTag}>INTEGRATED DELIVERY</span>
              <h2 className={styles.allianceTitle}>One Team. Unified Execution.</h2>
              <p className={styles.allianceDesc}>
                By connecting brand design, technical architecture, and growth strategy within a single dedicated partner, we eliminate handoff friction and accelerate your launch timeline.
              </p>
            </div>
            <div className={styles.allianceTriad}>
              <div className={styles.triadPill}>
                <span className={styles.triadNum}>01</span>
                <strong>CREATE</strong>
                <span>Brand identity, typography &amp; spatial UI/UX</span>
              </div>
              <div className={styles.triadConnector}>+</div>
              <div className={styles.triadPill}>
                <span className={styles.triadNum}>02</span>
                <strong>BUILD</strong>
                <span>High-performance Next.js &amp; SaaS engineering</span>
              </div>
              <div className={styles.triadConnector}>+</div>
              <div className={styles.triadPill}>
                <span className={styles.triadNum}>03</span>
                <strong>GROW</strong>
                <span>Technical SEO, paid media &amp; conversion loops</span>
              </div>
            </div>
          </div>
        </motion.section>

        <FramerSectionCTA />
      </main>
      <div ref={footerRef}>
        <SiteFooter />
      </div>
    </SmoothScrollProvider>
  );
}

