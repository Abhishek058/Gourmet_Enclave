import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ErrorPage from "./ErrorPage";

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
    <>
      {order ? <ErrorPage /> : <div>Order ID: {order._id}</div>}
    </>
  );
}

export default YourBooking;
