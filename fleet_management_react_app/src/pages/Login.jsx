import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);

  const { Login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleLogin = () => {
    if(email === "admin@gmail.com" && password === "admin1234"){
        alert("Login Success");
        Login();
        navigate("/admin");
    }
    else{
        alert("Wrong email or password");
    }
  }

  return (
    <div>
      <input
        type="email"
        placeholder="Enter Email"
        ref={emailRef}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
