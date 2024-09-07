import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

import "./Signup.css";
import Frame59 from "../../Assets/Frame59.png";
import Frame60 from "../../Assets/Frame60.png";
import Frame61 from "../../Assets/Frame61.png";
import visibility_off from "../../Assets/visibility_off.png";
import icon from "../../Assets/icon.png";

const Signup = () => {
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const user = { email, password };
    login(user); // Log in the user after sign-up
    navigate("/");
  };

  return (
    <div className="container">
      <div className="signin-full">
        <h3>Welcome Back!</h3>
        <p>Enter your Credentials to access your account</p>
        <div className="signin-body">
          <form action="#" method="POST">
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
              />
            </div>
            <div className="input-group password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <img className="show-pass" src={visibility_off} alt="" />
            </div>
            <a className="forgot-pass" href="">
              Forgot Password
            </a>
            <div className="checkbox-group">
              <input type="checkbox" id="terms" name="terms" />
              <label for="terms">
                I agree to the{" "}
                <a href="#" className="link-color">
                  Terms & Policy
                </a>
              </label>
            </div>
            <button type="submit" className="signup-btn">
              Sign In
            </button>
            <div className="separator">or</div>
            <div className="social-signin">
              <div className="social-btn">
                <img src={Frame59} alt="" />
              </div>
              <div className="social-btn">
                <img src={Frame60} alt="" />
              </div>
            </div>
            <p className='signin'>Have an account? <a href="#" className="signin-color">Sign In</a></p>
          </form>
        </div>
      </div>
      <div className="img-section">
        <img src={Frame61} alt="" />
        <div className="text">
            <div className="icon"><img src={icon} alt="" /></div>
            <h2><span className="brand">Furni<span className="blue-text">Flex</span></span></h2>
            <p>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

// import React from 'react';

// const Signup = () => {
//   return (
//     <div>
//       <h2>Signup Page</h2>
//     </div>
//   );
// };

// export default Signup;
