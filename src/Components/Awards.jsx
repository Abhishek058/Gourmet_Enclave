import React from "react";
import AwardImg from "../assets/awardImg.png";
import AwImg1 from "../assets/oneImg.png";
import AwImg2 from "../assets/twoImg.png";
import AwImg3 from "../assets/threeImg.png";
import AwImg5 from "../assets/fiveImg.png";

function Awards() {
  const Award = [
    {
      img: AwImg1,
      title: "Bib Gourmond",
      text: "Celebrated for exceptional cuisine that marries flavor, quality, and value in every dish.",
    },
    {
      img: AwImg2,
      title: "Rising Star",
      text: "Acknowledged for promising talent and dedication, on the path to becoming a culinary sensation.",
    },
    {
      img: AwImg3,
      title: "Outstanding Chef",
      text: "Recognized for culinary expertise, crafting unforgettable dishes with passion and innovation.",
    },
    {
      img: AwImg5,
      title: "AA Hospitality",
      text: "Honored for consistently delivering top-notch service and exceptional dining experiences.",
    },
  ];
  return (
    <div className="AwardsSection text-gray-400 flex items-center justify-center">
      <div className="p-4 py-8 flex flex-col xl:flex-row-reverse">
        <div className="AwardImage xl:w-1/2">
          <img src={AwardImg} alt="" />
        </div>
        <div className="AwardDescription flex flex-col justify-center py-4 xl:w-1/2">
          <div>
            <h2 className="text-2xl text-white xl:text-3xl">
              Awards & Recognition
            </h2>
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
            <h1 className="text-5xl text-customYellow py-3 xl:text-7xl">
              Our Laurels
            </h1>
          </div>
          <div className="py-6 flex flex-wrap">
            {Award.map((item, index) => (
              <div className="flex py-4 md:w-1/2 xl:w-1/2" key={index}>
                <div className="flex">
                  <img
                    src={item.img}
                    alt="award"
                    className="w-[150px] h-[75px] xl:w-[250px] h-[100px]"
                  />
                </div>
                <div className="flex flex-col px-4">
                  <h2 className="text-2xl text-customYellow xl:text-3xl">
                    {item.title}
                  </h2>
                  <p className="text-gray-400 font-roboto ">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
