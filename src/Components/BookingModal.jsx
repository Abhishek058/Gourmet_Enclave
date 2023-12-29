import React from "react";
import { Link } from "react-router-dom";
function BookingModal({ order }) {
  const booking = [
    { id: `${order._id}`, name: "Booking Id: " },
    { id: `${order.phone}`, name: "Phone Number: " },
    { id: `${order.personCount}`, name: "Number Of Seats: " },
    { id: `${order.date}`, name: "Booking On: " },
    { id: `${order.timeSlot}`, name: "Time Slot: " },
  ];
  return (
    <div className="text-white flex flex-col items-center justify-center">
      <h1 className="py-8 text-6xl font-bold">Order Details</h1>
      <div className="flex flex-col p-4 border-2 w-[90%]">
        {booking.map((item, index) => (
          <div className="flex justify-between items-center p-2" key={index}>
            <h1 className="text-lg font-bold">{item.name}</h1>
            <p className="font-roboto">{item.id}</p>
          </div>
        ))}
      </div>
      <button className="m-8 px-4 py-3 bg-red-600 font-semibold rounded-xl hover:bg-red-500 hover:text-black">
        <Link to={`/order/Cancel/${order._id}`}>Cancel Booking</Link>
      </button>
    </div>
  );
}

export default BookingModal;
