import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Partnerships | Connect | 13 UTOPIA",
    description:
      "Strategic, technology, referral, and delivery partnership conversations.",
  },
  path: "/connect/partnerships",
});

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Build with us"
        description="Strategic partners, technology partners, referral partners, delivery partners, and ecosystem relationships."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <p style={{ color: "var(--color-fg-muted)" }}>
          Partnership inquiry process: [CONTENT NEEDED]
        </p>
      </Container>
    </>
  );
}
