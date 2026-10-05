import { notFound } from "next/navigation";
import Link from "next/link";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import { SiteFooter } from "@/components/layout";
import { REVIEW_SERVICES } from "@/data/reviewContent";
import styles from "@/styles/services/ServiceDetail.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return REVIEW_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ReviewServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = REVIEW_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <SmoothScrollProvider>
      <AmbientField />
      <ReviewHeader />

      <main className={styles.page} style={{ paddingTop: "140px" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 6rem)" }}>
          <Link href="/review/services" className={styles.ctaGhost} style={{ marginBottom: "2rem" }}>
            ← Back to All Review Services
          </Link>
        </div>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>
              {service.worldTag}
            </p>
            <h1 className={styles.heroTitle}>
              {service.title}
            </h1>
            <p className={styles.heroLead}>
              {service.tagline}
            </p>
            <p className={styles.heroBody}>
              {service.overview}
            </p>
          </div>

          <div className={styles.heroMedia} style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.035) 0%, transparent 80%)", padding: "clamp(2rem, 4vw, 3.5rem)", borderRadius: "8px" }}>
            <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.6)", letterSpacing: "0.18em", textTransform: "uppercase", display: "block", marginBottom: "1.25rem" }}>
              DISCIPLINE TECH STACK
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {service.techStack.map((tech, tIdx) => (
                <span key={tIdx} style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.78rem", padding: "10px 18px", borderRadius: "999px", background: "rgba(255,255,255,0.06)", color: "#ffffff" }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.blockIndex}>01</span>
            <h2 className={styles.blockTitle}>Core Technical Deliverables</h2>
          </div>
          <div className={styles.capMatrix}>
            {service.deliverables.map((d, idx) => (
              <div key={idx} className={styles.capRow}>
                <span className={styles.capNum}>0{idx + 1}</span>
                <div className={styles.capCopy}>
                  <h3 className={styles.capTitle}>{d.title}</h3>
                  <p className={styles.capDesc}>{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className={styles.block}>
          <div className={styles.blockHead}>
            <span className={styles.blockIndex}>02</span>
            <h2 className={styles.blockTitle}>Commercial Advantages</h2>
          </div>
          <div className={styles.reasonGrid}>
            {service.benefits.map((b, idx) => (
              <article key={idx} className={styles.reasonCard}>
                <span className={styles.reasonNum}>0{idx + 1} // VALUE</span>
                <h3 className={styles.reasonTitle}>{b.heading}</h3>
                <p className={styles.reasonDesc}>{b.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* STAGING APPROVAL NOTICE */}
        <section className={styles.fit}>
          <span className={styles.fitEyebrow}>STAGING REVIEW PASS</span>
          <h2 className={styles.fitTitle}>Zero Gimmicks. Zero Mythology. Pure Craft.</h2>
          <p className={styles.fitBody}>
            This service draft eliminates legacy mythological god references in favor of sovereign engineering and measurable commercial metrics.
          </p>
          <Link href="/review/services" className={styles.ctaPrimary}>
            <span>Back to Services List</span>
            <span>→</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </SmoothScrollProvider>
  );
}
