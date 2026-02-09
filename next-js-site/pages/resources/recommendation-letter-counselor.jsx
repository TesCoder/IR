import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceCounselorRecommendation() {
  const title = "Counselor Recommendation Letter: What Matters (and How to Help)";
  const description =
    "Understand what counselors emphasize, how to provide context without overstepping, and how school process differences affect your timeline.";

  const url = "/resources/recommendation-letter-counselor";

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
      title: "How to Ask a Teacher for a Letter of Recommendation",
      href: "/resources/recommendation-letter-teacher-ask",
      description:
        "A step-by-step ask script, ideal timing, and what to share so teachers can write specific, credible letters that reinforce your application story.",
    },
    {
      title: "Brag Sheet for Recommendation Letters (Student + Parent Templates)",
      href: "/resources/recommendation-letter-brag-sheet",
      description:
        "What to include in a brag sheet, how to make it easy to write specifics, and sample prompts for students and parents.",
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
          Counselor letters add context: school environment, course availability, and your role in
          the community. Because counselors support many students, your job is to make it easy for
          them to write with accurate, specific information.
        </p>

        <h2>What counselors typically emphasize</h2>
        <ul>
          <li>Academic trajectory and rigor in the context of your school</li>
          <li>Character, community contribution, and consistency</li>
          <li>Context families might not realize matters (opportunities, constraints)</li>
        </ul>

        <h2>How to help (without overstepping)</h2>
        <ul>
          <li>Share a short brag sheet (highlights + responsibilities + goals).</li>
          <li>Note any important context (schedule constraints, caregiving, moves, disruptions).</li>
          <li>Confirm deadlines and submission methods.</li>
          <li>Be proactive early — counselors are busiest near deadlines.</li>
        </ul>

        <h2>School process differences</h2>
        <ul>
          <li>Some schools require requests through platforms or forms.</li>
          <li>Some limit the number of letters or set internal deadlines.</li>
          <li>Some counselors write “composite” letters that include teacher input.</li>
        </ul>

        <h2>Quick timeline</h2>
        <ul>
          <li>Junior spring: introduce your plan + request process</li>
          <li>Early senior fall: confirm college list and deadlines</li>
          <li>Before first deadline: verify submissions and thank your counselor</li>
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

