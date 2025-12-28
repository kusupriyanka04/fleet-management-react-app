import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav>
      <h3>Fleet Mangement - Admin</h3>
      <button onClick={handleLogOut}>LogOut</button>
    </nav>
  );
};

export default Navbar;
