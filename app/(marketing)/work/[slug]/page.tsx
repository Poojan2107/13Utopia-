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
  RelatedLinks,
} from "@/components/ui";
import {
  getCapability,
  getCaseStudies,
  getCaseStudy,
  getPerspectiveArticle,
  getSolution,
} from "@/lib/content";
import { displayText } from "@/lib/content/display";
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
  const item = getCaseStudy(slug);
  if (!item) notFound();

  const sections = [
    { label: "Challenge", body: displayText(item.challenge) },
    { label: "Insight", body: displayText(item.insight) },
    { label: "Move", body: displayText(item.move) },
    { label: "Build", body: displayText(item.build) },
    {
      label: "Result",
      body: displayText(
        item.result,
        "Verified outcomes publish with client approval. No invented metrics.",
      ),
    },
    { label: "Lesson", body: displayText(item.lesson) },
  ].filter((s) => s.body);

  return (
    <>
      <PageHero
        eyebrow={`${item.industry} · ${displayText(item.client, "Confidential")}`}
        title={item.title}
        description={item.summary}
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="warm"
            need={`Case hero — ${item.title}`}
          />
        }
      />
      <Container className={hub.body}>
        <PageReveal>
          <div data-reveal>
            <Breadcrumbs
              items={[
                { name: "Work", path: "/work" },
                { name: item.title, path: `/work/${slug}` },
              ]}
            />
          </div>
          <p className={hub.slugLead} data-reveal>
            {item.summary}
          </p>
        </PageReveal>

        <MediaBreak need={`Case detail — ${item.title} context`} aspect="wide" />

        <PageReveal>
          <div className={hub.narrative}>
            {sections.map((section) => (
              <section key={section.label} className={hub.narrativeBlock} data-reveal>
                <p className={hub.narrativeLabel}>{section.label}</p>
                <p className={hub.narrativeBody}>{section.body}</p>
              </section>
            ))}
          </div>
        </PageReveal>

        <MediaBreak need={`Case close — ${item.title} outcome`} aspect="film" />

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

        <DetailCtaRow secondaryHref="/work" secondaryLabel="All work" />
        <DetailCloser
          title="Have a story to write?"
          lead="Bring the challenge. We’ll find the move."
          secondaryHref="/capabilities"
          secondaryLabel="Capabilities"
        />
      </Container>
    </>
  );
}
