import React, { useState, useContext } from "react";
import "./Popup.css";
import { useNavigate } from "react-router-dom";
import DesignPro from "../pictures/designProject.jpg";
import Renovation from "../pictures/renovation.jpg";
import Furniture from "../pictures/furniture.jpg";
import { RequestContext } from "../../contexts/RequestContext";

const Popup = () => {
  const { discount, setDiscount } = useContext(RequestContext)

  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [ task, setTask ] = useState("")

  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const updateTask = ({ target }) => {
    target = target.closest("[data-task]")
    setTask(target.dataset.task )
  }

  const handleNext = () => {
    if (city.trim() === "") {
      setErrorMessage("Please enter a city before proceeding.");
    } else {
      setErrorMessage("");
      navigate("/authentocation");
      setDiscount({ city, task })
    }
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const closePopup = () => {
    setIsOpen(false);
    setStep(1);
  };

  const openPopup = () => {
    setStep(1);
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={openPopup} className="popup">
        get 5% discount
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-button" onClick={closePopup}>
              X
            </button>
            {step === 1 && (
              <div className="step-one">
                <div className="discount">
                  <span>5%</span>
                </div>
                <p>Do you need a design project or a renovation?</p>
                <p>
                  Answer the questions, get an offer and a discount on the
                  project!
                </p>
                <div className="popup-navigation">
                  <button className="next-button" onClick={nextStep}>
                    Let's go
                  </button>
                </div>
              </div>
            )}

            <button className="close-button" onClick={closePopup}>
              X
            </button>

            {step === 2 && (
              <div className="step-two">
                <h3>Which task is closer to your request?</h3>
                <div className="options">
                  <div
                    className="option"
                    onClick={updateTask}
                    data-task="design"
                  >
                    <img src={DesignPro} alt="Option 1" />
                    <p>Develop a design project</p>
                  </div>
                  <div
                    className="option"
                    onClick={updateTask}
                    data-task="renovation"
                  >
                    <img src={Renovation} alt="Option 2" />
                    <p>Refresh renovation</p>
                  </div>
                  <div
                    className="option"
                    onClick={updateTask}
                    data-task="decor"
                  >
                    <img src={Furniture} alt="Option 3" />
                    <p>New furniture and decor</p>
                  </div>
                </div>
                <div className="popup-navigation">
                  <button className="prev-button" onClick={prevStep}>
                    Back
                  </button>
                  <button className="next-button" onClick={nextStep}>
                    Next
                  </button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="step-three">
                <h3>Please enter a city</h3>
                <input
                  type="text"
                  placeholder="Choose your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <div className="popup-navigation">
                  <button className="next-button" onClick={handleNext}>
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
