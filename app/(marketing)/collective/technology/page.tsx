import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { getPeopleByDiscipline } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Technology | Collective | 13 UTOPIA",
    description: "Engineering, product, and AI contributors at 13 UTOPIA.",
  },
  path: "/collective/technology",
});

export default function TechnologyCollectivePage() {
  const people = getPeopleByDiscipline("technology");
  return (
    <>
      <PageHero
        eyebrow="Collective"
        title="Technology"
        description="Show actual engineering / product / AI contributors when available."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Collective", path: "/collective" },
            { name: "Technology", path: "/collective/technology" },
          ]}
        />
        {people.length === 0 ? (
          <p style={{ color: "var(--color-fg-muted)" }}>[CONTENT NEEDED]</p>
        ) : null}
      </Container>
    </>
  );
}
