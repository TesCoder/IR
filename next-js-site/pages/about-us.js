import { Button, ButtonRow } from "@/components/Button";
import { OrbitGlowButton } from "@/components/OrbitGlowButton";
import ContactForm from "@/components/ContactForm";
import Modal from "@/components/Modal";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { members } from "../components/membersList";
import CoachInfo from "@/components/CoachInfo";

export default function About() {
  // FULL, INFO, CALL, or EVAL
  const [modalType, setModalType] = useState("INFO");
  const [coach, setCoach] = useState();
  const showBanners = false; // temporarily disable new About banners pending clarification

  return (
    <>
      <SEOHead
        title="About Us"
        description="Ivy Ready's team of former admission officers provides personalized college planning strategies tailored to each student’s strengths and goals."
        url="/about"
      />
      
      {/* Contact Modal (pop up) */}
      <Modal
          id="contactModal"
          title={
            modalType == "INFO"
              ? "Tell us how we can best serve you."
              : "Enter your info for a quick call."
          }
        >
        <ContactForm type={modalType} />
      </Modal>

      {/* Coach Snippet Modal (pop up) */}
      <Modal
        id="coachModal"
        title={`Request an Introductory Session with ${coach}`}
      >
        <ContactForm type="INFO" coachName={coach} />
      </Modal>

      {/* Hero Section */}
      <div className="heroFrame bg-about-hero relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0a1f38]/70 via-[#0a1f38]/55 to-[#0a1f38]/70 pointer-events-none"
          aria-hidden="true"
        />

        {/* Content layer */}
        <div className="relative z-10 m-auto text-center flex flex-col items-center justify-center h-full">
          <h1 className="bannerTitle"> About Us </h1>
          <h2 className="bannerSubtitle"> Professionals Dedicated to Excellence</h2>
          <Link
            href="/free-consultation"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-semibold text-[#0b3d60] hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Book a free consultation"
            onClick={() => {
              if (typeof window === "undefined") return;
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "cta_click",
                location: "hero",
                text: "Book a Free Consultation",
                destination: "/free-consultation",
              });
            }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
      
      {showBanners && (
        <Section id="about-banner-top" centerContent>
          <div className="w-full rounded-3xl bg-[#0b3d60] text-white px-6 py-10 shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-3 text-white">Build a clear admissions roadmap</h2>
            <p className="text-lg text-white/90 mb-6">
              Meet with a former admissions officer to prioritize essays, testing, and activities so your student stays ahead of deadlines.
            </p>
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-semibold text-[#0b3d60] hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Book a free consultation"
            >
              Book a Free Consultation
            </Link>
          </div>
        </Section>
      )}


      <Section title="Our Mission" centerContent>
          <h2 className="my-2">Empowering Every Student’s Unique Journey</h2>

        <p className="pCentered text-start my-2 mb-4">
          Ivy Ready&apos;s mission is to empower every student with a personalized admissions strategy that highlights their unique strengths, background, interests, and aspirations.

          We believe that no two students are alike — and that their individuality should be the foundation of their success. Our team works closely with families to uncover each student’s authentic voice and present it with confidence and clarity.
          At Ivy Ready, we celebrate the diversity of the communities we serve and recognize that every story holds the potential to inspire. Through thoughtful guidance and tailored support, we strive to ensure that every student has the opportunity to share their most compelling narrative and reach their fullest academic and personal potential.
        </p>

        {/* <ButtonRow setModalType={setModalType}  /> */}

         <OrbitGlowButton
            onClick={() => setModalType("CALL")}
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Request Free Intro Call
        </OrbitGlowButton>
      
      </Section>

      {showBanners && (
        <Section id="about-banner-mid" centerContent>
          <div className="w-full rounded-3xl bg-white text-[#0b3d60] border border-[#0b3d60]/20 px-6 py-10 shadow-md text-center">
            <h3 className="text-2xl font-bold mb-3">Stay on track through every deadline</h3>
            <p className="text-lg text-[#0b3d60]/90 mb-6">
              Get a personalized action plan that sequences essays, interviews, and recommendations so nothing slips.
            </p>
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center rounded-full bg-[#0b3d60] px-6 py-3 text-lg font-semibold text-white hover:bg-[#0b3d60]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b3d60]"
              aria-label="Schedule a free admissions planning consultation"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </Section>
      )}
      
      <Section
          title=""
          darkBg
          >
          <h1 className="">Meet Our Team and Admission Backgrounds</h1>
          <p className="pCentered text-start">
            Our team is comprised of former admissions officers and graduates of top-tier universities who bring insider expertise and a proven record of student success. Each coach has guided students toward acceptance at some of the most competitive schools in the world.
          </p>
          <p className="pCentered text-start">
            Through our detailed assessment process, we carefully match each student with a coach whose background, communication style, and strategic approach align with their goals. This personalized pairing ensures an effective, confidence-building experience from day one.
          </p>
          <p className="pCentered text-start">
            If a coach with your desired background is not listed, please contact us. We maintain an extended network of experienced consultants not displayed on our website and are dedicated to finding the perfect mentor for you.
          </p>
      </Section>

      {members.map(({ fname, imgSrc, past, description }, i) => (
        <Section key={i} darkBg={i % 2 != 0}>
          <CoachInfo
            setCoach={setCoach}
            setModalType={setModalType}
            fname={fname}
            imgSrc={imgSrc}
            past={past}
            description={description}
          />
        </Section>
      ))}
      
      {/* <ButtonRow setModalType={setModalType}  /> */}

      <Section darkBg>
      <div className="rounded-3xl shadow-[0_0_5px_#ffffff80] border border-white/40 py-10 px-6 text-center hover:scale-[1.02]">
        <h2 className="text-white text-3xl mb-4 ">
          Ready to Begin?
        </h2>
        <p className="pCentered text-white mb-6 ">
          Take the first step toward your college success story with a free consultation from our expert admissions team.
        </p>
      <Button
          onClick={() => setModalType("INFO")}
          data-bs-toggle="modal"
          data-bs-target="#contactModal"
        >
          Start Your Application Plan
        </Button>
      </div>
    </Section>

    </>
     
  );
}
