import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceCollegeListResearchTemplate() {
  const title = "How to Research Colleges (A Simple Scoring Template)";
  const description =
    "A practical research workflow: programs, outcomes, culture, and cost—plus a simple scoring template to compare schools apples-to-apples.";

  const url = "/resources/college-list-research-template";

  const primaryCta = {
    location: "article_related",
    text: "Get list-building help",
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
      title: "Safety, Match, Reach: Build a Balanced College List",
      href: "/resources/college-list-safety-match-reach",
      description:
        "Build a balanced list using admissions data, academic fit, and financial reality—plus how to avoid “all reaches” without giving up ambition.",
    },
    {
      title: "Campus Visit Questions (What to Ask + What to Notice)",
      href: "/resources/college-list-campus-visit-questions",
      description:
        "Ask better campus visit questions—academics, advising, internships, housing—and learn what signals matter when you’re choosing between similar schools.",
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
          College research gets overwhelming fast because you&apos;re comparing dozens of variables.
          This template turns “vibes” into a structured comparison — without pretending the decision
          is purely mathematical.
        </p>

        <h2>Step 1: Define your non-negotiables</h2>
        <ul>
          <li>Budget / expected net cost range</li>
          <li>Geography and campus setting</li>
          <li>Size and learning environment</li>
          <li>Major/program needs (or flexibility if undecided)</li>
        </ul>

        <h2>Step 2: Score each school on 6 dimensions (1–5)</h2>
        <ol>
          <li>
            <strong>Academics</strong>: program strength, course options, faculty access
          </li>
          <li>
            <strong>Outcomes</strong>: internships, career support, grad placement
          </li>
          <li>
            <strong>Culture</strong>: community feel, student vibe, values alignment
          </li>
          <li>
            <strong>Cost</strong>: net price, aid likelihood, renewal rules
          </li>
          <li>
            <strong>Opportunity</strong>: research, clubs, leadership access, unique programs
          </li>
          <li>
            <strong>Fit</strong>: would you thrive here day-to-day?
          </li>
        </ol>

        <h2>Step 3: Add 2 notes that matter more than the score</h2>
        <ul>
          <li>One thing that excites you (specific)</li>
          <li>One risk you need to validate (also specific)</li>
        </ul>

        <h2>Step 4: Compare “similar” schools</h2>
        <p>
          The scoring template is most useful when comparing schools that feel similar. If two
          schools both score high, use your notes to decide what you want your daily life to feel
          like.
        </p>

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

