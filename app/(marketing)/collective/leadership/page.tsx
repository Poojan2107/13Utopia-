import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { getPeopleByDiscipline } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Leadership | Collective | 13 UTOPIA",
    description: "Leadership at 13 UTOPIA — actual people only.",
  },
  path: "/collective/leadership",
});

export default function LeadershipPage() {
  const people = getPeopleByDiscipline("leadership");
  return (
    <>
      <PageHero
        eyebrow="Collective"
        title="Leadership"
        description="Actual people only. Generic corporate bios are not used."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Collective", path: "/collective" },
            { name: "Leadership", path: "/collective/leadership" },
          ]}
        />
        <ul style={{ display: "grid", gap: "1.5rem", marginTop: "2rem" }}>
          {people.map((person) => (
            <li
              key={person.slug}
              style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1rem" }}
            >
              <h2 style={{ fontSize: "var(--text-h3)" }}>{person.name}</h2>
              <p style={{ color: "var(--color-fg-muted)" }}>{person.role}</p>
              <p style={{ color: "var(--color-fg-muted)" }}>{person.bio}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
