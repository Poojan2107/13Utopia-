import type { Metadata } from "next";
import Link from "next/link";
import {
  AccordionRail,
  ClipReveal,
  MotionMedia,
  PageReveal,
} from "@/components/motion";
import {
  Breadcrumbs,
  Container,
  PageHero,
} from "@/components/ui";
import { plates } from "@/content/plates";
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
    title: "Question",
    meta: "Discover",
    body: "Challenge the obvious. Find what is assumed — and what is broken.",
  },
  {
    title: "Imagine",
    meta: "Explore",
    body: "Explore possibility beyond the familiar brief.",
  },
  {
    title: "Define",
    meta: "Decide",
    body: "Choose direction with conviction. Ambition without a decision is noise.",
  },
  {
    title: "Create",
    meta: "Form",
    body: "Give the idea form — brand, experience, language people can feel.",
  },
  {
    title: "Build",
    meta: "Ship",
    body: "Make the idea real. Systems, products, and technology that hold.",
  },
  {
    title: "Grow",
    meta: "Compound",
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
          <MotionMedia
            aspect="portrait"
            tone="build"
            need="Process — six-step method environment"
            image={plates.build}
            fill={false}
            sizes="(max-width: 900px) 100vw, 45vw"
            priority
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
        </PageReveal>

        <AccordionRail
          eyebrow="Method"
          lead="Question → Imagine → Define → Create → Build → Grow."
          items={[...STEPS]}
        />

        <ClipReveal mode="rise">
          <div className={hub.mediaBreak}>
            <MotionMedia
              aspect="film"
              tone="warm"
              need="Process — team in a define / create moment"
              image={plates.create}
              fill={false}
              sizes="100vw"
            />
          </div>
        </ClipReveal>

        <div className={hub.ctaRow}>
          <Link href="/connect/start-a-project" className={hub.ctaPrimary}>
            Start a Project
            <span aria-hidden="true"> →</span>
          </Link>
          <Link href="/our-story" className={hub.ctaSecondary}>
            Our Story
          </Link>
        </div>
      </Container>
    </>
  );
}
