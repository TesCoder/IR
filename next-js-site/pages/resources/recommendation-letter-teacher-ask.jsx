import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceTeacherRecAsk() {
  const title = "How to Ask a Teacher for a Letter of Recommendation";
  const description =
    "A step-by-step ask script, ideal timing, and what to share so teachers can write specific, credible letters that reinforce your application story.";

  const url = "/resources/recommendation-letter-teacher-ask";

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
      title: "Brag Sheet for Recommendation Letters (Student + Parent Templates)",
      href: "/resources/recommendation-letter-brag-sheet",
      description:
        "What to include in a brag sheet, how to make it easy to write specifics, and sample prompts for students and parents.",
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
          Great recommendation letters come from teachers who know you well and can write with{" "}
          <strong>specific examples</strong>. The way you ask — and what you provide — directly
          affects letter quality.
        </p>

        <h2>When to ask</h2>
        <ul>
          <li>Ask in late spring of junior year or very early senior fall.</li>
          <li>Give at least 3–6 weeks before your earliest deadline.</li>
          <li>Follow your school&apos;s process (some require forms or counselor coordination).</li>
        </ul>

        <h2>Who to ask</h2>
        <ul>
          <li>Teachers from core academic classes (especially junior year).</li>
          <li>Teachers who saw you grow or overcome a challenge.</li>
          <li>People who can speak to how you think, not just your grade.</li>
        </ul>

        <h2>What to share (make it easy)</h2>
        <ul>
          <li>Your resume or activity list</li>
          <li>1–2 short paragraphs on your “throughline” and goals</li>
          <li>Specific moments from their class (projects, discussions, growth)</li>
          <li>Deadlines + submission instructions</li>
        </ul>

        <h2>Simple ask script</h2>
        <p>
          “Hi [Teacher Name] — I&apos;m applying to college this fall and I was wondering if you would
          feel comfortable writing me a strong letter of recommendation. I&apos;ve really valued your
          class because [specific reason]. If you&apos;re able, I can share my resume and a short
          summary of what I&apos;m hoping to highlight. My earliest deadline is [date].”
        </p>

        <h2>What not to do</h2>
        <ul>
          <li>Ask last-minute</li>
          <li>Ask someone who barely knows you</li>
          <li>Provide no context and hope they “figure it out”</li>
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

