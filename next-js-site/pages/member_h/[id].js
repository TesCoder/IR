import { Button, ButtonRow } from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Modal from "@/components/Modal";
import Section from "@/components/Section";
import Image from "next/image";
import { useState } from "react";
import { members_h } from "@/components/membersList_h";
import SEOHead from "@/components/SEOHead";

const CoachInfo = ({
  setCoach,
  imgSrc,
  imgWidth = 400,
  imgHeight = 400,
  altText = "profile picture",
  fname,
  past,
  description,
}) => (
  <div>
    <div className="" id={fname.toLowerCase()}></div>
    <div className="flex flex-col md:flex-row text-lg shadow p-20">
      <div className="w-full md:w-1/5 flex flex-col items-center">
        <Image
          className="rounded-full shadow-lg mb-2 w-4/5"
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt={altText}
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

export default function MemberH({ member, seo }) {
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

  const imageOverrides = {
    "4937974": {
      src: "/images/members_h/4937974-150x150.webp",
      width: 150,
      height: 150,
    },
    "38473084": {
      src: "/images/members_h/38473084-150x150.webp",
      width: 150,
      height: 150,
    },
    "52547552": {
      src: "/images/members/james-200x200.webp",
      width: 200,
      height: 200,
    },
  };

  const imageConfig = imageOverrides[member.id] || {};
  const imageSrc = imageConfig.src || member.imgSrc;
  const imageWidth = imageConfig.width || 400;
  const imageHeight = imageConfig.height || 400;
  const imageAlt = member.name ? `${member.name} profile picture` : "profile picture";

  return (
    <>
      {seo && <SEOHead {...seo} />}
      <Section title="" darkBg />
      <Section darkBg={false}>
        <CoachInfo
          setCoach={setCoach}
          setModalType={setModalType}
          fname={member.fname}
          imgSrc={imageSrc}
          imgWidth={imageWidth}
          imgHeight={imageHeight}
          altText={imageAlt}
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
