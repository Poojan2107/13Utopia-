import type { Metadata } from "next";
import {
  Container,
  DetailCtaRow,
  MediaPlaceholder,
  PageHero,
  ProseBlock,
} from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Terms | 13 UTOPIA",
    description: "Terms of use for the 13 UTOPIA website and engagement.",
  },
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        description="Using this site and engaging 13 UTOPIA — the baseline."
        layout="full"
        media={
          <MediaPlaceholder aspect="hero" tone="strategy" need="Terms — formal atmosphere" />
        }
      />
      <Container className={hub.body}>
        <ProseBlock
          paragraphs={[
            "This website is for information and inquiry. Nothing here is a binding offer until a written agreement says so.",
            "Case stories and perspective pieces may describe working drafts, placeholders, or approved client work. Metrics appear only when verified.",
            "All brand marks, copy, and media on this site belong to 13 UTOPIA or their respective owners. Do not reuse without permission.",
            "Engagement terms — scope, fees, IP, confidentiality — live in the contract for that work. Site terms do not override a signed agreement.",
            "Counsel-approved terms will replace this page when ready. Questions: General contact.",
          ]}
        />
        <DetailCtaRow
          primaryHref="/connect/general"
          primaryLabel="Contact"
          secondaryHref="/privacy"
          secondaryLabel="Privacy"
        />
      </Container>
    </>
  );
}
