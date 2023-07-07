import React from 'react';

import img2 from "./images/homeimage.jpg";
import { useState } from 'react';
import "./css/About.css"

function About(props){ 
    // var about={
    //     textAlign:"center",
    //     fontSize:"3.2rem",
    //     fontWeight:"600",  
    //      backgroundColor:"aqua", 
    //      fontFamily: "'Noto Serif', serif"
    //    }
//    .abouthead{
//        background-color: aquamarine;
//         height:35em;
//         display: flex;
//         justify-content: space-around;
//        }
//    .aboutpic{
//        margin-top: 4rem;
//    border: 3px solid red;
//    width: 25rem;     
//    height: 28rem;
//    background-color: green;
//    border-radius: 10px;
//    }
   
//    .aboutintroblock{
//        margin-top: 4rem;
//        border: 3px solid red;
//        width: 42rem;     
//        height: 28rem;
//        background-color: green;
//        border-radius: 10px;
     
//    }
//    .aboutintro{
    
//    font-size: 1.3rem;
//    font-weight: 600;
//    font-family: 'Playfair Display', serif;
//    }
   
//    button{
    
//        font-size: 1.6rem;
//        font-weight: 600;
      
//        margin-left: 6.3rem;
       
//    font-family: 'Noto Serif', serif;
//    }
//    .skills{
//    display: flex;
//    justify-content: space-evenly;
   
//    }
//    .education{
//        display: flex;
//        justify-content: space-evenly;
        
//    }
//     .hobby{
//            display: flex;
//            justify-content: space-evenly;
//            }
//    .frontend{
//     margin-top: 1rem;
//     background-color: blueviolet;
//     width: 12rem;
//     height: 12rem;
//    }
   
//    .frontendhead{
//        font-size: 1.1rem;
//      font-weight: 600;
//     text-decoration: underline;
//    }
   
//    .frontenddesc{
//        font-size: 0.8rem;
//        font-weight: 600;
     
//    }  

   const [skillhide, setskillhide] = useState({display:"block"});
   const [educationhide, setseducationhide] = useState({display:"none"});
   const [hobbyhide, setshobbyhide] = useState({display:"none"});
  function  toogle(){
    setskillhide({display:"block"});
    
    setseducationhide({display:"none"});
    setshobbyhide({display:"none"})
  }
   function  toogle1(){
    setskillhide({display:"none"});
    
    setseducationhide({display:"block"});
    setshobbyhide({display:"none"})
   }
   function  toogle2(){
    setskillhide({display:"none"});
    
    setseducationhide({display:"none"});
    setshobbyhide({display:"block"});
   }
   var ab={ boxShadow: "2px 2px 3px rgb(33, 34, 110)"}
  var b={ boxShadow: "-1px -1px 1px rgb(33, 34, 110)"}
   var back=props.back;
   var color=props.color;
   return (
    <>
       <div>
      <p id="a">About Me</p>
      </div>
     <div id='abouthead' style={back}>
     
     <div>

   <img src={img2} alt="" id='aboutpic'/>

     </div>
    <div id='aboutintroblock' style={ab}>
 
       <p id='aboutintro' style={{...back, ...color}}>My name is Arun jain , and I have been immersed in the world of web development for 2 years. I'm passionate about keeping up with industry standardsto deliver best web solutions.In addition to technical skills, I value effective communication and teamwork. I believe that clear and open communication is essential for understanding client requirements and delivering successful projects on time.</p>

     
    
     <button className='button' onClick={toogle}>Skills</button> <button className='button'onClick={toogle1}>Education</button>  <button className='button'onClick={toogle2}> Hobby</button>
    
     <div id='skillblock' style={skillhide}>
        <div id='skills'>
         
         <div className='frontend' style={b}>
            
            <p className='frontendhead'>FRONTEND SKILLS</p>
            
            <p className='frontenddesc'>HTML,CSS,JAVASCRIPT</p>   
             <p className='frontenddesc'>FRAMEWORK---REACTJS</p>   
             <p className='frontenddesc'>DEVOPS---GIT</p>  
          
          </div> 
        
      
          <div className='frontend'  style={b} >
          
          <p className='frontendhead'>BACKEND SKILLS</p>
            
            <p className='frontenddesc'>NODE JS</p>   
            <p className='frontendhead'>DATABASE</p>
            
             <p className='frontenddesc'>MONGODB</p>  
          </div> 
        


          <div className='frontend'  style={b}>
          <p className='frontendhead'>TOOLS</p>
            
            <p className='frontenddesc'>WIX </p>   
           
            <p className='frontendhead'>LANGUAGES</p>
            
             <p className='frontenddesc' > C ,C++ ,JAVASCRIPT</p>  
          
          </div> 
        


       </div>
    </div>
    <div id='educationblock' style={educationhide}>
     <div className='education'>
 
     <div className='frontend'  style={b}>
            
            <p className='frontendhead'>April 2018-March 2019</p>
            <p className='frontenddesc'>Laxmi Public School, DELHI HIGH SCHOOL— 80%</p>   
            
             <p className='frontendhead'>April 2019-March 2020</p>   
             <p className='frontenddesc'>Laxmi Public School, DELHI SECONDARY SCHOOL— 78%</p>   
            
          </div> 
          <div className='frontend'  style={b}>
            
            <p className='frontendhead'>JUNE 2020-JUNE 2024</p>
            <p className='frontenddesc'>Inderprastha Engineering College, GHAZIABAD
B.TECH (Computer Science and Engineering) — 73.4 %

.</p>   
            
             
          </div> 
     





     </div>
    </div>
     <div style={hobbyhide}>
     <div className='hobby'>

 
     <div className='frontend'>
            
           
            <p className='frontendhead'>Playing Mobile Games</p>
            <p className='frontenddesc'>BGMI,COD,CLASH ROYALE</p>   
            <p className='frontendhead'>Playing Outdoor Games</p>   
             <p className='frontenddesc'>Cricket,Football,Throw Ball </p>
          </div> 
     

       
</div>


      </div>

   
   </div>

     </div>
    
      
    
    </>
  )
}

export default About;
