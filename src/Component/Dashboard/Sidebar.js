import React from "react";
import "../../Style/Dashboard/Sidebar.css";
import dashbord_icon from "../../Assets/Icons/dashboard_icon.svg";
import transaction_icon from "../../Assets/Icons/transaction_icon.svg";
import schedule_icon from "../../Assets/Icons/schedule_icon.svg";
import setting_icon from "../../Assets/Icons/setting_icon.svg";
import user_icon from "../../Assets/Icons/user_icon.svg";

function MainSidebar() {
  return (
    <div className="sidebar">
      <h1>Board.</h1>
      <div style={{marginTop: "15%"}}>
        <span className="nav-menue">
          <img
            src={dashbord_icon}
            alt="Schedules"
            style={{ marginRight: "6%", marginLeft: "-3%" }}
          />
          Dashboard
        </span>
        <span className="nav-menue">
          <img
            src={transaction_icon}
            alt="Schedules"
            style={{ marginRight: "6%", marginLeft: "-3%" }}
          />
          Transactions
        </span>
        <span className="nav-menue">
          <img
            src={schedule_icon}
            alt="Schedules"
            style={{ marginRight: "6%", marginLeft: "-3%" }}
          />
          Schedules
        </span>
        <span className="nav-menue">
          <img
            src={user_icon}
            alt="Schedules"
            style={{ marginRight: "6%", marginLeft: "-3%" }}
          />
          Users
        </span>
        <span className="nav-menue">
          <img
            src={setting_icon}
            alt="Schedules"
            style={{ marginRight: "6%", marginLeft: "-3%" }}
          />
          Settings
        </span>
      </div>
      <div className="bottom-nav-menue">
        <span className="other-nav-menue">Help</span>
        <span className="other-nav-menue">Contact Us</span>
      </div>
    </div>
  );
}

export default MainSidebar;
