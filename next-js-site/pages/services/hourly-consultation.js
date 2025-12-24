import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import { ServiceSchema, SchemaScript } from '@/components/Schema';
import { trackCtaClick } from "@/lib/trackCta";

export default function HourlyConsultation() {
  const handleStartNowClick = () => {
    trackCtaClick({ location: "services", text: "Start now" });
  };

  return (
    <>
      <SEOHead
        title="Hourly Consultation - Ivy Ready"
        description="Ivy Ready's hourly consultation services provide students with personalized college planning guidance from experienced experts to help them reach their goals."
        url="/services/hourly-consultation"
      />

      <SchemaScript schema={ServiceSchema({ serviceName: 'Hourly Consultation', description: "Short-form, on-demand consulting hours with former admission officers." })} />
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Hourly Consultation', url: '/services/hourly-consultation' }]} />
      </div>

      {/* "banner" */}

       {/* Hero Section */}
      <div className="heroFrame bg-hourly-hero" style={{ backgroundPosition: 'center 35%' }}
>

        {/* Content layer */}
        <div className="relative z-10 m-auto text-center flex flex-col items-center justify-center h-full"

        >
          <h1 className="bannerTitle" > Hourly Consultation </h1>
          <h2 className="bannerSubtitle" > An excellent alterntive to long-term packages.</h2>
        </div>
      </div>

      {/* How It Works */}
      <Section title="How It Works" centerContent>
        <p className="pCentered max-w-3xl">
          Flexible, pay-as-you-go support with clear time tracking and no long-term commitments.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            {
              title: "1) Purchase hours",
              body: "Buy the hours you need up front—no contract. Add more only if you choose.",
            },
            {
              title: "2) Schedule flexibly",
              body: "Book sessions on your timeline; we’ll confirm by email and share a brief prep checklist.",
            },
            {
              title: "3) Transparent tracking",
              body: "Meetings, document reviews, and email support are logged in a detailed time log we share with you.",
            },
            {
              title: "4) Refundable & rollover",
              body: "Unused hours are fully refundable and never expire. Hours stay with hourly (not transferable to packages).",
            },
            {
              title: "5) Follow-up & recap",
              body: "Get concise recaps and next steps after each session so you know exactly what to do next.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm text-left">
              <h3 className="text-xl font-semibold text-ivy-blue mb-2">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Offer & Pricing */}
      <Section title="Offer & Pricing" centerContent>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Hourly blocks", body: "Pay only for the hours you need; add more anytime." },
            { title: "10+ hour savings", body: "Discounts available for families purchasing 10+ hours." },
            { title: "Transparent time log", body: "All meetings, edits, and email support tracked and shared." },
            { title: "Refundable unused hours", body: "Any unused hours are fully refundable and never expire." },
            { title: "Not transferable to packages", body: "Hourly is standalone; families wanting end-to-end support should choose a package." },
          ].map(({ title, body }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm text-left">
              <h3 className="text-lg font-semibold text-ivy-blue mb-2">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What You Get / Use Cases */}
      <Section title="What You Get" centerContent>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Essay review and editing with line-by-line feedback",
            "Application strategy, timelines, and milestone planning",
            "Activity list and resume polish for impact and clarity",
            "Interview prep and mock Q&A with former admission officers",
            "Recommender strategy and guidance on support materials",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm text-left">
              <p className="text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Lead Capture Hook */}
      <Section centerContent>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm text-center max-w-3xl">
          <h3 className="text-2xl font-semibold text-ivy-blue mb-2">Plan your first hour</h3>
          <p className="text-gray-700 mb-4">
            Tell us what you need—essay review, strategy, interview prep, or timeline help—and we’ll match you with a former admission officer.
          </p>
          <a href="#contact-form" className="btn" onClick={handleStartNowClick}>
            Start now
          </a>
        </div>
      </Section>


      <Section centerContent>
        <FAQ
          faqs={[
            {
              question: 'How are consultation hours used?',
              answer: 'Hours can be applied to meetings, document reviews, edits, and email support—everything is logged.'
            },
            {
              question: 'How do I know how many hours I’ve used?',
              answer: 'We maintain a transparent time log and share it, so you can see every meeting, review, and email.'
            },
            {
              question: 'What if I don’t use all my hours?',
              answer: 'Unused hourly consultation hours are fully refundable and never expire.'
            },
            {
              question: 'Do hours expire or transfer to packages?',
              answer: 'Hours do not expire and stay within hourly; they are not transferable to packages.'
            },
            {
              question: 'Is there a long-term commitment?',
              answer: 'No. Purchase more hours only if and when you choose; there is no contract or ongoing obligation.'
            },
          ]}
        />
      </Section>

          <Section darkBg id="contact-form">
            <ContactForm type="FULL" />
          </Section>
    </>
  );
}
