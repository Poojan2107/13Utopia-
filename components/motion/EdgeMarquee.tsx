"use client";

/**
 * Hub index — gold edge-wipe marquee removed.
 * Pack replacement: Hover Effects / 011 Menu Hover Image Animation.
 */
import {
  HoverImageMenu,
  type HoverImageMenuItem,
} from "@/components/home/HoverImageMenu";
import type { MotionImage } from "@/components/motion/MotionMedia";

export type EdgeMarqueeItem = {
  href: string;
  title: string;
  tags: string[];
  images?: MotionImage[];
  image?: MotionImage;
  need?: string;
  body?: string;
};

type Props = {
  items: EdgeMarqueeItem[];
  eyebrow?: string;
  lead?: string;
  className?: string;
  id?: string;
  footHref?: string | null;
  footLabel?: string;
};

export function EdgeMarquee({
  items,
  eyebrow = "Explore",
  lead,
  className,
  id,
  footHref = null,
  footLabel,
}: Props) {
  const mapped: HoverImageMenuItem[] = items.map((item) => {
    const image =
      item.image ??
      item.images?.[0] ??
      ({ src: "/brand/mark.svg", alt: item.title } as MotionImage);

    return {
      href: item.href,
      title: item.title,
      sub: item.body ?? item.tags.slice(0, 3).join(" · "),
      image,
      tags: item.tags,
    };
  });

  return (
    <HoverImageMenu
      id={id}
      className={className}
      eyebrow={eyebrow}
      lead={lead}
      items={mapped}
      footHref={footHref}
      footLabel={footLabel}
    />
  );
}
