"use client";

import { SiteHeader, SiteFooter } from "@/components/layout";
import { FramerSectionCTA } from "@/components/framer/FramerSectionCTA";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import styles from "@/styles/about/About.module.css";

export default function AboutPage() {
  return (
    <SmoothScrollProvider>
      <AmbientField />
      <SiteHeader />

      <main className={styles.aboutPage}>
        {/* Editorial Studio Profile Hero */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.topMeta}>
              <span className={styles.metaLiveDot} />
              <span>02 // COMPANY PROFILE</span>
              <span className={styles.metaSep}>·</span>
              <span className={styles.topMetaTag}>13 UTOPIA</span>
            </div>

            <h1 className={styles.heroTitle}>
              ENGINEERED FOR
              <br />
              <span className={styles.titleGradient}>UNREASONABLE</span>
              <br />
              AMBITION.
            </h1>
          </div>
        </section>

        {/* The Triad Architecture — Alternating Staggered Rows */}
        <section className={styles.triadSection}>
          <div className={styles.sectionHeaderGroup}>
            <div className={styles.sectionMetaRail}>
              <span className={styles.sectionIndex}>01</span>
              <span className={styles.sectionMetaTag}>THE TRIAD ENGINE // CAPABILITY MATRIX</span>
            </div>
            <h2 className={styles.sectionLead}>Three integrated disciplines. One unreasonable standard.</h2>
          </div>

          <div className={styles.triadFlow}>
            {/* World 01: CREATE */}
            <article className={`${styles.triadRow} ${styles.triadRowLeft}`}>
              <div className={styles.triadMeta}>
                <span className={styles.cardIndex}>01 // CREATE</span>
                <span className={styles.cardCategory}>IDENTITY &amp; SPATIAL MOTION</span>
              </div>
              <h3 className={styles.cardTitle}>Brand &amp; Spatial Experience</h3>
              <p className={styles.cardDesc}>
                Original brand strategy, custom visual identity systems, 3D art direction, and cinematic motion design engineered from first principles to command category attention.
              </p>
              <div className={styles.tagMatrix}>
                <span className={styles.tagItem}>Brand Strategy &amp; Narrative</span>
                <span className={styles.tagDot}>·</span>
                <span className={styles.tagItem}>Visual Identity &amp; Type</span>
                <span className={styles.tagDot}>·</span>
                <span className={styles.tagItem}>Spatial Digital UI/UX</span>
                <span className={styles.tagDot}>·</span>
                <span className={styles.tagItem}>CGI, Shaders &amp; 3D Motion</span>
              </div>
              <a href="/services/create" className={styles.worldLink} data-cursor="hover">
                <span>Explore CREATE World</span>
                <span aria-hidden="true">→</span>
              </a>
            </article>

            {/* World 02: BUILD */}
            <article className={`${styles.triadRow} ${styles.triadRowRight}`}>
              <div className={styles.triadMeta}>
                <span className={styles.cardIndex}>02 // BUILD</span>
                <span className={styles.cardCategory}>CODE &amp; INTELLIGENCE</span>
              </div>
              <h3 className={styles.cardTitle}>Product Engineering &amp; AI</h3>
              <p className={styles.cardDesc}>
                Full-stack digital products, mobile applications, SaaS architectures, autonomous AI workflows, and resilient cloud infrastructure built to scale infinitely.
              </p>
              <div className={styles.tagMatrix}>
                <span className={styles.tagItem}>High-Performance Web &amp; Apps</span>
                <span className={styles.tagDot}>·</span>
                <span className={styles.tagItem}>SaaS &amp; API Infrastructure</span>
                <span className={styles.tagDot}>·</span>
                <span className={styles.tagItem}>Autonomous AI Workflows</span>
                <span className={styles.tagDot}>·</span>
                <span className={styles.tagItem}>Cloud Architecture</span>
              </div>
              <a href="/services/build" className={styles.worldLink} data-cursor="hover">
                <span>Explore BUILD World</span>
                <span aria-hidden="true">→</span>
              </a>
            </article>

            {/* World 03: GROW */}
            <article className={`${styles.triadRow} ${styles.triadRowLeft}`}>
              <div className={styles.triadMeta}>
                <span className={styles.cardIndex}>03 // GROW</span>
                <span className={styles.cardCategory}>ACQUISITION &amp; SCALE</span>
              </div>
              <h3 className={styles.cardTitle}>Search &amp; Growth Systems</h3>
              <p className={styles.cardDesc}>
                Search architecture, paid acquisition, and content distribution systems engineered to compound attention into qualified pipeline and sovereign market position.
              </p>
              <div className={styles.tagMatrix}>
                <span className={styles.tagItem}>Technical SEO &amp; Authority</span>
                <span className={styles.tagDot}>·</span>
                <span className={styles.tagItem}>High-ROI Acquisition</span>
                <span className={styles.tagDot}>·</span>
                <span className={styles.tagItem}>Conversion Optimization</span>
                <span className={styles.tagDot}>·</span>
                <span className={styles.tagItem}>Pipeline &amp; Revenue Ops</span>
              </div>
              <a href="/services/grow" className={styles.worldLink} data-cursor="hover">
                <span>Explore GROW World</span>
                <span aria-hidden="true">→</span>
              </a>
            </article>
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
            </div>

            <div className={styles.principleBlock}>
              <span className={styles.principleWatermark}>02</span>
              <span className={styles.principleNum}>02 // ZERO TRANSLATION LOSS</span>
              <h3 className={styles.principleTitle}>Direct Builder Access</h3>
            </div>

            <div className={styles.principleBlock}>
              <span className={styles.principleWatermark}>03</span>
              <span className={styles.principleNum}>03 // SHIP FAST</span>
              <h3 className={styles.principleTitle}>High-Velocity Execution</h3>
            </div>

            <div className={styles.principleBlock}>
              <span className={styles.principleWatermark}>04</span>
              <span className={styles.principleNum}>04 // OWNERSHIP</span>
              <h3 className={styles.principleTitle}>Commercial Alignment</h3>
            </div>
          </div>
        </section>

        {/* Closing Conversion Capsule */}
        <FramerSectionCTA />
      </main>

      <SiteFooter />
    </SmoothScrollProvider>
  );
}
