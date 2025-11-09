import Head from "next/head";
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

const HyperLink = ({ href, children }) => (
  <Link className="underline text-ivy-blue font-medium" href={href}>
    {...children}
  </Link>
);

export default function Home() {
  // FULL, INFO, CALL, or EVAL
  const [modalType, setModalType] = useState("INFO");
  const [coach, setCoach] = useState();


  return (
    <>
      <Head>
        <title> Ivy Ready College Admission Consulting </title>
        <meta
          name="description"
          content="Ivy Ready's team is made up of former admission officers and graduates from top schools who have extensive experience in supporting students with college planning and admission. Our mission is to provide a personalized admission strategy for each student."
        />
      </Head>

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
          <h1 className="bannerTitle">Ivy Ready College Consulting</h1>
          <h2 className="bannerSubtitle">
            Personalized admissions coaching by former admissions officers.
          </h2>

          <OrbitGlowButton
            onClick={() => setModalType('INFO')}
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
              <h2 className="h2StatTitle"><CountUp end={92} suffix="%" /></h2>
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

      {/* Testimonials new */}
      <span className="" id="testimonials-section"></span>
      <Section title="Why Families Trust Ivy Ready" darkBg centerContent>

        <p className="pCentered ">
          Families trust Ivy Ready for personalized coaching and peace of mind. Hear directly from families, students, and professionals who’ve worked with Ivy Ready.
        </p>

        <div
          id="testimonials-carousel"
          className="carousel carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
          data-bs-pause="hover"
        >
          <div className="carousel-inner">
            {[
              { src: "/images/testimonials/A.png", alt: "Amazing evaluation feedback" },
              { src: "/images/testimonials/B.png", alt: "Great firm recognition" },
              { src: "/images/testimonials/C.png", alt: "Spoke with former Ivy League counselor" },
              { src: "/images/testimonials/D.png", alt: "Inspired to apply to Harvard" },
              { src: "/images/testimonials/E.png", alt: "Thankful for Ivy Ready and Princeton" },
              { src: "/images/testimonials/F.png", alt: "Admitted to UPenn, class of 2020" },
              { src: "/images/testimonials/H.png", alt: "Tutor recommends Ivy Ready to students" },
              { src: "/images/testimonials/I.png", alt: "Guidance office support for applicants" },
              { src: "/images/testimonials/J.png", alt: "Regret not finding Ivy Ready sooner" },
            ].map((item, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <Image
                  src={item.src}
                  width={600}
                  height={420}
                  className="d-block mx-auto rounded-md shadow-lg"
                  alt={item.alt}
                  loading="lazy"
                />
                {/* ✅ Keep your pCentered style but use <div> or <span> */}
                <div className="pCentered mt-4 text-base text-gray-600 text-center italic opacity-90 max-w-xl mx-auto">
                  {item.alt}
                </div>
              </div>
            ))}

          </div>
        </div>

        <OrbitGlowButton
            onClick={() => setModalType("CALL")}
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Request Free Intro Call
        </OrbitGlowButton>
      </Section>

      <Section title="Our stellar record speaks for itself!" centerContent>
        <Image
          src="/images/scans.jpeg"
          width={1080}
          height={500}
          alt="Top college acceptances including Stanford, Harvard, Yale, and more — Ivy Ready success record"
          loading="lazy"
        />
        
          <br></br>
        <h2>Trusted by Families in Silicon Valley and Elsewhere!</h2>
        <Image
          src="/images/recognized.jpeg"
          width={1080}
          height={500}
          alt="recognized"
          loading="lazy"
        />
        
      <OrbitGlowButton
        onClick={() => setModalType("INFO")}
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
          college admission process.{" "}
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



      <section >
        {/* Hero Section */}
        <div className="heroFrame bg-5ezZg4xRm1 my-1 relative overflow-hidden ">
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