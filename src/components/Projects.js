import React from 'react'
import"./css/project.css"

import ballingrooling from "./images/ballingrooilng.png"
import bunchofjoy from "./images/bunchofjoy.png"
import mezink from "./images/mezink.png"
import newsbook from "./images/newsbook.png"
import notebook from "./images/notebook.png"
function Projects(props){
  var ab={ boxShadow: "3px 3px 3px rgb(33, 34, 110)"}

  return (
    <>
  <p className='project' id='projects'>Projects</p>
  
   <div className='projectimageblock'>
   
  
   <div className='projectimage'  style={ab}>

   <img src={bunchofjoy} alt="" srcset=""  className='projectimage1' /> 
      
  <p className='projectpara'>
       This is an Ecommerce website for selling gifts, stationary to the users. Payment gateway was enabled using Paypal. I use WIX tool.


</p>
<div className='project-link'>    
    <a href='https://www.bunchofyourjoy.com/' target='_blank'  rel="noreferrer">Project link</a>
   </div>
   </div>

   <div className='projectimage'  style={ab} >

   <img src={ballingrooling} alt="" srcset=""  className='projectimage1'/>  
       
       <p  className='projectpara'>Balls Rolling is the project in which the balls have moved in the container continously.I use HTML, CSS, JAVASCRIPT, CANVAS to built the website. </p>  
  
       <div className='project-link'>    
    <a href='https://github.com/arunjain27/rolling-ball'target='_blank'  rel="noreferrer">Project link</a>
   </div>
   </div>
    </div>
   <div className='projectimageblock'>
   
   <div className='projectimage'  style={ab}> 

   <img src={newsbook} alt="" srcset=""  className='projectimage1'/>  
    
  
    <p  className='projectpara'>Newsbook is a newspaper website which gives all the latest news to the User regarding all categories. This was done using Fetch API calls in the react app.</p>
   <div className='project-link'>    
    <a href='https://github.com/arunjain27/Newsbook' target='_blank'  rel="noreferrer">Project link</a>
   </div>

</div>
<div className='projectimage'  style={ab}>


<img src={notebook} alt="" srcset=""  className='projectimage1'/>  
<p  className='projectpara'>This project is used to save important notes and Todo lists with proper Authorization and Authentication.Json WEB TOKEN is for authentication of the users. 
</p>
<div className='project-link'>    
    <a href='https://github.com/arunjain27/Notebook'target='_blank'  rel="noreferrer">Project link</a>
   </div>

   </div>
   </div>
 
    </>
  )
}

export default Projects;
 