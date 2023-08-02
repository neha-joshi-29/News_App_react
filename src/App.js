// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar'; 

import New from './components/New';
import LoadingBar from 'react-top-loading-bar'; 



import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import About from './components/About';

const App =()=>{
  const pageSize=15;
  // const apiKey=process.env.REACT_APP_NEWS_API

 const[progress, setProgress] =useState(0)

  
    return (
      <div>
     
      <Router>
       <NavBar/>
       <LoadingBar
       color="#f11946"
       progress={progress}/>
       {/* /* <New setProgress={setProgress} apiKey="65b206a18a274af0a734b683c60a5e5b" pageSize={pageSize} country="in" category="science"/> */} 
       <Routes>
       <Route exact path="/about" element={<About/>}/>
          <Route exact path="/business" element={<New key="business"  setProgress={setProgress} pageSize={5} country="in" category="business"/>}/>
          <Route exact path="/health" element={<New key="health" setProgress={setProgress} pageSize={5} country="in" category="health"/>}/>
          <Route exact path="/sports" element={<New  key="sports" setProgress={setProgress} pageSize={5} country="in" category="sports"/>}/>
          <Route exact path="/general" element={<New  key="general"  setProgress={setProgress} pageSize={5} country="in" category="general"/>}/>
          <Route exact path="/technology" element={<New  key="technology" setProgress={setProgress} pageSize={5} country="in" category="technology"/>}/>
          <Route exact path="/entertainment" element={<New  key="entertainment" setProgress={setProgress} pageSize={5} country="in" category="entertainment"/>}/>
    
      
       </Routes> 
       
       </Router>

      </div>
    )
  }
  export default App

