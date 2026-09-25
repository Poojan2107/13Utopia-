import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero, RelatedLinks } from "@/components/ui/PageHero";
import {
  getCapability,
  getCaseStudies,
  getCaseStudy,
  getPerspectiveArticle,
  getSolution,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getCaseStudies().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudy(slug);
  if (!item) return {};
  return buildMetadata({ seo: item.seo, path: `/work/${slug}` });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseStudy(slug);
  if (!item) notFound();

  const sections = [
    { label: "Challenge", body: item.challenge },
    { label: "Insight", body: item.insight },
    { label: "Move", body: item.move },
    { label: "Build", body: item.build },
    { label: "Result", body: item.result },
    { label: "Lesson", body: item.lesson },
  ];

  return (
    <>
      <PageHero eyebrow={item.industry} title={item.title} description={item.summary} />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Work", path: "/work" },
            { name: item.title, path: `/work/${slug}` },
          ]}
        />
        <p style={{ color: "var(--color-fg-muted)" }}>Client: {item.client}</p>
        {sections.map((section) => (
          <section key={section.label} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "var(--text-h3)" }}>{section.label}</h2>
            <p style={{ color: "var(--color-fg-muted)" }}>{section.body}</p>
          </section>
        ))}
        <RelatedLinks
          title="Capabilities"
          items={item.capabilitySlugs
            .map((s) => getCapability(s))
            .filter(Boolean)
            .map((c) => ({ href: `/capabilities/${c!.slug}`, label: c!.title }))}
        />
        <RelatedLinks
          title="Solutions"
          items={item.solutionSlugs
            .map((s) => getSolution(s))
            .filter(Boolean)
            .map((s) => ({ href: `/solutions/${s!.slug}`, label: s!.title }))}
        />
        <RelatedLinks
          title="Perspective"
          items={item.perspectiveSlugs
            .map((s) => getPerspectiveArticle(s))
            .filter(Boolean)
            .map((a) => ({ href: `/perspective/${a!.slug}`, label: a!.title }))}
        />
        <RelatedLinks
          title="Next"
          items={[{ href: "/connect/start-a-project", label: "Start a Project" }]}
        />
      </Container>
    </>
  );
}
