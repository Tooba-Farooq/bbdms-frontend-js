import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup and Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    license: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate failed login
    if (credentials.license !== "123456" || credentials.password !== "test") {
      setError("Invalid username or account not approved.");
    } else {
      console.log("Login data submitted:", credentials);
      setError("");
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Welcome back</h2>
      <p className="login-subtitle">Enter your credentials to continue</p>

      {error && <div className="error-alert">{error}</div>}

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="license"
          placeholder="Hospital License"
          value={credentials.license}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>

      <div className="login-footer">
        Not registered yet? <Link to="/signup">Create account</Link>
      </div>
    </div>
  );
};

export default Login;
