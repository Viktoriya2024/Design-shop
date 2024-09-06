import React, { useState } from "react";
import "./registration.css";

function Authentication() {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    favor: "design project",
    comment: "",
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.telephone &&
      formData.email &&
      formData.privacyPolicy
    ) {
      setSubmitted(true);
      console.log("Form Data Submitted:", formData);
    } else {
      alert("Please fill all fields and accept the privacy policy.");
    }
  };

  return (
    <div className="registration-container">
      {submitted ? (
        <div className="thank-you-message">
          <h1>Thank you!</h1>
          <p>We will contact you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="registration-form">
          <h2 className="form-title">REQUEST</h2>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />

          <label htmlFor="telephone">Telephone</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="+7 (999) 999-99-99"
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
          />

          <label htmlFor="favor">I need a favor</label>
          <select
            id="favor"
            name="favor"
            value={formData.favor}
            onChange={handleChange}
          >
            <option value="design project">Design project</option>
            <option value="repair">Repair</option>
            <option value="consultation">Consultation</option>
          </select>

          <label htmlFor="comment">Comment on the application</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Your comment"
          ></textarea>

          <div className="privacy-policy">
            <input
              type="checkbox"
              id="privacyPolicy"
              name="privacyPolicy"
              checked={formData.privacyPolicy}
              onChange={handleChange}
              required
            />
            <label htmlFor="privacyPolicy">
              I agree with the privacy policy
            </label>
          </div>

          <button type="submit" className="submit-button">
            SEND A REQUEST
          </button>
        </form>
      )}
    </div>
  );
}
export default Authentication;
