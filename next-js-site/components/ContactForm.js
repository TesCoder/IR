import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import useContactForm from '../hooks/useContactForm';
import { useState } from 'react';
import sendEmail from "../lib/sendEmail"
import Alert from '@/components/Alert';
import Link from 'next/link'

export default function ContactForm() {
  const { values, handleChange } = useContactForm();
  const [isSubmitting, setSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState(
    { success: false, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log("Values:", values)
    try {
      const res = await sendEmail(values);
      if (res.status === 250) {
        setResponseMessage(
          { success: true, message: 'Thank you for your message. We will be reaching out to you soon.' });
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
      </div>
    )
  }

  return (

    <div className="">
      <div className=''>
        <Alert message={responseMessage.message} success={responseMessage.success} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="name" className="form-label">Name</label>
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
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
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
          <label htmlFor="phone" className="form-label">Phone Number</label>
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
        <div className="mb-3">
          <label htmlFor="contact" className="form-label"
          >Preferred Contact Method</label
          >
          <div className="form-check">
            <input
              className="form-check-input"
              name="contact"
              onChange={handleChange}
              type="checkbox"
              value="Phone"
              id="phone"
            />
            <label className="form-check-label" htmlFor="phone"> Phone </label>
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
            <label className="form-check-label" htmlFor="email"> Email </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="option" className="form-label"
          >Which option interests you?</label
          >
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
            <label className="form-check-label" htmlFor="other"> Other </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label"
          >How did you hear about Ivy Ready?</label
          >
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="heard"
              onChange={handleChange}
              value="Phone"
              id="phone"
            />
            <label className="form-check-label" htmlFor="phone">
              Google Search
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="heard"
              onChange={handleChange}
              value="Email"
              id="phone"
            />
            <label className="form-check-label" htmlFor="phone"> Mail </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="heard"
              onChange={handleChange}
              value="Family or Friends"
              id="phone"
            />
            <label className="form-check-label" htmlFor="phone">
              Family or Friends
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label"
          >How did you hear about Ivy Ready?</label
          >
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
            <label className="form-check-label" htmlFor="other"> Other </label>
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor="year" className="form-label">
            Current Year
          </label>
          <select className="form-select" id='year' name='year' onChange={handleChange} aria-label="Current Year">
            <option defaultValue>Select your class</option>
            <option value="FR">Freshman</option>
            <option value="SP">Sophomore</option>
            <option value="JR">Junior</option>
            <option value="SR">Senior</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="service" className="form-label">
            How may we best serve you?
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
        <div className="col-12">
          <button className="btn bg-ivy-red text-white hover:bg-red-700 hover:shadow-lg" type="submit">{
            isSubmitting ?
              (
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) :
              "Submit"}
          </button>
        </div>
      </form>
    </div>
  )
}
