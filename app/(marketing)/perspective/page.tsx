import type { Metadata } from "next";
import {
  CinematicParallax,
  CreativeCarousel,
  ScrollListIndex,
} from "@/components/motion";
import {
  Container,
  HubBridge,
  HubCloser,
  MediaPlaceholder,
  PageHero,
} from "@/components/ui";
import { getPerspectiveArticles } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Perspective | 13 UTOPIA",
    description:
      "Editorial thinking from 13 UTOPIA — brand, technology, product, growth, and strategy.",
  },
  path: "/perspective",
});

export default function PerspectiveHubPage() {
  const articles = getPerspectiveArticles();

  const items = articles.map((article) => ({
    href: `/perspective/${article.slug}`,
    title: article.title,
    body: article.excerpt,
    meta: `${article.category} · ${article.readingTime}`,
    cta: "Read",
    tone: "strategy" as const,
    need: `Article — ${article.title}`,
  }));

  return (
    <>
      <PageHero
        eyebrow="Perspective"
        title="Thinking that crosses disciplines"
        description="We publish when we have something to say — Brand × Technology, Product × Growth, and the spaces between."
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="strategy"
            need="Perspective hero — editorial atmosphere"
          />
        }
      />
      <Container className={hub.bodyTight}>
        <ScrollListIndex items={items} label="Latest" />

        <CreativeCarousel
          eyebrow="Intersections"
          autoplay
          slides={[
            ...items.map((item) => ({
              title: item.title,
              caption: item.body,
              need: item.need,
              tone: item.tone,
            })),
            {
              title: "Brand × Technology",
              caption: "Where craft meets systems.",
              need: "Perspective carousel — brand tech",
              tone: "create",
            },
            {
              title: "Product × Growth",
              caption: "Shipped and sold as one motion.",
              need: "Perspective carousel — product growth",
              tone: "grow",
            },
          ]}
        />
      </Container>

      <CinematicParallax
        eyebrow="Field notes"
        scenes={[
          {
            meta: "Brand × Technology",
            title: "Where craft meets systems",
            caption: "The intersections we keep returning to.",
            need: "Editorial still — brand cinematic",
            tone: "create",
          },
          {
            meta: "Product × Growth",
            title: "Shipped and sold as one motion",
            caption: "Thinking that refuses the silo.",
            need: "Editorial still — product cinematic",
            tone: "build",
          },
          {
            meta: "Strategy",
            title: "Before the brief hardens",
            caption: "Questions that change the work.",
            need: "Editorial still — growth cinematic",
            tone: "grow",
          },
        ]}
      />

      <Container className={hub.bodyTight}>
        <HubBridge
          eyebrow="Why we write"
          statement="Execution without thinking is noise. Thinking without execution is decoration."
          support="Perspective is where the intersections get examined — before the work ships."
          need="Perspective — writing desk atmosphere"
          tone="strategy"
        />

        <HubCloser
          title="Have a thesis?"
          lead="If you’re wrestling with the same intersections, start a conversation."
          secondaryHref="/connect/discovery"
          secondaryLabel="Discovery"
        />
      </Container>
    </>
  );
}
