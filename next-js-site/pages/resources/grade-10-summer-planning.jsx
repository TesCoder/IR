import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceGrade10SummerPlanning() {
  const title = "Summer After 10th Grade (Programs + Internships)";
  const description =
    "How to choose a summer plan after 10th grade: depth vs breadth, how to evaluate programs, and how to avoid “resume padding.”";

  const url = "/resources/grade-10-summer-planning";

  const primaryCta = {
    location: "resources_related",
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
      title: "9th Grade Course Planning (Honors/AP Foundations)",
      href: "/resources/grade-9-course-planning",
      description:
        "How to choose 9th-grade classes, build study habits, and set an AP/honors trajectory without overloading your schedule.",
    },
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
          After 10th grade, your summer can start to signal direction — but only if you choose
          intentionally. The best summer plans balance <strong>growth</strong>,{" "}
          <strong>skill-building</strong>, and <strong>real ownership</strong>.
        </p>

        <h2>Depth vs breadth (a practical choice)</h2>
        <ul>
          <li>
            Choose <strong>depth</strong> if you already have a strong interest and want to build
            impact (project, research, portfolio, leadership).
          </li>
          <li>
            Choose <strong>breadth</strong> if you&apos;re still exploring — but make it structured
            (clear goals, output, reflection).
          </li>
        </ul>

        <h2>Ways to build a strong summer (without “resume padding”)</h2>
        <ul>
          <li>Work + responsibility (jobs, family obligations, caregiving)</li>
          <li>Independent project with a real deliverable (site, app, portfolio, publication)</li>
          <li>Community impact work where you own a piece (not just “hours”)</li>
          <li>Selective programs (only if they genuinely match your goals)</li>
        </ul>

        <h2>How to evaluate programs</h2>
        <ul>
          <li>Is there a meaningful output (capstone, presentation, portfolio)?</li>
          <li>Do you have real mentorship or just lectures?</li>
          <li>Will this produce a story you can explain with specifics?</li>
        </ul>

        <h2>Simple planning checklist</h2>
        <ul>
          <li>Pick a theme for the summer (skill, impact, exploration, academics)</li>
          <li>Define your deliverable (what exists by August?)</li>
          <li>Schedule weekly blocks (consistency beats bursts)</li>
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

