import { MotionMedia } from "@/components/motion/MotionMedia";
import { plateForTone, type PlateTone } from "@/content/plates";

type Props = {
  need: string;
  tone?: PlateTone;
  priority?: boolean;
  aspect?: "hero" | "wide" | "square" | "portrait" | "film";
};

/** PageHero media — sculpt plate by tone (real photography swaps later) */
export function HeroPlate({
  need,
  tone = "warm",
  priority = true,
  aspect = "hero",
}: Props) {
  return (
    <MotionMedia
      aspect={aspect}
      tone={tone}
      need={need}
      image={plateForTone(tone)}
      fill={false}
      sizes="100vw"
      priority={priority}
    />
  );
}
