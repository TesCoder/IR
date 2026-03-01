import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { trackCtaClick } from "@/lib/trackCta";

export default function ArticleFafsaCompletionChecklist() {
  const articleSchema = ArticleSchema({
    title: "FAFSA Completion Checklist: What to Gather Before You File",
    description:
      "Everything students and parents need to complete the FAFSA: FSA IDs, tax documents, account details, and deadline strategy to maximize financial aid.",
    author: "Ivy Ready",
    datePublished: "2026-02-28",
    dateModified: "2026-02-28",
  });

  return (
    <>
      <SEOHead
        title="FAFSA Completion Checklist"
        description="Everything students and parents need to complete the FAFSA: FSA IDs, tax documents, account details, and deadline strategy to maximize financial aid."
        url="/resources/fafsa-completion-checklist"
        type="article"
      />
      <SchemaScript schema={articleSchema} />
      <article className="mx-auto max-w-3xl px-6 py-14 prose prose-indigo">
        <h1>FAFSA Completion Checklist: What to Gather Before You File</h1>
        <p>
          <strong>Summary:</strong> The FAFSA (Free Application for Federal
          Student Aid) opens October 1 each year. Filing early maximizes your
          aid eligibility — many state and institutional grants are first-come,
          first-served. Use this checklist to gather everything before you sit
          down to file.
        </p>

        <h2>Step 1: Create FSA IDs (Do This First)</h2>
        <ul>
          <li>
            <strong>Student FSA ID:</strong> Create at{" "}
            <a
              href="https://studentaid.gov/fsa-id/create-account/launch"
              target="_blank"
              rel="noopener noreferrer"
            >
              studentaid.gov
            </a>
          </li>
          <li>
            <strong>Parent/Guardian FSA ID:</strong> Each contributing parent
            needs their own FSA ID
          </li>
          <li>Allow 1–3 days for ID verification before filing</li>
          <li>
            Store FSA IDs securely — you'll need them every year and for loan
            management
          </li>
        </ul>

        <h2>Step 2: Student Information</h2>
        <ul>
          <li>Social Security Number (or Alien Registration Number)</li>
          <li>Driver's license number (if applicable)</li>
          <li>Federal tax return (most recent completed year)</li>
          <li>W-2 forms or other records of money earned</li>
          <li>Records of untaxed income (child support, veterans benefits, etc.)</li>
          <li>Current bank statement (checking and savings balances)</li>
          <li>Investment accounts (if any — stocks, bonds, real estate)</li>
        </ul>

        <h2>Step 3: Parent/Guardian Information</h2>
        <ul>
          <li>Social Security Numbers for each contributing parent</li>
          <li>
            Federal tax return (most recent completed year) — use IRS Data
            Retrieval Tool (DRT) if eligible for faster verification
          </li>
          <li>W-2 forms and records of additional income</li>
          <li>Records of untaxed income (IRA contributions, pension payments, etc.)</li>
          <li>Current bank statements (checking and savings)</li>
          <li>Net worth of investments (excluding retirement accounts and primary home)</li>
          <li>Net worth of business or farm (if applicable)</li>
        </ul>

        <h2>Step 4: School List</h2>
        <ul>
          <li>
            Compile Federal School Codes for every college you're applying to
            — search at{" "}
            <a
              href="https://studentaid.gov/understanding-aid/eligibility/requirements/school-code-lookup"
              target="_blank"
              rel="noopener noreferrer"
            >
              studentaid.gov
            </a>
          </li>
          <li>You can list up to 20 schools on one FAFSA submission</li>
          <li>
            Add all schools before submitting — you can update the list later
            but it delays processing
          </li>
        </ul>

        <h2>Step 5: Key Deadlines</h2>
        <ul>
          <li>
            <strong>Federal deadline:</strong> June 30 of the award year (but
            don't wait)
          </li>
          <li>
            <strong>State deadlines:</strong> Vary widely — many states have
            priority deadlines in November or December; check your state's
            deadline at studentaid.gov
          </li>
          <li>
            <strong>Institutional deadlines:</strong> Many colleges have their
            own FAFSA priority dates (often Feb 1–Mar 1); check each school's
            financial aid page
          </li>
        </ul>

        <h2>Step 6: After You Submit</h2>
        <ul>
          <li>
            Save your Confirmation Page and Expected Family Contribution (EFC)
            / Student Aid Index (SAI) number
          </li>
          <li>
            Check each college's financial aid portal for any verification
            requests
          </li>
          <li>
            If selected for verification, submit requested documents promptly
            to avoid aid delays
          </li>
          <li>
            Compare financial aid award letters carefully when they arrive
            (spring senior year)
          </li>
        </ul>

        <hr />
        <p className="not-prose mt-8">
          <Link
            href="/free-consultation"
            onClick={() => {
              trackCtaClick({
                location: "article_cta",
                text: "Get help navigating your financial aid options",
                destination: "/free-consultation",
              });
            }}
            className="inline-flex rounded-2xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700"
          >
            Get help navigating your financial aid options →
          </Link>
        </p>
      </article>
      <div className="mx-auto max-w-3xl px-6 pb-14">
        <RelatedArticles
          title="Recommended next steps"
          items={[
            {
              title: "Financial Aid Award Comparison Toolkit",
              href: "/resources/financial-aid-award-comparison-toolkit",
              description:
                "Compare offers, calculate true cost, and plan appeals with a step-by-step worksheet.",
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
