import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/newAbout';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  var backgroundcolor={
    backgroundColor:"rgb(2, 3, 31)"
  }

 
  return (
    <>
    <div style={backgroundcolor}>
  
 
    
     <Navbar/>
       <Home/>
     
       <About/> 
        <Projects />
     <Contact/>
  
     </div>
     </>
  );
}

export default App;
 