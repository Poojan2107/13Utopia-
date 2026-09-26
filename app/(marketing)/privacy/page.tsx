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
    title: "Privacy | 13 UTOPIA",
    description: "How 13 UTOPIA handles information you share with us.",
  },
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        description="What we collect, why, and how we treat it — plain language."
        layout="full"
        media={
          <MediaPlaceholder aspect="hero" tone="dark" need="Privacy — quiet atmosphere" />
        }
      />
      <Container className={hub.body}>
        <ProseBlock
          paragraphs={[
            "When you contact us through Start a Project, Discovery, or other Connect routes, we use the details you provide to respond and — if we work together — to deliver the engagement.",
            "We do not sell personal information. We do not run speculative tracking for advertising on this marketing site beyond what is required to operate and secure the site.",
            "Project and support correspondence may be retained for the life of the relationship and a reasonable period after, unless a stricter agreement applies.",
            "For privacy questions, use General contact. A fuller policy will replace this page when counsel-approved text is ready.",
          ]}
        />
        <DetailCtaRow
          primaryHref="/connect/general"
          primaryLabel="Contact"
          secondaryHref="/terms"
          secondaryLabel="Terms"
        />
      </Container>
    </>
  );
}
