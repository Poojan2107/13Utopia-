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
import type { Person } from "@/lib/content/types";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

type Config = {
  discipline: Person["discipline"];
  path: string;
  title: string;
  description: string;
  need: string;
  tone: "create" | "build" | "grow";
  seoTitle: string;
  seoDescription: string;
};

function DisciplinePage({ config }: { config: Config }) {
  const people = getPeopleByDiscipline(config.discipline);
  return (
    <>
      <PageHero
        eyebrow="Collective"
        title={config.title}
        description={config.description}
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone={config.tone}
            need={config.need}
          />
        }
      />
      <Container className={hub.body}>
        <PageReveal>
          <div data-reveal>
            <Breadcrumbs
              items={[
                { name: "Collective", path: "/collective" },
                { name: config.title, path: config.path },
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
                  tone={config.tone}
                  need={`Portrait — ${person.name}`}
                />
                <div>
                  <h2 className={hub.entryTitle}>{person.name}</h2>
                  <p className={hub.entryMeta}>
                    <span>{person.role}</span>
                  </p>
                  <p className={hub.entryBody}>{person.bio}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <MediaBreak
          need={`${config.title} — working environment`}
          tone={config.tone}
        />
        <DetailCtaRow
          primaryHref="/careers"
          primaryLabel="Careers"
          secondaryHref="/collective"
          secondaryLabel="Collective"
        />
        <DetailCloser
          title="Want in?"
          lead="Named people publish with verified portraits. The practice is open."
          secondaryHref="/connect/general"
          secondaryLabel="Get in touch"
        />
      </Container>
    </>
  );
}

const TECH: Config = {
  discipline: "technology",
  path: "/collective/technology",
  title: "Technology",
  description: "Product, engineering, AI, systems.",
  need: "Technology build environment",
  tone: "build",
  seoTitle: "Technology | Collective | 13 UTOPIA",
  seoDescription: "Technology contributors at 13 UTOPIA.",
};

export const metadata: Metadata = buildMetadata({
  seo: { title: TECH.seoTitle, description: TECH.seoDescription },
  path: TECH.path,
});

export default function TechnologyCollectivePage() {
  return <DisciplinePage config={TECH} />;
}
