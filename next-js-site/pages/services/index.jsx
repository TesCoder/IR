import SEOHead from "@/components/SEOHead";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ServiceSchema, SchemaScript } from "@/components/Schema";
import Link from "next/link";

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

const relatedResources = [
  {
    title: "When to Take the ACT vs SAT",
    slug: "/resources/when-to-take-act-vs-sat",
    description: "Choose the right test and timing by GPA, course load, and deadlines.",
    ctaText: "Plan your testing path",
  },
  {
    title: "College Application Timeline (11th–12th Grade)",
    slug: "/resources/college-application-timeline-11th-12th-grade",
    description: "Month-by-month tasks for testing, essays, recommendations, and submissions.",
    ctaText: "Download application calendar",
  },
  {
    title: "FAFSA Completion Checklist",
    slug: "/resources/fafsa-completion-checklist",
    description: "Prep documents, IDs, and deadlines to file FAFSA accurately and early.",
    ctaText: "Download FAFSA checklist",
  },
  {
    title: "Financial Aid Award Comparison Toolkit",
    slug: "/resources/financial-aid-award-comparison-toolkit",
    description: "Compare offers, calculate true cost, and plan appeals with a worksheet.",
    ctaText: "Get the comparison worksheet",
  },
];

export default function ServicesIndex() {
  const serviceSchema = ServiceSchema({
    serviceName: "Admissions Services",
    description:
      "Explore Ivy Ready's admissions services including evaluations, early planning, hourly consults, and full support packages.",
  });
  const pushCtaEvent = ({ location, text, destination }) => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    if (!window.dataLayer) return;
    window.dataLayer.push({
      event: "cta_click",
      location,
      text,
      destination,
    });
  };
  const handleServiceClick = (text, destination) => {
    pushCtaEvent({ location: "services", text, destination });
  };
  const handleServiceLinkClick = (text, destination) => () =>
    handleServiceClick(text, destination);

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
                  onClick={handleServiceLinkClick(name, href)}
                >
                  {name}
                </Link>
              </h3>
              <p className="text-gray-700 mb-3">{summary}</p>
              <Link
                className="text-ivy-blue font-medium"
                href={href}
                onClick={handleServiceLinkClick("View details →", href)}
              >
                View details →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {relatedResources.length >= 2 && (
        <Section title="Related Resources">
          <div className="grid gap-6 md:grid-cols-2">
            {relatedResources.slice(0, 4).map(({ title, slug, description, ctaText }) => (
              <div
                key={slug}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">
                  <Link
                    className="text-ivy-blue underline hover:no-underline"
                    href={slug}
                    aria-label={title}
                  >
                    {title}
                  </Link>
                </h3>
                <p className="text-gray-700 mb-3">{description}</p>
                <Link
                  className="text-ivy-blue font-medium"
                  href={slug}
                  aria-label={`${ctaText} — ${title}`}
                >
                  {ctaText} →
                </Link>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section centerContent title="Not sure where to start?">
        <p className="pCentered">
          Tell us your timeline and target schools. We’ll recommend the right service and next steps.
        </p>
        <Link
          className="inline-flex items-center justify-center mt-4 px-6 py-3 rounded-full bg-ivy-blue text-white font-semibold hover:bg-[#23486c] transition"
          href="/free-consultation"
          onClick={handleServiceLinkClick(
            "Schedule a free consultation",
            "/free-consultation"
          )}
        >
          Schedule a free consultation
        </Link>
      </Section>
    </>
  );
}


