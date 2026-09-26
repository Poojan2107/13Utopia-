"use client";

import { useState, type FormEvent } from "react";
import { PrimaryButton } from "@/components/ui/Button";
import styles from "@/styles/connect/ProjectForm.module.css";

const OUTCOMES = [
  "Launch",
  "Grow",
  "Scale",
  "Modernize",
  "Automate",
  "Transform",
  "Something else",
] as const;

const NEEDS = ["Create", "Build", "Grow", "Strategy", "Multiple", "Not sure"] as const;

/** Interim submit via mailto until server action / CRM is wired */
const INQUIRY_MAIL = "projects@13utopia.com";

export function ProjectForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      `Outcome: ${fd.get("outcome") ?? ""}`,
      `Need: ${fd.get("need") ?? ""}`,
      `Name: ${fd.get("name") ?? ""}`,
      `Email: ${fd.get("email") ?? ""}`,
      `Company: ${fd.get("company") ?? ""}`,
      `Website: ${fd.get("website") ?? ""}`,
      `Timeline: ${fd.get("timeline") ?? ""}`,
      `Budget: ${fd.get("budget") ?? ""}`,
      "",
      String(fd.get("details") ?? ""),
    ];
    const subject = encodeURIComponent(
      `Project inquiry — ${fd.get("company") || fd.get("name") || "13 UTOPIA"}`,
    );
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${INQUIRY_MAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className={styles.success} role="status">
        Your mail client should open with the brief. If it didn’t, email{" "}
        <a href={`mailto:${INQUIRY_MAIL}`}>{INQUIRY_MAIL}</a> directly — or try
        again.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>What are you trying to make happen?</legend>
        <div className={styles.options}>
          {OUTCOMES.map((outcome) => (
            <label key={outcome} className={styles.option}>
              <input type="radio" name="outcome" value={outcome} required />
              <span>{outcome}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>What do you need?</legend>
        <div className={styles.options}>
          {NEEDS.map((need) => (
            <label key={need} className={styles.option}>
              <input type="radio" name="need" value={need} required />
              <span>{need}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.grid}>
        <label className={styles.field}>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className={styles.field}>
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label className={styles.field}>
          <span>Website</span>
          <input name="website" type="url" autoComplete="url" />
        </label>
        <label className={styles.field}>
          <span>Timeline</span>
          <input name="timeline" type="text" />
        </label>
        <label className={styles.field}>
          <span>Budget range</span>
          <input name="budget" type="text" />
        </label>
      </div>

      <label className={styles.field}>
        <span>Project details</span>
        <textarea name="details" rows={5} required />
      </label>

      <PrimaryButton type="submit">Submit</PrimaryButton>
    </form>
  );
}
