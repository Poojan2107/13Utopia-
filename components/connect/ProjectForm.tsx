"use client";

import { useState } from "react";
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

export function ProjectForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Backend deferred — markup + client validation only
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className={styles.success} role="status">
        Form received locally. Submission backend: [CONTENT NEEDED] — no data was sent to a
        server.
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
