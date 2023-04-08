import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import Modal from "@/components/Modal";
import { Button, ButtonRow, ButtonRow2 } from "@/components/Button";
import { useState } from "react";
import { members } from "../components/membersList";

const MarqueeElement = ({ children }) => (
  <span className="text-2xl mx-2 text-ivy-blue font-light">{...children}</span>
);

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
        className="rounded-full shadow-md mb-2"
        src={imgSrc}
        width={128}
        height={128}
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
          Ivy Ready Consulting - Ivy Ready College Admission Consulting
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

      <div className="flex justify-center">
        <div className="overflow-x-hidden w-5/6 md:w-3/3 ">
          <div className="py-3 animate-marquee whitespace-nowrap ">
            <MarqueeElement>Ivy Ready</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Dream it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Reach it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Ivy Ready</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Dream it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Reach it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Ivy Ready</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Dream it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Reach it</MarqueeElement>
            <MarqueeElement>Ivy Ready</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Dream it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
            <MarqueeElement>Reach it</MarqueeElement>
            <MarqueeElement>〰️</MarqueeElement>
          </div>
        </div>
      </div>

      {/* Main Banner */}
      <div
        className="flex bg-hero bg-cover bg-blue-300 pt-20 sm:py-72 md:py-72 lg:py-80 2xl:py-96"
        style={{ height: "400px" }}
      >
        <div className="m-auto text-center">
          <h1
            className="text-ivy-red text-4xl lg:text-7xl "
            style={{ textShadow: "5px 5px 5px white" }}
          >
            Ivy Ready College Consulting
          </h1>
          {/* <h4 className='text-2xl my-3 drop-shadow-lg italic font-medium'>
            Personalized College Admission Support
            <br />
            by Former Admission Officers
          </h4> */}
        </div>
      </div>

      {/* Apply */}
      <Section title="Apply with Confidence" darkBg centerContent>
        <h2 className="text-center text-2xl  text-ivy-blue font-medium my-4">
          Ivy Ready offers personalized college admission coaching by matching
          prospective applicants <b>with former admission officers</b>.
        </h2>
        <p className=" text-xl text-center my-2 text-gray-700">
          We specialize in providing a personalized admission strategy for each
          student—whether they are applying to the Ivy League or local
          schools—by capitalizing on their strengths, background, interest, and
          aspirations.
        </p>
        <p className=" text-xl text-center my-2 text-gray-700">
          Our team is comprised of former admission officers who have extensive
          experience supporting students with the college admission process. We
          offer{" "}
          <HyperLink href="/#application-support-questions-section">
            application support packages
          </HyperLink>
          ,{" "}
          <HyperLink href="/#application-support-questions-section">
            hourly consultation
          </HyperLink>
          , and <HyperLink href="/evaluation">Application Evaluation</HyperLink>
          .
        </p>
        <p className=" text-xl text-center font-bold text-gray-700">
          Sign up for your (free) introductory session!
        </p>

        <ButtonRow setModalType={setModalType} />
      </Section>

      <Section title="Our stellar record speaks for itself!" centerContent>
        <Image
          src="/images/scans.jpeg"
          width={1080}
          height={500}
          alt="Record"
        />
        <h3 className="font-semibold text-lg my-4 text-gray-500 uppercase italic">
          Ask for original copies!
        </h3>
        <Button
          onClick={() =>
            window.open("/#application-support-questions-section", "_self")
          }
        >
          Contact Us
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
        <Button
          className="text-center"
          onClick={() => window.open("/about-us#top", "_self")}
        >
          Read their Profiles
        </Button>
      </Section>

      <Section title="Ivy Ready Application Support Packages">
        <p>
          We offer{" "}
          <b>
            Essays-only Support, Comprehensive Support, and Comprehensive
            Support with Logistics
          </b>
          . All packages come with unlimited hours of essay editing and
          admission support. (In addition, we offer{" "}
          <HyperLink href="/hourly-consultation">hourly consultation</HyperLink>{" "}
          and <HyperLink href="/evaluation">Application Evaluation</HyperLink>
          .)
        </p>
        <Image
          className="shadow-md"
          src="/images/table.jpg"
          width={1080}
          height={1080}
          alt="Services Table"
        />
        <p>
          To request our fee structure or ask questions, click{" "}
          <HyperLink href="/#application-support-questions-section">
            here
          </HyperLink>
          .
        </p>
      </Section>

      <ButtonRow setModalType={setModalType} />

      <Section title="Process Overview">
        <p>
          Our admission support begins by first matching prospective applicants
          with a coach who is best fit to work with them. Once the family has
          identified their coach, they can begin by creating a timeline for
          selecting colleges, writing essays, and document submission. To ensure
          each student receives personalized support, we limit the number of
          students assigned to each coach. Ivy Ready coaches are fully dedicated
          to every applicant.
        </p>
        <h2 className="font-medium text-2xl text-ivy-blue my-3">
          Summary of Packages
        </h2>
        <ul className=" list-disc font-medium text-gray-600 space-y-3">
          <li>
            <strong>Essays-only Support</strong> is available for applicants
            looking to self-manage the application process with guidance on
            essays. After initial discussion of prompts, students will move
            through a structured writing process, designed to help them create a
            compelling narrative that fits their unique background and
            interests.
          </li>
          <li>
            <strong>Comprehensive Support</strong> is the most popular package.
            In addition to support with essays, it offers expanded application
            coaching that includes brain storming for selecting teachers for
            letters of recommendation, school selection, application packaging,
            resume markup, and insights with other aspects of the application
            process.
          </li>
          <li>
            <strong>Comprehensive Support with Logistics</strong> is our most
            comprehensive support package. It gives families the option of
            offloading the logistical aspect of the application process to the
            consultant. This is an excellent option for applicants who have
            limited time and would prefer the coach takes on the logistical
            burden associated with applying to numerous schools. With this
            package, the coach will take the lead in all areas and handle
            logistics, allowing the applicant to focus exclusively on areas
            requiring creativity. For example, the consultant will compile
            application requirements, deadlines, essay prompts, links to
            submission portals, etc., to ensure applicants are able to submit
            their best work with ease. Furthermore, the coach will create a
            detailed timeline and send reminders. The consultant will be deeply
            involved with the logistical aspect of the application process, in
            addition to providing admission expertise.
          </li>
        </ul>
        <p>
          To request our fee structure or ask questions, click{" "}
          <HyperLink href="/#application-support-questions-section">
            here
          </HyperLink>
          .
        </p>
      </Section>

      <ButtonRow setModalType={setModalType} />

      <Section title="Summary of the Writing Process">
        <p>
          Support with the writing portion of the application process will
          consume a significant part of the support timeline. Please find below
          an estimate of the number of writing pieces required to apply to a set
          number of schools.
        </p>

        <p>
          <strong>10 schools</strong>: 78 writing pieces, each will need to go
          through prompt discussion, outline critique, 4-5 draft reviews
        </p>
        <ul>
          <li>3-4 unique personal statements</li>
          <li>30 supplemental essays</li>
          <li>40 short answer questions</li>
          <li>1-2 special circumstances essays (if applicable)</li>
        </ul>

        <p>
          <strong>15 schools</strong>: 121 writing pieces, each will need to go
          through prompt discussion, outline critique, 4-5 draft reviews
        </p>
        <ul>
          <li>6-8 unique personal statements</li>
          <li>45 supplemental essays</li>
          <li>60 short answer questions</li>
          <li>1-2 special circumstances essays (if applicable)</li>
        </ul>

        <p>
          <strong>20 schools</strong>: 164 writing pieces, each will need to go
          through prompt discussion, outline critique, 4-5 draft reviews
        </p>
        <ul>
          <li>9-12 unique personal statements</li>
          <li>60 supplemental essays</li>
          <li>80 short answer questions</li>
          <li>1-2 special circumstances essays (if applicable)</li>
        </ul>
        <p>
          To request our fee structure or ask questions, click{" "}
          <HyperLink href="/#application-support-questions-section">
            here
          </HyperLink>
          .
        </p>
      </Section>

      <ButtonRow setModalType={setModalType} />

      <Section title="Detailed Comparison of Packages">
        <p>
          Essays-only Support is an excellent option for applicants who have
          personalized admission support at their high school, but are looking
          for feedback on their essays. However, the college application process
          is no easy feat especially given the time commitment required from the
          applicants in one of the busiest year of high school. In addition,
          Essays-only Support puts the responsibility of determining the
          application angle, setting the narrative, understanding how different
          pieces of the application support each other, etc., on the applicant.
          This will invariably require an understanding of how all parts of the
          application, including the extracurricular activities list and family
          background, work together with essays to help the applicant stand out.
          Ensuring the applicant is able to submit not only their best work but
          also the most compelling application to each school will require
          extensive planning, preparation, and oversight—included as a part of
          Comprehensive Support and Comprehensive Support with Logistics.
        </p>
        <p>
          Comprehensive Support with Logistics is best for applicants looking
          for complete support from the planning stage through application
          submission. On the other hand, Comprehensive Support is the most
          common option and covers support outside of the Essays-only package.
        </p>
        <p>
          The writing portion of the application will be the most time-intensive
          component of this process. The bulk of our coaching will revolve
          around crafting and honing a compelling narrative and developing the
          voice of the applicant. This will require considerable work before and
          during the writing process. For example, <strong>ten schools</strong>{" "}
          will require submitting up to{" "}
          <strong>thirty supplemental essays</strong>. (On average, each school
          requires three supplemental essays in addition to the personal
          statement.) Each essay will need to go through at least 4-5 drafts.
          And since supplemental essays have a limited word count, this will
          require extensive planning and follow-through from early summer
          through submission.
        </p>
        <p>
          In addition, supplemental essays represent each school&apos;s unique
          evaluation criteria. Schools will be looking closely at these essays
          to further gauge the applicant&apos;s interest and commitment to their
          respective schools. Every supplemental essay, in addition to the
          personal statement, must be top notch. Ill prepared essays cannot be
          submitted, as inadequate essays will give the admission staff an easy
          justification for not considering the applicant further. If essays are
          too short or are not well written, the admission staff may believe
          that the applicant procrastinated, may not be a great fit for the
          school because key elements are missing, or is simply not committed to
          entry into their institution.
        </p>
        <p>
          If the applicant is able to manage the logistical aspects of this
          process, Essays-only Support and Comprehensive Support will be the
          right option. Otherwise, we recommend Comprehensive Support with
          Logistics in which we take the leading role in the whole process.
          Comprehensive Support with Logistics, as a more personalized option,
          will relieve the applicant of the responsibility and stress that
          accompanies the logistical aspect of the application process. The
          burden of this on the applicant cannot be underestimated, as our role
          in alleviating this stress through Comprehensive Support with
          Logistics cannot be overstated. By ensuring the applicant is on track
          from the start, we make sure there is enough time to refine every
          essay and submission. With Comprehensive Support with Logistics, we
          take charge of the process on our end by notifying the applicant of
          due dates for drafts, providing the support needed to ensure all
          documents are submitted on time, and by being there when anything
          comes up at the last minute, etc.
        </p>
        <p>
          When it comes to personal statements, while the same essay may be used
          as a template for multiple submission, we recommend writing an essay
          tailored to each school and program. In instances where admission is
          granted for a specific college, instead of the university as a whole,
          tailoring the personal statement to each school will be critical in
          demonstrating the applicant&apos;s interest and increasing their
          likelihood of admission. Especially at highly selective institutions,
          which based on the 2016 acceptance report is an ever-growing list of
          schools, every aspect of the applicant (not only what is in the
          application but also their background, school and family context) will
          be closely examined. Hence, whether the applicant wants to apply to
          one, five, ten, fifteen or twenty schools, every submission must be
          completed with the utmost attention to detail—one application at a
          time. Crafting every application in a manner that showcases the
          applicant in the best light will require considerable time, engagement
          and effort from both the applicant and the consultant. In other words,
          since every school&apos;s admission committee is making a decision on
          every applicant independently, each submission must be prepared in a
          same manner that ensures maximum potential for the best outcome.{" "}
        </p>
        <p>
          To request our fee structure or ask questions, click{" "}
          <HyperLink href="/#application-support-questions-section">
            here
          </HyperLink>
          .
        </p>
      </Section>

      <Section id="testimonials" title="Testimonials" darkBg>
        {/* Bootstrap Carousel */}
        <div
          id="testimonials"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src="/images/carousel/A.png"
                width={400}
                height={350}
                className="d-block w-100"
                alt="Tweet"
              />
            </div>
            {["B", "C", "D", "E", "F", "H", "I", "J"].map((letter, i) => (
              <div key={i} className="carousel-item">
                <Image
                  src={`/images/carousel/${letter}.png`}
                  width={400}
                  height={350}
                  className="d-block w-100"
                  alt="Tweet"
                />
              </div>
            ))}
          </div>
          <button
            className="visually-hidden carousel-control-prev bg-transparent"
            type="button"
            data-bs-target="#testimonials"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-gray-700 rounded"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="visually-hidden carousel-control-next bg-transparent"
            type="button"
            data-bs-target="#testimonials"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-gray-700 rounded"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Section>

      <Section id="application-support-questions-section">
        <ContactForm type="FULL" />
      </Section>

      <ButtonRow setModalType={setModalType} />
    </>
  );
}

{
  /* <h1>Tsion Consulting</h1>
        <div className='row justify-content-center'>
          <div className='col-8 col-md-5'>
            <div className="card mt-5" style={{ height: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">Contact Form</h5>
                <p className="card-text">Check out the contact form using the link below. Let me know what you think!</p>
                <Link href="/contact" className="btn btn-primary">Click Here</Link>
              </div>
            </div>
          </div>
          <div className='col-8 col-md-5'>
            <div className="card mt-5" style={{ height: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">Application Support Agreement Agreement</h5>
                <p className="card-text">Check out the agreement form using the link below. Let me know what you think!</p>
                <Link href="/agreement" className="btn btn-primary">Click Here</Link>
              </div>
            </div>
          </div>
        </div> */
}
