import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceCollegeEssayOutline() {
  const title = "College Essay Outline (How to Structure a Draft)";
  const description =
    "Learn a simple, repeatable outline for a standout personal statement—plus how to turn ideas into a first draft without sounding generic.";

  const url = "/resources/college-essay-outline";

  const primaryCta = {
    location: "article_related",
    text: "Get essay help",
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
      title: "College Essay Thesis (What It Is + Examples)",
      href: "/resources/college-essay-thesis",
      description:
        "Understand what a “thesis” means in a personal statement—and how to build a clear central throughline that supports your story.",
    },
    {
      title: "College Essay Draft Checklist (Revise + Polish)",
      href: "/resources/college-essay-draft-checklist",
      description:
        "Use a practical revision checklist to improve structure, specificity, voice, and flow—before you submit your final draft.",
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
          A strong personal statement isn&apos;t “creative writing” — it&apos;s{" "}
          <strong>clear storytelling with a point</strong>. This outline keeps you focused on one
          throughline so your draft reads specific, intentional, and memorable.
        </p>

        <h2>A simple outline that works</h2>
        <ol>
          <li>
            <strong>Hook</strong>: open with a scene, tension, or surprising detail (not your full
            resume).
          </li>
          <li>
            <strong>Development</strong>: show context and choices — what you did, thought, and
            learned.
          </li>
          <li>
            <strong>Reflection</strong>: explain the “so what” (values, mindset, growth).
          </li>
          <li>
            <strong>Tie-back</strong>: connect the insight to who you are now — and the direction
            you&apos;re heading.
          </li>
        </ol>

        <h2>Drafting workflow (fast, not perfect)</h2>
        <ul>
          <li>
            Brainstorm 3–5 moments that changed how you think (not just achievements).
          </li>
          <li>Pick one moment and write the “movie version” first (details, senses, dialogue).</li>
          <li>
            Add 2–3 reflection beats: what you realized, what you changed, and what you value now.
          </li>
          <li>Cut any sentence that could describe “any motivated student.”</li>
        </ul>

        <h2>Common outline mistakes</h2>
        <ul>
          <li>
            <strong>Too many topics</strong>: one story is better than five mini-stories.
          </li>
          <li>
            <strong>No reflection</strong>: admissions readers need the meaning, not just events.
          </li>
          <li>
            <strong>Vague language</strong>: replace “I learned a lot” with what changed and why.
          </li>
        </ul>

        <h2>Quick self-check</h2>
        <ul>
          <li>Can someone summarize your “point” in one sentence?</li>
          <li>Do you show choices, not just outcomes?</li>
          <li>Does the last paragraph feel earned by the first?</li>
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

