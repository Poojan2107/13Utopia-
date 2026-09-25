import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero, RelatedLinks } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Culture | Collective | 13 UTOPIA",
    description: "What working at 13 UTOPIA actually feels like — real stories only.",
  },
  path: "/collective/culture",
});

export default function CulturePage() {
  return (
    <>
      <PageHero
        eyebrow="Culture"
        title="How we work together"
        description="Real photography, environments, and rituals when available — no generic stock culture slogans."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Collective", path: "/collective" },
            { name: "Culture", path: "/collective/culture" },
          ]}
        />
        <p style={{ color: "var(--color-fg-muted)" }}>[CONTENT NEEDED]</p>
        <RelatedLinks
          title="Join"
          items={[{ href: "/careers", label: "Careers" }]}
        />
      </Container>
    </>
  );
}
