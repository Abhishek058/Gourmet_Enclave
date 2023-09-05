import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [showPages, setShowPages] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showHiddenNavSubList, setShowHiddenNavSubList] = useState(false);
  const [HiddenNav, setHiddenNav] = useState(false);

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
    { text: "BLOG 3", link: "" },
  ];

  return (
    <>
      <div className="navbar sticky top-0 w-full flex h-20 bg-black items-center justify-center z-[1000]">
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
        <div className="search bg-transparent hidden flex items-center absolute right-10 border-b border-gray-500">
          <input
            className="input-text text-gray-300 outline-none bg-transparent p-2"
            type="text"
            placeholder="search website"
          />
          <FaSearch className="text-white" />
        </div>
        <div
          className={`pages-div bg-black absolute top-20 ml-[-80px] w-40 h-48 ${
            showPages
              ? "visible opacity-100 transition-opacity duration-500"
              : "invisible opacity-0"
          }`}
        >
          {items2.map((item) => (
            <li
              className="page list-none text-customYellow p-3 ml-5 flex items-center"
              key={item.text}
            >
              <div className="blogline w-6 border-2 border-customYellow hidden"></div>
              &nbsp;
              <a href={item.link} className="hover:cursor-pointer">
                {item.text}
              </a>
            </li>
          ))}
        </div>
        <div
          className={`pages-div bg-black absolute top-20 ml-[380px] w-40 h-48 ${
            showBlog
              ? "visible opacity-100 transition-opacity duration-500"
              : "invisible opacity-0"
          }`}
        >
          {items3.map((item) => (
            <li
              className="blogli list-none text-customYellow p-3 ml-5 flex items-center"
              key={item.text}
            >
              <div className="blogline w-6 border-2 border-customYellow hidden"></div>
              &nbsp;
              <a href={item.link} className="hover:cursor-pointer">
                {item.text}
              </a>
            </li>
          ))}
        </div>
        <div className="hamBars absolute right-7">
          <FaBars
            className="text-white text-2xl"
            onClick={() => {
              setHiddenNav(!HiddenNav);
            }}
          />
        </div>
      </div>
      <div
        className={`hiddenav w-full h-screen bg-black flex flex-col items-center justify-items-center fixed top-0 z-[1100] ${
          HiddenNav ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500`}
      >
        <h1 className="text-white absolute top-7 left-7 text-5xl">Gourmet</h1>
        <div
          className="hiddenNavBars absolute right-7 top-10"
          onClick={() => {
            setHiddenNav(!HiddenNav);
          }}
        >
          <FaTimes className="text-white text-2xl" />
        </div>
        <div className="text-white w-full h-screen flex items-center">
          <ul className="hiddenNavList ml-10 text-2xl font-bold">
            <li className="transition delay-100 hover:text-customYellow">
              <a href="">HOME</a>
            </li>
            <li className="transition delay-100 hover:text-customYellow">
              <p
                className="hover:cursor-pointer flex items-center"
                onClick={() => {
                  setShowHiddenNavSubList(!showHiddenNavSubList);
                }}
              >
                PAGES
                <IoIosArrowDown className="ml-1" />
              </p>

              <div
                className={`text-lg ${
                  showHiddenNavSubList ? "block" : "hidden"
                }`}
                id="hiddenNavSubList"
              >
                {items2.map((item) => (
                  <span
                    className="text-gray-500 ml-10 flex items-center"
                    key={item.text}
                  >
                    <a
                      href={item.link}
                      className="transition delay-100 hover:text-customYellow"
                    >
                      {item.text}
                    </a>
                  </span>
                ))}
              </div>
            </li>
            <li className="transition delay-100 hover:text-customYellow">
              <a href="">CONTACT US</a>
            </li>
            <li className="transition delay-100 hover:text-customYellow">
              <a href="">BLOG</a>
            </li>
          </ul>
        </div>
        <div className="bg-transparent absolute top-40 flex items-center border-b border-gray-500">
          <input
            className="input-text text-gray-300 outline-none bg-transparent p-2"
            type="text"
            placeholder="search website"
          />
          <FaSearch className="text-white" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
