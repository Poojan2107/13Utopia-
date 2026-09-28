/** Shared SEO / publication fields for content records */
export type ContentStatus = "draft" | "published" | "placeholder";

export type SeoFields = {
  title: string;
  description: string;
  ogImage?: string;
};

export type CapabilityWorld = "create" | "build" | "grow" | "strategy";

export type CapabilityCategory = {
  slug: CapabilityWorld;
  title: string;
  description: string;
  seo: SeoFields;
  status: ContentStatus;
  capabilitySlugs: string[];
};

export type Capability = {
  slug: string;
  title: string;
  description: string;
  world: CapabilityWorld;
  parentSlug?: string;
  relatedSolutionSlugs: string[];
  relatedCaseSlugs: string[];
  relatedPerspectiveSlugs: string[];
  seo: SeoFields;
  status: ContentStatus;
};

export type Solution = {
  slug: string;
  title: string;
  description: string;
  relatedCapabilitySlugs: string[];
  relatedCaseSlugs: string[];
  relatedPerspectiveSlugs: string[];
  seo: SeoFields;
  status: ContentStatus;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year?: string;
  liveUrl?: string;
  summary: string;
  challenge: string;
  insight: string;
  move: string;
  build: string;
  result: string;
  lesson: string;
  image?: string;
  stats?: { value: string; label: string; detail?: string }[];
  deliverables?: { title: string; description: string }[];
  stack?: string[];
  testimonial?: { quote: string; author: string; role: string };
  capabilitySlugs: string[];
  solutionSlugs: string[];
  perspectiveSlugs: string[];
  seo: SeoFields;
  status: ContentStatus;
  featured?: boolean;
};

export type PerspectiveArticle = {
  slug: string;
  title: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  excerpt: string;
  body: string;
  relatedCapabilitySlugs: string[];
  relatedSolutionSlugs: string[];
  relatedCaseSlugs: string[];
  seo: SeoFields;
  status: ContentStatus;
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  discipline: "leadership" | "creative" | "technology" | "growth" | "culture";
  bio: string;
  expertise: string[];
  image?: string;
  location?: string;
  seo: SeoFields;
  status: ContentStatus;
};

export type Office = {
  slug: string;
  title: string;
  region: string;
  address: string;
  email: string;
  phone: string;
  seo: SeoFields;
  status: ContentStatus;
};

export type Testimonial = {
  slug: string;
  quote: string;
  attribution: string;
  role: string;
  company: string;
  status: ContentStatus;
};

export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
};
