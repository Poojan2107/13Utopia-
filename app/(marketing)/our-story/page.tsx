import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero, RelatedLinks } from "@/components/ui/PageHero";
import { ArrowLink } from "@/components/ui/TextLink";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Our Story | 13 UTOPIA",
    description:
      "Why 13 UTOPIA exists — philosophy, vision, mission, process, and presence.",
  },
  path: "/our-story",
});

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Why 13 UTOPIA exists"
        description="We help ambitious businesses move beyond the obvious — Create, Build, Grow."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <p style={{ color: "var(--color-fg-muted)" }}>
          Origin of the number 13: [FOUNDER INPUT REQUIRED]. Do not invent mythology.
        </p>
        <ul style={{ display: "grid", gap: "1rem", marginTop: "2rem" }}>
          {[
            ["/our-story/why-13-utopia", "Why 13 UTOPIA"],
            ["/our-story/vision", "Vision"],
            ["/our-story/mission", "Mission"],
            ["/our-story/process", "Process"],
            ["/our-story/global-presence", "Global Presence"],
          ].map(([href, label]) => (
            <li key={href} style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1rem" }}>
              <ArrowLink href={href}>{label}</ArrowLink>
            </li>
          ))}
        </ul>
        <RelatedLinks
          title="Continue"
          items={[
            { href: "/collective", label: "Meet the Collective" },
            { href: "/connect/start-a-project", label: "Start a Project" },
          ]}
        />
      </Container>
    </>
  );
}
