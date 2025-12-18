import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AppointmentDetail from "../pages/AppointmentDetail";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointment/:id" element={<AppointmentDetail />} />
    </Routes>
  );
}
