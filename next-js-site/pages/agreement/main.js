import Head from "next/head";
import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import TermsOfService from '../tos';
import sendEmail from "@/lib/sendEmail"; 


export async function getServerSideProps(context) {
  const { query } = context;

  // Only allow correct query key to open page
  //** NOTE: IF UPDATING CODE, UPDATE LINKS!! */
  const au3u38403 = query.w; // page access param
  if (au3u38403 !== "AxXdi1VS4pzmXTevH49A-qQe6kfrY0dvtzczO7cbj") {
    return {
      notFound: true, // 404 if incorrect or missing
    };
  }

  return {
    props: {}, // allow rendering
  };
}

export default function AgreementForm() {
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
    try {
      // Tag this source so the API can branch
      const res = await sendEmail({ ...formData, type: "AGREEMENT" });
      const result = await res.json().catch(() => ({}));

      if (res.ok && result?.success) {
        // alert("Agreement submitted successfully!");
        router.push("/agreement/exit?w=mFNZyw88mlMgm5Zj473z-VCHQDs4kZ06gtw3TdfJq");
      } else {
        console.error("Email not sent:", result);
        // alert("There was a problem submitting the agreement.");
      }
    } catch (err) {
      console.error("Failed to send email:", err);
      // alert("There was a problem submitting the agreement.");
    }
  };

  return (
    <>
      <div className='flex justify-end pr-20'>
       <p> Agreement #IO3748391837</p>
      </div>

      <Head>
        <title>Application Support Agreement - Ivy Ready</title>
      </Head>

      <section className="max-w-3xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-8">

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
            Application Support Agreement
          </h1>
          <p className="my-4 text-gray-700">
            Please complete all applicable fields. If you have any questions, please contact us before submission. 
            We are dedicated to building a package that suits your needs.{" "}


            {/* <a href="https://ivyready.com/#chart" className="text-blue-600 hover:underline">
              (Click here for services included with each package.)
            </a> */}
          </p>

          {/* Date Field */}
          <div className="mb-6">
            <p className="my-4 text-gray-700 ">Date</p>
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
          <div className="mb-6">
            <p className="my-4 text-gray-700 bg-gray-50">
              This Agreement signed at the above date is made by and between Ivy Ready® LLC ({"\"Company\""}), AND
            </p>
            {/* <input
              type="text"
              name="clientInfo"
              value={formData.clientInfo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 bg-gray-50"
              placeholder='Example: Jane Smith whose address is 1111 Henry Drive, San Diego, CA 91977 ("Client")'
              required
            /> */}
          </div>

          {/* Client Information */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-1">Parent (Legal Guardian) Name</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Parent (Legal Guardian) Email Address</label>
              <input
                type="email"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Parent (Legal Guardian) Phone Number</label>
              <input
                type="tel"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Applicant (Student) Name</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Applicant (Student) Email Address</label>
              <input
                type="email"
                name="studentEmail"
                value={formData.studentEmail}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Applicant (Student) Phone Number</label>
              <input
                type="tel"
                name="studentPhone"
                value={formData.studentPhone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              />
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
                <option value="">Select an option</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </div>


            <div>
              <label className="block text-gray-700 mb-1">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              >
                <option value="">Select an option</option>
                <option value="paypal">Pay with Paypal (Paypal charges a 5% fee)</option>
                <option value="zelle">Pay via Zelle to contact@ivyready.com</option>
              </select>
            </div>


            {/* <div>
              <label className="block text-gray-700 mb-1">Payment Installments</label>
              <select
                name="paymentInstallment"
                value={formData.paymentInstallment}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              >
                <option value="">Select an option</option>
                <option value="oncePaymentInstallment">Pay all at once (most common)</option>
                <option value="twoPaymentInstallment">Pay in two installments (first at start and second half way)</option>
              </select>
            </div> */}

          </div>

          {/* Package Selection Simplified */}
             <div>
              <label className="block text-gray-700 mb-1">Package Selection</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              >
                <option value="">Package Selection</option>
                <option value="paypal">Comprehensive Support up to 10 Schools Schools $5,000</option>
                <option value="zelle">Comprehensive Support with Logistics up to 10 Schools $6,000</option>
              </select>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium text-gray-700 mb-2">Assigned Coach</h3>
              {/* <div className="p-3 border rounded bg-gray-50"> Heather </div> */}
              <div className="p-3 border rounded bg-gray-50"> James </div>

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
                I have read and agree to abide by Ivy {"Ready\'s"} Terms of Service.
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

         {/* Terms and Conditions */}
          <div className="w-full -mx-10" >
            <div >
             <TermsOfService />
            </div>

          </div>

      </section>
    </>
  );
}