import React from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const items = [
    { id: 1, text: "HOME", link: "", arrow: false },
    { id: 2, text: "PAGES", link: "", arrow: true },
    { id: 3, text: "CONTACT US", link: "", arrow: false },
    { id: 4, text: "BLOG", link: "", arrow: true },
  ];

  return (
    <div className="navbar flex sticky top-0 h-24 bg-black items-center justify-center">
      <h1 className="text-white absolute left-7 text-5xl">Gourmet</h1>
      <div className="nav-links text-customYellow flex">
        {items.map((item) => (
          <li
            className="list-none font-roboto p-4 flex items-center"
            key={item.id}
          >
            <a href={item.link} className="hover:cursor-pointer">
              {item.text}
            </a>
            {item.arrow ? <IoIosArrowDown className="ml-1" /> : null}
          </li>
        ))}
      </div>
      <div className="search bg-transparent flex items-center absolute right-10 border-b">
        <input
          className="input-text text-gray-300 outline-none bg-transparent p-2"
          type="text"
          placeholder="search website"
        />
        <FaSearch className="text-white" />
      </div>
      <div className="hamBars absolute right-7">
        <FaBars className="text-white text-2xl" />
      </div>
    </div>
  );
}

export default Navbar;
