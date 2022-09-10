import React from "react";
import "../style/contact.css";
import ResponsiveEmbed from "react-responsive-embed";
import { FaArrowRight } from "react-icons/fa";
function Contact() {
  return (
    <div className="container" >
      <div className="wrapper">
      <h3 className="contact-title">Contact</h3>
        <div id="Contact"  className="Contact">
          
      <div className="form">
       
        <form action="">
        <h4>Let 's Keep in Touch</h4>
        <p>Email</p>
        <input type="email" placeholder="Email" />
        <p>Full name</p>
        <input type="text" placeholder="Full name" />
        <p>Message</p>
<textarea  placeholder="Message" name="" id="" ></textarea>
<a className="send-btn" href="#/" >
              <button type="button"  className="send btn"  >
              Send
               </button>
           <FaArrowRight/>
             
              </a>
        </form>
      </div>

<div className="ratio">
<ResponsiveEmbed  src='https://www.youtube.com/embed/RWbxbQRNF0A'  ratio='16:9' />
</div>




        </div>
      </div>
    </div>
  );
}

export default Contact;
