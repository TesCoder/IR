"use client";

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import useContactForm from "../hooks/useContactForm";
import { useState } from "react";
import sendEmail from "../lib/sendEmail";
import Alert from "@/components/Alert";
import Link from "next/link";
import Image from "next/image";
import { members } from "../components/membersList";
import { Button, ButtonRow } from "@/components/Button";
import { useRouter } from "next/navigation"; // needed for redirecting from page

export const FORM_TYPES = { INFO: 1, CALL: 2, FULL: 3 };

const Profile = ({ fname, name, imgSrc, admCollege, description }) => (
  <div className="flex flex-row items-center mb-3 border shadow-md rounded-lg p-2">
    <Image
      className="rounded-full w-1/5 shadow-2xl"
      src={imgSrc}
      width={128}
      height={128}
      alt=" profile picture"
    />
    <div className="flex flex-col w-3/5 justify-center text-center">
      <span className="text-ivy-blue text-center text-2xl font-semibold">
        {name}{" "}
      </span>
      <span className="text-ivy-blue text-center ">
        Admission Experience: {admCollege}
      </span>
      {/* <span className="truncate flex-auto ml-4 text-center justify-center">{description}</span> */}
      <a
        className="underline hover:cursor"
        onClick={() =>
          (window.location.href =
            "/about-us#" +
            JSON.stringify({ fname })
              .split(":")[1]
              .replace('"', "")
              .replace('"}', "")
              .toLowerCase())
        }
      >
        Learn More About {fname}
      </a>
      {/* <Link
        className="underline hover:cursor"
        href={`/about-us#${JSON.stringify({ fname })
          .split(":")[1]
          .replace('"', "")
          .replace('"}', "")
          .toLowerCase()}`}
      >
        Learn More About {fname}
      </Link> */}
    </div>

    {/* <button className="" href="/about-us">Learn More</button> */}
    {/* <Button
            onClick={() => {
              setCoach(name);
            }}
            data-bs-toggle="modal"
            data-bs-target="#coachModal"
          >
            Learn More About {name}
        </Button> */}
  </div>
);

export default function ContactForm({ type, coachName, showProfile }) {
  const router = useRouter(); // needed for redirecting from page

  // Form Types: FULL, INFO, CALL, or EVAL
  const { values, handleChange } = useContactForm(); // hook
  const [isSubmitting, setSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    success: false,
    message: "",
  });
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

    // 🧠 Honeypot: if it's filled, quietly stop
    if (formData.get("middle_name")) {
      console.warn("Bot detected: honeypot field filled");
      setSubmitting(false);
      return;
    }

    // Proceed normally
    const res = await sendEmail({ type, coach: coachName, ...values });
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
    return (
      <Alert
        message={responseMessage.message}
        success={responseMessage.success}
      />
    );
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        {type == "FULL" && (
          <>
            <h1 className="font-medium md:font-light text-2xl md:text-4xl text-ivy-blue mb-3">
              Have any Questions?
            </h1>

            <p className="text-lg text-center  mb-8 max-w-2xl mx-auto">
              Start your journey by completing the form below. We'll help you find the right plan and match you with the best advisor for your needs.
            </p>
          </>
        )}
        {/* <button onClick={() => console.log("Values:", values)}>LOG</button> */}

        {showProfile &&
          members.map(({ fname, name, imgSrc, admCollege, description }, i) => {
            if (name === coachName) {
              // console.log({coachName})
              return (
                <Profile
                  key={i}
                  fname={fname}
                  name={name}
                  imgSrc={imgSrc}
                  admCollege={admCollege}
                  description={description}
                />
              );
            }
            // return (
            //   console.log("not match")
            // );
          })}

        <div className="row mb-3">
          <label htmlFor="name" className="form-label">
            Name{" "}
            <span className="text-ivy-red font-thin text-sm">Required</span>
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
          
          {/*honeypot input middle_name */}
          <input type="text" name="middle_name" style={{ position: "absolute", left: "-9999px" }} tabIndex="-1" autoComplete="off" aria-hidden="true" />

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
        {type == "FULL" && (
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              City, State
            </label>
            <input
              type="text"
              name="location"
              value={values.location}
              onChange={handleChange}
              className="form-control"
              id="location"
              placeholder="Alexandria, Virginia"
              // required
            />
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address{" "}
            <span className="text-ivy-red font-thin text-sm">Required</span>
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
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
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
            // required
          />
        </div>
        {type == "FULL" && (
          <>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">
                Preferred Contact Method
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  name="contact"
                  onChange={handleChange}
                  type="checkbox"
                  value="Phone"
                  id="phone"
                />
                <label className="form-check-label" htmlFor="phone">
                  {" "}
                  Phone{" "}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  name="contact"
                  onChange={handleChange}
                  type="checkbox"
                  value="Email"
                  id="email"
                />
                <label className="form-check-label" htmlFor="email">
                  {" "}
                  Email{" "}
                </label>
              </div>
            </div>

            <div className="mb-3">
              <div className="mb-3">
                <label htmlFor="option" className="form-label">
                  Which option interests you?
                </label>
                <select
                  className="form-select"
                  id="option"
                  name="option"
                  value={values.option}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="Essays-Only Support">Essays-Only Support</option>
                  <option value="Comprehensive Support">Comprehensive Support</option>
                  <option value="Comprehensive Support with Logistics">Comprehensive Support with Logistics</option>
                  <option value="Hourly Consultation">Hourly Consultation</option>
                  <option value="Application Evaluation">Application Evaluation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>



           <div className="mb-3">
            <label htmlFor="heard" className="form-label">
              How did you hear about Ivy Ready?
            </label>
            <div className="flex flex-wrap gap-x-6">
              {heardOptions.map(({ id, label, value }) => (
                <div className="form-check form-check-inline" key={id}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="heard"
                    id={id}
                    value={value}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor={id}>
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="info" className="form-label">
              What would you like to know more about?
            </label>
            <div className="flex flex-wrap gap-x-6">
              {infoOptions.map(({ id, label, value }) => (
                <div className="form-check form-check-inline" key={id}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="info"
                    id={id}
                    value={value}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor={id}>
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
            
          </>
        )}

        




        {["FULL", "INFO", "CALL"].includes(type) && (
          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Student Current Year
            </label>
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

        {["FULL", "INFO", "EVAL"].includes(type) && (
          <div className="mb-3">
            <label htmlFor="service" className="form-label">
              {type == "EVAL" ? "Message" : "How may we best serve you?"}
            </label>
            <textarea
              className="form-control"
              name="service"
              id="service"
              onChange={handleChange}
              value={values.service}
              rows="3"
            ></textarea>
          </div>
        )}

        {type == "EVAL" && (
          <div className="mb-3">
            <label htmlFor="evaluation" className="form-label">
              Evaluation
            </label>
            <select
              className="form-select"
              id="evaluation"
              name="evaluation"
              onChange={handleChange}
              aria-label="Current Year"
            >
              <option defaultValue>Select evaluation type</option>
              <option value="Single">
                Single Evaluation (30-minute Coach Review & 30-minute
                Discussion)
              </option>
              <option value="Multiple">
                Multiple-school Package (Depends on Number of Schools)
              </option>
            </select>
          </div>
        )}

        <div className="col-12">
          <button
            className="btn bg-ivy-red text-white hover:bg-red-700 hover:shadow-lg"
            type="submit"
          >
            {isSubmitting ? (
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
          {/* Error would show here */}
          <Alert
            message={responseMessage.message}
            success={responseMessage.success}
          />
        </div>
      </form>
    </div>
  );
}
