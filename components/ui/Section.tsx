import { cn } from "@/lib/utils/cn";
import styles from "@/styles/ui/Section.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
};

export function Section({ children, className, id, ariaLabelledBy }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(styles.section, className)}
    >
      {children}
    </section>
  );
}
