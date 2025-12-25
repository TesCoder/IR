import SEOHead from "@/components/SEOHead";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import Modal from "@/components/Modal";
import { Button, ButtonRow, ButtonRow2 } from "@/components/Button";
import { useState } from "react";
import { members } from "../components/membersList";
import CountUp from "../components/CountUp";
import { OrbitGlowButton } from "@/components/OrbitGlowButton";
import SupportPackagesPreview from "@/components/SupportPackagesPreview";
import dataset from "@/data/packages-comparison.json";
import CoachInfoSnippet from "@/components/CoachInfoSnippet";
import { motion } from "framer-motion";
import { trackCtaClick } from "@/lib/trackCta";
import Testimonials from "@/components/Testimonials_Snippets";  // new testimonial snippet
import testimonialsData from "@/data/b4ro1e4h9etc2jv1qaov.json"; // data used for testimonials and outcomes
import SteppedRoadmap from "@/components/SteppedRoadmap";
import OutcomesGallery from "@/components/OutcomesGallery";
import ImpactTable from "@/components/ImpactTable";
import { SchemaScript } from "@/components/Schema";

const HyperLink = ({ href, children }) => (
  <Link className="underline text-ivy-blue font-medium" href={href}>
    {...children}
  </Link>
);

const impactHighlights = [
  { name: "Harvard University", acceptanceRate: "3.6%", ivyReadyRate: "21.5%", ivyReadyImpact: "6x" },
  { name: "Stanford University", acceptanceRate: "3.6%", ivyReadyRate: "28.9%", ivyReadyImpact: "8x" },
  { name: "UC Berkeley", acceptanceRate: "11.0%", ivyReadyRate: "52.0%", ivyReadyImpact: "5x" },
];

