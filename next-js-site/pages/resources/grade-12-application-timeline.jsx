import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceGrade12ApplicationTimeline() {
  const title = "12th Grade College Application Timeline";
  const description =
    "A month-by-month senior-year application timeline covering essays, recommendations, deadlines, and decision milestones.";
  const url = "/resources/grade-12-application-timeline";

  const primaryCta = {
    location: "resources_related",
    text: "See support packages",
    destination: "/services/support-packages",
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
      title: "11th Grade Testing Plan (SAT/ACT)",
      href: "/resources/grade-11-testing-plan",
      description:
        "A junior-year testing plan: diagnostics, study schedule, and test dates.",
    },
    {
      title: "12th Grade Essay Schedule (Week-by-Week)",
      href: "/resources/grade-12-essay-schedule",
      description:
        "A week-by-week essay schedule for senior fall: brainstorming through final polish.",
    },
    {
      title: "College Application Checklist",
      href: "/resources/college-application-checklist",
      description:
        "A complete checklist of everything you need to submit a strong application.",
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
          Senior year is short and deadline-driven. A clear month-by-month
          timeline keeps you from scrambling in October and lets you give every
          application component the time it deserves. Here's exactly what to
          tackle each month.
        </p>

        <h2>August: Summer Push</h2>
        <p>
          August is your most productive writing month — school hasn't started
          yet and you have uninterrupted time. Use it.
        </p>
        <ul>
          <li>
            Draft your Common App personal statement (650 words); aim for a
            complete first draft before school begins
          </li>
          <li>
            Email your 2–3 recommendation writers with a formal request, your
            resume, and a deadline reminder
          </li>
          <li>
            Finalize your college list: reach, target, and likely schools
            balanced across deadlines and fit
          </li>
          <li>
            If you plan to test again in August (SAT/ACT), confirm registration
            and continue prep
          </li>
        </ul>

        <h2>September: Finalize Your List and Start EA/ED Prep</h2>
        <ul>
          <li>
            Lock your college list — no more additions after September 15
          </li>
          <li>
            Open Common App school-specific supplements for EA/ED targets and
            begin drafting
          </li>
          <li>
            Confirm recommendation writers are on track; share any school-specific
            details they need
          </li>
          <li>
            Create application portal accounts for every school on your list
          </li>
          <li>
            October test date: last chance to sit before EA/ED deadlines — confirm
            your registration
          </li>
        </ul>

        <h2>October: EA/ED Submissions</h2>
        <p>
          Most Early Action and Early Decision I deadlines fall November 1–15,
          which means your final review window is October.
        </p>
        <ul>
          <li>
            Proofread every EA/ED essay — read aloud, then have a trusted reader
            review
          </li>
          <li>
            Submit EA/ED applications by October 28–31 to allow buffer before the
            deadline
          </li>
          <li>
            Confirm test scores are sent to EA/ED schools; check reporting
            deadlines in each portal
          </li>
          <li>
            Begin drafting Regular Decision supplements while EA/ED applications
            are fresh
          </li>
        </ul>

        <h2>November: ED Decision and RD Finalization</h2>
        <ul>
          <li>
            ED I decisions typically arrive in mid-December — continue working on
            RD applications regardless
          </li>
          <li>
            Finalize all Regular Decision essays and supplements by end of November
          </li>
          <li>
            File FAFSA as early as possible (priority deadlines vary; many are
            December–February)
          </li>
          <li>
            Submit CSS Profile for schools that require it alongside FAFSA
          </li>
        </ul>

        <h2>December: Regular Decision Submission</h2>
        <ul>
          <li>
            Submit all Regular Decision applications by December 20 — before the
            holiday break disrupts your focus
          </li>
          <li>
            January 1 and January 15 RD deadlines are the most common; do not
            wait until the day-of
          </li>
          <li>
            ED I decisions arrive: if admitted, withdraw all other applications
            promptly per binding agreement
          </li>
          <li>
            Save confirmation emails for every application submitted
          </li>
        </ul>

        <h2>January–March: Decisions Roll In</h2>
        <ul>
          <li>
            EA decisions typically arrive December–January; review financial aid
            award letters carefully
          </li>
          <li>
            RD decisions arrive February–April; most schools notify by April 1
          </li>
          <li>
            Compare financial aid offers using a side-by-side award letter
            breakdown
          </li>
          <li>
            Appeal financial aid decisions before the stated deadline if your
            offer is lower than expected
          </li>
          <li>
            Enrollment deposit deadline is typically <strong>May 1</strong> —
            commit to one school and withdraw from all others
          </li>
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
