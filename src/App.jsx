import React, { useState } from "react";
import loader from "./assets/loader.gif";
import "./index.css";
import Navbar from "./Navbar";
import Header from "./Header";

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
          <Navbar/>
          <Header/>
        </div>
      )}
    </>
  );
}

export default App;
