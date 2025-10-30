import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // temporary — we’ll add real role logic later
    const role = prompt("Type your role (junior/senior)");
    if (role === "junior") navigate("/junior-dashboard");
    else if (role === "senior") navigate("/senior-dashboard");
    else alert("Invalid role!");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <label>Email</label>
      <input type="email" placeholder="example@gmail.com" />

      <label>Password</label>
      <input type="password" placeholder="********" />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
