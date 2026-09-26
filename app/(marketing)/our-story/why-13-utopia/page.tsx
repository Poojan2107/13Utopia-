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
    title: "Why 13 UTOPIA | Our Story",
    description: "Why 13 UTOPIA exists — philosophy and founding direction.",
  },
  path: "/our-story/why-13-utopia",
});

export default function Why13UtopiaPage() {
  const copy = STORY_PAGES.why;
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Why 13 UTOPIA"
        description={copy.lead}
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="warm"
            need="Why 13 UTOPIA — founding atmosphere"
          />
        }
      />
      <Container className={hub.body}>
        <ProseBlock paragraphs={copy.body} />
        <MediaBreak need="Why — archive / mark" tone="warm" aspect="wide" />
        <DetailCtaRow
          secondaryHref="/our-story"
          secondaryLabel="Our Story"
        />
        <DetailCloser
          title="Meet the practice"
          lead="Process, vision, and presence — the chapters that follow."
          secondaryHref="/our-story/process"
          secondaryLabel="See the process"
        />
      </Container>
    </>
  );
}
