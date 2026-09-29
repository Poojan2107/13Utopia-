import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  PageReveal,
} from "@/components/motion";
import {
  Container,
  DetailCloser,
  DetailCtaRow,
  PageHero,
} from "@/components/ui";
import { plates } from "@/content/plates";
import { getPerspectiveArticles } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Perspective | 13 UTOPIA",
    description:
      "Editorial monographs and strategic research from 13 UTOPIA — exploring the intersections of Brand, Technology, Product, and Growth.",
  },
  path: "/perspective",
});

const ARTICLE_IMAGES = [
  plates.heroSculpture.src,
  plates.grow.src,
  plates.build.src,
];

export default function PerspectiveHubPage() {
  const articles = getPerspectiveArticles();
  const featuredArticle = articles[0]!;
  const restArticles = articles.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Perspective · Monograph Vol. 01"
        title="Thinking that crosses disciplines"
        description="We publish when we have something vital to say — Brand × Technology, Product × Growth, and the spaces between."
        layout="full"
        media={
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src={plates.work.src}
              alt="13 Utopia Perspective"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "50% 45%" }}
            />
          </div>
        }
      />

      <Container className={hub.body}>
        {/* Editorial Section Header */}
        <PageReveal>
          <div className={hub.editorialLeadBlock} data-reveal>
            <div className={hub.editorialKicker}>
              <span className={hub.editorialKickerDot} aria-hidden="true" />
              <span>Cover Story · Featured Monograph</span>
            </div>
            <h2 className={hub.editorialLeadTitle}>
              Selected Research & Essays
            </h2>
          </div>
        </PageReveal>

        {/* Featured Cover Story Banner */}
        <PageReveal>
          <article
            style={{
              position: "relative",
              borderRadius: "1.5rem",
              overflow: "hidden",
              border: "1px solid rgba(232, 197, 106, 0.35)",
              background: "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(35, 26, 12, 0.4) 0%, rgba(12, 11, 9, 0.85) 70%)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.85)",
              marginBottom: "clamp(3rem, 6vh, 4.5rem)",
            }}
            data-reveal
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "clamp(2rem, 4vw, 3.5rem)", padding: "clamp(2rem, 5vw, 3.5rem)", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-gold)" }}>
                    {featuredArticle.category}
                  </span>
                  <span style={{ color: "rgba(243, 241, 234, 0.3)" }}>·</span>
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.6875rem", color: "rgba(243, 241, 234, 0.6)" }}>
                    {featuredArticle.readingTime} read
                  </span>
                </div>

                <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.8vw, 3.25rem)", fontWeight: 400, letterSpacing: "-0.035em", lineHeight: "1.02", color: "#f7f4ec" }}>
                  <Link href={`/perspective/${featuredArticle.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {featuredArticle.title}
                  </Link>
                </h3>

                <p style={{ margin: "0", fontFamily: "var(--font-ui)", fontSize: "1rem", lineHeight: "1.65", color: "rgba(243, 241, 234, 0.72)", maxWidth: "36ch" }}>
                  {featuredArticle.excerpt}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(243, 241, 234, 0.1)" }}>
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.8125rem", fontWeight: 600, color: "#f3f1ea" }}>
                    By {featuredArticle.author}
                  </span>
                  <Link
                    href={`/perspective/${featuredArticle.slug}`}
                    className={hub.ctaPrimary}
                    data-magnetic
                    style={{ padding: "0.75rem 1.45rem", fontSize: "0.75rem" }}
                  >
                    Read Monograph →
                  </Link>
                </div>
              </div>

              {/* Cover Artwork Plate */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", minHeight: "260px", borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(232, 197, 106, 0.2)" }}>
                <Image
                  src={ARTICLE_IMAGES[0]!}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "50% 35%" }}
                />
              </div>
            </div>
          </article>
        </PageReveal>

        {/* Remaining Research Articles Grid */}
        <PageReveal>
          <div className={hub.editorialSection} data-reveal>
            <div className={hub.editorialKicker}>
              <span className={hub.editorialKickerDot} aria-hidden="true" />
              <span>Archive & Analysis</span>
            </div>
            <h3 className={hub.subhead} style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
              Recent Publications
            </h3>

            <div className={hub.hubCardGrid} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))" }}>
              {restArticles.map((art, i) => (
                <Link
                  key={art.slug}
                  href={`/perspective/${art.slug}`}
                  className={hub.hubCard}
                  data-magnetic
                >
                  <div className={hub.hubCardTop}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "var(--color-gold)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                        {art.category}
                      </span>
                      <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.6875rem", color: "rgba(243, 241, 234, 0.5)" }}>
                        {art.readingTime}
                      </span>
                    </div>

                    <h4 className={hub.hubCardTitle} style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)", lineHeight: "1.1" }}>
                      {art.title}
                    </h4>

                    <p className={hub.hubCardBody}>
                      {art.excerpt}
                    </p>
                  </div>

                  <div className={hub.hubCardFoot}>
                    <span>By {art.author}</span>
                    <span aria-hidden="true">Read Essay →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </PageReveal>

        {/* Haute Editorial Pull Quote */}
        <PageReveal>
          <div className={hub.quotePullout} data-reveal>
            <blockquote className={hub.quotePulloutText}>
              “Execution without thinking is noise. Thinking without execution is decoration. Perspective is where the intersections get examined — before the work ships.”
            </blockquote>
            <cite className={hub.quotePulloutCite}>
              — 13 UTOPIA Research Charter
            </cite>
          </div>
        </PageReveal>

        <DetailCtaRow
          primaryHref="/connect/start-a-project"
          primaryLabel="Start a Project"
          secondaryHref="/work"
          secondaryLabel="Inspect Shipped Work"
        />

        <DetailCloser
          title="Have a thesis?"
          lead="If you’re wrestling with brand, architecture, or compounding growth, start a dialogue."
          secondaryHref="/connect/discovery"
          secondaryLabel="Book Discovery"
        />
      </Container>
    </>
  );
}
