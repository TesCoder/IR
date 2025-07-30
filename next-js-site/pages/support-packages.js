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
          Essays-only Support is great for applicants who already have school-based
          guidance but want expert help on essays.
        </p>
        <p>
          Comprehensive Support includes help with strategy, packaging,
          recommendations, and application cohesion.
        </p>
        <p>
          Comprehensive Support with Logistics offers full process ownership:
          reminders, deadlines, prompt collection, and submission scheduling.
        </p>
        <p>
          Each submission must be strategically crafted to maximize impact —
          especially for highly selective schools. With our help, applicants can
          maintain quality across every application.
        </p>
        <p>
          To request our fee structure or ask questions, click
          <HyperLink href="/#application-support-questions-section"> here</HyperLink>.
        </p>
      </Section>

      <ButtonRow setModalType={setModalType} />

      <Section>
        <ContactForm type="FULL" />
      </Section>
    </>
  );
}