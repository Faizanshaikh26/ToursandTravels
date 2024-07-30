import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
function Navbar() {
  const [Openmenu, setOpenmenu] = useState(false);
  const Menuopen = () => {
    setOpenmenu(!Openmenu);
  };
  return (
    <>
      <div className="Header">
        <Link to="/">
          <i className="fa-solid fa-plane-up">
            <span>Travel</span>
          </i>
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
              {localStorage.getItem("travel-token") ? (
                <button
                  onClick={() => {
                    localStorage.removeItem("travel-token");
                    window.location.replace("/");
                    toast.success("Logout successfully")
                  }}
                >
                  Logout
                </button>
              ) : (
                <NavLink to="/login">
                  <button>login</button>
                </NavLink>
              )}
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
