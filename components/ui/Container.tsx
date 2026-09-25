import { cn } from "@/lib/utils/cn";
import styles from "@/styles/ui/Container.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "nav";
};

export function Container({ children, className, style, as: Tag = "div" }: Props) {
  return (
    <Tag className={cn(styles.container, className)} style={style}>
      {children}
    </Tag>
  );
}
