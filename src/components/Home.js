import React from 'react'
import "./css/Home.css"
import img2 from "./images/arunimage.jpg"
import Typed from 'typed.js';

function Home(props){
  var a={ boxShadow: "2px 2px rgb(33, 34, 110)"}
  var b={ boxShadow: "-2px -2px rgb(33, 34, 110)"}
   
  // var back=props.back;
  //  var color=props.color;
  const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['I am Arun Jain , a web developer with a passion for creating engaging and functional websites.'],
          typeSpeed: 50,
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);
    
    return (
    <>

     <div className='home' > 
       <div className='homewrite' style={a}> 
        <p className='homeintro' ref={el}/>
      </div>   
        <div> 
         
          <img src={img2} alt="" srcset="" className='homeimage' style={b} /> 
        
    
        </div>   
         

    
    </div>   
     


    </>
  )
}

export default Home;
