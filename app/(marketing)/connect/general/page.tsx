import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "General Contact | Connect | 13 UTOPIA",
    description: "General inquiries for 13 UTOPIA.",
  },
  path: "/connect/general",
});

export default function GeneralContactPage() {
  return (
    <>
      <PageHero
        eyebrow="General"
        title="Get in touch"
        description="Simple catch-all contact route."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <p style={{ color: "var(--color-fg-muted)" }}>
          Contact email: [CONTENT NEEDED]
        </p>
      </Container>
    </>
  );
}
