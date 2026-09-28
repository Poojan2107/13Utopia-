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
import { company } from "@/content/site";
import { getOffice } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Canada | Connect | 13 UTOPIA",
    description:
      "13 UTOPIA Canada — Scarborough / Markham Corners, Greater Toronto.",
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
        description="Greater Toronto — strategy and client partnership."
        layout="full"
        media={
          <MediaPlaceholder aspect="hero" tone="warm" need="Canada presence" />
        }
      />
      <Container className={hub.body}>
        <ProseBlock
          paragraphs={[
            office.address,
            "Reach us by phone or email, or start a project online — we respond from the Canada desk.",
          ]}
        />
        <p className={hub.note}>
          <span className={hub.noteEm}>Phone — </span>
          <a href={company.phoneHref}>{office.phone}</a>
        </p>
        <p className={hub.note}>
          <span className={hub.noteEm}>Email — </span>
          <a href={`mailto:${office.email}`}>{office.email}</a>
        </p>
        <MediaBreak need="Canada — Markham Corners" tone="warm" />
        <DetailCtaRow
          secondaryHref="/connect/india"
          secondaryLabel="India"
        />
        <DetailCloser title="Begin" lead="Tell us what you are trying to make happen." />
      </Container>
    </>
  );
}
