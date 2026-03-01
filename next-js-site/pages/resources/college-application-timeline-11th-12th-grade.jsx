import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { trackCtaClick } from "@/lib/trackCta";

export default function ArticleApplicationTimeline11th12th() {
  const articleSchema = ArticleSchema({
    title: "College Application Timeline for 11th and 12th Grade",
    description:
      "Month-by-month college application timeline for juniors and seniors: testing, essays, recommendation letters, financial aid, and submission deadlines.",
    author: "Ivy Ready",
    datePublished: "2026-02-28",
    dateModified: "2026-02-28",
  });

  return (
    <>
      <SEOHead
        title="College Application Timeline (11th–12th Grade)"
        description="Month-by-month college application timeline for juniors and seniors: testing, essays, recommendation letters, financial aid, and submission deadlines."
        url="/resources/college-application-timeline-11th-12th-grade"
        type="article"
      />
      <SchemaScript schema={articleSchema} />
      <article className="mx-auto max-w-3xl px-6 py-14 prose prose-indigo">
        <h1>College Application Timeline for 11th and 12th Grade</h1>
        <p>
          <strong>Summary:</strong> The application process spans 18 months
          across junior and senior year. Use this month-by-month calendar to
          stay ahead of testing windows, essay drafts, recommendation requests,
          and financial aid deadlines.
        </p>

        <h2>Grade 11 (Junior Year)</h2>

        <h3>September – October</h3>
        <ul>
          <li>Take the PSAT/NMSQT (October) — qualifies for National Merit</li>
          <li>Research college list based on fit, programs, and outcomes</li>
          <li>Meet with your school counselor to review course plan</li>
          <li>Begin thinking about essay themes and personal stories</li>
        </ul>

        <h3>November – December</h3>
        <ul>
          <li>Review PSAT results; calibrate SAT/ACT plan</li>
          <li>Register for spring SAT or ACT (March–June window)</li>
          <li>Begin research visits or virtual tours of target schools</li>
        </ul>

        <h3>January – February</h3>
        <ul>
          <li>Finalize initial college list (12–18 schools at this stage)</li>
          <li>Identify 2 teachers for recommendation letters — build relationships now</li>
          <li>Draft first personal statement brainstorm (Common App prompt 1)</li>
        </ul>

        <h3>March – April</h3>
        <ul>
          <li>
            <strong>Take SAT or ACT</strong> (first attempt; spring window)
          </li>
          <li>Start a rough personal statement draft</li>
          <li>Research early action and early decision options carefully</li>
          <li>Schedule summer campus visits</li>
        </ul>

        <h3>May – June</h3>
        <ul>
          <li>AP exams — strong scores can strengthen your application</li>
          <li>Formally ask 2 teachers for recommendation letters</li>
          <li>Submit brag sheet to counselor for their recommendation</li>
          <li>
            Refine college list to 10–14 schools across reach, match, and
            safety
          </li>
        </ul>

        <h3>Summer Between Junior and Senior Year</h3>
        <ul>
          <li>
            <strong>Write your personal statement</strong> — aim for a complete
            draft by August
          </li>
          <li>Draft school-specific supplements for your top 3–5 schools</li>
          <li>Retake SAT/ACT in August if needed</li>
          <li>Visit campuses; attend open houses and info sessions</li>
          <li>Gather financial documents for FAFSA (available October 1)</li>
        </ul>

        <h2>Grade 12 (Senior Year)</h2>

        <h3>August – September</h3>
        <ul>
          <li>Finalize college list (10–14 schools)</li>
          <li>Open Common App account; complete demographics and activities</li>
          <li>Confirm EA/ED schools and deadlines</li>
          <li>
            Confirm recommendation letter status with each teacher/counselor
          </li>
          <li>Retake SAT/ACT if August scores weren't strong enough</li>
        </ul>

        <h3>October</h3>
        <ul>
          <li>
            <strong>FAFSA opens October 1</strong> — file as early as possible
          </li>
          <li>CSS Profile due for many private schools (check each deadline)</li>
          <li>Submit ED applications (deadline Nov 1 or Nov 15 for most schools)</li>
          <li>Submit EA applications (deadline Nov 1 or Nov 15)</li>
          <li>Send final SAT/ACT scores to all colleges on your list</li>
        </ul>

        <h3>November – December</h3>
        <ul>
          <li>Receive ED results (typically mid-December)</li>
          <li>Complete and submit all Regular Decision applications</li>
          <li>Send mid-year report (first-semester transcript) when available</li>
          <li>Apply for merit scholarships with December–January deadlines</li>
        </ul>

        <h3>January – March</h3>
        <ul>
          <li>
            RD deadline for most schools: <strong>Jan 1–15</strong>
          </li>
          <li>Continue applying for external scholarships</li>
          <li>Check application portals for missing documents or updates</li>
        </ul>

        <h3>April – May</h3>
        <ul>
          <li>Admission decisions arrive (typically late March – early April)</li>
          <li>
            Compare financial aid award letters (deadline to commit:{" "}
            <strong>May 1</strong>)
          </li>
          <li>Appeal financial aid offers if needed</li>
          <li>Submit final deposit and housing application</li>
          <li>Notify schools you won't be attending</li>
        </ul>

        <hr />
        <p className="not-prose mt-8">
          <Link
            href="/free-consultation"
            onClick={() => {
              trackCtaClick({
                location: "article_cta",
                text: "Build your personalized application calendar",
                destination: "/free-consultation",
              });
            }}
            className="inline-flex rounded-2xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700"
          >
            Build your personalized application calendar →
          </Link>
        </p>
      </article>
      <div className="mx-auto max-w-3xl px-6 pb-14">
        <RelatedArticles
          title="Recommended next steps"
          items={[
            {
              title: "College Application Checklist",
              href: "/resources/college-application-checklist",
              description:
                "Everything you need to submit — testing, essays, recs, and financial aid.",
            },
            {
              title: "When to Take the ACT vs SAT",
              href: "/resources/when-to-take-act-vs-sat",
              description:
                "Choose the right test and timing based on GPA, course load, and deadlines.",
            },
            {
              title: "FAFSA Completion Checklist",
              href: "/resources/fafsa-completion-checklist",
              description:
                "Prep documents, IDs, and deadlines to file FAFSA accurately and early.",
            },
            {
              title: "How to Choose and Ask for Letters of Recommendation",
              href: "/resources/choosing-recommenders",
              description:
                "Equip teachers with context, deadlines, and examples for stronger letters.",
            },
          ]}
        />
      </div>
    </>
  );
}
