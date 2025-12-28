import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ProtectRoute from "./auth/ProtectRoute";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
