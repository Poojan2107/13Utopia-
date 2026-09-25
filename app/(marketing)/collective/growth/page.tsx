import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { getPeopleByDiscipline } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Growth | Collective | 13 UTOPIA",
    description: "Growth and marketing contributors at 13 UTOPIA.",
  },
  path: "/collective/growth",
});

export default function GrowthCollectivePage() {
  const people = getPeopleByDiscipline("growth");
  return (
    <>
      <PageHero
        eyebrow="Collective"
        title="Growth"
        description="Show actual growth / marketing contributors when available."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Collective", path: "/collective" },
            { name: "Growth", path: "/collective/growth" },
          ]}
        />
        {people.length === 0 ? (
          <p style={{ color: "var(--color-fg-muted)" }}>[CONTENT NEEDED]</p>
        ) : null}
      </Container>
    </>
  );
}
