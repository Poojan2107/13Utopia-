import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/Button";
import styles from "@/styles/app/not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Container>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>This page does not exist.</h1>
        <p className={styles.lead}>
          The route may have moved — or it was never part of this version of 13 UTOPIA.
        </p>
        <div className={styles.actions}>
          <PrimaryButton href="/">Return home</PrimaryButton>
          <Link href="/connect/start-a-project" className={styles.link}>
            Start a Project
          </Link>
        </div>
      </Container>
    </div>
  );
}
