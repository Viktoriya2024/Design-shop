import React from "react";

const SixthStep = ({ handleNext, handlePrev }) => {
  const options = ["In the next month", "In 1-2 months", "Not important"];

  const handleOptionClick = (option) => {
    handleNext();
  };

  return (
    <div className="step-six">
      <h3>When is it convenient for you to start work?</h3>
      <div className="options">
        {options.map((option, index) => (
          <button key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </button>
        ))}
      </div>
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

export default SixthStep;
