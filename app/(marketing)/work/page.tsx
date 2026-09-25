import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { getCaseStudies } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Work | 13 UTOPIA",
    description: "Case stories — proof of how 13 UTOPIA thinks, builds, and creates value.",
  },
  path: "/work",
});

export default function WorkHubPage() {
  const cases = getCaseStudies();

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Case stories"
        description="Not a gallery only — context, challenge, insight, move, build, result, lesson."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <ul style={{ display: "grid", gap: "2rem" }}>
          {cases.map((item) => (
            <li
              key={item.slug}
              style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1.25rem" }}
            >
              <Link href={`/work/${item.slug}`} style={{ textDecoration: "none" }}>
                <p
                  style={{
                    margin: "0 0 0.5rem",
                    fontSize: "var(--text-micro)",
                    color: "var(--color-fg-muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.client}
                </p>
                <h2 style={{ fontSize: "var(--text-h3)" }}>{item.title}</h2>
                <p style={{ color: "var(--color-fg-muted)", margin: 0 }}>{item.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
