import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceCollegeInterviewQuestions() {
  const title = "College Interview Questions (Common Prompts + How to Answer)";
  const description =
    "Common college interview prompts (Why us? Tell me about yourself?) with answer guidance, pitfalls, and a simple prep checklist.";

  const url = "/resources/college-interview-questions";

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
      title: "College Interview Prep (Answer Framework + Practice Plan)",
      href: "/resources/college-interview-prep",
      description:
        "A practical interview prep framework: how to structure answers, practice without sounding scripted, and prepare stories that support your application narrative.",
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
          Most interview questions are variations of a few themes: who you are, what you value, and
          why you&apos;re a fit. The key is to answer with <strong>specific evidence</strong> — not
          generic traits.
        </p>

        <h2>“Tell me about yourself”</h2>
        <ul>
          <li>Lead with 1–2 core themes (not your entire timeline).</li>
          <li>Use one short example to prove the theme.</li>
          <li>End with forward direction (what you&apos;re excited to explore next).</li>
        </ul>

        <h2>“Why this school?”</h2>
        <ul>
          <li>Pick 2–3 specifics (programs, opportunities, culture) and connect them to you.</li>
          <li>Avoid copy-paste facts from the website with no personal link.</li>
          <li>Show fit: what you&apos;ll do there, not just what you&apos;ll “get.”</li>
        </ul>

        <h2>“What&apos;s a challenge you faced?”</h2>
        <ul>
          <li>Choose a challenge that lets you show decision-making and growth.</li>
          <li>Focus on process (how you responded), not drama.</li>
          <li>End with what changed in your habits or mindset.</li>
        </ul>

        <h2>“What do you do for fun?”</h2>
        <ul>
          <li>This is a personality question — be human.</li>
          <li>Specific details beat impressive-sounding answers.</li>
          <li>Link to a value: curiosity, community, craft, discipline.</li>
        </ul>

        <h2>Quick prep checklist</h2>
        <ul>
          <li>Prepare 5–6 stories you can reuse across questions.</li>
          <li>Practice answers in bullet points (no memorization).</li>
          <li>Bring 2 thoughtful questions to ask.</li>
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

