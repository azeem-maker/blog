import "./App.css";
/* import About from "./components/About"; */
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React from "react";
/* import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom"; */


function App() {
  return (
    <>
  {/*   <Router> */}
    
    <Navbar title="TextUtils" />
    <div >
    
   {/*  <Routes> */}
    
      
          
          {/* <Route exact path="/" element={ */}<Textform heading="Enter your Text here which you want to convert" />{/* }> */}
         {/*  </Route> */}
          
      {/*   <Route path="/about" element={<About />}>
          </Route>
      
     </Routes> */}
     </div>
     {/* 
     </Router> */}
    </>
  );
}

export default App;
