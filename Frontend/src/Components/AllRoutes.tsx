import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import InType from "./InType";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SelectType from "./SelectType";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/interview" element={<InType />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/type" element={<SelectType />} />
    </Routes>
  );
};

export default AllRoutes;
