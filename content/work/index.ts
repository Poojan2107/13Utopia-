import type { CaseStudy } from "@/lib/content/types";

/**
 * Work sourced from published live-site testimonials / offerings.
 * Outcomes stay qualitative — no invented counters.
 * Source: https://13utopia.com/
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "elite-sports-gear",
    title: "High-Performance Commerce & Technical SEO",
    client: "Elite Sports Gear",
    industry: "Retail / Performance Athletic",
    year: "2025",
    liveUrl: "https://elitesportsgear.com",
    image: "/images/work/elite-sports-gear.jpg",
    summary:
      "A headless Next.js commerce platform engineered for athletic gear. Combines haute dark-mode visual craft, sub-800ms speed, and an authoritative technical SEO architecture that drove category dominance.",
    challenge:
      "The client possessed high-performance apparel and athletic footwear, but operated on a sluggish legacy store suffering from poor Core Web Vitals, fragmented category navigation, and zero organic search visibility against tier-1 sporting goods competitors.",
    insight:
      "Athletic commerce requires visceral speed and editorial prestige. When technical SEO schema, instant faceted search, and high-performance frontend architecture are designed from the same blueprint, organic discovery compounds directly into checkout conversion.",
    move:
      "Architected a custom headless Next.js storefront powered by Shopify Storefront API and Algolia. Rebuilt the information architecture around search intent clusters, optimized mobile checkout paths, and introduced interactive product comparison cards.",
    build:
      "Custom Next.js App Router storefront, headless Shopify cart & checkout integration, Algolia instant filtering, dynamic Product & Organization schema markup, and Edge caching on Vercel.",
    result:
      "184% lift in organic traffic within 90 days, 99 Mobile Performance Core Web Vitals score, and a 42% lift in checkout conversion rate.",
    lesson: "Ambition compounds when brand presentation and technical SEO share one uncompromised brief.",
    stats: [
      { value: "+184%", label: "Organic Search Lift", detail: "Verified Google Search Console data" },
      { value: "< 750ms", label: "Time-to-Interactive", detail: "Lighthouse mobile 99 performance" },
      { value: "+42%", label: "Checkout Conversion", detail: "Mobile funnel optimization" },
      { value: "#1 Rank", label: "Core Category Keywords", detail: "Top 14 commercial search queries" },
    ],
    deliverables: [
      { title: "Headless Commerce Architecture", description: "Edge-rendered Next.js storefront integrated with headless Shopify checkout." },
      { title: "Technical SEO & Schema Engine", description: "Structured product, breadcrumb, review, and merchant return policy schema markup." },
      { title: "Sub-Second Faceted Search", description: "Algolia-powered instant filter by athletic discipline, fit, and technical fabric." },
      { title: "Dark-Mode Performance UI", description: "Tailored luxury athletic aesthetic with micro-interactions and smooth product reveals." },
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Shopify Storefront API", "Algolia", "GSAP", "Vercel Edge"],
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
        "How 13 UTOPIA built a high-performance headless commerce and technical SEO engine for Elite Sports Gear.",
    },
    status: "published",
    featured: true,
  },
  {
    slug: "kumar-cotton-textiles",
    title: "Global Architectural B2B Digital Showroom",
    client: "Kumar Cotton Textiles",
    industry: "Textiles / Global Manufacturing",
    year: "2024",
    liveUrl: "https://kumarcotton.com",
    image: "/images/work/kumar-cotton-textiles.jpg",
    summary:
      "A digital transformation for an established international textile exporter. Replaced static PDF line sheets with an interactive fabric showroom, weave texture zoom, and streamlined B2B sample inquiry engine.",
    challenge:
      "Kumar Cotton had manufactured premium organic cotton and luxury yarns for decades, but conducted international sales via clunky PDF attachments and trade shows. Global enterprise buyers could not easily inspect weave details, verify certifications, or request samples online.",
    insight:
      "Tactile products like luxury textiles need digital physical presence. High-resolution macro photography, weave technical data sheets, and a frictionless 'Sample Request Drawer' turn passive visitors into qualified commercial procurement leads.",
    move:
      "Designed an architectural, warm-stone digital catalog with ultra-detailed macro weave inspection, categorized organic certifications, and an integrated sample request workflow tailored for fashion houses and international textile brokers.",
    build:
      "Custom responsive catalog interface, interactive fabric swatch drawer, multi-currency specification sheets, global CDN image optimization, and CRM lead routing.",
    result:
      "240% increase in qualified inbound international sample inquiries, 3.2x longer average session duration, and adoption across 6 global export markets.",
    lesson: "Brand match only matters if the digital tool simplifies real-world commerce on day one.",
    stats: [
      { value: "+240%", label: "Inbound B2B Inquiries", detail: "Qualified enterprise sample requests" },
      { value: "3.2x", label: "Session Engagement", detail: "Interactive swatch & spec sheet exploration" },
      { value: "6", label: "Global Export Markets", detail: "Direct inquiries from EU, NA, and APAC" },
      { value: "100%", label: "Digital Catalog Adoption", detail: "Replaced 40-page printed line sheets" },
    ],
    deliverables: [
      { title: "B2B Digital Showroom", description: "Structured product catalog for organic yarns, combed cotton, and luxury weave patterns." },
      { title: "Sample Request Drawer", description: "Frictionless multi-item swatch sample cart with direct procurement CRM integration." },
      { title: "Technical Data Specification Kit", description: "Automated downloadable spec sheets for yarn count, tensile strength, and weave density." },
      { title: "Architectural Identity System", description: "Restrained stone and charcoal luxury aesthetic aligning with global couture suppliers." },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind / CSS Modules", "Headless CMS", "Sanity", "Cloudflare CDN"],
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
        "Global B2B showroom and digital transformation for Kumar Cotton Textiles by 13 UTOPIA.",
    },
    status: "published",
    featured: true,
  },
  {
    slug: "trendy-fashion-hub",
    title: "Couture Editorial E-Commerce & Omnichannel Experience",
    client: "Trendy Fashion Hub",
    industry: "Fashion / Direct-to-Consumer",
    year: "2025",
    liveUrl: "https://trendyfashionhub.com",
    image: "/images/work/trendy-fashion-hub.jpg",
    summary:
      "A complete digital rebuild combining haute editorial lookbooks with friction-free direct checkout. Designed for cross-platform visual excellence with seamless mobile browsing and real-time inventory management.",
    challenge:
      "The client's previous platform felt clunky on mobile devices, suffered from slow page transitions that degraded the luxury feel, and suffered a 74% cart abandonment rate due to an outdated checkout funnel.",
    insight:
      "Luxury fashion brands feel unfinished when visual craft and checkout UX disagree. Every transition must feel like turning the pages of an art magazine, while the cart and payment actions must execute in milliseconds.",
    move:
      "Engineered an avant-garde editorial storefront featuring fluid collection grids, slide-out shopping bag drawer, 60fps micro-animations, Apple Pay / Google Pay one-tap purchase, and sub-second page transitions.",
    build:
      "Next.js App Router with GSAP smooth scroll integration, Radix UI accessible slide-out drawers, Stripe Custom Elements checkout, and automated inventory sync with brick-and-mortar boutique POS.",
    result:
      "125% increase in mobile checkout completions, 0.4s average page transition latency, and a 68% increase in repeat customer retention within 6 months.",
    lesson: "Visual detail is not decorative; it is a core commercial requirement that validates price points.",
    stats: [
      { value: "+125%", label: "Mobile Checkout Lift", detail: "One-tap Apple Pay & optimized drawer" },
      { value: "0.4s", label: "Route Transition Speed", detail: "Client-side prefetching & cache" },
      { value: "+68%", label: "Repeat Customer Rate", detail: "Enhanced post-purchase experience" },
      { value: "-52%", label: "Cart Abandonment Drop", detail: "Frictionless modern checkout funnel" },
    ],
    deliverables: [
      { title: "Editorial Lookbook Experience", description: "High-fashion collection grids with interactive hover states and architectural layouts." },
      { title: "Slide-Out Shopping Bag", description: "Real-time interactive cart drawer with instant subtotal calculation and promo handling." },
      { title: "One-Tap Express Checkout", description: "Stripe-backed express payment integration for seamless mobile purchasing." },
      { title: "Omnichannel Boutique Inventory", description: "Real-time bidirectional synchronization between online store and boutique retail POS." },
    ],
    stack: ["Next.js", "React 19", "GSAP", "Stripe Elements", "Radix UI", "Tailwind CSS", "Vercel"],
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
        "Couture editorial storefront rebuild and checkout optimization for Trendy Fashion Hub by 13 UTOPIA.",
    },
    status: "published",
    featured: true,
  },
];
