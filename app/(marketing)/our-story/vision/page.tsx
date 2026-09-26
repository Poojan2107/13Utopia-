import type { Metadata } from "next";
import {
  Container,
  DetailCloser,
  DetailCtaRow,
  MediaBreak,
  MediaPlaceholder,
  PageHero,
  ProseBlock,
} from "@/components/ui";
import { STORY_PAGES } from "@/content/narratives";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Vision | Our Story | 13 UTOPIA",
    description: "Where 13 UTOPIA is pointed — the future we build toward.",
  },
  path: "/our-story/vision",
});

export default function VisionPage() {
  const copy = STORY_PAGES.vision;
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Vision"
        description={copy.lead}
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="strategy"
            need="Vision — horizon plate"
          />
        }
      />
      <Container className={hub.body}>
        <ProseBlock paragraphs={copy.body} />
        <MediaBreak need="Vision — future atmosphere" tone="strategy" />
        <DetailCtaRow secondaryHref="/our-story/mission" secondaryLabel="Mission" />
        <DetailCloser
          title="Make it real"
          lead="Vision only matters when Create, Build, and Grow move together."
          secondaryHref="/capabilities"
          secondaryLabel="Capabilities"
        />
      </Container>
    </>
  );
}
