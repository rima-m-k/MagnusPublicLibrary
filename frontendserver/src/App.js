import "./App.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./routes/CustomRoutes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CustomRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
