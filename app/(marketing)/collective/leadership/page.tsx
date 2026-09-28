import type { Metadata } from "next";
import Image from "next/image";
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
    description: "Leadership at 13 UTOPIA — partners across Create, Build, and Grow.",
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
        description="Partners shaping the standard across Create, Build, and Grow."
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
                {person.image ? (
                  <div className={hub.portraitFrame}>
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 260px"
                      className={hub.portraitImg}
                    />
                  </div>
                ) : (
                  <MediaPlaceholder
                    aspect="square"
                    tone="warm"
                    need={`Portrait — ${person.name}`}
                  />
                )}
                <div className={hub.entryContent}>
                  <h2 className={hub.entryTitle}>{person.name}</h2>
                  <div className={hub.entryMeta}>
                    <span>{person.role}</span>
                    {person.location ? (
                      <span className={hub.entryLocation}>· {person.location}</span>
                    ) : null}
                  </div>
                  <p className={hub.entryBody}>{person.bio}</p>
                  {person.expertise.length ? (
                    <div className={hub.expertiseList}>
                      {person.expertise.map((e) => (
                        <span key={e} className={hub.expertiseTag}>
                          {e}
                        </span>
                      ))}
                    </div>
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
