import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceGrade9ExtracurricularsStrategy() {
  const title = "9th Grade Extracurricular Strategy (Explore → Commit)";
  const description =
    "A practical plan for exploring activities in 9th grade, choosing a direction, and building consistency that becomes leadership later.";

  const url = "/resources/grade-9-extracurriculars-strategy";

  const primaryCta = {
    location: "resources_related",
    text: "Build an activities plan",
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
      title: "9th Grade Course Planning (Honors/AP Foundations)",
      href: "/resources/grade-9-course-planning",
      description:
        "How to choose 9th-grade classes, build study habits, and set an AP/honors trajectory without overloading your schedule.",
    },
    {
      title: "10th Grade Activities List Foundation (What to Track)",
      href: "/resources/grade-10-activities-list-foundation",
      description:
        "What “counts” for an activities list, what to track now, and how to turn scattered involvement into a coherent profile by junior year.",
    },
    {
      title: "Summer After 10th Grade (Programs + Internships)",
      href: "/resources/grade-10-summer-planning",
      description:
        "How to choose a summer plan after 10th grade: depth vs breadth, how to evaluate programs, and how to avoid “resume padding.”",
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
          Ninth grade is the best time to explore — but exploration works best with a plan. The
          goal is to sample broadly, notice what you genuinely enjoy, and start building
          consistency so you can grow into leadership later.
        </p>

        <h2>Phase 1: Explore (first semester)</h2>
        <ul>
          <li>Try 2–4 activities across different “buckets” (school, community, independent).</li>
          <li>Pick one activity that feels challenging (not just easy/fun).</li>
          <li>Track what you do each week so you can evaluate fit honestly.</li>
        </ul>

        <h2>Phase 2: Commit (second semester)</h2>
        <ul>
          <li>Choose 1–2 core activities to continue through 10th grade.</li>
          <li>Set a small goal (project, competition, performance, growth milestone).</li>
          <li>Build reliability: show up, take feedback, improve.</li>
        </ul>

        <h2>Phase 3: Build impact (10th grade and beyond)</h2>
        <ul>
          <li>Look for real responsibility: training others, running events, creating systems.</li>
          <li>Focus on measurable outcomes (not just “hours”).</li>
          <li>When ready, specialize: deepen in one area so it becomes a clear “spike.”</li>
        </ul>

        <h2>A simple rule to avoid “resume padding”</h2>
        <p>
          If you can&apos;t explain <strong>why</strong> you&apos;re doing an activity (beyond “for college”),
          it usually won&apos;t become high-impact — and it won&apos;t be sustainable.
        </p>

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

