import { Button, ButtonRow } from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Modal from "@/components/Modal";
import Section from "@/components/Section";
import Image from "next/image";
import { useState } from "react";
import { members_h } from "@/components/membersList_h";

const CoachInfo = ({ setCoach, imgSrc, fname, past, description }) => (
  <div>
    <div className="" id={fname.toLowerCase()}></div>
    <div className="flex flex-col md:flex-row text-lg shadow p-20">
      <div className="w-full md:w-1/5 flex flex-col items-center">
        <Image
          className="rounded-full shadow-lg mb-2 w-4/5"
          src={imgSrc}
          width={400}
          height={400}
          alt="profile picture"
        />
      </div>
      <div className="w-full md:w-4/5">
        <h2 className="font-bold text-2xl text-ivy-blue mb-2">{fname}</h2>
        <p>College Counseling Professional</p>
        {past.map((p, i) => (
          <p className="font-medium" key={i}>
            {p}
          </p>
        ))}
        <p className="my-3">{description}</p>

        {/* <div className="flex items-start">
          <Button
            onClick={() => setCoach(fname)}
            data-bs-toggle="modal"
            data-bs-target="#coachModal"
          >
            Request an introductory Session with {fname}
          </Button>
        </div>
         */}
      </div>
    </div>
  </div>
);

export default function MemberH({ member }) {
  const [modalType, setModalType] = useState("INFO");
  const [coach, setCoach] = useState();

  if (!member) {
    return (
      <Section darkBg>
        <div className="text-center p-20">
          <h2 className="text-2xl font-bold">Member not found</h2>
          <p>The requested counselor could not be found.</p>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section title="" darkBg />
      <Section darkBg={false}>
        <CoachInfo
          setCoach={setCoach}
          setModalType={setModalType}
          fname={member.fname}
          imgSrc={member.imgSrc}
          past={member.past}
          description={member.description}
        />
      </Section>

      {/* <ButtonRow setModalType={setModalType} lightBg /> */}
    </>
  );
}

// Called at build time to generate paths
export async function getStaticPaths() {
  const paths = members_h.map((member) => ({
    params: { id: member.id },
  }));

  return {
    paths,
    fallback: false, // or 'blocking' if you want dynamic fallback
  };
}

// Fetch member data based on ID
export async function getStaticProps({ params }) {
  const member = members_h.find((m) => m.id === params.id);

  if (!member) {
    return { notFound: true };
  }

  const memberCollege = member.admCollege || "top universities";

  return {
    props: {
      member,
      seo: {
        title: `${member.name} | Ivy Ready Counselor`,
        description: `Meet ${member.name}, with admissions experience at ${memberCollege}. Learn how they support students through Ivy Ready.`,
        url: `/member_h/${member.id}`,
      },
    },
  };
}
