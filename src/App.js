// import react to initalize
import React from "react";
// importing the different components 
import Navbar from "./components/Navbar";
import About from "./components/About"
import Tools from "./components/Tools"

function App() {
    return (
      <div>
        <Navbar />
        <About />
        <Tools />
      </div>
    );
  }

export default App;