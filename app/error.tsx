"use client";

import { useEffect } from "react";
import { PrimaryButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ paddingBlock: "var(--space-section)" }}>
      <Container>
        <h1>Something went wrong.</h1>
        <p style={{ color: "var(--color-fg-muted)" }}>
          An unexpected error occurred. You can try again or return home.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <PrimaryButton type="button" onClick={reset}>
            Try again
          </PrimaryButton>
          <PrimaryButton href="/">Home</PrimaryButton>
        </div>
      </Container>
    </div>
  );
}
