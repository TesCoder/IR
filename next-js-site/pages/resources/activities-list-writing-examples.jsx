import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceActivitiesListWritingExamples() {
  const title = "Activities List Writing Examples (Before/After)";
  const description =
    "See clear before/after examples of activities descriptions that show initiative, impact, and specificity—without sounding inflated.";

  const url = "/resources/activities-list-writing-examples";

  const primaryCta = {
    location: "article_related",
    text: "Get application strategy help",
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
      title: "Activities List Impact Metrics (Hours, Weeks, Role)",
      href: "/resources/activities-list-impact-metrics",
      description:
        "Learn how to quantify impact (hours, weeks, leadership scope) so your activities list reads credible and high-signal.",
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
          Great activities descriptions are concrete and action-oriented. They answer:{" "}
          <strong>What did you do?</strong> <strong>How did you do it?</strong> <strong>What changed?</strong>
        </p>

        <h2>Example 1: Club member → builder</h2>
        <p><strong>Before:</strong> “Member of Robotics Club. Built robots and competed.”</p>
        <p>
          <strong>After:</strong> “Designed and tested drivetrain prototypes; led weekly build sessions for 6 teammates; improved reliability (0 mid-match failures) at 3 competitions.”
        </p>

        <h2>Example 2: Volunteer → owner</h2>
        <p><strong>Before:</strong> “Volunteered at food bank; helped families.”</p>
        <p>
          <strong>After:</strong> “Coordinated Saturday intake line; trained 10 new volunteers; created checklist that cut average wait time by ~20 minutes.”
        </p>

        <h2>Example 3: Tutor → measurable impact</h2>
        <p><strong>Before:</strong> “Tutored math to middle school students.”</p>
        <p>
          <strong>After:</strong> “Tutored 4 students weekly (Algebra); built 12-question drills per unit; students raised quiz scores from ~70% to ~90% over 8 weeks.”
        </p>

        <h2>Quick writing rules</h2>
        <ul>
          <li>Start with an action verb (built, led, organized, designed, coached).</li>
          <li>Include one metric (people, events, dollars, users, time saved).</li>
          <li>Show progression (member → lead → owner).</li>
          <li>Stay honest — credibility beats hype.</li>
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

