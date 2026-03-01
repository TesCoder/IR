import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us — Ivy Ready College Counseling"
        description="Get in touch with Ivy Ready. Our former admissions officers are ready to help with essays, strategy, and application planning."
        url="/contact"
        image="/images/logo-circle.png"
      />
    
      <Section darkBg>
          <ContactForm type="FULL" />
      </Section>
    </>
  );
}
