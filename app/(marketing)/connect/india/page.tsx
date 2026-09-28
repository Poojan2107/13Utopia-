import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { company } from "@/content/site";
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
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "India | Connect | 13 UTOPIA",
    description:
      "13 UTOPIA India — Iconic Shyamal, Ahmedabad, Gujarat. Brand, web, SEO, and growth.",
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
        description="Ahmedabad — design, engineering, and growth."
        layout="full"
        media={
          <MediaPlaceholder aspect="hero" tone="grow" need="India presence" fill />
        }
      />
      <Container className={hub.body}>
        <ProseBlock
          paragraphs={[
            office.address,
            "Reach us by phone or email, or start a project online — we respond from the India desk.",
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
        <MediaBreak need="India — Ahmedabad" tone="grow" />
        <DetailCtaRow
          secondaryHref="/connect/canada"
          secondaryLabel="Canada"
        />
        <DetailCloser title="Begin" lead="Tell us what you are trying to make happen." />
      </Container>
    </>
  );
}
