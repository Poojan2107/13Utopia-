import type { Metadata } from "next";
import {
  Container,
  DetailCtaRow,
  MediaPlaceholder,
  PageHero,
  PracticeList,
  ProseBlock,
} from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Accessibility | 13 UTOPIA",
    description: "Accessibility commitments for the 13 UTOPIA website.",
  },
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Accessibility"
        description="We aim for a site that works with keyboards, screen readers, and reduced motion."
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="warm"
            need="Accessibility — clear atmosphere"
          />
        }
      />
      <Container className={hub.body}>
        <ProseBlock
          paragraphs={[
            "13 UTOPIA is building this marketing site toward WCAG 2.2 AA where practical — semantic structure, focus states, skip link, and respect for prefers-reduced-motion.",
            "Some cinematic motion and custom cursors are progressive enhancements. They disable or soften when reduced motion is preferred, or when a fine pointer is unavailable.",
          ]}
        />
        <PracticeList
          title="In practice"
          items={[
            "Skip to content link on every marketing page",
            "Labeled landmarks for header, main, and footer nav",
            "Visible focus on interactive controls",
            "Motion softens under prefers-reduced-motion",
            "Report barriers via General contact — we take them seriously",
          ]}
        />
        <DetailCtaRow
          primaryHref="/connect/general"
          primaryLabel="Report a barrier"
          secondaryHref="/privacy"
          secondaryLabel="Privacy"
        />
      </Container>
    </>
  );
}
