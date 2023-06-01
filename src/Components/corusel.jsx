import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../almash.png";
import image2 from "../maxresdefault.jpg";
const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % 2;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Carousel showThumbs={false} selectedItem={currentIndex}>
      <div>
        <img src={image1} alt="Rasm 1" />
      </div>
      <div>
        <img src={image2} alt="Rasm 2" />
      </div>
    </Carousel>
  );
};

export default SliderComponent;
