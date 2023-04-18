import React from 'react'
import { Route, Routes } from "react-router-dom";
import AddEmployee from "../pages/admin/AddEmployee";
import Dashboard from "../pages/admin/Dashboard";
import StaffLogin from "../pages/admin/StaffLogin";
import ErrorPage from '../pages/ErrorPage';
import ShowGenre from '../pages/admin/ShowGenre';
import ShowBooks from '../pages/admin/ShowBooks';
import ShowAuthors from '../pages/admin/ShowAuthors';
import ReturnRenew from '../pages/admin/ReturnRenew';
import CheckOut from '../pages/admin/CheckOut';
import ViewEmployees from '../pages/admin/ViewEmployees';
import ViewUsers from '../pages/admin/ViewUsers';

function AdminRoutes() {
  return (
    <div>
    <Routes>
      
      <Route path="/staffPortal" element={<StaffLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addEmployee" element={<AddEmployee />} />
      <Route path="/viewGenre" element={<ShowGenre />} />
      <Route path="/viewAuthors" element={<ShowAuthors />} />
      <Route path="/viewBooks" element={<ShowBooks />} />
      <Route path="/returnRenew" element={<ReturnRenew />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/viewEmployees" element={<ViewEmployees />} />
      <Route path="/viewUsers" element={<ViewUsers />} />
      


      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </div>
  )
}
export default AdminRoutes
