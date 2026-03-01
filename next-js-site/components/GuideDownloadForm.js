import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function GuideDownloadForm() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    hs_grade: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fname.trim()) {
      newErrors.fname = "First name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.hs_grade) {
      newErrors.hs_grade = "Please select your grade.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "guide_download",
        guide_slug: "college-application-playbook",
        cta_location: "landing_page_form",
        page_path: window.location.pathname,
        hs_grade: formData.hs_grade,
      });
      window.dataLayer.push({
        event: "form_submission",
        form_type: "guide_download",
        page_path: window.location.pathname,
      });
    } catch (trackErr) {
      console.warn("dataLayer push failed", trackErr);
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "GUIDE_DOWNLOAD",
          fname: formData.fname,
          email: formData.email,
          hs_grade: formData.hs_grade,
        }),
      });

      if (response.ok) {
        window.location.href = "/guides/college-application-playbook/thank-you";
      } else {
        setSubmitError(
          "Something went wrong. Please try again or email us directly."
        );
        setLoading(false);
      }
    } catch (err) {
      console.error("Guide download form error:", err);
      setSubmitError(
        "Something went wrong. Please try again or email us directly."
      );
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-4">
        <label htmlFor="fname" className="block text-sm font-medium text-gray-700 mb-1">
          First Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          className={`w-full border rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-ivy-blue ${
            errors.fname ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Your first name"
          autoComplete="given-name"
        />
        {errors.fname && (
          <p className="text-red-600 text-sm mt-1">{errors.fname}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full border rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-ivy-blue ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="name@example.com"
          autoComplete="email"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="hs_grade" className="block text-sm font-medium text-gray-700 mb-1">
          What grade are you in? <span className="text-red-600">*</span>
        </label>
        <select
          id="hs_grade"
          name="hs_grade"
          value={formData.hs_grade}
          onChange={handleChange}
          className={`w-full border rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-ivy-blue bg-white ${
            errors.hs_grade ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="" disabled>
            Select your grade
          </option>
          <option value="Freshman">Freshman — 9th grade</option>
          <option value="Sophomore">Sophomore — 10th grade</option>
          <option value="Junior">Junior — 11th grade</option>
          <option value="Senior">Senior — 12th grade</option>
        </select>
        {errors.hs_grade && (
          <p className="text-red-600 text-sm mt-1">{errors.hs_grade}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-ivy-blue text-white w-full py-3 rounded font-semibold hover:bg-opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
      >
        {loading ? "Sending…" : "Get the Free Playbook →"}
      </button>

      {submitError && (
        <p className="text-red-600 text-sm mt-2">{submitError}</p>
      )}
    </form>
  );
}
