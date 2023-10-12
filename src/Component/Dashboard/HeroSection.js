import React from "react";
import "../../Style/Dashboard/HeroSection.css";
import Bell_icon from "../../Assets/Icons/bell_icon.svg";
import User_profile from "../../Assets/Photos/user_profile.png";

function HeroSection() {
  return (
    <div className="heroSection">
      <div className="left-side">
        <h1>Dashboard</h1>
      </div>
      <div className="right-side">
        <input className="search-input" type="text" placeholder="Search" />

        <img className="bell_icon" src={Bell_icon} alt="Bell Icon" />

        <div className="user-profile-photo">
          <img src={User_profile} alt="User Profile" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
