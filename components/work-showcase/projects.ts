export interface Project {
  title: string;
  slug: string;
  year: string;
  client: string;
  role: string;
  description: string;
  image: string;
  /** Full reel for project sheet */
  video?: string;
  /** High-quality proxy for 3D ribbon (preferred when set) */
  cardVideo?: string;
  width: number;
  height: number;
  aspectRatio: string;
  url?: string;
  gallery?: string[];
  vignettes?: string[];
}

export interface RepeatedProject extends Project {
  uniqueId: string;
  originalIndex: number;
}

/**
 * Selected work — local reels from /public/work.
 * Display titles are editorial; cardVideo = sharp ribbon proxy · video = full sheet.
 */
export const PROJECTS: Project[] = [
  {
    title: "Mayur",
    slug: "mayur",
    year: "2025",
    client: "Mayur",
    role: "Motion & Creative Direction",
    description:
      "Cinematic brand motion for Mayur — atmosphere, pacing, and a locked visual language built to stop the scroll.",
    image: "/work/mayur.jpg",
    cardVideo: "/work/mayur-card.mp4?v=2",
    video: "/work/MAYUR.mp4",
    width: 1920,
    height: 1080,
    aspectRatio: "16 / 9",
    gallery: ["/work/mayur.jpg"],
    vignettes: ["/work/mayur.jpg", "/work/clothing.jpg", "/work/soft.jpg", "/work/comp.jpg"],
  },
  {
    title: "Clothing",
    slug: "clothing",
    year: "2025",
    client: "Confidential",
    role: "Fashion Film & Edit",
    description:
      "Product and lookbook motion for a clothing drop — tactile cuts, material focus, and a clean commercial rhythm.",
    image: "/work/clothing.jpg",
    cardVideo: "/work/clothing-card.mp4?v=2",
    video: "/work/clothing.mp4",
    width: 1920,
    height: 1080,
    aspectRatio: "16 / 9",
    gallery: ["/work/clothing.jpg"],
    vignettes: ["/work/clothing.jpg", "/work/mayur.jpg", "/work/soft.jpg", "/work/comp.jpg"],
  },
  {
    title: "Soft",
    slug: "soft",
    year: "2025",
    client: "Confidential",
    role: "Brand Motion System",
    description:
      "Soft-focus brand film — restrained type moments, light as material, and a quiet luxury cadence.",
    image: "/work/soft.jpg",
    cardVideo: "/work/soft-card.mp4?v=2",
    video: "/work/sOFT.mp4",
    width: 1920,
    height: 1080,
    aspectRatio: "16 / 9",
    gallery: ["/work/soft.jpg"],
    vignettes: ["/work/soft.jpg", "/work/mayur.jpg", "/work/clothing.jpg", "/work/comp.jpg"],
  },
  {
    title: "Comp",
    slug: "comp",
    year: "2025",
    client: "Confidential",
    role: "Composite & Motion Design",
    description:
      "Composite-led motion piece — layered plates, graphic beats, and a high-contrast finish for digital launch.",
    image: "/work/comp.jpg",
    cardVideo: "/work/comp-card.mp4?v=2",
    video: "/work/cOMP.mp4",
    width: 1920,
    height: 1080,
    aspectRatio: "16 / 9",
    gallery: ["/work/comp.jpg"],
    vignettes: ["/work/comp.jpg", "/work/mayur.jpg", "/work/clothing.jpg", "/work/soft.jpg"],
  },
];
