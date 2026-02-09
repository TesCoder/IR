import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceSatReadingStrategy() {
  const title = "SAT Reading Strategy (How to Improve Fast)";
  const description =
    "A practical SAT Reading approach: question types, pacing rules, and a study plan to improve accuracy without burning out.";

  const url = "/resources/test-prep-sat-reading";

  const primaryCta = {
    location: "article_related",
    text: "Build a testing plan",
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
      title: "ACT Math Strategy (Timing + Accuracy)",
      href: "/resources/test-prep-act-math",
      description:
        "Learn the highest-impact ACT Math tactics for time management, guessing strategy, and targeted practice.",
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
          SAT Reading rewards a repeatable process: read with a purpose, predict answers, and
          prevent time leaks. Use the framework below to improve accuracy quickly — without endless
          “more practice.”
        </p>

        <h2>Start with the 3 biggest score drains</h2>
        <ul>
          <li>
            <strong>Pacing</strong>: spending 3+ minutes on one “hard” question.
          </li>
          <li>
            <strong>Vague justification</strong>: choosing answers without a clear line reference.
          </li>
          <li>
            <strong>Rereading</strong>: reading the passage multiple times because you didn&apos;t
            read for structure the first time.
          </li>
        </ul>

        <h2>A reliable passage method</h2>
        <ol>
          <li>Read for structure (purpose, shifts, tone) — not every detail.</li>
          <li>For each question, find the exact evidence before locking your answer.</li>
          <li>If you&apos;re stuck, eliminate, guess strategically, and move on.</li>
        </ol>

        <h2>Pacing rules that actually work</h2>
        <ul>
          <li>Set a hard “move on” timer (e.g., 60–75 seconds per question).</li>
          <li>Circle and skip time traps; return only if you have time.</li>
          <li>Finish the easiest questions first to bank points.</li>
        </ul>

        <h2>2-week improvement plan</h2>
        <ul>
          <li>Day 1–2: diagnostic + error log (why you missed each question)</li>
          <li>Day 3–10: targeted drills by question type + timed mini-sets</li>
          <li>Day 11–14: full section practice + review patterns in your misses</li>
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

