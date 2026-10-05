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
            <Link href="/" className={styles.footerLink}>01 Overview</Link>
            <Link href="/about" className={styles.footerLink}>02 About</Link>
            <Link href="/services" className={styles.footerLink}>03 Services</Link>
            <Link href="/work" className={styles.footerLink}>04 Work</Link>
            <Link href="/blog" className={styles.footerLink}>05 Journal</Link>
            <Link href="/contact" className={styles.footerLink}>06 Contact</Link>
          </div>

          <div className={styles.col}>
            <span className={styles.colTitle}>STUDIO HUBS</span>
            <p className={styles.colText} style={{ fontWeight: 700, color: "#fff" }}>AHMEDABAD, INDIA</p>
            <p className={styles.colText} style={{ fontSize: "0.75rem", opacity: 0.6, marginBottom: "0.5rem" }}>
              1123 Iconic Shyamal, Shyamal Cross Roads, 132 Feet Ring Rd, Ahmedabad, Gujarat 380015
            </p>
            <p className={styles.colText} style={{ fontWeight: 700, color: "#fff" }}>SCARBOROUGH, CANADA</p>
            <p className={styles.colText} style={{ fontSize: "0.75rem", opacity: 0.6, marginBottom: "0.5rem" }}>
              30 Kimbercroft Ct, Markham Corners, Scarborough, ON M1S 4K9
            </p>
            <a href="mailto:contact@13utopia.com" className={styles.footerLink} style={{ marginTop: "0.25rem" }}>contact@13utopia.com</a>
          </div>

          <div className={styles.col}>
            <span className={styles.colTitle}>COLOPHON</span>
            <p className={styles.colText}>TYPESET IN PP NEUE MONTREAL</p>
            <p className={styles.colText}>DESIGNED &amp; ENGINEERED IN-HOUSE</p>
            <p className={styles.colText}>NEXT.JS &amp; THREE.JS ARCHITECTURE</p>
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
