import { Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
function App() {
  return (
    <>
   <Navbar/>
   <Home/>
   <Projects/>
 
   </>
  )
}

export default App
