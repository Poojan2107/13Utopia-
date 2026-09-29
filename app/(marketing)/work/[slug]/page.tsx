import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DetailCloser,
  DetailCtaRow,
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
import { caseStudySchema, jsonLdScript } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import styles from "@/styles/work/CaseDetail.module.css";

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

  const capabilities = item.capabilitySlugs
    .map((s) => getCapability(s))
    .filter(Boolean)
    .map((c) => ({ href: `/capabilities/${c!.slug}`, label: c!.title }));
  const solutions = item.solutionSlugs
    .map((s) => getSolution(s))
    .filter(Boolean)
    .map((s) => ({ href: `/solutions/${s!.slug}`, label: s!.title }));
  const perspective = item.perspectiveSlugs
    .map((s) => getPerspectiveArticle(s))
    .filter(Boolean)
    .map((a) => ({ href: `/perspective/${a!.slug}`, label: a!.title }));

  const hasRelated =
    capabilities.length > 0 || solutions.length > 0 || perspective.length > 0;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          caseStudySchema({
            title: item.title,
            summary: item.summary,
            path: `/work/${slug}`,
            client: item.client,
            year: item.year,
            stack: item.stack,
          }),
        )}
      />
      <CaseStudyView item={item} nextItem={nextItem} />

      {hasRelated ? (
        <div className={styles.related}>
          {capabilities.length > 0 ? (
            <RelatedLinks title="Related Capabilities" items={capabilities} />
          ) : null}
          {solutions.length > 0 ? (
            <RelatedLinks title="Related Solutions" items={solutions} />
          ) : null}
          {perspective.length > 0 ? (
            <RelatedLinks title="Related Perspective" items={perspective} />
          ) : null}
          <DetailCtaRow secondaryHref="/work" secondaryLabel="Explore all work" />
          <DetailCloser
            title="Have a project in mind?"
            lead="Bring the challenge. We’ll assemble the practice to build and grow it."
            secondaryHref="/capabilities"
            secondaryLabel="Capabilities"
          />
        </div>
      ) : (
        <div className={styles.related}>
          <DetailCtaRow secondaryHref="/work" secondaryLabel="Explore all work" />
          <DetailCloser
            title="Have a project in mind?"
            lead="Bring the challenge. We’ll assemble the practice to build and grow it."
            secondaryHref="/capabilities"
            secondaryLabel="Capabilities"
          />
        </div>
      )}
    </>
  );
}
