import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Vision | Our Story | 13 UTOPIA",
    description: "Where 13 UTOPIA is going — working vision pending founder lock.",
  },
  path: "/our-story/vision",
});

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Vision"
        title="Where we are going"
        description="A world where ambitious businesses are not limited by conventional ways of thinking or building. [CONTENT NEEDED — refine with leadership]"
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Our Story", path: "/our-story" },
            { name: "Vision", path: "/our-story/vision" },
          ]}
        />
      </Container>
    </>
  );
}
