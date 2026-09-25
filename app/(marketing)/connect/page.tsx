import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ArrowLink } from "@/components/ui/TextLink";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Connect | 13 UTOPIA",
    description: "Start a project, book discovery, partnerships, support, and offices.",
  },
  path: "/connect",
});

const LINKS = [
  ["/connect/start-a-project", "Start a Project"],
  ["/connect/discovery", "Discovery"],
  ["/connect/partnerships", "Partnerships"],
  ["/connect/general", "General"],
  ["/connect/support", "Support"],
  ["/connect/india", "India"],
  ["/connect/canada", "Canada"],
] as const;

export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="What are you trying to make happen?"
        description="Relationship hub — choose the route that fits."
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
