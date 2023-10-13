import React, { useState } from "react";
import "../../Style/Dashboard/AddProfile.css";
import Plus_icon from "../../Assets/Icons/plus_icon.svg";
import exit_icon from "../../Assets/Icons/Button.svg";
import ProfileCard from "./ProfileCard";

function AddProfile() {
  const [showModal, setShowModal] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [currentTab, setCurrentTab] = useState("Basic");
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });

  const switchToSocial = (e) => {
    e.preventDefault();
    setCurrentTab("Social");
  };

  const switchToBasic = (e) => {
    e.preventDefault();
    setCurrentTab("Basic");
  };

  const exitCard = () => {
    setShowModal(false);
    setShowCard(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div className="AddProfile">
      {!showCard && (
        <div>
          <div
            className="plus_icon"
            onClick={() => {
              setShowModal(true);
              setShowCard(true);
            }}
          >
            <img src={Plus_icon} alt="Plus_icon" />
          </div>
          <span>Add Profile</span>
        </div>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="profile-card">
              <h2 className="profle-title">Add New Profile</h2>
              <img onClick={exitCard} src={exit_icon} alt="X" />
            </div>
            <div className="tabs">
              <span
                onClick={switchToBasic}
                className={currentTab === "Basic" ? "active" : ""}
              >
                Basic
              </span>
              <span
                onClick={switchToSocial}
                className={currentTab === "Social" ? "active" : ""}
              >
                Social
              </span>
            </div>
            {currentTab === "Basic" ? (
              <form onSubmit={handleFormSubmit} className="active">
                <label>
                  Enter Name*
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                    placeholder="Eg. John Doe"
                  />
                </label>
                <label>
                  Enter Email*
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    placeholder="Eg. John@xyz.com"
                  />
                </label>
                <label>
                  Enter Phone*
                  <input
                    type="number"
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData({ ...profileData, phone: e.target.value })
                    }
                    placeholder="Eg. 9123456789"
                  />
                </label>
                <button type="button" onClick={switchToSocial}>
                  Next
                </button>
              </form>
            ) : (
              <form onSubmit={handleFormSubmit} className="active">
                <label>
                  Instagram Link (Optional)
                  <input
                    type="url"
                    value={profileData.instagram}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        instagram: e.target.value,
                      })
                    }
                    placeholder="Eg. ..instagram.com/username"
                  />
                </label>
                <label>
                  Youtube Link (Optional)
                  <input
                    type="url"
                    value={profileData.youtube}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        youtube: e.target.value,
                      })
                    }
                    placeholder="Eg. ..youtube.com/username"
                  />
                </label>
                <button type="submit">Done</button>
                <button
                  className="back-btn"
                  type="button"
                  onClick={switchToBasic}
                >
                  Back
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {profileData.name && <ProfileCard data={profileData} />}
    </div>
  );
}

export default AddProfile;
