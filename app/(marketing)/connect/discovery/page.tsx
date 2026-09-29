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
            Discovery calls are 30 minutes with a senior partner. Submit an exploratory inquiry below, or email directly at <a href="mailto:discovery@13utopia.com" style={{ color: "var(--color-gold, #e8c56a)", textDecoration: "underline" }}>discovery@13utopia.com</a> to confirm a time.
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
