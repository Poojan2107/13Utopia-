import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/ui/BrandLogo.module.css";

type Variant = "horizontal" | "hero3d" | "mark";

type Props = {
  variant?: Variant;
  className?: string;
  priority?: boolean;
};

const ASSETS = {
  horizontal: {
    src: "/brand/13-utopia-logo-horizontal.jpeg",
    width: 640,
    height: 200,
    alt: "13 UTOPIA",
  },
  hero3d: {
    src: "/brand/13-utopia-logo-3d.jpeg",
    width: 1200,
    height: 900,
    alt: "13 UTOPIA",
  },
  mark: {
    src: "/brand/13-utopia-logo-3d.jpeg",
    width: 320,
    height: 240,
    alt: "13 UTOPIA",
  },
} as const;

export function BrandLogo({ variant = "horizontal", className, priority }: Props) {
  const asset = ASSETS[variant];

  return (
    <span className={cn(styles.wrap, styles[variant], className)}>
      <Image
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        className={styles.image}
        priority={priority}
        sizes={
          variant === "hero3d"
            ? "(max-width: 768px) 100vw, 60vw"
            : variant === "mark"
              ? "120px"
              : "180px"
        }
      />
    </span>
  );
}
