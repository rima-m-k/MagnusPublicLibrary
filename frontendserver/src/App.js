import "./App.css";
// import {  Route, Routes } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import AssistantRoutes from "./routes/AssistantRoutes";
import { Route, Routes } from "react-router-dom";
// import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <div className="App">

   <Routes >  
<Route path="/*" element={<UserRoutes />} />  
<Route path="/admin/*" element={<AdminRoutes />} />  
<Route path="/asst/*" element={<AssistantRoutes />} />  
      
        </Routes>
    </div>
  );
}

export default App;
