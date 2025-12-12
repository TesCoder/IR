import SEOHead from "@/components/SEOHead";
import Section from "@/components/Section";
import Link from "next/link";

const topics = [
  {
    title: "Application strategy",
    summary: "How to prioritize schools, balance reach/target/safety, and plan milestones.",
  },
  {
    title: "Essays that stand out",
    summary: "Story selection, structure, and voice principles from former admissions officers.",
  },
  {
    title: "Activity lists & honors",
    summary: "Positioning impact, leadership, and clarity across Common App and supplements.",
  },
  {
    title: "Testing & timelines",
    summary: "SAT/ACT approaches, when to send scores, and key dates to avoid surprises.",
  },
];

export default function BlogIndex() {
  return (
    <>
      <SEOHead
        title="Blog & Resources"
        description="Guides and tips from former admissions officers on essays, strategy, testing, and application milestones."
        url="/blog"
        image="/images/logo-circle.png"
      />

      <Section title="Guides from Former Admissions Officers" centerContent>
        <p className="pCentered">
          Browse practical playbooks on essays, strategy, timelines, and activities. New articles are
          published regularly to help you make confident application decisions.
        </p>
      </Section>

      <Section title="Featured topics">
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map(({ title, summary }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 mb-3">{summary}</p>
              <span className="text-gray-500 text-sm">New posts coming soon</span>
            </div>
          ))}
        </div>
      </Section>

      <Section centerContent title="Want a tailored plan?">
        <p className="pCentered">
          If you need guidance before the next article drops, schedule a free consultation and tell us your
          goals. We’ll point you to the right resources and next steps.
        </p>
        <Link
          className="inline-flex items-center justify-center mt-4 px-6 py-3 rounded-full bg-ivy-blue text-white font-semibold hover:bg-[#23486c] transition"
          href="/free-consultation"
        >
          Talk to an admissions expert
        </Link>
      </Section>
    </>
  );
}


