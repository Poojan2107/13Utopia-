import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Why 13 UTOPIA | Our Story",
    description: "Why the company exists — founder story required before publication.",
  },
  path: "/our-story/why-13-utopia",
});

export default function Why13Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Why 13 UTOPIA"
        description="[FOUNDER STORY REQUIRED] — origin of 13, meaning of UTOPIA, and why BE UNREAL / BE UNREASONABLE."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Our Story", path: "/our-story" },
            { name: "Why 13 UTOPIA", path: "/our-story/why-13-utopia" },
          ]}
        />
        <p style={{ color: "var(--color-fg-muted)" }}>[CONTENT NEEDED]</p>
      </Container>
    </>
  );
}
