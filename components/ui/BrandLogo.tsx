import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/ui/BrandLogo.module.css";

type Variant = "official" | "horizontal" | "hero3d" | "mark" | "wordmark";

type Props = {
  variant?: Variant;
  className?: string;
  priority?: boolean;
};

/**
 * Official brand mark — locked live PNG wordmark for chrome.
 * Prefer `official` in header/footer.
 */
export function BrandLogo({
  variant = "official",
  className,
  priority,
}: Props) {
  if (variant === "official" || variant === "wordmark" || variant === "horizontal") {
    return (
      <span className={cn(styles.wrap, styles.official, className)}>
        <Image
          src="/brand/13-utopia-logo-live.png"
          alt="13 UTOPIA"
          width={320}
          height={72}
          className={styles.officialImg}
          priority={priority}
          sizes="180px"
        />
      </span>
    );
  }

  const asset =
    variant === "mark"
      ? {
          src: "/brand/13-utopia-logo-3d.jpeg",
          width: 320,
          height: 240,
        }
      : {
          src: "/brand/13-utopia-logo-3d.jpeg",
          width: 1200,
          height: 900,
        };

  return (
    <span className={cn(styles.wrap, styles[variant], className)}>
      <Image
        src={asset.src}
        alt="13 UTOPIA"
        width={asset.width}
        height={asset.height}
        className={styles.image}
        priority={priority}
        sizes={variant === "mark" ? "120px" : "(max-width: 768px) 100vw, 60vw"}
      />
    </span>
  );
}
