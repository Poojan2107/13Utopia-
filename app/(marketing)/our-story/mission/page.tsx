import type { Metadata } from "next";
import Image from "next/image";
import {
  Breadcrumbs,
  Container,
  DetailCloser,
  DetailCtaRow,
  PageHero,
} from "@/components/ui";
import { PageReveal } from "@/components/motion";
import { plates } from "@/content/plates";
import { STORY_PAGES } from "@/content/narratives";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Mission | Our Story | 13 UTOPIA",
    description: "What 13 UTOPIA does every day for ambitious businesses.",
  },
  path: "/our-story/mission",
});

export default function MissionPage() {
  const copy = STORY_PAGES.mission;

  return (
    <>
      <PageHero
        eyebrow="Our Story · Chapter 03"
        title="The Mission"
        description="The daily work of questioning assumptions, crafting category gravity, and shipping compounding software."
        layout="full"
        media={
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src={plates.create.src}
              alt="13 Utopia Mission"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "50% 40%" }}
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
                { name: "Mission", path: "/our-story/mission" },
              ]}
            />
          </div>

          <div className={hub.editorialLeadBlock} data-reveal>
            <div className={hub.editorialKicker}>
              <span className={hub.editorialKickerDot} aria-hidden="true" />
              <span>Daily Commitment</span>
            </div>
            <h2 className={hub.editorialLeadTitle}>
              What we do every day.
            </h2>
            <p className={hub.editorialLeadLead}>
              {copy.lead}
            </p>
          </div>
        </PageReveal>

        {/* Mission Metrics Callout */}
        <PageReveal>
          <div className={hub.statGrid} data-reveal>
            <div className={hub.statCard}>
              <span className={hub.statVal}>100%</span>
              <span className={hub.statLabel}>Dedicated Team</span>
              <p className={hub.statDesc}>
                Every design, codebase, and growth strategy is built directly by senior practitioners.
              </p>
            </div>
            <div className={hub.statCard}>
              <span className={hub.statVal}>06</span>
              <span className={hub.statLabel}>Outcome Pathways</span>
              <p className={hub.statDesc}>
                Clear, structured journeys from problem diagnosis to working software and real demand.
              </p>
            </div>
            <div className={hub.statCard}>
              <span className={hub.statVal}>Fast</span>
              <span className={hub.statLabel}>Built for Speed</span>
              <p className={hub.statDesc}>
                Fast loading, accessible, and engineered to perform and convert on every device.
              </p>
            </div>
          </div>
        </PageReveal>

        {/* 2-Column Asymmetric Narrative Split */}
        <div className={hub.editorialSplit}>
          <PageReveal>
            <div className={hub.editorialSplitSticky} data-reveal>
              <span className={hub.editorialKicker}>The Standard</span>
              <h3 className={hub.subhead} style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: "1.05" }}>
                How we measure success.
              </h3>
              <p className={hub.note} style={{ maxWidth: "28rem", fontSize: "1.05rem", lineHeight: "1.7" }}>
                Success is not subjective applause. It is measurable market leadership: category-defining brand authority, lightning-fast edge experiences, and compounding commercial revenue.
              </p>
            </div>
          </PageReveal>

          <PageReveal>
            <div className={hub.prose} data-reveal>
              {copy.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </PageReveal>
        </div>

        {/* Haute Editorial Pull Quote */}
        <PageReveal>
          <div className={hub.quotePullout} data-reveal>
            <blockquote className={hub.quotePulloutText}>
              “We do not stop when an interface looks beautiful. We stop when it commands attention, converts demand, and dominates search.”
            </blockquote>
            <cite className={hub.quotePulloutCite}>
              — 13 UTOPIA Mission Charter
            </cite>
          </div>
        </PageReveal>

        <DetailCtaRow
          primaryHref="/connect/start-a-project"
          primaryLabel="Start a Project"
          secondaryHref="/our-story/process"
          secondaryLabel="Explore Our Process"
        />

        <DetailCloser
          title="See our work in the field"
          lead="Inspect case studies across e-commerce, custom SaaS, and international B2B platforms."
          secondaryHref="/work"
          secondaryLabel="View Case Studies"
        />
      </Container>
    </>
  );
}
