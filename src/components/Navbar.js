import { useRef } from "react";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./img/logo.png";


import "../style/navbar.css";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header>
      <img src={Logo} alt="" />

      <nav ref={navRef}>
        <a onClick={showNavbar} href="#Home">
          Home
        </a>
        <a onClick={showNavbar} href="#Services">
          Services
        </a>
        <a onClick={showNavbar} href="#About">
          About
        </a>
        <a className="con" onClick={showNavbar} href="#Contact">
          Contact
        </a>
        <button className="nav-btn nav-close-btn"  onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
