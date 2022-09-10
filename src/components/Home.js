import React from "react";
import "../style/home.css";
import "../style/main.css"
import Heroimg from "../components/img/heroimg.png";
import { FaArrowRight } from "react-icons/fa";
export default function Home() {
  return (
    <div id="Home" className="container">
      <div className="wrapper">
        <div  className="home">
          <div className="home-wrapper">
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
            <div className="img-wrapper">
              <img src={Heroimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
