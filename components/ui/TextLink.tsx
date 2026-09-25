import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/ui/TextLink.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
};

export function TextLink({ href, children, className }: Props) {
  return (
    <Link href={href} className={cn(styles.link, className)}>
      {children}
    </Link>
  );
}

export function ArrowLink({ href, children, className }: Props) {
  return (
    <Link href={href} className={cn(styles.link, styles.arrow, className)}>
      {children}
      <span aria-hidden="true"> →</span>
    </Link>
  );
}
