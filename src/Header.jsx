import React, { useState, useEffect } from "react";
import "./index.css";
import headerImg1 from "./assets/headerImg.png";
import headerImg2 from "./assets/headerImg2.png";
import headerImg3 from "./assets/headerImg3.png";

function Header() {
  const images = [headerImg1, headerImg2, headerImg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="header items-center justify-center text-white relative">
      <div className="headerMainDiv flex flex-col h-screen">
        <div className="textHeaderDiv flex flex-col justify-center ml-5">
          <h2 className="text-[18px]">Chase The New Flavour</h2>
          <h1 className="text-[60px] font-bold text-customYellow">
            Food That <br /> Surprise You
          </h1>
          <p className="m-2 text-[14px] font-roboto text-gray-400">
            Let it be the land, but let us live in old age. The afflictions of
            time are milder than the sweetness of chocolate. Ultimately, there
            is ample terrain for us to explore and cultivate.
          </p>
          <button className="bg-customYellow w-[159px] h-[46px] text-black font-bold mt-7 transition 2.5s hover:bg-black hover:text-customYellow hover:border-2 border-customYellow">
            <a href="#">Explore Menu</a>
          </button>
        </div>
        <div className="imageheaderDiv flex justify-center mt-10">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000 absolute`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
