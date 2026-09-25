/**
 * Typography test variants — display personality only.
 * Layout / sculpture / composition stay identical.
 *
 * Licensed faces win when present in /public/fonts or installed locally.
 * Google proxies are labeled honestly so we don't pretend they're Noe/Canela/Tiempos.
 */
export type TypeVariantId = "a" | "b" | "c";

export type TypeVariant = {
  id: TypeVariantId;
  label: string;
  intended: string;
  proxy: string;
  note: string;
  /** CSS variable set on the hero for --hero-display */
  cssVar: string;
};

export const TYPE_VARIANTS: TypeVariant[] = [
  {
    id: "a",
    label: "Variant A",
    intended: "Noe Display",
    proxy: "Source Serif 4",
    note: "Contemporary Scotch with more character than fashion Didone. Closest open stand-in for Noe.",
    cssVar: "--font-type-a",
  },
  {
    id: "b",
    label: "Variant B",
    intended: "Canela",
    proxy: "Fraunces",
    note: "Warm, soft optical serif — literary rather than glossy. Closest open stand-in for Canela.",
    cssVar: "--font-type-b",
  },
  {
    id: "c",
    label: "Variant C",
    intended: "Tiempos Headline",
    proxy: "Newsreader",
    note: "Editorial / newspaper authority without fashion drama. Closest open stand-in for Tiempos.",
    cssVar: "--font-type-c",
  },
];

export function getTypeVariant(id: TypeVariantId): TypeVariant {
  return TYPE_VARIANTS.find((v) => v.id === id) ?? TYPE_VARIANTS[0];
}
