import React from "react";
import "../../Style/Dashboard/AddProfile.css";

function ProfileCard({ data }) {
  return (
    <div className="profile-card-display">
      <h2>{data.name}</h2>
      <p>
        <i className="phone-icon"></i> {data.phone}
      </p>
      <p>
        <i className="email-icon"></i> {data.email}
      </p>
      {data.instagram && (
        <p>
          <i className="instagram-icon"></i> {data.instagram}
        </p>
      )}
      {data.youtube && (
        <p>
          <i className="youtube-icon"></i> {data.youtube}
        </p>
      )}
    </div>
  );
}

export default ProfileCard;
