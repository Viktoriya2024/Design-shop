import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import SixthStep from "./SixthStep";
import SeventhStep from "./SeventhStep";
import FinalStep from "./FinalStep";
import "./Popup.css";
import LastStep from "./LastStep";

const PopupComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [area, setArea] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    mobile: "",
    telegram: "",
    email: "",
  });

  const openPopup = () => setIsOpen(true);
  const closePopup = () => {
    setIsOpen(false);
    setStep(1);
  };

  const handleNextStep = () => {
    switch (step) {
      case 3:
        if (city.trim() === "") {
          setErrorMessage("Please enter a city before proceeding.");
          return;
        }
        break;
      case 4:
        if (!selectedTask) {
          setErrorMessage("Please select a task before proceeding.");
          return;
        }
        break;
      case 5:
        if (!area) {
          setErrorMessage("Please specify the area before proceeding.");
          return;
        }
        break;

      case 7:
        if (
          (contactMethod === "whatsapp" || contactMethod === "call") &&
          (!contactInfo.name || !contactInfo.mobile)
        ) {
          setErrorMessage(
            "Please provide complete contact information before proceeding."
          );
          return;
        }
        if (
          contactMethod === "telegram" &&
          (!contactInfo.name || !contactInfo.telegram)
        ) {
          setErrorMessage(
            "Please provide complete contact information before proceeding."
          );
          return;
        }
        if (contactMethod === "email" && !contactInfo.email) {
          setErrorMessage(
            "Please provide a valid email address before proceeding."
          );
          return;
        }
        break;
      default:
        setErrorMessage("");
    }

    setErrorMessage("");
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleCityChange = (value) => setCity(value);
  const handleSelectedTask = (taskId) => setSelectedTask(taskId);
  const handleAreaChange = (value) => setArea(value);
  const handleContactMethodChange = (method) => setContactMethod(method);
  const handleContactInfoChange = (key, value) =>
    setContactInfo((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <button onClick={openPopup} className="popup-trigger">
        Get 5% Discount
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-button" onClick={closePopup}>
              X
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {step === 1 && <StepOne nextStep={handleNextStep} />}
            {step === 2 && (
              <StepTwo
                setSelectedTask={handleSelectedTask}
                nextStep={handleNextStep}
                prevStep={handlePrevStep}
              />
            )}
            {step === 3 && (
              <StepThree
                city={city}
                setCity={handleCityChange}
                errorMessage={errorMessage}
                handleNext={handleNextStep}
                handlePrev={handlePrevStep}
              />
            )}
            {step === 4 && (
              <FourthStep
                handleNext={handleNextStep}
                handlePrev={handlePrevStep}
                setSelectedTask={handleSelectedTask}
                selectedTask={selectedTask}
              />
            )}
            {step === 5 && (
              <FifthStep
                handleNext={handleNextStep}
                handlePrev={handlePrevStep}
                setArea={handleAreaChange}
                area={area}
              />
            )}
            {step === 6 && (
              <SixthStep
                handleNext={handleNextStep}
                handlePrev={handlePrevStep}
              />
            )}
            {step === 7 && (
              <SeventhStep
                handleNext={handleNextStep}
                handlePrev={handlePrevStep}
                setContactMethod={handleContactMethodChange}
                setContactInfo={handleContactInfoChange}
                contactInfo={contactInfo}
              />
            )}
            {step === 8 && (
              <FinalStep
                contactMethod={contactMethod}
                contactInfo={contactInfo}
                handleContactInfoChange={handleContactInfoChange}
                handleNext={handleNextStep}
              />
            )}
            {step === 9 && <LastStep />}
          </div>
        </div>
      )}
    </>
  );
};

export default PopupComponent;
