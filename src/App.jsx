import React from "react";
import Home from "./Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ShowBooking from "./Components/ShowBooking";
import YourBooking from "./Components/YourBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/order/ShowBooking" element={<ShowBooking />} />
        <Route path="/order/YourBooking/:id" element={<YourBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
