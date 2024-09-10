import React from "react";

const FifthStep = ({ area, setArea, handleNext, handlePrev }) => {
  const areas = [
    { label: "Up to 20 sq.m.", value: "up-to-20" },
    { label: "20-70 sq.m.", value: "20-70" },
    { label: "71-100 sq.m.", value: "71-100" },
    { label: "101-150 sq.m.", value: "101-150" },
    { label: "More", value: "more" },
  ];

  return (
    <div className="step-five">
      <h3>Specify area</h3>
      <div className="options">
        {areas.map((option) => (
          <div key={option.value} className="option">
            <input
              type="radio"
              id={option.value}
              name="area"
              value={option.value}
              checked={area === option.value}
              onChange={(e) => setArea(e.target.value)}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
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

export default FifthStep;
