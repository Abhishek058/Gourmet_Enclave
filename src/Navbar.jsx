import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [showPages, setShowPages] = useState(false);
  const [showBlog, setShowBlog] = useState(false);

  const items = [
    { id: 1, text: "HOME", link: "", arrow: false },
    { id: 2, text: "PAGES", arrow: true },
    { id: 3, text: "CONTACT US", link: "", arrow: false },
    { id: 4, text: "BLOG", arrow: true },
  ];

  const items2 = [
    { text: "About Us", link: "" },
    { text: "Services", link: "" },
    { text: "Team", link: "" },
    { text: "FAQ?", link: "" },
  ];

  const items3 = [
    { text: "BLOG 1", link: "" },
    { text: "BLOG 2", link: "" },
    { text: "BLOG 3", link: "" }
  ];

  return (
    <div className="navbar flex sticky top-0 h-24 bg-black items-center justify-center">
      <h1 className="text-white absolute left-7 text-5xl">Gourmet</h1>
      <div className="nav-links text-customYellow flex">
        {items.map((item) => (
          <li
            className="list-none font-roboto p-4 flex items-center"
            key={item.id}
            onClick={() => {
              if (item.text === "PAGES") {
                if (showBlog) {
                  setShowBlog(!showBlog);
                }
                setShowPages(!showPages);
              }
              if (item.text === "BLOG") {
                if (showPages) {
                  setShowPages(!showPages);
                }
                setShowBlog(!showBlog);
              }
            }}
          >
            <a href={item.link} className="font-roboto hover:cursor-pointer">
              {item.text}
            </a>
            {item.arrow ? <IoIosArrowDown className="ml-1" /> : null}
          </li>
        ))}
      </div>
      <div className="search bg-transparent hidden flex items-center absolute right-10 border-b">
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
      <div
        className={`pages-div bg-black absolute top-24 ml-[-80px] w-40 h-48 ${
          showPages ? "visible" : "invisible"
        }`}
      >
        {items2.map((item) => (
          <li className="list-none text-customYellow p-3 ml-5" key={item.text}>
            <a href={item.link} className="hover:cursor-pointer">
              {item.text}
            </a>
          </li>
        ))}
      </div>
      <div
        className={`pages-div bg-black absolute top-24 ml-[380px] w-40 h-48 ${
          showBlog ? "visible" : "invisible"
        }`}
      >
        {items3.map((item) => (
          <li className="list-none text-customYellow p-3 ml-5" key={item.text}>
            <a href={item.link} className="hover:cursor-pointer">
              {item.text}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
