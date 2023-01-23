import Alert from '@/components/Alert';
import useAgreementForm from '@/hooks/useAgreementForm'
import signAgreement from '@/lib/signAgreement';
import styles from '@/styles/agreement.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

export default function Agreement() {
  const { values, handleChange } = useAgreementForm();
  const [isSubmitting, setSubmitting] = useState(false);
  const [downloadURL, setDownloadURL] = useState();

  const [responseMessage, setResponseMessage] = useState(
    { success: false, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log("Values:", values)
    try {
      const res = await signAgreement(values);
      if (res.status === 250) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        console.log("DOWNLOAD URL:", url)
        setDownloadURL(url);
        setResponseMessage(
          { success: true, message: 'Form signed! We will provide you with a countersigned copy soon.' });
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        success: false,
        message: 'Oops something went wrong. Please try again.',
      });
    }
    setSubmitting(false);
  };

  if (responseMessage.success) {
    return (
      <div className="container">
        <div className='row mt-5 justify-content-center'>
          <div className='col-5'>
            <Alert message={responseMessage.message} success={responseMessage.success} />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col text-center'>
            <a href={downloadURL} download="Ivy Ready - Signed Agreement.pdf" className="btn btn-outline-danger text-center">
              Download Signed PDF
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='container mt-4'>
      <div className='row justify-content-center'>
        <div className='col-5'>
          <Alert message={responseMessage.message} success={responseMessage.success} />
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-7'>
          <div className='row'>
            <div className="col text-end">
              <p id="agreement-number">Agreement #LW1928375621</p>
            </div>

          </div>
          <h1>Application Support Agreement</h1>
          <p>
            Please complete all applicable fields. If you have any questions, please
            contact us before submission.&nbsp;We are dedicated to building a
            package that suits your needs. <strong>(Click </strong
            ><a
              href="https://www.ivyready.org/#application-support-chart-section"
              target="_blank" rel="noreferrer"
            ><strong>here</strong></a
            ><strong> for services included with each package.)</strong>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label htmlFor="date" className="col-sm-1 col-form-label">Date</label>
              <div className="col-sm-11">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="date"
                  name="date"
                  value={new Date().toLocaleDateString()}
                />
              </div>

            </div>

            <div className="mb-3">
              <label htmlFor="client" className="form-label">
                This Agreement signed at the above date is made by and between Ivy
                Ready® LLC (&quot;Company&quot;), AND
              </label>
              <textarea
                className="form-control"
                id="client"
                name="client"
                value={values.client}
                onChange={handleChange}
                rows="3"
                aria-describedby="clientHelp"
              ></textarea>
              <div id="clientHelp" className="form-text">
                <i>
                  In the field above: Enter your full name &quot;whose address is&quot; [enter
                  address] (&quot;Client.&quot;)&quot; <br />
                  For example: Jane Smith whose address is
                  1111 Henry Drive, San Diego, CA 91977 (&quot;Client.&quot;)
                </i>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="parentName" className="form-label"
              >Parent (Legal Guardian) Name</label
              >
              <input
                type="text"
                className="form-control"
                id="parentName"
                name="parentName"
                value={values.parentName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="parentEmail" className="form-label"
              >Parent (Legal Guardian) Email Address</label
              >
              <input
                type="email"
                className="form-control"
                id="parentEmail"
                name="parentEmail"
                value={values.parentEmail}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="parentPhone" className="form-label"
              >Parent (Legal Guardian) Phone Number</label
              >
              <input
                type="text"
                className="form-control"
                id="parentPhone"
                name="parentPhone"
                value={values.parentPhone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="studentName" className="form-label"
              >Applicant (Student) Name</label
              >
              <input
                type="text"
                className="form-control"
                id="studentName"
                name="studentName"
                value={values.studentName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="studentEmail" className="form-label"
              >Applicant (Student) Email Address</label
              >
              <input
                type="email"
                className="form-control"
                id="studentEmail"
                name="studentEmail"
                value={values.studentEmail}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="studentPhone" className="form-label"
              >Applicant (Student) Phone Number</label
              >
              <input
                type="text"
                className="form-control"
                id="studentPhone"
                name="studentPhone"
                value={values.studentPhone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="coach" className="form-label">Coach</label>
              <input type="text" className="form-control" id="coach" name="coach" value={values.coach}
                onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="payment" className="form-label">Select Payment Method</label>
              <p>
                <small
                >Zelle is available for customers of Chase, Bank of America, and
                  most major banks.</small
                >
              </p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  onChange={handleChange}
                  id="zelle"
                  value="zelle"
                />
                <label className="form-check-label" htmlFor="zelle">
                  Payment via Zelle to email Contact@IvyReady.com
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  onChange={handleChange}
                  id="check"
                  value="check"
                />
                <label className="form-check-label" htmlFor="check">
                  Mail Check to Ivy Ready at 2120 Avy Avenue #7811 Menlo Park, CA
                  94205
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  onChange={handleChange}
                  id="creditCard"
                  value="creditCard"
                />
                <label className="form-check-label" htmlFor="creditCard">
                  Pay by Credit Card (+3.5% Fee)
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="signature" className="form-label">
                Please sign with your name, date of birth, and a statement
                indicating that you have read and agree to abide by Ivy Ready&apos;s
                Terms of Service.
              </label>
              <div id="signatureHelp" className="form-text">
                <small>
                  <strong>Example:</strong>
                  <br />
                  I, Jane T. Smith, DOB: DD/MM/YYYY, hereby agree to abide by Ivy
                  Ready&apos;s Terms of Service. /Jane T. Smith/
                </small>
              </div>
              <textarea
                className="form-control"
                id="signature"
                name="signature"
                value={values.signature}
                onChange={handleChange}
                rows="3"
                aria-describedby="signatureHelp"
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="ivySignature" className="form-label">
                Ivy Ready Representative Signature
              </label>
              <textarea
                className="form-control"
                id="client"
                rows="2"
                aria-describedby="clientHelp"
                disabled
              ></textarea>
            </div>

            <p>
              <strong
              >We will provide you with a countersigned copy after
                submission.</strong
              >
            </p>

            <button className="btn btn-primary" type="submit">{
              isSubmitting ?
                (
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) :
                "Submit"}</button>
          </form>
          <br />
          <pre id="terms">
            <h3>Terms of Service</h3>
            By using our service, you agree to abide by Ivy Ready&apos;s Terms of Service and additional guidelines agreed with the College Application Coach (if applicable) during the administration of a service.
            Note: In this Agreement&nbsp;the term &quot;You&quot; refers to both the Parent (legal guardian) and Applicant (student) unless specified.
            Terms
            <ul data-rte-list="default">
              <li>
                As the Parent (legal guardian), you acknowledge that you are signing this Agreement on behalf of yourself as well as the Applicant.
              </li>
              <li>
                You acknowledge that this Agreement takes effect on the above signed date and will terminate when the last college application essay is completed or on the last college application submission deadline for the list of target colleges, whichever comes first.
              </li>
              <li>
                You acknowledge that you will be working directly with the College Application Coach, an independent contractor, selected by you after reviewing the list of coaches and an introductory session.
              </li>
            </ul>
            Applicable to Hourly Consultation
            <ul data-rte-list="default">
              <li>
                Hourly consultations are available on a first requested, first reserved basis.
              </li>
              <li>
                In hourly consultation, the coach may become unavailable and no longer able to continue supporting the student. In this instance, the family has an option to work with another coach or get a refund.
              </li>
            </ul>
            Refund Policy for Hourly Consultations
            <ul data-rte-list="default">
              <li>
                Refund for unused hours is available anytime.
              </li>
            </ul>
            Applicable to Packages
            <ul data-rte-list="default">
              <li>
                While there are no limits to the number of consultation hours in “all-inclusive” packages, you agree to abide by reasonable expectations for hours of support and response (ex. giving at least one business day for a general response from the Application Coach and two or more business days for an in-depth reply, essay review, or in-person discussion, etc.)
              </li>
              <li>
                You acknowledge that in Essays-Only Support and Comprehensive Support packages the Applicant is responsible for staying on track with the review and submission timeline.
              </li>
              <li>
                You acknowledge that in Comprehensive Support with Logistics package the Coach will be responsible for creating the timeline (by working with the Applicant), and conducting check ins and reminders. In addition, the coach will take care of administrative components tied to the application process (e.g. assemble a document with requirements and deadlines for the list of colleges selected.)
              </li>
              <li>
                You acknowledge that the Applicant will submit documents for edit/review and schedule meetings in a timely manner. If the applicant falls behind schedule, the Application Coach will do their best to get the Applicant back on track. However, you acknowledge, regardless of the package selected, the Applicant is ultimately responsible for staying on track to meet official college application deadlines and Ivy Ready is not liable for missed application deadlines.
              </li>
              <li>
                As admission decisions are not in the control of Ivy Ready or the Application Coach, you acknowledge that this Agreement and accompanying service payment(s) are solely for application support.
              </li>
              <li>
                In the unlikely event that the assigned Coach cannot complete a service due to an emergency (e.g. car accident,) you give Ivy Ready the right to continue delivering on this Agreement in one of two ways: 1) by assigning a replacement coach or 2) if another coach is unavailable, by nullifying this Agreement with a prorated refund for the work completed and/or time spent by the original Coach.
              </li>
            </ul>
            Refund Policy for Packages
            <ul data-rte-list="default">
              <li>
                Refunds are available within 30 days after the counsellor and student have entered into an agreement, the 30 days will begin after the first counseling meeting. Hours the College Application Coach has already worked with the student will be deducted from the total payment.
              </li>
            </ul>
            Privacy Policy
            Ivy Ready LLC owns and manages the website IvyReady.com. We can be reached via e-mail at contact[at]ivyready.com.
            Any information you provide to us will not be sold to any third party.&nbsp;Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.
            <ul data-rte-list="default">
              <li>
                Access and Control over Information
                <ul data-rte-list="default">
                  <li>
                    You may opt out of any future contact from Ivy Ready by notifying us via email, phone or other contact methods available on our website.
                  </li>
                  <li>
                    You may request to see what data we have about you, if any, change/correct any data we have about you, have us delete any data we have about you, express any concerns you have about our use of your data.
                  </li>
                </ul>
              </li>
              <li>
                Website Analytics/Marketing
                <ul data-rte-list="default">
                  <li>
                    This website uses analytics and advertising tools such as, but not limited to, Google Analytics, Google Ads (formerly known as Google AdWords), Facebook Ads, Twitter Ads and other tools that collect data for marketing purposes.
                  </li>
                </ul>
              </li>
              <li>
                Direct Mail Marketing
                <ul data-rte-list="default">
                  <li>
                    You may opt out of direct mail marketing by emailing us at contact@ivyready.com with the subject line &quot;opt out&quot; and the email body containing your full name and the address where the mail was received.
                  </li>
                </ul>
              </li>
              <li>
                Security
                <ul data-rte-list="default">
                  <li>
                    We take precautions to protect your information. When you submit sensitive information via the website or email, your information is protected both online and offline.
                  </li>
                  <li>
                    Credit card data is processed through Stripe, PayPal or another secure payment processing tool integrated into our website. Payments are also processed directly by banks when checks are used.
                  </li>
                  <li>
                    While we use services with encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need a particular information to perform a specific job (e.g., reviewing applications, billing or customer service) are granted access to personally identifiable information.
                  </li>
                </ul>
              </li>
              <li>
                Financial Information
                <ul data-rte-list="default">
                  <li>
                    We request information from you to sign up for consultation or service. To do so, you must provide contact information (like name and address) and financial information (like credit card number with expiration date or a check). This information will not be sold to third parties.
                  </li>
                </ul>
              </li>
              <li>
                Links
                <ul data-rte-list="default">
                  <li>
                    This web site may contain links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
                  </li>
                </ul>
              </li>
              <li>
                Updates and Questions
                <ul data-rte-list="default">
                  <li>
                    Our Privacy Policy may change from time to time and all updates will be posted on our Privacy Policy page.
                  </li>
                  <li>
                    If you would like to access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information, contact our Privacy Compliance Support at contact[at]ivyready.com [Re: Privacy Compliance].
                  </li>
                </ul>
              </li>
            </ul>
            Terms continued
            By submitting content to us, using our website or any service provided by Ivy Ready LLC, including subscribing to our content,&nbsp;you consent to the following Terms:
            <ol data-rte-list="default">
              <li>
                You certify that you are an adult or are at least 13 years of age and have Parental consent for using any of our services.
              </li>
              <li>
                You agree that you are the sole owner of the contents you provide to Ivy Ready. Parents or legal guardians are solely responsible for submissions of their children.
              </li>
              <li>
                Whilst we endeavor to keep the information on our website and social media channels up-to-date and correct, they are available “as is.” We do not warrant that it will be uninterrupted or error-free. There may be delays, omissions, interruptions and inaccuracies in the information provided.
              </li>
              <li>
                ALL CONTENT AND INFORMATION ATTAINED FROM IVY READY LLC OR IT&apos;S REPRESENTATIVES IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, ABOUT THE COMPLETENESS, ACCURACY, RELIABILITY, TIMELINESS, PERFORMANCE, SUITABILITY, WITHOUT LIMITATION, THOSE OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE RESERVE THE RIGHT TO CORRECT ANY ERRORS OR OMISSIONS. YOU ACKNOWLEDGE THAT SUCH INFORMATION AND MATERIALS MAY CONTAIN INACCURACIES OR ERRORS AND WE EXPRESSLY EXCLUDE LIABILITY FOR ANY SUCH INACCURACIES OR ERRORS TO THE FULLEST EXTENT PERMITTED BY LAW. ANY RELIANCE YOU PLACE ON SUCH INFORMATION IS THEREFORE STRICTLY AT YOUR OWN RISK. WE ARE NOT ENDORSING AN ADMISSION OUTCOME AND CANNOT VOUCH FOR A SPECIFIC VALIDITY OR RELIABILITY. IN NO EVENT WILL IVY READY OR IT&apos;S REPRESENTATIVES OR COACHES BE LIABLE FOR ANY LOSS OR DAMAGE INCLUDING WITHOUT LIMITATION, INDIRECT OR CONSEQUENTIAL LOSS, INJURY OR DAMAGE ARISING FROM THE USE OF OUR SERVICES OR THIS WEBSITE, INCLUDING DUE TO ERRORS, OMISSIONS, INTERRUPTIONS OR OTHER INACCURACIES.
              </li>
              <li>
                YOU AGREE TO INDEMNIFY AND HOLD US HARMLESS AS WELL AS OUR DIRECTORS, OFFICERS, MANAGERS, EMPLOYEES, INDEPENDENT CONTRACTORS, AND AFFILIATES FROM AND AGAINST ALL LOSSES, EXPENSES, DAMAGES AND COSTS, INCLUDING REASONABLE ATTORNEYS’ FEES, RESULTING FROM ANY RELIANCE YOU PLACE ON OUR SERVICES OR VIOLATION BY YOU OF THESE TERMS. WE RESERVE THE RIGHT TO TAKE OVER THE EXCLUSIVE DEFENSE OF ANY CLAIM FOR WHICH WE ARE ENTITLED TO INDEMNIFICATION. IN SUCH EVENT, YOU SHALL PROVIDE US WITH SUCH COOPERATION AS IS REASONABLY REQUESTED BY US.
              </li>
              <li>
                Ivy Ready® is a registered trademark. The website IvyReady.com and its contents are the property of Ivy Ready LLC. All rights reserved. Any use of the term &quot;Ivy Ready&quot; outside of direct correspondence with Ivy Ready requires the use of the &apos;®&apos; symbol. Any redistribution or reproduction of any part of the website content, marketing material, service agreements, email phone correspondence or phone conversations with Ivy Ready Representatives is prohibited other than the following:
                <ul data-rte-list="default">
                  <li>
                    You may print, copy or download content for personal use only.
                  </li>
                  <li>
                    You may share with a third party only with a written consent from Ivy Ready LLC.
                  </li>
                </ul>
              </li>
              <li>
                You agree not to submit content that:
                <ul data-rte-list="default">
                  <li>
                    is not owned by you;
                  </li>
                  <li>
                    advertises a business or solicits business;
                  </li>
                  <li>
                    infringes upon or violates any copyrights, trademarks or other intellectual property rights;
                  </li>
                  <li>
                    is libelous or defamatory;
                  </li>
                  <li>
                    is obscene, pornographic, or sexually explicit;
                  </li>
                  <li>
                    violates a person&apos;s right to privacy;
                  </li>
                  <li>
                    violates any local, state, national, or international law;
                  </li>
                  <li>
                    contains or advocates illegal or violent acts;
                  </li>
                  <li>
                    degrades others on the basis of gender, race, class, ethnicity, national origin, religion, sexual preference, disability, or another protected group, or other classification;
                  </li>
                  <li>
                    is predatory, hateful, or intended to intimidate or harass; or
                  </li>
                  <li>
                    misrepresents your identity or affiliation.
                  </li>
                </ul>
              </li>
              <li>
                Ivy Ready believes in creating a safe working environment. You acknowledge that Ivy Ready, its employees and affiliates reserve the right to refuse service to anyone. You understand that any comments or actions (sexual or otherwise) that lead to the mistreatment (physical, emotional or otherwise) or insinuation of harm (bodily or otherwise) towards Ivy Ready or it’s representatives will result in internal documentation, possible termination of service without refund and may be joined with legal action.
              </li>
              <li>
                You acknowledge that the terms Admission Representative, College Consultant, College Coach, Consultant, Coach, Application Coach, and College Application Coach, among others may be used interchangeably on our website, during correspondence, in this Agreement or elsewhere.
              </li>
              <li>
                You acknowledge that all prices are subject to change without notice. Quotes are estimates that only become binding once an agreement has been signed or payment has been processed. Quotes (as they are estimates) may be modified up or down during the move towards agreement as the parties negotiate and come to a better understanding of the work required.
              </li>
              <li>
                You acknowledge that Ivy Ready may use the terms &quot;admission officer,&quot; &quot;admission reader,&quot; &quot;admission counselor,&quot; &quot;seasonal reader,&quot; and &quot;admission advisor&quot; (with their plural versions, e.g., admissions officer) interchangeably on our website, during correspondence, in this Agreement or elsewhere.
              </li>
              <li>
                You acknowledge that the presence of college graduates, former admission officers, or past and present membership(s) in admission or counseling organizations in no way implies ongoing association or affiliation, indirectly or directly, with any particular organization, college or university.
              </li>
              <li>
                You acknowledge that services provided by Ivy Ready are not based on the admission criteria of a particular school, and that coaches are matched with clients based on the client&apos;s preference, logistical limitations, and, at times, at random.
              </li>
              <li>
                You acknowledge that Ivy Ready LLC serves merely as a broker to connect prospective clients with independent contractors for college planning and application support.
              </li>
              <li>
                Through this website you are able to link to other websites which are not under the control of Ivy Ready LLC. We have no control over the nature, content and availability of those sites. The inclusion of any links does not imply a recommendation or endorsement of the views expressed within them. Clicking and proceeding through such links is solely your discretion. We are not liable for incidental, indirect, consequential, special, punitive, or exemplary damages of any kind, including, without limitation, lost revenues or profits, loss of business or loss of data that result from connecting to a third party website through this website.
              </li>
              <li>
                Admission data, testimonial, or ratings are not intended as indications of suitability, reliability or as predictive tool of a product or service performance and should not be relied upon as bases for any purchase decisions.
              </li>
              <li>
                You agree that you have read and will abide by these Terms of Service and any concerns you may have about our Terms and services have been discussed and resolved before working with Ivy Ready, signing up for a service, or signing an Agreement.
              </li>
            </ol>
          </pre>
        </div>
      </div>
    </div>
  )
}