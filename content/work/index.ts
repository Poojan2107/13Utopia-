import type { CaseStudy } from "@/lib/content/types";

/**
 * Work from published live-site projects.
 * Outcomes stay qualitative — no invented counters or unverified claims.
 * Source: https://13utopia.com/
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "elite-sports-gear",
    title: "Commerce site and search for athletic retail",
    client: "Elite Sports Gear",
    industry: "Retail / Performance Athletic",
    year: "2025",
    liveUrl: "https://elitesportsgear.com",
    image: "/images/work/elite-sports-gear.jpg",
    summary:
      "A new storefront and technical SEO foundation for an athletic retailer — faster pages, clearer product discovery, and a checkout path that matches how people actually shop.",
    challenge:
      "Elite Sports Gear had strong products on a slow legacy store. Category navigation was hard to use, search visibility was weak, and the site couldn't keep up with how customers browse on mobile.",
    insight:
      "Athletic commerce has to feel quick and clear. Brand presentation and technical SEO work best when they share one brief — not two separate projects.",
    move:
      "Rebuilt the storefront around how people search and shop: clearer category structure, faster browsing, and product pages written for both customers and search engines.",
    build:
      "Headless Next.js storefront with Shopify checkout, Algolia filtering, structured product markup, and edge caching.",
    result:
      "A faster, clearer shopping experience and stronger organic visibility — with measurable lifts in traffic and conversion after launch.",
    lesson:
      "Brand and technical SEO should be designed together, not bolted on after the fact.",
    stats: [
      { value: "Faster", label: "Storefront", detail: "Rebuilt for mobile performance" },
      { value: "Clearer", label: "Discovery", detail: "Search and category structure rewritten" },
      { value: "Stronger", label: "SEO base", detail: "Product and merchant schema in place" },
      { value: "Live", label: "Checkout", detail: "Headless Shopify path" },
    ],
    deliverables: [
      {
        title: "Headless commerce storefront",
        description: "Next.js storefront integrated with Shopify checkout.",
      },
      {
        title: "Technical SEO foundation",
        description: "Product, breadcrumb and organization schema for search.",
      },
      {
        title: "Faceted product search",
        description: "Algolia filtering by sport, fit and fabric.",
      },
      {
        title: "Performance-minded UI",
        description: "Dark athletic aesthetic with responsive product flows.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Shopify Storefront API",
      "Algolia",
      "Vercel",
    ],
    testimonial: {
      quote:
        "13 Utopia took our business to the next level with a well-designed and fully optimized website. Their understanding of our industry and technical expertise helped us stand out online. We’ve seen a notable increase in both organic traffic and sales since the site went live.",
      author: "Rahul Sharma",
      role: "Marketing Director, Elite Sports Gear",
    },
    capabilitySlugs: ["digital-products", "growth-marketing", "branding-creative"],
    solutionSlugs: ["launch", "grow"],
    perspectiveSlugs: [],
    seo: {
      title: "Elite Sports Gear — Case Story | 13 UTOPIA",
      description:
        "Commerce storefront and technical SEO for Elite Sports Gear by 13 UTOPIA.",
    },
    status: "published",
    featured: true,
  },
  {
    slug: "kumar-cotton-textiles",
    title: "B2B digital showroom for textile export",
    client: "Kumar Cotton Textiles",
    industry: "Textiles / Global Manufacturing",
    year: "2024",
    liveUrl: "https://kumarcotton.com",
    image: "/images/work/kumar-cotton-textiles.jpg",
    summary:
      "Replaced PDF line sheets with an interactive fabric showroom — so buyers can inspect weaves, check certifications and request samples online.",
    challenge:
      "Kumar Cotton sold premium cotton and yarns through PDFs and trade shows. International buyers couldn't inspect weave detail, verify certifications or request samples without a long email chain.",
    insight:
      "Tactile products need digital presence that feels physical — clear photography, technical specs and a simple sample request path.",
    move:
      "Designed a catalog around how buyers actually evaluate fabric: macro detail, certifications and a sample workflow built for procurement teams.",
    build:
      "Responsive catalog, fabric swatch drawer, specification sheets and CRM routing for sample requests.",
    result:
      "Buyers can evaluate product and request samples without waiting on a line sheet — and the team spends less time chasing the same questions.",
    lesson:
      "A digital tool only matters if it makes real commerce easier on day one.",
    stats: [
      { value: "Digital", label: "Catalog", detail: "Replaced printed line sheets" },
      { value: "Sample", label: "Requests", detail: "Built into the browsing flow" },
      { value: "Export", label: "Ready", detail: "Specs and certifications on every product" },
      { value: "B2B", label: "Focus", detail: "Designed for procurement, not retail browsing" },
    ],
    deliverables: [
      {
        title: "B2B digital showroom",
        description: "Catalog for yarns, cotton and weave patterns.",
      },
      {
        title: "Sample request flow",
        description: "Multi-item sample cart with CRM handoff.",
      },
      {
        title: "Technical spec sheets",
        description: "Downloadable yarn and weave data for buyers.",
      },
      {
        title: "Brand system for the catalog",
        description: "Restrained visual language for a global supplier.",
      },
    ],
    stack: ["Next.js", "TypeScript", "CSS Modules", "Headless CMS", "CDN"],
    testimonial: {
      quote:
        "Working with 13 Utopia has been an absolute game-changer for our business. The team took the time to understand our vision and developed a website that perfectly matches our brand identity. The functionality and design are both seamless, and we’ve seen a significant increase in user engagement since the launch.",
      author: "Dhaval Agarwal",
      role: "Director, Kumar Cotton Textiles",
    },
    capabilitySlugs: ["branding-creative", "digital-products", "strategy-consulting"],
    solutionSlugs: ["launch", "modernize"],
    perspectiveSlugs: [],
    seo: {
      title: "Kumar Cotton Textiles — Case Story | 13 UTOPIA",
      description:
        "B2B digital showroom for Kumar Cotton Textiles by 13 UTOPIA.",
    },
    status: "published",
    featured: true,
  },
  {
    slug: "trendy-fashion-hub",
    title: "Editorial storefront and checkout rebuild",
    client: "Trendy Fashion Hub",
    industry: "Fashion / Direct-to-Consumer",
    year: "2025",
    liveUrl: "https://trendyfashionhub.com",
    image: "/images/work/trendy-fashion-hub.jpg",
    summary:
      "An editorial fashion storefront with a cleaner mobile browse path and a checkout that doesn't fight the brand.",
    challenge:
      "The previous site felt slow on mobile, collections didn't hold attention, and checkout friction was costing completed orders.",
    insight:
      "Fashion retail needs lookbook-quality browsing and a checkout that gets out of the way. Visual craft and purchase UX have to agree.",
    move:
      "Rebuilt collection browsing, cart and checkout around how people shop on phones — clearer grids, a usable bag drawer and express payment options.",
    build:
      "Next.js storefront, accessible cart drawer, Stripe express checkout and inventory sync with boutique POS.",
    result:
      "A store that feels like the brand and finishes the purchase without the old friction — especially on mobile.",
    lesson:
      "Visual detail isn't decoration. It has to support how people buy.",
    stats: [
      { value: "Mobile", label: "First", detail: "Browse and checkout rebuilt for phones" },
      { value: "Express", label: "Pay", detail: "Apple Pay / Google Pay where available" },
      { value: "Editorial", label: "Collections", detail: "Lookbook-led product grids" },
      { value: "Synced", label: "Inventory", detail: "Online and boutique stock aligned" },
    ],
    deliverables: [
      {
        title: "Editorial collection experience",
        description: "Fashion grids with clear browse and product paths.",
      },
      {
        title: "Shopping bag drawer",
        description: "Cart that stays in context while browsing.",
      },
      {
        title: "Express checkout",
        description: "Stripe-backed one-tap payment options.",
      },
      {
        title: "Boutique inventory sync",
        description: "Online stock kept in line with retail POS.",
      },
    ],
    stack: ["Next.js", "React", "GSAP", "Stripe", "Vercel"],
    testimonial: {
      quote:
        "13 Utopia’s web development team exceeded our expectations. They were attentive to every detail, from design aesthetics to user experience. Our new website is not only visually appealing but also runs smoothly on all platforms. It’s been an incredible boost for our online presence.",
      author: "Haresh Shah",
      role: "Operations Head, Trendy Fashion Hub",
    },
    capabilitySlugs: ["digital-products", "branding-creative", "growth-marketing"],
    solutionSlugs: ["modernize", "launch"],
    perspectiveSlugs: [],
    seo: {
      title: "Trendy Fashion Hub — Case Story | 13 UTOPIA",
      description:
        "Editorial storefront and checkout rebuild for Trendy Fashion Hub by 13 UTOPIA.",
    },
    status: "published",
    featured: true,
  },
];
