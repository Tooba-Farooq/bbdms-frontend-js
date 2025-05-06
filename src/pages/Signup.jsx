import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Signup and login.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    hospitalName: "",
    license: "",
    city: "",
    province: "",
    postalCode: "",
    phone: "",
    email: "",
    hours: "",
    password: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setSuccess("Registration successful. You can now login.");
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Welcome</h2>
      <p className="signup-subtitle">Register your account</p>
      {success && (
        <div className="success-alert">
          {success}
        </div>
      )}
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="hospitalName"
          placeholder="Hospital name"
          value={formData.hospitalName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="license"
          placeholder="Hospital license"
          value={formData.license}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="province"
          placeholder="Province"
          value={formData.province}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Contact number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="hours"
          placeholder="Operating hours"
          value={formData.hours}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <div className="signup-footer">
        Already have an account? <Link to="/login">Log in here</Link>
      </div>
    </div>
  );
};

export default Signup;
