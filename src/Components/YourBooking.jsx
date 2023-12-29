import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ErrorPage from "./ErrorPage";
import BookingModal from "./BookingModal";

function YourBooking() {
  const [order, setOrder] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://gourmet-enclave.onrender.com/orders/${id}`)
      .then((response) => {
        setOrder(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Order not found");
      });
  }, [id]);

  return <>{order ? <BookingModal order={order} /> : <ErrorPage />}</>;
}

export default YourBooking;
