import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ShowBooking() {
  const [bookingId, setBookingId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5432/orders");
  });

  const handleCheckButtonClick = () => {
    if (bookingId !== "" && phoneNumber !== "") {
      document.getElementById("checkButton").click();
    }
  };

  return (
    <div className="bookingPage h-screen flex items-center justify-center blur-bg w-full">
      <div className=" bg-black absolute opacity-40 w-2/3 h-2/3 rounded-3xl"></div>
      <div className="text-white absolute flex flex-col items-center blur-bg w-full">
        <h1 className="pb-10 text-center text-customYellow text-2xl font-sans font-bold">
          Check your <br /> Bookings here
        </h1>
        <div className="flex flex-col items-center py-3 w-full text-left">
          <label className="py-2 text-xl font-semibold">Booking Id</label>
          <input
            type="text"
            required
            className="outline-none p-2 border-2 w-[50%] border-white rounded-md font-semibold text-customYellow bg-transparent"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center py-3 w-full text-left">
          <label className="py-2 text-xl font-semibold">Phone Number</label>
          <input
            type="number"
            required
            className="outline-none p-2 border-2 w-[50%] border-white rounded-md font-semibold text-customYellow bg-transparent"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button
          className="bg-black w-1/4 p-2 m-5"
          onClick={handleCheckButtonClick}
        >
          <Link to={`/order/YourBooking/${bookingId}`} id="checkButton"></Link>
          Check
        </button>
      </div>
    </div>
  );
}

export default ShowBooking;
