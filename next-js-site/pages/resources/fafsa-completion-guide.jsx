import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceFafsaCompletionGuide() {
  const title = "FAFSA Completion Guide (Step-by-Step)";
  const description =
    "A step-by-step FAFSA completion guide: what you need, common mistakes, and timelines—plus what to do if you get stuck.";
  const url = "/resources/fafsa-completion-guide";

  const primaryCta = {
    location: "article_related",
    text: "Get FAFSA help",
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
      title: "Compare Financial Aid Awards (How to Read Offers)",
      href: "/resources/financial-aid-award-comparison",
      description:
        "How to compare aid offers: net cost, grants vs loans, and negotiation steps.",
    },
    {
      title: "Merit Aid vs Need-Based Aid (What Families Should Know)",
      href: "/resources/financial-aid-merit-vs-need",
      description:
        "Understand merit vs need-based aid and how schools calculate your need.",
    },
    {
      title: "FAFSA Completion Checklist",
      href: "/resources/fafsa-completion-checklist",
      description:
        "A quick-reference checklist for every document and step in the FAFSA process.",
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
          The FAFSA (Free Application for Federal Student Aid) is the gateway to
          federal grants, work-study, and loans — and for most colleges,
          institutional aid too. Filing early and filing correctly can mean
          thousands of dollars in additional aid. Here is how to do it right.
        </p>

        <h2>Who Needs to File</h2>
        <p>
          Any student planning to attend a U.S. college or university should
          file the FAFSA, regardless of family income. Many merit and
          institutional grants require FAFSA completion even if you do not
          expect need-based aid. Dependent students (most undergraduates under
          24) must include parent financial information.
        </p>

        <h2>Documents You Need Before You Start</h2>
        <ul>
          <li>
            <strong>Social Security Numbers</strong> — for the student and each
            contributing parent
          </li>
          <li>
            <strong>Federal tax returns</strong> — prior-prior year (e.g., for
            2026–27 aid, use 2024 returns); use the IRS Data Retrieval Tool
            (DRT) to import directly
          </li>
          <li>
            <strong>W-2s and income records</strong> — including untaxed income
            such as child support or veterans benefits
          </li>
          <li>
            <strong>Bank statements</strong> — current balances for checking and
            savings accounts
          </li>
          <li>
            <strong>Investment account values</strong> — stocks, bonds, real
            estate (excluding your primary home and retirement accounts)
          </li>
          <li>
            <strong>FSA IDs</strong> — both student and parent must create
            accounts at studentaid.gov before filing; allow 1–3 days for
            identity verification
          </li>
        </ul>

        <h2>Understanding the SAI</h2>
        <p>
          The FAFSA calculates your Student Aid Index (SAI), formerly called the
          Expected Family Contribution (EFC). The SAI is a number that schools
          use to determine how much need-based aid you qualify for. A lower SAI
          means more potential aid. The SAI is determined by income, assets,
          household size, and number of students in college simultaneously.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>
            <strong>Using the wrong tax year.</strong> The FAFSA uses prior-prior
            year income — double-check which year applies before entering figures.
          </li>
          <li>
            <strong>Skipping the non-custodial parent.</strong> If your parents
            are divorced or separated, the FAFSA requires information from the
            parent the student lived with most during the past 12 months — and
            some schools (via the CSS Profile) require both parents.
          </li>
          <li>
            <strong>Listing assets incorrectly.</strong> Retirement accounts and
            the primary home are excluded; 529 plans owned by a parent are
            reported as parent assets (more favorable treatment).
          </li>
          <li>
            <strong>Missing the school list.</strong> Add every school you are
            applying to before submitting — updating later delays processing.
          </li>
        </ul>

        <h2>Priority Deadline vs. Final Deadline</h2>
        <p>
          The federal deadline is June 30 of the award year, but this is not
          when you should file. State grant programs often have priority
          deadlines as early as November or December, and institutional aid at
          many colleges is first-come, first-served. File as close to October 1
          (the opening date) as possible.
        </p>

        <h2>What to Do After Submission</h2>
        <ul>
          <li>
            Save your confirmation page and note your SAI number.
          </li>
          <li>
            Monitor each college's financial aid portal — some will request
            additional verification documents.
          </li>
          <li>
            If selected for verification, respond promptly; delays can push back
            your aid offer.
          </li>
          <li>
            When award letters arrive in the spring, compare net cost carefully
            — not just the headline numbers.
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
