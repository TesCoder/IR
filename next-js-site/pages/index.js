import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import Section from '@/components/Section'
import Modal from '@/components/Modal'
import { Button, ButtonRow } from '@/components/Button'
import { useState } from 'react'

const MarqueeElement = ({ children }) => <span className="text-2xl mx-2 text-ivy-blue font-light">{...children}</span>

const HyperLink = ({ href, children }) => <Link className='underline text-ivy-blue font-medium' href={href}>{...children}</Link>

const Profile = ({ imgSrc, name }) => (
  <div className='w-1/3 md:w-1/6 flex flex-col items-center mx-2'>
    <Image className='rounded-full shadow-md mb-2' src={imgSrc} width={128} height={128} alt=" profile picture" />
    <p className='text-ivy-blue text-center font-semibold'>{name}</p>
  </div>
)

export const members = [
  {
    name: "James Dean",
    imgSrc: "/images/members/james.png",
    past: ["B.S., Stanford University", "Former Admission Officer, Stanford University"],
    description: "James brings wide and deep experience to assist students applying to US universities. Some of his experiences specifically involve Stanford: he got his engineering degree there, taught three design courses, served as small group coach for two other courses, did undergraduate admissions, had one daughter admitted and another waitlisted. But James has integrated the knowledge gained at Stanford with his other experiences teaching at both public and private high schools in the US, Australia, and New Zealand as well as being a parent of high achieving students. James understands the process and strives to work with motivated students in creating compelling “profiles” to generate a range of great admission offers."
  },
  {
    name: "Ariel Englesby",
    imgSrc: "/images/members/ariel.png",
    past: ["B.A., Stanford University", "M.A., University of Southern California (USC)", "Former Admission Officer, Stanford University"],
    description: "Ariel has been working in college admissions for nearly a decade, both as a member of an admissions committee (Stanford University) and as an ambassador to prospective students. In this time, she has read thousands of applications, edited hundreds of personal statements, and developed a wide breadth of knowledge about the admissions process. Ariel combines her insider's knowledge of the application process with her passion for working with teens to help students of all levels and backgrounds communicate unique and compelling applications. To take full advantage of her expertise, select Comprehensive Application Support from the Application Support page. She can guide students with school selection, writing personal statements, application strategy, interview preparation, what (and what not) to include on an application, how to make a strong resume, and everything in between!"
  },
  {
    name: "Erika Robinson",
    imgSrc: "/images/members/erika.png",
    past: ["B.A., Harvard University (English)", "M.Div., Episcopal Divinity School", "Assistant Director of Undergraduate Admissions, Princeton University", "Assistant Director of Undergraduate Admissions, Columbia University", "Seasonal Admission Reader, Harvard University"],
    description: "In addition to her experience as an Admission Officer, Erika has taught Advanced Placement Language and Composition for more than a quarter century, and has guided thousands of seniors in the writing of successful college essays, including her own daughter, a recent graduate of Columbia University. Erika has written hundreds of letters of recommendation, as well, and knows the college admissions process from a variety of perspectives: student, parent, teacher, and admissions officer. She enjoys showing young people that, as daunting an experience as the admissions process is, it can also be an exciting opportunity for students to discover both who they are, and who it is they wish to become. Erika has been an admissions consultant both domestically and throughout Asia, having traveled to and worked with students in India, South Korea, and China. She most enjoys helping students with the essay writing process, and watching them discover their voices as both writers and as young adults who are ready to offer their gifts to the world."
  },
  {
    name: "David Spiegel",
    imgSrc: "/images/members/david.png",
    past: ["B.A., Brown University", "J.D., Cornell University", "Former Admission Officer, Brown University"],
    description: "David is an outstanding college admission consultant with extensive experience supporting students to apply and gain admission to top schools. He began his college counseling career with the desire to help students achieve their dreams. Working at the office of Undergraduate Admission at Brown University, David saw firsthand how to help students improve their applications. He also felt at “home” at his alma mater Brown University. In recent admission cycles, students who worked with David have been admitted to Cornell University, New York University, Northeastern University, Stanford University, UC Berkeley, Yale University, and the University of Chicago, among others! Whether you are looking for hourly consultation or long-term support, David is ready to assist you! Request your introductory session with David by clicking below."
  },
  {
    name: "Alicia Stewart",
    imgSrc: "/images/members/alicia.png",
    past: ["B.A., George Washington University", "MBA Candidate, Whitman School of Business, Syracuse University", "Former Admission Officer, Columbia Business School"],
    description: " With more than ten years of experience in higher education admissions, financial aid, student affairs, and teaching, I bring with me a lot of knowledge and expertise to my counseling work with students. As a Former Assistant Director of Admissions at Columbia Business School, I had the privilege of working with both full-time MBA and Executive MBA applicants. I also served as Assistant Director of Student Financial Planning at Columbia University Medical Center and have helped dozens of students navigate the financial aid system. I interviewed students, read applications, and coached hundreds of applicants into Columbia’s top-tier programs."
  },
  {
    name: "Marie Arlen",
    imgSrc: "/images/members/marie.png",
    past: ["B.A., University of Pennsylvania", "Former Admissions Officer, Columbia University"],
    description: "Marie has over 11 years of experience working in higher education counseling. As an admission officer at Columbia, she reviewed and participated in committees covering thousands of applications. As a college admission counselor, she specializes in helping applicants focused on getting into highly selective schools, and she works extensively with international applicants. She is truly passionate about helping prospective applicants showcase their potential through creative writing."
  },
  {
    name: "Anna Cross",
    imgSrc: "/images/members/anna.png",
    past: ["B.A., University of San Francisco", "MPH, University of San Francisco", "Admission, University of San Francisco", "Admission, UCSF, Master of Science in Global Health Program", "Advisor, UC Berkeley Department of Economics"],
    description: "Anna has extensive experience working with students and families with college planning, application preparation, and financial aid opportunities. She has worked as an academic advisor at a private institution, as well as in the UC system, guiding and preparing students for their academic journey. She graduated from the University of San Francisco with a B.A. in Psychology and a Minor in Neuroscience. She then went on to earn a Masters in Public Health from the University of San Francisco. She has significant experience working with Jesuit universities, as well as the UC system, at both the graduate and undergraduate level."
  },
  {
    hideOnHome: true,
    name: 'Meklit Workneh, M.D.',
    imgSrc: "/images/members/meklit.png",
    past: ["B.A., Stanford university", "M.P.H., Yale University", "M.D., University of Califronia, San Francisco"],
    description: "Dr. Workneh is an American Board certified internal medicine physician who serves as Ivy Ready's premier medical school planning and application consultant. She is an outstanding physician with an unparalleled educational pedigree and excellence in patient care. Recently, she was awarded the Clinical Research Fellowship at Johns Hopkins University, where she now serves as a resident physician. She has extensive knowledge of the medical school admission process not only from her own journey of gaining admission into prestigious institutions like Stanford, Yale, and UCSF, but also from her time as an admission committee member at UCSF. She is available to assist you with long-term planning, as a mentor, or to address your specific questions through short-term consultations. Request more information by clicking here."
  },
  {
    hideOnHome: true,
    name: 'Gregg',
    imgSrc: "/images/members/gregg.png",
    past: ["Former Admission Officer, Stanford University"],
    description: "Gregg has extensive experience (and success!) supporting students with their applications to Stanford and other highly selective schools. During his tenure as an admission officer at Stanford University, he reviewed domestic and international applications. He is an accomplished college counselor who has helped students put forward powerful narratives to increase their admission chances."
  },
  {
    hideOnHome: true,
    name: 'Deborah',
    imgSrc: "/images/members/deborah.png",
    past: ["B.A., The George Washington University", "MPM, Carnegie Mellon University", "Former Assistant Director of Admission, Carnegie Mellon University"],
    description: "Deborah is an outstanding counselor who has has spent over five years in admissions and has reviewed almost 5,000 applications during her career.  She has extensive experience supporting students with their applications to the Ivy League and other highly competitive schools in STEM (science, technology, engineering, and mathematics) and the arts. In addition to reviewing applications for academic programs, she also has experience partnering with the visual arts during their review and evaluation process (Art, Architecture, and Design), as well as making admissions decisions. Having spent time recruiting students with very different interests for private, public, or arts focused institutions, her favorite part of the admissions review process is getting to know students and helping them find their university home!"
  },
]

