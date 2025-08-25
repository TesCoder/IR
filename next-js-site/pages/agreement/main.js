import Head from "next/head";
import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import TermsOfService from '../tos';


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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Agreement submitted successfully!');
  };

  // Package options (read-only display)
  const packages = [
    { name: 'Comprehensive Support up to 10 Schools Schools', price: '$8,000' },
  ];

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


 <a href="https://ivyready.com/#chart" className="text-blue-600 hover:underline">
                  (Click here for services included with each package.)
                </a>
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
            <input
              type="text"
              name="clientInfo"
              value={formData.clientInfo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 bg-gray-50"
              placeholder='Example: Jane Smith whose address is 1111 Henry Drive, San Diego, CA 91977 ("Client")'
              required
            />
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
          </div>

          {/* Package Selection */}
          <div className="border-b pb-6">
            <h2 className="font-medium text-2xl text-ivy-blue my-3">Package Selection</h2>
            <div className="space-y-3">
              {packages.map((pkg, index) => (
                <div key={index} className="p-3 border rounded bg-gray-50">
                  {/* <div className="font-medium">{pkg.name}</div>
                  <div className="text-gray-600">{pkg.price}  </div> */}
                  <div className="font-medium">{pkg.name} {pkg.price} </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium text-gray-700 mb-2">Assigned Coach</h3>
              <div className="p-3 border rounded bg-gray-50"> Heather </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="border-b pb-6">
            <h2 className="font-medium text-2xl text-ivy-blue my-3">Terms and Conditions</h2>
            <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto mb-4">
             <TermsOfService />
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
                I have read and agree to abide by Ivy {"\"Ready\"s"} Terms of Service.
              </label>
            </div>
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

          <div>
            <p>We will provide you with a countersigned copy after submission.</p>
          </div>
          {/* Submit Button */}
          <div className="flex pb-40">
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