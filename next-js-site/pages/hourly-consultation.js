import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";

export default function HourlyConsultation() {
  return (
    <Section id="application-support-questions-section" title="Have any questions?" >
      <p className='text-lg my-3 text-gray-700'>Please complete the form below for a prompt reply.</p>
      <ContactForm type="FULL" />
    </Section>
  )
}