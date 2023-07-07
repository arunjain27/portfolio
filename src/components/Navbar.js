import React from 'react';
import "./css/Navbar.css";
import img1 from "./images/arunjainlogo.png"

function Navbar(){
  

    return (
     <>
      <nav className='nav'>  
      
        <div>
         <img  className='navlogo' src={img1} alt="" srcset="" /> 
        
      </div>
        <div className='navinfo'>
   
       
        <a href='/'><li>Home</li></a>
        
        <a href='#a'><li>About</li></a>
       
       <a href='#projects'><li>Projects</li></a>
       
       <a href='#contacts'><li>contact Me</li></a>
     


        </div>
 

      </nav>
    </>
  );
}

export default Navbar;
 