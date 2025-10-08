import Head from "next/head";
import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import TermsOfService from '../tos';
import sendEmail from "@/lib/sendEmail"; 
import { useRouter } from "next/navigation"; // needed for redirecting from page


export async function getServerSideProps(context) {
  const { query } = context;

  // Only allow correct query key to open page
  //** NOTE: IF UPDATING CODE, UPDATE LINKS!! */
  const au3u38403 = query.w; // page access param
  if (au3u38403 !== "27ZRss5XCskcryfXxDCz-AxllzZMa9ra8BoxGoNUc") {
    return {
      notFound: true, // 404 if incorrect or missing
    };
  }

  return {
    props: {}, // allow rendering
  };
}

export default function AgreementForm() {
  const router = useRouter(); // needed for redirecting from page

  const [isSubmitting, setSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    success: false,
    message: "",
  });

  const [formData, setFormData] = useState({
    date: new Date().toLocaleDateString('en-US'),
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    studentName: '',
    studentEmail: '',
    studentPhone: '',
    studentYear: '',
    agreedToTerms: false,
    signature: '',
    dob: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
       // Tag this source so the API can branch
      const res = await sendEmail({ ...formData, type: "AGREEMENT" });
      const result = await res.json().catch(() => ({}));

      // Redirect immediately; don't set success state first
      router.replace("/agreement/exit?w=z3oCy9AZT0mubthZQ5iy-IpwC52hXsEqm6kpnSrvy"); // exit page

      // unclear but some glitch in sendEmail is causign below not to work
      // if (res.status === 200) {
      //   
      //   router.replace("/agreement/exit?w=mFNZyw88mlMgm5Zj473z-VCHQDs4kZ06gtw3TdfJq");
      //   return; // stop here
      // }
    } catch (e) {
      setResponseMessage({
        success: false,
        message:
          "Oops something went wrong. Please try again. If error persists, please email us at contact@ivyready.com.",
      });
    }
    setSubmitting(false);
  };



  return (
    <>
      {/* <div className='flex justify-end pr-20'>
       <p> Agreement #IO3748391837</p>
      </div> */}

      <Head>
        <title>Project-Specific Agreement - Ivy Ready</title>
      </Head>

      <section className="max-w-3xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-8 mb-20">

          {/* Logo */}
          <div className='flex justify-center'>
            <Image
              className="cursor-pointer hover:drop-shadow-lg" 
              src='/images/logo.png' 
              width={200} 
              height={200} 
              alt="Logo" 
              priority 
            />
          </div>

          {/* Header */}
          <h1 className="text-2xl md:text-4xl text-ivy-blue mb-3 text-center">
            Project-Specific Agreement
          </h1>
          <p className="my-4 text-gray-700">
            Please complete all applicable fields.{" "}
            {/* <a href="https://ivyready.com/#chart" className="text-blue-600 hover:underline">
              (Click here for services included with each package.)
            </a> */}
          </p>

          {/* Date Field */}
          <div className="mb-6">
            <p className="my-1 text-gray-700 ">Date</p>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 bg-gray-50"
              placeholder="mm/dd/yyyy"
              readOnly
            />
          </div>

          {/* Agreement Parties */}
          
          {/* Client Information */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-1">Parent (Legal Guardian) Name</label>
              <select
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              >
                <option value="client">Jitendra Sharma</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Student Year</label>
              <select
                name="studentYear"
                value={formData.studentYear}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              >
                {/* <option value="">Select an option</option> */}
                {/* <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option> */}
                <option value="Senior">Senior</option>
              </select>
            </div>


            <div>
              <label className="block text-gray-700 mb-1">Assigned Coach</label>
              <select
                name="assignedCoach"
                value={formData.assignedCoach}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              >
                {/* <option value="">Select an option</option> */}
                <option value="james">James</option>
              </select>
            </div>


            {/* Package Selection Simplified */}
             <div>
              <label className="block text-gray-700 mb-1">Package Selection</label>
              <p className="mx-2 my-0 text-gray-700 bg-gray-50 text-[90%]">
                *Discounted for family. Focus is UC and CSU schools & time less than 3 months (Oct, Nov, Dec). High referral source. Referrals sent back to coach.
                </p>
              <select
                name="packageSelection"
                value={formData.packageSelection}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              >
                {/* <option value="">Package Selection</option> */}
                <option value="cs10">Comprehensive Support up to 10 Schools: $1,500</option>
              </select>
                {/* <p className="mx-2 my-0 text-gray-700 bg-gray-50 text-[90%]">
                  General reminder: Essays-only Support does NOT include resume feedback, course selection, college selection, short answer questions, exclusively essays. If they ask for more than essays, ask them to upgrade.
                  None of packages include support with summer program or internship applications.
                </p> */}
            </div>

          </div>

        {/* Terms and Conditions */}
          <div className=" max-w-3xl mx-auto p-6 w-full  max-h-40 overflow-y-auto border bg-white shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Project-Specific Terms</h2>
            <ul className="list-disc pl-10">
              <li>
                I agree to abide by professional standards and general business expectations,
                including timely email response and essay draft reviews.
              </li>
              <li>
                I agree to provide the above Client(s) with services that are a part of the above
                package or hourly consultation.
              </li>
              <li>
                I acknowledge the total payment for this service as noted above is for
                package-based work or assessed based on hours of service for hourly consultation
                at the hourly consultation rate.
              </li>
              <li>
                I acknowledge the total payment for this service as noted above is for
                package-based work or assessed based on hours of service for hourly consultation
                at the hourly consultation rate.
              </li>
              <li>
                <strong>Package only:</strong> I agree to do my best to see this project through from
                start to finish and meet the Client's reasonable expectations until project is
                completed.
              </li>
              <li>
                <strong>Package only:</strong> I acknowledge payment will be distributed based on the
                payment distribution schedule, which will be provided to me with the countersigned
                agreement. Payment will be deposited once or twice a month, or in bulk. Specific
                dates of payment will depend on whether dates fall on business day or weekend,
                allowing for unexpected delays.
              </li>
              <li>
                <strong>Package only:</strong> I will notify Ivy Ready &amp; Parents of any unexpected
                events (unresponsiveness from student, missed outline or draft submission deadlines,
                etc.) within three business day.
              </li>
              <li>
                <strong>Hourly consultation only:</strong> Payment for hourly consultation will be
                distributed as applicable (one time or multiple times based on the number of hours a
                family signs up.)
              </li>
            </ul>

          </div>
                  

          {/* Signature */}
          <div>
            <h2 className="font-medium text-2xl text-ivy-blue my-3">Signature</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-1 ">Date of Birth (DD/MM/YYYY)</label>
                <input
                  type="text"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  placeholder="DD/MM/YYYY"
                  className="w-full p-2 border border-gray-400 bg-gray-50"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Full Name (Signature)</label>
                <input
                  type="text"
                  name="signature"
                  value={formData.signature}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-400 bg-gray-50"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-start mt-4">
              <input
                type="checkbox"
                id="agree-to-terms"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                className="mt-1"
                required
              />
              <label htmlFor="agree-to-terms" className="ml-2 block text-gray-700">
                I have read and agree to abide by Ivy {"Ready\'s"} Terms of Service and below Terms.
              </label>
            </div>

          <div>
            <p>We will provide you with a countersigned copy after submission.</p>
          </div>

          {/* Submit Button */}
          <div className="flex pb-4">
            <button
              type="submit"
              className="bg-ivy-red text-white py-2 px-4 rounded-3xl transition-colors hover:bg-ivy-blue"
            >
              Submit Agreement
            </button>
          </div>
        </form>

         
      </section>
    </>
  );
}