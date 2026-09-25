import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero, RelatedLinks } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

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
        description="Why work here, who fits, what people work on, culture, and how to apply."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <p style={{ color: "var(--color-fg-muted)" }}>
          Current openings: [CONTENT NEEDED]. Only list real/open positions. No expired roles.
        </p>
        <RelatedLinks
          title="Learn more"
          items={[
            { href: "/collective/culture", label: "Culture" },
            { href: "/connect/general", label: "General contact" },
          ]}
        />
      </Container>
    </>
  );
}
