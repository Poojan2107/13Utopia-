"use client";

import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/layout";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import styles from "@/styles/contact/Contact.module.css";

const SERVICES = [
  "Brand Strategy & Design",
  "Web & Mobile Development",
  "AI & Automation",
  "SEO & Growth",
  "Full-Stack Build",
] as const;

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Project Inquiry: ${selectedService} — ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Company: ${company || "N/A"}\n` +
      `Service: ${selectedService}\n\n` +
      `Message:\n${message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:contact@13utopia.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setIsSent(true);
    }, 300);
  };

  return (
    <SmoothScrollProvider>
      <AmbientField showEmblem={false} />
      <SiteHeader />

      <main className={styles.contactPage} id="main-content">
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <span className={styles.eyebrow}>CONTACT</span>
            <h1 className={styles.title}>START A PROJECT.</h1>
            <p className={styles.subtitle}>
              Tell us about your project or email us directly at{" "}
              <a href="mailto:contact@13utopia.com" className={styles.emailLink}>
                contact@13utopia.com
              </a>
            </p>
          </header>

          {/* Form */}
          {isSent ? (
            <div className={styles.successBox}>
              <h2 className={styles.successTitle}>MESSAGE SENT.</h2>
              <p className={styles.successText}>
                Thank you for reaching out. We will get back to you shortly.
              </p>
              <button
                type="button"
                className={styles.resetBtn}
                onClick={() => setIsSent(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              {/* Service Selection */}
              <div className={styles.fieldGroup}>
                <label className={styles.label}>WHAT DO YOU NEED?</label>
                <div className={styles.servicePills}>
                  {SERVICES.map((service) => (
                    <button
                      key={service}
                      type="button"
                      className={`${styles.pill} ${
                        selectedService === service ? styles.pillActive : ""
                      }`}
                      onClick={() => setSelectedService(service)}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className={styles.gridTwo}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="name">
                    YOUR NAME *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="email">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Company */}
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="company">
                  COMPANY / WEBSITE (OPTIONAL)
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="company.com"
                  className={styles.input}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              {/* Message */}
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="message">
                  ABOUT THE PROJECT *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us about your goals, timeline, and what you're looking to build..."
                  className={styles.textarea}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Submit */}
              <div className={styles.actionRow}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  <span>{isSubmitting ? "SENDING..." : "SEND INQUIRY"}</span>
                  <span className={styles.arrow}>→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <SiteFooter />
    </SmoothScrollProvider>
  );
}
