import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceRecommendationBragSheet() {
  const title = "Brag Sheet for Recommendation Letters (Student + Parent Templates)";
  const description =
    "What to include in a brag sheet, how to make it easy to write specifics, and sample prompts for students and parents.";

  const url = "/resources/recommendation-letter-brag-sheet";

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
      title: "How to Ask a Teacher for a Letter of Recommendation",
      href: "/resources/recommendation-letter-teacher-ask",
      description:
        "A step-by-step ask script, ideal timing, and what to share so teachers can write specific, credible letters that reinforce your application story.",
    },
    {
      title: "Counselor Recommendation Letter: What Matters (and How to Help)",
      href: "/resources/recommendation-letter-counselor",
      description:
        "Understand what counselors emphasize, how to provide context without overstepping, and how school process differences affect your timeline.",
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
          A brag sheet is a gift to your recommender: it helps them write with specific examples
          and reduces guesswork. The best brag sheets are short, concrete, and story-driven.
        </p>

        <h2>What to include (student version)</h2>
        <ul>
          <li>1–2 sentence “throughline” (what you want colleges to understand about you)</li>
          <li>Top activities (role, time, impact)</li>
          <li>2–3 highlights (projects, leadership, wins) with specifics</li>
          <li>1 challenge you overcame (focus on growth)</li>
          <li>What you hope to study / explore (tentative is fine)</li>
        </ul>

        <h2>Prompts that generate good details</h2>
        <ul>
          <li>“A time I changed my mind after feedback…”</li>
          <li>“A project I&apos;m proud of — and why…”</li>
          <li>“How I contribute in groups…”</li>
          <li>“What I do when something is hard…”</li>
        </ul>

        <h2>Parent brag sheet (optional)</h2>
        <p>
          Parents can add context (family responsibilities, growth over time), but they should avoid
          writing a “sales pitch.” Keep it factual and supportive.
        </p>

        <h2>How to hand it over</h2>
        <ul>
          <li>Share early (weeks before deadlines).</li>
          <li>Include a short thank-you note and a clear deadline list.</li>
          <li>Offer to answer questions — then don&apos;t pester.</li>
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

