import React from "react";
import "../style/services.css";
import servicesImg from './img/services-img.png'
import { FaCheckCircle } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
function Services() {
  return (
    <div  id="Services"  className="container">
      <div className="wrapper">
        <div className="Services">
<div className="card-wrapper">

<Fade left duration={1500}>
  <div className="card">
    <div className="card-title">
      <h3>Computer Repair</h3>
    </div>
    <div className="card-content ">
      <div className="card-row">
    <div>
      <FaCheckCircle/>
     <span>Reformat </span>
    </div>
    <div>
    <FaCheckCircle/>
 <span>Install Application</span>
    </div>
    </div>
      <div className="card-row">
    <div>
      <FaCheckCircle/>

   <span>Hardware Replacement</span>
    </div>
    <div>
    <FaCheckCircle/>

<span>Install Operating System</span>
    </div>
    </div>

    </div>
  </div>
  </Fade>

<Fade left duration={2500}>
<div className="card-mid">
  <div className="card">
    <div className="card-title">
      <h3>Laptop Repair</h3>
    </div>
    <div className="card-content ">
      <div className="card-row-mid">
    <div>
      <FaCheckCircle/>
     <span>Reformat </span>
    </div>
    <div>
    <FaCheckCircle/>
 <span>Install Application</span>
    </div>
    </div>
    </div>
  </div>
  <div className="card">
    <div className="card-title">
      <h3>Laptop Repair</h3>
    </div>
    <div className="card-content ">
      <div className="card-row-mid">
    <div>
      <FaCheckCircle/>
     <span>Reformat </span>
    </div>
    <div>
    <FaCheckCircle/>
 <span>Install Application</span>
    </div>
    </div>
    </div>
  </div>
  </div>

  </Fade>


  <Fade left duration={3500}>
  <div className="card-mid">
  <div className="card">
    <div className="card-title">
      <h3>Laptop Repair</h3>
    </div>
    <div className="card-content ">
      <div className="card-row-mid">
    <div>
      <FaCheckCircle/>
     <span>Reformat </span>
    </div>
    <div>
    <FaCheckCircle/>
 <span>Install Application</span>
    </div>
    </div>
    </div>
  </div>
  <div className="card">
    <div className="card-title">
      <h3>Laptop Repair</h3>
    </div>
    <div className="card-content ">
      <div className="card-row-mid">
    <div>
      <FaCheckCircle/>
     <span>Reformat </span>
    </div>
    <div>
    <FaCheckCircle/>
 <span>Install Application</span>
    </div>
    </div>
    </div>
  </div>
  </div>
  </Fade>
<Fade left duration={4500}>
  <div className="card">
    <div className="card-title">
      <h3>Smart phone Repair</h3>
    </div>
    <div className="card-content ">
      <div className="card-row">
    <div>
      <FaCheckCircle/>
    
    <span>LCD Replacement</span>
    </div>
    <div>
    <FaCheckCircle/>

<span>Bypass FRP</span>
    </div>
    </div>
      <div className="card-row">
    <div>
      <FaCheckCircle/>

 <span>Bypass Password</span>
    </div>
    <div>
    <FaCheckCircle/>

<span>Bypass Google Account</span>
    </div>
    </div>

    </div>
  </div>
  </Fade>
</div>

<Fade top duration={2000}>
<div className="img-wrapper">
  <h3>Services</h3>
  <img src={servicesImg} alt="" />
</div>
</Fade>
        </div>
      </div>
    </div>
  );
}

export default Services;
