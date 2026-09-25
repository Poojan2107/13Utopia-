import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectForm } from "@/components/connect/ProjectForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Start a Project | Connect | 13 UTOPIA",
    description: "Tell us what you are trying to make happen — Launch to Transform.",
  },
  path: "/connect/start-a-project",
});

export default function StartProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Start a Project"
        description="What are you trying to make happen? Qualify the outcome, then tell us what you need."
      />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <ProjectForm />
      </Container>
    </>
  );
}
