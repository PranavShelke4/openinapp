/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../Style/Login.css";
import { FcGoogle } from "react-icons/fc";
import {
  AiFillApple,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";

function RightSide() {
  return (
    <div className="RightSide">
      <div className="RightSidee">
        <h2 className="Sign-in-title">Sign In</h2>
        <p className="Sign-in-tagline">Sign in to your account</p>
        <div className="login-with">
          <button className="sign-in-with">
            <FcGoogle size="1.2rem" style={{ marginRight: "10px" }} /> Sign in
            with Google
          </button>
          <button className="sign-in-with">
            <AiFillApple size="1.2rem" style={{ marginRight: "10px" }} /> Sign
            in with Apple
          </button>
        </div>
        <form className="login-form">
          <span className="login-span">Email address</span>
          <input
            className="login-input"
            type="email"
            placeholder="Email address"
          />
          <span className="login-span">Password</span>
          <input
            className="login-input"
            type="password"
            placeholder="Password"
          />
          <a className="forgot-password" href="#">
            Forgot password?
          </a>
          <button className="login-submit-btn">Sign In</button>
        </form>
        <p className="Register-line">
          Don’t have an account?{" "}
          <a className="Register-link" href="#">
            Register here
          </a>
        </p>
      </div>

    {/* social icons */}

      <div className="social-icons2">
        <a href="#">
          <span className="social-icon">
            <AiFillGithub />
          </span>
        </a>
        <a href="#">
          <span className="social-icon">
            <AiFillTwitterCircle />
          </span>
        </a>
        <a href="#">
          <span className="social-icon">
            <AiFillLinkedin />
          </span>
        </a>
        <a href="#">
          <span className="social-icon">
            <BiLogoDiscord />
          </span>
        </a>
      </div>
    </div>
  );
}

export default RightSide;
