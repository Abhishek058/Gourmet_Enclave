import React from "react";
import knife from "../assets/knife.png";

function About() {
  return (
    <div className="about min-h-screen flex text-white pt-32">
      <div className="AboutMain w-full flex flex-col justify-center items-center">
        <div className="aboutDiv w-full p-7 flex flex-col items-end">
          <h1 className="about-h1 text-customYellow text-4xl">About Us</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="9"
            viewBox="0 0 40 9"
            fill="none"
          >
            <path
              d="M6.49841 0C2.91507 0 0 2.01871 0 4.50005C0 6.98139 2.91507 9 6.49841 9C9.8878 9 12.6779 7.19363 12.97 4.8982H17.6471V5.8448L40 5.8448V3.15554L17.647 3.15554V4.10202H12.9699C12.6777 1.80648 9.8878 0 6.49841 0ZM18.5102 3.95161L39.1367 3.95161V5.04839H18.5102V3.95161ZM12.1338 4.50005C12.1338 6.54222 9.60563 8.2036 6.49829 8.2036C3.39095 8.2036 0.862811 6.54222 0.862811 4.50005C0.862811 2.45778 3.39095 0.796295 6.49829 0.796295C9.60563 0.796295 12.1338 2.45778 12.1338 4.50005Z"
              fill="#DCCA87"
            />
          </svg>

          <p className="about-p font-roboto text-right text-gray-400 mt-2">
            Explore the essence of our culinary passion, We're dedicated to
            crafting unique flavors and unforgettable dining experiences. Join
            our culinary journey today.
          </p>
          <button className="about-btn bg-customYellow w-[129px] h-[36px] text-black font-bold mt-7 hover:bg-black hover:text-customYellow hover:border-2 border-customYellow">
            <a href="/">Know More</a>
          </button>
        </div>
        <div className="absolte knifeDiv flex">
          <img className="w-[95%] p-10" src={knife} alt="knife" />
        </div>
        <div className="historyDiv w-full p-7 flex flex-col items-start">
          <h1 className="about-h1 text-customYellow text-4xl">Our History</h1>
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

          <p className="about-p font-roboto text-left text-gray-400 mt-2">
            Our journey is steeped in tradition, evolving with time to offer
            exceptional flavors and dining experiences. Explore our flavorful
            heritage.
          </p>
          <button className="about-btn bg-customYellow w-[129px] h-[36px] text-black font-bold mt-7 hover:bg-black hover:text-customYellow hover:border-2 border-customYellow">
            <a href="/">Know More</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
