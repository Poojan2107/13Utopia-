"use client";

import { useState, type FormEvent } from "react";
import styles from "@/styles/connect/ProjectForm.module.css";

const OUTCOMES = [
  {
    id: "launch",
    title: "Launch",
    desc: "Bring something completely new into the world — brand, product, and launch campaign.",
  },
  {
    id: "grow",
    title: "Grow & Scale",
    desc: "Accelerate revenue and traffic with high-converting web experiences and technical SEO.",
  },
  {
    id: "modernize",
    title: "Modernize",
    desc: "Replace an outdated web platform with cutting-edge Next.js, motion craft, and modern systems.",
  },
  {
    id: "automate",
    title: "Automate & AI",
    desc: "Integrate custom AI workflows, headless APIs, and intelligent data systems.",
  },
  {
    id: "transform",
    title: "Full Transformation",
    desc: "Complete overhaul across Brand, Technology, Strategy, and Go-to-Market.",
  },
] as const;

const SERVICES = [
  "Brand Identity & Strategy",
  "Next.js Web Development",
  "Technical SEO & Search Dominance",
  "UI/UX Experience Design",
  "E-Commerce Architecture",
  "AI & Automation Systems",
  "Motion & 3D / CGI Craft",
  "Performance & Growth Marketing",
] as const;

const TIMELINES = [
  "Immediate (< 1 month)",
  "1 - 3 months",
  "3 - 6 months",
  "Flexible / Long-term",
] as const;

const BUDGETS = [
  "$15,000 – $30,000",
  "$30,000 – $75,000",
  "$75,000 – $150,000",
  "$150,000+",
] as const;

const INQUIRY_MAIL = "projects@13utopia.com";

