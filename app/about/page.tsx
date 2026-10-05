"use client";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { FramerFooter } from "@/components/framer/FramerFooter";
import { FramerSectionCTA } from "@/components/framer/FramerSectionCTA";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import styles from "@/styles/about/About.module.css";

export default function AboutPage() {
  return (
    <SmoothScrollProvider>
      <AmbientField />
      <SiteHeader />

      <main className={styles.aboutPage}>
        {/* Editorial Asymmetric Hero Stage */}
        <section className={styles.heroSection}>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.topMeta}>
                <span className={styles.metaLiveDot} />
                <span>02 // ABOUT 13 UTOPIA</span>
                <span className={styles.metaSep}>/</span>
                <span className={styles.topMetaTag}>CREATIVE TECHNOLOGY &amp; GROWTH</span>
              </div>

              <h1 className={styles.heroTitle}>
                WE UNITE BRAND, <br />
                CODE &amp; CATEGORY <br />
                <span className={styles.titleGradient}>DOMINANCE.</span>
              </h1>

              <p className={styles.heroThesis}>
                13 Utopia is an independent creative technology and growth company. We unite brand strategy,
                high-performance product engineering, and category-defining growth systems under one roof
                — eliminating agency translation loss and delivering sovereign digital dominance.
              </p>

              <div className={styles.heroActions}>
                <a
                  href="/services"
                  className={styles.ctaPrimary}
                  data-cursor="hover"
                >
                  <span>Explore Capabilities</span>
                  <span className={styles.ctaArrow} aria-hidden="true">→</span>
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

            {/* Right Architectural Dossier Column */}
            <div className={styles.heroRight}>
              <div className={styles.dossierCard}>
                <div className={styles.dossierHeader}>
                  <span className={styles.dossierBadge}>SOVEREIGN OPERATING DOSSIER</span>
                  <span className={styles.dossierIndex}>REF: 13U-V4</span>
                </div>

                <div className={styles.dossierStatGrid}>
                  <div className={styles.dossierStat}>
                    <span className={styles.statNum}>100%</span>
                    <span className={styles.statLabel}>FIRST PRINCIPLES ARCHITECTURE</span>
                  </div>
                  <div className={styles.dossierStat}>
                    <span className={styles.statNum}>0</span>
                    <span className={styles.statLabel}>DISPOSABLE TEMPLATES / THEMES</span>
                  </div>
                  <div className={styles.dossierStat}>
                    <span className={styles.statNum}>2</span>
                    <span className={styles.statLabel}>GLOBAL HUBS (AHMEDABAD &amp; TORONTO)</span>
                  </div>
                </div>

                <div className={styles.dossierFooter}>
                  <p className={styles.dossierQuote}>
                    &ldquo;We do not build disposable websites. We engineer digital assets that permanently outclass competition.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Triad Architecture */}
        <section className={styles.triadSection}>
          <div className={styles.sectionHeaderGroup}>
            <div className={styles.sectionMetaRail}>
              <span className={styles.sectionIndex}>01</span>
              <span className={styles.sectionMetaTag}>THE TRIAD ENGINE // CAPABILITY MATRIX</span>
            </div>
            <h2 className={styles.sectionLead}>Three integrated disciplines. One unreasonable standard.</h2>
          </div>

          <div className={styles.triadGrid}>
            <div className={styles.triadCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIndex}>01 // CREATE</span>
                <span className={styles.cardCategory}>IDENTITY &amp; MOTION</span>
              </div>
              <h3 className={styles.cardTitle}>Brand &amp; Spatial Experience</h3>
              <p className={styles.cardDesc}>
                Original brand strategy, custom visual identity systems, 3D art direction, and cinematic motion design engineered from first principles.
              </p>

              <ul className={styles.deliverablesList}>
                <li className={styles.deliverableItem}>✦ Brand Strategy &amp; Narrative</li>
                <li className={styles.deliverableItem}>✦ Visual Identity &amp; Typography Systems</li>
                <li className={styles.deliverableItem}>✦ UI/UX &amp; Spatial Digital Interfaces</li>
                <li className={styles.deliverableItem}>✦ CGI, Shaders &amp; 3D Motion Graphics</li>
              </ul>
            </div>

            <div className={styles.triadCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIndex}>02 // BUILD</span>
                <span className={styles.cardCategory}>CODE &amp; INTELLIGENCE</span>
              </div>
              <h3 className={styles.cardTitle}>Product Engineering &amp; AI</h3>
              <p className={styles.cardDesc}>
                Full-stack digital products, mobile applications, SaaS architectures, autonomous AI workflows, and resilient cloud infrastructure.
              </p>

              <ul className={styles.deliverablesList}>
                <li className={styles.deliverableItem}>✦ High-Performance Web &amp; Mobile Apps</li>
                <li className={styles.deliverableItem}>✦ SaaS Platforms &amp; API Infrastructure</li>
                <li className={styles.deliverableItem}>✦ Autonomous AI Agents &amp; Workflows</li>
                <li className={styles.deliverableItem}>✦ Cloud Architecture &amp; DevOps Pipelines</li>
              </ul>
            </div>

            <div className={styles.triadCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIndex}>03 // GROW</span>
                <span className={styles.cardCategory}>ACQUISITION &amp; SCALE</span>
              </div>
              <h3 className={styles.cardTitle}>Search &amp; Growth Systems</h3>
              <p className={styles.cardDesc}>
                Search architecture, paid acquisition, and content distribution systems engineered to drive qualified pipeline and category position.
              </p>

              <ul className={styles.deliverablesList}>
                <li className={styles.deliverableItem}>✦ Technical SEO &amp; Search Authority</li>
                <li className={styles.deliverableItem}>✦ High-ROI Performance Marketing</li>
                <li className={styles.deliverableItem}>✦ Conversion Rate Optimization (CRO)</li>
                <li className={styles.deliverableItem}>✦ Pipeline Analytics &amp; Revenue Operations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Operating Principles */}
        <section className={styles.principlesSection}>
          <div className={styles.sectionHeaderGroup}>
            <div className={styles.sectionMetaRail}>
              <span className={styles.sectionIndex}>02</span>
              <span className={styles.sectionMetaTag}>OPERATING PRINCIPLES // ZERO TEMPLATES</span>
            </div>
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
              <h3 className={styles.principleTitle}>High-Velocity Execution</h3>
              <p className={styles.principleDesc}>
                We work in high-intensity sprints with tight feedback loops. Production-ready work is delivered in weeks, not months of slide decks.
              </p>
            </div>

            <div className={styles.principleBlock}>
              <span className={styles.principleWatermark}>04</span>
              <span className={styles.principleNum}>04 // OWNERSHIP</span>
              <h3 className={styles.principleTitle}>Commercial Alignment</h3>
              <p className={styles.principleDesc}>
                We treat your commercial outcomes as our own. If it does not drive real business value, user acquisition, or category leadership, we do not build it.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Conversion Capsule */}
        <FramerSectionCTA />
      </main>

      <FramerFooter />
    </SmoothScrollProvider>
  );
}
