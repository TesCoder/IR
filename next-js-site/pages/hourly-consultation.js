import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import Head from "next/head";

export default function HourlyConsultation() {
  return (
    <>
      <Head>
        <title>
          Hourly Consultation - Ivy Ready College Admission Consulting
        </title>
        <meta
          name="description"
          content="Ivy Ready's hourly consultation services provide students with personalized college planning guidance from experienced experts to help them reach their goals."
        />
      </Head>
      <Section id="application-support-questions-section">
        <ContactForm type="FULL" />
      </Section>
    </>
  );
}