export function ProjectForm() {
  const [step, setStep] = useState(1);
  const [outcome, setOutcome] = useState<string>("launch");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Brand Identity & Strategy",
    "Next.js Web Development",
  ]);
  const [timeline, setTimeline] = useState<string>("1 - 3 months");
  const [budget, setBudget] = useState<string>("$30,000 – $75,000");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);

    const outcomeTitle =
      OUTCOMES.find((o) => o.id === outcome)?.title || outcome;
    const bodyText = [
      `13 UTOPIA PROJECT BRIEF`,
      `------------------------`,
      `Outcome: ${outcomeTitle}`,
      `Services: ${selectedServices.join(", ")}`,
      `Timeline: ${timeline}`,
      `Investment Scope: ${budget}`,
      `Client Name: ${formData.name}`,
      `Work Email: ${formData.email}`,
      `Company: ${formData.company || "N/A"}`,
      `Website: ${formData.website || "N/A"}`,
      ``,
      `Project Details & Ambition:`,
      formData.details || "No additional notes provided.",
    ].join("\n");

    const subject = encodeURIComponent(
      `Project Brief: ${formData.company || formData.name} × 13 UTOPIA`,
    );
    const body = encodeURIComponent(bodyText);

    // Trigger email client in background without redirecting page
    const mailto = `mailto:${INQUIRY_MAIL}?subject=${subject}&body=${body}`;
    const a = document.createElement("a");
    a.href = mailto;
    a.click();
  }

  function copyBrief() {
    const outcomeTitle =
      OUTCOMES.find((o) => o.id === outcome)?.title || outcome;
    const text = [
      `13 UTOPIA PROJECT BRIEF`,
      `Outcome: ${outcomeTitle}`,
      `Services: ${selectedServices.join(", ")}`,
      `Timeline: ${timeline}`,
      `Investment: ${budget}`,
      `Client: ${formData.name} (${formData.email})`,
      `Company: ${formData.company}`,
      `Details: ${formData.details}`,
    ].join("\n");

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  if (submitted) {
    const outcomeTitle =
      OUTCOMES.find((o) => o.id === outcome)?.title || outcome;
    return (
      <div className={styles.container}>
        <div className={styles.successWrap}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={styles.successHeading}>Brief Transmitted</h2>
          <p className={styles.successLead}>
            Thank you, {formData.name || "partner"}. Your project brief has been
            compiled for our leadership team. We review submissions within 24
            business hours.
          </p>

          <div className={styles.summaryBox}>
            <p className={styles.summaryTitle}>Configured Brief Summary</p>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Outcome</span>
              <span className={styles.summaryVal}>{outcomeTitle}</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Timeline</span>
              <span className={styles.summaryVal}>{timeline}</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Scope</span>
              <span className={styles.summaryVal}>{budget}</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Services</span>
              <span className={styles.summaryVal}>
                {selectedServices.length} Selected
              </span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "2rem" }}>
            <button
              type="button"
              onClick={copyBrief}
              className={styles.nextBtn}
              style={{ background: "#222222", color: "#f3f1ea", border: "1px solid rgba(243, 241, 234, 0.15)" }}
            >
              {copied ? "Copied to Clipboard!" : "Copy Formatted Brief"}
            </button>
            <a
              href={`mailto:${INQUIRY_MAIL}?subject=Discovery Call Scheduling — ${formData.company || formData.name}`}
              className={styles.nextBtn}
            >
              Email Directly →
            </a>
          </div>

          <p className={styles.directEmail}>
            Need immediate executive advisory? Call our Toronto studio at{" "}
            <a href="tel:+14376039004">+1 (437) 603-9004</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Step Header */}
      <div className={styles.stepBar}>
        <div className={styles.stepIndicator}>
          {[1, 2, 3, 4].map((s) => (
            <span
              key={s}
              className={`${styles.stepDot} ${
                step === s
                  ? styles.stepDotActive
                  : step > s
                  ? styles.stepDotCompleted
                  : ""
              }`}
            >
              {step > s ? "✓" : `0${s}`}
            </span>
          ))}
        </div>
        <span className={styles.stepCounter}>STEP 0{step} OF 04</span>
      </div>

      <form onSubmit={step === 4 ? handleSubmit : (e) => e.preventDefault()}>
        {/* Step 1: Outcome */}
        {step === 1 ? (
          <div>
            <p className={styles.stepTitle}>Outcome & Purpose</p>
            <h2 className={styles.stepHeading}>
              What are you trying to make happen?
            </h2>
            <p className={styles.stepDesc}>
              Select the primary commercial and strategic goal for your business.
            </p>

            <div className={styles.cardsGrid}>
              {OUTCOMES.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setOutcome(item.id)}
                  className={`${styles.cardOption} ${
                    outcome === item.id ? styles.cardOptionSelected : ""
                  }`}
                >
                  <span className={styles.cardOptionTitle}>{item.title}</span>
                  <span className={styles.cardOptionDesc}>{item.desc}</span>
                </div>
              ))}
            </div>

            <div className={styles.actionsBar}>
              <div />
              <button
                type="button"
                onClick={() => setStep(2)}
                className={styles.nextBtn}
              >
                Continue to Disciplines →
              </button>
            </div>
          </div>
        ) : null}

        {/* Step 2: Practice & Services */}
        {step === 2 ? (
          <div>
            <p className={styles.stepTitle}>Discipline Requirements</p>
            <h2 className={styles.stepHeading}>
              Which practices does the work touch?
            </h2>
            <p className={styles.stepDesc}>
              Select all capabilities required (choose multiple).
            </p>

            <div className={styles.tagsGrid}>
              {SERVICES.map((service) => {
                const isSelected = selectedServices.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`${styles.tagOption} ${
                      isSelected ? styles.tagOptionSelected : ""
                    }`}
                  >
                    {isSelected ? "✓ " : "+ "}
                    {service}
                  </button>
                );
              })}
            </div>

            <div className={styles.actionsBar}>
              <button
                type="button"
                onClick={() => setStep(1)}
                className={styles.backBtn}
              >
                ← Back
              </button>
              <button
                type="button"
                disabled={selectedServices.length === 0}
                onClick={() => setStep(3)}
                className={styles.nextBtn}
              >
                Continue to Scope & Horizon →
              </button>
            </div>
          </div>
        ) : null}

        {/* Step 3: Timeline & Budget Scope */}
        {step === 3 ? (
          <div>
            <p className={styles.stepTitle}>Scope & Horizon</p>
            <h2 className={styles.stepHeading}>
              Expected timeline & investment bracket
            </h2>
            <p className={styles.stepDesc}>
              Helps us calibrate practice capacity and resource allocation.
            </p>

            <label className={styles.label} style={{ marginBottom: "1.5rem" }}>
              <span>Target Launch Window</span>
              <div className={styles.tagsGrid} style={{ marginTop: "0.5rem" }}>
                {TIMELINES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`${styles.tagOption} ${
                      timeline === t ? styles.tagOptionSelected : ""
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </label>

            <label className={styles.label} style={{ marginBottom: "2.5rem" }}>
              <span>Anticipated Capital Allocation</span>
              <div className={styles.tagsGrid} style={{ marginTop: "0.5rem" }}>
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`${styles.tagOption} ${
                      budget === b ? styles.tagOptionSelected : ""
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </label>

            <div className={styles.actionsBar}>
              <button
                type="button"
                onClick={() => setStep(2)}
                className={styles.backBtn}
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className={styles.nextBtn}
              >
                Continue to Details →
              </button>
            </div>
          </div>
        ) : null}

        {/* Step 4: Contact & Project Details */}
        {step === 4 ? (
          <div>
            <p className={styles.stepTitle}>Partner Details</p>
            <h2 className={styles.stepHeading}>
              Tell us about you and the challenge
            </h2>
            <p className={styles.stepDesc}>
              We maintain strict non-disclosure across all incoming inquiries.
            </p>

            <div className={styles.inputGrid}>
              <label className={styles.label}>
                <span>Your Name *</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Julian Hayes"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                <span>Work Email *</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="e.g. julian@brand.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                <span>Company or Project Name</span>
                <input
                  name="company"
                  type="text"
                  placeholder="e.g. Apex Dynamics"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                <span>Current Website URL</span>
                <input
                  name="website"
                  type="url"
                  placeholder="https://"
                  value={formData.website}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </label>

              <label className={`${styles.label} ${styles.fieldFull}`}>
                <span>Project Ambition & Constraints *</span>
                <textarea
                  name="details"
                  rows={4}
                  required
                  placeholder="Describe what you want to achieve, any known bottlenecks, and what success looks like on day one..."
                  value={formData.details}
                  onChange={handleInputChange}
                  className={styles.textarea}
                />
              </label>
            </div>

            <div className={styles.actionsBar}>
              <button
                type="button"
                onClick={() => setStep(3)}
                className={styles.backBtn}
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={!formData.name || !formData.email || !formData.details}
                className={styles.nextBtn}
              >
                Transmit Project Brief ↗
              </button>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
}
