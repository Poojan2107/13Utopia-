import Link from "next/link";
import { footerNav } from "@/content/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import styles from "@/styles/layout/SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <Link href="/" className={styles.brand} aria-label="13 UTOPIA home">
              <BrandLogo variant="horizontal" />
            </Link>
            <p className={styles.tagline}>BE UNREAL. BE UNREASONABLE.</p>
            <p className={styles.blurb}>
              Creative technology and growth company for ambitious businesses.
            </p>
          </div>

          <nav aria-label="Footer worlds" className={styles.col}>
            <h2 className={styles.colTitle}>Worlds</h2>
            <ul>
              {footerNav.worlds.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer explore" className={styles.col}>
            <h2 className={styles.colTitle}>Explore</h2>
            <ul>
              {footerNav.explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer connect" className={styles.col}>
            <h2 className={styles.colTitle}>Connect</h2>
            <ul>
              {footerNav.connect.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {year} 13 UTOPIA. All rights reserved.</p>
          <ul className={styles.legal}>
            {footerNav.legal.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
