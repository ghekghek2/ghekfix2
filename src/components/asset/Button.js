import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import './Button.css'
function Button(props) {
  return (
    <div>
    
    <a  href={props.link}  className='assetbtn'>
              <button type="button"  className="contact-btn btn"  >
             {props.val}
               </button>
           <FaArrowRight/>
             
              </a>
    </div>
  )
}

export default Button
