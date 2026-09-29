import {
  CascadeReveal,
  ExploreChapter,
  FinalCTA,
  HomeHero,
  MethodStage,
  StudioCreed,
  VoiceLine,
} from "@/components/home";
import { CreateBuildGrowKinetic, ProofArchive } from "@/components/motion";
import { plates } from "@/content/plates";
import { testimonials } from "@/content/people";
import { getCaseStudies } from "@/lib/content";

const CASE_UI_PLATES = [
  plates.eliteSports,
  plates.kumarCotton,
  plates.trendyFashion,
] as const;

const METHOD_STEPS = [
  {
    title: "Question",
    meta: "Start",
    body: "Start with the problem. What are we solving? What's assumed? What's getting in the way?",
  },
  {
    title: "Imagine",
    meta: "Explore",
    body: "Explore what could work — ideas, concepts, directions and possibilities.",
  },
  {
    title: "Define",
    meta: "Decide",
    body: "Choose a direction. Turn possibilities into a clear strategy and scope.",
  },
  {
    title: "Create",
    meta: "Form",
    body: "Give it form — brand, design, experience and content.",
  },
  {
    title: "Build",
    meta: "Make",
    body: "Make it real — technology, products, systems and AI.",
  },
  {
    title: "Grow",
    meta: "Work",
    body: "Put it to work — SEO, marketing, demand generation and continuous improvement.",
  },
] as const;

/**
 * Paced Architectural Journey:
 * 01 · Hero (Manifesto + 3D Gold Silk Bust)
 * 02 · Belief (CascadeReveal - Fameestate Image Depth & Obsidian Split Gates)
 * 03 · Capabilities (CreateBuildGrowKinetic - Awwwards 061 Converging Typography Tracks)
 * 04 · Creed (StudioCreed - Monumental Didone Breather)
 * 05 · Work (ProofArchive - 3D Cinema Card Showcase)
 * 06 · Method (MethodStage - Full-Viewport Pinned Scrub Theater)
 * 07 · Explore (ExploreChapter - Discipline Portal)
 * 08 · Verified Impact (VoiceLine - Full-Bleed Haute Editorial Quote)
 * 09 · Begin (FinalCTA - Floor Conversion Action)
 */
export default function HomePage() {
  const cases = getCaseStudies();
  const voice = testimonials[0];

  return (
    <>
      <HomeHero />

      <div id="main-after-hero">
        <CascadeReveal
          kicker="02 · Belief"
          preStatement="The obvious answer is rarely the only answer."
          statement="The obvious answer is rarely the only answer."
          body="Every business inherits assumptions — about its brand, its technology, its customers, and how growth is supposed to work. We question those assumptions first. Then we decide what is worth keeping, what needs to change, and what could exist instead."
          images={[plates.work, plates.create, plates.build, plates.grow]}
        />

        <CreateBuildGrowKinetic />

        <StudioCreed eyebrow="04 · The Equation" />

        <ProofArchive
          eyebrow="05 · Work"
          lead="Selected projects."
          cases={cases.map((c, i) => ({
            href: `/work/${c.slug}`,
            title: c.title,
            body: c.summary,
            meta: `${c.client} · ${c.industry}`,
            need: c.client,
            tone: (["create", "build", "grow"] as const)[i % 3],
            image: CASE_UI_PLATES[i % CASE_UI_PLATES.length],
            stat: c.stats?.[0]?.value,
            statLabel: c.stats?.[0]?.label,
            stack: c.stack,
          }))}
        />

        <MethodStage
          eyebrow="06 · Method"
          lead="Six moves. One compounding practice."
          items={[...METHOD_STEPS]}
        />

        <ExploreChapter eyebrow="07 · Explore" />

        <VoiceLine
          eyebrow="08 · Verified Impact"
          quote="13 UTOPIA didn't just rebuild our digital presence — they gave us the brand authority and high-conversion systems to dominate our category."
          attribution={voice.attribution}
          role={voice.role}
          company={voice.company}
          metric="+240%"
          metricLabel="Traffic & Conversion Growth"
        />

        <FinalCTA kicker="09 · Begin" />
      </div>
    </>
  );
}
