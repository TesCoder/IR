import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceActMathStrategy() {
  const title = "ACT Math Strategy (Timing + Accuracy)";
  const description =
    "Learn the highest-impact ACT Math tactics for time management, guessing strategy, and targeted practice.";

  const url = "/resources/test-prep-act-math";

  const primaryCta = {
    location: "article_related",
    text: "Book a consult",
    destination: "/free-consultation",
  };

  const articleSchema = ArticleSchema({
    title,
    description,
    author: "Ivy Ready",
    datePublished: "2026-02-07",
    dateModified: "2026-02-07",
  });

  const related = [
    {
      title: "SAT Reading Strategy (How to Improve Fast)",
      href: "/resources/test-prep-sat-reading",
      description:
        "A practical SAT Reading approach: question types, pacing rules, and a study plan to improve accuracy without burning out.",
    },
    {
      title: "Testing Accommodations (SAT/ACT) — How to Apply",
      href: "/resources/test-prep-accommodations",
      description:
        "A step-by-step guide to accommodations: documentation, timelines, approvals, and how to avoid common application mistakes.",
    },
  ];

  const handlePrimaryCtaClick = () => {
    trackCtaClick(primaryCta);
  };

  return (
    <>
      <SEOHead title={title} description={description} url={url} type="article" />
      <SchemaScript schema={articleSchema} />

      <article className="mx-auto max-w-3xl px-6 py-14 prose prose-indigo">
        <h1>{title}</h1>
        <p>
          ACT Math is less about “knowing everything” and more about{" "}
          <strong>speed, triage, and pattern recognition</strong>. A good strategy protects time,
          avoids traps, and turns mistakes into targeted drills.
        </p>

        <h2>Timing: your #1 lever</h2>
        <ul>
          <li>Don&apos;t get stuck: if you&apos;re not progressing in 30–45 seconds, skip and return.</li>
          <li>Bank points early: finish easy questions first and build confidence.</li>
          <li>Use a pacing checkpoint every 10 questions to stay on track.</li>
        </ul>

        <h2>Accuracy: reduce “careless” errors</h2>
        <ul>
          <li>Underline what the question is actually asking (units, constraints, “except”).</li>
          <li>Estimate before you compute so answers that are wildly off stand out.</li>
          <li>When in doubt, plug in numbers (especially for algebraic expressions).</li>
        </ul>

        <h2>Guessing strategy</h2>
        <ul>
          <li>Eliminate aggressively; avoid spending time “fully solving” low-value questions.</li>
          <li>Have a default guess letter only if you truly have no information.</li>
          <li>Never leave blanks — a fast guess beats a blank every time.</li>
        </ul>

        <h2>Practice plan</h2>
        <ul>
          <li>Build an error log by topic (algebra, geometry, trig, stats) and by mistake type.</li>
          <li>Drill weak topics in small sets, then retest with timed mixed sets.</li>
          <li>Review wrong answers until you can explain the trap in one sentence.</li>
        </ul>

        <hr />
        <p className="not-prose mt-8">
          <Link
            href={primaryCta.destination}
            onClick={handlePrimaryCtaClick}
            className="inline-flex rounded-2xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700"
            aria-label={primaryCta.text}
          >
            <span>{primaryCta.text}</span>
            <span aria-hidden="true"> →</span>
          </Link>
        </p>
      </article>

      <div className="mx-auto max-w-3xl px-6 pb-14">
        <RelatedArticles title="Recommended next steps" items={related} />
      </div>
    </>
  );
}

