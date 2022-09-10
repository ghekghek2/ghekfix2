import React from "react";
import "../style/about.css";
import Kevin from "./img/kevin.png";
import More from "./img/more.png";
import Phil from "./img/phil.png";
import { FaLocationArrow, FaPhone } from "react-icons/fa";

function About() {
  return (
    <div className="container">
      <div className="wrapper">
        <div id="About" className="About">
          <div className="about-wrapper">
            <div className="about-info">
              <h3>About</h3>
              <p>
                Starting as a small business in Mariveles Bataan in 2015. We
                have big dreams. Our passion for Computer and Smart phone repair
                means that we provide our customers with nothing but the highest
                qualuty of services that are guaranteed to meet their needs and
                keep them satisfied !
              </p>
            </div>
            <div className="about-team">
              <h3>Team</h3>
              <div className="cards">
                <div className="team-card">
                  <img class="card-img" src={More} alt="" />
                  <div className="card-name">More</div>
                  <div className="card-position">Smart Phone Tech</div>
                </div>
                <div className="team-card">
                  <img class="card-img" src={Kevin} alt="" />
                  <div className="card-name">Kevin</div>
                  <div className="card-position">Chief Technician</div>
                </div>
                <div className="team-card">
                  <img class="card-img" src={Phil} alt="" />
                  <div className="card-name">Phil</div>
                  <div className="card-position">Network Tech</div>
                </div>
              </div>
            </div>
            <div className="about-footer">
              <div className="footer-content">
                <FaLocationArrow className="about-footer-icon" />
                <p>Balon Anito Mariveles Bataan</p>
              </div>
              <div className="footer-content">
                <FaPhone className="about-footer-icon" />
                <p>09613794822</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
