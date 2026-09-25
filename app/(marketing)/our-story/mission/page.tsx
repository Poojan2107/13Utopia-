import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Mission | Our Story | 13 UTOPIA",
    description:
      "Help ambitious businesses turn unconventional ideas into real-world momentum.",
  },
  path: "/our-story/mission",
});

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission"
        title="What we do every day"
        description="To help ambitious businesses turn unconventional ideas into real-world momentum through creativity, technology and growth."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Our Story", path: "/our-story" },
            { name: "Mission", path: "/our-story/mission" },
          ]}
        />
        <p style={{ color: "var(--color-fg-muted)" }}>[CONTENT NEEDED — refine]</p>
      </Container>
    </>
  );
}
