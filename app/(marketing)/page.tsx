import {
  CascadeReveal,
  ExplorePortals,
  FinalCTA,
  HomeHero,
  MethodStage,
  StudioCreed,
  VoiceLine,
} from "@/components/home";
import { CreateBuildGrowKinetic, ProofArchive } from "@/components/motion";
import { plates } from "@/content/plates";
import { testimonials } from "@/content/people";
import { getFeaturedCaseStudies } from "@/lib/content";

const CASE_UI_PLATES = [
  plates.eliteSports,
  plates.kumarCotton,
  plates.trendyFashion,
] as const;

const METHOD_STEPS = [
  {
    title: "Question",
    meta: "Discover",
    body: "Challenge the obvious. Find what is assumed — and what is broken.",
  },
  {
    title: "Imagine",
    meta: "Explore",
    body: "Explore possibility beyond the familiar brief.",
  },
  {
    title: "Define",
    meta: "Decide",
    body: "Choose direction with conviction. Ambition without a decision is noise.",
  },
  {
    title: "Create",
    meta: "Form",
    body: "Give the idea form — brand, experience, language people can feel.",
  },
  {
    title: "Build",
    meta: "Ship",
    body: "Make the idea real. Systems, products, and technology that hold.",
  },
  {
    title: "Grow",
    meta: "Compound",
    body: "Create momentum. Attention into demand into durable market.",
  },
] as const;

/**
 * Locked: Hero → Belief (068).
 * After: Capabilities (061) → Creed (SplitText) → Explore → Proof → Method → Voice → CTA.
 */
export default function HomePage() {
  const cases = getFeaturedCaseStudies();
  const voice = testimonials[0];

  return (
    <>
      <HomeHero />

      <div id="main-after-hero">
        <CascadeReveal
          kicker="02 · Belief"
          preStatement="Taste without systems is vanity. Systems without taste are invisible."
          statement="The obvious answer is rarely the valuable one."
          images={[plates.work, plates.create, plates.build, plates.grow]}
        />

        <CreateBuildGrowKinetic />

        <StudioCreed />

        <ExplorePortals />

        <ProofArchive
          eyebrow="Proof"
          lead="Scroll the records."
          cases={cases.map((c, i) => ({
            href: `/work/${c.slug}`,
            title: c.title,
            body: c.summary,
            meta: `${c.client} · ${c.industry}`,
            need: `Case — ${c.client}`,
            tone: (["create", "build", "grow"] as const)[i % 3],
            image: CASE_UI_PLATES[i % CASE_UI_PLATES.length],
          }))}
        />

        <MethodStage items={[...METHOD_STEPS]} />

        <VoiceLine
          quote={voice.quote}
          attribution={voice.attribution}
          role={voice.role}
          company={voice.company}
        />

        <FinalCTA />
      </div>
    </>
  );
}
