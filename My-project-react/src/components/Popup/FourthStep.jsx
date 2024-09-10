import React from "react";

const FourthStep = ({
  handleNext,
  handlePrev,
  setSelectedTask,
  selectedTask,
}) => {
  const objects = [
    "Country house",
    "Apartment",
    "Room",
    "Office",
    "Other commercial space",
  ];

  return (
    <div className="step-fourth">
      <h3>What is your object?</h3>
      <div className="options">
        {objects.map((object, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedTask(object);
              handleNext();
            }}
            className={selectedTask === object ? "selected" : ""}
          >
            {object}
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

export default FourthStep;
