import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Container,
  DetailCloser,
  DetailCtaRow,
  MediaBreak,
  MediaPlaceholder,
  PageHero,
  ProseBlock,
} from "@/components/ui";
import { getOffice } from "@/lib/content";
import { displayText } from "@/lib/content/display";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Canada | Connect | 13 UTOPIA",
    description: "13 UTOPIA Canada presence.",
  },
  path: "/connect/canada",
});

export default function CanadaPage() {
  const office = getOffice("canada");
  if (!office) notFound();

  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Canada"
        description="Strategy and client partnership — Canada presence."
        layout="full"
        media={
          <MediaPlaceholder aspect="hero" tone="warm" need="Canada presence" />
        }
      />
      <Container className={hub.body}>
        <ProseBlock
          paragraphs={[
            displayText(office.address, "Canada presence across the practice."),
            "Verified street address and phone publish when confirmed. Reach us through Start a Project or Discovery.",
          ]}
        />
        <p className={hub.note}>
          <span className={hub.noteEm}>Contact — </span>
          {displayText(office.email, "Via Start a Project or Discovery")}
        </p>
        <MediaBreak need="Canada — place" tone="warm" />
        <DetailCtaRow
          secondaryHref="/connect/india"
          secondaryLabel="India"
        />
        <DetailCloser title="Begin" lead="Tell us what you are trying to make happen." />
      </Container>
    </>
  );
}
