import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  AccordionRail,
  ClipReveal,
  PageReveal,
} from "@/components/motion";
import {
  Breadcrumbs,
  Container,
  DetailCloser,
  DetailCtaRow,
  PageHero,
} from "@/components/ui";
import { plates } from "@/content/plates";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Process | Our Story | 13 UTOPIA",
    description:
      "Question, Imagine, Define, Create, Build, Grow — the six-step compounding methodology of 13 UTOPIA.",
  },
  path: "/our-story/process",
});

const STEPS = [
  {
    title: "Question",
    meta: "Step 01 · Audit",
    body: "Challenge the obvious. Find what is assumed, what is obsolete, and where the unseen leverage exists.",
  },
  {
    title: "Imagine",
    meta: "Step 02 · Explore",
    body: "Explore possibility beyond the familiar category brief. Prototype multiple aesthetic and technological horizons.",
  },
  {
    title: "Define",
    meta: "Step 03 · Strategy",
    body: "Choose direction with conviction. Turn exploratory concepts into an immutable strategy, architecture, and scope.",
  },
  {
    title: "Create",
    meta: "Step 04 · Form",
    body: "Give the idea form. Sensory brand systems, Didone typography, 3D CGI assets, and high-fidelity UI design.",
  },
  {
    title: "Build",
    meta: "Step 05 · Engineer",
    body: "Make the idea real. Sub-100ms Next.js platforms, WebGL shaders, and automated AI pipelines engineered to hold.",
  },
  {
    title: "Grow",
    meta: "Step 06 · Compound",
    body: "Create compounding market gravity. Technical SEO, performance funnels, and continuous conversion optimization.",
  },
] as const;

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story · Chapter 04"
        title="The Process"
        description="Six disciplined moves that connect raw ambition to shipped, compounding digital reality."
        layout="split"
        media={
          <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "420px", borderRadius: "1.25rem", overflow: "hidden", border: "1px solid rgba(232, 197, 106, 0.25)" }}>
            <Image
              src={plates.build.src}
              alt="13 Utopia Process"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: "cover", objectPosition: "50% 45%" }}
            />
          </div>
        }
      />

      <Container className={hub.body}>
        <PageReveal>
          <div data-reveal>
            <Breadcrumbs
              items={[
                { name: "Our Story", path: "/our-story" },
                { name: "Process", path: "/our-story/process" },
              ]}
            />
          </div>

          <div className={hub.editorialLeadBlock} data-reveal>
            <div className={hub.editorialKicker}>
              <span className={hub.editorialKickerDot} aria-hidden="true" />
              <span>Rigorous Execution</span>
            </div>
            <h2 className={hub.editorialLeadTitle}>
              Six moves. Zero guesswork.
            </h2>
            <p className={hub.editorialLeadLead}>
              We do not treat strategy, design, and engineering as sequential handoffs. They operate as one continuous feedback loop from the first question to the millionth user.
            </p>
          </div>
        </PageReveal>

        {/* Process Stat Matrix */}
        <PageReveal>
          <div className={hub.statGrid} data-reveal>
            <div className={hub.statCard}>
              <span className={hub.statVal}>06</span>
              <span className={hub.statLabel}>Phased Moves</span>
              <p className={hub.statDesc}>
                Structured progression from fundamental audit to automated compounding market growth.
              </p>
            </div>
            <div className={hub.statCard}>
              <span className={hub.statVal}>01</span>
              <span className={hub.statLabel}>Integrated Practice</span>
              <p className={hub.statDesc}>
                Strategy, brand design, full-stack engineering, and SEO working as one synchronized unit.
              </p>
            </div>
            <div className={hub.statCard}>
              <span className={hub.statVal}>00</span>
              <span className={hub.statLabel}>Idle Latency</span>
              <p className={hub.statDesc}>
                Every step produces concrete, reviewable software artifacts and production assets.
              </p>
            </div>
          </div>
        </PageReveal>

        <AccordionRail
          eyebrow="Methodology"
          lead="Question → Imagine → Define → Create → Build → Grow."
          items={[...STEPS]}
        />

        {/* Haute Editorial Pull Quote */}
        <PageReveal>
          <div className={hub.quotePullout} data-reveal>
            <blockquote className={hub.quotePulloutText}>
              “Process is not bureaucracy. In our hands, process is the shortest distance between an audacious idea and market dominance.”
            </blockquote>
            <cite className={hub.quotePulloutCite}>
              — 13 UTOPIA Delivery Standard
            </cite>
          </div>
        </PageReveal>

        <DetailCtaRow
          primaryHref="/connect/start-a-project"
          primaryLabel="Put the Method to Work"
          secondaryHref="/our-story"
          secondaryLabel="Our Story Overview"
        />

        <DetailCloser
          title="Ready to begin Phase 01?"
          lead="Initiate discovery to audit your brand, architecture, and market position."
          secondaryHref="/connect/discovery"
          secondaryLabel="Book Discovery"
        />
      </Container>
    </>
  );
}
