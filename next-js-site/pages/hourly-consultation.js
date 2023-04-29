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
      <Section>
        <h1 className="mt-10" >Hourly Consultation</h1>
        <h2 className="text-center mb-10"> An excellent alterntive to long-term packages.</h2>
        <ContactForm type="FULL" />
      </Section>
    </>
  );
}
