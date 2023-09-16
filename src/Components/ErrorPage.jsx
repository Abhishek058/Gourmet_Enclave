import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="errorPage h-screen">
      <div className="">
        <h1 className="fixed top-56 left-24 text-5xl text-white font-mono">ORDER NOT FOUND</h1>
      </div>
      <div className="fixed flex justify-center items-center w-[150px] h-[46px] bottom-32 left-56 rounded-xl bg-customYellow text-black font-bold text-lg">
        <Link to={"/"} className="cursor-pointer font-sans">Go back</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
