import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="_landing">
      <div className="lnd-bg-image"></div>
      <div className="landing-content">
        <h1>Welcome to Hourly Salary Tracker</h1>
        <div className="button-container">
          <button className="btn login-btn" onClick={handleLogin}>
            Log In
          </button>
          <button className="btn signup-btn" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
