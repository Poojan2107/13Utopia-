import type { Metadata } from "next";
import {
  AccordionRail,
  CinematicParallax,
  ClipReveal,
  CreativeCarousel,
  ExpandGallery,
  ScrollListIndex,
} from "@/components/motion";
import {
  Container,
  HubBridge,
  HubCloser,
  HubFilmStrip,
  MediaPlaceholder,
  PageHero,
} from "@/components/ui";
import { plates, plateForTone } from "@/content/plates";
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

const TONES = ["strategy", "create", "build", "grow", "warm"] as const;

export default function PerspectiveHubPage() {
  const articles = getPerspectiveArticles();

  const items = articles.map((article, i) => {
    const tone = TONES[i % TONES.length]!;
    return {
      href: `/perspective/${article.slug}`,
      title: article.title,
      body: article.excerpt,
      meta: `${article.category} · ${article.readingTime}`,
      cta: "Read",
      tone,
      need: `Article — ${article.title}`,
      image: plateForTone(tone),
    };
  });

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
      </Container>

      {items.length ? (
        <ExpandGallery
          eyebrow="Latest — expand"
          items={items.slice(0, 5).map((item, i) => ({
            title: item.title,
            code: `# ${String(i + 1).padStart(2, "0")}`,
            need: item.need,
            href: item.href,
            tone: item.tone,
            image: item.image,
          }))}
        />
      ) : null}

      <CreativeCarousel
        eyebrow="Intersections"
        autoplay
        slides={[
          ...items.map((item) => ({
            title: item.title,
            caption: item.body,
            need: item.need,
            tone: item.tone,
            image: item.image,
          })),
          {
            title: "Brand × Technology",
            caption: "Where craft meets systems.",
            need: "Perspective carousel — brand tech",
            tone: "create" as const,
            image: plates.create,
          },
          {
            title: "Product × Growth",
            caption: "Shipped and sold as one motion.",
            need: "Perspective carousel — product growth",
            tone: "grow" as const,
            image: plates.grow,
          },
        ]}
      />

      <CinematicParallax
        eyebrow="Field notes"
        scenes={[
          {
            meta: "Brand × Technology",
            title: "Where craft meets systems",
            caption: "The intersections we keep returning to.",
            need: "Editorial still — brand cinematic",
            tone: "create",
            image: plates.create,
          },
          {
            meta: "Product × Growth",
            title: "Shipped and sold as one motion",
            caption: "Thinking that refuses the silo.",
            need: "Editorial still — product cinematic",
            tone: "build",
            image: plates.build,
          },
          {
            meta: "Strategy",
            title: "Before the brief hardens",
            caption: "Questions that change the work.",
            need: "Editorial still — growth cinematic",
            tone: "grow",
            image: plates.grow,
          },
        ]}
      />

      <HubFilmStrip
        plates={[
          { need: "Perspective strip — craft", tone: "create" },
          { need: "Perspective strip — systems", tone: "build" },
          { need: "Perspective strip — market", tone: "grow" },
        ]}
      />

      <AccordionRail
        eyebrow="Why we write"
        lead="Execution without thinking is noise. Thinking without execution is decoration."
        items={[
          {
            title: "Intersections",
            meta: "Focus",
            body: "Brand × Technology, Product × Growth — the spaces between disciplines where the work actually changes.",
          },
          {
            title: "Before the brief",
            meta: "Timing",
            body: "Perspective is where questions get examined before the brief hardens into the wrong plan.",
          },
          {
            title: "Ship with honesty",
            meta: "Standard",
            body: "We publish when we have something to say — not to fill a calendar.",
          },
        ]}
      />

      <Container className={hub.bodyTight}>
        <ClipReveal>
          <HubBridge
            eyebrow="Why we write"
            statement="Execution without thinking is noise. Thinking without execution is decoration."
            support="Perspective is where the intersections get examined — before the work ships."
            need="Perspective — writing desk atmosphere"
            tone="strategy"
            image={plates.work}
          />
        </ClipReveal>

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
