import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceCollegeEssayThesis() {
  const title = "College Essay Thesis (What It Is + Examples)";
  const description =
    "Understand what a “thesis” means in a personal statement—and how to build a clear central throughline that supports your story.";

  const url = "/resources/college-essay-thesis";

  const primaryCta = {
    location: "article_related",
    text: "Get essay feedback",
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
      title: "College Essay Outline (How to Structure a Draft)",
      href: "/resources/college-essay-outline",
      description:
        "Learn a simple, repeatable outline for a standout personal statement—plus how to turn ideas into a first draft without sounding generic.",
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
          In a personal statement, a “thesis” isn&apos;t a formal argument. It&apos;s your{" "}
          <strong>central throughline</strong>: what the reader should understand about you by the
          end (values, direction, and growth).
        </p>

        <h2>What a thesis does (in admissions terms)</h2>
        <ul>
          <li>Turns one story into a meaningful insight</li>
          <li>Keeps the essay focused (so it doesn&apos;t become a highlight reel)</li>
          <li>Links actions → reflection → future direction</li>
        </ul>

        <h2>A simple thesis formula</h2>
        <p>
          Try this structure: <strong>Because of X, I value Y, and I now do Z</strong>. Your essay
          should show the evidence for that claim through scenes and choices.
        </p>

        <h2>Examples (not copy-paste)</h2>
        <ul>
          <li>
            “I learned to lead with clarity under pressure — and to turn ambiguity into a plan.”
          </li>
          <li>
            “I value building systems that help other people succeed — not just personal wins.”
          </li>
          <li>
            “I became someone who follows curiosity all the way to impact, not just ideas.”
          </li>
        </ul>

        <h2>Quick self-check</h2>
        <ul>
          <li>Can you write your thesis in one sentence without using buzzwords?</li>
          <li>Do your scenes prove it (not just state it)?</li>
          <li>Does the ending feel like it “clicks” with the opening?</li>
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

