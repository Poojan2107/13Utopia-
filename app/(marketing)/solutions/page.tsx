import type { Metadata } from "next";
import {
  ClipReveal,
  EdgeMarquee,
  MotionMedia,
} from "@/components/motion";
import {
  Container,
  HubBridge,
  HubCloser,
  PageHero,
} from "@/components/ui";
import { plates } from "@/content/plates";
import { getSolutions } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Solutions | 13 UTOPIA",
    description:
      "What are you trying to make happen? Launch, Grow, Scale, Modernize, Automate, Transform.",
  },
  path: "/solutions",
});

const IMAGES = [
  plates.create,
  plates.grow,
  plates.build,
  plates.work,
  plates.collective,
  plates.grow,
] as const;

const SOLUTION_TAGS: Record<string, string[]> = {
  launch: ["Brand", "Product", "Demand"],
  grow: ["Demand", "SEO", "Momentum"],
  scale: ["Systems", "Volume", "Ambition"],
  modernize: ["Legacy", "Platform", "Clarity"],
  automate: ["AI", "Ops", "Velocity"],
  transform: ["Strategy", "Culture", "Market"],
};

/** Hub craft: Hero → outcomes index → bridge → close */
export default function SolutionsHubPage() {
  const solutions = getSolutions();

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="What are you trying to make happen?"
        description="Outcomes first. Capabilities assemble after."
        layout="full"
        media={
          <MotionMedia
            aspect="hero"
            tone="warm"
            need="Solutions hero"
            image={plates.grow}
            fill={false}
            sizes="100vw"
            priority
          />
        }
      />

      <EdgeMarquee
        eyebrow="Outcomes"
        lead="Name the destination."
        footHref="/connect/start-a-project"
        footLabel="Start a project"
        items={solutions.map((s, i) => ({
          href: `/solutions/${s.slug}`,
          title: s.title,
          body: s.description,
          tags: SOLUTION_TAGS[s.slug] ?? [s.title],
          image: IMAGES[i % IMAGES.length],
        }))}
      />

      <Container className={hub.bodyTight}>
        <ClipReveal>
          <HubBridge
            eyebrow="How it connects"
            statement="Outcomes first. Capabilities follow."
            support="Each solution pulls Create, Build, and Grow into one brief."
            need="Solutions bridge"
            tone="strategy"
          />
        </ClipReveal>

        <HubCloser
          title="Which outcome is yours?"
          lead="Start with the destination. We’ll assemble the worlds."
          secondaryHref="/capabilities"
          secondaryLabel="Explore capabilities"
        />
      </Container>
    </>
  );
}
