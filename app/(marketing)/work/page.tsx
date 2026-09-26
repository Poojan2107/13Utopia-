import type { Metadata } from "next";
import {
  CinematicParallax,
  ScrollListIndex,
  StickyCardStack,
} from "@/components/motion";
import {
  Container,
  HubBridge,
  HubCloser,
  MediaPlaceholder,
  PageHero,
} from "@/components/ui";
import { getCaseStudies } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Work | 13 UTOPIA",
    description: "Case stories — proof of how 13 UTOPIA thinks, builds, and creates value.",
  },
  path: "/work",
});

const TONE = ["create", "build"] as const;

export default function WorkHubPage() {
  const cases = getCaseStudies();

  const items = cases.map((item, i) => ({
    href: `/work/${item.slug}`,
    title: item.title,
    body: item.summary,
    meta: `${item.industry} · ${item.client}`,
    cta: "Read the case",
    tone: TONE[i % TONE.length],
    need: `Case cover — ${item.title}`,
  }));

  const stackCards = [
    ...items.map((item) => ({
      href: item.href,
      title: item.title,
      body: item.body,
      meta: item.meta,
      need: item.need,
      tone: item.tone,
    })),
    {
      title: "Create × Build",
      body: "Where craft meets systems — the cases that prove the practice.",
      meta: "Worlds",
      need: "Work stack — create build atmosphere",
      tone: "create" as const,
      href: "/capabilities",
    },
    {
      title: "Next chapter",
      body: "Your ambition, documented with the same standard.",
      meta: "Commission",
      need: "Work stack — next chapter",
      tone: "grow" as const,
      href: "/connect/start-a-project",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Case stories"
        description="Curated proof — each story earns its place. Metrics appear only when verified."
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="warm"
            need="Work hero — evidence of ambition"
          />
        }
      />
      <Container className={hub.bodyTight}>
        <ScrollListIndex items={items} label="Featured" />
      </Container>

      <Container className={hub.bodyTight}>
        <StickyCardStack cards={stackCards} eyebrow="Proof stack" rotate />
      </Container>

      <CinematicParallax
        eyebrow="Evidence"
        scenes={[
          {
            meta: "Create",
            title: "Craft that carries the brand",
            caption: "Identity, experience, and story — made undeniable.",
            need: "Case detail — brand craft cinematic",
            tone: "create",
          },
          {
            meta: "Build",
            title: "Product you can operate",
            caption: "Interfaces and systems shipped with discipline.",
            need: "Case detail — product build cinematic",
            tone: "build",
          },
          {
            meta: "Grow",
            title: "Demand that compounds",
            caption: "Channels and content that keep earning.",
            need: "Case detail — market grow cinematic",
            tone: "grow",
          },
        ]}
      />

      <Container className={hub.bodyTight}>
        <HubBridge
          eyebrow="Proof"
          statement="Ambition becomes evidence when Create, Build, and Grow move together."
          support="Every featured story is a working draft until client approval. No invented metrics."
          need="Work — studio proof atmosphere"
          tone="warm"
        />

        <HubCloser
          title="Have a story to write?"
          lead="Bring the challenge. We’ll find the move."
          secondaryHref="/capabilities"
          secondaryLabel="Capabilities"
        />
      </Container>
    </>
  );
}
