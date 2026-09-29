import type { Metadata } from "next";
import Link from "next/link";
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
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Global Presence | Our Story | 13 UTOPIA",
    description:
      "Toronto and India — one unified practice across continents with 24h continuous execution.",
  },
  path: "/our-story/global-presence",
});

const HUBS = [
  {
    num: "01",
    city: "Toronto, Canada",
    region: "The Americas Hub",
    coords: "43.6532° N, 79.3832° W",
    tz: "EST / UTC-5",
    focus: "Creative Direction · Global Strategy · Brand Systems",
    desc: "Anchoring our North American client partnerships, brand positioning, and executive creative advisory.",
    href: "/connect/toronto",
    image: plates.collective.src,
  },
  {
    num: "02",
    city: "Gujarat, India",
    region: "Asia-Pacific Engineering Hub",
    coords: "21.1702° N, 72.8311° E",
    tz: "IST / UTC+5:30",
    focus: "Next.js Engineering · Custom AI · Technical SEO & Scale",
    desc: "Engineering high-concurrency digital platforms, WebGL shaders, automated AI workflows, and search engines.",
    href: "/connect/india",
    image: plates.build.src,
  },
];

export default function GlobalPresencePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story · Chapter 05"
        title="Global Presence"
        description="Toronto and India — two sovereign hubs operating as one continuous multidisciplinary practice."
        layout="full"
        media={
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src={plates.collective.src}
              alt="13 Utopia Global Presence"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
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
                { name: "Global Presence", path: "/our-story/global-presence" },
              ]}
            />
          </div>

          <div className={hub.editorialLeadBlock} data-reveal>
            <div className={hub.editorialKicker}>
              <span className={hub.editorialKickerDot} aria-hidden="true" />
              <span>Transcontinental Infrastructure</span>
            </div>
            <h2 className={hub.editorialLeadTitle}>
              Not two disjointed offices. One synchronized engine.
            </h2>
            <p className={hub.editorialLeadLead}>
              We operate across 10.5 time zones to deliver continuous momentum. When the Americas sleep, Asia-Pacific builds. When Asia-Pacific wraps, the Americas strategize and deploy.
            </p>
          </div>
        </PageReveal>

        {/* Global Stats Matrix */}
        <PageReveal>
          <div className={hub.statGrid} data-reveal>
            <div className={hub.statCard}>
              <span className={hub.statVal}>24H</span>
              <span className={hub.statLabel}>Continuous Cycle</span>
              <p className={hub.statDesc}>
                Synchronized transcontinental delivery ensuring zero idle project latency.
              </p>
            </div>
            <div className={hub.statCard}>
              <span className={hub.statVal}>02</span>
              <span className={hub.statLabel}>Sovereign Hubs</span>
              <p className={hub.statDesc}>
                Dedicated creative strategy in Toronto and advanced engineering in Gujarat, India.
              </p>
            </div>
            <div className={hub.statCard}>
              <span className={hub.statVal}>100%</span>
              <span className={hub.statLabel}>Direct Partner Access</span>
              <p className={hub.statDesc}>
                No junior account managers or outsourced handoffs. Direct senior engineering and design leadership.
              </p>
            </div>
          </div>
        </PageReveal>

        {/* 2 Hub Feature Cards */}
        <PageReveal>
          <div className={hub.editorialSection} data-reveal>
            <div className={hub.editorialKicker}>
              <span className={hub.editorialKickerDot} aria-hidden="true" />
              <span>Studio Network</span>
            </div>
            <h3 className={hub.subhead} style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
              The Dual Studios
            </h3>

            <div className={hub.hubCardGrid} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))" }}>
              {HUBS.map((hubItem) => (
                <Link
                  key={hubItem.num}
                  href={hubItem.href}
                  className={hub.hubCard}
                  data-magnetic
                >
                  <div className={hub.hubCardTop}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span className={hub.hubCardNum}>{hubItem.num}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--color-gold)", letterSpacing: "0.14em" }}>
                        {hubItem.coords}
                      </span>
                    </div>
                    <h4 className={hub.hubCardTitle}>{hubItem.city}</h4>
                    <p style={{ margin: "0", fontFamily: "var(--font-ui)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)" }}>
                      {hubItem.region} · {hubItem.tz}
                    </p>
                    <p className={hub.hubCardBody}>{hubItem.desc}</p>
                    <p style={{ margin: "0.5rem 0 0", fontFamily: "var(--font-ui)", fontSize: "0.8125rem", color: "rgba(243, 241, 234, 0.55)" }}>
                      {hubItem.focus}
                    </p>
                  </div>
                  <div className={hub.hubCardFoot}>
                    <span>Contact {hubItem.city.split(",")[0]} Hub</span>
                    <span aria-hidden="true">Connect →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </PageReveal>

        {/* Haute Editorial Pull Quote */}
        <PageReveal>
          <div className={hub.quotePullout} data-reveal>
            <blockquote className={hub.quotePulloutText}>
              “Global scale is meaningless without unity of taste. Whether code is written in Toronto or compiled in Gujarat, every commit meets the 13 UTOPIA standard.”
            </blockquote>
            <cite className={hub.quotePulloutCite}>
              — 13 UTOPIA Global Charter
            </cite>
          </div>
        </PageReveal>

        <DetailCtaRow
          primaryHref="/connect/start-a-project"
          primaryLabel="Start a Project"
          secondaryHref="/connect"
          secondaryLabel="All Global Channels"
        />

        <DetailCloser
          title="Ready to build across borders?"
          lead="Reach out directly to initiate discovery or request partner availability."
          secondaryHref="/work"
          secondaryLabel="Explore Case Studies"
        />
      </Container>
    </>
  );
}
