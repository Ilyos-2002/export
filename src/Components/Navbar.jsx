import React from "react";
// import "./Styles/Navbar.css";
// import { Link, NavLink } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <div className="Navbar hedding text-light">
//       <div
//         style={{ width: "100%" }}
//         className="container d-flex justify-content-between p-2"
//       >
//         <div>
//           <NavLink to={"/"} className="heda">Kafedra tarkibi</NavLink>{" "}
//         </div>
//         <div>
//           <NavLink to={"/"} className="heda">Me`yoriy hujjatlar</NavLink>
//         </div>
//         <div>
//           <NavLink to={"/"} className="heda">Hamkorlar</NavLink>
//         </div>
//         <div>
//           <NavLink to={"/"} className="heda">Online Calculator</NavLink>
//         </div>
//         <div>
//           <NavLink to={"/"} className="heda">Talabalarga va Abiturientlarga</NavLink>
//         </div>
//         <div>
//           <NavLink to={"/"} className="heda">Mukofotlar</NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import { useState } from 'react';

import { NavLink } from "react-router-dom";
import gamburgerBtn from "../Assets/Img/hamburgericon.svg"
import closeBtn from "../Assets/Img/xicon.svg"
import "./Styles/Navbar.css"
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="nav">
      <button className="gamburgerBtn navbar-btn" onClick={handleMenuToggle}>
        <img width={24} height={24} src={gamburgerBtn}
          alt="" />
      </button>
      <ul className="navbar-list">
        <button onClick={handleMenuToggle} className="navbar-btn" >
          <img width={24} height={24} src={closeBtn} alt="" />
        </button>
        <li>
          <NavLink to={'/kafedr'}>
            Kafedra tarkibi
          </NavLink>
        </li>
        <li>
          <NavLink>
            Me'yoriy hujjatlar
          </NavLink>
        </li>
        <li>
          <NavLink>
            Hamkorlar
          </NavLink>
        </li>

        <li>
          <NavLink>
            Online Calculator
          </NavLink>
        </li>
        <li>
          <NavLink>
            Talabalarga va Abiturientlarga
          </NavLink>
        </li>
        <li>
          <NavLink>
            Mukofotlar
          </NavLink>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar;