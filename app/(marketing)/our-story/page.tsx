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
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Our Story | 13 UTOPIA",
    description:
      "Why 13 UTOPIA exists — philosophy, vision, mission, process, and presence.",
  },
  path: "/our-story",
});

const CHAPTERS = [
  {
    href: "/our-story/why-13-utopia",
    title: "Why 13 UTOPIA",
    tags: ["Origin", "Name", "Philosophy"],
    image: plates.work,
  },
  {
    href: "/our-story/vision",
    title: "Vision",
    tags: ["Horizon", "Future", "Ambition"],
    image: plates.grow,
  },
  {
    href: "/our-story/mission",
    title: "Mission",
    tags: ["Practice", "Daily", "Work"],
    image: plates.create,
  },
  {
    href: "/our-story/process",
    title: "Process",
    tags: ["Question", "Create", "Build", "Grow"],
    image: plates.build,
  },
  {
    href: "/our-story/global-presence",
    title: "Presence",
    tags: ["India", "Canada", "Collective"],
    image: plates.collective,
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Why 13 UTOPIA exists"
        description="Beyond the obvious — Create, Build, Grow."
        layout="full"
        media={
          <MotionMedia
            aspect="hero"
            tone="warm"
            need="Our Story hero"
            image={plates.work}
            fill={false}
            sizes="100vw"
            priority
          />
        }
      />

      <EdgeMarquee
        eyebrow="Chapters"
        lead="Enter the story."
        items={CHAPTERS}
      />

      <Container className={hub.bodyTight}>
        <ClipReveal mode="rise">
          <HubBridge
            eyebrow="Belief"
            statement="The obvious answer isn’t always the right one."
            support="We question what already works, find what doesn’t, and build what comes next."
            need="Story bridge"
            tone="strategy"
          />
        </ClipReveal>

        <HubCloser
          title="Meet the people"
          lead="The collective is where the story becomes human."
          primaryHref="/collective"
          primaryLabel="Meet the Collective"
          secondaryHref="/connect/start-a-project"
          secondaryLabel="Start a Project"
        />
      </Container>
    </>
  );
}
