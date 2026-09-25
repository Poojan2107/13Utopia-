import { cn } from "@/lib/utils/cn";
import styles from "@/styles/ui/SectionHeading.module.css";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  as: Tag = "h2",
  className,
}: Props) {
  return (
    <header className={cn(styles.heading, className)}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Tag id={id} className={styles.title}>
        {title}
      </Tag>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
