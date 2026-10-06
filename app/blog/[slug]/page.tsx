import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/layout";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import { BLOG_POSTS } from "@/data/blog";
import styles from "@/styles/blog/BlogPost.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <SmoothScrollProvider>
      <AmbientField />
      <SiteHeader />

      <main className={styles.articlePage}>
        <Link href="/blog" className={styles.backLink}>
          <span>← Back to All Perspectives</span>
        </Link>

        <header className={styles.articleHeader}>
          <div className={styles.metaRow}>
            <span className={styles.categoryTag}>{post.category}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.authorLockup}>
            <div className={styles.authorMeta}>
              <span className={styles.authorName}>{post.author.name}</span>
              <span className={styles.authorRole}>{post.author.role}</span>
            </div>
          </div>

          {post.image && (
            <div className={styles.heroVisualContainer}>
              <img
                src={post.image}
                alt={post.title}
                className={styles.heroVisualImage}
              />
              <div className={styles.heroVisualScrim} />
            </div>
          )}
        </header>

        <article className={styles.articleBody}>
          <p className={styles.leadParagraph}>{post.content.lead}</p>

          {post.content.sections.map((sec, idx) => (
            <div key={idx} className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>{sec.heading}</h2>

              {sec.body.map((p, pIdx) => (
                <p key={pIdx} className={styles.paragraph}>
                  {p}
                </p>
              ))}

              {sec.highlight && (
                <div className={styles.highlightQuote}>
                  <p className={styles.quoteText}>{sec.highlight}</p>
                </div>
              )}
            </div>
          ))}

          {/* Bottom Article CTA */}
          <div className={styles.articleFooterCta}>
            <h3 className={styles.ctaHeading}>
              Engineering or Brand Challenges?
            </h3>
            <p className={styles.ctaSub}>
              We partner with ambitious founders and enterprise engineering teams to build sovereign systems, custom applications, and compounding growth engines.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              <span>Initiate a Commission</span>
              <span>→</span>
            </Link>
          </div>
        </article>
      </main>

      <SiteFooter />
    </SmoothScrollProvider>
  );
}
