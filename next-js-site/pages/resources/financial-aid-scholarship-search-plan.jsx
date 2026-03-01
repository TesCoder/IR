import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

export default function ResourceFinancialAidScholarshipSearchPlan() {
  const title = "Scholarship Search Plan (Weekly System That Works)";
  const description =
    "A weekly scholarship system (sources, tracking, deadlines) that's sustainable—and how to avoid low-ROI applications.";
  const url = "/resources/financial-aid-scholarship-search-plan";

  const primaryCta = {
    location: "article_related",
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
      title: "Financial Aid Appeal Letter (Template + What to Say)",
      href: "/resources/financial-aid-appeal-letter",
      description:
        "A realistic appeal template for when your aid offer doesn't match your need.",
    },
    {
      title: "Financial Aid Negotiation Email (How to Ask for More Aid)",
      href: "/resources/financial-aid-negotiation-email",
      description:
        "How to negotiate aid offers with a clear email script you can customize.",
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
          Most students who search for scholarships don't win many. Not because
          scholarships don't exist, but because they apply to the wrong ones
          without a system. A few hours of unfocused effort each week produces
          little. A structured weekly plan — targeting the right sources, tracking
          deadlines, and reusing essays intelligently — produces real results.
        </p>

        <h2>Why Most Students Waste Time on Scholarships</h2>
        <p>
          The instinct is to find the biggest scholarship and apply for it.
          National competitions with $10,000+ awards attract tens of thousands of
          applicants. Your odds are typically worse than a lottery ticket. The
          students who actually fund meaningful portions of their education through
          scholarships do the opposite: they identify lower-competition
          opportunities where their profile is a strong match.
        </p>

        <h2>A Realistic Weekly Time Budget</h2>
        <p>
          Two to three hours per week is sustainable and sufficient for most
          students. Spend it like this:
        </p>
        <ul>
          <li>
            <strong>30 minutes:</strong> Research new scholarships and add them to
            your tracker
          </li>
          <li>
            <strong>60–90 minutes:</strong> Work on one active application — essay,
            form, or supporting materials
          </li>
          <li>
            <strong>30 minutes:</strong> Review upcoming deadlines and follow up
            on submitted applications
          </li>
        </ul>
        <p>
          Consistency beats intensity. Thirty minutes three days a week outperforms
          a single five-hour session once a month.
        </p>

        <h2>High-ROI Sources to Prioritize</h2>
        <p>
          The best scholarships are the ones with fewer applicants relative to
          awards given. Focus here first:
        </p>
        <ul>
          <li>
            <strong>Local community foundations</strong> — county and city
            foundations, rotary clubs, and civic organizations often award
            $500–$3,000 to students in their geographic area with very few
            applicants
          </li>
          <li>
            <strong>Employer-affiliated programs</strong> — if a parent works for
            a mid-to-large company, check whether it offers scholarships for
            dependents; many do, and competition is limited to employees' children
          </li>
          <li>
            <strong>Institutional aid at your target schools</strong> — school-
            specific merit awards are the single largest scholarship opportunity
            for most students; these are baked into your admissions decision and
            require no separate application at many schools
          </li>
          <li>
            <strong>Identity- or field-specific programs</strong> — scholarships
            tied to your intended major, heritage, religion, or community
            affiliation tend to have smaller applicant pools than general awards
          </li>
        </ul>

        <h2>Build a Simple Tracking Spreadsheet</h2>
        <p>
          A spreadsheet with five columns is all you need:
        </p>
        <ul>
          <li><strong>Scholarship name</strong></li>
          <li><strong>Award amount</strong></li>
          <li><strong>Deadline</strong></li>
          <li><strong>Essays required</strong> (yes/no, and topic if yes)</li>
          <li><strong>Status</strong> (researching / in progress / submitted / awarded / declined)</li>
        </ul>
        <p>
          Sort by deadline. Review the list every week. Remove anything that no
          longer fits your profile or has passed.
        </p>

        <h2>Reuse Essays Intelligently</h2>
        <p>
          Most scholarship essays ask some variation of the same questions: Why do
          you deserve this? What are your goals? How have you shown leadership or
          overcome adversity? Build two or three strong core essays and adapt them
          for each application rather than writing from scratch every time. Keep a
          folder of essay drafts labeled by prompt type so you can pull from them
          quickly.
        </p>

        <h2>What to Deprioritize</h2>
        <p>
          Skip or minimize time on national mega-competitions (Coca-Cola Scholars,
          Gates Scholarship, Questbridge if you've already been matched elsewhere)
          unless your profile is genuinely exceptional and you have time to spare.
          Also avoid paid scholarship databases — free tools like Fastweb,
          Scholarships.com, and your school's counseling office are sufficient.
          The bottleneck is never finding scholarships; it's completing quality
          applications for the right ones.
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
