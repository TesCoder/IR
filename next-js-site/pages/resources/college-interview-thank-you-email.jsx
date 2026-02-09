import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceInterviewThankYouEmail() {
  const title = "Interview Thank You Email (Template + Timing)";
  const description =
    "A short, effective thank-you email template, when to send it, and what to include to reinforce fit without overdoing it.";

  const url = "/resources/college-interview-thank-you-email";

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
      title: "College Interview Prep (Answer Framework + Practice Plan)",
      href: "/resources/college-interview-prep",
      description:
        "A practical interview prep framework: how to structure answers, practice without sounding scripted, and prepare stories that support your application narrative.",
    },
    {
      title: "College Interview Questions (Common Prompts + How to Answer)",
      href: "/resources/college-interview-questions",
      description:
        "Common college interview prompts (Why us? Tell me about yourself?) with answer guidance, pitfalls, and a simple prep checklist.",
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
          A thank-you email is simple, but it matters: it shows professionalism and lets you
          reinforce one memorable point. Keep it short, specific, and timely.
        </p>

        <h2>When to send it</h2>
        <ul>
          <li>Send within 12–24 hours of the interview.</li>
          <li>If the interview was late evening, the next morning is fine.</li>
          <li>If you interviewed multiple people, send each person a separate email.</li>
        </ul>

        <h2>What to include (3 parts)</h2>
        <ol>
          <li>
            <strong>Gratitude</strong>: thank them for their time.
          </li>
          <li>
            <strong>Specific recall</strong>: reference one detail from the conversation.
          </li>
          <li>
            <strong>Fit signal</strong>: one sentence about why you&apos;re excited about the school.
          </li>
        </ol>

        <h2>Simple template</h2>
        <p><strong>Subject:</strong> Thank you — [Your Name]</p>
        <p>
          Hi [Name],<br />
          <br />
          Thank you again for taking the time to speak with me today. I really enjoyed our
          conversation, especially [specific detail].<br />
          <br />
          After our discussion, I&apos;m even more excited about [specific program/opportunity/culture]
          because [your personal connection].<br />
          <br />
          Thanks again,<br />
          [Your Name]
        </p>

        <h2>Common mistakes</h2>
        <ul>
          <li>Writing a long recap (keep it short)</li>
          <li>Generic praise with no specifics</li>
          <li>Sending the same template to multiple interviewers</li>
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

