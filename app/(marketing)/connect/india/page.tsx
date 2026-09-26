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
    title: "India | Connect | 13 UTOPIA",
    description: "13 UTOPIA India presence.",
  },
  path: "/connect/india",
});

export default function IndiaPage() {
  const office = getOffice("india");
  if (!office) notFound();

  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="India"
        description="Design, engineering, and growth — India presence."
        layout="full"
        media={
          <MediaPlaceholder aspect="hero" tone="grow" need="India presence" />
        }
      />
      <Container className={hub.body}>
        <ProseBlock
          paragraphs={[
            displayText(office.address, "India presence across the practice."),
            "Verified street address and phone publish when confirmed. Reach us through Start a Project or Discovery.",
          ]}
        />
        <p className={hub.note}>
          <span className={hub.noteEm}>Contact — </span>
          {displayText(office.email, "Via Start a Project or Discovery")}
        </p>
        <MediaBreak need="India — place" tone="grow" />
        <DetailCtaRow
          secondaryHref="/connect/canada"
          secondaryLabel="Canada"
        />
        <DetailCloser title="Begin" lead="Tell us what you are trying to make happen." />
      </Container>
    </>
  );
}
