
"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useContactForm from "../hooks/useContactForm";
import sendEmail from "../lib/sendEmail";
import Alert from "@/components/Alert";
import { Button } from "@/components/Button";
import { members } from "../components/membersList";

// Optional: exported enum-style map (if you need elsewhere)
export const FORM_TYPES = { INFO: "INFO", CALL: "CALL", FULL: "FULL", EVAL: "EVAL" };

const Profile = ({ fname, name, imgSrc, admCollege }) => (
    <div className="flex items-center mb-3 border shadow-md rounded-lg py-2 px-4 w-full gap-4">
      <Image
        className="rounded-full w-1/5 shadow-2xl"
        src={imgSrc}
        width={128}
        height={128}
        alt={`Profile photo of ${fname}, Ivy Ready coach`}
        loading="lazy"
      />
      <div className="flex flex-col justify-center text-center">
        <span className="text-ivy-blue text-center text-2xl font-semibold">
          {name}
        </span>
        <span className="text-ivy-blue text-center ">
          Admission Experience: {admCollege}
        </span>
        <a
          className="underline hover:cursor-pointer"
          onClick={() => {
            const hash = (fname || "").toLowerCase();
            window.location.href = `/about-us#${hash}`;
          }}
        >
          Learn More About {fname}
        </a>
    </div>
  </div>
);

// Card shell used for both FULL (right side) and modal/compact types
function FormCard({ children, inModal = false }) {
  return (
    <div
      className={`rounded-xl border border-white/40 text-start bg-white ${
        inModal ? "p-2 md:p-6 shadow-lg" : "p-6 md:p-10 "
      }`}
    >
      {children}
    </div>
  );
}

