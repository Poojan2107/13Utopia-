import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Process | Our Story | 13 UTOPIA",
    description:
      "Question, Imagine, Define, Create, Build, Grow — how 13 UTOPIA thinks and works.",
  },
  path: "/our-story/process",
});

const STEPS = [
  { n: "01", title: "Question", body: "Challenge the obvious." },
  { n: "02", title: "Imagine", body: "Explore possibility." },
  { n: "03", title: "Define", body: "Turn possibility into direction." },
  { n: "04", title: "Create", body: "Give the idea form." },
  { n: "05", title: "Build", body: "Engineer the reality." },
  { n: "06", title: "Grow", body: "Create momentum." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="How we work"
        description="A clear method that connects thinking to execution — useful as a sales-enablement resource."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Our Story", path: "/our-story" },
            { name: "Process", path: "/our-story/process" },
          ]}
        />
        <ol style={{ display: "grid", gap: "1.5rem", marginTop: "2rem" }}>
          {STEPS.map((step) => (
            <li
              key={step.n}
              style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1rem" }}
            >
              <p
                style={{
                  margin: "0 0 0.35rem",
                  color: "var(--color-accent)",
                  fontSize: "var(--text-micro)",
                  letterSpacing: "0.1em",
                }}
              >
                {step.n}
              </p>
              <h2 style={{ fontSize: "var(--text-h3)", marginBottom: "0.35rem" }}>
                {step.title}
              </h2>
              <p style={{ margin: 0, color: "var(--color-fg-muted)" }}>{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
