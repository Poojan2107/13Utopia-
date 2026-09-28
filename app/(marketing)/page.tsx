import {
  CascadeReveal,
  FinalCTA,
  HomeHero,
  HoverImageMenu,
  ProcessTheater,
  StudioCreed,
  VoiceLine,
} from "@/components/home";
import {
  CreateBuildGrowKinetic,
  ProofArchive,
  TextRepetitionScroll,
} from "@/components/motion";
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

const EXPLORE_ITEMS = [
  {
    href: "/work",
    title: "Work",
    sub: "Evidence of ambition realized — platforms, commerce, brand transformations.",
    image: plates.work,
    tags: ["Proof", "Case Studies", "CGI"],
  },
  {
    href: "/solutions",
    title: "Solutions",
    sub: "Modular engagements to launch, scale, and modernize.",
    image: plates.build,
    tags: ["Launch", "Scale", "AI"],
  },
  {
    href: "/collective",
    title: "Collective",
    sub: "Designers, engineers, and strategists across India and the world.",
    image: plates.collective,
    tags: ["People", "Craft", "Culture"],
  },
  {
    href: "/perspective",
    title: "Perspective",
    sub: "Essays and signal on design, software, and brand velocity.",
    image: plates.grow,
    tags: ["Thinking", "Notes", "POV"],
  },
] as const;

/**
 * Locked: Hero → Belief (068).
 * After: Caps (061/011) → Creed (029) → Proof (071) → Method (070) → Explore (011) → Voice → 023 → CTA.
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
          preStatement="Taste without systems is vanity. Systems without taste are invisible."
          statement="The obvious answer is rarely the valuable one."
          images={[plates.work, plates.create, plates.build, plates.grow]}
        />

        <CreateBuildGrowKinetic />

        <StudioCreed />

        <ProofArchive
          eyebrow="Proof"
          lead="One record. Three echoes."
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

        <ProcessTheater
          items={[...METHOD_STEPS]}
          eyebrow="Method"
          lead="Six moves. One practice."
          image={plates.heroSculpture}
        />

        <HoverImageMenu
          id="explore"
          eyebrow="Explore"
          lead="Where the practice opens."
          items={[...EXPLORE_ITEMS]}
          footHref={null}
        />

        <VoiceLine
          quote={voice.quote}
          attribution={voice.attribution}
          role={voice.role}
          company={voice.company}
        />

        <TextRepetitionScroll
          text="BE UNREASONABLE"
          kicker="Close"
          totalWords={7}
        />

        <FinalCTA />
      </div>
    </>
  );
}
