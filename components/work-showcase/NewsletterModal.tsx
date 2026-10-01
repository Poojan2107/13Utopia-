"use client";

import React, { useState, useEffect } from "react";
import styles from "./WorkShowcase.module.css";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.newsletterCard} role="dialog" aria-modal="true">
        <p className={styles.newsletterText}>
          An occasional dispatch from 13 UTOPIA with insights on design engineering, WebGL craft,
          and building award-winning digital experiences.
        </p>

        {submitted ? (
          <p style={{ color: "rgba(255, 255, 255, 0.7)", padding: "1rem 0" }}>
            Thank you for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.newsletterForm}>
            <div className={styles.inputWrap}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className={styles.inputField}
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Join
            </button>
          </form>
        )}

        <div style={{ paddingTop: "1rem" }}>
          <button onClick={onClose} className={styles.closeBtn}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
