import type { Metadata } from "next";
import { PageReveal } from "@/components/motion";
import { Container, MediaPlaceholder, PageHero } from "@/components/ui";
import { ProjectForm } from "@/components/connect/ProjectForm";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

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
        layout="split"
        media={
          <MediaPlaceholder
            aspect="portrait"
            need="Start a Project — begin atmosphere"
            brief="Invitation still: blank page, keyed object, or threshold into collaboration."
          />
        }
      />
      <Container className={hub.body}>
        <PageReveal>
          <p className={hub.note} data-reveal>
            <span className={hub.noteEm}>Outcomes first</span> — Launch, Grow, Scale,
            Modernize, Automate, Transform.
          </p>
          <div data-reveal>
            <ProjectForm />
          </div>
        </PageReveal>
      </Container>
    </>
  );
}
