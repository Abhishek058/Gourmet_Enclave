import React, { useState } from "react";
import loader from "./assets/loader.gif";
import "./index.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Drinks from "./Components/Drinks";
import ChefSection from "./Components/ChefSection";
import Testimony from "./Components/Testimony";
import VideoSection from "./Components/VideoSection";
import Awards from "./Components/Awards";
import PhotoGalary from "./Components/PhotoGalary";

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
          <Testimony />
          <VideoSection />
          <Awards />
          <PhotoGalary />
        </div>
      )}
    </>
  );
}

export default App;
