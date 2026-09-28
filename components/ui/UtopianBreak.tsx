import { cn } from "@/lib/utils/cn";
import styles from "@/styles/ui/UtopianBreak.module.css";

type Props = {
  className?: string;
  /** Accessible label — mark is decorative by default */
  label?: string;
  size?: "sm" | "md" | "lg";
};

/**
 * Utopian Break — permanent 1:3 signature.
 * One bar apart from three. The gap is the identity.
 * Do not explain publicly; let it recur.
 */
export function UtopianBreak({
  className,
  label = "One Three Utopia",
  size = "md",
}: Props) {
  return (
    <span
      className={cn(styles.root, styles[size], className)}
      role="img"
      aria-label={label}
      data-utopian-break
    >
      <span className={styles.one} aria-hidden="true" />
      <span className={styles.gap} aria-hidden="true" />
      <span className={styles.three} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    </span>
  );
}
