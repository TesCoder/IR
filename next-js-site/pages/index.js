import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import Modal from "@/components/Modal";
import { Button, ButtonRow, ButtonRow2 } from "@/components/Button";
import { useState } from "react";
import { members } from "../components/membersList";

const HyperLink = ({ href, children }) => (
  <Link className="underline text-ivy-blue font-medium" href={href}>
    {...children}
  </Link>
);

export default function Home() {
  // FULL, INFO, CALL, or EVAL
  const [modalType, setModalType] = useState("INFO");
  const [coach, setCoach] = useState();

  const Profile = ({ fname, name, imgSrc, admCollege, description }) => (
    <div className="w-1/3 md:w-1/6 flex flex-col items-center mx-2">
      <Image
        className="coachProfilePic"
        src={imgSrc}
        width={400}
        height={400}
        alt="profile picture"
        loading="lazy"
      />
      <span className="text-ivy-blue ">{fname} </span>
      <span className="pCentered !text-[110%] truncate w-20 text-centert">{admCollege}</span>
      {/* <ButtonRow2 setModalType={setModalType} /> */}
      <button
        className="mb-4"
        onClick={() => {
          setCoach(name);
        }}
        data-bs-toggle="modal"
        data-bs-target="#coachModal"
      >
        Learn More
      </button>
    </div>
  );

  return (
    <>
      <Head>
        <title> <h1> Ivy Ready College Admission Consulting </h1> </title>
        <meta
          name="description"
          content="Ivy Ready's team is made up of former admission officers and graduates from top schools who have extensive experience in supporting students with college planning and admission. Our mission is to provide a personalized admission strategy for each student."
        />
      </Head>

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

      <Modal id="coachModal" title={`Schedule your intro call with ${coach}`}>
        <ContactForm showProfile={true} coachName={coach} />
      </Modal>

      {/* Hero Section */}
      <div className="heroFrame bg-hero " >
        {/* Overlay layer */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content layer */}
        <div className="relative z-10 m-auto text-center flex flex-col items-center justify-center h-full">
          <h1 className="bannerTitle">Ivy Ready College Consulting</h1>
          <h2 className="bannerSubtitle">
            Personalized admissions coaching by former admissions officers.
          </h2>

          <Button
            onClick={() => setModalType('INFO')}
            data-bs-toggle="modal" // triggers Bootstrap modal (adds transparent black backdrop) (aka popup)
            data-bs-target="#contactModal"
          >
            Get Your FREE Consultation
          </Button>
        </div>
      </div>

      <Section title="Our Track Record in Numbers"  centerContent>

        <h2 className="pCentered">
          Ivy Ready empowers students to craft exceptional applications that get results. From essays to strategy, our support drives real outcomes—top school admissions, major scholarships, and family peace of mind.
        </h2>

        <div className="grid mt-4 mb-10 grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
              <h2 className="h2StatTitle">92%</h2>
              <p className="h2StatSubtitle">Accepted to Top 3 Choices</p></div>
          <div><h2 className="h2StatTitle">$3.4M</h2>
              <p className="h2StatSubtitle">Total Scholarships Earned</p></div>
          <div><h2 className="h2StatTitle">4.8★</h2>
              <p className="h2StatSubtitle" >Avg Rating from Families</p></div>
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
                <p className="mt-4 text-base text-gray-600 text-center italic opacity-90 max-w-xl mx-auto">
                  {item.alt}
                </p>
              </div>
            ))}
          </div>
        </div>

          <Button
            onClick={() => setModalType("CALL")}
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Request Free Intro Call
        </Button>
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
        
      <Button
        onClick={() => setModalType("INFO")}
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        Schedule Free Strategy Call
      </Button>

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
              <Profile
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

        <p className="pCentered">
          Our college counselors are located in cities across the U.S. Contact
          us if a coach with the particular background you seek is not listed.
          We are dedicated to finding the perfect coach for you.
        </p>

        <Button className="text-center" onClick={() => window.open("/about-us#top", "_self")}>
          Meet Your Admissions Coaches
        </Button> fuck

      </Section>

      <Section title="Compare Our Support Options">
        <p className="pCentered max-w-2xl mx-auto">
          From essays-only guidance to fully managed application logistics, Ivy Ready offers tailored support for every applicant and family.
        </p>
        <div className="flex justify-center mt-6">
          <Button onClick={() => window.open("/support-packages", "_self")}>
            Compare Packages
          </Button>
        </div>
      </Section>
 

      <Section darkBg>
        <div className="rounded-3xl shadow-[0_0_5px_#ffffff80] border border-white/40 py-10 px-6">
          <ContactForm type="FULL" />
        </div>
      </Section>


    </>
  );
}