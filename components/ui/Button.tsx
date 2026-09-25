import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/ui/Button.module.css";

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

type LinkProps = Common & {
  href: string;
  type?: never;
};

type ButtonProps = Common & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export function PrimaryButton(props: LinkProps | ButtonProps) {
  return <BaseButton variant="primary" {...props} />;
}

export function SecondaryButton(props: LinkProps | ButtonProps) {
  return <BaseButton variant="secondary" {...props} />;
}

function BaseButton({
  children,
  className,
  variant = "primary",
  ...rest
}: (LinkProps | ButtonProps) & { variant?: "primary" | "secondary" }) {
  const classNames = cn(styles.button, styles[variant], className);

  if ("href" in rest && rest.href) {
    return (
      <Link href={rest.href} className={classNames}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as ButtonProps;
  return (
    <button type={buttonRest.type ?? "button"} className={classNames} onClick={buttonRest.onClick}>
      {children}
    </button>
  );
}
