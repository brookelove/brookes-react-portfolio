// import react to initalize
import React from "react";
// importing the different components 
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
      <div>
        <Navbar />
        <About />
        <Tools />
        <Projects />
        <Contact />
      </div>
    );
  }

export default App;