import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceFinancialAidAwardComparison() {
  const title = "Compare Financial Aid Awards (How to Read Offers)";
  const description =
    "How to compare aid offers: net cost, grants vs loans, renewal rules, and practical negotiation steps.";
  const url = "/resources/financial-aid-award-comparison";

  const primaryCta = {
    location: "article_related",
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
      title: "FAFSA Completion Guide (Step-by-Step)",
      href: "/resources/fafsa-completion-guide",
      description:
        "A step-by-step guide to completing the FAFSA, including common mistakes to avoid.",
    },
    {
      title: "Merit Aid vs Need-Based Aid (What Families Should Know)",
      href: "/resources/financial-aid-merit-vs-need",
      description:
        "Understand merit vs need-based aid and how schools calculate your need.",
    },
    {
      title: "Financial Aid Award Comparison Toolkit",
      href: "/resources/financial-aid-award-comparison-toolkit",
      description:
        "A side-by-side toolkit to compare financial aid packages from multiple schools.",
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
          When financial aid award letters arrive in the spring, the numbers can
          look impressive — until you realize not all aid is equal. Grants are
          free money; loans must be repaid with interest. Understanding what you
          are actually being offered, and how to compare offers across schools,
          is one of the most important steps in the college decision process.
        </p>

        <h2>How to Read an Award Letter</h2>
        <p>
          Award letters are not standardized, which makes comparison harder than
          it should be. Break every offer into three categories:
        </p>
        <ul>
          <li>
            <strong>Grants and scholarships</strong> — money you do not repay
            (federal Pell Grant, institutional grants, merit scholarships)
          </li>
          <li>
            <strong>Work-study</strong> — earnings from a campus job; you must
            work to receive this money and it does not reduce your bill upfront
          </li>
          <li>
            <strong>Loans</strong> — federal subsidized and unsubsidized loans,
            or PLUS loans; these must be repaid and should not be treated as
            "aid" in the same sense as grants
          </li>
        </ul>

        <h2>Calculating True Net Cost</h2>
        <p>
          Net cost = Cost of Attendance (COA) minus grants and scholarships only.
          Do not subtract loans or work-study from this number. COA includes
          tuition, fees, room, board, books, and personal expenses — some schools
          inflate these estimates, so verify the actual figures on each school's
          website.
        </p>
        <p>
          A $60,000 school offering $25,000 in grants has a net cost of $35,000.
          A $50,000 school offering $10,000 in grants has a net cost of $40,000 —
          making the nominally cheaper school actually more expensive.
        </p>

        <h2>Understanding Renewal Conditions</h2>
        <p>
          Many institutional scholarships have renewal requirements that are not
          prominently disclosed. Before committing to a school, confirm:
        </p>
        <ul>
          <li>
            <strong>GPA requirement</strong> — what minimum GPA must you maintain
            to keep the award?
          </li>
          <li>
            <strong>Award duration</strong> — is the scholarship guaranteed for
            four years, or subject to annual review?
          </li>
          <li>
            <strong>Credit hours</strong> — some awards require full-time
            enrollment or a specific course load
          </li>
          <li>
            <strong>Stacking rules</strong> — can institutional aid be combined
            with outside scholarships, or will the school reduce your award?
          </li>
        </ul>

        <h2>Comparing Offers Side by Side</h2>
        <p>
          Build a simple spreadsheet with one column per school. For each,
          record: COA, total grants, net cost (COA minus grants), loan amounts,
          and any renewal conditions. Sort by net cost — not by sticker price or
          total package size. This will often reveal surprising rankings.
        </p>

        <h2>When and How to Appeal</h2>
        <p>
          You can appeal a financial aid offer if your circumstances have
          changed (job loss, medical expenses, divorce) or if you have a
          competing offer from a comparable school. Contact the financial aid
          office directly — email is fine, but a phone call is often more
          effective. Be specific: provide the competing offer amount or the
          changed circumstance in writing. Many schools have formal appeal or
          "professional judgment" processes, and decisions can change
          significantly for families who ask.
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
