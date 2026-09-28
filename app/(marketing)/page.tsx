import {
  CascadeReveal,
  CapabilitiesChapter,
  ExploreChapter,
  FinalCTA,
  HomeHero,
  MethodChapter,
  StudioCreed,
  VoiceLine,
} from "@/components/home";
import { ProofArchive } from "@/components/motion";
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
 * Locked: Hero → Belief.
 * After: Caps / Creed / Proof / Method / Explore — concrete voice.
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
          preStatement="The obvious answer isn't always the right one."
          statement="The obvious answer isn't always the right one."
          body="Good work starts by asking better questions. We look at what exists, challenge what isn't working, and find a clearer way forward — whether that means changing the brand, rebuilding the product or rethinking how the business grows."
          images={[plates.work, plates.create, plates.build, plates.grow]}
        />

        <CapabilitiesChapter />

        <StudioCreed eyebrow="04 · Creed" />

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
          }))}
        />

        <MethodChapter eyebrow="06 · Method" items={[...METHOD_STEPS]} />

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
