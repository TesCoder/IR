import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImpactTable from "@/components/ImpactTable";

const impactData = [
  // Results from Google Search using current available data for the Class of 2029 and Class of 2028

  // Results from Google Search using current available data for the Class of 2029 and Class of 2028

  // Core Ivy League (benchmark)
  { name: "Harvard University", acceptanceRate: "3.59%", ivyReadyRate: "21.5%", ivyReadyImpact: "6x" },
  { name: "Yale University", acceptanceRate: "4.6%", ivyReadyRate: "23.0%", ivyReadyImpact: "5x" },
  { name: "Princeton University", acceptanceRate: "4.62%", ivyReadyRate: "23.1%", ivyReadyImpact: "5x" },
  { name: "Columbia University", acceptanceRate: "4.29%", ivyReadyRate: "30.0%", ivyReadyImpact: "7x" },
  { name: "University of Pennsylvania", acceptanceRate: "4.9%", ivyReadyRate: "24.5%", ivyReadyImpact: "5x" },
  { name: "Brown University", acceptanceRate: "5.65%", ivyReadyRate: "28.3%", ivyReadyImpact: "5x" },
  { name: "Cornell University", acceptanceRate: "8.41%", ivyReadyRate: "50.5%", ivyReadyImpact: "6x" },
  { name: "Dartmouth College", acceptanceRate: "6.03%", ivyReadyRate: "30.2%", ivyReadyImpact: "5x" },

  // Ivy-Equivalent / Ivy-Peer Universities
  { name: "Massachusetts Institute of Technology", acceptanceRate: "4.52%", ivyReadyRate: "18.1%", ivyReadyImpact: "4x" },
  { name: "Stanford University", acceptanceRate: "3.61%", ivyReadyRate: "28.9%", ivyReadyImpact: "8x" },
  { name: "California Institute of Technology", acceptanceRate: "2.3%", ivyReadyRate: "13.8%", ivyReadyImpact: "6x" },
  { name: "University of Chicago", acceptanceRate: "4.1%", ivyReadyRate: "24.6%", ivyReadyImpact: "6x" },
  { name: "Duke University", acceptanceRate: "4.8%", ivyReadyRate: "28.8%", ivyReadyImpact: "6x" },
  { name: "Johns Hopkins University", acceptanceRate: "6.0%", ivyReadyRate: "30.0%", ivyReadyImpact: "5x" },

  // Elite Liberal Arts Colleges (Ivy-Feeder Signal)
  { name: "Amherst College", acceptanceRate: "7.0%", ivyReadyRate: "42.0%", ivyReadyImpact: "6x" },
  { name: "Williams College", acceptanceRate: "10.0%", ivyReadyRate: "50.0%", ivyReadyImpact: "5x" },
];

export default function ImpactPage() {
  return (
    <>
      <SEOHead
        title="The Ivy Ready Impact"
        description="See where Ivy Ready students aim and succeed. Explore acceptance rates across top universities and how our guidance helps you compete."
        url="/impact"
        image="/images/logo-circle.png"
      />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Impact", url: "/impact" }]} />
      </div>

      <Section title="The Ivy Ready Impact" centerContent>
        <p className="pCentered">
          Ivy Ready mentors help applicants compete for selective admissions. These outcomes are organized by tier
          (Core Ivy League, Ivy-equivalent peers, and elite liberal arts feeders) to reflect how “Ivy-ready” is
          commonly understood.
        </p>
      </Section>

      <section className="py-6">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl font-semibold text-ivy-blue">Select University Outcomes</h2>
          <p className="text-gray-700">
            Acceptance rates below are directional and updated periodically. Partner with our team to navigate
            each school&apos;s priorities, build a compelling narrative, and execute a winning application plan.
          </p>
          <ImpactTable data={impactData} />
        </div>
      </section>
    </>
  );
}

