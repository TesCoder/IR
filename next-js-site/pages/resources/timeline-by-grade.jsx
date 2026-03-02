import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { trackCtaClick } from "@/lib/trackCta";
import { RAIL_ITEMS, FALLBACK_ITEMS } from "@/lib/railData";
import { filterByTags, selectRailItems } from "@/lib/railUtils";

const PAGE_TAGS = ["timelines", "admissions timeline", "application strategy", "planning"];
const tagFiltered = filterByTags(RAIL_ITEMS, PAGE_TAGS);
const railItems = selectRailItems(
  "/resources/timeline-by-grade",
  tagFiltered.length >= 2 ? tagFiltered : [...tagFiltered, ...FALLBACK_ITEMS],
  { maxItems: 3, minItems: 2 }
);

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
        <div className="mt-10 bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <p className="font-semibold text-ivy-blue mb-1">Free Guide: The Ivy Ready College Application Playbook</p>
          <p className="text-gray-700 mb-4">Get the year-by-year strategy guide — covering testing, essays, financial aid, and every critical deadline from freshman to senior year.</p>
          <Link
            href="/guides/college-application-playbook"
            className="inline-block bg-ivy-blue text-white px-6 py-2 rounded font-medium no-underline hover:opacity-90"
            onClick={() => {
              trackCtaClick({
                location: "resource_inline",
                text: "Get the Free Playbook",
                destination: "/guides/college-application-playbook",
              });
            }}
          >
            Get the Free Playbook →
          </Link>
        </div>
      </article>
      <div className="mx-auto max-w-3xl px-6 pb-14">
        <RelatedArticles
          title="Recommended next steps"
          slotId="article_related"
          items={railItems}
        />
      </div>
    </>
  );
}