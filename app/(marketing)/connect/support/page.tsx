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
import { CONNECT_COPY } from "@/content/narratives";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Support | Connect | 13 UTOPIA",
    description: "Help for existing clients and products.",
  },
  path: "/connect/support",
});

export default function SupportPage() {
  const copy = CONNECT_COPY.support;
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Support"
        description={copy.lead}
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="build"
            need="Support systems atmosphere"
          />
        }
      />
      <Container className={hub.body}>
        <ProseBlock
          paragraphs={[
            copy.body,
            "Include your company, product or engagement name, and urgency. We’ll route to the right owners.",
          ]}
        />
        <MediaBreak need="Support — systems" tone="build" />
        <DetailCtaRow
          primaryHref="/connect/start-a-project"
          primaryLabel="Send context"
          secondaryHref="/connect"
          secondaryLabel="Connect hub"
        />
        <DetailCloser
          title="New work?"
          lead="If this is a new engagement, start a project instead."
          secondaryHref="/connect/start-a-project"
          secondaryLabel="Start a Project"
        />
      </Container>
    </>
  );
}
