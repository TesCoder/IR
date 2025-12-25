import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export default function ArticleExtracurriculars() {
  const articleSchema = ArticleSchema({
    title: "Activity Spikes & Extracurricular Strategy: What Counts and Why",
    description: "Depth over breadth, leadership, and authentic impact. Summer and capstone ideas plus an underclassman track.",
    author: "Ivy Ready",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15"
  });

  return (
    <>
      <SEOHead
        title="Activity Spikes & Extracurricular Strategy"
        description="Depth over breadth, leadership, and authentic impact. Summer and capstone ideas plus an underclassman track."
        url="/resources/extracurricular-strategy"
        type="article"
      />
      <SchemaScript schema={articleSchema} />
      <article className="mx-auto max-w-3xl px-6 py-14 prose prose-indigo">
        <h1>Activity Spikes & Extracurricular Strategy: What Counts and Why</h1>
        <p>Admissions readers look for sustained impact, initiative, and direction. Here’s how to design activities that matter.</p>
        <h2>1) Spike vs. General Involvement</h2>
        <p>A spike is a coherent thread of activity with increasing responsibility and outcomes. It’s better to go deep than to dabble.</p>
        <h2>2) Leadership & Initiative</h2>
        <ul>
          <li>Move from participant → organizer → founder/coach</li>
          <li>Quantify outcomes: funds raised, people served, deliverables shipped</li>
        </ul>
        <h2>3) Summer & Capstone Ideas</h2>
        <ul>
          <li>Research assistantships, community impact projects, products, or publications</li>
          <li>Teach, mentor, or build something the community keeps using</li>
        </ul>
        <h2>4) Underclassman Track</h2>
        <p>Grades 9–10 are for exploration + skill foundations. Grades 11–12 are for depth and visible outcomes.</p>
        <hr />
        <p className="not-prose mt-8">
          <Link href="/contact" className="inline-flex rounded-2xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700">Get a custom EC impact map →</Link>
        </p>
      </article>
      <div className="mx-auto max-w-3xl px-6 pb-14">
        <RelatedArticles
          articles={[
            { title: "How to Build a Balanced College List", href: "/resources/building-a-college-list" },
            { title: "Timeline by Grade (9th–12th)", href: "/resources/timeline-by-grade" },
            { title: "The Personal Statement Structure", href: "/resources/personal-statement-structure" }
          ]}
        />
      </div>
    </>
  );
}