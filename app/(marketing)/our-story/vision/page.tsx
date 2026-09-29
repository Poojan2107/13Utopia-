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
    title: "Vision | Our Story | 13 UTOPIA",
    description: "Where 13 UTOPIA is pointed — the future we build toward.",
  },
  path: "/our-story/vision",
});

export default function VisionPage() {
  const copy = STORY_PAGES.vision;

  return (
    <>
      <PageHero
        eyebrow="Our Story · Chapter 02"
        title="The Vision"
        description="Where 13 UTOPIA is pointed — and what we refuse to become."
        layout="full"
        media={
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src={plates.grow.src}
              alt="13 Utopia Vision"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "55% 50%" }}
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
                { name: "Vision", path: "/our-story/vision" },
              ]}
            />
          </div>

          <div className={hub.editorialLeadBlock} data-reveal>
            <div className={hub.editorialKicker}>
              <span className={hub.editorialKickerDot} aria-hidden="true" />
              <span>The Horizon</span>
            </div>
            <h2 className={hub.editorialLeadTitle}>
              Where we are pointed.
            </h2>
            <p className={hub.editorialLeadLead}>
              {copy.lead}
            </p>
          </div>
        </PageReveal>

        {/* Vision Stats Callout */}
        <PageReveal>
          <div className={hub.statGrid} data-reveal>
            <div className={hub.statCard}>
              <span className={hub.statVal}>Long-term</span>
              <span className={hub.statLabel}>Brand Equity</span>
              <p className={hub.statDesc}>
                Creating work that establishes market presence rather than chasing temporary design fads.
              </p>
            </div>
            <div className={hub.statCard}>
              <span className={hub.statVal}>100%</span>
              <span className={hub.statLabel}>Full Ownership</span>
              <p className={hub.statDesc}>
                Total client ownership of all design assets, codebases, and automated workflows.
              </p>
            </div>
            <div className={hub.statCard}>
              <span className={hub.statVal}>Compounding</span>
              <span className={hub.statLabel}>Real Growth</span>
              <p className={hub.statDesc}>
                Connecting marketing, SEO, and product experience so every dollar invested builds on the last.
              </p>
            </div>
          </div>
        </PageReveal>

        {/* 2-Column Asymmetric Narrative Split */}
        <div className={hub.editorialSplit}>
          <PageReveal>
            <div className={hub.editorialSplitSticky} data-reveal>
              <span className={hub.editorialKicker}>Conviction</span>
              <h3 className={hub.subhead} style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: "1.05" }}>
                What we refuse to build.
              </h3>
              <p className={hub.note} style={{ maxWidth: "28rem", fontSize: "1.05rem", lineHeight: "1.7" }}>
                We refuse cookie-cutter Shopify themes, uninspired corporate decks, and slow, monolithic legacy stacks. The future belongs to agile, high-prestige brands built on ultra-fast modern infrastructure.
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
              “The ultimate luxury in the digital age is clarity. Fast systems, bold art direction, and undeniable proof of category dominance.”
            </blockquote>
            <cite className={hub.quotePulloutCite}>
              — 13 UTOPIA Vision Statement
            </cite>
          </div>
        </PageReveal>

        <DetailCtaRow
          primaryHref="/connect/start-a-project"
          primaryLabel="Start a Project"
          secondaryHref="/our-story/mission"
          secondaryLabel="Read Our Mission"
        />

        <DetailCloser
          title="Turn vision into execution"
          lead="Explore our multidisciplinary capabilities or discover our live case studies."
          secondaryHref="/capabilities"
          secondaryLabel="Explore Capabilities"
        />
      </Container>
    </>
  );
}
