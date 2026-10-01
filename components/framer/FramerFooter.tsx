"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/styles/framer/FramerFooter.module.css";

export function FramerFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer} aria-label="13 UTOPIA Footer">
      <div className={styles.container}>
        {/* Top Bar: Monumental Brand Signature */}
        <div className={styles.topRow}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className={styles.brandBox}
          >
            <span className={styles.brandTitle}>13 UTOPIA</span>
            <span className={styles.brandTagline}>BRAND · TECHNOLOGY · GROWTH</span>
          </motion.div>

          <button
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label="Back to top"
            data-cursor="hover"
          >
            <span>RETURN TO TOP</span>
            <span className={styles.arrowUp}>↑</span>
          </button>
        </div>

        {/* Middle Matrix: Navigation & Studio Coordinates */}
        <div className={styles.matrixRow}>
          <div className={styles.col}>
            <span className={styles.colTitle}>WORLDS</span>
            <Link href="/services/create" className={styles.footerLink}>01 CREATE (Brands)</Link>
            <Link href="/services/build" className={styles.footerLink}>02 BUILD (Products)</Link>
            <Link href="/services/grow" className={styles.footerLink}>03 GROW (Revenue)</Link>
          </div>

          <div className={styles.col}>
            <span className={styles.colTitle}>INDEX</span>
            <Link href="/services" className={styles.footerLink}>All Services</Link>
            <Link href="/work" className={styles.footerLink}>Selected Work</Link>
            <Link href="/#outcomes" className={styles.footerLink}>Client Objectives</Link>
            <Link href="/#about" className={styles.footerLink}>The Anomaly</Link>
            <Link href="/#contact" className={styles.footerLink}>Initiate Alliance</Link>
          </div>

          <div className={styles.col}>
            <span className={styles.colTitle}>STUDIO NODES</span>
            <p className={styles.colText}>DELHI NCR, INDIA</p>
            <p className={styles.colText}>TORONTO, CANADA</p>
            <p className={styles.colText}>GLOBAL CONCIERGE</p>
          </div>

          <div className={styles.col}>
            <span className={styles.colTitle}>COLOPHON</span>
            <p className={styles.colText}>TYPESET IN PP NEUE MONTREAL</p>
            <p className={styles.colText}>FRAMER MOTION & NEXT.JS</p>
            <p className={styles.colText}>28.6139° N · 43.6532° W</p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Motto */}
        <div className={styles.bottomRow}>
          <span className={styles.motto}>BE UNREAL. BE UNREASONABLE.</span>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} 13 UTOPIA CORP. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}
