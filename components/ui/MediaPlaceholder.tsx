import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { plateForTone, type PlateTone } from "@/content/plates";
import styles from "@/styles/ui/MediaPlaceholder.module.css";

type Props = {
  /** Art-direction note — stays in aria / optional annotate mode only */
  need: string;
  brief?: string;
  aspect?: "hero" | "wide" | "square" | "portrait" | "film";
  className?: string;
  tone?: PlateTone;
  /** Show art-direction caption (off by default — pages should feel finished) */
  annotate?: boolean;
  /** Stretch frame to parent (cinematic stages) */
  fill?: boolean;
};

/**
 * Atmospheric media plate — sculpt kit by tone until photography lands.
 * `need` documents intent without painting "IMAGE NEEDED" on the page.
 */
export function MediaPlaceholder({
  need,
  brief,
  aspect = "wide",
  className,
  tone = "dark",
  annotate = false,
  fill = false,
}: Props) {
  const plate = plateForTone(tone);

  return (
    <figure
      className={cn(
        styles.figure,
        styles[aspect],
        styles[tone],
        fill && styles.fill,
        className,
      )}
      aria-label={need}
      title={annotate ? undefined : need}
    >
      <div className={styles.frame}>
        <Image
          src={plate.src}
          alt={plate.alt ?? need}
          fill
          sizes={
            aspect === "hero"
              ? "100vw"
              : "(max-width: 900px) 100vw, 60vw"
          }
          style={{
            objectFit: "cover",
            objectPosition: plate.objectPosition ?? "50% 50%",
          }}
        />
        <span className={styles.grain} aria-hidden="true" />
        <span className={styles.glow} aria-hidden="true" />
        <span className={styles.rule} aria-hidden="true" />
        {annotate ? (
          <figcaption className={styles.caption}>
            <span className={styles.label}>Media</span>
            <span className={styles.need}>{need}</span>
            {brief ? <span className={styles.brief}>{brief}</span> : null}
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}
