import React from "react";
import "./Styles/UnderNav.css";
import SliderComponent from "./corusel";
import { Link } from "react-router-dom";
import chiziqliImg from "../Assets/Img/chiziqli2.jpg"
import calculusImg from "../Assets/Img/calculus2.jpg"
import ehtimollikImg from "../Assets/Img/ehtimmolik.jpg"
// import "./nod";
const UnderNav = () => {
  return (
    <div>
      <div>
        <SliderComponent />
      </div>
      <div className=" image-area  Fon">
        <div className="img-wrapper position-relative ">
          <Link to={"/calculus"}>
            <h4 className="position-absolute ">Calculus</h4>
            <img

              src={calculusImg}
              alt="Calculus png"
            />
          </Link>
        </div>
        <div className="img-wrapper  position-relative">
          <Link to={"ehtimollikvastatistika"}>
            <h4 className="position-absolute">
              Ehtimollik va Statistika
            </h4>
            <img
              src={ehtimollikImg}
              alt="Ehtimollik Nazariyasi img"
            />
          </Link>
        </div>
        <div className="img-wrapper position-relative col-3 ">
          <Link to={"/chiziqlialgebra"}>
            <h4 className="position-absolute  ">
              Chiziqli Algebra
            </h4>
            <img
              className=""
              src={chiziqliImg}
              alt="Chiziqli Algebra imh
            g"
            />
          </Link>
        </div>
        <div className="img-wrapper position-relative col-3 ">
          <Link to={"/differensial"}>
            <h4 className="position-absolute ">
              Differensial tenglama
            </h4>
            <img
              className=""
              src="https://wallpapercave.com/wp/wp3003888.jpg"
              alt=" Differensial tenglama img"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderNav;
