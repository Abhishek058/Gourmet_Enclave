import React from "react";
import logo from "../assets/Logo.png";

function NewsLetter() {
  return (
    <div>
      <img src={logo} alt="Logo" className="py-4 absolute left-10 w-[95px]" />
      <div className="m-6 py-24 bg-[#0d0d0d] flex flex-col items-center justify-center border-2 border-customYellow">
        <h2 className="text-white text-xl xl:text-3xl">Newsletter</h2>
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
        <h1 className="text-customYellow text-2xl md:text-5xl xl:text-6xl py-6">
          Subscribe To Our Newsletter
        </h1>
        <p className="text-gray-400 font-roboto py-6">
          And never miss latest Updates!
        </p>
        <div className="flex gap-x-4">
          <input
            type="email"
            className="bg-transparent outline-none text-white border-2 pl-2 w-[80%] sm:w-[100px] xl:w-[400px]"
            placeholder="Email...."
          />
          <button className="w-[100px] h-[46px]  bg-customYellow border-2 border-customYellow font-semibold hover:bg-black hover:text-customYellow xl:h-[60px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
