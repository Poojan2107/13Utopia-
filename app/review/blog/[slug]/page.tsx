import { notFound } from "next/navigation";
import Link from "next/link";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import { SiteFooter } from "@/components/layout";
import { REVIEW_BLOG_POSTS } from "@/data/reviewContent";
import styles from "@/styles/blog/BlogPost.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return REVIEW_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ReviewBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = REVIEW_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <SmoothScrollProvider>
      <AmbientField />
      <ReviewHeader />

      <main className={styles.articlePage} style={{ paddingTop: "140px" }}>
        <Link href="/review/blog" className={styles.backLink}>
          <span>← Back to Review Articles</span>
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

          {/* Bottom Article Staging Banner */}
          <div className={styles.articleFooterCta}>
            <h3 className={styles.ctaHeading}>
              Content Review Note
            </h3>
            <p className={styles.ctaSub}>
              This article was adapted directly from 13utopia.com content. All spammy keyword stuffing, marketing clichés, and AI slop have been eliminated in favor of clean technical authority.
            </p>
            <Link href="/review/blog" className={styles.ctaButton}>
              <span>Return to Review Index</span>
              <span>→</span>
            </Link>
          </div>
        </article>
      </main>

      <SiteFooter />
    </SmoothScrollProvider>
  );
}
