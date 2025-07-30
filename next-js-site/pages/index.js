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
        className="rounded-full shadow-lg mb-2 w-4/5"
        src={imgSrc}
        width={400}
        height={400}
        alt="profile picture"
      />
      <span className="text-ivy-blue ">{fname} </span>
      <span className="truncate w-20 text-center">{admCollege}</span>
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
        <title>
          Ivy Ready College Admission Consulting
        </title>
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

    {/* Enhanced Hero Section with Overlay */}

    <div className="relative flex bg-hero bg-cover bg-center pt-20 sm:py-72">
    {/* Soft overlay (you can leave this at 0.08 as you have) */}
    <div
      className="absolute inset-0"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }}
    />

    <div className="relative z-10 m-auto text-center px-4">
      
      <h1 className="text-white text-5xl lg:text-7xl font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
        Ivy Ready College Consulting
      </h1>

      <h2 className="text-white text-xl lg:text-2xl mt-6 max-w-1xl mx-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] font-medium">
        Personalized admissions coaching from former Ivy League admissions officers.
      </h2>

      <p className="text-white text-base lg:text-lg mt-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] font-normal">
        Families trust Ivy Ready for personalized coaching and peace of mind.
      </p>

      <Button
        className="mt-6 mb-6 bg-ivy-red text-white hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold text-lg shadow-lg"
        onClick={() => setModalType("INFO")}
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
         Get Your Free Intro Session
      </Button>

    </div>
  </div>


<Section title="Our Track Record in Numbers"  centerContent>
  <div className="grid mt-4 mb-10 grid-cols-1 md:grid-cols-3 gap-6 text-center">
    <div><h2 className="text-6xl font-bold text-ivy-blue">92%</h2><p>Accepted to Top 3 Choices</p></div>
    <div><h2 className="text-6xl font-bold text-ivy-blue">$3.4M</h2><p>Total Scholarships Earned</p></div>
    <div><h2 className="text-6xl font-bold text-ivy-blue">4.8★</h2><p>Average Rating from Families</p></div>
  </div>
</Section>

      {/* Apply */}
      <Section title="Why Families Trust Ivy Ready" darkBg centerContent>


        <h2 className="pCentered">
          Ivy Ready pairs students with former Ivy League admissions officers to deliver expert, personalized guidance through every part of the college application. Our flexible support includes application packages, hourly consultation, and evaluation services.
        </h2>

        <p className=" text-xl text-center font-bold text-gray-700">
          Sign up for your (free) introductory session!
        </p>


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
        />
        
          <br></br>
        <h2>Trusted by Families in Silicon Valley and Elsewhere!</h2>
        <Image
          src="/images/recognized.jpeg"
          width={1080}
          height={500}
          alt="recognized"
        />
        
      <Button
        onClick={() => setModalType("INFO")}
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        Schedule Free Strategy Call
      </Button>

       </Section>


      <Section title="" darkBg centerContent>
        <h2>Meet a Few Members of Our Team and Their Admission Background</h2>
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
        </Button>

        <span className="" id="chart"></span>
      </Section>


      <Section title="Compare Our Support Options">
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto">
          From essays-only guidance to fully managed application logistics, Ivy Ready offers tailored support for every applicant and family.
        </p>
        <div className="flex justify-center mt-6">
          <Button onClick={() => window.open("/support-packages", "_self")}>
            Compare Packages
          </Button>
        </div>
      </Section>


      {/* Testimonials new */}
      <span className="" id="testimonials-section"></span>

      <Section title="Testimonials" darkBg centerContent>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 text-center">
          Hear directly from families, students, and professionals who’ve worked with Ivy Ready.
        </p>

        {/* <div id="testimonials-carousel" className="carousel slide" data-bs-ride="carousel"> */}
        <div 
          id="testimonials-carousel" 
          className="carousel carousel-fade" 
          data-bs-ride="carousel"
          data-bs-interval="5000"  // 6 seconds
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
                />
                <p className="mt-4 text-base text-gray-600 text-center italic opacity-90 max-w-xl mx-auto"> {item.alt} </p>
                
              </div>

            ))}
          </div>

          <button className="carousel-control-prev visually-hidden" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next visually-hidden" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Section>

      <Section>
        <ContactForm type="FULL" />
      </Section>

      <Section darkBg>
      </Section>

    </>
  );
}