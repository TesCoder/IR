import Head from "next/head";
import styles from "@/styles/Home.module.css";
import useContactForm from "../hooks/useContactForm";
import { useState } from "react";
import sendEmail from "../lib/sendEmail";
import Alert from "@/components/Alert";
import Link from "next/link";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";

export const FORM_TYPES = { INFO: 1, CALL: 2, FULL: 3 };

export default function ContactForm({ type, coachName }) {
  // const gaEventTracker = useAnalyticsEventTracker('Contact us');

  // Form Types: FULL, INFO, CALL, or EVAL
  const { values, handleChange } = useContactForm();
  const [isSubmitting, setSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    success: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log("Values:", values);
    try {
      const res = await sendEmail({ type, coach: coachName, ...values });
      if (res.status === 250) {
        setResponseMessage({
          success: true,
          message:
            "Thank you for your message. We will be reaching out to you soon.",
        });
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        success: false,
        message:
          "Oops something went wrong. Please try again. If error persists, please email us at contact@ivyready.com.",
      });
    }
    setSubmitting(false);
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
            <p>Please complete the form below for a prompt reply.</p>
          </>
        )}
        {/* <button onClick={() => console.log("Values:", values)}>LOG</button> */}
        <div className="row mb-3">
          <label htmlFor="name" className="form-label">
            Name
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
              required
            />
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
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
            required
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
              <label htmlFor="option" className="form-label">
                Which option interests you?
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="option"
                  onChange={handleChange}
                  value="Essays-Only Support"
                  id="essays"
                />
                <label className="form-check-label" htmlFor="essays">
                  Essays-Only Support
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="option"
                  onChange={handleChange}
                  value="Comprehensive Support"
                  id="comp-supp"
                />
                <label className="form-check-label" htmlFor="comp-supp">
                  Comprehensive Support
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="option"
                  onChange={handleChange}
                  value="Comprehensive Support with Logistics"
                  id="comp-supp-log"
                />
                <label className="form-check-label" htmlFor="comp-supp-log">
                  Comprehensive Support with Logistics
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="option"
                  onChange={handleChange}
                  value="Hourly Consultation"
                  id="hourly"
                />
                <label className="form-check-label" htmlFor="hourly">
                  Hourly Consultation
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="option"
                  onChange={handleChange}
                  value="Application Evaluation"
                  id="evaluation"
                />
                <label className="form-check-label" htmlFor="evaluation">
                  Application Evaluation
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="option"
                  onChange={handleChange}
                  value="Other"
                  id="other"
                />
                <label className="form-check-label" htmlFor="other">
                  {" "}
                  Other{" "}
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">
                How did you hear about Ivy Ready?
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="heard"
                  onChange={handleChange}
                  value="Google Search"
                  id="google"
                />
                <label className="form-check-label" htmlFor="google">
                  Google Search
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="heard"
                  onChange={handleChange}
                  value="Mail"
                  id="mail"
                />
                <label className="form-check-label" htmlFor="mail">
                  {" "}
                  Mail{" "}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="heard"
                  onChange={handleChange}
                  value="Family or Friends"
                  id="famOrFriends"
                />
                <label className="form-check-label" htmlFor="famOrFriends">
                  Family or Friends
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">
                What would you like to know more about?
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="info"
                  onChange={handleChange}
                  value="General Info"
                  id="general"
                />
                <label className="form-check-label" htmlFor="general">
                  General Info
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="info"
                  onChange={handleChange}
                  value="Fee Structure"
                  id="fee"
                />
                <label className="form-check-label" htmlFor="fee">
                  Fee Structure
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="info"
                  onChange={handleChange}
                  value="Other"
                  id="other"
                />
                <label className="form-check-label" htmlFor="other">
                  {" "}
                  Other{" "}
                </label>
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
