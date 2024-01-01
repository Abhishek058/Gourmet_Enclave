import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ErrorPage from "./ErrorPage";
import BookingModal from "./BookingModal";

function YourBooking() {
  const [order, setOrder] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://gourmet-enclave.onrender.com/orders/${id}`)
      .then((response) => {
        setOrder(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setOrder(null);
      });
  }, [id]);

  return <>{order !== null ? <BookingModal order={order} /> : <ErrorPage />}</>;
}

export default YourBooking;
