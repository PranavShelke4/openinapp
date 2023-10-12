import React from "react";
import "../../Style/Dashboard/AddProfile.css";
import Plus_icon from "../../Assets/Icons/plus_icon.svg";

function AddProfile() {
  return (
    <div className="AddProfile">
      <div className="plus_icon">
        <img src={Plus_icon} alt="Plus_icon" />
      </div>

      <span>Add Profile</span>
    </div>
  );
}

export default AddProfile;
