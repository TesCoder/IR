import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceGrade9CoursePlanning() {
  const title = "9th Grade Course Planning (Honors/AP Foundations)";
  const description =
    "How to choose 9th-grade classes, build study habits, and set an AP/honors trajectory without overloading your schedule.";

  const url = "/resources/grade-9-course-planning";

  const primaryCta = {
    location: "resources_related",
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
      title: "9th Grade Extracurricular Strategy (Explore → Commit)",
      href: "/resources/grade-9-extracurriculars-strategy",
      description:
        "A practical plan for exploring activities in 9th grade, choosing a direction, and building consistency that becomes leadership later.",
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
          Ninth grade is about building a strong academic base while learning how to manage your
          workload. The goal isn&apos;t to “stack the hardest classes” — it&apos;s to{" "}
          <strong>build a trajectory</strong> you can sustain through junior year.
        </p>

        <h2>Choose rigor you can sustain</h2>
        <ul>
          <li>Prioritize core subjects (math, English, science, history, language).</li>
          <li>Take honors when you can earn strong grades with healthy effort.</li>
          <li>Don&apos;t overload: one “stretch” class is fine; four can backfire.</li>
        </ul>

        <h2>Set your math path early</h2>
        <ul>
          <li>Know what sequence leads to your target junior-year math level.</li>
          <li>If acceleration is needed, plan it intentionally (not as a last-minute scramble).</li>
          <li>Use summer strategically if your school allows placement changes.</li>
        </ul>

        <h2>Build the habits that raise GPA</h2>
        <ul>
          <li>Weekly planning: assignments + tests + long-term projects</li>
          <li>Active study (practice problems, teach-back), not rereading notes</li>
          <li>Office hours early — small gaps become big gaps fast</li>
        </ul>

        <h2>What “good course planning” looks like</h2>
        <ul>
          <li>Strong grades in rigorous courses</li>
          <li>Room for 1–2 meaningful extracurricular commitments</li>
          <li>Consistency year-over-year (a story admissions readers can trust)</li>
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

