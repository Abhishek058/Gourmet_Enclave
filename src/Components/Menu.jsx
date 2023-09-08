import React, { useState } from "react";
import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/Menu2.png";
import menu3 from "../assets/Menu3.png";
import menu4 from "../assets/MenuBg.jpg";

function Menu() {
  const [backgroundImage, setBackgroundImage] = useState(menu3);

  const handleEnter = (menuImage) => {
    setBackgroundImage(menuImage);
  };

  return (
    <div className="MenuMain w-full min-h-screen flex flex-col justify-center text-white text-5xl font-bold">
      <div
        className="changeBg w-full h-screen bg-no-repeat bg-cover transition-all duration-500"
        id="changemainBg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute">
        <h1
          className="barMenu w-max m-7 cursor-pointer"
          onMouseEnter={() => handleEnter(menu1)}
        >
          Bar Menu
        </h1>
        <h1
          className="foodMenu w-max m-7 cursor-pointer"
          onMouseEnter={() => handleEnter(menu2)}
        >
          Food Menu
        </h1>
        <h1
          className="dessertMenu w-max m-7 cursor-pointer"
          onMouseEnter={() => handleEnter(menu3)}
        >
          Desserts Menu
        </h1>
        <h1
          className="dessertMenu w-max m-7 cursor-pointer"
          onMouseEnter={() => handleEnter(menu4)}
        >
          Dining
        </h1>
      </div>
    </div>
  );
}

export default Menu;
