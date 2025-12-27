import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImpactTable from "@/components/ImpactTable";
import { impactData } from "@/data/impactData";

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

