import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { getPerspectiveArticles } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Perspective | 13 UTOPIA",
    description:
      "Editorial thinking from 13 UTOPIA — brand, technology, product, growth, and strategy.",
  },
  path: "/perspective",
});

export default function PerspectiveHubPage() {
  const articles = getPerspectiveArticles();

  return (
    <>
      <PageHero
        eyebrow="Perspective"
        title="Thinking that crosses disciplines"
        description="Not a blog dump — editorial views at the intersections that matter."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <ul style={{ display: "grid", gap: "2rem" }}>
          {articles.map((article) => (
            <li
              key={article.slug}
              style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1.25rem" }}
            >
              <Link href={`/perspective/${article.slug}`} style={{ textDecoration: "none" }}>
                <p
                  style={{
                    margin: "0 0 0.5rem",
                    fontSize: "var(--text-micro)",
                    color: "var(--color-fg-muted)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {article.category} · {article.readingTime}
                </p>
                <h2 style={{ fontSize: "var(--text-h3)" }}>{article.title}</h2>
                <p style={{ color: "var(--color-fg-muted)", margin: 0 }}>{article.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
