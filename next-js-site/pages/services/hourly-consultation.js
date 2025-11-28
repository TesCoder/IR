import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import { ServiceSchema, SchemaScript } from '@/components/Schema';

export default function HourlyConsultation() {
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




          <FAQ
            faqs={[
              { question: 'How does hourly consultation work?', answer: 'Purchase hours and schedule short, focused sessions for targeted advice like essay review or timeline planning.' },
              { question: 'Can hours be used for multiple students?', answer: 'Hours are purchased per family; please contact us for multi-student arrangements.' },
              { question: 'How do I schedule my session?', answer: 'After purchase, you will receive scheduling options via email.' }
            ]}
          />

          <Section darkBg>
            <ContactForm type="FULL" />
          </Section>
    </>
  );
}
