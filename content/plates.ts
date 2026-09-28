/**
 * Home / hub photography kit — sculpt pass plates.
 * Hero silk/bust stay in /images/hero and /metal-human.
 */
export const plates = {
  create: {
    src: "/images/sculpt/create-craft.jpg",
    alt: "Gold silk and metal craft — Create",
    objectPosition: "50% 40%",
  },
  build: {
    src: "/images/sculpt/build-systems.jpg",
    alt: "Metallic systems form — Build",
    objectPosition: "50% 45%",
  },
  grow: {
    src: "/images/sculpt/grow-momentum.jpg",
    alt: "Gold light portal — Grow",
    objectPosition: "55% 50%",
  },
  work: {
    src: "/images/sculpt/work-evidence.jpg",
    alt: "Studio evidence still — Work",
    objectPosition: "50% 50%",
  },
  collective: {
    src: "/images/sculpt/collective-presence.jpg",
    alt: "Toronto presence — Collective",
    objectPosition: "50% 55%",
  },
  heroSculpture: {
    src: "/images/hero/hero-gold-sculpture.jpg",
    alt: "Gold sculpture",
    objectPosition: "58% 42%",
  },
  heroMetal: {
    src: "/metal-human/metal-human.jpg",
    alt: "Metallic bust",
    objectPosition: "48% 18%",
  },
  heroPortal: {
    src: "/images/hero/portal.jpg",
    alt: "Light portal",
    objectPosition: "55% 40%",
  },
  eliteSports: {
    src: "/images/work/elite-sports-gear.jpg",
    alt: "Elite Sports Gear — Performance Store & Technical SEO",
    objectPosition: "50% 25%",
  },
  kumarCotton: {
    src: "/images/work/kumar-cotton-textiles.jpg",
    alt: "Kumar Cotton Textiles — Global B2B Digital Showroom",
    objectPosition: "50% 20%",
  },
  trendyFashion: {
    src: "/images/work/trendy-fashion-hub.jpg",
    alt: "Trendy Fashion Hub — Couture Editorial E-Commerce",
    objectPosition: "50% 25%",
  },
} as const;

export type PlateKey = keyof typeof plates;

export type PlateTone =
  | "dark"
  | "warm"
  | "create"
  | "build"
  | "grow"
  | "strategy";

/** Map tone → sculpt plate so kits auto-fill without per-page wiring */
export function plateForTone(tone: PlateTone = "warm") {
  switch (tone) {
    case "create":
      return plates.create;
    case "build":
      return plates.build;
    case "grow":
      return plates.grow;
    case "strategy":
      return plates.work;
    case "dark":
      return plates.work;
    case "warm":
    default:
      return plates.collective;
  }
}
