import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SignIn.css";
import SignInForm from "../../components/signInForm/SignInForm";

const SignIn = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegister = () => {
    navigate("/register"); // Navigate to the Register view
  };

  return (
    <div className="_signIn">
      <div className="signIn-bg-image"></div>
      <div className="content">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;

