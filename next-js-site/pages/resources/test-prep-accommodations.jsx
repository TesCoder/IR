import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceTestingAccommodations() {
  const title = "Testing Accommodations (SAT/ACT) — How to Apply";
  const description =
    "A step-by-step guide to accommodations: documentation, timelines, approvals, and how to avoid common application mistakes.";

  const url = "/resources/test-prep-accommodations";

  const primaryCta = {
    location: "article_related",
    text: "Get accommodations guidance",
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
      title: "ACT Math Strategy (Timing + Accuracy)",
      href: "/resources/test-prep-act-math",
      description:
        "Learn the highest-impact ACT Math tactics for time management, guessing strategy, and targeted practice.",
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
          Testing accommodations can be a major support — but the process is paperwork-heavy and
          timeline-sensitive. This guide breaks down what to prepare, when to apply, and the most
          common reasons applications get delayed.
        </p>

        <h2>Step 1: Know what accommodations you&apos;re requesting</h2>
        <ul>
          <li>Extended time (commonly 50% or 100%)</li>
          <li>Stop-the-clock breaks</li>
          <li>Small group / separate room</li>
          <li>Assistive technology or alternate formats</li>
        </ul>

        <h2>Step 2: Gather documentation early</h2>
        <ul>
          <li>Current evaluation from a qualified professional (as required)</li>
          <li>School documentation (IEP/504, teacher notes, history of support)</li>
          <li>Evidence of consistent need — not just last-minute requests</li>
        </ul>

        <h2>Step 3: Build a timeline (don&apos;t wait for junior spring)</h2>
        <ul>
          <li>Plan 6–10+ weeks for evaluations, school processing, and reviews.</li>
          <li>Apply before you pick an official test date whenever possible.</li>
          <li>Leave buffer for requests for additional documentation.</li>
        </ul>

        <h2>Common mistakes to avoid</h2>
        <ul>
          <li>Submitting incomplete documentation</li>
          <li>Requesting accommodations that don&apos;t match the documented need</li>
          <li>Missing school deadlines or assuming “someone else” handled the forms</li>
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

