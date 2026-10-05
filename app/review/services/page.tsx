"use client";

import Link from "next/link";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import { SiteFooter } from "@/components/layout";
import { REVIEW_SERVICES, ReviewService } from "@/data/reviewContent";
import styles from "@/styles/services/ServicesOverview.module.css";

export default function ReviewServicesOverviewPage() {
  return (
    <SmoothScrollProvider>
      <AmbientField />
      <ReviewHeader />

      <main className={styles.page} style={{ paddingTop: "140px" }}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>
            02 // DRAFT SERVICES CAPABILITY
          </p>
          <h1 className={styles.title}>
            Six Core Disciplines.<br />
            <span className={styles.titleGold}>Zero AI Slop.</span>
          </h1>
          <p className={styles.lead}>
            The exact real-world services offered on 13utopia.com — Search Engine Optimization, Web Development, CGI Videos &amp; Spatial Motion, Performance Paid Ads, Online Reputation Management (ORM), and Email Marketing &amp; AI Automations — framed under the CREATE, BUILD, GROW standard.
          </p>
        </section>

        <section className={styles.worlds} aria-label="Review Services List">
          {REVIEW_SERVICES.map((s: ReviewService) => (
            <article key={s.slug} className={styles.worldCard}>
              <div className={styles.worldCopy}>
                <div className={styles.worldMeta}>
                  <span>{s.worldTag}</span>
                  <span>{s.indexNum}</span>
                </div>
                <h2 className={styles.worldLabel}>{s.label}.</h2>
                <p className={styles.worldTitle}>{s.title}</p>
                <p className={styles.worldBody}>{s.overview}</p>

                <ul className={styles.capPreview}>
                  {s.deliverables.map((d, dIdx) => (
                    <li key={dIdx}>
                      <span>//</span>
                      <strong>{d.title}</strong>: {d.description}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/review/services/${s.slug}`}
                  className={styles.worldLink}
                >
                  Inspect Full {s.label} Specification
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className={styles.worldMedia} style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 80%)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "2.5rem", borderRadius: "8px" }}>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", color: "rgba(255, 255, 255, 0.6)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  VERIFIED PRODUCTION TECH STACK
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {s.techStack.map((tech, tIdx) => (
                    <span key={tIdx} style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.75rem", padding: "8px 14px", borderRadius: "999px", background: "rgba(255,255,255,0.06)", color: "#ffffff" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <SiteFooter />
    </SmoothScrollProvider>
  );
}
