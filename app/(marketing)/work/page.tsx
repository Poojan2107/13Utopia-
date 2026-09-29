import type { Metadata } from "next";
import { ExpandGallery, ProofArchive, ProofLayoutMorph } from "@/components/motion";
import { WorkFinale } from "@/components/work/WorkFinale";
import { WorkHero } from "@/components/work/WorkHero";
import { WorkManifest } from "@/components/work/WorkManifest";
import { plates } from "@/content/plates";
import { getCaseStudies } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Work & Evidence | 13 UTOPIA",
    description:
      "Case stories and interactive proof theatre — how 13 UTOPIA thinks, builds, and creates compounding market value.",
  },
  path: "/work",
});

const TONE = ["create", "build", "grow"] as const;
const CASE_UI_PLATES = [
  plates.eliteSports,
  plates.kumarCotton,
  plates.trendyFashion,
] as const;

/** Work hub — continuous Belief-density cinema */
export default function WorkHubPage() {
  const cases = getCaseStudies();

  const archive = cases.map((item, i) => ({
    href: `/work/${item.slug}`,
    title: item.title,
    body: item.summary,
    meta: `${item.client} · ${item.industry}`,
    tone: TONE[i % TONE.length],
    need: `${item.client} — ${item.title}`,
    image: CASE_UI_PLATES[i % CASE_UI_PLATES.length],
    stat: item.stats?.[0]?.value,
    statLabel: item.stats?.[0]?.label,
  }));

  const gallery = cases.map((item, i) => ({
    href: `/work/${item.slug}`,
    title: item.client,
    code: String(i + 1).padStart(2, "0"),
    need: `Gallery — ${item.client}`,
    tone: TONE[i % TONE.length],
    image: CASE_UI_PLATES[i % CASE_UI_PLATES.length],
  }));

  return (
    <>
      <WorkHero
        images={[
          plates.work,
          plates.eliteSports,
          plates.kumarCotton,
          plates.trendyFashion,
        ]}
      />

      {/* Awwwards 021 Multi-Stage Morphing Proof Theater */}
      <ProofLayoutMorph />

      <WorkManifest image={plates.create} />

      <ProofArchive
        eyebrow="Archive"
        lead="Shipped work. Scroll the records."
        cases={archive}
      />

      <ExpandGallery
        eyebrow="Index"
        lead="Three records. One practice."
        items={gallery}
      />

      <WorkFinale image={plates.grow} />
    </>
  );
}
