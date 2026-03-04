import SEOHead from "@/components/SEOHead";
import { SchemaScript } from "@/components/Schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImpactTable from "@/components/ImpactTable";
import { impactData } from "@/data/impactData";
import TrustNav from "@/components/TrustNav";
import TrustStatBar from "@/components/TrustStatBar";
import { trustStats } from "@/data/trustStats";
import SuccessStoryCard from "@/components/SuccessStoryCard";
import { studentSuccessStories } from "@/data/studentSuccessStories";
import { trackCtaClick } from "@/lib/trackCta";
import Link from "next/link";

const storyPreviews = studentSuccessStories.filter((s) => s.published).slice(0, 2);

export default function ImpactPage() {
  return (
    <>
      <SEOHead
        title="The Ivy Ready Impact"
        description="See where Ivy Ready students aim and succeed. Explore acceptance rates across top universities and how our guidance helps you compete."
        url="/impact"
        image="/images/logo-circle.png"
      />
      <SchemaScript schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "The Ivy Ready Impact",
        "description": "See where Ivy Ready students aim and succeed. Explore acceptance rates across top universities and how our guidance helps you compete.",
        "url": "https://ivyready.com/impact",
        "publisher": {
          "@type": "Organization",
          "name": "Ivy Ready",
          "url": "https://ivyready.com"
        }
      }} />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Impact", url: "/impact" }]} />
      </div>

      <TrustNav />

      <Section title="The Ivy Ready Impact" centerContent>
        <p className="pCentered">
          Ivy Ready mentors help applicants compete for selective admissions. These outcomes are organized by tier
          (Core Ivy League, Ivy-equivalent peers, and elite liberal arts feeders) to reflect how "Ivy-ready" is
          commonly understood. Acceptance lift figures are directional estimates based on student outcomes and are updated annually.
        </p>
      </Section>

      <section className="py-6">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl font-semibold text-ivy-blue">Select University Outcomes</h2>
          <p className="text-gray-700">
            Acceptance rates below are directional and updated periodically. Partner with our team to navigate
            each school&apos;s priorities, build a compelling narrative, and execute a winning application plan.
          </p>
          <TrustStatBar stats={trustStats} />
          <ImpactTable data={impactData} />
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-3">
          <h2 className="text-xl font-semibold text-ivy-blue">How We Calculate These Figures</h2>
          <p className="text-gray-700">
            The acceptance rates shown above reflect outcomes from Ivy Ready students who applied to each institution
            over multiple application cycles. Figures represent the share of coached applicants who received an offer
            of admission and are presented as directional estimates — not guarantees — updated as new cohort data becomes available.
            Individual results depend on a range of factors including academic profile, positioning decisions, and application timing.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-ivy-blue mb-6">See the Strategy Behind the Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {storyPreviews.map((story) => (
              <SuccessStoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-gray-800 text-lg mb-4">
            See what this looks like for your student.
          </p>
          <Link
            href="/free-consultation"
            onClick={() =>
              trackCtaClick({
                location: "impact_page",
                text: "Schedule a Consultation",
                destination: "/free-consultation",
              })
            }
            className="inline-block px-8 py-3 rounded-md bg-ivy-blue text-white font-semibold hover:bg-ivy-blue/90 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-ivy-blue transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
