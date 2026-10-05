"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/review/ReviewHeader.module.css";

export function ReviewHeader() {
  const pathname = usePathname();

  const links = [
    { href: "/review", label: "00 OVERVIEW" },
    { href: "/review/blog", label: "01 BLOG (10 POSTS)" },
    { href: "/review/services", label: "02 SERVICES (6 OFFERINGS)" },
    { href: "/review/about", label: "03 ABOUT" },
    { href: "/review/contact", label: "04 CONTACT" },
    { href: "/review/backgrounds", label: "05 BG LAB (5 CONCEPTS)" },
  ];

  return (
    <aside className={styles.reviewBanner} aria-label="Content Staging & Review Bar">
      <div className={styles.bannerInner}>
        <div className={styles.leftInfo}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            CONTENT STAGING &amp; REVIEW
          </span>
          <span className={styles.bannerText}>
            Drafted from 13utopia.com · Zero AI slop · Zero gods theme
          </span>
        </div>

        <nav className={styles.navLinks} aria-label="Review Navigation">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/review" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navBtn} ${isActive ? styles.navBtnActive : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/" className={styles.backToMain}>
            <span>View Main Site</span>
            <span>↗</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}
