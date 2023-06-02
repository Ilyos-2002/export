import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image11 from "../Assets/Img/domla2.png";
import image22 from "../Assets/Img/faxr.jpg";

const Compp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % 3;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Carousel showThumbs={false} selectedItem={currentIndex}>
      <div className="repl">
        <img src={image11} alt="Rasm 1" />
        <h4>
          Fizika matematika fanlari nomzodi, dotsent Raxmatov Rabbim matematika
          va mexanika sohasining ko‘zga ko‘ringan mutaxassislaridan biri bo‘lib,
          kadrlar tayyorlash milliy dasturini hayotga samarali tatbiq etish va
          ma’naviy yetuk hamda barkamol avlodni voyaga yetkazishda o‘z hissasini
          qo‘shib kelayotgan olimlardan biri.
        </h4>
      </div>
      <div className="repl">
        <img src={image22} alt="Rasm 2" />
        <h4>
          Fizika-matematika fanlar doktori, professor Abdullaev Rustambay
          Zayirovich timsolida biz bir tomondan iste’dodli olimni, ikkinchi
          tomondan yosh iste’dod sohiblarining a’lo o‘qituvchisi, tajribali
          ustozini ko‘ramiz
        </h4>
      </div>
    </Carousel>
  );
};

export default Compp;
