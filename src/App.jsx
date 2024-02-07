import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Frontpage from "./pages/Frontpage/Frontpage";
import { Layout } from "./layout/Layout";
import { HotelPage } from "./pages/Hotelpage/Hotelpage";
import { RoomPage } from "./pages/Roompage/RoomPage";
import { ReservationPage } from "./pages/Reservationpage/ReservationPage";
import { LoginPage } from "./pages/Loginpage/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Frontpage />} />
      <Route path="/hotels" element={<HotelPage />} />
      <Route path="/rooms" element={<RoomPage />} />
      <Route path="/reservation" element={<ReservationPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Route>
    </Routes>

  );
}

export default App;
