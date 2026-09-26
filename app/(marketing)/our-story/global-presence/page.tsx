import type { Metadata } from "next";
import Link from "next/link";
import { PageReveal } from "@/components/motion";
import {
  Container,
  DetailCloser,
  DetailCtaRow,
  MediaBreak,
  MediaPlaceholder,
  PageHero,
  ProseBlock,
} from "@/components/ui";
import { getOffices } from "@/lib/content";
import { displayText } from "@/lib/content/display";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Global Presence | Our Story | 13 UTOPIA",
    description: "India and Canada — one collective across continents.",
  },
  path: "/our-story/global-presence",
});

export default function GlobalPresencePage() {
  const offices = getOffices();

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Global Presence"
        description="India and Canada — one collective, one standard."
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="grow"
            need="Presence — India × Canada"
          />
        }
      />
      <Container className={hub.body}>
        <ProseBlock
          paragraphs={[
            "We work as one practice across continents — Create, Build, and Grow sharing the same bar for craft and delivery.",
            "Verified street addresses and phone numbers publish when confirmed. Until then, reach us through Connect — the route that fits your ask.",
          ]}
        />
        <MediaBreak need="Presence — two continents" tone="grow" aspect="wide" />

        <PageReveal>
          <ul className={hub.groupsDense}>
            {offices.map((office, i) => (
              <li key={office.slug} data-reveal>
                <Link
                  href={`/connect/${office.slug}`}
                  className={hub.groupDense}
                >
                  <span className={hub.groupDenseNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <h3 className={hub.groupTitle}>{office.title}</h3>
                    <p className={hub.groupBody}>
                      {displayText(office.address, office.region)}
                    </p>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </PageReveal>

        <DetailCtaRow
          secondaryHref="/connect"
          secondaryLabel="Connect"
        />
        <DetailCloser
          title="Talk to us"
          lead="Choose the route — project, discovery, or regional presence."
          secondaryHref="/connect/start-a-project"
          secondaryLabel="Start a Project"
        />
      </Container>
    </>
  );
}
