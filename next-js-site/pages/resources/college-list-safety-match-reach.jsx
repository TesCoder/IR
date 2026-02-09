import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceCollegeListSafetyMatchReach() {
  const title = "Safety, Match, Reach: Build a Balanced College List";
  const description =
    "Build a balanced list using admissions data, academic fit, and financial reality—plus how to avoid “all reaches” without giving up ambition.";

  const url = "/resources/college-list-safety-match-reach";

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
      title: "How to Research Colleges (A Simple Scoring Template)",
      href: "/resources/college-list-research-template",
      description:
        "A practical research workflow: programs, outcomes, culture, and cost—plus a simple scoring template to compare schools apples-to-apples.",
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
          A “balanced list” isn&apos;t a vibe — it&apos;s risk management. You want ambition and upside, but
          you also want options you&apos;d genuinely attend at a cost your family can handle.
        </p>

        <h2>What safety / match / reach actually means</h2>
        <ul>
          <li>
            <strong>Safety</strong>: high likelihood of admission <em>and</em> affordable.
          </li>
          <li>
            <strong>Match</strong>: realistic odds with strong fit (not a coin flip).
          </li>
          <li>
            <strong>Reach</strong>: competitive; admission is uncertain even with great stats.
          </li>
        </ul>

        <h2>Build the list with constraints</h2>
        <ul>
          <li>Major/career interests (and flexibility if undecided)</li>
          <li>Location, size, and campus culture</li>
          <li>Net cost (not sticker price)</li>
          <li>Admissions selectivity for your profile</li>
        </ul>

        <h2>A practical mix</h2>
        <p>
          Most students do well with a mix like: <strong>2–4 safeties</strong>,{" "}
          <strong>4–6 matches</strong>, <strong>2–4 reaches</strong>. Adjust based on how selective
          your reach schools are and whether cost is a constraint.
        </p>

        <h2>How to avoid the “all reaches” trap</h2>
        <ul>
          <li>Be honest about outcomes: treat admission like probability, not identity.</li>
          <li>Build matches that you&apos;re excited about (fit is not “settling”).</li>
          <li>Choose safeties you would happily attend — that&apos;s the point of safety.</li>
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

