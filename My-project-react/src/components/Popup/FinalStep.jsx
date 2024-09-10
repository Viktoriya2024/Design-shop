import React from "react";

const FinalStep = ({
  contactMethod,
  contactInfo,
  handleContactInfoChange,
  handleNext,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleContactInfoChange(name, value);
  };

  return (
    <div className="step-eight">
      <h3>Thank you for your answers!</h3>
      <p>
        We will soon calculate the cost of our approaching project. Please leave
        your contact information so that we can reach you.
      </p>
      <p>
        <strong>Contact Method:</strong> {contactMethod}
      </p>
      {contactMethod === "whatsapp" || contactMethod === "call" ? (
        <div>
          <p>
            <strong>Name:</strong>
            <input
              type="text"
              name="name"
              value={contactInfo.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
          </p>
          <p>
            <strong>Mobile number:</strong>
            <input
              type="text"
              name="mobile"
              value={contactInfo.mobile}
              onChange={handleInputChange}
              placeholder="Enter your mobile number"
            />
          </p>
        </div>
      ) : contactMethod === "telegram" ? (
        <div>
          <p>
            <strong>Name:</strong>
            <input
              type="text"
              name="name"
              value={contactInfo.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
          </p>
          <p>
            <strong>Telegram username:</strong>
            <input
              type="text"
              name="telegram"
              value={contactInfo.telegram}
              onChange={handleInputChange}
              placeholder="Enter your Telegram username"
            />
          </p>
        </div>
      ) : contactMethod === "email" ? (
        <div>
          <p>
            <strong>Email address:</strong>
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </p>
        </div>
      ) : null}
      <button onClick={handleNext}>Finish</button>
    </div>
  );
};

export default FinalStep;
