import type { Metadata } from "next";
import { PageReveal } from "@/components/motion";
import {
  Container,
  DetailCloser,
  DetailCtaRow,
  MediaBreak,
  MediaPlaceholder,
  PageHero,
  PracticeList,
  ProseBlock,
} from "@/components/ui";
import { CONNECT_COPY } from "@/content/narratives";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Discovery | Connect | 13 UTOPIA",
    description: "Discuss an opportunity before submitting a detailed project brief.",
  },
  path: "/connect/discovery",
});

export default function DiscoveryPage() {
  const copy = CONNECT_COPY.discovery;
  return (
    <>
      <PageHero
        eyebrow="Discovery"
        title="Schedule a Discovery"
        description={copy.lead}
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="strategy"
            need="Discovery — conversation atmosphere"
          />
        }
      />
      <Container className={hub.body}>
        <ProseBlock
          paragraphs={[
            "For founders and leaders who want to pressure-test an opportunity before a full brief.",
            copy.prep,
          ]}
        />
        <PracticeList title="On the call" items={copy.agenda} />
        <MediaBreak need="Discovery — meeting still" tone="strategy" />

        <PageReveal>
          <p className={hub.note} data-reveal>
            <span className={hub.noteEm}>Booking — </span>
            Prefer a calendar link later. For now, start a project with “Discovery” in
            the details, or use General contact — we’ll reply with times.
          </p>
        </PageReveal>

        <DetailCtaRow
          primaryHref="/connect/start-a-project"
          primaryLabel="Start a Project"
          secondaryHref="/connect/general"
          secondaryLabel="General contact"
        />
        <DetailCloser
          title="Know the outcome already?"
          lead="Skip discovery and send the brief."
          secondaryHref="/connect/start-a-project"
          secondaryLabel="Start a Project"
        />
      </Container>
    </>
  );
}
