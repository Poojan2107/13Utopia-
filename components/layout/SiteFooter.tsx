import Link from "next/link";
import { footerNav } from "@/content/navigation";
import { company } from "@/content/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { PhysicsFloat } from "@/components/motion/PhysicsFloat";
import { SvgDraw } from "@/components/motion/SvgDraw";
import styles from "@/styles/layout/SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <PhysicsFloat amp={5} duration={5.5} className={styles.floatBrand}>
              <span className={styles.brandOrb} aria-hidden="true" />
            </PhysicsFloat>
            <Link href="/" className={styles.brand} aria-label="13 UTOPIA home">
              <BrandLogo variant="horizontal" />
            </Link>
            <p className={styles.tagline}>{company.tagline}</p>
            <p className={styles.blurb}>{company.positioning}</p>
            <address className={styles.address}>
              <a href={company.phoneHref}>{company.phone}</a>
              <br />
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <br />
              {company.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
          </div>

          <nav aria-label="Footer capabilities" className={styles.col}>
            <h2 className={styles.colTitle}>Capabilities</h2>
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

        <SvgDraw variant="rule" className={styles.footerRule} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} {company.legalName}. All rights reserved.
          </p>
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
