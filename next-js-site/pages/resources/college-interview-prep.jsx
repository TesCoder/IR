import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceCollegeInterviewPrep() {
  const title = "College Interview Prep (Answer Framework + Practice Plan)";
  const description =
    "A practical interview prep framework: how to structure answers, practice without sounding scripted, and prepare stories that support your application narrative.";

  const url = "/resources/college-interview-prep";

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
      title: "College Interview Questions (Common Prompts + How to Answer)",
      href: "/resources/college-interview-questions",
      description:
        "Common college interview prompts (Why us? Tell me about yourself?) with answer guidance, pitfalls, and a simple prep checklist.",
    },
    {
      title: "Interview Thank You Email (Template + Timing)",
      href: "/resources/college-interview-thank-you-email",
      description:
        "A short, effective thank-you email template, when to send it, and what to include to reinforce fit without overdoing it.",
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
          Interviews are rarely about “perfect answers.” They&apos;re about proving you&apos;re thoughtful,
          self-aware, and a strong fit. Prep is just building a set of stories and a structure so
          you can speak naturally under pressure.
        </p>

        <h2>The 3-part answer framework</h2>
        <ol>
          <li>
            <strong>Claim</strong>: your point in one sentence (what you did / what you believe).
          </li>
          <li>
            <strong>Evidence</strong>: a short story with specifics (what happened, your choices,
            the result).
          </li>
          <li>
            <strong>Meaning</strong>: what it shows about you (values, growth, direction).
          </li>
        </ol>

        <h2>Build a “story bank” (do this once)</h2>
        <ul>
          <li>1 leadership story</li>
          <li>1 challenge / setback story</li>
          <li>1 intellectual curiosity story</li>
          <li>1 teamwork / community story</li>
          <li>1 “why this school” story (programs, culture, opportunities)</li>
        </ul>

        <h2>Practice without sounding scripted</h2>
        <ul>
          <li>Practice in bullet points, not memorized paragraphs.</li>
          <li>Record yourself once — fix pacing and filler words.</li>
          <li>Answer the same question in 30s, then 90s (control your length).</li>
        </ul>

        <h2>Last-minute checklist</h2>
        <ul>
          <li>Know 2–3 specific reasons you&apos;re excited about the school.</li>
          <li>Prepare 2 smart questions (not answered on the website).</li>
          <li>Review your application so your details are consistent.</li>
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

