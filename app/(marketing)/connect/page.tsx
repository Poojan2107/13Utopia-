import type { Metadata } from "next";
import Link from "next/link";
import {
  AccordionRail,
  ClipReveal,
  MotionMedia,
} from "@/components/motion";
import {
  Container,
  HubBridge,
  HubCloser,
  PageHero,
} from "@/components/ui";
import { plates } from "@/content/plates";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";
import styles from "@/styles/connect/ConnectHub.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Connect | 13 UTOPIA",
    description:
      "Start a project, book discovery, partnerships, support, and offices.",
  },
  path: "/connect",
});

const ROUTES = [
  {
    href: "/connect/start-a-project",
    title: "Start a Project",
    body: "Tell us what you are trying to make happen.",
  },
  {
    href: "/connect/discovery",
    title: "Discovery",
    body: "Discuss an opportunity before a detailed brief.",
  },
  {
    href: "/connect/partnerships",
    title: "Partnerships",
    body: "Agency, technology, and growth partnerships.",
  },
  {
    href: "/connect/general",
    title: "General",
    body: "Press, speaking, and other inquiries.",
  },
  {
    href: "/connect/support",
    title: "Support",
    body: "Help for existing clients and products.",
  },
  {
    href: "/connect/canada",
    title: "Canada",
    body: "Toronto presence.",
  },
  {
    href: "/connect/india",
    title: "India",
    body: "India presence.",
  },
] as const;

/**
 * Connect hub — clarity first. Light reveal only. No motion zoo.
 */
export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="What are you trying to make happen?"
        description="Choose the route that fits — project, discovery, or presence."
        layout="full"
        media={
          <MotionMedia
            aspect="hero"
            tone="warm"
            need="Connect hero"
            image={plates.collective}
            fill={false}
            sizes="100vw"
            priority
          />
        }
      />

      <Container className={hub.bodyTight}>
        <nav className={styles.routes} aria-label="Connect routes">
          <p className={styles.routesKicker}>Routes</p>
          <ul className={styles.routeList}>
            {ROUTES.map((r, i) => (
              <li key={r.href} className={styles.routeItem}>
                <Link href={r.href} className={styles.routeLink} data-magnetic>
                  <span className={styles.routeNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.routeCopy}>
                    <span className={styles.routeTitle}>{r.title}</span>
                    <span className={styles.routeBody}>{r.body}</span>
                  </span>
                  <span className={styles.routeArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className={hub.bodyTight}>
        <AccordionRail
          eyebrow="How to choose"
          lead="Pick the route that matches where you are."
          items={[
            {
              title: "You know the outcome",
              meta: "Project",
              body: "Start a Project — tell us what you are trying to make happen.",
            },
            {
              title: "The problem is still forming",
              meta: "Discovery",
              body: "Book discovery before the brief hardens into the wrong plan.",
            },
            {
              title: "You need a place",
              meta: "Presence",
              body: "India and Canada — one collective. Reach the office that fits.",
            },
          ]}
        />
      </Container>

      <Container className={hub.bodyTight}>
        <ClipReveal mode="rise">
          <HubBridge
            eyebrow="Begin"
            statement="Bring the problem. We'll find the move."
            support="Whether you know the outcome or need discovery first — there is a route."
            need="Connect — threshold atmosphere"
            tone="warm"
            image={plates.collective}
          />
        </ClipReveal>

        <HubCloser
          title="Start now"
          lead="The shortest path from ambition to action."
          secondaryHref="/connect/discovery"
          secondaryLabel="Or book discovery"
        />
      </Container>
    </>
  );
}
