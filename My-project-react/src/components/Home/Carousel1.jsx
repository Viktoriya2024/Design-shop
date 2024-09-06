import React, { useState } from "react";
import "./Carousel.css";
import Picture1 from "../pictures/Picture1.jpg";
import Picture2 from "../pictures/Picture3.jpg";
import Picture3 from "../pictures/Picture2.jpg";
import { NavLink } from "react-router-dom";

const images = [
  {
    src: Picture1,
    description:
      "SELECTION OF DETAILS.\n The final touch that will complete your new interior.\n",
  },
  {
    src: Picture2,
    description:
      "DESIGN PROJECT OF THE PREMISES. \n A comprehensive solution\n for the complete renovation of your apartment or house\n in a realistic time frame and at an affordable price.\n",
  },
  {
    src: Picture3,
    description:
      "INTERIOR DECORATION \nThe final touch that will complete your new interior.\n",
  },
];

function Carousel1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button onClick={handlePrev} className="navButton, prev">
          ❮
        </button>
        <div className="carouselContent">
          <div className="carouselImageWrapper">
            <img
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex + 1}`}
              className="carouselImage"
            />
          </div>
          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "activeDot" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
        <button onClick={handleNext} className="navButton,next">
          ❯
        </button>
      </div>
      <div className="description">
        <h2>
          {images[currentIndex].description.split("\n").map((text, index) => (
            <React.Fragment key={index}>
              {text}
              <br />
            </React.Fragment>
          ))}
        </h2>
        <p>
          Detailed information about the selected design feature, including any
          additional context or description you want to add here.
        </p>
        <div className="details">
          <button className="active-button">
            <NavLink to="/decoration">More Details</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel1;
