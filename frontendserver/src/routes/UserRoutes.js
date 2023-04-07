import React from 'react'
import { Route, Routes } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage';
import LandingPage from '../pages/user/LandingPage';
import Login from '../pages/user/Login';
import Signup from '../pages/user/Signup';
import ViewBooks from '../pages/user/ViewBooks';
import AllBooks from '../pages/user/AllBooks';

function UserRoutes() {
  return (
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/books/:id" element={<ViewBooks />} />
    <Route path='/bookList' element={<AllBooks />} />

    <Route path="*" element={<ErrorPage />} />
  </Routes>
  )
}
export default UserRoutes 