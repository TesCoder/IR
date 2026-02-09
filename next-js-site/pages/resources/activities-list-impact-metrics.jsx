import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceActivitiesListImpactMetrics() {
  const title = "Activities List Impact Metrics (Hours, Weeks, Role)";
  const description =
    "Learn how to quantify impact (hours, weeks, leadership scope) so your activities list reads credible and high-signal.";

  const url = "/resources/activities-list-impact-metrics";

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
      title: "Common App Activities List Brainstorm (Step-by-Step)",
      href: "/resources/activities-list-brainstorm",
      description:
        "Brainstorm strong activities list entries, pick the right 10, and avoid common pitfalls—plus how to frame roles without exaggeration.",
    },
    {
      title: "Activities List Writing Examples (Before/After)",
      href: "/resources/activities-list-writing-examples",
      description:
        "See clear before/after examples of activities descriptions that show initiative, impact, and specificity—without sounding inflated.",
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
          “Impact metrics” aren&apos;t about inflating your resume — they&apos;re about making your role
          understandable. The admissions reader has seconds per activity. Your job is to show scope
          and credibility fast.
        </p>

        <h2>The 4 metrics that matter</h2>
        <ul>
          <li>
            <strong>Role</strong>: what you actually do (not the club name)
          </li>
          <li>
            <strong>Time</strong>: hours/week and weeks/year (consistent numbers)
          </li>
          <li>
            <strong>Scope</strong>: people served, audience size, users, or teammates impacted
          </li>
          <li>
            <strong>Outcome</strong>: what changed because you were involved
          </li>
        </ul>

        <h2>How to make hours credible</h2>
        <ul>
          <li>Use averages, not best-week estimates.</li>
          <li>Separate seasonal spikes (competition season) from the baseline.</li>
          <li>If you have a job or caregiving role, be clear and consistent.</li>
        </ul>

        <h2>Leadership scope (without exaggeration)</h2>
        <ul>
          <li>What decisions did you own?</li>
          <li>What systems did you create or improve?</li>
          <li>Did you train others or scale something beyond yourself?</li>
        </ul>

        <h2>Quick examples of high-signal metrics</h2>
        <ul>
          <li>“Led 12-person team; organized 4 events; 300+ attendees.”</li>
          <li>“Built tutoring program; served 25 students weekly; improved pass rates.”</li>
          <li>“Shipped app; 1,200 users; reduced wait time by 30%.”</li>
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

