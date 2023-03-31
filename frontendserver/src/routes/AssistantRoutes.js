import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/assistant/dashboard";
import AddBook from "../pages/assistant/AddBook";
import ErrorPage from '../pages/ErrorPage';

function AssistantRoutes() {
  return (
    <div>
        
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addBook" element={<AddBook />} />


      <Route path="*" element={<ErrorPage />} />
    </Routes>
  
      
    </div>
  )
}

export default AssistantRoutes
