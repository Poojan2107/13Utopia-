import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero, RelatedLinks } from "@/components/ui/PageHero";
import { getOffices } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Global Presence | Our Story | 13 UTOPIA",
    description: "Verified geographic presence — India and Canada placeholders pending facts.",
  },
  path: "/our-story/global-presence",
});

export default function GlobalPresencePage() {
  const offices = getOffices();

  return (
    <>
      <PageHero
        eyebrow="Presence"
        title="Where we operate"
        description="Only verified geographic facts. Unsupported global-reach claims are omitted."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Our Story", path: "/our-story" },
            { name: "Global Presence", path: "/our-story/global-presence" },
          ]}
        />
        <ul style={{ display: "grid", gap: "1.5rem", marginTop: "2rem" }}>
          {offices.map((office) => (
            <li
              key={office.slug}
              style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1rem" }}
            >
              <h2 style={{ fontSize: "var(--text-h3)" }}>{office.title}</h2>
              <p style={{ color: "var(--color-fg-muted)", margin: 0 }}>
                {office.address} · {office.email} · {office.phone}
              </p>
            </li>
          ))}
        </ul>
        <RelatedLinks
          title="Connect by location"
          items={[
            { href: "/connect/india", label: "India" },
            { href: "/connect/canada", label: "Canada" },
          ]}
        />
      </Container>
    </>
  );
}
