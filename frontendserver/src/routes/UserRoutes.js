import React from 'react'
import { Route, Routes } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage';
import LandingPage from '../pages/user/LandingPage';
import Login from '../pages/user/Login';
import Signup from '../pages/user/Signup';

function UserRoutes() {
  return (
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />


    <Route path="*" element={<ErrorPage />} />
  </Routes>
  )
}
export default UserRoutes