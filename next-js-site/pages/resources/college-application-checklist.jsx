import SEOHead from "@/components/SEOHead";
import { ArticleSchema, SchemaScript } from "@/components/Schema";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { trackCtaClick } from "@/lib/trackCta";

export default function ArticleCollegeApplicationChecklist() {
  const articleSchema = ArticleSchema({
    title: "College Application Checklist: Everything You Need to Submit",
    description:
      "A complete college application checklist covering testing, essays, recommendations, financials, and deadlines so nothing falls through the cracks.",
    author: "Ivy Ready",
    datePublished: "2026-02-28",
    dateModified: "2026-02-28",
  });

  return (
    <>
      <SEOHead
        title="College Application Checklist"
        description="A complete college application checklist covering testing, essays, recommendations, financials, and deadlines so nothing falls through the cracks."
        url="/resources/college-application-checklist"
        type="article"
      />
      <SchemaScript schema={articleSchema} />
      <article className="mx-auto max-w-3xl px-6 py-14 prose prose-indigo">
        <h1>College Application Checklist: Everything You Need to Submit</h1>
        <p>
          <strong>Summary:</strong> Use this master checklist to stay on track
          across every component of your college application — from testing to
          financial aid. Work through each section with your family and
          counselor before deadlines hit.
        </p>

        <h2>1) Standardized Testing</h2>
        <ul>
          <li>SAT or ACT score(s) sent directly from College Board / ACT</li>
          <li>AP/IB scores (if required by school)</li>
          <li>Test-optional strategy documented for each school</li>
          <li>Score reporting deadlines confirmed per application portal</li>
        </ul>

        <h2>2) Academic Records</h2>
        <ul>
          <li>Official high school transcript requested from counselor</li>
          <li>Mid-year report sent if required (check each school)</li>
          <li>Dual enrollment or college course transcripts included</li>
        </ul>

        <h2>3) Essays & Writing Supplements</h2>
        <ul>
          <li>Common App personal statement finalized (650-word limit)</li>
          <li>School-specific supplements drafted and reviewed</li>
          <li>Activity descriptions (150 characters each) finalized</li>
          <li>Additional information section completed if applicable</li>
        </ul>

        <h2>4) Letters of Recommendation</h2>
        <ul>
          <li>2 teacher recommendations requested and confirmed</li>
          <li>Counselor recommendation sent (brag sheet submitted)</li>
          <li>Optional additional recommender asked if value-add is clear</li>
          <li>Waiver of access right signed for each recommender</li>
        </ul>

        <h2>5) Application Components</h2>
        <ul>
          <li>Common App or Coalition App profile complete</li>
          <li>School-specific portal accounts created for each target</li>
          <li>ED/EA/RD decision plan confirmed and documented</li>
          <li>Application fees paid (or fee waiver requested)</li>
          <li>Interviews scheduled or completed where available</li>
        </ul>

        <h2>6) Financial Aid Documents</h2>
        <ul>
          <li>FAFSA filed (open October 1; file as early as possible)</li>
          <li>CSS Profile submitted for schools that require it</li>
          <li>Tax return and W-2s gathered for income verification</li>
          <li>Merit scholarship applications filed separately if needed</li>
        </ul>

        <h2>7) Deadline Tracking</h2>
        <ul>
          <li>
            Early Decision I deadlines: typically <strong>Nov 1–15</strong>
          </li>
          <li>
            Early Action deadlines: typically <strong>Nov 1–15</strong>
          </li>
          <li>
            Regular Decision deadlines: typically <strong>Jan 1–15</strong>
          </li>
          <li>Financial aid priority deadlines confirmed per school</li>
          <li>Scholarship deadlines added to your calendar separately</li>
        </ul>

        <h2>8) After Submission</h2>
        <ul>
          <li>Confirmation emails saved for each application submitted</li>
          <li>Application portal logins saved (one per school)</li>
          <li>First quarter/semester grades sent if required</li>
          <li>Scholarship and housing deadlines tracked post-admission</li>
        </ul>

        <hr />
        <p className="not-prose mt-8">
          <Link
            href="/free-consultation"
            onClick={() => {
              trackCtaClick({
                location: "article_cta",
                text: "Get help reviewing your application checklist",
                destination: "/free-consultation",
              });
            }}
            className="inline-flex rounded-2xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700"
          >
            Get help reviewing your application checklist →
          </Link>
        </p>
        <div className="mt-10 bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <p className="font-semibold text-ivy-blue mb-1">Free Guide: The Ivy Ready College Application Playbook</p>
          <p className="text-gray-700 mb-4">Get the year-by-year strategy guide — covering testing, essays, financial aid, and every critical deadline from freshman to senior year.</p>
          <a
            href="/guides/college-application-playbook"
            className="inline-block bg-ivy-blue text-white px-6 py-2 rounded font-medium no-underline hover:opacity-90"
            onClick={() => {
              if (typeof window !== 'undefined' && window.dataLayer) {
                window.dataLayer.push({
                  event: 'cta_click',
                  cta_text: 'Get the Free Playbook',
                  cta_location: 'resource_inline',
                  destination: '/guides/college-application-playbook',
                  page_path: window.location.pathname,
                });
              }
            }}
          >
            Get the Free Playbook →
          </a>
        </div>
      </article>
      <div className="mx-auto max-w-3xl px-6 pb-14">
        <RelatedArticles
          title="Recommended next steps"
          items={[
            {
              title: "College Application Timeline (11th–12th Grade)",
              href: "/resources/college-application-timeline-11th-12th-grade",
              description:
                "Month-by-month tasks for testing, essays, recommendations, and submissions.",
            },
            {
              title: "How to Choose and Ask for Letters of Recommendation",
              href: "/resources/choosing-recommenders",
              description:
                "Equip teachers with context, deadlines, and examples for stronger letters.",
            },
            {
              title: "The Personal Statement Structure",
              href: "/resources/personal-statement-structure",
              description:
                "Draft a clear hook–development–reflection arc that avoids common pitfalls.",
            },
            {
              title: "FAFSA Completion Checklist",
              href: "/resources/fafsa-completion-checklist",
              description:
                "Prep documents, IDs, and deadlines to file FAFSA accurately and early.",
            },
          ]}
        />
      </div>
    </>
  );
}
