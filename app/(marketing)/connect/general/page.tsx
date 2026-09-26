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
import { CONNECT_COPY } from "@/content/narratives";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "General | Connect | 13 UTOPIA",
    description: "Press, speaking, and other inquiries.",
  },
  path: "/connect/general",
});

export default function GeneralContactPage() {
  const copy = CONNECT_COPY.general;
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="General"
        description={copy.lead}
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="dark"
            need="General correspondence atmosphere"
          />
        }
      />
      <Container className={hub.body}>
        <ProseBlock
          paragraphs={[
            "For press, speaking, and inquiries that are not a project brief or support ticket.",
            "Choose the fastest route below — or send a project note and we’ll redirect.",
          ]}
        />

        <PageReveal>
          <ul className={hub.groupsDense}>
            {copy.channels.map((ch, i) => (
              <li key={ch.href} data-reveal>
                <Link href={ch.href} className={hub.groupDense}>
                  <span className={hub.groupDenseNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <h3 className={hub.groupTitle}>{ch.label}</h3>
                    <p className={hub.groupBody}>{ch.note}</p>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </PageReveal>

        <MediaBreak need="General — threshold" tone="dark" />
        <DetailCtaRow
          primaryHref="/connect/start-a-project"
          primaryLabel="Start a Project"
          secondaryHref="/connect"
          secondaryLabel="All routes"
        />
        <DetailCloser title="Begin" lead="Ambition needs a route. Pick one." />
      </Container>
    </>
  );
}
