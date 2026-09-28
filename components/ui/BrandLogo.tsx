import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/ui/BrandLogo.module.css";

type Variant = "horizontal" | "hero3d" | "mark" | "wordmark";

type Props = {
  variant?: Variant;
  className?: string;
  priority?: boolean;
};

/**
 * Official brand mark.
 * horizontal = JPEG wordmark (black + gold sparkle) — use on light plate in dark UI.
 * wordmark = path SVG fallback for mono contexts.
 */
export function BrandLogo({
  variant = "horizontal",
  className,
  priority,
}: Props) {
  if (variant === "wordmark") {
    return (
      <span className={cn(styles.wrap, styles.wordmark, className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/13-utopia-wordmark.svg"
          alt="13 UTOPIA"
          className={styles.svg}
          width={160}
          height={28}
        />
      </span>
    );
  }

  if (variant === "horizontal") {
    return (
      <span className={cn(styles.wrap, styles.horizontal, className)}>
        <Image
          src="/brand/13-utopia-logo-horizontal.jpeg"
          alt="13 UTOPIA"
          width={320}
          height={72}
          className={styles.image}
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
