"use client";

import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/layout";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import styles from "@/styles/contact/Contact.module.css";

const CAPABILITY_OPTIONS = [
  "CREATE · Brand Strategy & Identity",
  "BUILD · Web, Mobile & SaaS",
  "AI · Autonomous Workflows",
  "GROW · SEO & Growth Architecture",
  "FULL-SPECTRUM ALLIANCE",
] as const;

const TIMELINE_OPTIONS = [
  "Within 1 Month",
  "1-3 Months",
  "3-6 Months",
  "Long-Term Partnership",
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
    const subject = encodeURIComponent(`Commission Inquiry: ${selectedCapability} — ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nCapability: ${selectedCapability}\nTimeline: ${selectedTimeline}\n\nProject Scope:\n${scope}`
    );
    window.location.href = `mailto:contact@13utopia.com?subject=${subject}&body=${body}`;
  };

  return (
    <SmoothScrollProvider>
      <AmbientField />
      <SiteHeader />

      <main className={styles.contactPage}>
        {/* Hero Lockup */}
        <section className={styles.heroBlock}>
          <div className={styles.topMeta}>
            <span>06 // INITIATION</span>
            <span>·</span>
            <span className={styles.topMetaTag}>START A PROJECT COMMISSION</span>
          </div>

          <h1 className={styles.title}>
            START A PROJECT.
          </h1>

          <p className={styles.subtitle}>
            Direct access to senior partners. Tell us what you&apos;re building, and we&apos;ll outline technical feasibility, architectural milestones, and delivery scope.
          </p>
        </section>

        <div className={styles.contactLayout}>
          {/* Commission Form */}
          <form className={styles.formCard} onSubmit={handleSubmit}>
            {/* Capability Area */}
            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>
                <span className={styles.fieldLabelTag}>01 //</span> CAPABILITY FOCUS
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
                <span className={styles.fieldLabelTag}>02 //</span> TARGET HORIZON
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
                placeholder="Company Name or Website URL"
                className={styles.textInput}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            {/* Project Details */}
            <div className={styles.formGroup}>
              <label className={styles.fieldLabel} htmlFor="contact-scope">
                <span className={styles.fieldLabelTag}>03 //</span> PROJECT SCOPE &amp; OBJECTIVES
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
              <span>Send Commission Inquiry</span>
              <span>→</span>
            </button>
          </form>

          {/* Direct Telemetry & Studio Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.infoBlock}>
              <span className={styles.infoHeading}>DIRECT EXECUTIVE TRANSMISSION</span>
              <a href="mailto:contact@13utopia.com" className={styles.directEmail}>
                contact@13utopia.com
              </a>
              <p className={styles.faqA}>
                For RFPs, partnership opportunities, and direct executive correspondence.
              </p>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoHeading}>STUDIO HUBS</span>
              <div className={styles.hubList}>
                <div className={styles.hubItem}>
                  <span className={styles.hubCity}>Ahmedabad, India</span>
                  <p className={styles.faqA}>Full-stack product engineering &amp; growth systems lab.</p>
                </div>
                <div className={styles.hubItem}>
                  <span className={styles.hubCity}>Scarborough, Canada</span>
                  <p className={styles.faqA}>North American client partnerships &amp; brand positioning.</p>
                </div>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoHeading}>FAQ // ENGAGEMENT PROCESS</span>
              <div className={styles.faqBlock}>
                <div className={styles.faqItem}>
                  <h4 className={styles.faqQ}>How quickly do you respond?</h4>
                  <p className={styles.faqA}>
                    Every inquiry is reviewed directly by a principal architect and responded to promptly.
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <h4 className={styles.faqQ}>Who owns the IP and source code?</h4>
                  <p className={styles.faqA}>
                    100% client ownership. All source code, Figma files, 3D assets, and deployment keys are transferred upon delivery.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </SmoothScrollProvider>
  );
}
