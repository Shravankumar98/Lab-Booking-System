import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import "./index.css";
import TrainingList from "./pages/TrainingList";
import TrainingDetails from "./pages/TrainingDetails";
import MyBookings from "./pages/MyBookings";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <nav>
        <div>
          <Link to={"/"}>Lab Booking System</Link>
        </div>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/my-bookings"}>My Bookings</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<TrainingList />} />
        <Route path="/trainings/:id" element={<TrainingDetails />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
