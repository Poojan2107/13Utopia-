export interface Project {
  title: string;
  slug: string;
  year: string;
  client: string;
  role: string;
  description: string;
  image: string;
  video?: string;
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

export const PROJECTS: Project[] = [
  {
    title: "Nathan Riley",
    slug: "nathan-riley",
    year: "2024",
    client: "Nathan Riley",
    role: "Front-end Architecture & WebGL",
    description:
      "Nathan is a UK-based digital creative specializing in art direction, surrealist 3D visuals, interactive experiences, and motion design.",
    image: "https://www.datocms-assets.com/223669/1786207557-nathan-2.jpg",
    width: 2048,
    height: 1172,
    aspectRatio: "2048 / 1172",
    url: "https://www.nrly.co/",
    gallery: [
      "https://www.datocms-assets.com/223669/1786207557-nathan-2.jpg",
      "https://www.datocms-assets.com/223669/1786207557-nathan-1.jpg",
      "https://www.datocms-assets.com/223669/1786207557-nathan-3.jpg",
    ],
    vignettes: [
      "https://www.datocms-assets.com/223669/1786207557-nathan-1.jpg",
      "https://image.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://www.datocms-assets.com/223669/1786207557-nathan-2.jpg",
      "https://www.datocms-assets.com/223669/1786207557-nathan-3.jpg",
      "https://www.datocms-assets.com/223669/1785656645-image-84.jpg",
      "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg",
      "https://www.datocms-assets.com/223669/1786210260-book-2.jpg",
      "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg",
      "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg",
      "https://www.datocms-assets.com/223669/1785656942-bo1.jpg",
    ],
  },
  {
    title: "Casa Di Solare",
    slug: "casa-di-solare",
    year: "2024",
    client: "Nikolas Type",
    role: "Motion Design & Creative Dev",
    description:
      "Solare extends Nikolas Type's Font Catalogue with a timeless, hyper-useable quintessential variable font, suitable for a wide field of applications.",
    image: "https://www.datocms-assets.com/223669/1785656645-image-84.jpg",
    width: 2048,
    height: 1204,
    aspectRatio: "2048 / 1204",
    url: "https://casadisolare.com/",
    gallery: [
      "https://www.datocms-assets.com/223669/1785656645-image-84.jpg",
      "https://image.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
      "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg",
    ],
    vignettes: [
      "https://www.datocms-assets.com/223669/1785656645-image-84.jpg",
      "https://image.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://image.mux.com/R3vmn027401UtGEikdEo5clIi5MUU9aZs02/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://image.mux.com/iyDjwB2orEKXdIKP5u02RfT68xRnllt7a/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg",
      "https://www.datocms-assets.com/223669/1786207557-nathan-2.jpg",
      "https://www.datocms-assets.com/223669/1786210260-book-2.jpg",
      "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg",
      "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg",
      "https://www.datocms-assets.com/223669/1785656942-bo1.jpg",
    ],
  },
  {
    title: "The Lookback",
    slug: "the-lookback",
    year: "2023",
    client: "Better Off® Studio",
    role: "Front-end Development",
    description:
      "Digital capsule for Better Off® studio to document what inspired them and what they created over the last months/years.",
    image: "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg",
    width: 1250,
    height: 720,
    aspectRatio: "1250 / 720",
    url: "https://betteroff.studio/",
    gallery: [
      "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg",
      "https://image.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
      "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg",
    ],
    vignettes: [
      "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg",
      "https://image.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://image.mux.com/HofYkQ00DP02B202026iOjEsHVlOHoXqJB02y/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://www.datocms-assets.com/223669/1785656629-image-39.jpg",
      "https://www.datocms-assets.com/223669/1786207557-nathan-1.jpg",
      "https://www.datocms-assets.com/223669/1785656645-image-84.jpg",
      "https://www.datocms-assets.com/223669/1786210260-book-2.jpg",
      "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg",
      "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg",
      "https://www.datocms-assets.com/223669/1785656942-bo1.jpg",
    ],
  },
  {
    title: "Book of Happiness",
    slug: "book-of-happiness",
    year: "2023",
    client: "Good Work Foundation",
    role: "WebGL & Interactive Experience",
    description:
      "Helping leaders keep themselves and their people happy and mentally healthy through interactive storytelling.",
    image: "https://www.datocms-assets.com/223669/1786210260-book-2.jpg",
    width: 2048,
    height: 1114,
    aspectRatio: "2048 / 1114",
    url: "https://findworkhappiness.com/",
    gallery: [
      "https://www.datocms-assets.com/223669/1786210260-book-2.jpg",
      "https://www.datocms-assets.com/223669/1786210260-book-3.jpg",
      "https://www.datocms-assets.com/223669/1786210260-book-1.jpg",
    ],
    vignettes: [
      "https://www.datocms-assets.com/223669/1786210260-book-2.jpg",
      "https://www.datocms-assets.com/223669/1786210260-book-3.jpg",
      "https://www.datocms-assets.com/223669/1786210260-book-1.jpg",
      "https://image.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://www.datocms-assets.com/223669/1786207557-nathan-2.jpg",
      "https://www.datocms-assets.com/223669/1785656645-image-84.jpg",
      "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg",
      "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg",
      "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg",
      "https://www.datocms-assets.com/223669/1785656942-bo1.jpg",
    ],
  },
  {
    title: "Dogelon Mars",
    slug: "dogelon-mars",
    year: "2023",
    client: "Dogelon Project",
    role: "Lead Creative Developer",
    description:
      "Follow the story of Dogelon Mars as he explores the greatest mysteries of the universe and seeks to return to the planet he once called home.",
    image: "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg",
    width: 3360,
    height: 2200,
    aspectRatio: "3360 / 2200",
    url: "https://dogelonmars.com/",
    gallery: [
      "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg",
      "https://www.datocms-assets.com/223669/1786207957-dogelon-1.jpg",
      "https://www.datocms-assets.com/223669/1786207957-dogelon-4.jpg",
    ],
    vignettes: [
      "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg",
      "https://www.datocms-assets.com/223669/1786207957-dogelon-1.jpg",
      "https://www.datocms-assets.com/223669/1786207957-dogelon-4.jpg",
      "https://www.datocms-assets.com/223669/1786207957-dogelon-3.jpg",
      "https://www.datocms-assets.com/223669/1786207557-nathan-1.jpg",
      "https://www.datocms-assets.com/223669/1785656645-image-84.jpg",
      "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg",
      "https://www.datocms-assets.com/223669/1786210260-book-2.jpg",
      "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg",
      "https://www.datocms-assets.com/223669/1785656942-bo1.jpg",
    ],
  },
  {
    title: "Gil Huybrecht",
    slug: "gil-huybrecht",
    year: "2023",
    client: "Gil Huybrecht",
    role: "Front-end Architecture & Animation",
    description:
      "Gil Huybrecht is a Belgian digital designer and art director, specializing in typography-heavy web design and branding.",
    image: "https://www.datocms-assets.com/223669/1785656909-image-64.jpg",
    width: 1196,
    height: 720,
    aspectRatio: "1196 / 720",
    url: "https://gilhuybrecht.com/",
    gallery: [
      "https://www.datocms-assets.com/223669/1785656909-image-64.jpg",
      "https://image.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
      "https://www.datocms-assets.com/223669/1785656942-bo1.jpg",
    ],
    vignettes: [
      "https://www.datocms-assets.com/223669/1785656909-image-64.jpg",
      "https://image.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://image.mux.com/g12oqAEfwFRDxmxiuH02yJsALmVkKqsKA/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://image.mux.com/ONW93srqx6kGfiHTKQtV2pkqByQY01nF01/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://www.datocms-assets.com/223669/1786207557-nathan-2.jpg",
      "https://www.datocms-assets.com/223669/1785656645-image-84.jpg",
      "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg",
      "https://www.datocms-assets.com/223669/1786210260-book-2.jpg",
      "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg",
      "https://www.datocms-assets.com/223669/1785656942-bo1.jpg",
    ],
  },
  {
    title: "Discoveryland",
    slug: "discoveryland",
    year: "2023",
    client: "Outpost / Discovery Land",
    role: "WebGL & Motion Engineering",
    description:
      "Partnered with Outpost and Discovery Land Company to create an immersive brand experience across their 23 global luxury properties.",
    image: "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg",
    width: 1372,
    height: 1029,
    aspectRatio: "1372 / 1029",
    url: "https://discoverylandco.com/",
    gallery: [
      "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg",
      "https://image.mux.com/BV6q01JxClCQwHfNI2sVS76jGjg5isqkq/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
      "https://www.datocms-assets.com/223669/1786207557-nathan-2.jpg",
    ],
    vignettes: [
      "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg",
      "https://image.mux.com/BV6q01JxClCQwHfNI2sVS76jGjg5isqkq/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://image.mux.com/wt002Ew1EVcKEXR5K4PkB9G5l1OoW9jiV/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://www.datocms-assets.com/223669/1786207557-nathan-1.jpg",
      "https://www.datocms-assets.com/223669/1785656645-image-84.jpg",
      "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg",
      "https://www.datocms-assets.com/223669/1786210260-book-2.jpg",
      "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg",
      "https://www.datocms-assets.com/223669/1785656909-image-64.jpg",
      "https://www.datocms-assets.com/223669/1785656942-bo1.jpg",
    ],
  },
  {
    title: "Griflan",
    slug: "griflan",
    year: "2022",
    client: "Griflan Studio",
    role: "Lead Creative Development",
    description:
      "Creative studio at the intersection of design, strategy, and compelling storytelling, shaping brands that move culture and leave a lasting mark.",
    image: "https://www.datocms-assets.com/223669/1785656942-bo1.jpg",
    width: 1162,
    height: 720,
    aspectRatio: "1162 / 720",
    url: "https://griflan.com/",
    gallery: [
      "https://www.datocms-assets.com/223669/1785656942-bo1.jpg",
      "https://image.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
      "https://www.datocms-assets.com/223669/1785656645-image-84.jpg",
    ],
    vignettes: [
      "https://www.datocms-assets.com/223669/1785656942-bo1.jpg",
      "https://image.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://image.mux.com/Hb00nsAmF7R01kcTOmRr2tgpX3WjZkVYPN/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://image.mux.com/FF7soo79aHLgeYDtjug6X599kMSZoBja4/thumbnail.jpg?width=400&height=500&fit_mode=crop",
      "https://www.datocms-assets.com/223669/1786207557-nathan-1.jpg",
      "https://www.datocms-assets.com/223669/1785656645-image-84.jpg",
      "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg",
      "https://www.datocms-assets.com/223669/1786210260-book-2.jpg",
      "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg",
      "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg",
    ],
  },
];
