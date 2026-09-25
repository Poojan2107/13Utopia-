import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero, RelatedLinks } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Discovery | Connect | 13 UTOPIA",
    description: "Discuss an opportunity before submitting a detailed project brief.",
  },
  path: "/connect/discovery",
});

export default function DiscoveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Discovery"
        title="Schedule a Discovery"
        description="For people who want to discuss an opportunity before a detailed project form."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <p style={{ color: "var(--color-fg-muted)" }}>
          Who the call is for, what happens, and what to prepare: [CONTENT NEEDED]. Booking
          flow: [CONTENT NEEDED].
        </p>
        <RelatedLinks
          title="Or go deeper"
          items={[
            { href: "/connect/start-a-project", label: "Start a Project" },
            { href: "/connect/general", label: "General contact" },
          ]}
        />
      </Container>
    </>
  );
}
