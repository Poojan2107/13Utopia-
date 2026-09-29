import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageReveal } from "@/components/motion";
import {
  Breadcrumbs,
  Container,
  DetailCloser,
  DetailCtaRow,
  PageHero,
  RelatedLinks,
} from "@/components/ui";
import { plates } from "@/content/plates";
import {
  getCapability,
  getCaseStudy,
  getPerspectiveArticle,
  getPerspectiveArticles,
  getSolution,
} from "@/lib/content";
import { articleSchema, jsonLdScript } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPerspectiveArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getPerspectiveArticle(slug);
  if (!article) return {};
  return buildMetadata({ seo: article.seo, path: `/perspective/${slug}` });
}

export default async function PerspectiveArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getPerspectiveArticle(slug);
  if (!article) notFound();

  const paragraphs = article.body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const capabilities = article.relatedCapabilitySlugs
    .map((s) => getCapability(s))
    .filter(Boolean)
    .map((c) => ({ href: `/capabilities/${c!.slug}`, label: c!.title }));

  const solutions = article.relatedSolutionSlugs
    .map((s) => getSolution(s))
    .filter(Boolean)
    .map((s) => ({ href: `/solutions/${s!.slug}`, label: s!.title }));

  const cases = article.relatedCaseSlugs
    .map((s) => getCaseStudy(s))
    .filter(Boolean)
    .map((c) => ({ href: `/work/${c!.slug}`, label: c!.title }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          articleSchema({
            title: article.title,
            description: article.summary,
            path: `/perspective/${slug}`,
            datePublished: article.publishedAt,
            author: article.author?.name || "13 UTOPIA Research",
            wordCount: article.body.split(/\s+/).length,
          }),
        )}
      />
      <PageHero
        eyebrow={`Perspective · ${article.category.toUpperCase()}`}
        title={article.title}
        description={article.excerpt}
        layout="full"
        media={
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src={plates.work.src}
              alt={article.title}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "50% 40%" }}
            />
          </div>
        }
      />

      <Container className={hub.body}>
        <PageReveal>
          <div data-reveal>
            <Breadcrumbs
              items={[
                { name: "Perspective", path: "/perspective" },
                { name: article.title, path: `/perspective/${slug}` },
              ]}
            />
          </div>

          {/* Author Byline & Publication Metadata */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.25rem",
              paddingBottom: "1.75rem",
              borderBottom: "1px solid color-mix(in srgb, var(--color-gold) 20%, transparent)",
              marginBottom: "2.5rem",
            }}
            data-reveal
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(232, 197, 106, 0.3), rgba(0, 0, 0, 0.9))",
                  border: "1.5px solid var(--color-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 15px rgba(232, 197, 106, 0.25)",
                }}
              >
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.875rem", fontWeight: 800, color: "var(--color-gold)" }}>
                  {article.author.charAt(0)}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "0.06em", color: "#f7f4ec" }}>
                  {article.author}
                </span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "rgba(243, 241, 234, 0.6)" }}>
                  Senior Practice Lead · 13 UTOPIA
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--color-gold)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              <span>{article.publishedAt}</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>{article.readingTime} READ</span>
            </div>
          </div>
        </PageReveal>

        {/* Key Thesis Highlight Box */}
        <PageReveal>
          <div
            style={{
              background: "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(35, 26, 12, 0.4) 0%, rgba(14, 13, 10, 0.8) 70%)",
              border: "1px solid color-mix(in srgb, var(--color-gold) 35%, transparent)",
              borderRadius: "1.25rem",
              padding: "clamp(1.75rem, 3.5vw, 2.5rem)",
              marginBottom: "clamp(2.5rem, 5vh, 4rem)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
            }}
            data-reveal
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-gold)" }} />
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>
                Core Thesis
              </span>
            </div>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.8vw, 1.55rem)", fontStyle: "italic", lineHeight: "1.4", color: "#f7f4ec" }}>
              {article.excerpt}
            </p>
          </div>
        </PageReveal>

        {/* Longform Editorial Prose */}
        <PageReveal>
          <div
            className={hub.prose}
            style={{ maxWidth: "48rem", fontSize: "1.15rem", lineHeight: "1.85", color: "rgba(243, 241, 234, 0.85)" }}
            data-reveal
          >
            {paragraphs.map((p, i) => (
              <p key={i} style={i === 0 ? { fontSize: "1.25rem", lineHeight: "1.8", color: "#f7f4ec" } : undefined}>
                {p}
              </p>
            ))}
          </div>
        </PageReveal>

        {/* Haute Editorial Pull Quote */}
        <PageReveal>
          <div className={hub.quotePullout} data-reveal>
            <blockquote className={hub.quotePulloutText}>
              “The practical move: write brand decisions as non-negotiable product requirements, and engineering performance as core brand equity.”
            </blockquote>
            <cite className={hub.quotePulloutCite}>
              — Key Takeaway · {article.title}
            </cite>
          </div>
        </PageReveal>

        {/* Connected Practice Streams */}
        {capabilities.length > 0 ? (
          <RelatedLinks title="Connected Capabilities" items={capabilities} />
        ) : null}

        {solutions.length > 0 ? (
          <RelatedLinks title="Relevant Solutions" items={solutions} />
        ) : null}

        {cases.length > 0 ? (
          <RelatedLinks title="Shipped Case Studies" items={cases} />
        ) : null}

        <DetailCtaRow
          primaryHref="/connect/start-a-project"
          primaryLabel="Apply This to Your Project"
          secondaryHref="/perspective"
          secondaryLabel="All Monographs"
        />

        <DetailCloser
          title="Discuss this monograph"
          lead="If your organization is navigating these exact intersections, let’s begin a conversation."
          secondaryHref="/connect/discovery"
          secondaryLabel="Book Discovery Session"
        />
      </Container>
    </>
  );
}
