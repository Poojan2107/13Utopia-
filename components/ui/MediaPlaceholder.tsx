import { cn } from "@/lib/utils/cn";
import styles from "@/styles/ui/MediaPlaceholder.module.css";

type Props = {
  /** Art-direction note — stays in aria / optional annotate mode only */
  need: string;
  brief?: string;
  aspect?: "hero" | "wide" | "square" | "portrait" | "film";
  className?: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
  /** Show art-direction caption (off by default — pages should feel finished) */
  annotate?: boolean;
  /** Stretch frame to parent (cinematic stages) */
  fill?: boolean;
};

/**
 * Atmospheric media plate. Looks designed now; swap for real imagery later.
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
