import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceCampusVisitQuestions() {
  const title = "Campus Visit Questions (What to Ask + What to Notice)";
  const description =
    "Ask better campus visit questions—academics, advising, internships, housing—and learn what signals matter when you’re choosing between similar schools.";

  const url = "/resources/college-list-campus-visit-questions";

  const primaryCta = {
    location: "article_related",
    text: "See support packages",
    destination: "/services/support-packages",
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
      title: "Safety, Match, Reach: Build a Balanced College List",
      href: "/resources/college-list-safety-match-reach",
      description:
        "Build a balanced list using admissions data, academic fit, and financial reality—plus how to avoid “all reaches” without giving up ambition.",
    },
    {
      title: "How to Research Colleges (A Simple Scoring Template)",
      href: "/resources/college-list-research-template",
      description:
        "A practical research workflow: programs, outcomes, culture, and cost—plus a simple scoring template to compare schools apples-to-apples.",
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
          Campus visits are most useful when you compare schools that feel similar on paper. The
          goal is to notice “day-to-day reality” — not just the highlight reel.
        </p>

        <h2>Questions to ask (and why they matter)</h2>
        <ul>
          <li>
            <strong>Academics</strong>: “How easy is it to take classes outside my major?” (access
            matters)
          </li>
          <li>
            <strong>Advising</strong>: “How are students supported in finding internships/research?”
          </li>
          <li>
            <strong>Career outcomes</strong>: “What does career support look like in practice?”
          </li>
          <li>
            <strong>Community</strong>: “What do students do on a typical weekend?”
          </li>
          <li>
            <strong>Housing</strong>: “How does housing work over four years?”
          </li>
        </ul>

        <h2>What to notice (signals, not vibes)</h2>
        <ul>
          <li>Do students seem engaged in classes or just “getting through”?</li>
          <li>Is it easy to imagine your routine (food, study space, social life)?</li>
          <li>How accessible are faculty and resources?</li>
          <li>Is there a clear support structure for your interests?</li>
        </ul>

        <h2>Questions for students (best source)</h2>
        <ul>
          <li>“What surprised you about being here?”</li>
          <li>“What do you wish you&apos;d known before enrolling?”</li>
          <li>“How competitive are clubs/research opportunities?”</li>
        </ul>

        <h2>Quick post-visit notes (do this immediately)</h2>
        <ul>
          <li>3 things you liked (specific)</li>
          <li>2 concerns you need to validate</li>
          <li>1 sentence: “This school fits me because…”</li>
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

