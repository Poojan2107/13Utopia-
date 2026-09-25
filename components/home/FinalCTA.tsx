import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import styles from "@/styles/home/FinalCTA.module.css";

export function FinalCTA() {
  return (
    <Section ariaLabelledBy="final-cta-title" className={styles.wrap}>
      <Container className={styles.inner}>
        <p className={styles.eyebrow}>Next step</p>
        <h2 id="final-cta-title" className={styles.title}>
          What are you trying to make happen?
        </h2>
        <p className={styles.lead}>
          Tell us about the problem. We&apos;ll help determine what should be created,
          built, and grown.
        </p>
        <div className={styles.actions}>
          <Link href="/connect/start-a-project" className={styles.primary}>
            Start a Project
          </Link>
          <Link href="/connect/discovery" className={styles.secondary}>
            Schedule a Discovery
          </Link>
        </div>
      </Container>
    </Section>
  );
}
