import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceGrade10ActivitiesListFoundation() {
  const title = "10th Grade Activities List Foundation (What to Track)";
  const description =
    "What “counts” for an activities list, what to track now, and how to turn scattered involvement into a coherent profile by junior year.";

  const url = "/resources/grade-10-activities-list-foundation";

  const primaryCta = {
    location: "resources_related",
    text: "Get activities list help",
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
      title: "9th Grade Extracurricular Strategy (Explore → Commit)",
      href: "/resources/grade-9-extracurriculars-strategy",
      description:
        "A practical plan for exploring activities in 9th grade, choosing a direction, and building consistency that becomes leadership later.",
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
          The activities list isn&apos;t a record of everything you&apos;ve ever done — it&apos;s a curated list
          of what matters most. In 10th grade, the key is to start tracking the details that make
          your involvement <strong>credible and high-signal</strong>.
        </p>

        <h2>What “counts”</h2>
        <ul>
          <li>School clubs and teams</li>
          <li>Community service (especially ongoing roles)</li>
          <li>Jobs, family responsibilities, and caregiving</li>
          <li>Research, independent projects, competitions</li>
          <li>Arts training, performances, and certifications</li>
        </ul>

        <h2>What to track (starting now)</h2>
        <ul>
          <li>
            <strong>Role</strong>: member vs organizer vs leader (what you actually do)
          </li>
          <li>
            <strong>Time</strong>: hours/week and weeks/year (be honest and consistent)
          </li>
          <li>
            <strong>Impact</strong>: outcomes, results, audience size, money raised, users served
          </li>
          <li>
            <strong>Progression</strong>: how your responsibility increased over time
          </li>
        </ul>

        <h2>How to turn “random involvement” into a story</h2>
        <ul>
          <li>Pick 1–2 core activities to deepen (so you can show growth).</li>
          <li>Use a small “supporting cast” of activities that reinforce your interests or values.</li>
          <li>Start one project you can own end-to-end (initiative is the signal).</li>
        </ul>

        <h2>Quick test</h2>
        <p>
          If you had to explain your activities list in one sentence, would it sound like a person
          — or a checklist? The best lists show direction.
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

