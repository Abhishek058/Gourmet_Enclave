import React from "react";
import chefImg from "../assets/chefImg.png";

function ChefSection() {
  return (
    <div className="chefMain flex items-center justify-center text-white">
      <div className="chefCont flex flex-col p-5">
        <div className="chefImage flex items-center justify-center">
          <img src={chefImg} alt="chef"/>
        </div>
        <div className="chefWord flex flex-col justify-center py-7">
          <h3 className="text-2xl font-semibold">Chef's Word</h3>
          <span>
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
          </span>
          <h1 className="text-customYellow text-4xl py-2">
            What We Believe In
          </h1>
          <i>
            <p className="py-12 font-roboto text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="41"
                viewBox="0 0 47 41"
                fill="none"
              >
                <path
                  d="M12.9137 23.3571C15.3163 23.3571 17.2183 24.1592 18.6198 25.7632C20.1214 27.2669 20.8722 29.2719 20.8722 31.7782C20.8722 34.485 19.9712 36.6404 18.1693 38.2444C16.4675 39.7481 14.115 40.5 11.1118 40.5C7.60809 40.5 4.85517 39.1466 2.85304 36.4399C0.951012 33.7331 0 29.8734 0 24.8609C0 20.3496 1.00107 16.1892 3.00319 12.3797C5.00533 8.46992 8.00852 4.56015 12.0128 0.650374C12.1129 0.550125 12.263 0.5 12.4633 0.5C12.7636 0.5 13.0138 0.650374 13.2141 0.951122C13.4143 1.25188 13.4143 1.5025 13.2141 1.703C8.30884 6.71553 5.85623 12.6303 5.85623 19.4474C5.85623 22.2544 6.35676 24.3095 7.35783 25.6128C8.25879 24.109 10.1108 23.3571 12.9137 23.3571ZM39.0415 23.3571C41.4441 23.3571 43.3461 24.1592 44.7476 25.7632C46.2492 27.2669 47 29.2719 47 31.7782C47 34.485 46.099 36.6404 44.2971 38.2444C42.5953 39.7481 40.2428 40.5 37.2396 40.5C33.7359 40.5 30.983 39.1466 28.9808 36.4399C27.0788 33.7331 26.1278 29.8734 26.1278 24.8609C26.1278 20.3496 27.1289 16.1892 29.131 12.3797C31.1331 8.46992 34.1363 4.56015 38.1406 0.650374C38.2407 0.550125 38.3908 0.5 38.5911 0.5C38.8914 0.5 39.1416 0.650374 39.3419 0.951122C39.5421 1.25188 39.5421 1.5025 39.3419 1.703C34.4366 6.71553 31.984 12.6303 31.984 19.4474C31.984 22.2544 32.4846 24.3095 33.4856 25.6128C34.3866 24.109 36.2386 23.3571 39.0415 23.3571Z"
                  fill="white"
                />
              </svg>
              Our dedicated team of chefs is at the forefront of crafting
              exquisite dishes that elevate your dining experience. With years
              of expertise and an unwavering commitment to quality, they infuse
              each creation with innovation and passion. From savory starters to
              indulgent desserts, our chefs blend global influences into our
              menu, offering a unique fusion of flavors.
            </p>
          </i>
          <h3 className="text-3xl text-customYellow py-2">Kevin Luo</h3>
          <p className="text-gray-400 font-roboto">Chef & Founder</p>
          <h2 className="text-5xl py-12">Kevin Luo</h2>
        </div>
      </div>
    </div>
  );
}

export default ChefSection;
