// pages/support-packages.js

import Head from "next/head";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { Button, ButtonRow } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import { useState } from "react";

const HyperLink = ({ href, children }) => (
  <Link className="underline text-ivy-blue font-medium" href={href}>
    {children}
  </Link>
);

export default function SupportPackages() {
  const [modalType, setModalType] = useState("INFO");
  const [coach, setCoach] = useState();

  return (
    <>
      <Head>
        <title>Ivy Ready Support Packages</title>
        <meta
          name="description"
          content="Explore Ivy Ready's college application support services, including essays-only, comprehensive guidance, and full logistics support."
        />
      </Head>

      <Modal
        id="contactModal"
        title={
          modalType === "INFO"
            ? "Tell us how we can best serve you."
            : "Enter your info for a quick call."
        }
      >
        <ContactForm type={modalType} />
      </Modal>

      <Modal id="coachModal" title={`Schedule your intro call with ${coach}`}>
        <ContactForm showProfile={true} coachName={coach} />
      </Modal>

      <Section title="Ivy Ready Application Support Packages">
        <p>
          We offer <b>Essays-only Support, Comprehensive Support, and Comprehensive
          Support with Logistics</b>. All packages come with unlimited hours
          of essay editing and admission support. (In addition, we offer
          <HyperLink href="/hourly-consultation"> hourly consultation</HyperLink>
          and <HyperLink href="/evaluation">Application Evaluation</HyperLink>.)
        </p>
        <Image
          className="shadow-md"
          src="/images/table.png"
          width={2000}
          height={2792}
          alt="Services Table"
        />
        <p>
          To request our fee structure or ask questions, click
          <HyperLink href="/#application-support-questions-section"> here</HyperLink>.
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
        <ul className="list-disc font-medium text-gray-600 space-y-3">
          <li>
            <strong>Essays-only Support</strong> is available for applicants
            looking to self-manage the application process with guidance on
            essays.
          </li>
          <li>
            <strong>Comprehensive Support</strong> includes expanded coaching:
            brainstorming recommenders, school selection, resume markup, and
            packaging.
          </li>
          <li>
            <strong>Comprehensive Support with Logistics</strong> hands off the
            logistical burden to the consultant — including timelines,
            submission portals, and reminders.
          </li>
        </ul>
        <p>
          To request our fee structure or ask questions, click
          <HyperLink href="/#application-support-questions-section"> here</HyperLink>.
        </p>
      </Section>

      <ButtonRow setModalType={setModalType} />

      <Section title="Summary of the Writing Process">
        <p>
          The writing portion consumes most of the timeline. Below is an
          estimate by school count:
        </p>

        <p>
          <strong>10 schools</strong>: 78 pieces → prompt discussions, outlines,
          4–5 drafts each
        </p>
        <ul>
          <li>3–4 personal statements</li>
          <li>30 supplemental essays</li>
          <li>40 short answers</li>
          <li>1–2 special circumstances essays</li>
        </ul>

        <p>
          <strong>15 schools</strong>: 121 pieces
        </p>
        <ul>
          <li>6–8 personal statements</li>
          <li>45 supplemental essays</li>
          <li>60 short answers</li>
          <li>1–2 special circumstances essays</li>
        </ul>

        <p>
          <strong>20 schools</strong>: 164 pieces
        </p>
        <ul>
          <li>9–12 personal statements</li>
          <li>60 supplemental essays</li>
          <li>80 short answers</li>
          <li>1–2 special circumstances essays</li>
        </ul>

        <p>
          To request our fee structure or ask questions, click
          <HyperLink href="/#application-support-questions-section"> here</HyperLink>.
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
        <span className="" id="testimonials-section"></span>
      </Section>
      <ButtonRow setModalType={setModalType} />

      <Section>
        <ContactForm type="FULL" />
      </Section>
    </>
  );
}