export default function Home() {
  // FULL, INFO, CALL, or EVAL
  const [modalType, setModalType] = useState("INFO");
  const [coach, setCoach] = useState();

  const handleHeroCtaClick = () => {
    setModalType("INFO");
    trackCtaClick({ location: "hero", text: "Get Your FREE Consultation" });
  };

  const handleTestimonialsCtaClick = () => {
    setModalType("INFO");
    trackCtaClick({ location: "hero", text: "Get Your FREE Consultation" });
  };

  const handleStrategyCtaClick = () => {
    setModalType("INFO");
    trackCtaClick({ location: "hero", text: "Schedule Free Strategy Call" });
  };


  return (
    <>
      <SEOHead
        title="Ivy Ready College Admission Consulting"
        description="Ivy Ready's team is made up of former admission officers and graduates from top schools who have extensive experience in supporting students with college planning and admission. Our mission is to provide a personalized admission strategy for each student."
        url="/"
        image="/images/logo-circle.png"
      />
      <SchemaScript
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ivy Ready",
          legalName: "Ivy Ready LLC",
          url: "https://ivyready.com",
          logo: "https://ivyready.com/images/logo-white.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-650-383-0352",
            contactType: "customer service",
            areaServed: "US",
            availableLanguage: "English",
          },
          sameAs: ["https://facebook.com/ivyready"],
        }}
      />

     {/* ===============================
            MODALS — DO NOT REMOVE
            These handle all "popup" forms on the site.
            Both are required for buttons using data-bs-target.
        ================================ */}

        {/* CONTACT MODAL 
            - Triggered by: 
                * "FREE Consultation" button (navbar)
                * "Get Your FREE Consultation" button (hero)
                * "Request Free Intro Call" button (testimonials)
                * "Schedule Free Strategy Call" button (final CTA)
            - Uses `modalType` state to show either:
                * "INFO" → Full form (general inquiry)
                * "CALL" → Short form for quick phone call
        */}
        <Modal
          id="contactModal"  // must match all buttons' data-bs-target="#contactModal"
          title={
            modalType === "INFO"
              ? "Tell us how we can best serve you."
              : "Enter your info for a quick call."
          }
        >
          {/* The form content inside the popup */}
          <ContactForm type={modalType} />
        </Modal>

        {/* COACH MODAL 
            - Triggered by clicking "Learn More" on a specific coach profile
            - Dynamically updates title with the coach’s name using state
            - Includes coach profile preview inside form
        */}

        {/* COACH MODAL — compact form in a modal */}
        <Modal id="coachModal" title={`Schedule your intro call with  ${coach?.split(" ")[0] || ""}`}>
          <ContactForm type="INFO" showProfile={true} coachName={coach} />
        </Modal>

        {/* 
          ⛔️ IMPORTANT:
          Do not delete these two <Modal> blocks.
          Bootstrap uses their `id` attributes (e.g., #contactModal, #coachModal)
          to link clickable buttons to their respective pop-ups.
          If removed, buttons will stop opening modals.
        */}

      {/* Hero Section */}
      <div className="heroFrame bg-hero " >
        {/* Overlay layer */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content layer */}
        <div className="relative z-10 m-auto text-center flex flex-col items-center justify-center h-full">
          {/* <h1 className="bannerTitle">Ivy Ready College Consulting</h1> */}
          <motion.h1
            className="bannerTitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Ivy Ready College Consulting
          </motion.h1>

          <h2 className="bannerSubtitle mb-10">
            Personalized admissions coaching by former admissions officers.
          </h2>

          <OrbitGlowButton
            onClick={handleHeroCtaClick}
            data-bs-toggle="modal" // triggers Bootstrap modal (adds transparent black backdrop) (aka popup)
            data-bs-target="#contactModal"
          >
            Get Your FREE Consultation
          </OrbitGlowButton>
        </div>
      </div>

      <Section title="Our Track Record in Numbers" >
        <p className="pCentered ">
          Ivy Ready empowers students to craft exceptional applications that get results. From essays to strategy, our support drives real outcomes—top school admissions, major scholarships, and family peace of mind.
        </p>

       <div className="grid mt-4 mb-10 grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
              <h2 className="h2StatTitle"><CountUp end={98} suffix="%" /></h2>
              <p className="h2StatSubtitle">Accepted to Top 3 Choices</p>
          </div>

          <div>
            <h2 className="h2StatTitle"> <CountUp end={30} prefix="$" suffix="M" /> </h2>
            <p className="h2StatSubtitle">Total Scholarships Earned</p>
          </div>
          
          <div>
            <div>
              <h2 className="h2StatTitle flex items-center justify-center gap-1">
                <CountUp end={4.8} />
                
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#B91C1C]">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
                      fill="#ffffff"
                    />
                  </svg>
                </span>

              </h2>
            </div>
            
            <div>
            <p className="h2StatSubtitle">Avg Rating from Families</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Ivy Ready Impact Highlights" centerContent>
        <p className="pCentered">
          Snapshot of how Ivy Ready students compete at selective schools.
        </p>
        <ImpactTable data={impactHighlights} />
      </Section>

      <Section redBg >
      <OutcomesGallery items={testimonialsData} types={["student", "parent"]} />

      {/* <div className="flex justify-center mt-8">
        <OrbitGlowButton onClick={() => window.open("/success", "_self")}>
          View More Success Stories
        </OrbitGlowButton>
      </div> */}

      </Section>

      {/* Testimonials new */}
      <span className="" id="testimonials-section"></span>
      
      <Section  title="Testimonials" darkBg centerContent>
        <h2 className=""> {/* text-3xl md:text-4xl font-extrabold leading-tights*/}
          Families love how Ivy Ready delivers clarity, structure, and results.
        </h2>
        {/* title="Families love how Ivy Ready delivers clarity, structure, and results" */}
        {/* add includeHidden to view all" */}
        <Testimonials testimonials={testimonialsData } />

        <div className="mt-4"></div>
        <OrbitGlowButton
            onClick={handleTestimonialsCtaClick}
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Get Your FREE Consultation
        </OrbitGlowButton>
      </Section>

      <Section title="Our stellar record speaks for itself!" centerContent>
        <Image
          src="/images/scans-1600w.webp"
          alt="admission results"
          width={1080}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1080px"
          loading="lazy"
        />

        
          <br></br>
        <h2>Trusted by Families in Silicon Valley and Elsewhere!</h2>
        <Image
          src="/images/recognized-1600w.webp" 
          alt="recognized"
          width={1080}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1080px"
          loading="lazy"
        />
        
      <OrbitGlowButton
        onClick={handleStrategyCtaClick}
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        Schedule Free Strategy Call
      </OrbitGlowButton>

       </Section>


      <Section title="Meet Our Team and Admission Backgrounds" darkBg centerContent>
        <p className="pCentered">
          Our team is comprised of former admission officers with official
          admission experience and expertise supporting students with the
          college admission process. Team averages 100 years on admissions committees.{" "}
        </p>
        <div className="flex justify-center my-4 flex-wrap md:flex-nowrap overflow-visible">
          {members.map(
            ({ fname, name, imgSrc, admCollege, description }, i) => (
              <CoachInfoSnippet
                key={i}
                fname={fname}
                name={name}
                imgSrc={imgSrc}
                admCollege={admCollege}
                description={description}
                setCoach={setCoach}
                setModalType={setModalType}
              />
            )
          )}
        </div>

        <p className="pCentered m-2">
          Our college counselors are located in cities across the U.S. Contact
          us if a coach with the particular background you seek is not listed.
          We are dedicated to finding the perfect coach for you.
        </p>

        <OrbitGlowButton className="" onClick={() => window.open("/about-us#top", "_self")}>
          Meet Your Admissions Coaches
        </OrbitGlowButton> 
      </Section>
      

      <Section >
        <SteppedRoadmap onCtaClick={() => setIntroModalOpen(true)} /> 
      </Section>

      {/* Compare Support Options at a Glance */}

      <section >
        {/* Hero Section */}
        <div className="heroFrame bg-5ezZg4xRm1-hero my-1 relative overflow-hidden ">
          {/* Tint layer (between image and overlay) */}
          <div className="absolute inset-0 bg-[rgba(45,87,128,0.35)] mix-blend-multiply z-0"></div>

          {/* Overlay layer (light black veil) */}
          <div className="absolute inset-0 bg-black/10 "></div>

          {/* Content layer */}
          <div className="relative m-auto text-center">

            <SupportPackagesPreview data={dataset} />

            <OrbitGlowButton
              onClick={() => window.open("/support-packages", "_self")}
            >
              Compare Packages
            </OrbitGlowButton>


            <div className="mb-10"></div>
          </div>
        </div>
      </section>
 
      <Section darkBg>
          <ContactForm type="FULL" />
      </Section>


    </>
  );
}