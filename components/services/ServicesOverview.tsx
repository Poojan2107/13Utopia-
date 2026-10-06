"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
import styles from "@/styles/services/ServicesOverview.module.css";

export function ServicesOverview() {
  return (
    <SmoothScrollProvider>
      {/* Signature 3D Titanium "13" Emblem & Ambient Background - Centered */}
      <AmbientField showEmblem={true} emblemOffsetX={0} />
      <SiteHeader />

      <main className={styles.page}>
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
      <SiteFooter />
    </SmoothScrollProvider>
  );
}

