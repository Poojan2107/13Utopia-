import type { Metadata } from "next";
import {
  ClipReveal,
  EdgeMarquee,
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

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Collective | 13 UTOPIA",
    description: "People, disciplines, and culture at 13 UTOPIA.",
  },
  path: "/collective",
});

const LINKS = [
  {
    href: "/collective/leadership",
    title: "Leadership",
    tags: ["Direction", "Partners", "Standard"],
    body: "Partners and leads who set the standard across India and Canada.",
    image: plates.collective,
  },
  {
    href: "/collective/creative",
    title: "Creative",
    tags: ["Brand", "Design", "Craft"],
    body: "Brand, design, and CGI craft that makes ambition feel inevitable.",
    image: plates.create,
  },
  {
    href: "/collective/technology",
    title: "Technology",
    tags: ["Product", "Engineering", "AI"],
    body: "Product, engineering, and systems that hold under real use.",
    image: plates.build,
  },
  {
    href: "/collective/growth",
    title: "Growth",
    tags: ["Demand", "SEO", "Campaigns"],
    body: "Demand, SEO, and campaigns that compound market position.",
    image: plates.grow,
  },
  {
    href: "/collective/culture",
    title: "Culture",
    tags: ["Together", "Standard", "Floor"],
    body: "How we work together — the floor no one drops below.",
    image: plates.work,
  },
  {
    href: "/careers",
    title: "Careers",
    tags: ["Join", "Open", "Ambitious"],
    body: "Roles for people who refuse the obvious answer.",
    image: plates.collective,
  },
];

export default function CollectivePage() {
  return (
    <>
      <PageHero
        eyebrow="Collective"
        title="The people behind the work"
        description="India and Canada. One practice."
        layout="full"
        media={
          <MotionMedia
            aspect="hero"
            tone="warm"
            need="Collective hero"
            image={plates.collective}
            fill={false}
            sizes="100vw"
            priority
          />
        }
      />

      <EdgeMarquee
        eyebrow="Disciplines"
        lead="Meet the practice."
        footHref="/careers"
        footLabel="Open roles"
        items={LINKS}
      />

      <Container className={hub.bodyTight}>
        <ClipReveal>
          <HubBridge
            eyebrow="People"
            statement="Built by people who refuse default."
            support="Designers, systems engineers, and growth architects moving as one unified multidisciplinary practice across Canada and India."
            need="Collective bridge"
            tone="warm"
          />
        </ClipReveal>

        <HubCloser
          title="Want in?"
          lead="Culture is open to the right people."
          primaryHref="/careers"
          primaryLabel="Careers"
          secondaryHref="/connect/general"
          secondaryLabel="Get in touch"
        />
      </Container>
    </>
  );
}
