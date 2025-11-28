import { Button } from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import { ServiceSchema, SchemaScript } from '@/components/Schema';
import Image from "next/image";
import Link from "next/link";

const Goal = ({ title, content }) => (
  <div className="text-center">
    <h2 className="pCentered">{title}</h2>
    <p className="pCentered">{content}</p>

  </div>
);


export default function Evaluation() {
  return (
    <>
      <SEOHead
        title="Application Evaluation - Ivy Ready"
        description="Ivy Ready offers expert application evaluation services to provide students with personalized feedback and recommendations to enhance their application and increase their chances of success."
        url="/services/application-evaluation"
      />

      <SchemaScript schema={ServiceSchema({ serviceName: 'Application Evaluation', description: 'One-off and multi-school application review by former admissions officers.' })} />
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Application Evaluation', url: '/services/application-evaluation' }]} />
      </div>

      <Section
        centerContent
        darkBg
        title="Get a one-of-a-kind evaluation!"
      >
         <h1 className="pCentered">
          Ivy Ready Evaluation is an affordable option for students looking for feedback on their appplication before official submission. 
        </h1>
        <Image
          src="/images/evaluation/sample-evaluation-1600w.webp"
          alt="sample-evaluation"
          width={1080}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1080px"
          loading="lazy"
        />
        <p className="pCentered">
          Ivy Ready Evaluation makes it easy to identify key areas of
          improvement before official submission. Insights gained from a single evaluation can help students find ways
          to improve their likelihood of admission to multiple schools.
        </p>
      </Section>

      <Section>
        <h1 className="text-3xl font-medium border-l-4 pl-5 mb-2 ">
          Ivy Ready Evaluation should be every applicant’s companion.
        </h1>
        <h2 className="text-right">
          — Michelle Levine (Director of College Counseling at Hawthorne
          Academy)
        </h2>
        <div className="flex justify-center mt-5">
          <Button
            onClick={() =>
              window.open("/#application-support-questions-section", "_self")
            }
          >
            Get Started
          </Button>
        </div>
      </Section>

      <Section centerContent darkBg>
        <h2 className="">Overview</h2>
        <p className="pCentered">
          While Ivy Ready does offer comprehensive
          Application Support Packages, this evaluation is available for
          students who prefer to work on their application independently but
          receive feedback before official submission.
        </p>

        <h2 className="font-semibold text-2xl text-center">How it Works</h2>
        <p className="pCentered">
          After submitting your colleage application, a former admission officer will review and provide you an assessment for each key area and answer any questions you may have.
        </p>

        {/* <h2 className="font-semibold text-2xl text-center">
          Evaluation Package Components:
        </h2> */}
        {/* <p className="pCentered">
          Ivy Ready Evaluation is a unique opportunity for prospective
          applicants to enhance their college applications with the feedback of
          former admissions officers. While Ivy Ready does offer comprehensive
          Application Support Packages, this evaluation is available for
          students who prefer to work on their application independently but
          receive feedback before official submission.
        </p> */}
      </Section>

      <Section centerContent title="Understanding the Evaluation">
        <p className="pCentered mb-4">
          In addition to highlighting the primary strength, setback, and
          potential area of improvement of the applicant, the evaluation
          indicates the competitiveness of high key areas using a rating scale.
        </p>
        <Image
          src="/images/evaluation/rating-scale.png"
          width={600}
          height={500}
          alt="Scale"
        />
        <p className="pCentered m-4">
          Understanding the scale: if a key area meets the{" "}
          <strong>highest</strong> Ivy Ready Standards, a rating of Ivy Ready is
          assigned next to that key area on the evaluation report. Otherwise,
          the report will state Outstanding (above average), Competitive
          (average), or Developing (below average) as appropriate.
        </p>
      </Section>
      <Section darkBg >
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <Goal
            title="Get Actionable Insights"
            content="If the Leadership presentation in an application is not Ivy Ready, we can show you how to incorporate compelling leadership examples."
          />
          <Goal
            title="Impress your Dream School"
            content="Your application represents your achievements and potential. Showcase your accomplishments in a manner that stands out to to schools!"
          />
          <Goal
            title="Stay Ahead of the Competition"
            content="We can show you how to accentuate your strengths & address key areas of improvement before official submission."
          />
          <Goal
            title="Submit your Best Application"
            content="Ivy Ready Evaluation helps you discover what is likely to harm your likelihood of admission at highly selective schools."
          />
          <Goal
            title="Your Best Investment Yet"
            content="A well put together application is pivotal to gaining admission to a highly selective school. We can show you how to make your application Ivy Ready."
          />
          <Goal
            title="Enhance Every Submission"
            content="Insights gained from your evaluation will help you transform every application you submit."
          />
          <Goal
            title="Save Time and Money"
            content="Applying to many schools is time consuming and costly. Avoid common mistakes and give yourself the best chance for admission!"
          />
          <Goal
            title="Seize your Future"
            content="Without a compelling application, you may miss out on the school meant for you. Why take chances when you can get professional feedback beforehand?"
          />
          <span id='sign-up'></span>   
        </div>
      </Section>

       
       
      <Section id="">
        {/* <Image
          className="mx-auto mb-4"
          src="/images/ivy-eval.png"
          width={200}
          height={200}
          alt="Scale"
        /> */}
        <h1 className="font-medium md:font-light text-2xl md:text-4xl text-ivy-blue mb-3">
          Learn More
        </h1>

        <p className="mb-2 text-lg text-gray-700">
          <strong>Single-School Evaluation</strong> includes a holistic review
          of the core application and supplemental essays to one school. 
        </p>
        <p className="mb-2 text-lg text-gray-700">
          <strong>Multiple-School Evaluation</strong> includes a holistic review
          of the core application and supplemental essays up to five schools.
        </p>
        <ContactForm type="EVAL" />
      </Section>


      
      <FAQ
        faqs={[
          { question: 'What does a single-school evaluation include?', answer: 'A holistic review of the core application and supplemental essays for one school with actionable feedback.' },
          { question: 'How long does the evaluation take?', answer: 'Turnaround times vary; typical evaluations are returned within 5–7 business days.' },
          { question: 'Can I request additional feedback?', answer: 'Yes — follow-up consultations and edits are available as needed.' }
        ]}
      />

      <div>
       <a href="#" className="" onClick={()=>gaEventTracker('call')}>-</a>
      </div>
    </>
  );
}
