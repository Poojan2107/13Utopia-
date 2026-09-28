import type { Metadata } from "next";
import {
  ClipReveal,
  MotionMedia,
  ProofArchive,
} from "@/components/motion";
import {
  Container,
  HubBridge,
  HubCloser,
  PageHero,
} from "@/components/ui";
import { plates } from "@/content/plates";
import { getCaseStudies } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Work | 13 UTOPIA",
    description:
      "Case stories — proof of how 13 UTOPIA thinks, builds, and creates value.",
  },
  path: "/work",
});

const TONE = ["create", "build", "grow"] as const;
const CASE_UI_PLATES = [
  plates.eliteSports,
  plates.kumarCotton,
  plates.trendyFashion,
] as const;

/** Hub craft: Hero → archive → bridge → close */
export default function WorkHubPage() {
  const cases = getCaseStudies();

  const items = cases.map((item, i) => ({
    href: `/work/${item.slug}`,
    title: item.title,
    body: item.summary,
    meta: `${item.client} · ${item.industry}`,
    tone: TONE[i % TONE.length],
    need: `${item.client} — ${item.title}`,
    image: CASE_UI_PLATES[i % CASE_UI_PLATES.length],
  }));

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Case stories"
        description="Curated proof. Metrics only when verified."
        layout="full"
        media={
          <MotionMedia
            aspect="hero"
            tone="warm"
            need="Work hero"
            image={plates.work}
            fill={false}
            sizes="100vw"
            priority
          />
        }
      />

      <ProofArchive
        eyebrow="Archive"
        lead="Shipped work. Scroll the records."
        cases={items}
      />

      <Container className={hub.bodyTight}>
        <ClipReveal>
          <HubBridge
            eyebrow="Proof"
            statement="Ambition becomes evidence when Create, Build, and Grow move together."
            support="Stories from published client feedback. No invented metrics."
            need="Work bridge"
            tone="warm"
            image={plates.work}
          />
        </ClipReveal>

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
