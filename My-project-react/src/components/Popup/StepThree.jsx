import React from "react";

const StepThree = ({ city, setCity, errorMessage, handleNext }) => {
  return (
    <div className="step-three">
      <h3>Enter your city</h3>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="popup-navigation">
        <button className="prev-button" onClick={handleNext}>
          Back
        </button>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepThree;
