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
 * Wordmark SVG for dark UI. JPEG assets retained for 3d/archive until photography kit lands.
 */
export function BrandLogo({
  variant = "wordmark",
  className,
  priority,
}: Props) {
  if (variant === "wordmark" || variant === "horizontal") {
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
