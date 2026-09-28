import Image from "next/image";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

export type MotionImage = {
  src: string;
  alt?: string;
  objectPosition?: string;
};

type Props = {
  need: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
  aspect?: "hero" | "wide" | "square" | "portrait" | "film";
  image?: MotionImage;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Real plate when provided — MediaPlaceholder only as fallback */
export function MotionMedia({
  need,
  tone = "warm",
  aspect = "wide",
  image,
  fill = true,
  className,
  sizes = "(max-width: 900px) 100vw, 50vw",
  priority,
}: Props) {
  if (image?.src) {
    if (fill) {
      return (
        <div
          className={className}
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            background: "#050505",
          }}
        >
          <Image
            src={image.src}
            alt={image.alt ?? need}
            fill
            sizes={sizes}
            priority={priority}
            style={{
              objectFit: "cover",
              objectPosition: image.objectPosition ?? "50% 50%",
            }}
          />
        </div>
      );
    }

    return (
      <div
        className={className}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio:
            aspect === "portrait"
              ? "3/4"
              : aspect === "square"
                ? "1"
                : aspect === "film"
                  ? "21/9"
                  : aspect === "hero"
                    ? "16/9"
                    : "16/9",
          overflow: "hidden",
          background: "#050505",
        }}
      >
        <Image
          src={image.src}
          alt={image.alt ?? need}
          fill
          sizes={sizes}
          priority={priority}
          style={{
            objectFit: "cover",
            objectPosition: image.objectPosition ?? "50% 50%",
          }}
        />
      </div>
    );
  }

  return (
    <MediaPlaceholder
      aspect={aspect}
      tone={tone}
      need={need}
      fill={fill}
      className={className}
    />
  );
}
