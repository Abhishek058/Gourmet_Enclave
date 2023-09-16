import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function YourBooking() {
  const [order, setOrder] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5432/orders/${id}`)
      .then((response) => {
        setOrder(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Order not found");
      });
  }, [id]);

  return (
    <div className="text-white">
      {order ? (
        <h1 className="text-white">Order not found</h1>
      ) : (
        <div>Order ID: {order._id}</div>
      )}
    </div>
  );
}

export default YourBooking;
