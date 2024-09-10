import React from "react";

const SeventhStep = ({
  handleNext,
  handlePrev,
  setContactMethod,
  setContactInfo,
  contactInfo,
}) => {
  const contactMethods = [
    { method: "whatsapp", label: "WhatsApp" },
    { method: "telegram", label: "Telegram" },
    { method: "call", label: "Call me" },
    { method: "email", label: "Email" },
  ];

  return (
    <div className="step-seven">
      <h3>Where should I send you the commercial proposal?</h3>
      <div className="options">
        {contactMethods.map(({ method, label }) => (
          <button
            key={method}
            onClick={() => {
              setContactMethod(method);
              handleNext();
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {contactMethods && (
        <div className="contact-info">
          <h4>Contact Information</h4>
          {contactMethods === "whatsapp" || contactMethods === "call" ? (
            <>
              <input
                type="text"
                placeholder="Name"
                value={contactInfo.name}
                onChange={(e) => setContactInfo("name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Mobile number"
                value={contactInfo.mobile}
                onChange={(e) => setContactInfo("mobile", e.target.value)}
              />
            </>
          ) : contactMethods === "telegram" ? (
            <>
              <input
                type="text"
                placeholder="Name"
                value={contactInfo.name}
                onChange={(e) => setContactInfo("name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Telegram username"
                value={contactInfo.telegram}
                onChange={(e) => setContactInfo("telegram", e.target.value)}
              />
            </>
          ) : contactMethods === "email" ? (
            <input
              type="text"
              placeholder="Email address"
              value={contactInfo.email}
              onChange={(e) => setContactInfo("email", e.target.value)}
            />
          ) : null}
        </div>
      )}
      <div className="popup-navigation">
        <button className="prev-button" onClick={handlePrev}>
          Back
        </button>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SeventhStep;
