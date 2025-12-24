import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import Link from "next/link";

export default function ArticleRecommenders() {
  const articleSchema = ArticleSchema({
    title: "How to Choose and Ask for Letters of Recommendation",
    description: "Who to ask, when to ask, what to provide, and how to follow up for strong, specific letters of recommendation.",
    author: "Ivy Ready",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15"
  });

  return (
    <>
      <SEOHead
        title="How to Choose and Ask for Letters of Recommendation"
        description="Who to ask, when to ask, what to provide, and how to follow up for strong, specific letters of recommendation."
        url="/resources/choosing-recommenders"
        type="article"
      />
      <SchemaScript schema={articleSchema} />
      <article className="mx-auto max-w-3xl px-6 py-14 prose prose-indigo">
        <h1>How to Choose and Ask for Letters of Recommendation</h1>
        <p>Great letters are specific, story‑rich, and comparative. Help your recommenders help you.</p>
        <h2>1) Who to Ask</h2>
        <p>Teachers who can discuss your growth, contributions, and intellectual character. Consider subject relevance and recency.</p>
        <h2>2) When & How</h2>
        <ul>
          <li>Ask late spring of junior year or early fall of senior year</li>
          <li>Request in person when possible; follow with a concise email</li>
        </ul>
        <h2>3) What to Provide</h2>
        <ul>
          <li>Resume/activities list, draft personal statement, notable coursework</li>
          <li>Clear deadline list and submission instructions</li>
        </ul>
        <h2>4) Follow‑Up & Thanks</h2>
        <p>Send polite reminders and a sincere thank‑you. Consider a brief update after decisions.</p>
        <hr />
        <p className="not-prose mt-8">
          <Link href="/contact" className="inline-flex rounded-2xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700">Get our rec letter prep worksheet →</Link>
        </p>
      </article>
    </>
  );
}