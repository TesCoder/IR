import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceFinancialAidMeritVsNeed() {
  const title = "Merit Aid vs Need-Based Aid (What Families Should Know)";
  const description =
    "Understand merit vs need-based aid, how schools calculate need, and how to avoid common planning pitfalls.";
  const url = "/resources/financial-aid-merit-vs-need";

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
      title: "Compare Financial Aid Awards (How to Read Offers)",
      href: "/resources/financial-aid-award-comparison",
      description:
        "How to compare aid offers: net cost, grants vs loans, and negotiation steps.",
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
          Financial aid comes in two broad forms: merit-based and need-based.
          Understanding the difference — and how schools combine or prioritize
          them — helps families make better college list decisions and avoid
          costly surprises at decision time.
        </p>

        <h2>What Is Merit Aid?</h2>
        <p>
          Merit aid is awarded based on achievement, not financial need. Common
          types include:
        </p>
        <ul>
          <li>
            <strong>Academic merit scholarships</strong> — tied to GPA, class
            rank, or standardized test scores
          </li>
          <li>
            <strong>Talent-based awards</strong> — for demonstrated ability in
            music, art, theater, or other disciplines
          </li>
          <li>
            <strong>Athletic scholarships</strong> — offered by NCAA Division I
            and II programs; Division III schools do not offer athletic aid but
            may offer merit aid to recruited athletes
          </li>
        </ul>
        <p>
          Merit aid is most commonly offered by private colleges outside the
          very top tier and by many public universities. The Ivy League and
          several other highly selective schools do not offer merit aid at all —
          they are entirely need-based.
        </p>

        <h2>What Is Need-Based Aid?</h2>
        <p>
          Need-based aid is calculated using a formula: Cost of Attendance (COA)
          minus your Student Aid Index (SAI, formerly EFC). The SAI is derived
          from the FAFSA and, at some schools, the CSS Profile. The resulting
          "demonstrated need" determines the maximum need-based aid you can
          receive from federal, state, and institutional sources.
        </p>

        <h2>How the CSS Profile Changes the Equation</h2>
        <p>
          About 400 colleges — mostly private institutions — require the CSS
          Profile in addition to the FAFSA. The CSS Profile is more detailed: it
          asks about home equity, business assets, non-custodial parent finances,
          and other factors the FAFSA ignores. This means a family's calculated
          need at a CSS Profile school can differ significantly from their FAFSA
          SAI. Schools that use the CSS Profile often have more institutional
          funds to distribute but also a stricter definition of need.
        </p>

        <h2>Schools That Meet 100% of Need — and Those That Don't</h2>
        <p>
          A subset of colleges — including most Ivies, MIT, Stanford, and roughly
          100 others — commit to meeting 100% of demonstrated need for admitted
          students. This means their net cost can be lower than schools with
          lower sticker prices that do not make this commitment. Families
          researching affordability should check whether a school meets full
          need, and whether the aid is structured as grants (preferred) or
          includes significant loan expectations.
        </p>

        <h2>Why High-Income Families May Still Qualify for Merit Aid</h2>
        <p>
          Merit aid is not means-tested. A family earning $250,000 per year can
          receive a $30,000 merit scholarship if the student meets the academic
          threshold. This is why college list strategy matters: a student who
          would be average at a highly selective school might be a strong merit
          candidate at a school one tier down, resulting in a lower actual cost.
          Families sometimes find that a school with a higher sticker price
          offers a better net cost than a nominally cheaper option with no merit
          award.
        </p>

        <h2>Planning Implications</h2>
        <ul>
          <li>
            Build a college list that includes schools where the student's
            academic profile is in the top 25% of admitted students — those are
            the schools most likely to offer meaningful merit aid.
          </li>
          <li>
            If your family has significant financial need, prioritize schools
            that meet 100% of demonstrated need and use the CSS Profile (which
            gives them more data to make larger institutional grants).
          </li>
          <li>
            Do not assume need-based aid will be sufficient at schools that do
            not meet full need — the gap between demonstrated need and actual
            award can be large.
          </li>
          <li>
            Compare net cost across your full list before making any final
            decision.
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
