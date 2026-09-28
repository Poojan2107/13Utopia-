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
import { getCapabilityCategories } from "@/lib/content";
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

const WORLD_TAGS: Record<string, string[]> = {
  create: ["Brand", "Design", "CGI", "Experience"],
  build: ["Web", "Product", "Systems", "AI"],
  grow: ["SEO", "Campaigns", "Content", "Demand"],
  strategy: ["Direction", "Advisory", "Brief", "Clarity"],
};

const plateByWorld = {
  create: plates.create,
  build: plates.build,
  grow: plates.grow,
  strategy: plates.work,
} as const;

/**
 * Hub craft: Hero → one index → bridge → close.
 * No duplicate stacks.
 */
export default function CapabilitiesHubPage() {
  const categories = getCapabilityCategories();

  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="What can 13 UTOPIA do?"
        description="Create, Build, Grow — connected by Strategy & Consulting."
        layout="full"
        media={
          <MotionMedia
            aspect="hero"
            tone="warm"
            need="Capabilities hero"
            image={plates.create}
            fill={false}
            sizes="100vw"
            priority
          />
        }
      />

      <EdgeMarquee
        eyebrow="Worlds"
        lead="Three worlds. One practice."
        items={categories.map((cat) => {
          const slug = cat.slug as keyof typeof plateByWorld;
          return {
            href: `/capabilities/${cat.slug}`,
            title: cat.title,
            tags: WORLD_TAGS[cat.slug] ?? [cat.title],
            image: plateByWorld[slug] ?? plates.work,
          };
        })}
      />

      <Container className={hub.bodyTight}>
        <ClipReveal>
          <HubBridge
            eyebrow="The practice"
            statement="Let’s imagine what’s possible — then make it work."
            support="Strategy decides. Create forms. Build ships. Grow compounds."
            need="Practice atmosphere"
            tone="warm"
          />
        </ClipReveal>

        <HubCloser
          title="Ready to begin?"
          lead="Bring the problem. We’ll question the obvious."
          secondaryHref="/solutions"
          secondaryLabel="Browse solutions"
        />
      </Container>
    </>
  );
}
