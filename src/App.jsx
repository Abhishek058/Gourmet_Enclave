import React, { useState } from "react";
import loader from "./assets/loader.gif";
import "./index.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Drinks from "./Components/Drinks";
import ChefSection from "./Components/ChefSection";

function App() {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 4500);

  return (
    <>
      {load ? (
        <div className="loader-div">
          <img src={loader} alt="Loading..." />
        </div>
      ) : (
        <div className="App">
          <Navbar />
          <Header />
          <About />
          <Menu />
          <Drinks />
          <ChefSection />
        </div>
      )}
    </>
  );
}

export default App;
