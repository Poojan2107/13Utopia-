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
    title: "Mission | Our Story | 13 UTOPIA",
    description: "What 13 UTOPIA does every day for ambitious businesses.",
  },
  path: "/our-story/mission",
});

export default function MissionPage() {
  const copy = STORY_PAGES.mission;
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Mission"
        description={copy.lead}
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="create"
            need="Mission — practice in motion"
          />
        }
      />
      <Container className={hub.body}>
        <ProseBlock paragraphs={copy.body} />
        <MediaBreak need="Mission — work on the floor" tone="create" />
        <DetailCtaRow secondaryHref="/our-story/process" secondaryLabel="Process" />
        <DetailCloser
          title="Start with the outcome"
          lead="Tell us what you are trying to make happen."
          secondaryHref="/connect/start-a-project"
          secondaryLabel="Start a Project"
        />
      </Container>
    </>
  );
}
