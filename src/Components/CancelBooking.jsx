import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function CancelBooking() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5432/orders/${id}`)
      .then(() => {
        alert("Your booking has been Cancelled");
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center text-white w-full h-screen">
      <img src={logo} alt="logo" className="w-[150px] m-6" />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold py-10 text-center">
          Are you sure you want to cancel
        </h1>
        <div className="flex gap-x-10">
          <button
            type="submit"
            onClick={handleDelete}
            className="w-[150px] h-[50px] bg-red-600 font-semibold rounded-xl hover:bg-red-500 hover:text-black"
          >
            Yes
          </button>
          <button
            type="submit"
            onClick={handleCancel}
            className="w-[150px] h-[50px] bg-green-600 font-semibold rounded-xl hover:bg-green-500 hover:text-black"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default CancelBooking;
