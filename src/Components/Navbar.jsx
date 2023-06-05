import React, { useState } from "react";
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








import { NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../Assets/Img/hamburgericon.svg'
import humburger from "../Assets/Img/hamburgericon.svg"
import close from "../Assets/Img/xicon.svg"
import './Styles/Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
    console.log(!showNavbar);
  }


  return (
    <nav className="navbar">
      <div className="container">

        <button className="menu-icon humburger" onClick={handleShowNavbar}>
          <img src={humburger} alt="" />
        </button>

        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/kafedratarkibi">Kafedra tarkibi</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Me`yoriy hujjatlar</NavLink>
            </li>
            <li>
              <NavLink to="/about">Hamkorlar</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Online Calculator</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Talabalarga va Abiturientlarga</NavLink>
            </li>
            <li>
              <NavLink to="/mukofotlar">Mukofotlar</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar