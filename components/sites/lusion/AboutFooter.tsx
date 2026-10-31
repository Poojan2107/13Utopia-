"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./about.module.css";

export function AboutFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. Light Editorial Footer */}
      <footer className={styles.aboutFooterLight} id="footer">
        <div className={styles.footerColumns}>
          {/* Col 1: Studio Address */}
          <div>
            <div className={styles.footerColHeading}>Studio</div>
            <p className={styles.footerAddressText}>
              Suite 2<br />
              9 Marsh Street<br />
              Bristol, BS1 4AA<br />
              United Kingdom
            </p>
          </div>

          {/* Col 2: Inquiries & Channels */}
          <div>
            <div className={styles.footerColHeading}>Connect</div>
            <div className={styles.footerLinksList}>
              <a
                href="https://twitter.com/lusionltd"
                target="_blank"
                rel="noreferrer"
                className={styles.footerLink}
              >
                Twitter / X
              </a>
              <a
                href="https://instagram.com/lusionltd"
                target="_blank"
                rel="noreferrer"
                className={styles.footerLink}
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/lusion"
                target="_blank"
                rel="noreferrer"
                className={styles.footerLink}
              >
                LinkedIn
              </a>

              <div style={{ marginTop: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "0.25rem" }}>
                  General enquiries
                </div>
                <a href="mailto:hello@lusion.co" className={styles.footerLink}>
                  hello@lusion.co
                </a>
              </div>

              <div>
                <div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "0.25rem" }}>
                  New business
                </div>
                <a href="mailto:business@lusion.co" className={styles.footerLink}>
                  business@lusion.co
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Newsletter */}
          <div>
            <div className={styles.footerColHeading}>Stay informed</div>
            <h3 style={{ fontSize: "2rem", fontWeight: 700, margin: "0 0 1rem 0", letterSpacing: "-0.02em" }}>
              Subscribe to our newsletter
            </h3>

            {subscribed ? (
              <p style={{ color: "#002aff", fontWeight: 600 }}>
                Thank you for subscribing to Lusion insights.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.newsletterForm}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className={styles.newsletterInput}
                />
                <button
                  type="submit"
                  className={styles.newsletterSubmitBtn}
                  aria-label="Submit newsletter subscription"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottomBar}>
          <div>©2026 LUSION Creative Studio</div>
          <div>
            R&D:{" "}
            <a
              href="https://labs.lusion.co"
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              labs.lusion.co
            </a>
          </div>
          <div>Built by Lusion with ❤️</div>
          <button
            onClick={handleScrollTop}
            className={styles.backToTopBtn}
            title="Back to top"
            aria-label="Back to top"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
          </button>
        </div>
      </footer>

      {/* 2. Dark Projects Teaser Section */}
      <section className={styles.projectsTeaserBar}>
        <div className={styles.teaserKicker}>Keep scrolling to learn more</div>

        <div className={styles.teaserMainRow}>
          <h2 className={styles.teaserTitle}>Our Projects</h2>
          <Link href="/clone/lusion" className={styles.teaserLink}>
            <span>Next Page</span>
            <span>───────→</span>
          </Link>
        </div>

        <div className={styles.teaserCrosshairs}>
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
        </div>
      </section>
    </>
  );
}
