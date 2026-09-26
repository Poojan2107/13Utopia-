import type { Metadata } from "next";
import { CinematicParallax, ExpandGallery, ScrollListIndex } from "@/components/motion";
import {
  Container,
  HubBridge,
  HubCloser,
  MediaPlaceholder,
  PageHero,
} from "@/components/ui";
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

const TONES = ["warm", "grow", "build", "strategy", "create", "warm"] as const;

export default function SolutionsHubPage() {
  const solutions = getSolutions();

  const items = solutions.map((s, i) => ({
    href: `/solutions/${s.slug}`,
    title: s.title,
    body: s.description,
    cta: `Explore ${s.title}`,
    tone: TONES[i % TONES.length],
    need: `${s.title} — outcome atmosphere`,
  }));

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="What are you trying to make happen?"
        description="The client lens — outcomes, not a service menu."
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="warm"
            need="Solutions hero — outcomes assembled"
          />
        }
      />
      <Container className={hub.bodyTight}>
        <ScrollListIndex items={items} label="Outcomes" />
      </Container>

      <ExpandGallery
        eyebrow="Outcomes — expand"
        items={items.slice(0, 5).map((item, i) => ({
          title: item.title,
          code: `# ${String(i + 1).padStart(2, "0")}`,
          need: item.need,
          tone: item.tone,
        }))}
      />

      <CinematicParallax
        eyebrow="Outcomes"
        scenes={[
          {
            meta: "Launch · Grow",
            title: "Ship what the market can feel",
            caption: "From first release to early traction — Create and Grow in lockstep.",
            need: "Launch / grow — cinematic still",
            tone: "create",
          },
          {
            meta: "Scale · Modernize",
            title: "Systems ready for the next stage",
            caption: "Architecture and product that hold under ambition.",
            need: "Scale / modernize — cinematic still",
            tone: "build",
          },
          {
            meta: "Automate · Transform",
            title: "Replace friction with flow",
            caption: "Intelligence and process redesign that change how the business moves.",
            need: "Automate / transform — cinematic still",
            tone: "grow",
          },
        ]}
      />

      <Container className={hub.bodyTight}>
        <HubBridge
          eyebrow="How it connects"
          statement="Outcomes first. Capabilities follow."
          support="Each solution pulls Create, Build, and Grow into one brief — so the work stays aligned to what the business needs to achieve."
          need="Solutions — decision atmosphere"
          tone="strategy"
        />

        <HubCloser
          title="Which outcome is yours?"
          lead="Start with the destination. We’ll assemble the worlds that get you there."
          secondaryHref="/capabilities"
          secondaryLabel="Explore capabilities"
        />
      </Container>
    </>
  );
}
