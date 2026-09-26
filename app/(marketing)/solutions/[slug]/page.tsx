import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageReveal } from "@/components/motion";
import {
  Breadcrumbs,
  Container,
  DetailBridge,
  DetailCloser,
  DetailCtaRow,
  MediaBreak,
  MediaPlaceholder,
  PageHero,
  PhaseRail,
  RelatedLinks,
} from "@/components/ui";
import { SOLUTION_NARRATIVE } from "@/content/narratives";
import {
  getCapability,
  getCaseStudy,
  getPerspectiveArticle,
  getSolution,
  getSolutions,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

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

  const narrative = SOLUTION_NARRATIVE[slug];

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={solution.title}
        description={solution.description}
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="warm"
            need={`${solution.title} — outcome atmosphere`}
          />
        }
      />
      <Container className={hub.body}>
        <PageReveal>
          <div data-reveal>
            <Breadcrumbs
              items={[
                { name: "Solutions", path: "/solutions" },
                { name: solution.title, path: `/solutions/${slug}` },
              ]}
            />
          </div>
          <p className={hub.slugLead} data-reveal>
            {narrative?.lead ?? solution.description}
          </p>
        </PageReveal>

        <MediaBreak
          need={`${solution.title} — proof / context plate`}
          tone="warm"
          aspect="wide"
        />

        {narrative ? <PhaseRail phases={narrative.phases} /> : null}

        {narrative ? (
          <PageReveal>
            <p className={hub.note} data-reveal>
              <span className={hub.noteEm}>Outcome — </span>
              {narrative.outcome}
            </p>
          </PageReveal>
        ) : null}

        <DetailBridge
          eyebrow={solution.title}
          statement="Outcomes first. Capabilities follow."
          support="We assemble Create, Build, and Grow around this destination — not a service menu."
          need={`${solution.title} — decision atmosphere`}
          tone="strategy"
        />

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

        <DetailCtaRow
          secondaryHref="/solutions"
          secondaryLabel="All solutions"
        />
        <DetailCloser
          title={`Make ${solution.title} happen`}
          lead="Start with the destination. We’ll assemble the worlds that get you there."
          secondaryHref="/connect/discovery"
          secondaryLabel="Or book discovery"
        />
      </Container>
    </>
  );
}
