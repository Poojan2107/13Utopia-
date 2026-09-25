import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { getCapabilities, getCapabilityCategories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import styles from "@/styles/app/capabilities/page.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Capabilities | 13 UTOPIA",
    description:
      "What 13 UTOPIA can do — Create, Build, Grow, and Strategy & Consulting.",
  },
  path: "/capabilities",
});

export default function CapabilitiesHubPage() {
  const categories = getCapabilityCategories();
  const capabilities = getCapabilities();

  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="What can 13 UTOPIA do?"
        description="The company lens — Create, Build, Grow, connected by Strategy & Consulting."
      />
      <Container className={styles.body}>
        <ul className={styles.worlds}>
          {categories.map((cat) => (
            <li key={cat.slug} className={styles.world}>
              <Link href={`/capabilities/${cat.slug}`} className={styles.worldLink}>
                <h2>{cat.title}</h2>
                <p>{cat.description}</p>
              </Link>
            </li>
          ))}
        </ul>
        <h2 className={styles.subhead}>Capability groups</h2>
        <ul className={styles.groups}>
          {capabilities.map((cap) => (
            <li key={cap.slug}>
              <Link href={`/capabilities/${cap.slug}`}>{cap.title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
