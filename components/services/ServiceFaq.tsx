"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import type { ServiceFaq as FaqItem } from "@/data/services";
import { EASE } from "@/components/services/svcMotion";
import styles from "@/styles/services/ServiceFaq.module.css";

export function ServiceFaq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={styles.list}>
      {items.map((item, idx) => {
        const isOpen = open === idx;
        const panelId = `${baseId}-panel-${idx}`;
        const btnId = `${baseId}-btn-${idx}`;

        return (
          <motion.div
            key={item.q}
            className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: idx * 0.05, ease: EASE }}
          >
            <button
              type="button"
              id={btnId}
              className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ""}`}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : idx)}
              data-cursor="hover"
            >
              <span className={styles.q}>{item.q}</span>
              <span className={styles.mark} aria-hidden="true">
                <span className={styles.markH} />
                <span className={`${styles.markV} ${isOpen ? styles.markVOpen : ""}`} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={styles.panel}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: EASE }}
                >
                  <p className={styles.a}>{item.a}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
