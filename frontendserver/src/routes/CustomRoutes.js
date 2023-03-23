import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEmployee from "../pages/admin/AddEmployee";
import Dashboard from "../pages/admin/Dashboard";
import StaffLogin from "../pages/admin/StaffLogin";
import Signup from "../pages/user/Signup";
import LandingPage from "../pages/user/LandingPage";
import Login from "../pages/user/Login";
import ErrorPage from "../pages/ErrorPage";

function CustomRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/staffPortal" element={<StaffLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/addEmployee" element={<AddEmployee />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default CustomRoutes;
