"use client";

import Link from "next/link";
import { GoldSilkCurtain } from "./GoldSilkCurtain";
import { TransparentBustVideo } from "./TransparentBustVideo";
import styles from "@/styles/home/HomeHero.module.css";

/**
 * HomeHero — your dual-flank build restored.
 * Gold silk (1 crown / 3 cascade) + metallic bust + couture type stacks + floor rail.
 */
export function HomeHero() {
  return (
    <section className={styles.hero} aria-label="13 UTOPIA">
      <div className={styles.media} aria-hidden="true">
        <GoldSilkCurtain />
        <div className={styles.videoWrapper}>
          <TransparentBustVideo />
        </div>
      </div>

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.stage}>
        <aside className={`${styles.left} ${styles.flank}`}>
          <div className={`${styles.stack} ${styles.reveal} ${styles.revealLeft}`}>
            <p className={styles.eyebrow}>
              <span>CREATE</span>
              <span className={styles.dot} aria-hidden="true">
                ·
              </span>
              <span>BUILD</span>
              <span className={styles.dot} aria-hidden="true">
                ·
              </span>
              <span>GROW</span>
            </p>

            <span className={styles.rule} aria-hidden="true" />

            <div className={styles.statement}>
              <span className={styles.be}>BE</span>
              <h1 className={styles.unreal}>
                UNREAL<span className={styles.period}>.</span>
              </h1>
            </div>

            <span className={styles.rule} aria-hidden="true" />

            <p className={styles.descriptor}>
              A creative technology and growth company
              <br />
              for ambitious businesses.
            </p>
          </div>
        </aside>

        <aside className={`${styles.right} ${styles.flank}`}>
          <div
            className={`${styles.stack} ${styles.stackRight} ${styles.reveal} ${styles.revealRight}`}
          >
            <p className={`${styles.eyebrow} ${styles.eyebrowRight}`}>MANIFESTO</p>

            <span className={`${styles.rule} ${styles.ruleRight}`} aria-hidden="true" />

            <div className={`${styles.statement} ${styles.statementRight}`}>
              <span className={`${styles.be} ${styles.beGold}`}>BE</span>
              <p className={styles.unreasonable}>
                UNREASONABLE<span className={styles.periodGold}>.</span>
              </p>
            </div>

            <span className={`${styles.rule} ${styles.ruleRight}`} aria-hidden="true" />

            <p className={`${styles.descriptor} ${styles.descriptorRight}`}>
              We question the obvious, then build
              <br />
              what others couldn&rsquo;t imagine.
            </p>
          </div>
        </aside>

        <div className={`${styles.floor} ${styles.reveal} ${styles.revealFloor}`}>
          <p className={styles.brandWhisper}>13 UTOPIA</p>

          <a
            href="#worldview"
            className={styles.scrollCue}
            aria-label="Scroll to explore"
          >
            <span className={styles.scrollLine} aria-hidden="true" />
          </a>

          <div className={styles.floorActions}>
            <Link href="/work" className={styles.floorCtaSecondary} data-magnetic>
              Explore Work
            </Link>
            <Link
              href="/connect/start-a-project"
              className={styles.floorCta}
              data-magnetic
            >
              Start a Project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
