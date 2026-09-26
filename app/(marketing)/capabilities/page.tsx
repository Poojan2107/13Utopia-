import type { Metadata } from "next";
import {
  CinematicParallax,
  PageReveal,
  ScrollListIndex,
  StaggerGrid,
  StickyCardStack,
} from "@/components/motion";
import {
  Container,
  HubBridge,
  HubCloser,
  MediaPlaceholder,
  PageHero,
} from "@/components/ui";
import { getCapabilities, getCapabilityCategories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Capabilities | 13 UTOPIA",
    description:
      "What 13 UTOPIA can do — Create, Build, Grow, and Strategy & Consulting.",
  },
  path: "/capabilities",
});

const WORLD_TONE = {
  create: "create",
  build: "build",
  grow: "grow",
  strategy: "strategy",
} as const;

export default function CapabilitiesHubPage() {
  const categories = getCapabilityCategories();
  const capabilities = getCapabilities();

  const worldItems = categories.map((cat) => ({
    href: `/capabilities/${cat.slug}`,
    title: cat.title,
    body: cat.description,
    cta: `Enter ${cat.title}`,
    tone: WORLD_TONE[cat.slug] ?? ("warm" as const),
    need: `${cat.title} world atmosphere`,
  }));

  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="What can 13 UTOPIA do?"
        description="The company lens — Create, Build, Grow, connected by Strategy & Consulting."
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="warm"
            need="Capabilities hero — one practice, three worlds"
          />
        }
      />

      <Container className={hub.bodyTight}>
        <ScrollListIndex items={worldItems} label="Worlds" />
      </Container>

      <CinematicParallax
        eyebrow="Worlds"
        scenes={[
          {
            meta: "01 — Create",
            title: "Form with intent",
            caption: "Brand, design, and experience — the surface people feel first.",
            need: "Create craft — cinematic still",
            tone: "create",
          },
          {
            meta: "02 — Build",
            title: "Systems that hold",
            caption: "Product, engineering, and infrastructure made to last.",
            need: "Build systems — cinematic still",
            tone: "build",
          },
          {
            meta: "03 — Grow",
            title: "Momentum in market",
            caption: "Demand, content, and performance that compound.",
            need: "Grow momentum — cinematic still",
            tone: "grow",
          },
        ]}
      />

      <Container className={hub.bodyTight}>
        <HubBridge
          eyebrow="The practice"
          statement="Let’s imagine what’s possible — then make it work."
          support="Strategy decides direction. Create gives it form. Build makes it real. Grow turns it into market."
          need="Practice — collaborative atmosphere"
          tone="warm"
        />

        <StickyCardStack
          eyebrow="Capability groups"
          rotate
          cards={capabilities.slice(0, 5).map((cap, i) => ({
            href: `/capabilities/${cap.slug}`,
            title: cap.title,
            body: cap.description,
            meta: String(i + 1).padStart(2, "0"),
            need: `Capability group — ${cap.title}`,
            tone: (["create", "build", "grow", "strategy", "warm"] as const)[
              i % 5
            ],
          }))}
        />

        <PageReveal>
          <StaggerGrid
            eyebrow="All groups"
            cells={capabilities.map((cap, i) => ({
              href: `/capabilities/${cap.slug}`,
              title: cap.title,
              body: cap.description,
              need: `Capability grid — ${cap.title}`,
              tone: (["create", "build", "grow", "strategy", "warm", "dark"] as const)[
                i % 6
              ],
            }))}
          />
        </PageReveal>

        <HubCloser
          title="Ready to begin?"
          lead="Bring the problem. We’ll question the obvious — then create, build, and grow what comes next."
          secondaryHref="/solutions"
          secondaryLabel="Browse solutions"
        />
      </Container>
    </>
  );
}
