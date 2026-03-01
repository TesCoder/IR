import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceGrade11TestingPlan() {
  const title = "11th Grade Testing Plan (SAT/ACT)";
  const description =
    "A step-by-step junior-year testing plan: diagnostics, study schedule, and test dates—plus how to build a balanced Grade 11 timeline.";
  const url = "/resources/grade-11-testing-plan";

  const primaryCta = {
    location: "resources_related",
    text: "Book a consult",
    destination: "/free-consultation",
  };

  const articleSchema = ArticleSchema({
    title,
    description,
    author: "Ivy Ready",
    datePublished: "2026-02-28",
    dateModified: "2026-02-28",
  });

  const related = [
    {
      title: "12th Grade College Application Timeline",
      href: "/resources/grade-12-application-timeline",
      description:
        "A month-by-month senior-year timeline covering essays, recommendations, and deadlines.",
    },
    {
      title: "SAT vs ACT: When to Take Which Test",
      href: "/resources/when-to-take-act-vs-sat",
      description:
        "How to choose between the SAT and ACT, and when to start testing in 11th grade.",
    },
    {
      title: "12th Grade Essay Schedule (Week-by-Week)",
      href: "/resources/grade-12-essay-schedule",
      description:
        "A practical essay schedule for seniors to draft, revise, and finalize on time.",
    },
  ];

  const handlePrimaryCtaClick = () => trackCtaClick(primaryCta);

  return (
    <>
      <SEOHead title={title} description={description} url={url} type="article" />
      <SchemaScript schema={articleSchema} />

      <article className="mx-auto max-w-3xl px-6 py-14 prose prose-indigo">
        <h1>{title}</h1>

        <p>
          Junior year is the most important testing year. The decisions you make
          in 11th grade — which test to take, when to sit, and how hard to study
          — directly shape what you can submit senior fall. Use this plan to
          stay ahead of the curve.
        </p>

        <h2>Step 1: Take a Diagnostic (Before Anything Else)</h2>
        <p>
          Before you register for your first real SAT or ACT, take a full-length
          official practice test of each. Use a released College Board SAT and a
          released ACT — both under timed, test-like conditions. Compare your
          scaled scores to understand where you start and which format plays to
          your strengths.
        </p>
        <ul>
          <li>
            <strong>Fall diagnostic window:</strong> September–October of 11th
            grade. This gives you maximum time to study before spring test dates.
          </li>
          <li>
            <strong>Spring diagnostic (backup):</strong> If you didn't run
            diagnostics in fall, do it in January before registering for a
            spring date.
          </li>
        </ul>

        <h2>Step 2: Pick Your Test</h2>
        <p>
          Most students have a clear edge on one format after their diagnostics.
          The SAT is more reading- and evidence-based; the ACT rewards speed and
          includes a Science section. Neither is harder — they're just different.
          Commit to one test first. You can always add the other later if your
          target schools require or prefer it.
        </p>
        <ul>
          <li>
            Strong at English grammar and evidence-based reasoning → lean SAT
          </li>
          <li>
            Faster pace, science comfort, stronger at straightforward math → lean
            ACT
          </li>
          <li>
            Diagnostic gap is small (within 2–3 percentile points) → pick the
            one with more test dates in your area
          </li>
        </ul>

        <h2>Step 3: Build a Study Schedule</h2>
        <p>
          A realistic 11th-grade study plan runs 10–16 weeks before your target
          test date. Aim for 6–8 hours per week, split across practice sections,
          full-length tests, and review.
        </p>
        <ul>
          <li>
            <strong>Weeks 1–3:</strong> Content review by section (math
            concepts, grammar rules, reading strategies)
          </li>
          <li>
            <strong>Weeks 4–8:</strong> Mixed practice with timed sections; one
            full-length practice test per week
          </li>
          <li>
            <strong>Weeks 9–12:</strong> Full tests under real conditions;
            targeted review of weak areas
          </li>
          <li>
            <strong>Final week:</strong> Light review only — no new material,
            preserve energy
          </li>
        </ul>

        <h2>Step 4: Choose Your Target Test Dates</h2>
        <p>
          For most juniors, the ideal first official test falls in{" "}
          <strong>March or May</strong>. This allows you to see scores in time
          to plan a retake before summer. A second attempt in{" "}
          <strong>June</strong> gives you scores before senior year begins. If
          you need a third attempt, fall of 12th grade (August or October) is
          your last window before EA/ED deadlines.
        </p>
        <ul>
          <li>
            <strong>First attempt:</strong> March or May of 11th grade
          </li>
          <li>
            <strong>Second attempt:</strong> June of 11th grade (if needed)
          </li>
          <li>
            <strong>Final window:</strong> August or October of 12th grade
            (EA/ED-safe)
          </li>
        </ul>

        <h2>Step 5: When (and Whether) to Retest</h2>
        <p>
          Retesting makes sense when your score is meaningfully below your
          target range and you have a clear improvement plan. A jump of 40–60+
          SAT points or 2–3 ACT composite points is achievable with focused
          preparation. However, if your score is already within range for your
          target schools and you've already tested twice, weigh the time cost
          against other senior-year priorities like essays and applications.
          Most selective school applicants test 2–3 times total.
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
