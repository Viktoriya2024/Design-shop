import React from "react";

const StepOne = ({ nextStep }) => {
  return (
    <div className="step-one">
      <h3>Welcome to the Discount Offer</h3>
      <button onClick={nextStep}>Start</button>
    </div>
  );
};

export default StepOne;
