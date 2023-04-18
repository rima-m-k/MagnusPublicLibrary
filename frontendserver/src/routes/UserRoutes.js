import React from 'react'
import { Route, Routes } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage';
import LandingPage from '../pages/user/LandingPage';
import Login from '../pages/user/Login';
import Signup from '../pages/user/Signup';
import ViewBook from '../pages/user/ViewBook';
import AllBooks from '../pages/user/AllBooks';
import UserProfile from '../pages/user/UserProfile';
import LibraryCardApplication from '../pages/user/LibraryCardApplication';

function UserRoutes() {
  return (
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/books/:id" element={<ViewBook />} />
    <Route path='/bookList' element={<AllBooks />} />
    <Route path='/profile' element={<UserProfile />} />
    <Route path='/LibraryCardApplication' element={<LibraryCardApplication />} />

    <Route path="*" element={<ErrorPage />} />
  </Routes>
  )
}
export default UserRoutes 