import React from "react";
import cust1 from "../assets/customer1.png";
import cust2 from "../assets/customer2.png";
import cust3 from "../assets/customer3.png";
import cust4 from "../assets/customer4.png";

function Testimony() {
  const customer = [
    {
      name: "Wade Warren",
      img: cust1,
      review:
        "Exceptional dining experience! From the warm ambiance to the mouthwatering dishes, our visit was unforgettable. The staff's attentiveness and the chef's creativity left us craving for more.",
      designation: "Sommelier",
    },
    {
      name: "Jane Cooper",
      img: cust2,
      review:
        "A hidden gem! The flavors in every bite were exquisite. The menu offered a delightful variety, and the service was top-notch. We'll definitely return for another culinary adventure.",
      designation: "Chef",
    },
    {
      name: "Robert Fox",
      img: cust3,
      review:
        "Outstanding! The fusion of flavors and presentation was impressive. The wine pairings were perfect, and the staff's knowledge of the menu made our evening truly special.",
      designation: "Chef",
    },
    {
      name: "Brooklyn Simmons",
      img: cust4,
      review:
        "Five-star dining! Impeccable service, a menu that catered to all tastes, and a cozy atmosphere. We celebrated a special occasion here, and it couldn't have been more memorable",
      designation: "Caterer",
    },
  ];
  return (
    <div className="flex items-center bg-[#0d0d0d] justify-center py-16">
      <div className="TestimonyMain flex flex-col items-center justify-center p-10">
        <h2 className="text-white text-2xl xl:text-3xl">Testimony</h2>
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
        <h1 className="text-customYellow text-4xl py-4 xl:text-5xl">
          Happy Customers
        </h1>
        <div className="peopleMain py-5 flex flex-wrap">
          {customer.map((item, index) => {
            return (
              <div
                key={index}
                className="peopleCard flex py-6 sm:w-1/2 xl:w-1/2"
              >
                <div>
                  <img
                    src={item.img}
                    alt="Customer"
                    className="w-[520px] xl:w-[300px]"
                  />
                  <svg
                    className="relative -top-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    height="41"
                    viewBox="0 0 47 41"
                    fill="none"
                  >
                    <path
                      d="M12.9137 23.3571C15.3163 23.3571 17.2183 24.1592 18.6198 25.7632C20.1214 27.2669 20.8722 29.2719 20.8722 31.7782C20.8722 34.485 19.9712 36.6404 18.1693 38.2444C16.4675 39.7481 14.115 40.5 11.1118 40.5C7.60809 40.5 4.85517 39.1466 2.85304 36.4399C0.951012 33.7331 0 29.8734 0 24.8609C0 20.3496 1.00107 16.1892 3.00319 12.3797C5.00533 8.46992 8.00852 4.56015 12.0128 0.650374C12.1129 0.550125 12.263 0.5 12.4633 0.5C12.7636 0.5 13.0138 0.650374 13.2141 0.951122C13.4143 1.25188 13.4143 1.5025 13.2141 1.703C13.4143 1.5025 13.4143 1.25188 13.2141 0.951122C8.30884 6.71553 5.85623 12.6303 5.85623 19.4474C5.85623 22.2544 6.35676 24.3095 7.35783 25.6128C8.25879 24.109 10.1108 23.3571 12.9137 23.3571ZM39.0415 23.3571C41.4441 23.3571 43.3461 24.1592 44.7476 25.7632C46.2492 27.2669 47 29.2719 47 31.7782C47 34.485 46.099 36.6404 44.2971 38.2444C42.5953 39.7481 40.2428 40.5 37.2396 40.5C33.7359 40.5 30.983 39.1466 28.9808 36.4399C27.0788 33.7331 26.1278 29.8734 26.1278 24.8609C26.1278 20.3496 27.1289 16.1892 29.131 12.3797C31.1331 8.46992 34.1363 4.56015 38.1406 0.650374C38.2407 0.550125 38.3908 0.5 38.5911 0.5C38.8914 0.5 39.1416 0.650374 39.3419 0.951122C39.5421 1.25188 39.5421 1.5025 39.3419 1.703C39.5421 1.5025 39.5421 1.25188 39.3419 0.951122C34.4366 6.71553 31.984 12.6303 31.984 19.4474C31.984 22.2544 32.4846 24.3095 33.4856 25.6128C34.3866 24.109 36.2386 23.3571 39.0415 23.3571Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="px-7">
                  <i>
                    <p className="text-gray-400 text-sm font-roboto  xl:text-[16px]">
                      {item.review}
                    </p>
                  </i>
                  <h2 className="text-customYellow text-3xl py-2 xl:text-4xl">
                    {item.name}
                  </h2>
                  <h3 className="text-gray-400 font-roboto text-sm xl:text-lg">
                    {item.designation}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimony;
