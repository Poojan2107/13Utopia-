import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { getSolutions } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Solutions | 13 UTOPIA",
    description:
      "What are you trying to make happen? Launch, Grow, Scale, Modernize, Automate, Transform.",
  },
  path: "/solutions",
});

export default function SolutionsHubPage() {
  const solutions = getSolutions();

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="What are you trying to make happen?"
        description="The client lens — outcomes, not a service menu."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <ul
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {solutions.map((s) => (
            <li
              key={s.slug}
              style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1rem" }}
            >
              <Link href={`/solutions/${s.slug}`} style={{ textDecoration: "none" }}>
                <h2 style={{ fontSize: "var(--text-h3)" }}>{s.title}</h2>
                <p style={{ color: "var(--color-fg-muted)", margin: 0 }}>{s.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
