import React from "react";
import DesignPro from "../pictures/designProject.jpg";
import Renovation from "../pictures/renovation.jpg";
import Furniture from "../pictures/furniture.jpg";

const StepTwo = ({ setSelectedTask, nextStep, prevStep }) => {
  const tasks = [
    { id: 1, title: "Develop a design project", image: DesignPro },
    { id: 2, title: "Refresh renovation", image: Renovation },
    { id: 3, title: "New furniture and decor", image: Furniture },
  ];

  return (
    <div className="step-two">
      <h3>Which task is closer to your request?</h3>
      <div className="options">
        {tasks.map((task) => (
          <div key={task.id} className="option">
            <img src={task.image} alt={task.title} />
            <p>{task.title}</p>
            <button
              onClick={() => {
                setSelectedTask(task.id);
                nextStep();
              }}
            >
              Select {task.title}
            </button>
          </div>
        ))}
      </div>
      <div className="popup-navigation">
        <button className="prev-button" onClick={prevStep}>
          Back
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
