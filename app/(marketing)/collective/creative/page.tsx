import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { getPeopleByDiscipline } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Creative | Collective | 13 UTOPIA",
    description: "Creative contributors at 13 UTOPIA.",
  },
  path: "/collective/creative",
});

export default function CreativeCollectivePage() {
  const people = getPeopleByDiscipline("creative");
  return (
    <>
      <PageHero
        eyebrow="Collective"
        title="Creative"
        description="Show actual creative contributors when available."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Collective", path: "/collective" },
            { name: "Creative", path: "/collective/creative" },
          ]}
        />
        {people.length === 0 ? (
          <p style={{ color: "var(--color-fg-muted)" }}>[CONTENT NEEDED]</p>
        ) : null}
      </Container>
    </>
  );
}
