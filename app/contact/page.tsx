"use client";

import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/layout";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import styles from "@/styles/contact/Contact.module.css";

const CAPABILITY_OPTIONS = [
  "Brand Strategy & Design",
  "Web & Mobile Engineering",
  "AI & Automation Systems",
  "SEO & Growth Architecture",
  "End-to-End Build",
] as const;

const TIMELINE_OPTIONS = [
  "< 1 Month",
  "1 — 3 Months",
  "3 — 6 Months",
  "Long-Term Ongoing",
] as const;

export default function ContactPage() {
  const [selectedCapability, setSelectedCapability] = useState<string>(CAPABILITY_OPTIONS[0]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>(TIMELINE_OPTIONS[1]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [scope, setScope] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${selectedCapability} — ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nCapability: ${selectedCapability}\nTimeline: ${selectedTimeline}\n\nProject Details:\n${scope}`
    );
    window.location.href = `mailto:contact@13utopia.com?subject=${subject}&body=${body}`;
  };

  return (
    <SmoothScrollProvider>
      <AmbientField />
      <SiteHeader />

      <main className={styles.contactPage}>
        <div className={styles.contentContainer}>
          {/* Header Section */}
          <header className={styles.headerBlock}>
            <div className={styles.topMeta}>
              <span className={styles.metaLiveDot} />
              <span>06 // CONTACT</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaTag}>GET IN TOUCH</span>
            </div>

            <h1 className={styles.title}>
              START A <span className={styles.titleHighlight}>PROJECT.</span>
            </h1>

            <p className={styles.subtitle}>
              Have a project in mind? Reach out to start a conversation with our team.
            </p>
          </header>

          <div className={styles.contactLayout}>
            {/* Contact Form */}
            <form className={styles.formCard} onSubmit={handleSubmit}>
              {/* Capability Area */}
              <div className={styles.formGroup}>
                <label className={styles.fieldLabel}>
                  <span className={styles.fieldLabelTag}>01 //</span> WHAT DO YOU NEED?
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

              {/* Target Timeline */}
              <div className={styles.formGroup}>
                <label className={styles.fieldLabel}>
                  <span className={styles.fieldLabelTag}>02 //</span> ESTIMATED TIMELINE
                </label>
                <div className={styles.pillSelector}>
                  {TIMELINE_OPTIONS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`${styles.pillBtn} ${
                        selectedTimeline === t ? styles.pillBtnActive : ""
                      }`}
                      onClick={() => setSelectedTimeline(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Info Grid */}
              <div className={styles.inputGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.fieldLabel} htmlFor="contact-name">
                    <span className={styles.fieldLabelTag}>//</span> YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={styles.textInput}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.fieldLabel} htmlFor="contact-email">
                    <span className={styles.fieldLabelTag}>//</span> EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    className={styles.textInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.fieldLabel} htmlFor="contact-company">
                  <span className={styles.fieldLabelTag}>//</span> COMPANY OR WEBSITE (OPTIONAL)
                </label>
                <input
                  id="contact-company"
                  type="text"
                  placeholder="company.com"
                  className={styles.textInput}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              {/* Project Details */}
              <div className={styles.formGroup}>
                <label className={styles.fieldLabel} htmlFor="contact-scope">
                  <span className={styles.fieldLabelTag}>03 //</span> ABOUT THE PROJECT
                </label>
                <textarea
                  id="contact-scope"
                  required
                  placeholder="Tell us about what you want to build, design, or solve..."
                  className={styles.textareaInput}
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Inquiry</span>
                <span>→</span>
              </button>
            </form>

            {/* Direct Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.infoBlock}>
                <span className={styles.infoHeading}>DIRECT CONTACT</span>
                <a href="mailto:contact@13utopia.com" className={styles.directEmail}>
                  contact@13utopia.com
                </a>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoHeading}>LOCATIONS</span>
                <div className={styles.hubList}>
                  <div className={styles.hubItem}>
                    <span className={styles.hubCity}>Ahmedabad, India</span>
                    <p className={styles.hubAddress}>1123 Iconic Shyamal, 132 Feet Ring Rd, Ahmedabad, Gujarat 380015</p>
                  </div>
                  <div className={styles.hubItem}>
                    <span className={styles.hubCity}>Toronto, Canada</span>
                    <p className={styles.hubAddress}>30 Kimbercroft Ct, Markham Corners, Scarborough, ON M1S 4K9</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <SiteFooter />
    </SmoothScrollProvider>
  );
}
