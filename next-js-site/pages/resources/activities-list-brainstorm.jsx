import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceActivitiesListBrainstorm() {
  const title = "Common App Activities List Brainstorm (Step-by-Step)";
  const description =
    "Brainstorm strong activities list entries, pick the right 10, and avoid common pitfalls—plus how to frame roles without exaggeration.";

  const url = "/resources/activities-list-brainstorm";

  const primaryCta = {
    location: "article_related",
    text: "Get activities list feedback",
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
      title: "Activities List Impact Metrics (Hours, Weeks, Role)",
      href: "/resources/activities-list-impact-metrics",
      description:
        "Learn how to quantify impact (hours, weeks, leadership scope) so your activities list reads credible and high-signal.",
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
          A strong activities list is curated: it highlights your highest-signal commitments and
          makes your role and impact easy to understand. Use this workflow to generate a complete
          brainstorm, then select the right 10.
        </p>

        <h2>Step 1: Brainstorm everything (don&apos;t edit yet)</h2>
        <ul>
          <li>Clubs, sports, arts, competitions</li>
          <li>Work, internships, family responsibilities</li>
          <li>Community service (especially ongoing roles)</li>
          <li>Independent projects (apps, writing, research, startups)</li>
          <li>Summer programs and academic enrichment</li>
        </ul>

        <h2>Step 2: Identify your top signals</h2>
        <ul>
          <li>
            <strong>Leadership</strong>: responsibility, training others, owning outcomes
          </li>
          <li>
            <strong>Longevity</strong>: sustained effort over time (not one-off events)
          </li>
          <li>
            <strong>Impact</strong>: measurable results, people served, products shipped
          </li>
          <li>
            <strong>Direction</strong>: how the set of activities tells a coherent story
          </li>
        </ul>

        <h2>Step 3: Pick the right 10</h2>
        <ul>
          <li>Start with your 3–4 strongest commitments.</li>
          <li>Add 3–4 that reinforce your interests/values.</li>
          <li>Use remaining slots for breadth or personality — but keep them meaningful.</li>
        </ul>

        <h2>Common pitfalls</h2>
        <ul>
          <li>Listing too many “memberships” with no responsibility</li>
          <li>Inflating hours or titles (credibility matters)</li>
          <li>Missing the “what I did” details (actions beat labels)</li>
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

