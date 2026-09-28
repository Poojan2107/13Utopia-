import type { Metadata } from "next";
import {
  ClipReveal,
  ScrollListIndex,
} from "@/components/motion";
import {
  Container,
  HubBridge,
  HubCloser,
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

/** Lean hub — list + bridge + closer. Heavy theater stacks removed for review stability. */
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
            fill
          />
        }
      />

      <Container className={hub.bodyTight}>
        <ScrollListIndex items={items} label="Latest" />

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
