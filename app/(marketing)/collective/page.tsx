import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ArrowLink } from "@/components/ui/TextLink";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Collective | 13 UTOPIA",
    description: "People, disciplines, and culture at 13 UTOPIA.",
  },
  path: "/collective",
});

const LINKS = [
  ["/collective/leadership", "Leadership"],
  ["/collective/creative", "Creative"],
  ["/collective/technology", "Technology"],
  ["/collective/growth", "Growth"],
  ["/collective/culture", "Culture"],
  ["/careers", "Careers"],
] as const;

export default function CollectivePage() {
  return (
    <>
      <PageHero
        eyebrow="Collective"
        title="The people behind the work"
        description="Humanize the organization — actual people and disciplines only. No invented departments."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <ul style={{ display: "grid", gap: "1rem" }}>
          {LINKS.map(([href, label]) => (
            <li key={href} style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1rem" }}>
              <ArrowLink href={href}>{label}</ArrowLink>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
