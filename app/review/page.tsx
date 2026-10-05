"use client";

import Link from "next/link";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import { SiteFooter } from "@/components/layout";
import { REVIEW_BLOG_POSTS, REVIEW_SERVICES } from "@/data/reviewContent";
import styles from "@/styles/about/About.module.css";

export default function ReviewHubPage() {
  return (
    <SmoothScrollProvider>
      <AmbientField />
      <ReviewHeader />

      <main className={styles.aboutPage} style={{ paddingTop: "140px" }}>
        {/* Review Hub Hero */}
        <section className={styles.heroBlock}>
          <div className={styles.topMeta}>
            <span>CONTENT STAGING &amp; REVIEW HUB</span>
            <span>·</span>
            <span className={styles.topMetaTag}>13UTOPIA.COM LIVE MIGRATION DRAFT</span>
          </div>

          <h1 className={styles.title} style={{ marginTop: "1rem" }}>
            CONTENT REVIEW &amp;<br />
            STAGING ENVIRONMENT
          </h1>

          <p className={styles.thesis} style={{ marginTop: "1.5rem" }}>
            This isolated staging route contains all real-world content extracted from <strong>13utopia.com</strong>,
            rewritten into our high-contrast, dark noir, borderless design system.
            All AI slop, fake claims, and historical &quot;gods/mythology&quot; themes have been purged and replaced with pure senior engineering and creative authority.
          </p>
        </section>

        {/* Audit Status Matrix */}
        <section className={styles.triadSection}>
          <div className={styles.sectionHeaderGroup}>
            <span className={styles.sectionHeading}>01 // CONTENT REFINEMENT PASS</span>
            <h2 className={styles.sectionLead}>What was purged vs. what was elevated</h2>
          </div>

          <div className={styles.triadGrid}>
            <div className={styles.triadCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardIndex}>PURGED</span>
                <h3 className={styles.cardTitle}>Gods Theme &amp; Gimmicks</h3>
                <p className={styles.cardDesc}>
                  Removed all &quot;Zeus SEO Power&quot;, &quot;Hermes speed&quot;, and mythological tropes. Replaced with technical entity graphs, Core Web Vitals engineering, and clean commercial language.
                </p>
              </div>
            </div>

            <div className={styles.triadCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardIndex}>PURGED</span>
                <h3 className={styles.cardTitle}>Tools as Tech &amp; AI Slop</h3>
                <p className={styles.cardDesc}>
                  Purged generic tool lists (OpenAI, Claude, Midjourney, Make, Vercel) pretending to be services. Replaced with actual engineering stacks: Next.js, Python, FastAPI, Three.js, PostgreSQL, and LangGraph.
                </p>
              </div>
            </div>

            <div className={styles.triadCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardIndex}>ELEVATED</span>
                <h3 className={styles.cardTitle}>Real 13 Utopia Offerings</h3>
                <p className={styles.cardDesc}>
                  Structured into the Triad: <strong>CREATE</strong> (Brand, CGI &amp; Spatial 3D), <strong>BUILD</strong> (Web Dev, Headless E-Commerce, AI Workflows), and <strong>GROW</strong> (SEO, Paid Ads, ORM &amp; Retention).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Staging Sections List */}
        <section className={styles.principlesSection}>
          <div className={styles.sectionHeaderGroup}>
            <span className={styles.sectionHeading}>02 // DRAFTED SECTIONS READY FOR YOUR REVIEW</span>
            <h2 className={styles.sectionLead}>Select a section to inspect and approve:</h2>
          </div>

          <div className={styles.principlesGrid}>
            <Link href="/review/blog" className={styles.principleBlock} style={{ textDecoration: "none", color: "inherit" }}>
              <span className={styles.principleWatermark}>01</span>
              <span className={styles.principleNum}>SECTION 01 // JOURNAL</span>
              <h3 className={styles.principleTitle}>10 Real Blog Posts →</h3>
              <p className={styles.principleDesc}>
                All 10 authentic articles from 13utopia.com (ORM, CGI Future of Advertising, Retention Email, Interactive WebGL Design, Innovative Brand Design, Local SEO, and Enterprise Search Architecture).
              </p>
            </Link>

            <Link href="/review/services" className={styles.principleBlock} style={{ textDecoration: "none", color: "inherit" }}>
              <span className={styles.principleWatermark}>02</span>
              <span className={styles.principleNum}>SECTION 02 // SERVICES</span>
              <h3 className={styles.principleTitle}>6 Core Service Offerings →</h3>
              <p className={styles.principleDesc}>
                Technical SEO, Full-Stack Web Development, CGI Videos &amp; 3D Commercials, Paid Acquisition / Performance Marketing, Online Reputation Management (ORM), and Email Marketing &amp; AI Automation.
              </p>
            </Link>

            <Link href="/review/about" className={styles.principleBlock} style={{ textDecoration: "none", color: "inherit" }}>
              <span className={styles.principleWatermark}>03</span>
              <span className={styles.principleNum}>SECTION 03 // ABOUT</span>
              <h3 className={styles.principleTitle}>Studio Story &amp; Dual Hubs →</h3>
              <p className={styles.principleDesc}>
                Real founding credentials, dual operational hubs in Scarborough / Toronto, Canada &amp; Ahmedabad / Delhi, India with active timezone telemetry and zero-template operating principles.
              </p>
            </Link>

            <Link href="/review/contact" className={styles.principleBlock} style={{ textDecoration: "none", color: "inherit" }}>
              <span className={styles.principleWatermark}>04</span>
              <span className={styles.principleNum}>SECTION 04 // CONTACT</span>
              <h3 className={styles.principleTitle}>Client Intake &amp; Office Details →</h3>
              <p className={styles.principleDesc}>
                Real company phone number (+1 437-603-9004), official address (30 Kimbercroft Ct, Scarborough, ON M1S 4K9), verified email (`info@13utopia.com`), and interactive commission scope generator.
              </p>
            </Link>

            <Link href="/review/backgrounds" className={styles.principleBlock} style={{ textDecoration: "none", color: "inherit" }}>
              <span className={styles.principleWatermark}>05</span>
              <span className={styles.principleNum}>SECTION 05 // VISUAL LAB</span>
              <h3 className={styles.principleTitle}>5 Background Concepts Review Lab →</h3>
              <p className={styles.principleDesc}>
                Live interactive testing ground for 5 luxury background directions (Liquid Obsidian, Spatial Architecture, Studio Darkroom, Optical Glass, Crystalline Stardust) behind the real 3D emblem.
              </p>
            </Link>
          </div>
        </section>

        {/* Final Approval Action */}
        <section className={styles.aboutCta} style={{ marginTop: "4rem" }}>
          <h2 className={styles.ctaTitle}>
            HOW TO APPROVE &amp; PUSH TO MAIN
          </h2>
          <p className={styles.thesis} style={{ color: "rgba(255,255,255,0.8)" }}>
            Review all pages above. Once you confirm the copy and layout, let me know and I will promote this drafted content directly into the main routes (`/`, `/blog`, `/services`, `/about`, `/contact`).
          </p>
        </section>
      </main>

      <SiteFooter />
    </SmoothScrollProvider>
  );
}
