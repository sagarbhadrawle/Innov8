import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import HomePage from "./HomePage";
import InType from "./InType";
import InterviewPage from "./InterviewPage";
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
      <Route path="/tech" element={<InterviewPage />} />
    </Routes>
  );
};

export default AllRoutes;
