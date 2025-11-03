import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import Head from "next/head";

export default function HourlyConsultation() {
  return (
    <>
      <Head>
        <title> Hourly Consultation - Ivy Ready College Admission Consulting </title>
        <meta
          name="description"
          content="Ivy Ready's hourly consultation services provide students with personalized college planning guidance from experienced experts to help them reach their goals."
        />
      </Head>

      {/* "banner" */}

       {/* Hero Section */}
      <div className="heroFrame bg-hourly-hero">

        {/* Content layer */}
        <div className="relative z-10 m-auto text-center flex flex-col items-center justify-center h-full">
          <h1 className="bannerTitle" > Hourly Consultation </h1>
          <h2 className="bannerSubtitle" > An excellent alterntive to long-term packages.</h2>
        </div>
      </div>




          <Section darkBg>
        <ContactForm type="FULL" />
      </Section>
    </>
  );
}
