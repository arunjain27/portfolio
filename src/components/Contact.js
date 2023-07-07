import React from 'react'
import "./css/Contact.css"
import facebook from "./images/facebook.png"
import linkedin from "./images/linkedin.png"
import instagram from "./images/instagram.png"
import gmail from "./images/gmail.png"
function Contact(){
  return (
    <>
   <p className='contact' id='contacts'>Contact</p>
    <div className='contactblock'>
      
    <div className='facebook'>
     <img src={facebook} alt="" srcset="" className='facebookimg'/>
            
      <div className='facebookpara'>
         <a href='https://www.facebook.com/profile.php?id=100009855137195&mibextid=ZbWKwL'> Arun Jain</a>
        </div>

    </div>
   
   <div className='facebook'>
    <img src={instagram} alt=""className="facebookimg"/>
       
       <div className='facebookpara'>
        <a href="https://www.instagram.com/arunjain2704">arunjain2704</a>
       </div>
  
    </div>
  
  
   <div className='facebook'>
      <img src={linkedin} alt=" "className="facebookimg" />
       
      <div className='facebookpara'>
        <a href="https://www.linkedin.com/in/arun-jain-766403254">Arun Jain</a>
        </div>
   </div>
   
   <div className='facebook'>
   <img src={gmail} alt=""className="facebookimg"/>
  
  
   <div className='facebookpara'>
      <a href='mailto:arunjain2704@gmail.com'>arunjain2704@gmail.com</a>
    </div>
  
  
   </div>
 
  
 </div>
  
    </>
  )
}

export default Contact;
