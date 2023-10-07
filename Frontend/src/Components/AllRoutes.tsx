import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import InType from "./InType";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SelectType from "./SelectType";
import InterviewPage from "./InterviewPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/interview" element={<InType />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/type" element={<SelectType />} />
      <Route path="/tech" element={<InterviewPage/>}/>
    </Routes>
  );
};

export default AllRoutes;
