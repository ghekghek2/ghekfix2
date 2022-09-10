import React from "react";
import '../style/footer.css'
import {FaFacebook, FaAt, FaInstagram,FaCopyright} from "react-icons/fa";
function Footer() {
  return (
    <div className="container">
    <div className="wrapper">
      <div className="footer">
    <div className="footer-wrapper">
      <div className="col col-1">
      <h4>About</h4>
      <p>Starting as a small business in Mariveles Bataan in 2015, We have big dreams. Our passion for Computer Tech and Smartphone Tech, means that we provide our customers with nothing but the highest 
        quality of Services, that are guaranteed to meet their needs and keep them satisfied!</p>
      </div>
      <div className="col col-2">
<h4>Services</h4>
<ul>
<li><a href="#Services"> Computer Desktop Repair </a></li>  
<li><a href="#Services"> Laptop Repair </a></li>  
<li><a href="#Services"> Smarth phone Repair </a></li>  
<li><a href="#Services"> Network Problem </a></li>  
<li><a href="#Services"> Data Recovery </a></li>  
<li><a href="#Services"> Install Application </a></li>  
</ul>
      </div>
      <div className="col col-3">
<h4>Quick Links</h4>

<ul>
  <li><a href="#Home"> Home </a></li>
  <li><a href="#Services"> Services </a></li>
  <li><a href="#About"> About </a></li>
  <li><a href="#Contact"> Contacts </a></li>
</ul>
      </div>
    </div>
<div className="footer-bottom">
  <p>Copyright<span>< FaCopyright/></span> 2022 All Rights Reserved by Ghekfix</p>

  <div className="footer-social">
    <h5>Social</h5>
    <div className="social-icon">
      <FaFacebook/>
      <FaAt/>
      <FaInstagram/>
    </div>

  </div>
</div>



      </div>
    </div>
    </div>
  );
}

export default Footer;
