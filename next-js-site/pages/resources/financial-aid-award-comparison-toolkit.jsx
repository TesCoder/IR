import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { trackCtaClick } from "@/lib/trackCta";

export default function ArticleFinancialAidComparison() {
  const articleSchema = ArticleSchema({
    title: "Financial Aid Award Comparison Toolkit",
    description:
      "How to compare college financial aid offers side by side: calculate true net cost, spot misleading packaging, and build a case for an appeal.",
    author: "Ivy Ready",
    datePublished: "2026-02-28",
    dateModified: "2026-02-28",
  });

  return (
    <>
      <SEOHead
        title="Financial Aid Award Comparison Toolkit"
        description="How to compare college financial aid offers side by side: calculate true net cost, spot misleading packaging, and build a case for an appeal."
        url="/resources/financial-aid-award-comparison-toolkit"
        type="article"
      />
      <SchemaScript schema={articleSchema} />
      <article className="mx-auto max-w-3xl px-6 py-14 prose prose-indigo">
        <h1>Financial Aid Award Comparison Toolkit</h1>
        <p>
          <strong>Summary:</strong> Aid letters are deliberately hard to
          compare. Schools format them differently, bury loan amounts, and omit
          key costs. This toolkit shows you how to strip each offer down to
          your true out-of-pocket cost and build a comparison that leads to the
          best decision — or a stronger appeal.
        </p>

        <h2>Step 1: Understand What's in an Award Letter</h2>
        <p>
          Every award letter mixes four types of aid. Separate them before you
          compare anything.
        </p>
        <ul>
          <li>
            <strong>Grants & scholarships (free money):</strong> Need-based
            grants (federal, state, institutional) + merit scholarships. This
            money doesn't need to be repaid.
          </li>
          <li>
            <strong>Work-study:</strong> Federal program that funds a part-time
            campus job. You earn this — it doesn't appear on your bill
            automatically.
          </li>
          <li>
            <strong>Subsidized loans:</strong> Federal loans where interest
            doesn't accrue while you're enrolled. These must be repaid.
          </li>
          <li>
            <strong>Unsubsidized loans:</strong> Federal loans that begin
            accruing interest immediately. These must be repaid.
          </li>
        </ul>
        <p>
          <em>
            Warning: Some schools list loans and work-study as part of your
            "aid package," making the total look larger than the actual free
            money.
          </em>
        </p>

        <h2>Step 2: Calculate True Net Cost for Each School</h2>
        <p>Use this formula for each offer:</p>
        <pre>
          <code>
            {`Total Cost of Attendance (COA)
- Grants & Scholarships (free money only)
= Net Cost (your true out-of-pocket cost)`}
          </code>
        </pre>
        <p>
          <strong>Cost of Attendance includes:</strong> tuition + fees + room &
          board + books + personal expenses + transportation. Ask the financial
          aid office for the full COA figure if the letter doesn't include it.
        </p>

        <h2>Step 3: Build Your Side-by-Side Comparison</h2>
        <p>
          For each school, record the following in a spreadsheet or table:
        </p>
        <ul>
          <li>Total Cost of Attendance (COA)</li>
          <li>Total grants + scholarships (free money)</li>
          <li>Work-study amount (note: earned, not automatic)</li>
          <li>Total loans offered (subsidized + unsubsidized)</li>
          <li>
            <strong>Net Cost</strong> (COA minus free money only)
          </li>
          <li>
            <strong>Net Cost after loans</strong> (COA minus all aid including
            loans)
          </li>
          <li>Scholarship renewal requirements (GPA minimums, deadlines)</li>
          <li>Whether aid is guaranteed for 4 years</li>
        </ul>

        <h2>Step 4: Questions to Ask Each Financial Aid Office</h2>
        <ul>
          <li>Is this aid renewable for all four years? What are the conditions?</li>
          <li>
            Does the institutional grant increase if tuition increases, or does
            my share grow?
          </li>
          <li>
            What percentage of students graduate in 4 years? (More years = more
            total cost)
          </li>
          <li>
            Are there additional merit scholarships I haven't been considered
            for yet?
          </li>
          <li>What is the typical aid package for students like me in Year 2–4?</li>
        </ul>

        <h2>Step 5: How to Appeal a Financial Aid Offer</h2>
        <p>
          You can appeal if you have a competing offer from a comparable
          school, or if your family's financial situation has changed.
        </p>
        <ul>
          <li>
            <strong>Competing offer appeal:</strong> Contact the financial aid
            office directly. Provide the competing award letter. Ask: "Is there
            anything you can do to match or improve this offer?"
          </li>
          <li>
            <strong>Changed circumstances appeal:</strong> Submit a formal
            appeal letter documenting the change (job loss, medical bills,
            divorce) with supporting documents.
          </li>
          <li>
            Be professional and specific — state the exact dollar gap and what
            you need.
          </li>
          <li>
            Deadline matters: appeal before you commit (May 1 is National
            Decision Day for most schools).
          </li>
        </ul>

        <h2>Step 6: Red Flags to Watch For</h2>
        <ul>
          <li>
            Aid package buries loans — look for the total free money line, not
            just "total aid"
          </li>
          <li>
            No mention of whether the scholarship is renewable or requires a
            GPA threshold
          </li>
          <li>
            One-time merit awards inflating Year 1 but not Year 2–4 costs
          </li>
          <li>
            Work-study listed as aid when it requires you to find and work a
            job to receive it
          </li>
        </ul>

        <hr />
        <p className="not-prose mt-8">
          <Link
            href="/free-consultation"
            onClick={() => {
              trackCtaClick({
                location: "article_cta",
                text: "Get help comparing and appealing your aid offers",
                destination: "/free-consultation",
              });
            }}
            className="inline-flex rounded-2xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700"
          >
            Get help comparing and appealing your aid offers →
          </Link>
        </p>
      </article>
      <div className="mx-auto max-w-3xl px-6 pb-14">
        <RelatedArticles
          title="Recommended next steps"
          items={[
            {
              title: "FAFSA Completion Checklist",
              href: "/resources/fafsa-completion-checklist",
              description:
                "Prep documents, IDs, and deadlines to file FAFSA accurately and early.",
            },
            {
              title: "College Application Checklist",
              href: "/resources/college-application-checklist",
              description:
                "Everything you need to submit — testing, essays, recs, and financial aid.",
            },
            {
              title: "College Application Timeline (11th–12th Grade)",
              href: "/resources/college-application-timeline-11th-12th-grade",
              description:
                "Month-by-month tasks for testing, essays, recommendations, and submissions.",
            },
            {
              title: "How to Build a Balanced College List",
              href: "/resources/building-a-college-list",
              description:
                "Calibrate reach, match, and safety choices with real fit criteria.",
            },
          ]}
        />
      </div>
    </>
  );
}
