import React from "react";
import DrinkImage from "../assets/drinks.png";

function Drinks() {
  return (
    <div className="DrinksMain min-h-screen flex flex-col justify-center items-center text-white bg-[#0c0c0c] pt-24">
      <h3 className="text-2xl font-bold m-2">Menu that fits you palatte </h3>
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
      <h1 className="text-5xl font-bold mt-3 mb-6 text-customYellow">
        Today’s Special
      </h1>
      <div className="DrinksMenu flex flex-col justify-center items-center">
        <div className="wineMenu w-full flex flex-col items-center">
          <h1 className="text-4xl font-bold m-3">Wine & Beer</h1>
          <div className="w-full p-5">
            <div className="w-full mt-7 mb-7">
              <div className="flex justify-start">
                <h1 className="text-xl text-customYellow">
                  Chapel Hill Shiraz
                </h1>
                <div className="border-[1px] h-0 w-[50%] m-4"></div>
                <p className="text-xl">$56</p>
              </div>
              <div className="text-gray-400 flex items-start">
                <p className="font-roboto">AU | Bottle</p>
              </div>
            </div>
            <div className="w-full mt-7 mb-7">
              <div className="flex justify-start">
                <h1 className="text-xl text-customYellow">Catena Malbec</h1>
                <div className="border-[1px] h-0 w-[50%] m-4"></div>
                <p className="text-xl">$59</p>
              </div>
              <div className="text-gray-400 flex items-start">
                <p className="font-roboto">AR | Bottle</p>
              </div>
            </div>
            <div className="w-full mt-7 mb-7">
              <div className="flex justify-start">
                <h1 className="text-xl text-customYellow">La Vieille Rosé</h1>
                <div className="border-[1px] h-0  w-[50%] m-4"></div>
                <p className="text-xl">$44</p>
              </div>
              <div className="w-full text-gray-400 flex items-start">
                <p className="font-roboto">FR | 750ml</p>
              </div>
            </div>
            <div className="w-full mt-7 mb-7">
              <div className="flex justify-start">
                <h1 className="text-xl text-customYellow">Rhino Pale Ale</h1>
                <div className="border-[1px] h-0  w-[50%] m-4"></div>
                <p className="text-xl">$31</p>
              </div>
              <div className="w-full text-gray-400 flex items-start">
                <p className="font-roboto">CA | 750ml</p>
              </div>
            </div>
            <div className="w-full mt-7 mb-7">
              <div className="flex justify-start">
                <h1 className="text-xl text-customYellow">Irish Guinness</h1>
                <div className="border-[1px] h-0 w-[50%] m-4"></div>
                <p className="text-xl">$26</p>
              </div>
              <div className="w-full text-gray-400 flex items-start">
                <p className="font-roboto">IE | 750ml</p>
              </div>
            </div>
          </div>
        </div>
        <div className="drinkImg">
          <img src={DrinkImage} alt="" />
        </div>
        <div className="wineMenu flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold m-3">Cocktails</h1>
          <div className="w-full p-5">
            <div className="w-full mt-7 mb-7">
              <div className="flex justify-start">
                <h1 className="text-xl text-customYellow">Aperol Spritz</h1>
                <div className="border-[1px] h-0 w-[50%] m-4"></div>
                <p className="text-xl">$20</p>
              </div>
              <div className="w-full text-gray-400 flex items-start">
                <p className="font-roboto">
                  Aperol | Villa Marchesi prosecco | soda | 30ml
                </p>
              </div>
            </div>
            <div className="w-full justify-start mt-7 mb-7">
              <div className="flex justify-start">
                <h1 className="text-xl text-customYellow">Dark 'N' Stormy</h1>
                <div className="border-[1px] h-0 w-[50%] m-4"></div>
                <p className="text-xl">$16</p>
              </div>
              <div className="w-full text-gray-400 flex items-start">
                <p className="font-roboto">
                  Dark rum | Ginger beer | Slice of lime.
                </p>
              </div>
            </div>
            <div className="w-full mt-7 mb-7">
              <div className="flex justify-start">
                <h1 className="text-xl text-customYellow">Daiquiri</h1>
                <div className="border-[1px] h-0 w-[50%] m-4"></div>
                <p className="text-xl">$10</p>
              </div>
              <div className="w-full text-gray-400 flex items-start">
                <p className="font-roboto">Rum | Citrus juice | Sugar</p>
              </div>
            </div>
            <div className="w-full mt-7 mb-7">
              <div className="flex justify-start">
                <h1 className="text-xl text-customYellow">Old Fashioned</h1>
                <div className="border-[1px] h-0 w-[50%] m-4"></div>
                <p className="text-xl">$31</p>
              </div>
              <div className="w-full text-gray-400 flex items-start">
                <p className="font-roboto">
                  Bourbon | Brown sugar | Angostura Bitters
                </p>
              </div>
            </div>
            <div className="w-full justify-start mt-7 mb-7">
              <div className="flex justify-start">
                <h1 className="text-xl text-customYellow">Negroni</h1>
                <div className="border-[1px] h-0 w-[50%] m-4"></div>
                <p className="text-xl">$26</p>
              </div>
              <div className="w-full text-gray-400 flex items-start">
                <p className="font-roboto">
                  Gin | Sweet Vermouth | Campari | Orange garnish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="text-black bg-customYellow w-[159px] h-[46px] m-10 border-2 border-customYellow font-bold hover:bg-black hover:text-customYellow">
        View More
      </button>
    </div>
  );
}

export default Drinks;