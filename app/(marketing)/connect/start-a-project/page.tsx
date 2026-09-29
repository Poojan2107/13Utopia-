import type { Metadata } from "next";
import Image from "next/image";
import { PageReveal } from "@/components/motion";
import { Container, PageHero } from "@/components/ui";
import { ProjectForm } from "@/components/connect/ProjectForm";
import { plates } from "@/content/plates";
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
        eyebrow="Connect · Project Intake"
        title="Start a Project"
        description="Tell us what you are trying to make happen. We’ll assemble Create, Build, and Grow around the outcome."
        layout="split"
        media={
          <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "380px", borderRadius: "1.25rem", overflow: "hidden", border: "1px solid rgba(232, 197, 106, 0.25)" }}>
            <Image
              src={plates.work.src}
              alt="13 Utopia Project Intake"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
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
