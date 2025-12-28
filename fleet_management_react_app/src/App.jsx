import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ProtectRoute from "./auth/ProtectRoute";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
    
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectRoute>
                <Admin />
              </ProtectRoute>
            }
          />
        </Routes>

    </>
  );
}

export default App;
