// pages/support-packages.js

import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import { ServiceSchema, SchemaScript } from '@/components/Schema';
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { Button, ButtonRow } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import { useState } from "react";
import data from "@/data/packages-comparison.json";
import PackagesComparison from "@/components/PackagesComparison";
import { OrbitGlowButton } from "@/components/OrbitGlowButton";
import { trackCtaClick } from "@/lib/trackCta";

const HyperLink = ({ href, children }) => (
  <Link className="underline text-ivy-blue font-medium" href={href}>
    {children}
  </Link>
);

export default function SupportPackages() {
  const [modalType, setModalType] = useState("INFO");
  const [coach, setCoach] = useState();

  const handleSupportPlanClick = () => {
    setModalType("INFO");
    trackCtaClick({
      location: "services",
      text: "Start Your Application Plan",
      destination: "#contactModal",
    });
  };

  const handleSupportIntroCallClick = () => {
    setModalType("CALL");
    trackCtaClick({
      location: "services",
      text: "Request Free Intro Call",
      destination: "#contactModal",
    });
  };

  return (
    <>
      <SEOHead
        title="Ivy Ready Support Packages"
        description="Explore Ivy Ready's college application support services, including essays-only, comprehensive guidance, and full application support."
        url="/services/support-packages"
      />

      <SchemaScript
        schema={ServiceSchema({
          serviceName: "Application Support Packages",
          description:
            "Essays-only, Comprehensive Support, and Full Application Support offered by Ivy Ready.",
          serviceUrl: "https://ivyready.com/services/support-packages",
          areaServed: "United States",
          priceRange: "$$$",
        })}
      />
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Support Packages", url: "/services/support-packages" },
          ]}
        />
      </div>

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

      <Section centerContent title="Ivy Ready Application Support Packages">
        <p className="pCentered">
          We offer <b>Essays-only Support, Comprehensive Support, and Full
          Application Support</b>. All packages come with unlimited hours
          of essay editing and admission support. (In addition, we offer
          <HyperLink href="/services/hourly-consultation"> hourly consultation</HyperLink>
          and <HyperLink href="/services/application-evaluation">Application Evaluation</HyperLink>.)
        </p>
        <Image
          className="shadow-md"
          src="/images/services/table-2000w.webp"
          width={2000}
          height={2792}
          alt="Services Table"
        />
         
      </Section>

      {/* <section id="comparison" className="mx-auto max-w-6xl px-4 py-8">
        <PackagesComparison data={data} />
      </section> */}

      <div className="flex justify-center bg-[#2D5780]">
        <div className="my-5 flex flex-col gap-x-10 gap-y-4 items-center md:flex-row">
          <OrbitGlowButton
            onClick={handleSupportPlanClick}
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Start Your Application Plan
          </OrbitGlowButton>
          <OrbitGlowButton
            onClick={handleSupportIntroCallClick}
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Request Free Intro Call
          </OrbitGlowButton>
        </div>
      </div>

      <Section title="Process Overview">
        <p className="pCentered text-start">
          Our admission support begins by first matching prospective applicants
          with a coach who is best fit to work with them. Once the family has
          identified their coach, they can begin by creating a timeline for
          selecting colleges, writing essays, and document submission. To ensure
          each student receives personalized support, we limit the number of
          students assigned to each coach. Ivy Ready coaches are fully dedicated
          to every applicant.
        </p>
        <h2 className=""> Summary of Packages </h2>
        <ul className="list-disc font-medium text-gray-600 space-y-1">
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
            <strong>Full Application Support</strong> hands off the
            logistical burden to the consultant — including timelines,
            submission portals, and reminders.
          </li>
        </ul>
          
      </Section>

      <ButtonRow darkBg setModalType={setModalType} />

     <Section title="Summary of the Writing Process">
        <p className="pCentered text-start">
          The writing portion consumes most of the timeline. Below is an estimate by
          school count:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* 10 schools */}
          <div className="space-y-3">
            <p className="pCentered text-start">
              <strong>10 schools</strong>: 78 pieces
            </p>
            <ul>
              <li>3–4 personal statements</li>
              <li>30 supplemental essays</li>
              <li>40 short answers</li>
              <li>1–2 additional essays</li>
            </ul>
          </div>

          {/* 15 schools */}
          <div className="space-y-3">
            <p className="pCentered text-start">
              <strong>15 schools</strong>: 121 pieces
            </p>
            <ul>
              <li>6–8 personal statements</li>
              <li>45 supplemental essays</li>
              <li>60 short answers</li>
              <li>1–2 additional essays</li>
            </ul>
          </div>

          {/* 20 schools */}
          <div className="space-y-3">
            <p className="pCentered text-start">
              <strong>20 schools</strong>: 164 pieces
            </p>
            <ul>
              <li>9–12 personal statements</li>
              <li>60 supplemental essays</li>
              <li>80 short answers</li>
              <li>1–2 additional essays</li>
            </ul>
          </div>
        </div>
      </Section>


      <ButtonRow darkBg setModalType={setModalType} />

      <Section title="Detailed Comparison of Packages">
        <div className="max-h-[500px] overflow-y-auto pr-4 mt-4 scroll-smooth space-y-6">
            <p className>
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
              Comprehensive Support and Full Application Support.
            </p>
            <p className="pCentered text-start">
              Full Application Support is best for applicants looking
              for complete support from the planning stage through application
              submission. On the other hand, Comprehensive Support is the most
              common option and covers support outside of the Essays-only package.
            </p>
            <p className="pCentered text-start">
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
            <p className="pCentered text-start">
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
            <p className="pCentered text-start">
              If the applicant is able to manage the logistical aspects of this
              process, Essays-only Support and Comprehensive Support will be the
              right option. Otherwise, we recommend Full Application Support in
              which we take the leading role in the whole process. Full
              Application Support, as a more personalized option, will relieve the
              applicant of the responsibility and stress that accompanies the
              logistical aspect of the application process. The burden of this on
              the applicant cannot be underestimated, as our role in alleviating
              this stress through Full Application Support cannot be overstated.
              By ensuring the applicant is on track from the start, we make sure
              there is enough time to refine every essay and submission. With Full
              Application Support, we take charge of the process on our end by
              notifying the applicant of due dates for drafts, providing the
              support needed to ensure all documents are submitted on time, and by
              being there when anything comes up at the last minute, etc.
            </p>
            <p className="pCentered text-start">
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
          
          </div>
        <span id="testimonials-section"></span>
      </Section>
      
      {/* <ButtonRow darkBg setModalType={setModalType} /> */}

      <FAQ
        faqs={[
          { question: 'What is included in Comprehensive Support?', answer: 'Comprehensive Support includes brainstorming, essay guidance, school selection, and timeline management to help you submit strong applications.' },
          { question: 'Can I purchase Essays-only Support?', answer: 'Yes — Essays-only Support is available for applicants who want focused essay feedback while managing other parts themselves.' },
          { question: 'Do you offer payment plans?', answer: 'We offer flexible payment options; please contact us for details and eligibility.' }
        ]}
      />

      <Section darkBg>
        <ContactForm type="FULL" />
      </Section>
    </>
  );
}