import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectRoute;
