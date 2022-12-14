import React from "react";
import "../style/contact.css";
import ResponsiveEmbed from "react-responsive-embed";
import './asset/Button.css'
import Fade from 'react-reveal/Fade';
import Button from './asset/Button.js'
function Contact() {
  return (
    <div className="container" >
      <div className="wrapper">
      <h3 className="contact-title">Contact</h3>
        <div id="Contact"  className="Contact">
         <Fade left duration={3000}>
      <div className="form">
       
        <form action="">
        <h4>Let 's Keep in Touch</h4>
        <p>Email</p>
        <input type="email" placeholder="Email" />
        <p>Full name</p>
        <input type="text" placeholder="Full name" />
        <p>Message</p>
<textarea  placeholder="Message" name="" id="" ></textarea>
<Button val="Send" />
        </form>
      </div>
      </Fade> 
      <Fade right duration={3000}>
<div className="ratio">
<ResponsiveEmbed  src='https://www.youtube.com/embed/RWbxbQRNF0A'  ratio='16:9' />
</div>
</Fade>



        </div>
      </div>
    </div>
  );
}

export default Contact;
