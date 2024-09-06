import React from "react";
import Decoration1 from "../pictures/Decoration1.jpg";
import "./deco.css";
import { NavLink } from "react-router-dom";
function Decoration() {
  const steps = [
    {
      number: 1,
      title: "REQUEST",
      description:
        "Send us your wishes, photos of the accommodation and room layout.",
    },
    {
      number: 2,
      title: "BRIEF",
      description:
        "For convenience, there are 2 options: online questionnaire or a personal meeting at your site. In any case, we will discuss ideas, expectations and budget in detail.",
    },
    {
      number: 3,
      title: "MEASUREMENTS",
      description:
        "You can take measurements yourself according to our instructions, or our specialist will do it (100 rubles per square meter).",
    },
    {
      number: 4,
      title: "LAYOUT",
      description:
        "We offer 3 options for planning solutions with furniture arrangement. We will discuss and make adjustments during the consultation.",
    },
    {
      number: 5,
      title: "CONCEPT",
      description:
        "From us up to 3 design concept options: references, color and style solutions. During the consultation, choose the one you like, and together we will bring it to perfection.",
    },
    {
      number: 6,
      title: "FINISHING MATERIALS",
      description:
        "We select finishing materials, adjust the location of sockets and lighting (if necessary).",
    },
    {
      number: 7,
      title: "3D COLLAGE",
      description:
        "Choose from 2 interior collages: with selected finishes, furniture and decor for each room. We can also make 3D visualizations for an additional fee.",
    },
    {
      number: 8,
      title: "ACCOUNT",
      description:
        "You receive the final list of all selected items: name, articles, websites, prices, discounts from stores. You can order it yourself, or you can entrust the purchases to us.",
    },
  ];
  return (
    <div>
      {/* Existing Decoration Section */}
      <div className="container">
        <div className="text">
          <h1>DECORATION</h1>
          <h3>DON'T KNOW HOW TO UPGRADE REPAIRS?</h3>
          <div className="paragraphContainer">
            <p className="paragraph">
              You don’t need a large and expensive renovation, but want to take
              a fresh look at your familiar interior? You can make all your
              dreams come true and give your apartment or office its own unique
              charm without resorting to serious work!
            </p>
            <p className="paragraph">
              The Design Studio team will create a unique design for you, which
              will allow you to place the right accents in the interior and
              create special comfort.
            </p>
            <p className="paragraph">
              We will formulate a design idea, select finishing materials,
              furniture and decor, and visualize everything using
              three-dimensional collages.
            </p>
            <p className="paragraph">
              By entrusting us with decorating your premises, you will receive a
              set of drawings and a shop list, which will contain all the
              materials, furniture, decorative items, shops and discounts.
            </p>
          </div>
        </div>
        <div className="imageContainer">
          <img src={Decoration1} alt="Decoration" className="image" />
          <div className="buttonContainer">
            <button className="button">
              <NavLink to="/authentocation">Contact Us</NavLink>
            </button>
          </div>
        </div>
      </div>

      <div className="scrollable-section">
        <h1 className="steps-title">8 STEPS TO YOUR DREAM INTERIOR</h1>
        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.number} className="step-item">
              <h2>{step.number}</h2>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Decoration;
