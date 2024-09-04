import React, { useState } from "react";
import styles from "./Carousel.module.css";
import Picture1 from "../pictures/Picture1.jpg";
import Picture2 from "../pictures/Picture3.jpg";
import Picture3 from "../pictures/Picture2.jpg";

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
    <div className={styles["carousel-container"]}>
      <div className={styles.carousel}>
        <button
          onClick={handlePrev}
          className={`${styles["navButton"]} ${styles["prev"]}`}
        >
          ❮
        </button>
        <div className={styles["carouselContent"]}>
          <div className={styles["carouselImageWrapper"]}>
            <img
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex + 1}`}
              className={styles["carouselImage"]}
            />
          </div>
          <div className={styles["dots"]}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles["dot"]} ${
                  currentIndex === index ? styles["activeDot"] : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className={`${styles["navButton"]} ${styles["next"]}`}
        >
          ❯
        </button>
      </div>
      <div className={styles["description"]}>
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
      </div>
    </div>
  );
}

export default Carousel1;
