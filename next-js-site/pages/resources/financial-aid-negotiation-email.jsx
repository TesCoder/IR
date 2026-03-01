import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceFinancialAidNegotiationEmail() {
  const title = "Financial Aid Negotiation Email (How to Ask for More Aid)";
  const description =
    "How to negotiate aid offers: what to compare, what to ask for, and a clear email script you can customize.";
  const url = "/resources/financial-aid-negotiation-email";

  const primaryCta = {
    location: "article_related",
    text: "Get help comparing offers",
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
      title: "Financial Aid Appeal Letter (Template + What to Say)",
      href: "/resources/financial-aid-appeal-letter",
      description:
        "A realistic appeal template for when your aid offer doesn't match your need.",
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
        "A quick-reference checklist for every step in the FAFSA process.",
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
          Many families don't realize that financial aid offers are often a
          starting point, not a final answer. Asking for more aid is common,
          professional, and expected at most schools — as long as you approach it
          correctly. Here's the difference between an appeal and a negotiation,
          when to use each, and exactly what to write.
        </p>

        <h2>Appeal vs. Negotiation: Know the Difference</h2>
        <p>
          These terms are sometimes used interchangeably, but they rely on
          different logic:
        </p>
        <ul>
          <li>
            <strong>An appeal</strong> is based on changed or unusual
            circumstances — a job loss, a medical expense, information that wasn't
            captured on your FAFSA. You're asking the school to reconsider based
            on new facts.
          </li>
          <li>
            <strong>A negotiation</strong> is based on a competing offer — you
            have a better package from a comparable school and you're asking your
            preferred school to match or come closer to it.
          </li>
        </ul>
        <p>
          This page focuses on the negotiation side. If your situation involves
          changed circumstances, see our{" "}
          <Link href="/resources/financial-aid-appeal-letter">
            Financial Aid Appeal Letter guide
          </Link>{" "}
          instead.
        </p>

        <h2>When to Use a Competing Offer as Leverage</h2>
        <p>
          Not every competing offer is useful leverage. To negotiate effectively:
        </p>
        <ul>
          <li>
            The competing school should be reasonably comparable in academic
            profile and selectivity
          </li>
          <li>
            The gap between offers should be meaningful — $2,000 or more per year
            is worth raising
          </li>
          <li>
            You should genuinely prefer the school you're contacting; this comes
            through in how you write
          </li>
        </ul>
        <p>
          Comparing a flagship state school's offer against a highly selective
          private university's package rarely works — different cost structures
          mean the comparison doesn't translate.
        </p>

        <h2>Timing</h2>
        <p>
          Contact the financial aid office <strong>within two weeks</strong> of
          receiving your award letters. Most schools have internal review
          deadlines, and waiting until May 1 leaves little room for back-and-forth.
          Earlier is better.
        </p>

        <h2>What Schools Can (and Can't) Match</h2>
        <p>
          Schools can often increase merit aid, add institutional grants, or adjust
          work-study and loan components. They generally cannot manufacture
          federal grants (Pell, SEOG) that your competing offer includes — those
          are determined by your EFC, not the school. Focus your ask on the
          components the school controls.
        </p>

        <h2>Sample Email Template</h2>
        <p>
          Customize the bracketed sections. Keep it under 200 words — brevity
          signals confidence.
        </p>
        <blockquote>
          <p>
            Subject: Financial Aid Review Request — [Your Full Name], Class of
            [Year]
          </p>
          <p>
            Dear [Financial Aid Office / Name if known],
          </p>
          <p>
            I was recently admitted to [School Name] and am genuinely excited
            about the opportunity. [School Name] remains my first choice.
          </p>
          <p>
            I've also received an offer from [Competing School], which is
            comparable in [academic fit / program strength / location]. Their
            package includes [X in grants/scholarships], bringing my total cost of
            attendance to approximately $[amount] per year.
          </p>
          <p>
            I'm hoping [School Name] might be able to review my aid package in
            light of this offer. I'd be grateful for any additional support that
            would make attendance possible for my family. I'm happy to provide the
            award letter as documentation.
          </p>
          <p>
            Thank you for your time and for the support you've already offered.
          </p>
          <p>Sincerely,<br />[Your Name]<br />[Student ID if known]</p>
        </blockquote>

        <h2>If the Answer Is No</h2>
        <p>
          Some schools won't move, especially those that are need-blind with rigid
          formulas. If you get a no, ask one follow-up question: "Is there anything
          additional I should submit, or any future review opportunities?" This
          keeps the door open without being pushy. Then make your decision with the
          information you have.
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
