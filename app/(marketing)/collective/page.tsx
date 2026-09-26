import type { Metadata } from "next";
import { CinematicParallax, ExpandGallery, ScrollListIndex } from "@/components/motion";
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
    title: "Collective | 13 UTOPIA",
    description: "People, disciplines, and culture at 13 UTOPIA.",
  },
  path: "/collective",
});

const LINKS = [
  {
    href: "/collective/leadership",
    title: "Leadership",
    body: "The people setting direction.",
    tone: "warm" as const,
    need: "Leadership atmosphere",
  },
  {
    href: "/collective/creative",
    title: "Creative",
    body: "Brand, design, experience, and craft.",
    tone: "create" as const,
    need: "Creative studio atmosphere",
  },
  {
    href: "/collective/technology",
    title: "Technology",
    body: "Product, engineering, AI, systems.",
    tone: "build" as const,
    need: "Technology build environment",
  },
  {
    href: "/collective/growth",
    title: "Growth",
    body: "Marketing, performance, demand, content.",
    tone: "grow" as const,
    need: "Growth momentum environment",
  },
  {
    href: "/collective/culture",
    title: "Culture",
    body: "How we work together.",
    tone: "strategy" as const,
    need: "Culture — human moments",
  },
  {
    href: "/careers",
    title: "Careers",
    body: "Join ambitious work.",
    tone: "warm" as const,
    need: "Careers invitation",
  },
];

export default function CollectivePage() {
  return (
    <>
      <PageHero
        eyebrow="Collective"
        title="The people behind the work"
        description="India and Canada. Creative, technology, and growth — one practice."
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="warm"
            need="Collective hero — people of 13 UTOPIA"
          />
        }
      />
      <Container className={hub.bodyTight}>
        <ScrollListIndex items={LINKS} label="Disciplines" />
      </Container>

      <ExpandGallery
        eyebrow="Disciplines — expand"
        items={LINKS.filter((l) => l.href.startsWith("/collective")).map(
          (item, i) => ({
            title: item.title,
            code: `# ${String(i + 1).padStart(2, "0")}`,
            need: item.need,
            tone: item.tone,
          }),
        )}
      />

      <CinematicParallax
        eyebrow="Studio"
        scenes={[
          {
            meta: "Creative",
            title: "Where form is decided",
            caption: "Craft on the floor — brand, design, experience.",
            need: "Collective — creative floor cinematic",
            tone: "create",
          },
          {
            meta: "Build",
            title: "Where systems take shape",
            caption: "Product and engineering in the same breath.",
            need: "Collective — build floor cinematic",
            tone: "build",
          },
          {
            meta: "Together",
            title: "People who refuse default",
            caption: "Culture that shows up in the work.",
            need: "Collective — gather cinematic",
            tone: "warm",
          },
        ]}
      />

      <Container className={hub.bodyTight}>
        <HubBridge
          eyebrow="People"
          statement="Built by people who refuse default."
          support="Portraits and bios publish with verified people content. Until then — the practice, the process, the places."
          need="Collective — human bridge"
          tone="warm"
        />

        <HubCloser
          title="Want in?"
          lead="Openings appear when real. Culture is always open to the right people."
          primaryHref="/careers"
          primaryLabel="Careers"
          secondaryHref="/connect/general"
          secondaryLabel="Get in touch"
        />
      </Container>
    </>
  );
}
