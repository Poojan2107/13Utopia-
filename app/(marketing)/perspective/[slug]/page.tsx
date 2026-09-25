import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero, RelatedLinks } from "@/components/ui/PageHero";
import {
  getCapability,
  getCaseStudy,
  getPerspectiveArticle,
  getPerspectiveArticles,
  getSolution,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

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

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Perspective", path: "/perspective" },
            { name: article.title, path: `/perspective/${slug}` },
          ]}
        />
        <p style={{ color: "var(--color-fg-muted)", fontSize: "var(--text-caption)" }}>
          {article.author} · {article.publishedAt} · {article.readingTime}
        </p>
        <div style={{ maxWidth: "42rem", marginTop: "2rem" }}>
          <p>{article.body}</p>
        </div>
        <RelatedLinks
          title="Related capabilities"
          items={article.relatedCapabilitySlugs
            .map((s) => getCapability(s))
            .filter(Boolean)
            .map((c) => ({ href: `/capabilities/${c!.slug}`, label: c!.title }))}
        />
        <RelatedLinks
          title="Related solutions"
          items={article.relatedSolutionSlugs
            .map((s) => getSolution(s))
            .filter(Boolean)
            .map((s) => ({ href: `/solutions/${s!.slug}`, label: s!.title }))}
        />
        <RelatedLinks
          title="Related work"
          items={article.relatedCaseSlugs
            .map((s) => getCaseStudy(s))
            .filter(Boolean)
            .map((c) => ({ href: `/work/${c!.slug}`, label: c!.title }))}
        />
        <RelatedLinks
          title="Next"
          items={[{ href: "/connect/start-a-project", label: "Start a Project" }]}
        />
      </Container>
    </>
  );
}
