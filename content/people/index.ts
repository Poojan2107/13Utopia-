import type { Office, Person, Testimonial } from "@/lib/content/types";

/** Named profiles publish with verified people. Until then — role-based presence. */
export const people: Person[] = [
  {
    slug: "founding-direction",
    name: "Founding Direction",
    role: "Leadership",
    discipline: "leadership",
    bio: "Sets the standard across Create, Build, and Grow. Named founders and partners publish with verified bios and portraits.",
    expertise: ["Vision", "Client outcomes", "Practice standards"],
    seo: {
      title: "Leadership | Collective | 13 UTOPIA",
      description: "Leadership at 13 UTOPIA.",
    },
    status: "placeholder",
  },
  {
    slug: "creative-practice",
    name: "Creative Practice",
    role: "Creative",
    discipline: "creative",
    bio: "Brand, design, experience, and content craft — the surface people feel first.",
    expertise: ["Brand", "Design systems", "Experience"],
    seo: {
      title: "Creative | Collective | 13 UTOPIA",
      description: "Creative discipline at 13 UTOPIA.",
    },
    status: "placeholder",
  },
  {
    slug: "technology-practice",
    name: "Technology Practice",
    role: "Technology",
    discipline: "technology",
    bio: "Product, engineering, AI, and systems — made to work on day one.",
    expertise: ["Product", "Engineering", "AI"],
    seo: {
      title: "Technology | Collective | 13 UTOPIA",
      description: "Technology discipline at 13 UTOPIA.",
    },
    status: "placeholder",
  },
  {
    slug: "growth-practice",
    name: "Growth Practice",
    role: "Growth",
    discipline: "growth",
    bio: "Demand, content, and performance — momentum that compounds.",
    expertise: ["Performance", "Content", "Lifecycle"],
    seo: {
      title: "Growth | Collective | 13 UTOPIA",
      description: "Growth discipline at 13 UTOPIA.",
    },
    status: "placeholder",
  },
];

export const offices: Office[] = [
  {
    slug: "india",
    title: "India",
    region: "India",
    address: "Design, engineering, and growth floors — India presence",
    email: "Via Start a Project or Discovery",
    phone: "",
    seo: {
      title: "India | Connect | 13 UTOPIA",
      description: "13 UTOPIA India presence.",
    },
    status: "placeholder",
  },
  {
    slug: "canada",
    title: "Canada",
    region: "Canada",
    address: "Strategy and client partnership — Canada presence",
    email: "Via Start a Project or Discovery",
    phone: "",
    seo: {
      title: "Canada | Connect | 13 UTOPIA",
      description: "13 UTOPIA Canada presence.",
    },
    status: "placeholder",
  },
];

export const testimonials: Testimonial[] = [];
