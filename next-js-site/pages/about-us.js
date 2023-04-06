import { Button, ButtonRow } from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Modal from "@/components/Modal";
import Section from "@/components/Section";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { members } from ".";

const CoachInfo = ({ setCoach, imgSrc, name, past, description }) => (
  <div className="flex flex-col md:flex-row text-lg">
    <div className="w-full md:w-1/5 flex flex-col items-center">
      <Image
        className="rounded-full shadow-md mb-2 w-4/5"
        src={imgSrc}
        width={128}
        height={128}
        alt=" profile picture"
      />
    </div>
    <div className="w-full md:w-4/5">
      <h2 className="font-bold text-2xl text-ivy-blue mb-2">{name}</h2>
      <p>College Counseling Professional</p>
      {past.map((p, i) => (
        <p className="font-medium" key={i}>
          {p}
        </p>
      ))}
      <p className="my-3">{description}</p>
      <div className="flex items-start">
        <Button
          onClick={() => {
            setCoach(name);
          }}
          data-bs-toggle="modal"
          data-bs-target="#coachModal"
        >
          Request an introductory Session with {name}
        </Button>
      </div>
    </div>
  </div>
);

export default function About() {
  // FULL, INFO, CALL, or EVAL
  const [modalType, setModalType] = useState("INFO");
  const [coach, setCoach] = useState();

  return (
    <>
      <Head>
        <title>About Us - Ivy Ready College Admission Consulting</title>
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
      <Modal
        id="coachModal"
        title={`Request an Introductory Session with ${coach}`}
      >
        <ContactForm type="INFO" coachName={coach} />
      </Modal>
      <div className="flex bg-about-hero bg-cover bg-center h-4/5 bg-blue-300 py-48">
        <div className="m-auto text-center">
          <h1
            className="text-7xl text-white"
            style={{ textShadow: "2px 2px 2px #000" }}
          >
            Admission and Financial Aid Experts
          </h1>
        </div>
      </div>

      <Section title="About Us" centerContent>
        <p className="text-xl text-center my-3 text-gray-700">
          Ivy Ready&apos;s mission is to provide a personalized admission
          strategy for each student by capitalizing on their strengths,
          background, interest and aspirations. Our team is comprised of former
          admission officers and graduates of top schools with extensive
          experience supporting students with college planing and admission.
        </p>
        <p className="text-xl text-center my-3 text-gray-700">
          Our college counselors are located in cities across the U.S. To
          accommodate students&apos; schedules, we offer counseling via video
          conference, email, and phone.
        </p>
        <ButtonRow setModalType={setModalType} lightBg />
      </Section>

      <Section
        title="Meet a Few Members of Our Team and Their Admission Background"
        darkBg
      >
        <p className="text-xl text-center my-3 text-gray-700">
          Our team is comprised of former admission officers and graduates of
          highly selective schools. Contact us if a coach with the particular
          background you seek is not listed . We have an extended list not shown
          here.
          <br />
          We are dedicated to finding the perfect coach for you.
        </p>
      </Section>

      {members.map(({ name, imgSrc, past, description }, i) => (
        <Section key={i} darkBg={i % 2 != 0}>
          <CoachInfo
            setCoach={setCoach}
            setModalType={setModalType}
            name={name}
            imgSrc={imgSrc}
            past={past}
            description={description}
          />
        </Section>
      ))}

      <ButtonRow setModalType={setModalType} lightBg />
    </>
  );
}
