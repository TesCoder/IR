import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export default function ArticleCollegeList() {
  const articleSchema = ArticleSchema({
    title: "How to Build a Balanced College List (Grades 11–12)",
    description: "Reach, match, and safety — build a strategic college list anchored in true fit and your current profile.",
    author: "Ivy Ready",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15"
  });
  const relatedArticles = [
    {
      title: "The Personal Statement Structure",
      href: "/resources/personal-statement-structure",
      description: "Plan hook, development, and reflection to keep your essay focused.",
    },
    {
      title: "How to Choose and Ask Recommenders",
      href: "/resources/choosing-recommenders",
      description: "Pick the right teachers and equip them with specifics to write strongly.",
    },
    {
      title: "Activity Spikes & Extracurricular Strategy",
      href: "/resources/extracurricular-strategy",
      description: "Shape a standout impact spike with depth and leadership.",
    },
    {
      title: "Timeline by Grade: 9th–12th",
      href: "/resources/timeline-by-grade",
      description: "Stay ahead each year with a clear roadmap and key deadlines.",
    },
  ];

  return (
    <>
      <SEOHead
        title="How to Build a Balanced College List"
        description="Reach, match, and safety — build a strategic college list anchored in true fit and your current profile."
        url="/resources/building-a-college-list"
        type="article"
      />
      <SchemaScript schema={articleSchema} />
      <article className="mx-auto max-w-3xl px-6 py-14 prose prose-indigo">
        <h1>How to Build a Balanced College List (Grades 11–12)</h1>
        <p><strong>Summary:</strong> The most successful lists are balanced across reach, match, and safety, and anchored in genuine fit. Use the framework below to calibrate by your current profile and priorities.</p>
        <h2>1) Define Fit vs. Prestige</h2>
        <p>Fit combines academic, social, financial, and career dimensions. Prestige alone rarely predicts long‑term satisfaction.</p>
        <h2>2) Research with Real Signals</h2>
        <ul>
          <li>Program strength for your potential majors</li>
          <li>Cost, aid outcomes, and graduation rates</li>
          <li>Learning environment, size, and location</li>
        </ul>
        <h2>3) Categorize the List</h2>
        <p><em>Rule of thumb:</em> Reaches (~10% admit odds), Matches (~40–60%), Safeties (~80%+). Calibrate with historical ranges and your transcript/testing.</p>
        <h2>4) Stress‑test Your Choices</h2>
        <p>Ask: Can I articulate three concrete reasons this school fits my goals? Do I have two alternatives with similar fit?</p>
        <h2>5) Narrow to 8–12 by Spring of Junior Year</h2>
        <p>Schedule visits (virtual or in‑person), track early action/priority deadlines, and prep interview notes.</p>
        <hr />
        <p className="not-prose mt-8">
          <Link href="/contact" className="inline-flex rounded-2xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700">Get a personalized list review →</Link>
        </p>
        <RelatedArticles title="Recommended next steps" items={relatedArticles} />
      </article>
    </>
  );
}