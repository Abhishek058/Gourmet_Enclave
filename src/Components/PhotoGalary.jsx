import { React } from "react";
import gal1 from "../assets/gal1.jpg";
import gal2 from "../assets/gal2.jpg";
import gal3 from "../assets/gal3.jpg";
import gal4 from "../assets/gal4.jpg";
import gal5 from "../assets/gal5.jpg";
import gal6 from "../assets/gal6.jpg";

function PhotoGalary() {
  const images = [
    gal1,
    gal2,
    gal3,
    gal4,
    gal5,
    gal6,
    gal1,
    gal2,
    gal3,
    gal4,
    gal5,
    gal6,
    gal1,
    gal2,
    gal3,
    gal4,
    gal5,
    gal6,
  ];
  return (
    <div className="bg-[#0d0d0d] h-[600px] flex flex-col py-24 xl:flex-row">
      <div className="GallHeading flex flex-col justify-center p-4 xl:w-[40%]">
        <h2 className="text-white text-2xl xl:text-4xl">Instagram</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="10"
          viewBox="0 0 40 10"
          fill="none"
        >
          <path
            d="M33.5016 9.5C37.0849 9.5 40 7.48129 40 4.99995C40 2.51861 37.0849 0.5 33.5016 0.5C30.1122 0.5 27.3221 2.30637 27.03 4.6018H22.3529V3.6552L0 3.6552V6.34446L22.353 6.34446V5.39798H27.0301C27.3223 7.69352 30.1122 9.5 33.5016 9.5ZM21.4898 5.54839L0.863293 5.54839V4.45161H21.4898V5.54839ZM27.8662 4.99995C27.8662 2.95778 30.3944 1.2964 33.5017 1.2964C36.6091 1.2964 39.1372 2.95778 39.1372 4.99995C39.1372 7.04222 36.6091 8.7037 33.5017 8.7037C30.3944 8.7037 27.8662 7.04222 27.8662 4.99995Z"
            fill="#DCCA87"
          />
        </svg>
        <h1 className="text-customYellow text-4xl py-3 xl:text-6xl">
          Photo Gallery
        </h1>
        <p className="text-gray-400 font-roboto py-6">
          Explore our captivating photo gallery, where each image tells a story
          of culinary artistry and memorable moments. From mouthwatering dishes
          to the warm ambiance, it's a feast for your senses.
        </p>
        <button className="w-[139px] h-[46px] text-white bg-customYellow border-2 border-customYellow font-semibold hover:bg-black">
          <a href="https://www.instagram.com/Gourmet_Enclave" target="_blank">
            View More
          </a>
        </button>
      </div>
      <div className="InstaGal flex flex-row p-4 gap-x-6 overflow-x-hidden xl:w-[60%]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="transition-opacity duration-1000 border-2 border-customYellow hover:opacity-40 cursor-pointer animate-scroll"
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoGalary;
