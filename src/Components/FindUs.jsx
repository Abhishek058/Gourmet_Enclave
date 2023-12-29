import React from "react";
import FindImg from "../assets/FindusImg.png";

function FindUs() {
  return (
    <div className="FindUsSection flex justify-center items-center">
      <div className="FindUsMain flex flex-col justify-center items-center p-24 md:flex-row xl:flex-row">
        <div className="FindUsText flex flex-col py-4 md:w-1/2 xl:w-1/2">
          <div>
            <h2 className="text-white text-2xl xl:text-3xl">Contact</h2>
            <svg
              width="40"
              height="9"
              viewBox="0 0 40 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M33.5016 9C37.0849 9 40 6.98129 40 4.49995C40 2.01861 37.0849 0 33.5016 0C30.1122 0 27.3221 1.80637 27.03 4.1018H22.3529V3.1552L0 3.1552V5.84446L22.353 5.84446V4.89798H27.0301C27.3223 7.19352 30.1122 9 33.5016 9ZM21.4898 5.04839L0.863293 5.04839V3.95161L21.4898 3.95161V5.04839ZM27.8662 4.49995C27.8662 2.45778 30.3944 0.796403 33.5017 0.796403C36.6091 0.796403 39.1372 2.45778 39.1372 4.49995C39.1372 6.54222 36.6091 8.2037 33.5017 8.2037C30.3944 8.2037 27.8662 6.54222 27.8662 4.49995Z"
                fill="#DCCA87"
              />
            </svg>
            <h1 className="text-customYellow text-4xl py-3 xl:text-6xl">
              Find Us
            </h1>
            <p className="text-gray-400 font-roboto py-4">
              123 Elegance Avenue Prestige Heights Gourmetville, Chandigarh
            </p>
            <div className="py-8">
              <h3 className="text-customYellow xl:text-xl">Opening Hours</h3>
              <p className="text-gray-400 font-roboto py-2">
                Mon - Fri: 10:00 am - 02:00 am
              </p>
              <p className="text-gray-400 font-roboto py-2">
                Sat - Sun: 10:00 am - 03:00 am
              </p>
            </div>
            <button className="w-[139px] h-[46px] bg-customYellow border-2 border-customYellow font-semibold hover:bg-black hover:text-customYellow">
              <a href="https://www.google.com/maps/" target="blank">
                Visit Us
              </a>
            </button>
          </div>
        </div>
        <div className="FindUsImg md:w-1/2 xl:w-1/2">
          <img src={FindImg} alt="" className="w-[400px]" />
        </div>
      </div>
    </div>
  );
}

export default FindUs;
