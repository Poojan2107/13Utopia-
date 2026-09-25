import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero, RelatedLinks } from "@/components/ui/PageHero";
import {
  getCapability,
  getCaseStudy,
  getPerspectiveArticle,
  getSolution,
  getSolutions,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getSolutions().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return buildMetadata({ seo: solution.seo, path: `/solutions/${slug}` });
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={solution.title}
        description={solution.description}
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Solutions", path: "/solutions" },
            { name: solution.title, path: `/solutions/${slug}` },
          ]}
        />
        <p style={{ color: "var(--color-fg-muted)" }}>
          Full solution narrative: [CONTENT NEEDED]. Solutions combine Create / Build / Grow
          around the client outcome.
        </p>
        <RelatedLinks
          title="Related capabilities"
          items={solution.relatedCapabilitySlugs
            .map((s) => getCapability(s))
            .filter(Boolean)
            .map((c) => ({ href: `/capabilities/${c!.slug}`, label: c!.title }))}
        />
        <RelatedLinks
          title="Related case stories"
          items={solution.relatedCaseSlugs
            .map((s) => getCaseStudy(s))
            .filter(Boolean)
            .map((c) => ({ href: `/work/${c!.slug}`, label: c!.title }))}
        />
        <RelatedLinks
          title="Related Perspective"
          items={solution.relatedPerspectiveSlugs
            .map((s) => getPerspectiveArticle(s))
            .filter(Boolean)
            .map((a) => ({ href: `/perspective/${a!.slug}`, label: a!.title }))}
        />
        <RelatedLinks
          title="Next step"
          items={[{ href: "/connect/start-a-project", label: "Start a Project" }]}
        />
      </Container>
    </>
  );
}
