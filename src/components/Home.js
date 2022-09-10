import React from "react";
import "../style/home.css";
import "../style/main.css"
import Heroimg from "../components/img/heroimg.png";
import { FaArrowRight } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <div id="Home" className="container">
      <div className="wrapper">
        <div  className="home">
          <div className="home-wrapper">
          <Fade left duration={2000}>
            <div className="content-wrapper">
            
              <h1>Fix your Computer Tablet and Smartphones</h1>
              <p>
                Need Technical Help for your Computer, Tablet and Smartphones ?
                We are here to help you 24/7. Just call or live chat with us.
              </p>


              <a  href="#Contact" >
              <button type="button"  className="contact-btn btn"  >
               Contact Us
               </button>
           <FaArrowRight/>
             
              </a>
            </div>
            </Fade>
            <Fade right>
            <div className="img-wrapper">
              <img src={Heroimg} alt="" />
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
