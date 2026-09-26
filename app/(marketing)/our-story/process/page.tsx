import type { Metadata } from "next";
import Link from "next/link";
import { PageReveal } from "@/components/motion";
import {
  Breadcrumbs,
  Container,
  MediaPlaceholder,
  PageHero,
} from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Process | Our Story | 13 UTOPIA",
    description:
      "Question, Imagine, Define, Create, Build, Grow — how 13 UTOPIA thinks and works.",
  },
  path: "/our-story/process",
});

const STEPS = [
  {
    n: "01",
    title: "Question",
    body: "Challenge the obvious. Find what is assumed — and what is broken.",
  },
  {
    n: "02",
    title: "Imagine",
    body: "Explore possibility beyond the familiar brief.",
  },
  {
    n: "03",
    title: "Define",
    body: "Choose direction with conviction. Ambition without a decision is noise.",
  },
  {
    n: "04",
    title: "Create",
    body: "Give the idea form — brand, experience, language people can feel.",
  },
  {
    n: "05",
    title: "Build",
    body: "Make the idea real. Systems, products, and technology that hold.",
  },
  {
    n: "06",
    title: "Grow",
    body: "Create momentum. Attention into demand into durable market.",
  },
] as const;

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="How we work"
        description="A clear method that connects thinking to execution."
        layout="split"
        media={
          <MediaPlaceholder
            aspect="portrait"
            need="Process — six-step method environment"
            brief="Wall, board, or sequence that makes the method feel physical."
          />
        }
      />
      <Container className={hub.body}>
        <PageReveal>
          <div data-reveal>
            <Breadcrumbs
              items={[
                { name: "Our Story", path: "/our-story" },
                { name: "Process", path: "/our-story/process" },
              ]}
            />
          </div>

          <div className={hub.narrative}>
            {STEPS.map((step) => (
              <section key={step.n} className={hub.narrativeBlock} data-reveal>
                <p className={hub.narrativeLabel}>{step.n}</p>
                <h2 className={hub.narrativeTitle}>{step.title}</h2>
                <p className={hub.narrativeBody}>{step.body}</p>
              </section>
            ))}
          </div>

          <div className={hub.mediaBreak} data-reveal>
            <MediaPlaceholder
              aspect="film"
              need="Process — team in a define / create moment"
              brief="Documentary still of the method in use."
            />
          </div>

          <div className={hub.ctaRow} data-reveal>
            <Link href="/connect/start-a-project" className={hub.ctaPrimary}>
              Start a Project
              <span aria-hidden="true"> →</span>
            </Link>
            <Link href="/our-story" className={hub.ctaSecondary}>
              Our Story
            </Link>
          </div>
        </PageReveal>
      </Container>
    </>
  );
}
