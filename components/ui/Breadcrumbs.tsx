import Link from "next/link";
import styles from "@/styles/ui/Breadcrumbs.module.css";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";

export type Crumb = { name: string; path: string };

type Props = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: Props) {
  const withHome: Crumb[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <nav aria-label="Breadcrumb" className={styles.nav}>
        <ol className={styles.list}>
          {withHome.map((item, index) => {
            const isLast = index === withHome.length - 1;
            return (
              <li key={item.path} className={styles.item}>
                {isLast ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <Link href={item.path}>{item.name}</Link>
                )}
                {!isLast ? (
                  <span className={styles.sep} aria-hidden="true">
                    /
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema(withHome))}
      />
    </>
  );
}
