import React from "react";
import "./Styles/Header.css";
import { Button } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import PhonelinkOutlinedIcon from "@mui/icons-material/PhonelinkOutlined";
import logo from "../Assets/Img/yangi.png"

const Header = () => {
  return (
    <div className="Header text-light">
      <div className=" container d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between ">
        </div>
        <div className="d-flex align-items-center ms-2  " style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
          <img
            style={{ borderRadius: "50%" }}
            className="m-3"
            width={100}
            height={100}
            src={logo}
          />
          <h2 className="" style={{ textAlign: "center", textTransform: "uppercase", fontSize: "26px" }}>
            Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalar
            Universiteti Oliy Matematika Kafedrasi
          </h2>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Header;
