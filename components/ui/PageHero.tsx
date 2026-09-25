import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/TextLink";
import styles from "@/styles/ui/PageHero.module.css";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <header className={styles.hero}>
      <Container>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h1 className={styles.title}>{title}</h1>
        {description ? <p className={styles.description}>{description}</p> : null}
        {children}
      </Container>
    </header>
  );
}

type RelatedProps = {
  title: string;
  items: { href: string; label: string }[];
};

export function RelatedLinks({ title, items }: RelatedProps) {
  if (!items.length) return null;
  return (
    <aside className={styles.related} aria-label={title}>
      <h2 className={styles.relatedTitle}>{title}</h2>
      <ul className={styles.relatedList}>
        {items.map((item) => (
          <li key={item.href}>
            <ArrowLink href={item.href}>{item.label}</ArrowLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
