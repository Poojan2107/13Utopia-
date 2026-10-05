"use client";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { FramerFooter } from "@/components/framer/FramerFooter";
import { FramerSectionCTA } from "@/components/framer/FramerSectionCTA";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import { Hero3DCanvas } from "@/components/home/Hero3DCanvas";
import styles from "@/styles/about/About.module.css";

export default function AboutPage() {
  return (
    <SmoothScrollProvider>
      <AmbientField />
      <SiteHeader />

      <main className={styles.aboutPage}>
        {/* Hero Block */}
        <section className={styles.heroBlock}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.topMeta}>
                <span>02 // ABOUT 13 UTOPIA</span>
                <span>·</span>
                <span className={styles.topMetaTag}>CREATIVE TECHNOLOGY &amp; GROWTH</span>
              </div>

              <h1 className={styles.title}>
                WE BUILD BRANDS, PRODUCTS<br />
                &amp; GROWTH SYSTEMS.
              </h1>

              <p className={styles.thesis}>
                13 Utopia is an independent creative technology and growth company. We unite brand strategy,
                high-performance product engineering, and category-defining growth systems under one roof
                — eliminating agency translation loss and delivering sovereign digital dominance.
              </p>

              <div className={styles.heroActions}>
                <a
                  href="/services"
                  className={styles.ctaPrimary}
                  data-magnetic
                  data-cursor="hover"
                >
                  <span>Explore Capabilities</span>
                  <span className={styles.ctaArrow} aria-hidden="true">
                    →
                  </span>
                </a>
                <a
                  href="mailto:poojan@13utopia.com?subject=Initiate%20Alliance%20%E2%80%94%2013%20UTOPIA"
                  className={styles.ctaGhost}
                  data-cursor="hover"
                >
                  Initiate Alliance
                </a>
              </div>
            </div>

            <div className={styles.heroCanvasStage}>
              <Hero3DCanvas />
            </div>
          </div>
        </section>

        {/* The Triad Architecture */}
        <section className={styles.triadSection}>
          <div className={styles.sectionHeaderGroup}>
            <span className={styles.sectionHeading}>THE TRIAD ENGINE // CAPABILITY ARCHITECTURE</span>
            <h2 className={styles.sectionLead}>Three integrated disciplines. One unreasonable standard.</h2>
          </div>

          <div className={styles.triadGrid}>
            <div className={styles.triadCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardIndex}>01 // CREATE</span>
                <h3 className={styles.cardTitle}>Brand &amp; Spatial Experience</h3>
                <p className={styles.cardDesc}>
                  Original brand strategy, custom visual identity systems, 3D art direction, and cinematic motion design engineered from first principles.
                </p>
              </div>

              <ul className={styles.deliverablesList}>
                <li className={styles.deliverableItem}>Brand Strategy &amp; Identity</li>
                <li className={styles.deliverableItem}>Creative &amp; Art Direction</li>
                <li className={styles.deliverableItem}>UI/UX &amp; Spatial Interfaces</li>
                <li className={styles.deliverableItem}>CGI &amp; 3D Motion Graphics</li>
              </ul>
            </div>

            <div className={styles.triadCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardIndex}>02 // BUILD</span>
                <h3 className={styles.cardTitle}>Product Engineering &amp; AI</h3>
                <p className={styles.cardDesc}>
                  Full-stack digital products, mobile applications, SaaS architectures, autonomous AI workflows, and resilient cloud systems.
                </p>
              </div>

              <ul className={styles.deliverablesList}>
                <li className={styles.deliverableItem}>Web &amp; Mobile Applications</li>
                <li className={styles.deliverableItem}>SaaS Platforms &amp; Custom APIs</li>
                <li className={styles.deliverableItem}>Autonomous AI &amp; Process Workflows</li>
                <li className={styles.deliverableItem}>Cloud Infrastructure &amp; DevOps</li>
              </ul>
            </div>

            <div className={styles.triadCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardIndex}>03 // GROW</span>
                <h3 className={styles.cardTitle}>Search &amp; Growth Systems</h3>
                <p className={styles.cardDesc}>
                  Search architecture, paid acquisition, and content distribution systems engineered to drive qualified pipeline and category position.
                </p>
              </div>

              <ul className={styles.deliverablesList}>
                <li className={styles.deliverableItem}>Technical SEO Architecture</li>
                <li className={styles.deliverableItem}>Performance Marketing &amp; Ads</li>
                <li className={styles.deliverableItem}>Conversion Rate Optimization</li>
                <li className={styles.deliverableItem}>Pipeline Strategy &amp; Analytics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Operating Principles */}
        <section className={styles.principlesSection}>
          <div className={styles.sectionHeaderGroup}>
            <span className={styles.sectionHeading}>OPERATING PRINCIPLES // ZERO TEMPLATES</span>
            <h2 className={styles.sectionLead}>How we operate and build.</h2>
          </div>

          <div className={styles.principlesGrid}>
            <div className={styles.principleBlock}>
              <span className={styles.principleWatermark}>01</span>
              <span className={styles.principleNum}>01 // FIRST PRINCIPLES</span>
              <h3 className={styles.principleTitle}>Custom Architecture Only</h3>
              <p className={styles.principleDesc}>
                We refuse disposable frameworks, off-the-shelf themes, and generic templates. Every system is custom-engineered for your exact commercial, technical, and aesthetic needs.
              </p>
            </div>

            <div className={styles.principleBlock}>
              <span className={styles.principleWatermark}>02</span>
              <span className={styles.principleNum}>02 // ZERO TRANSLATION LOSS</span>
              <h3 className={styles.principleTitle}>Direct Builder Access</h3>
              <p className={styles.principleDesc}>
                No bloated account managers or bureaucratic middlemen. You collaborate directly with the core designers and engineers actually building the product.
              </p>
            </div>

            <div className={styles.principleBlock}>
              <span className={styles.principleWatermark}>03</span>
              <span className={styles.principleNum}>03 // SHIP FAST</span>
              <h3 className={styles.principleTitle}>Speed Without Compromise</h3>
              <p className={styles.principleDesc}>
                By designing and engineering simultaneously under one roof, we eliminate weeks of handover friction and ship production systems at high velocity.
              </p>
            </div>

            <div className={styles.principleBlock}>
              <span className={styles.principleWatermark}>04</span>
              <span className={styles.principleNum}>04 // LONGEVITY</span>
              <h3 className={styles.principleTitle}>Compounding Enterprise Value</h3>
              <p className={styles.principleDesc}>
                We don&apos;t just build for day one. We engineer modular architectures and scalable systems that continue delivering enterprise value as your organization grows.
              </p>
            </div>
          </div>
        </section>

        <FramerSectionCTA />
      </main>

      <FramerFooter />
    </SmoothScrollProvider>
  );
}

