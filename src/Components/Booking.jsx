import { Link, useNavigate } from "react-router-dom";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import logo from "../assets/Logo.png";
import React, { useState } from "react";
import axios from "axios";

function Booking() {
  const time = [
    { slot: "Select time slot:" },
    { slot: "10:00 AM - 11:00 AM" },
    { slot: "11:00 AM - 12:00 PM" },
    { slot: "12:00 PM - 01:00 PM" },
    { slot: "01:00 PM - 02:00 PM" },
    { slot: "02:00 PM - 03:00 PM" },
    { slot: "03:00 PM - 04:00 PM" },
    { slot: "04:00 PM - 05:00 PM" },
    { slot: "05:00 PM - 06:00 PM" },
    { slot: "06:00 PM - 07:00 PM" },
    { slot: "07:00 PM - 08:00 PM" },
    { slot: "08:00 PM - 09:00 PM" },
  ];

  const [personCount, setPersonCount] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSaveOrder = () => {
    const data = {
      personCount,
      date,
      timeSlot,
      phone,
    };
    axios
      .post("http://localhost:5432/orders", data)
      .then((response) => {
        navigate("/");
        document.getElementById(
          "mybooking"
        ).innerHTML = `Your Booking is for ${date} for ${personCount} person for timeSlot: ${timeSlot},
        You can find your Booking by your phone number: ${phone} Your Booking Id is: ${response.data._id}`;
        setDate("");
        setPersonCount("");
        setPhone("");
        setTimeSlot("");
      })
      .catch((error) => {
        alert("An error occured, while creating");
        console.log(error);
      });
  };

  return (
    <div>
      <img src={logo} alt="Logo" className="py-4 absolute left-10 w-[65px]" />
      <div className="m-6 py-24 bg-[#0d0d0d] flex flex-col items-center justify-center border-2 border-customYellow">
        <h2 className="text-white text-2xl xl:text-3xl">Reservation</h2>
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
        <h1 className="text-customYellow text-4xl md:text-5xl xl:text-6xl py-4">
          Book A Table
        </h1>
        <div className="flex flex-col xl:flex-row gap-x-14">
          <input
            type="number"
            name="Person"
            value={personCount}
            placeholder="No. of people"
            required
            onChange={(e) => setPersonCount(e.target.value)}
            min="1"
            max="10"
            className="w-[300px] h-[50px] bg-transparent text-gray-400 text-xl outline-none border-2 border-customYellow my-6 pl-4"
          />
          <input
            type="text"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="DD-MM-YYYY"
            className="w-[300px] h-[50px] bg-transparent text-gray-400 text-xl outline-none border-2 border-customYellow my-6 pl-4"
          />

          <select
            value={timeSlot}
            onChange={(e) => {
              setTimeSlot(e.target.value);
            }}
            className="w-[300px] h-[50px] bg-transparent text-gray-400 text-xl outline-none border-2 border-customYellow my-6 pl-4"
          >
            {time.map((item, index) => {
              return (
                <option className="bg-black border-none text-xl" key={index}>
                  {item.slot}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex gap-x-4 xs:flex-col py-10">
          <input
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="bg-transparent text-gray-400 text-xl outline-none border-2 border-customYellow pl-2"
          />
          <button
            className="w-[70px] bg-customYellow font-semibold"
            onClick={handleSaveOrder}
          >
            Book
          </button>
        </div>
        <div className="flex">
          <p className="text-white pl-2">
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vTcm2a51TqyRRt96z4DXKGz_DytKkH9oMXtnuQ9bv6T6BaxseWEj1vHus_TAFSJlvqbMySG36jg2bKn/pub"
              target="blank"
            >
              Tems & Condition Applied
            </a>
          </p>
        </div>
        <p className="text-green-300 flex gap-x-2 text-xl items-center mt-6">
          <Link to={"/order/ShowBooking"}>check you booking</Link>
          <BsFillCalendarCheckFill />
        </p>
      </div>
      <div
        className="flex text-center justify-center text-blue-400 font-roboto text-lg"
        id="mybooking"
      ></div>
    </div>
  );
}

export default Booking;
