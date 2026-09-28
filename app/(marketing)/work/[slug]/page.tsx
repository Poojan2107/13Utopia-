import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Container,
  DetailCloser,
  DetailCtaRow,
  PageHero,
  RelatedLinks,
} from "@/components/ui";
import { CaseStudyView } from "@/components/work/CaseStudyView";
import {
  getCapability,
  getCaseStudies,
  getCaseStudy,
  getPerspectiveArticle,
  getSolution,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

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
  const allCases = getCaseStudies();
  const index = allCases.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const item = allCases[index]!;
  const nextItem = allCases[(index + 1) % allCases.length];

  return (
    <>
      <PageHero
        eyebrow={`${item.industry} · ${item.client}`}
        title={item.title}
        description={item.summary}
        layout="full"
      />
      <Container className={hub.body}>
        <CaseStudyView item={item} nextItem={nextItem} />

        <RelatedLinks
          title="Related Capabilities"
          items={item.capabilitySlugs
            .map((s) => getCapability(s))
            .filter(Boolean)
            .map((c) => ({ href: `/capabilities/${c!.slug}`, label: c!.title }))}
        />
        <RelatedLinks
          title="Related Solutions"
          items={item.solutionSlugs
            .map((s) => getSolution(s))
            .filter(Boolean)
            .map((s) => ({ href: `/solutions/${s!.slug}`, label: s!.title }))}
        />
        <RelatedLinks
          title="Related Perspective"
          items={item.perspectiveSlugs
            .map((s) => getPerspectiveArticle(s))
            .filter(Boolean)
            .map((a) => ({ href: `/perspective/${a!.slug}`, label: a!.title }))}
        />

        <DetailCtaRow secondaryHref="/work" secondaryLabel="Explore all work" />
        <DetailCloser
          title="Have a project in mind?"
          lead="Bring the challenge. We’ll assemble the practice to build and grow it."
          secondaryHref="/capabilities"
          secondaryLabel="Capabilities"
        />
      </Container>
    </>
  );
}
