import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/home/HomeChapter.module.css";

type Props = {
  children: ReactNode;
  index?: string;
  density?: "editorial" | "stage" | "inset" | "close" | "bare";
  className?: string;
  id?: string;
};

/** Bare chapter shell — continuous black film, no decorative index marks. */
export function HomeChapter({
  children,
  index,
  density = "bare",
  className,
  id,
}: Props) {
  return (
    <div
      id={id}
      className={cn(styles.chapter, styles[density], className)}
      data-chapter={index}
    >
      {children}
    </div>
  );
}
