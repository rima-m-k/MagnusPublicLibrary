import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/assistant/dashboard";
import AddBook from "../pages/assistant/AddBook";
import AddAuthors from '../pages/assistant/AddAuthor';
import AddGenre from '../pages/assistant/AddGenre';
import ErrorPage from '../pages/ErrorPage';
import ViewAuthors from '../pages/assistant/ViewAuthors';
import ViewBooks from '../pages/assistant/ViewBooks';
import ViewGenre from '../pages/assistant/ViewGenre';


function AssistantRoutes() {
  return (
    <>
        
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addAuthor" element={<AddAuthors />} />
      <Route path="/addBook" element={<AddBook />} />
      <Route path="/addGenre" element={<AddGenre  />} />
      <Route path="/viewAuthors" element={<ViewAuthors/>} />
      <Route path="/viewBooks" element={<ViewBooks/>} />
      <Route path="/viewGenres" element={<ViewGenre/>} />


      <Route path="*" element={<ErrorPage />} />
    </Routes>
  
      
    </>
  )
}

export default AssistantRoutes

