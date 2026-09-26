import type { Metadata } from "next";
import { CinematicParallax, ScrollListIndex } from "@/components/motion";
import {
  Container,
  HubBridge,
  HubCloser,
  MediaPlaceholder,
  PageHero,
} from "@/components/ui";
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
    body: "The name, the philosophy, and why we exist — founder truth only.",
    tone: "warm" as const,
    need: "Why 13 UTOPIA — founding atmosphere",
    cta: "Enter",
  },
  {
    href: "/our-story/vision",
    title: "Vision",
    body: "Where we are pointed — the future we are building toward.",
    tone: "strategy" as const,
    need: "Vision — horizon plate",
    cta: "Enter",
  },
  {
    href: "/our-story/mission",
    title: "Mission",
    body: "What we do every day for ambitious businesses.",
    tone: "create" as const,
    need: "Mission — practice in motion",
    cta: "Enter",
  },
  {
    href: "/our-story/process",
    title: "Process",
    body: "Question → Imagine → Define → Create → Build → Grow.",
    tone: "build" as const,
    need: "Process — method sequence",
    cta: "Enter",
  },
  {
    href: "/our-story/global-presence",
    title: "Global Presence",
    body: "India and Canada — one collective across continents.",
    tone: "grow" as const,
    need: "Presence — India × Canada",
    cta: "Enter",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Why 13 UTOPIA exists"
        description="We help ambitious businesses move beyond the obvious — Create, Build, Grow."
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="warm"
            need="Our Story hero — origin atmosphere"
          />
        }
      />
      <Container className={hub.bodyTight}>
        <ScrollListIndex items={CHAPTERS} label="Chapters" />
      </Container>

      <CinematicParallax
        eyebrow="Origin"
        scenes={[
          {
            meta: "Mark",
            title: "A name with weight",
            caption: "Archive, ritual, and the reason we started.",
            need: "Story — archive / mark cinematic",
            tone: "warm",
          },
          {
            meta: "Practice",
            title: "Work on the floor",
            caption: "How ambition becomes method.",
            need: "Story — practice floor cinematic",
            tone: "create",
          },
          {
            meta: "Presence",
            title: "Two continents, one collective",
            caption: "India and Canada — shared standard.",
            need: "Story — two continents cinematic",
            tone: "grow",
          },
        ]}
      />

      <Container className={hub.bodyTight}>
        <HubBridge
          eyebrow="Belief"
          statement="The obvious answer isn’t always the right one."
          support="We question what already works, find what doesn’t, and build what comes next."
          need="Story — belief atmosphere"
          tone="strategy"
        />

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
