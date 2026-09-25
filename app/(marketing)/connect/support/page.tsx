import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Support | Connect | 13 UTOPIA",
    description: "Support for existing customers and active clients.",
  },
  path: "/connect/support",
});

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Existing clients"
        description="Keep support distinct from sales."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <p style={{ color: "var(--color-fg-muted)" }}>
          Support channel: [CONTENT NEEDED]
        </p>
      </Container>
    </>
  );
}
