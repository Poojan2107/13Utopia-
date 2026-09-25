import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { getOffice } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Canada | Connect | 13 UTOPIA",
    description: "13 UTOPIA Canada — verified details pending.",
  },
  path: "/connect/canada",
});

export default function CanadaPage() {
  const office = getOffice("canada");
  if (!office) notFound();

  return (
    <>
      <PageHero eyebrow="Connect" title={office.title} description={office.region} />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <p style={{ color: "var(--color-fg-muted)" }}>Address: {office.address}</p>
        <p style={{ color: "var(--color-fg-muted)" }}>Email: {office.email}</p>
        <p style={{ color: "var(--color-fg-muted)" }}>Phone: {office.phone}</p>
      </Container>
    </>
  );
}
