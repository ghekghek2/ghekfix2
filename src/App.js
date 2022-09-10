import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './style/main.css'
function App() {
  return (
    <div className="App"  >
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>

     
    </div>
  );
}

export default App;
