import type { Metadata } from "next";
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
    title: "Partnerships | Connect | 13 UTOPIA",
    description: "Agency, technology, and growth partnerships.",
  },
  path: "/connect/partnerships",
});

export default function PartnershipsPage() {
  const copy = CONNECT_COPY.partnerships;
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Partnerships"
        description={copy.lead}
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="create"
            need="Partnerships collaboration"
          />
        }
      />
      <Container className={hub.body}>
        <ProseBlock
          paragraphs={[
            "We partner with agencies, technology vendors, and growth operators when the client gets a clearer outcome.",
            "Tell us how you work, who you serve, and where the overlap is real.",
          ]}
        />
        <PracticeList title="What we look for" items={copy.criteria} />
        <MediaBreak need="Partnerships — collaboration" tone="create" />
        <DetailCtaRow
          primaryHref="/connect/start-a-project"
          primaryLabel="Propose a partnership"
          secondaryHref="/connect/discovery"
          secondaryLabel="Discovery"
        />
        <DetailCloser
          title="Build together"
          lead="Complementary craft. Shared standard. Clear ownership."
        />
      </Container>
    </>
  );
}
