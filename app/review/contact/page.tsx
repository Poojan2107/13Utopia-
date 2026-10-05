"use client";

import { useState } from "react";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import { SiteFooter } from "@/components/layout";
import styles from "@/styles/contact/Contact.module.css";

const CAPABILITY_OPTIONS = [
  "Search Engine Optimization (SEO)",
  "Full-Stack Web Development & SaaS",
  "CGI Videos & 3D Spatial Motion",
  "Performance Paid Advertising (PPC)",
  "Online Reputation Management (ORM)",
  "Email Marketing & AI Automations",
  "FULL ALLIANCE (CREATE · BUILD · GROW)",
] as const;

export default function ReviewContactPage() {
  const [selectedCapability, setSelectedCapability] = useState<string>(CAPABILITY_OPTIONS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [scope, setScope] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry: ${selectedCapability} — ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nCapability: ${selectedCapability}\n\nProject Scope:\n${scope}`
    );
    window.location.href = `mailto:info@13utopia.com?subject=${subject}&body=${body}`;
  };

  return (
    <SmoothScrollProvider>
      <AmbientField />
      <ReviewHeader />

      <main className={styles.contactPage} style={{ paddingTop: "140px" }}>
        {/* Hero Lockup */}
        <section className={styles.heroBlock}>
          <div className={styles.topMeta}>
            <span>04 // DRAFT CONTACT</span>
            <span>·</span>
            <span className={styles.topMetaTag}>AUTHENTICATED CONTACT TELEMETRY</span>
          </div>

          <h1 className={styles.title}>
            INITIATE ALLIANCE.
          </h1>

          <p className={styles.subtitle}>
            Direct access to senior partners. Transmit your project requirements and scope below to initiate an alliance.
          </p>
        </section>

        <div className={styles.contactLayout}>
          {/* Commission Form */}
          <form className={styles.formCard} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>
                <span className={styles.fieldLabelTag}>01 //</span> SELECT CAPABILITY
              </label>
              <div className={styles.pillSelector}>
                {CAPABILITY_OPTIONS.map((cap) => (
                  <button
                    key={cap}
                    type="button"
                    className={`${styles.pillBtn} ${
                      selectedCapability === cap ? styles.pillBtnActive : ""
                    }`}
                    onClick={() => setSelectedCapability(cap)}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.inputGrid}>
              <div className={styles.formGroup}>
                <label className={styles.fieldLabel} htmlFor="contact-name">
                  <span className={styles.fieldLabelTag}>//</span> YOUR NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  className={styles.textInput}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.fieldLabel} htmlFor="contact-email">
                  <span className={styles.fieldLabelTag}>//</span> WORK EMAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className={styles.textInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.fieldLabel} htmlFor="contact-company">
                <span className={styles.fieldLabelTag}>//</span> COMPANY / ORGANIZATION / URL
              </label>
              <input
                id="contact-company"
                type="text"
                placeholder="Company Name or URL"
                className={styles.textInput}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.fieldLabel} htmlFor="contact-scope">
                <span className={styles.fieldLabelTag}>02 //</span> PROJECT SCOPE &amp; OBJECTIVES
              </label>
              <textarea
                id="contact-scope"
                required
                placeholder="Briefly describe what you are looking to build, solve, or scale..."
                className={styles.textareaInput}
                value={scope}
                onChange={(e) => setScope(e.target.value)}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              <span>Transmit Inquiry</span>
              <span>→</span>
            </button>
          </form>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.infoBlock}>
              <span className={styles.infoHeading}>DIRECT INQUIRIES</span>
              <a href="mailto:contact@13utopia.com" className={styles.directEmail}>
                contact@13utopia.com
              </a>
              <p className={styles.faqA} style={{ marginTop: "12px" }}>
                Direct transmission channel for client partnerships, custom web platforms, brand systems, and performance retainers worldwide.
              </p>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoHeading}>ENGAGEMENT TERMS</span>
              <p className={styles.faqA}>
                All engagements include senior partner direction, 100% intellectual property transfer, and dedicated sprint delivery cycles.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </SmoothScrollProvider>
  );
}
