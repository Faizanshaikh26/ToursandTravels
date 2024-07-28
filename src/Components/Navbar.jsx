import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [Openmenu, setOpenmenu] = useState(false);
  const Menuopen = () => {
    setOpenmenu(!Openmenu);
  };
  return (
    <>
      <div className="Header">
        <Link to="/">
          <img src="" alt="Logo" />
        </Link>
        <div>
          <ul id="Navbar" className={Openmenu ? "Active-Menu" : ""}>
            <i
              id="X-Bar"
              onClick={Menuopen}
              className="fa-sharp  fa-solid fa-xmark"
            ></i>
            <li>
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="expertice"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Expertice
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="choose"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Choose Us
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="expereince"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Expereince
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="testnomial"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Testnomial
              </Link>
            </li>
            <li>
              <NavLink to='/contact'><i class="fa-solid fa-message"></i></NavLink>
            </li>
          </ul>
        </div>

        <div id="Mobile">
          <i
            id="Bar"
            className="fa-sharp  fa-solid fa-bars"
            onClick={Menuopen}
          ></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
