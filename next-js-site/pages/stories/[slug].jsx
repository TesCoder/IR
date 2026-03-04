import SEOHead from "@/components/SEOHead";
import { SchemaScript } from "@/components/Schema";
import Link from "next/link";
import { studentSuccessStories } from "@/data/studentSuccessStories";
import { impactData } from "@/data/impactData";
import { trackCtaClick } from "@/lib/trackCta";

export async function getStaticPaths() {
  const paths = studentSuccessStories
    .filter((s) => s.published)
    .map((s) => ({ params: { slug: s.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const story = studentSuccessStories.find((s) => s.slug === params.slug) || null;
  return story ? { props: { story } } : { notFound: true };
}

export default function StoryPage({ story }) {
  const { student, primaryOutcome, secondaryOutcomes, appliedCount, challengeSummary, strategicFocus, fullNarrative, testimonialQuote, slug } = story;

  const seoTitle = `${student.firstName} ${student.lastInitial} — Admitted to ${primaryOutcome.school} | Ivy Ready`;
  const seoDescription = challengeSummary.slice(0, 150);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: testimonialQuote,
    author: { "@type": "Person", name: `${student.firstName} ${student.lastInitial}` },
    itemReviewed: { "@type": "Organization", name: "Ivy Ready" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  };

  const impactRow = impactData.find((row) => row.name === primaryOutcome.school);

  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} url={`/stories/${slug}`} type="article" />
      <SchemaScript schema={reviewSchema} />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white border-b border-indigo-100">
        <div className="mx-auto max-w-3xl px-6 pt-10 pb-10">
          <p className="text-sm text-indigo-600 font-medium mb-2">Student Success Story</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            {student.firstName} {student.lastInitial} — Admitted to {primaryOutcome.school}
          </h1>
          <p className="mt-3 text-gray-600">
            {primaryOutcome.program}
            {primaryOutcome.scholarship ? ` · ${primaryOutcome.scholarship}` : ""}
            {" · "}{student.applicationRound}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-10 space-y-10">

        {/* Student Profile Strip */}
        <div className="bg-gray-50 rounded-xl px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-gray-500">School Type</p>
            <p className="font-medium text-gray-800 mt-0.5">{student.highSchoolType}</p>
          </div>
          <div>
            <p className="text-gray-500">Region</p>
            <p className="font-medium text-gray-800 mt-0.5">{student.region}</p>
          </div>
          <div>
            <p className="text-gray-500">Round</p>
            <p className="font-medium text-gray-800 mt-0.5">{student.applicationRound}</p>
          </div>
          <div>
            <p className="text-gray-500">Schools Applied</p>
            <p className="font-medium text-gray-800 mt-0.5">{appliedCount}</p>
          </div>
        </div>

        {/* The Challenge */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h2>
          <p className="text-gray-700 leading-relaxed">{challengeSummary}</p>
        </section>

        {/* Strategic Intervention */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Strategic Intervention</h2>
          <ul className="space-y-2">
            {strategicFocus.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Results</h2>
          <p className="text-lg font-bold text-gray-900 mb-2">{primaryOutcome.school}</p>
          {primaryOutcome.scholarship && (
            <span className="inline-block mb-3 text-xs font-medium text-red-800 bg-red-50 border border-red-100 rounded-full px-3 py-1">
              {primaryOutcome.scholarship}
              {primaryOutcome.scholarshipType ? ` — ${primaryOutcome.scholarshipType}` : ""}
            </span>
          )}
          {secondaryOutcomes.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {secondaryOutcomes.map((school) => (
                <span key={school} className="text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1">
                  {school}
                </span>
              ))}
            </div>
          )}
          <p className="mt-3 text-sm text-gray-500">{appliedCount} schools applied</p>
        </section>

        {/* Full Narrative */}
        <section className="prose prose-indigo max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mb-4">The Full Story</h2>
          {fullNarrative.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">{para.trim()}</p>
          ))}
        </section>

        {/* Testimonial Pullquote */}
        <blockquote className="border-l-4 border-indigo-300 pl-5 py-1">
          <p className="text-gray-700 italic leading-relaxed">{testimonialQuote}</p>
          <p className="mt-2 text-sm text-gray-500">
            — {student.firstName} {student.lastInitial}, {student.highSchoolType}, {student.region}
          </p>
        </blockquote>

        {/* Contextual Impact Tie-In — only if school is in impactData */}
        {impactRow && (
          <section className="bg-indigo-50 rounded-xl px-6 py-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Context: {impactRow.name} Admission Data</h2>
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <p className="text-2xl font-bold text-indigo-700">{impactRow.acceptanceRate}</p>
                <p className="text-gray-500 mt-1">Overall acceptance rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-700">{impactRow.ivyReadyRate}</p>
                <p className="text-gray-500 mt-1">Ivy Ready student rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-700">{impactRow.ivyReadyImpact}</p>
                <p className="text-gray-500 mt-1">Selective admission lift</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-400">Figures are directional estimates based on student outcomes, updated annually.</p>
          </section>
        )}

        {/* CTA */}
        <section className="border-t border-gray-100 pt-10">
          <p className="text-gray-600 mb-4">Curious what this could look like for your student?</p>
          <Link
            href="/free-consultation"
            onClick={() => trackCtaClick({ location: "case_story", text: "Book a Consultation", destination: "/free-consultation" })}
            className="inline-flex items-center gap-2 bg-indigo-700 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-indigo-800 transition-colors"
          >
            Book a Consultation
            <span aria-hidden="true">→</span>
          </Link>
        </section>

      </div>
    </>
  );
}
