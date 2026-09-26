import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageReveal } from "@/components/motion";
import {
  Breadcrumbs,
  Container,
  DetailCloser,
  DetailCtaRow,
  MediaBreak,
  MediaPlaceholder,
  PageHero,
  ProseBlock,
  RelatedLinks,
} from "@/components/ui";
import {
  getCapability,
  getCaseStudy,
  getPerspectiveArticle,
  getPerspectiveArticles,
  getSolution,
} from "@/lib/content";
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

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="strategy"
            need={`Article hero — ${article.title}`}
          />
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
          <p className={hub.entryMeta} data-reveal>
            <span>{article.author}</span>
            <span>{article.publishedAt}</span>
            <span>{article.readingTime}</span>
          </p>
        </PageReveal>

        <ProseBlock paragraphs={paragraphs} />

        <MediaBreak
          need={`Article figure — ${article.category}`}
          tone="strategy"
          aspect="wide"
        />

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

        <DetailCtaRow
          secondaryHref="/perspective"
          secondaryLabel="All Perspective"
        />
        <DetailCloser
          title="Have a thesis?"
          lead="If you’re wrestling with the same intersections, start a conversation."
          secondaryHref="/connect/discovery"
          secondaryLabel="Discovery"
        />
      </Container>
    </>
  );
}
