import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ErrorPage from "./ErrorPage";
import BookingModal from "./BookingModal";
import loader from "../assets/loader.gif";

function YourBooking() {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://gourmet-enclave.onrender.com/orders/${id}`)
      .then((response) => {
        setOrder(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Order not found");
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loader-div">
          <img src={loader} alt="Loading..." />
        </div>
      ) : order.length !== 0 ? (
        <BookingModal order={order} />
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default YourBooking;
