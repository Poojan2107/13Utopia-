import type { Metadata } from "next";
import {
  Breadcrumbs,
  Container,
  DetailCloser,
  DetailCtaRow,
  MediaBreak,
  MediaPlaceholder,
  PageHero,
} from "@/components/ui";
import { PageReveal } from "@/components/motion";
import { getPeopleByDiscipline } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Leadership | Collective | 13 UTOPIA",
    description: "Leadership at 13 UTOPIA — named people publish when verified.",
  },
  path: "/collective/leadership",
});

export default function LeadershipPage() {
  const people = getPeopleByDiscipline("leadership");
  return (
    <>
      <PageHero
        eyebrow="Collective"
        title="Leadership"
        description="Direction for Create, Build, and Grow — named founders publish with verified portraits."
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone="warm"
            need="Leadership — group or lead portrait"
          />
        }
      />
      <Container className={hub.body}>
        <PageReveal>
          <div data-reveal>
            <Breadcrumbs
              items={[
                { name: "Collective", path: "/collective" },
                { name: "Leadership", path: "/collective/leadership" },
              ]}
            />
          </div>
        </PageReveal>

        <ul className={hub.entries}>
          {people.map((person) => (
            <li key={person.slug}>
              <div className={hub.entry}>
                <MediaPlaceholder
                  aspect="square"
                  tone="warm"
                  need={`Portrait — ${person.name}`}
                />
                <div>
                  <h2 className={hub.entryTitle}>{person.name}</h2>
                  <p className={hub.entryMeta}>
                    <span>{person.role}</span>
                  </p>
                  <p className={hub.entryBody}>{person.bio}</p>
                  {person.expertise.length ? (
                    <p className={hub.entryMeta}>
                      {person.expertise.map((e) => (
                        <span key={e}>{e}</span>
                      ))}
                    </p>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <MediaBreak need="Leadership — practice atmosphere" tone="warm" />
        <DetailCtaRow
          primaryHref="/careers"
          primaryLabel="Careers"
          secondaryHref="/collective"
          secondaryLabel="Collective"
        />
        <DetailCloser
          title="Want in?"
          lead="Culture is always open to the right people."
          secondaryHref="/connect/general"
          secondaryLabel="Get in touch"
        />
      </Container>
    </>
  );
}
