import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceFinancialAidAppealLetter() {
  const title = "Financial Aid Appeal Letter (Template + What to Say)";
  const description =
    "A realistic appeal template, what documentation helps, and how to write a strong request without sounding entitled.";
  const url = "/resources/financial-aid-appeal-letter";

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
      title: "Financial Aid Negotiation Email (How to Ask for More Aid)",
      href: "/resources/financial-aid-negotiation-email",
      description:
        "How to negotiate aid offers with a clear email script you can customize.",
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
          Receiving a financial aid offer that doesn't meet your family's need is
          more common than most students expect. The good news: many schools have
          a formal appeals process, and a well-written letter can make a real
          difference. The key is understanding when an appeal is appropriate, what
          documentation strengthens your case, and how to strike the right tone.
        </p>

        <h2>When an Appeal Is Appropriate</h2>
        <p>
          Not every disappointment justifies an appeal. Schools are most
          responsive when something has materially changed or was not captured on
          your original application:
        </p>
        <ul>
          <li>
            <strong>Change in financial circumstances</strong> — job loss, reduced
            income, or a parent's retirement since you filed the FAFSA
          </li>
          <li>
            <strong>Unusual or extraordinary expenses</strong> — significant
            medical bills, a family member requiring care, or a natural disaster
          </li>
          <li>
            <strong>Competing offers</strong> — a comparable school has offered
            meaningfully more aid (this is closer to negotiation, but many
            schools treat it through the same appeal channel)
          </li>
          <li>
            <strong>Errors or omissions</strong> — information that was missing
            from your original financial aid application
          </li>
        </ul>
        <p>
          If none of these apply, an appeal is unlikely to succeed. Schools base
          awards on formulas, and without new information, there is little basis
          for a revision.
        </p>

        <h2>What Documentation to Include</h2>
        <p>
          A strong appeal is a documented appeal. Attach evidence that supports
          every claim you make:
        </p>
        <ul>
          <li>Recent tax documents or a letter from an employer confirming job loss</li>
          <li>Medical bills or a letter from a healthcare provider</li>
          <li>Documentation of any one-time or ongoing unusual expense</li>
          <li>
            Award letters from competing schools if you are using a competing
            offer as part of your case
          </li>
        </ul>
        <p>
          The financial aid office needs something they can file. Vague
          explanations without paperwork rarely move the needle.
        </p>

        <h2>Structure of a Strong Appeal Letter</h2>
        <p>Keep your appeal to three short paragraphs:</p>
        <ol>
          <li>
            <strong>Paragraph 1 — Circumstances:</strong> State what changed or
            what was not reflected in your original application. Be specific and
            factual. Avoid emotional language.
          </li>
          <li>
            <strong>Paragraph 2 — Attachment to the school:</strong> Briefly
            explain why this school is your first choice. This signals you are
            serious, not just fishing for leverage.
          </li>
          <li>
            <strong>Paragraph 3 — Specific ask:</strong> Name a dollar amount or
            describe what you need. "Any additional support would help" is weaker
            than "An additional $4,000 per year would make attendance feasible."
          </li>
        </ol>

        <h2>Tone: Factual, Not Entitled</h2>
        <p>
          Financial aid officers read hundreds of appeals. The ones that work are
          matter-of-fact, brief, and respectful of the process. Avoid phrases like
          "I deserve more" or comparisons that frame the school negatively. Thank
          them for their time and the original offer before making your request.
        </p>

        <h2>Realistic Expectations</h2>
        <p>
          Most appeals result in modest adjustments, not dramatic increases. Some
          schools have more flexibility than others — smaller private schools
          often have more room to negotiate than large publics. A successful appeal
          might recover $2,000–$5,000 per year. That said, it costs nothing to ask
          professionally, and even a small adjustment compounds over four years.
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
