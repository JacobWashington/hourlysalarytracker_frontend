import { React, useState } from "react";
import "./SignIn.css";
import SignInForm from "../../components/signInForm/SignInForm";

const SignIn = () => {
  return (
    <div className="_signIn">
      <div className="signIn-bg-image"></div>
      <div
        className="content"
        style={{ backgroundImage: "../../assets/images/HST_Image_3.jpg" }}
      >
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
