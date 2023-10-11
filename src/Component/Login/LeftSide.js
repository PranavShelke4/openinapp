/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../Style/Login.css";
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";

function LeftSide() {
  return (
    <div className="LeftSide">
      <div className="logo">LOGO</div>
      <div className="title">Board.</div>
      <div className="social-icons">
        <a href="#"><span className="social-icon"><AiFillGithub /></span></a>
        <a href="#"><span className="social-icon"><AiFillTwitterCircle /></span></a>
        <a href="#"><span className="social-icon"><AiFillLinkedin /></span></a>
        <a href="#"><span className="social-icon"><BiLogoDiscord /></span></a>
      </div>
    </div>
  );
}

export default LeftSide;
