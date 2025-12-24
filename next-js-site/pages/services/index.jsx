import SEOHead from "@/components/SEOHead";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ServiceSchema, SchemaScript } from "@/components/Schema";
import Link from "next/link";
import { trackCtaClick } from "@/lib/trackCta";

const services = [
  {
    name: "Application Evaluation",
    href: "/services/application-evaluation",
    summary: "A focused review of your current application strategy and materials.",
  },
  {
    name: "Early Planning",
    href: "/services/early-planning",
    summary: "Grade-level roadmap, course selection, and activity planning to stay on track.",
  },
  {
    name: "Hourly Consultation",
    href: "/services/hourly-consultation",
    summary: "On-demand help for essays, recommendations, and application tasks.",
  },
  {
    name: "Support Packages",
    href: "/services/support-packages",
    summary: "Structured packages with unlimited essay support and guided delivery.",
  },
];

export default function ServicesIndex() {
  const serviceSchema = ServiceSchema({
    serviceName: "Admissions Services",
    description:
      "Explore Ivy Ready's admissions services including evaluations, early planning, hourly consults, and full support packages.",
  });
  const handleServiceClick = (text) => {
    trackCtaClick({ location: "services", text });
  };

  return (
    <>
      <SEOHead
        title="Admissions Services"
        description="Explore Ivy Ready's admissions services including evaluations, early planning, hourly consults, and full support packages."
        url="/services"
        image="/images/logo-circle.png"
      />
      <SchemaScript schema={serviceSchema} />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]} />
      </div>

      <Section title="Admissions Support, Built for Where You Are" centerContent>
        <p className="pCentered">
          Whether you need a fast evaluation, a grade-level roadmap, or end-to-end application support, our
          former admissions officers tailor the plan to your goals, timeline, and target schools.
        </p>
      </Section>

      <Section title="Choose a Service">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ name, href, summary }) => (
            <div
              key={name}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">
                <Link
                  className="text-ivy-blue underline hover:no-underline"
                  href={href}
                  onClick={() => handleServiceClick(name)}
                >
                  {name}
                </Link>
              </h3>
              <p className="text-gray-700 mb-3">{summary}</p>
              <Link
                className="text-ivy-blue font-medium"
                href={href}
                onClick={() => handleServiceClick("View details →")}
              >
                View details →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section centerContent title="Not sure where to start?">
        <p className="pCentered">
          Tell us your timeline and target schools. We’ll recommend the right service and next steps.
        </p>
        <Link
          className="inline-flex items-center justify-center mt-4 px-6 py-3 rounded-full bg-ivy-blue text-white font-semibold hover:bg-[#23486c] transition"
          href="/free-consultation"
          onClick={() => handleServiceClick("Schedule a free consultation")}
        >
          Schedule a free consultation
        </Link>
      </Section>
    </>
  );
}