export default function Home() {
  // FULL, INFO, CALL, or EVAL
  const [modalType, setModalType] = useState("INFO")

  return (
    <>
      <Head>
        <title>Ivy Ready Consulting - Ivy Ready College Admission Consulting</title>
      </Head>

      <Modal id="contactModal" title={modalType == "INFO" ? "Tell us how we can best serve you." : "Enter your info for a quick call."}>
        <ContactForm type={modalType} />
      </Modal>
      <div className='flex justify-center'>
        <div className="overflow-x-hidden w-5/6 md:w-1/3 ">
          <div className="py-4 animate-marquee whitespace-nowrap ">
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
      <div className='flex bg-hero bg-cover h-4/5 bg-blue-300 py-48'>
        <div className='m-auto text-center'>
          <h1 className='text-7xl text-white' style={{ "textShadow": "2px 2px 2px #000" }}>Ivy Ready College Consulting</h1>
          <h4 className='text-2xl my-3 drop-shadow-lg italic font-medium'>
            Personalized College Admission Support
            <br />
            by Former Admission Officers
          </h4>
        </div>
      </div>

      {/* Apply */}
      <Section title="Apply with Confidence" darkBg centerContent>
        <h2 className='text-center text-2xl  text-ivy-blue font-medium my-4'>Ivy Ready offers personalized college admission coaching by matching prospective applicants with former admission officers.</h2>
        <p className=' text-xl text-center my-2 text-gray-700'>We specialize in providing a personalized admission strategy for each student—whether they are applying to the Ivy League or local schools—by capitalizing on their strengths, background, interest, and aspirations.</p>
        <p className=' text-xl text-center my-2 text-gray-700'>Our team is comprised of former admission officers who have extensive experience supporting students with the college admission process. We offer <HyperLink href="#test">application support packages</HyperLink>, <HyperLink href="#test">hourly consultation</HyperLink>, and <HyperLink href="#test">Application Evaluation</HyperLink>.</p>
        <p className=' text-xl font-bold text-gray-700'>Sign up for your (free) introductory session!</p>

        <ButtonRow setModalType={setModalType} />
      </Section>

      <Section title="Our stellar record speaks for itself!" centerContent>
        <Image src='/images/scans.jpeg' width={1080} height={500} alt="Record" />
        <h3 className='font-semibold text-lg my-4 text-gray-500 uppercase italic'>Ask for original copies!</h3>
        <Button onClick={() => window.open("/#application-support-questions-section", "_self")}>Contact Us</Button>
      </Section>

      <Section title="Meet a Few Members of Our Team and Their Admission Background" darkBg centerContent>
        <p className=' text-xl text-center my-2 text-gray-700'>Our team is comprised of former admission officers with official admission experience and expertise supporting students with the college admission process. </p>
        <div className='flex justify-center my-4 flex-wrap md:flex-nowrap overflow-visible'>
          {members.map(({ name, imgSrc }, i) => <Profile key={i} name={name} imgSrc={imgSrc} />)}
        </div>
        <p className=' text-xl text-center my-3 text-gray-700'>Our college counselors are located in cities across the U.S. Contact us if a coach with the particular background you seek is not listed. We are dedicated to finding the perfect coach for you.</p>
        <Button className="text-center" onClick={() => window.open("/#application-support-questions-section", "_self")}>LEARN MORE</Button>
      </Section>

      <Section title="Ivy Ready Application Support Packages">
        <p className=' text-xl my-3 text-gray-700'>
          We offer Essays-only Support, Comprehensive Support, and Comprehensive Support with Logistics. All packages come with unlimited hours of essay editing and admission support. (In addition, we offer <HyperLink href="#hourly-consultation">hourly consultation</HyperLink> and <HyperLink href="#application-evaluation">Application Evaluation</HyperLink>.)
        </p>
        <Image className='shadow-md' src="/images/table.jpg" width={1080} height={1080} alt='Services Table' />
        <p className=' text-xl my-3 text-gray-700'>To request our fee structure or ask questions, click <HyperLink href="/fee">here</HyperLink>.</p>
      </Section>

      <ButtonRow setModalType={setModalType} />

      <Section title="Process Overview">
        <p className='text-xl my-3 text-gray-700'>
          Our admission support begins by first matching prospective applicants with a coach who is best fit to work with them. Once the family has identified their coach, they can begin by creating a timeline for selecting colleges, writing essays, and document submission. To ensure each student receives personalized support, we limit the number of students assigned to each coach. Ivy Ready coaches are fully dedicated to every applicant.
        </p>
        <h2 className='font-medium text-2xl text-ivy-blue my-3'>
          Summary of Packages
        </h2>
        <ul className=' list-disc font-medium text-gray-600 space-y-3'>
          <li>
            <strong>Essays-only Support</strong> is available for applicants looking to self-manage the application process with guidance on essays. After initial discussion of prompts, students will move through a structured writing process, designed to help them create a compelling narrative that fits their unique background and interests.
          </li>
          <li>
            <strong>Comprehensive Support</strong> is the most popular package. In addition to support with essays, it offers expanded application coaching that includes brain storming for selecting teachers for letters of recommendation, school selection, application packaging, resume markup, and insights with other aspects of the application process.
          </li>
          <li>
            <strong>Comprehensive Support with Logistics</strong> is our most comprehensive support package. It gives families the option of offloading the logistical aspect of the application process to the consultant. This is an excellent option for applicants who have limited time and would prefer the coach takes on the logistical burden associated with applying to numerous schools.  With this package, the coach will take the lead in all areas and handle logistics, allowing the applicant to focus exclusively on areas requiring creativity. For example, the consultant will compile application requirements, deadlines, essay prompts, links to submission portals, etc., to ensure applicants are able to submit their best work with ease. Furthermore, the coach will create a detailed timeline and send reminders. The consultant will be deeply involved with the logistical aspect of the application process, in addition to providing admission expertise.
          </li>
        </ul>
        <p className=' text-xl my-3 text-gray-700'>To request our fee structure or ask questions, click <HyperLink href="/fee">here</HyperLink>.</p>
      </Section>

      <ButtonRow setModalType={setModalType} />

      <Section title='Summary of the Writing Process'>
        <p className='text-lg my-3 text-gray-700'>
          Support with the writing portion of the application process will consume a significant part of the support timeline. Please find below an estimate of the number of writing pieces required to apply to a set number of schools.
        </p>

        <p className='my-3 text-lg'><strong>10 schools</strong>: ~78 writing pieces, each will need to go through prompt discussion, outline critique, 4-5 draft reviews</p>
        <ul>
          <li>~3-4 unique personal statements</li>
          <li>~30 supplemental essays</li>
          <li>~40 short answer questions</li>
          <li>~1-2 special circumstances essays (if applicable)</li>
        </ul>

        <p className='my-3 text-lg'><strong>15 schools</strong>: ~121 writing pieces, each will need to go through prompt discussion, outline critique, 4-5 draft reviews</p>
        <ul>
          <li>~6-8 unique personal statements</li>
          <li>~45 supplemental essays</li>
          <li>~60 short answer questions</li>
          <li>~1-2 special circumstances essays (if applicable)</li>
        </ul>

        <p className='my-3 text-lg'><strong>20 schools</strong>: 164 writing pieces, each will need to go through prompt discussion, outline critique, 4-5 draft reviews</p>
        <ul>
          <li>~9-12 unique personal statements</li>
          <li>~60 supplemental essays</li>
          <li>~80 short answer questions</li>
          <li>~1-2 special circumstances essays (if applicable)</li>
        </ul>
        <p className=' text-xl my-3 text-gray-700'>To request our fee structure or ask questions, click <HyperLink href="/fee">here</HyperLink>.</p>

      </Section>

      <ButtonRow setModalType={setModalType} />

      <Section title="Detailed Comparison of Packages">
        <p className=' text-lg my-3 text-gray-700'>Essays-only Support is an excellent option for applicants who have personalized admission support at their high school, but are looking for feedback on their essays. However, the college application process is no easy feat especially given the time commitment required from the applicants in one of the busiest year of high school. In addition, Essays-only Support puts the responsibility of determining the application angle, setting the narrative, understanding how different pieces of the application support each other, etc., on the applicant. This will invariably require an understanding of how all parts of the application, including the extracurricular activities list and family background, work together with essays to help the applicant stand out. Ensuring the applicant is able to submit not only their best work but also the most compelling application to each school will require extensive planning, preparation, and oversight—included as a part of Comprehensive Support and Comprehensive Support with Logistics.</p>
        <p className=' text-lg my-3 text-gray-700'>Comprehensive Support with Logistics is best for applicants looking for complete support from the planning stage through application submission. On the other hand, Comprehensive Support is the most common option and covers support outside of the Essays-only package.</p>
        <p className=' text-lg my-3 text-gray-700'>The writing portion of the application will be the most time-intensive component of this process. The bulk of our coaching will revolve around crafting and honing a compelling narrative and developing the voice of the applicant. This will require considerable work before and during the writing process. For example, <strong>ten schools</strong> will require submitting up to <strong>thirty supplemental essays</strong>. (On average, each school requires three supplemental essays in addition to the personal statement.) Each essay will need to go through at least 4-5 drafts. And since supplemental essays have a limited word count, this will require extensive planning and follow-through from early summer through submission.</p>
        <p className=' text-lg my-3 text-gray-700'>In addition, supplemental essays represent each school&apos;s unique evaluation criteria. Schools will be looking closely at these essays to further gauge the applicant&apos;s interest and commitment to their respective schools. Every supplemental essay, in addition to the personal statement, must be top notch. Ill prepared essays cannot be submitted, as inadequate essays will give the admission staff an easy justification for not considering the applicant further. If essays are too short or are not well written, the admission staff may believe that the applicant procrastinated, may not be a great fit for the school because key elements are missing, or is simply not committed to entry into their institution.</p>
        <p className=' text-lg my-3 text-gray-700'>If the applicant is able to manage the logistical aspects of this process, Essays-only Support and Comprehensive Support will be the right option. Otherwise, we recommend Comprehensive Support with Logistics in which we take the leading role in the whole process. Comprehensive Support with Logistics, as a more personalized option, will relieve the applicant of the responsibility and stress that accompanies the logistical aspect of the application process. The burden of this on the applicant cannot be underestimated, as our role in alleviating this stress through Comprehensive Support with Logistics cannot be overstated. By ensuring the applicant is on track from the start, we make sure there is enough time to refine every essay and submission. With Comprehensive Support with Logistics, we take charge of the process on our end by notifying the applicant of due dates for drafts, providing the support needed to ensure all documents are submitted on time, and by being there when anything comes up at the last minute, etc.</p>
        <p className=' text-lg my-3 text-gray-700'>When it comes to personal statements, while the same essay may be used as a template for multiple submission, we recommend writing an essay tailored to each school and program. In instances where admission is granted for a specific college, instead of the university as a whole, tailoring the personal statement to each school will be critical in demonstrating the applicant&apos;s interest and increasing their likelihood of admission. Especially at highly selective institutions, which based on the 2016 acceptance report is an ever-growing list of schools, every aspect of the applicant (not only what is in the application but also their background, school and family context) will be closely examined. Hence, whether the applicant wants to apply to one, five, ten, fifteen or twenty schools, every submission must be completed with the utmost attention to detail—one application at a time. Crafting every application in a manner that showcases the applicant in the best light will require considerable time, engagement and effort from both the applicant and the consultant. In other words, since every school&apos;s admission committee is making a decision on every applicant independently, each submission must be prepared in a same manner that ensures maximum potential for the best outcome. </p>
        <p className=' text-lg my-3 text-gray-700'></p>
        <p className=' text-lg my-3 text-gray-700'></p>
        <p className=' text-lg my-3 text-gray-700'></p>
        <p className=' text-xl my-3 text-gray-700'>To request our fee structure or ask questions, click <HyperLink href="/fee">here</HyperLink>.</p>

      </Section>

      <Section id="testimonials" title="Testimonials" darkBg>
        {/* Bootstrap Carousel */}
        <div id="testimonials" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src="/images/carousel/A.png" width={400} height={350} className="d-block w-100" alt="Tweet" />
            </div>
            {["B", "C", "D", "E", "F", "H", "I", "J"].map((letter, i) => (
              <div key={i} className="carousel-item">
                <Image src={`/images/carousel/${letter}.png`} width={400} height={350} className="d-block w-100" alt="Tweet" />
              </div>
            ))}

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonials" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-gray-700 rounded" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonials" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-gray-700 rounded" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Section>


      <Section id="application-support-questions-section" >

        <ContactForm type="FULL" />
      </Section>

      <ButtonRow setModalType={setModalType} />
    </>
  )
}


{/* <h1>Tsion Consulting</h1>
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
        </div> */}