import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export default function ArticleTimeline() {
  const articleSchema = ArticleSchema({
    title: "Timeline by Grade: What Every High School Student Should Do (9th–12th)",
    description: "A clear 4‑year roadmap: what to do each year from 9th through 12th grade to stay ahead on college admissions.",
    author: "Ivy Ready",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15"
  });

  return (
    <>
      <SEOHead
        title="Timeline by Grade (9th–12th)"
        description="A clear 4‑year roadmap: what to do each year from 9th through 12th grade to stay ahead on college admissions."
        url="/resources/timeline-by-grade"
        type="article"
      />
      <SchemaScript schema={articleSchema} />
      <article className="mx-auto max-w-3xl px-6 py-14 prose prose-indigo">
        <h1>Timeline by Grade: What Every High School Student Should Do (9th–12th)</h1>
        <h2>Grade 9</h2>
        <ul>
          <li>Explore interests; build foundational courses and study habits</li>
          <li>Sample 2–3 activities; reflect on what you enjoy</li>
        </ul>
        <h2>Grade 10</h2>
        <ul>
          <li>Deepen 1–2 activities; consider early leadership</li>
          <li>PSAT practice; begin light college research</li>
        </ul>
        <h2>Grade 11</h2>
        <ul>
          <li>SAT/ACT (if taking); targeted summer plans; campus visits</li>
          <li>Start essays and shortlist your college list</li>
        </ul>
        <h2>Grade 12</h2>
        <ul>
          <li>Finalize essays and applications; track deadlines and portals</li>
          <li>Prepare for interviews; compare offers and aid</li>
        </ul>
        <hr />
        <p className="not-prose mt-8">
          <Link href="/contact" className="inline-flex rounded-2xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700">Download the printable PDF timeline →</Link>
        </p>
      </article>
      <div className="mx-auto max-w-3xl px-6 pb-14">
        <RelatedArticles
          articles={[
            { title: "How to Build a Balanced College List", href: "/resources/building-a-college-list" },
            { title: "How to Choose and Ask for Letters of Recommendation", href: "/resources/choosing-recommenders" },
            { title: "Activity Spikes & Extracurricular Strategy", href: "/resources/extracurricular-strategy" }
          ]}
        />
      </div>
    </>
  );
}