export default function ContactForm({ type = "FULL", coachName, showProfile }) {
  const router = useRouter();
  const { values, handleChange } = useContactForm();
  const [isSubmitting, setSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ success: false, message: "" });

  const heardOptions = [
    { id: "google", label: "Google Search", value: "Google Search" },
    { id: "mail", label: "Mail", value: "Mail" },
    { id: "famOrFriends", label: "Family or Friends", value: "Family or Friends" },
  ];

  const infoOptions = [
    { id: "general", label: "General Info", value: "General Info" },
    { id: "fee", label: "Fee Structure", value: "Fee Structure" },
    { id: "other", label: "Other", value: "Other" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData(e.target);

      // Honeypot: drop if filled
      if (formData.get("middle_name")) {
        setSubmitting(false);
        return;
      }

      await sendEmail({ type, coach: coachName, ...values });
      router.replace("/form-submitted#top");
    } catch (err) {
      console.error(err);
      setResponseMessage({
        success: false,
        message:
          "Oops something went wrong. Please try again. If error persists, please email us at contact@ivyready.com.",
      });
      setSubmitting(false);
    }
  };

  if (responseMessage.success) {
    return <Alert message={responseMessage.message} success={responseMessage.success} />;
  }

  // ======= Form Body (fields) — unchanged logic =======
  const formBody = (
    <form onSubmit={handleSubmit}>
        {/* Coach profile preview (optional) */}
      {showProfile &&
        members.map(({ fname, name, imgSrc, admCollege }, i) => {
          if (name === coachName) {
            return (
              <Profile
                key={i}
                fname={fname}
                name={name}
                imgSrc={imgSrc}
                admCollege={admCollege}
              />
            );
          }
          return null;
        })}
        
      {/* NAME (with honeypot) */}
      <div className="row mb-3">
        <label htmlFor="name" className="form-label">
          Name <span className="text-ivy-red font-thin text-sm">Required</span>
        </label>
        <div className="col">
          <input
            type="text"
            name="fname"
            value={values.fname}
            onChange={handleChange}
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            required
          />
        </div>

        {/* honeypot */}
        <input
          type="text"
          name="middle_name"
          style={{ position: "absolute", left: "-9999px" }}
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="col">
          <input
            type="text"
            name="lname"
            value={values.lname}
            onChange={handleChange}
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            required
          />
        </div>
      </div>

      {/* FULL-only: location */}
      {type === "FULL" && (
        <div className="mb-3">
          <label htmlFor="location" className="form-label">City, State</label>
          <input
            type="text"
            name="location"
            value={values.location}
            onChange={handleChange}
            className="form-control"
            id="location"
            placeholder="Alexandria, Virginia"
          />
        </div>
      )}

      {/* Email / Phone 50-50 */}
      <div className="mb-3 md:flex md:space-x-6 md:items-start">
        <div className="md:w-1/2">
          <label htmlFor="email" className="form-label block mb-1">
            Email Address <span className="text-ivy-red font-thin text-sm">Required</span>
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-control"
            id="email"
            placeholder="name@example.com"
            required
          />
        </div>

        <div className="md:w-1/2">
          <label htmlFor="phone" className="form-label block mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className="form-control"
            id="phone"
            placeholder="123-456-7890"
          />
        </div>
      </div>

      {/* FULL-only extras */}
      {type === "FULL" && (
        <>
          {/* Preferred Contact Method & Interested Option (50/50) */}
          <div className="mb-3 md:flex md:space-x-6 md:items-start">
            <div className="md:w-1/2">
              <label htmlFor="contact" className="form-label block mb-1">
                Preferred Contact Method
              </label>
              <select
                className="form-select"
                id="contact"
                name="contact"
                value={values.contact || ""}
                onChange={handleChange}
              >
                <option value="">Select a contact method</option>
                <option value="Phone">Phone</option>
                <option value="Email">Email</option>
              </select>
            </div>

            <div className="md:w-1/2">
              <label htmlFor="option" className="form-label block mb-1">
                Interested option
              </label>
              <select
                className="form-select"
                id="option"
                name="option"
                value={values.option}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="Essays-Only Support">Essay Support Only</option>
                <option value="Comprehensive Support">Comprehensive Support</option>
                <option value="Comprehensive Support with Logistics">Comprehensive + Logistics</option>
                <option value="Hourly Consultation">Hourly Consultation</option>
                <option value="Application Evaluation">Application Evaluation</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* How did you find us? & Learn More About (50/50) */}
          <div className="mb-3 md:flex md:space-x-6 md:items-start">
            <div className="md:w-1/2">
              <label htmlFor="heard" className="form-label block mb-1">
                How did you find us?
              </label>
              <select
                className="form-select"
                id="heard"
                name="heard"
                value={values.heard}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                {heardOptions.map(({ id, label, value }) => (
                  <option key={id} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:w-1/2">
              <label htmlFor="info" className="form-label block mb-1">
                Learn More About
              </label>
              <select
                className="form-select"
                id="info"
                name="info"
                value={values.info}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                {infoOptions.map(({ id, label, value }) => (
                  <option key={id} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}


      {/* Shared group */}
      {["FULL", "INFO", "CALL"].includes(type) && (
        <div className="mb-3">
          <label htmlFor="year" className="form-label">Student Current Year</label>
          <select
            className="form-select"
            id="year"
            name="year"
            onChange={handleChange}
            aria-label="Current Year"
            defaultValue="default"
          >
            <option value="default"></option>
            <option value="FR">Freshman</option>
            <option value="SP">Sophomore</option>
            <option value="JR">Junior</option>
            <option value="SR">Senior</option>
          </select>
        </div>
      )}

      {/* Message / Service */}
      {["FULL", "INFO", "EVAL"].includes(type) && (
        <div className="mb-3">
          <label htmlFor="service" className="form-label">
            {type === "EVAL" ? "Message" : "How may we best serve you?"}
          </label>
          <textarea
            className="form-control"
            name="service"
            id="service"
            onChange={handleChange}
            value={values.service}
            rows={3}
          />
        </div>
      )}

    

      {/* Submit */}
      <div className="col-12">
        <Button
          type="submit"
          className="bg-ivy-red text-white hover:bg-red-700 hover:shadow-lg flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Submit"
          )}
        </Button>
        <Alert message={responseMessage.message} success={responseMessage.success} />
      </div>
    </form>
  );

  // ======= LAYOUT SWITCH =======
  if (type === "FULL") {
    return (
      <div className="md:grid md:grid-cols-2 gap-8">
        {/* Left content panel */}
        <div className="bg-[#2D5780] text-white rounded-2xl md:rounded-r-none px-8 md:px-12 flex items-center">
          <div>

              {/* short headline always visible */}
              <h1 className="text-white">
                Book a Free Consultation with Ivy Ready Coaches
              </h1>

              {/* full content only shown on md and above */}
              <div className="hidden md:block">
                <p className="pCentered mt-6 text-start">
                  Today’s college admissions landscape can be overwhelming and highly competitive.
                  Our team helps students cut through the confusion and approach every step with confidence and clarity.
                </p>
                <p className="pCentered mt-6 text-start">We can support you with:</p>
                <ul className="mt-6 list-none">
                  <li><p className="pCentered text-start ">✓ Choosing the right courses and extracurriculars</p></li>
                  <li><p className="pCentered text-start">✓ Preparing for standardized tests</p></li>
                  <li><p className="pCentered text-start">✓ Building a balanced college list</p></li>
                  <li><p className="pCentered text-start">✓ Crafting authentic and persuasive essays</p></li>
                  <li><p className="pCentered text-start">✓ Completing strong, on-time applications</p></li>
                  <li><p className="pCentered text-start">✓ Applying strategically for scholarships and aid</p></li>
                </ul>
                <p className="pCentered text-start mt-6 opacity-95 leading-relaxed">
                  Ivy Ready offers personalized, expert guidance from former admissions officers.
                  We help students get into their top-choice schools, earn scholarships, and feel confident throughout the entire process.
                </p>
              </div>

          </div>
        </div>

        {/* Right: form card */}
        <FormCard>{formBody}</FormCard>
      </div>
    );
  }

  // Modal/compact: just the card (no grid)
  return <FormCard inModal>{formBody}</FormCard>;
}
