"use client";

import Link from "next/link";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import { Hero3DCanvas } from "@/components/home/Hero3DCanvas";
import { SiteFooter } from "@/components/layout";
import styles from "@/styles/about/About.module.css";

export default function ReviewAboutPage() {
  return (
    <SmoothScrollProvider>
      <AmbientField />
      <ReviewHeader />

      <main className={styles.aboutPage} style={{ paddingTop: "140px" }}>
        {/* Hero Block */}
        <section className={styles.heroBlock}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.topMeta}>
                <span>03 // DRAFT ABOUT</span>
                <span>·</span>
                <span className={styles.topMetaTag}>13 UTOPIA STUDIO CREDENTIALS</span>
              </div>

              <h1 className={styles.title}>
                CREATIVE TECH, BRAND<br />
                &amp; REVENUE SYSTEMS.
              </h1>

              <p className={styles.thesis}>
                13 Utopia is an independent creative technology and digital marketing company operating globally. We bridge the structural gap between world-class brand aesthetic, deep full-stack engineering, and high-performance search and growth systems.
              </p>
            </div>

            <div className={styles.heroCanvasStage}>
              <Hero3DCanvas />
            </div>
          </div>
        </section>

        {/* Operating Scope */}
        <section className={styles.hubsSection}>
          <div className={styles.sectionHeaderGroup}>
            <span className={styles.sectionHeading}>GLOBAL ENGAGEMENT // WORLDWIDE DELIVERY</span>
            <h2 className={styles.sectionLead}>Direct senior-partner execution for international brands.</h2>
          </div>

          <div className={styles.hubsGrid}>
            <div className={styles.hubCard}>
              <h3 className={styles.hubCity}>Independent Creative Direction</h3>
              <p className={styles.hubDesc}>
                Direct executive client partnerships, brand positioning, spatial UI architecture, and high-conversion visual systems built with bespoke craftsmanship.
              </p>
            </div>

            <div className={styles.hubCard}>
              <h3 className={styles.hubCity}>Full-Stack Engineering &amp; Growth</h3>
              <p className={styles.hubDesc}>
                Modern web architectures, AI workflows, WebGL graphics pipelines, and technical SEO operations engineered with zero templates and 100% IP transfer.
              </p>
            </div>
          </div>
        </section>

        {/* Operating Principles */}
        <section className={styles.principlesSection}>
          <div className={styles.sectionHeaderGroup}>
            <span className={styles.sectionHeading}>OPERATING PRINCIPLES // ZERO TEMPLATES</span>
            <h2 className={styles.sectionLead}>Our standard of engagement.</h2>
          </div>

          <div className={styles.principlesGrid}>
            <div className={styles.principleBlock}>
              <span className={styles.principleWatermark}>01</span>
              <span className={styles.principleNum}>01 // ZERO TEMPLATES</span>
              <h3 className={styles.principleTitle}>First-Principles Code</h3>
              <p className={styles.principleDesc}>
                Every web product, 3D asset, and search strategy is custom engineered for your specific organization with 100% intellectual property transfer upon delivery.
              </p>
            </div>

            <div className={styles.principleBlock}>
              <span className={styles.principleWatermark}>02</span>
              <span className={styles.principleNum}>02 // DIRECT CRAFT</span>
              <h3 className={styles.principleTitle}>Senior Partner Access</h3>
              <p className={styles.principleDesc}>
                Zero translation loss. You work directly with senior creative directors, system architects, and growth leads from day one.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </SmoothScrollProvider>
  );
}
