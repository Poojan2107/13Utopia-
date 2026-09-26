import type { Metadata } from "next";
import {
  Container,
  DetailCloser,
  DetailCtaRow,
  MediaBreak,
  MediaPlaceholder,
  PageHero,
  ProseBlock,
  RelatedLinks,
} from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Careers | 13 UTOPIA",
    description: "Why work at 13 UTOPIA — openings listed only when real and current.",
  },
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work on ambitious problems"
        description="Join people who refuse the obvious answer — and make ambitious work real."
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="warm"
            need="Careers — invitation into the practice"
          />
        }
      />
      <Container className={hub.body}>
        <ProseBlock
          paragraphs={[
            "Openings publish here only when they are real and current — no evergreen ghost roles.",
            "Until a role is listed, meet the collective, read the culture, and reach out if you already know this is the work.",
          ]}
        />
        <MediaBreak need="Careers — practice floor" tone="warm" />
        <RelatedLinks
          title="Learn more"
          items={[
            { href: "/collective/culture", label: "Culture" },
            { href: "/collective", label: "Collective" },
            { href: "/connect/general", label: "General contact" },
          ]}
        />
        <DetailCtaRow
          primaryHref="/connect/general"
          primaryLabel="Get in touch"
          secondaryHref="/collective/culture"
          secondaryLabel="Culture"
        />
        <DetailCloser
          title="No openings listed"
          lead="That means we’re honest. When a seat is open, it will be here."
          secondaryHref="/collective"
          secondaryLabel="Meet the Collective"
        />
      </Container>
    </>
  );
}
