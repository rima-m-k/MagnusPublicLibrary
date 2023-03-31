import React from 'react'
import { Route, Routes } from "react-router-dom";
import AddEmployee from "../pages/admin/AddEmployee";
import Dashboard from "../pages/admin/Dashboard";
import StaffLogin from "../pages/admin/StaffLogin";
import ErrorPage from '../pages/ErrorPage';

function AdminRoutes() {
  return (
    <div>
    <Routes>
      
      <Route path="/staffPortal" element={<StaffLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addEmployee" element={<AddEmployee />} />


      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </div>
  )
}
export default AdminRoutes
