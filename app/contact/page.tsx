"use client";

import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/layout";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import styles from "@/styles/contact/Contact.module.css";

const CAPABILITY_OPTIONS = [
  "CREATE · Brand & Spatial Identity",
  "BUILD · Web, Mobile & SaaS",
  "AI · Autonomous Workflows",
  "GROW · Search & Scale Engines",
  "FULL-SPECTRUM COMMISSION",
] as const;

const TIMELINE_OPTIONS = [
  "Immediate (< 1 Month)",
  "1 — 3 Months",
  "3 — 6 Months",
  "Long-Term Alliance",
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
        {/* Editorial Fullscreen Hero Stage */}
        <section className={styles.heroBlock}>
          <div className={styles.heroContent}>
            <div className={styles.topMeta}>
              <span className={styles.metaLiveDot} />
              <span>06 // INITIATION</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaTag}>START A PROJECT COMMISSION</span>
            </div>

            <h1 className={styles.title}>
              START A
              <br />
              <span className={styles.titleHighlight}>PROJECT.</span>
            </h1>

            <p className={styles.subtitle}>
              Tell us what you want to bring into the world. We collaborate directly with founders and ambitious teams to engineer sovereign brand identities, production web systems, and high-velocity growth engines.
            </p>
          </div>
        </section>

        <div className={styles.contentContainer}>
          <div className={styles.contactLayout}>
            {/* Commission Form */}
            <form className={styles.formCard} onSubmit={handleSubmit}>
              {/* Capability Area */}
              <div className={styles.formGroup}>
                <label className={styles.fieldLabel}>
                  <span className={styles.fieldLabelTag}>01 //</span> DISCIPLINE FOCUS
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
                  <span className={styles.fieldLabelTag}>02 //</span> TARGET TIMELINE
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
                    placeholder="Alex Vance"
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
                  <span className={styles.fieldLabelTag}>//</span> COMPANY OR WEBSITE
                </label>
                <input
                  id="contact-company"
                  type="text"
                  placeholder="Company name or URL"
                  className={styles.textInput}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              {/* Project Details */}
              <div className={styles.formGroup}>
                <label className={styles.fieldLabel} htmlFor="contact-scope">
                  <span className={styles.fieldLabelTag}>03 //</span> PROJECT BRIEF &amp; AMBITION
                </label>
                <textarea
                  id="contact-scope"
                  required
                  placeholder="Tell us about what you are looking to build, design, or scale..."
                  className={styles.textareaInput}
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Initiate Commission</span>
                <span>→</span>
              </button>
            </form>

            {/* Direct Studio Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.infoBlock}>
                <span className={styles.infoHeading}>DIRECT INQUIRIES</span>
                <a href="mailto:contact@13utopia.com" className={styles.directEmail}>
                  contact@13utopia.com
                </a>
                <p className={styles.faqA}>
                  For direct project commissions, studio collaborations, and press.
                </p>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoHeading}>STUDIO HUBS</span>
                <div className={styles.hubList}>
                  <div className={styles.hubItem}>
                    <span className={styles.hubCity}>Ahmedabad // Studio</span>
                    <p className={styles.faqA}>1123 Iconic Shyamal, 132 Feet Ring Rd, Ahmedabad, Gujarat 380015</p>
                  </div>
                  <div className={styles.hubItem}>
                    <span className={styles.hubCity}>Toronto // Studio</span>
                    <p className={styles.faqA}>30 Kimbercroft Ct, Markham Corners, Scarborough, ON M1S 4K9</p>
                  </div>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoHeading}>ENGAGEMENT ETHOS</span>
                <div className={styles.faqBlock}>
                  <div className={styles.faqItem}>
                    <h4 className={styles.faqQ}>How quickly do we start?</h4>
                    <p className={styles.faqA}>
                      We review every brief directly within 24 hours. If there is mutual alignment, we schedule a direct discovery session to define the creative vision, architecture, and roadmap.
                    </p>
                  </div>
                  <div className={styles.faqItem}>
                    <h4 className={styles.faqQ}>Who works on my project?</h4>
                    <p className={styles.faqA}>
                      Zero outsourcing and zero layers. You collaborate directly with the senior designers, creative technologists, and software engineers who build every asset from scratch.
                    </p>
                  </div>
                  <div className={styles.faqItem}>
                    <h4 className={styles.faqQ}>What do you deliver?</h4>
                    <p className={styles.faqA}>
                      Complete, unconditional ownership. Every line of code, design system, 3D asset, and deployment key is transferred entirely to your team.
                    </p>
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
