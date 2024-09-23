import { React, useState } from "react";
import "./SignInForm.css";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="sif">
      <div className="sif-input-section sif-email">
        <div className="sif-input-container">
          <input
            className="input email"
            placeholder="example@email.com"
            onChange={handleChangeEmail}
          />
        </div>
      </div>
      <div className="sif-input-section sif-password">
        <div className="sif-input-container">
          <input
            className="input password"
            type="password"
            placeholder="Password"
            onChange={handleChangePassword}
          />
        </div>
      </div>
      <div className="button sif-submit" id="sif-submit-btn">
        <div>Sign In</div>
      </div>
    </div>
  );
};

export default SignInForm;
