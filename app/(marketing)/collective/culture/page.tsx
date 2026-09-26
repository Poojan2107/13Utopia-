import type { Metadata } from "next";
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
import { CULTURE_COPY } from "@/content/narratives";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Culture | Collective | 13 UTOPIA",
    description: "How we work together at 13 UTOPIA.",
  },
  path: "/collective/culture",
});

export default function CulturePage() {
  return (
    <>
      <PageHero
        eyebrow="Collective"
        title="Culture"
        description={CULTURE_COPY.lead}
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="strategy"
            need="Culture — human moments"
          />
        }
      />
      <Container className={hub.body}>
        <ProseBlock paragraphs={[CULTURE_COPY.rituals]} />

        <PageReveal>
          <ul className={hub.principleGrid}>
            {CULTURE_COPY.principles.map((p) => (
              <li key={p.title} className={hub.principleCard} data-reveal>
                <h3 className={hub.principleTitle}>{p.title}</h3>
                <p className={hub.principleBody}>{p.body}</p>
              </li>
            ))}
          </ul>
        </PageReveal>

        <MediaBreak need="Culture — gather" tone="warm" aspect="wide" />
        <DetailCtaRow
          primaryHref="/careers"
          primaryLabel="Careers"
          secondaryHref="/collective"
          secondaryLabel="Collective"
        />
        <DetailCloser
          title="Join the standard"
          lead="If you already know this is the work, reach out."
          secondaryHref="/connect/general"
          secondaryLabel="Get in touch"
        />
      </Container>
    </>
  );
}
