import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SchemaScript } from "@/components/Schema";
import GuideDownloadForm from "@/components/GuideDownloadForm";
import { trackCtaClick } from "@/lib/trackCta";
import Link from "next/link";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "The Ivy Ready College Application Playbook",
  description:
    "A year-by-year strategy guide for high-achieving students preparing for selective college admissions.",
  totalTime: "PT4Y",
  step: [
    {
      "@type": "HowToStep",
      name: "Freshman Year: Build the Foundation",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Sophomore Year: Go Deeper",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Junior Year: The Critical Year",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Senior Year: Execute the Plan",
      position: 4,
    },
  ],
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Guides", url: "/guides" },
  { name: "College Application Playbook", url: "/guides/college-application-playbook" },
];

const whatIsInside = [
  "Year-by-year roadmap from freshman to senior year",
  "Testing strategy: SAT vs. ACT, when to test, score reporting rules",
  "How to build a college list that balances reach, match, and safety",
  "Essay frameworks: personal statement structure + supplement strategy",
  "Financial aid game plan: FAFSA, CSS Profile, and merit vs. need",
  "Decision frameworks for every major choice in the process",
  "Free companion tools linked throughout",
];

export default function CollegeApplicationPlaybook() {
  return (
    <>
      <SEOHead
        title="The Ivy Ready College Application Playbook — Free Strategy Guide"
        description="Download the free year-by-year college application playbook used by Ivy Ready students. Covers freshman through senior year: testing, essays, financial aid, and more."
        url="/guides/college-application-playbook"
        image="/images/logo-circle.png"
      />
      <SchemaScript schema={howToSchema} />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4 text-ivy-blue">
          The Year-by-Year Playbook Every Ivy-Bound Student Needs
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Download the free guide used by Ivy Ready students — covering testing,
          essays, extracurriculars, financial aid, and every critical deadline
          from freshman to senior year.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-ivy-blue">
            What&apos;s Inside the Playbook
          </h2>
          <ul className="space-y-3">
            {whatIsInside.map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-ivy-blue">
            Get Your Free Playbook
          </h2>
          <GuideDownloadForm />
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-3">
            Already know you want personalized help?
          </p>
          <Link
            href="/free-consultation"
            className="text-ivy-blue font-semibold hover:underline"
            onClick={() =>
              trackCtaClick({
                location: "page_footer",
                text: "Book a free 15-minute consultation",
                destination: "/free-consultation",
              })
            }
          >
            Book a free 15-minute consultation →
          </Link>
        </div>
      </div>
    </>
  );
}
