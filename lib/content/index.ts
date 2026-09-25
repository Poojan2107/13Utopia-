import {
  capabilities,
  capabilityCategories,
} from "@/content/capabilities";
import { offices, people } from "@/content/people";
import { perspectiveArticles } from "@/content/perspective";
import { solutions } from "@/content/solutions";
import { caseStudies } from "@/content/work";
import type {
  Capability,
  CapabilityCategory,
  CaseStudy,
  Office,
  Person,
  PerspectiveArticle,
  Solution,
} from "@/lib/content/types";

export function getCapabilityCategories(): CapabilityCategory[] {
  return capabilityCategories;
}

export function getCapabilityCategory(slug: string): CapabilityCategory | undefined {
  return capabilityCategories.find((c) => c.slug === slug);
}

export function getCapabilities(): Capability[] {
  return capabilities;
}

export function getCapability(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}

export function getCapabilitiesByWorld(world: string): Capability[] {
  return capabilities.filter((c) => c.world === world);
}

export function getSolutions(): Solution[] {
  return solutions;
}

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.featured);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getPerspectiveArticles(): PerspectiveArticle[] {
  return [...perspectiveArticles].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}

export function getPerspectiveArticle(slug: string): PerspectiveArticle | undefined {
  return perspectiveArticles.find((a) => a.slug === slug);
}

export function getPeople(): Person[] {
  return people;
}

export function getPeopleByDiscipline(discipline: Person["discipline"]): Person[] {
  return people.filter((p) => p.discipline === discipline);
}

export function getOffices(): Office[] {
  return offices;
}

export function getOffice(slug: string): Office | undefined {
  return offices.find((o) => o.slug === slug);
}

/** Capability hub + world + group slugs that resolve under /capabilities/[slug] */
export function getCapabilityRouteSlugs(): string[] {
  const worlds = capabilityCategories.map((c) => c.slug);
  const groups = capabilities.map((c) => c.slug);
  return [...worlds, ...groups];
}

export function getAllIndexablePaths(): string[] {
  const staticPaths = [
    "/",
    "/capabilities",
    "/solutions",
    "/work",
    "/perspective",
    "/our-story",
    "/our-story/why-13-utopia",
    "/our-story/vision",
    "/our-story/mission",
    "/our-story/process",
    "/our-story/global-presence",
    "/collective",
    "/collective/leadership",
    "/collective/creative",
    "/collective/technology",
    "/collective/growth",
    "/collective/culture",
    "/careers",
    "/connect",
    "/connect/start-a-project",
    "/connect/discovery",
    "/connect/partnerships",
    "/connect/general",
    "/connect/support",
    "/connect/india",
    "/connect/canada",
  ];

  const capabilityPaths = getCapabilityRouteSlugs().map((s) => `/capabilities/${s}`);
  const solutionPaths = solutions.map((s) => `/solutions/${s.slug}`);
  const workPaths = caseStudies.map((c) => `/work/${c.slug}`);
  const perspectivePaths = perspectiveArticles.map((a) => `/perspective/${a.slug}`);

  return [
    ...staticPaths,
    ...capabilityPaths,
    ...solutionPaths,
    ...workPaths,
    ...perspectivePaths,
  ];
}
