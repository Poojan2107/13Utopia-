"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { SERVICE_NAV } from "@/data/services";
import styles from "@/styles/services/ServiceNav.module.css";

export function ServiceNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Services">
      {SERVICE_NAV.map((item) => {
        const active =
          item.href === "/services"
            ? pathname === "/services"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.link} ${active ? styles.active : ""}`}
            aria-current={active ? "page" : undefined}
            data-cursor="hover"
          >
            <span>{item.label}</span>
            {active ? (
              <motion.span
                className={styles.underline}
                layoutId="svc-nav-underline"
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
              />
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
