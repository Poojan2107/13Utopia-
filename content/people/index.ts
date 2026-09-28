import type { Office, Person, Testimonial } from "@/lib/content/types";
import { company } from "@/content/site";

/** Named profiles publish with verified people. Until then — role-based presence. */
export const people: Person[] = [
  {
    slug: "poojan-patel",
    name: "Poojan Patel",
    role: "Founding Partner & Executive Creative Director",
    discipline: "leadership",
    location: "Toronto, Canada",
    image: "/images/team/poojan-patel.jpg",
    bio: "Sets the visual standard and creative architecture across 13 UTOPIA. Directs identity, high-craft digital experiences, and visual storytelling that make ambitious businesses unmistakably distinct.",
    expertise: ["Creative Direction", "Brand Systems", "Digital Experience", "Creative Technology"],
    seo: {
      title: "Poojan Patel — Executive Creative Director | 13 UTOPIA",
      description: "Founding Partner & Executive Creative Director at 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "marcus-vance",
    name: "Marcus Vance",
    role: "Partner & Head of Technology",
    discipline: "leadership",
    location: "Toronto / Global",
    image: "/images/team/marcus-vance.jpg",
    bio: "Leads engineering architecture, cloud infrastructure, and Next.js digital platforms. Focuses on edge performance, zero-latency systems, and headless integrations that hold on day one.",
    expertise: ["Systems Architecture", "Next.js & Edge Engineering", "Headless Commerce", "AI & Automation"],
    seo: {
      title: "Marcus Vance — Head of Technology | 13 UTOPIA",
      description: "Partner & Head of Technology at 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "elena-rostova",
    name: "Elena Rostova",
    role: "Partner & Head of Growth",
    discipline: "leadership",
    location: "Toronto / New York",
    image: "/images/team/elena-rostova.jpg",
    bio: "Architects performance marketing, technical SEO, and conversion systems. Connects brand craft with compound revenue engines, refusing vanity metrics in favor of verified customer acquisition.",
    expertise: ["Technical SEO", "Growth Architecture", "Customer Acquisition", "Analytics & Conversion"],
    seo: {
      title: "Elena Rostova — Head of Growth | 13 UTOPIA",
      description: "Partner & Head of Growth at 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "creative-practice",
    name: "Creative & Experience Practice",
    role: "Multidisciplinary Studio",
    discipline: "creative",
    location: "Toronto & India Studio Floors",
    image: "/images/team/poojan-patel.jpg",
    bio: "Brand designers, art directors, 3D/CGI visual artists, and experience architects crafting the surfaces audiences feel first.",
    expertise: ["Brand Identity", "Motion & 3D", "UI/UX Architecture", "Visual Content"],
    seo: {
      title: "Creative Practice | Collective | 13 UTOPIA",
      description: "Creative discipline at 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "technology-practice",
    name: "Engineering & Systems Practice",
    role: "Software & Cloud Systems",
    discipline: "technology",
    location: "Toronto & India Engineering Floors",
    image: "/images/team/marcus-vance.jpg",
    bio: "Full-stack engineers, cloud architects, and AI automation specialists engineering products that survive high scale.",
    expertise: ["Full-Stack Next.js", "Cloud Infrastructure", "API & Database Systems", "Performance Tuning"],
    seo: {
      title: "Technology Practice | Collective | 13 UTOPIA",
      description: "Technology discipline at 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "growth-practice",
    name: "Demand & Growth Practice",
    role: "Growth Strategy & SEO",
    discipline: "growth",
    location: "Toronto / Global",
    image: "/images/team/elena-rostova.jpg",
    bio: "SEO specialists, technical marketers, and content strategists building compounding organic traffic and direct conversion.",
    expertise: ["Technical SEO", "Conversion Rate Optimization", "Paid Performance", "Data Infrastructure"],
    seo: {
      title: "Growth Practice | Collective | 13 UTOPIA",
      description: "Growth discipline at 13 UTOPIA.",
    },
    status: "published",
  },
];

export const offices: Office[] = [
  {
    slug: "india",
    title: "India",
    region: "India",
    address: "Design, engineering, and growth floors — India presence",
    email: company.email,
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
    region: "Canada — Greater Toronto",
    address: company.addressOneLine,
    email: company.email,
    phone: company.phone,
    seo: {
      title: "Canada | Connect | 13 UTOPIA",
      description:
        "13 UTOPIA Canada — Scarborough / Markham Corners, Toronto area.",
    },
    status: "published",
  },
];

/** Testimonials published on https://13utopia.com/ */
export const testimonials: Testimonial[] = [
  {
    slug: "rahul-sharma-elite-sports",
    quote:
      "13 Utopia took our business to the next level with a well-designed and fully optimized website. Their understanding of our industry and technical expertise helped us stand out online. We’ve seen a notable increase in both organic traffic and sales since the site went live.",
    attribution: "Rahul Sharma",
    role: "Marketing Director",
    company: "Elite Sports Gear",
    status: "published",
  },
  {
    slug: "dhaval-agarwal-kumar-cotton",
    quote:
      "Working with 13 Utopia has been an absolute game-changer for our business. The team took the time to understand our vision and developed a website that perfectly matches our brand identity. The functionality and design are both seamless, and we’ve seen a significant increase in user engagement since the launch.",
    attribution: "Dhaval Agarwal",
    role: "Director",
    company: "Kumar Cotton Textiles",
    status: "published",
  },
  {
    slug: "haresh-shah-trendy-fashion",
    quote:
      "13 Utopia’s web development team exceeded our expectations. They were attentive to every detail, from design aesthetics to user experience. Our new website is not only visually appealing but also runs smoothly on all platforms. It’s been an incredible boost for our online presence.",
    attribution: "Haresh Shah",
    role: "Operations Head",
    company: "Trendy Fashion Hub",
    status: "published",
  },
];
