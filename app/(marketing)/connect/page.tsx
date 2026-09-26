import type { Metadata } from "next";
import { CinematicParallax, ScrollListIndex } from "@/components/motion";
import {
  Container,
  HubBridge,
  HubCloser,
  MediaPlaceholder,
  PageHero,
} from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Connect | 13 UTOPIA",
    description: "Start a project, book discovery, partnerships, support, and offices.",
  },
  path: "/connect",
});

const ROUTES = [
  {
    href: "/connect/start-a-project",
    title: "Start a Project",
    body: "Tell us what you are trying to make happen.",
    tone: "warm" as const,
    need: "Start a Project atmosphere",
    cta: "Begin",
  },
  {
    href: "/connect/discovery",
    title: "Discovery",
    body: "Discuss an opportunity before a detailed brief.",
    tone: "strategy" as const,
    need: "Discovery conversation",
  },
  {
    href: "/connect/partnerships",
    title: "Partnerships",
    body: "Agency, technology, and growth partnerships.",
    tone: "create" as const,
    need: "Partnerships collaboration",
  },
  {
    href: "/connect/general",
    title: "General",
    body: "Press, speaking, and other inquiries.",
    tone: "dark" as const,
    need: "General correspondence",
  },
  {
    href: "/connect/support",
    title: "Support",
    body: "Help for existing clients and products.",
    tone: "build" as const,
    need: "Support systems",
  },
  {
    href: "/connect/india",
    title: "India",
    body: "Our India presence.",
    tone: "grow" as const,
    need: "India presence",
  },
  {
    href: "/connect/canada",
    title: "Canada",
    body: "Our Canada presence.",
    tone: "warm" as const,
    need: "Canada presence",
  },
];

export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="What are you trying to make happen?"
        description="Relationship hub — choose the route that fits."
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="warm"
            need="Connect hero — invitation to begin"
          />
        }
      />
      <Container className={hub.bodyTight}>
        <ScrollListIndex items={ROUTES} label="Routes" />
      </Container>

      <CinematicParallax
        eyebrow="Threshold"
        scenes={[
          {
            meta: "Begin",
            title: "Start with the outcome",
            caption: "A clear ask — and room to sharpen it.",
            need: "Connect — begin cinematic",
            tone: "warm",
          },
          {
            meta: "Converse",
            title: "Discovery before the brief",
            caption: "When the problem is still forming.",
            need: "Connect — converse cinematic",
            tone: "strategy",
          },
          {
            meta: "Places",
            title: "India · Canada",
            caption: "One collective across two continents.",
            need: "Connect — places cinematic",
            tone: "grow",
          },
        ]}
      />

      <Container className={hub.bodyTight}>
        <HubBridge
          eyebrow="Begin"
          statement="Bring the problem. We’ll find the move."
          support="Whether you know the outcome or need discovery first — there is a route."
          need="Connect — threshold atmosphere"
          tone="warm"
        />

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
