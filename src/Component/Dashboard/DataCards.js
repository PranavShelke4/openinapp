import React from "react";
import "../../Style/Dashboard/DataCards.css";
import Total_Revenue from "../../Assets/Icons/Total_Revenues_icon.svg";
import Total_Transaction from "../../Assets/Icons/Total_Transactions_icon.svg";
import Total_Users from "../../Assets/Icons/Total_Users_icon.svg";
import Total_Like from "../../Assets/Icons/Total_Likes_icon.svg";

function DataCards() {
  return (
    <div className="Data-Cards">
      <div className="card">
        <div
          className="card-icon"
          style={{ backgroundColor: "rgba(127, 205, 147, 1)" }}
        >
          <img className="icon" src={Total_Revenue} alt="Total Revenue" />
          <p className="card-title">Total Revenues</p>
          <div className="card-pro-loss">
            <h1 className="card-valu">$2,129,430</h1>
            <p className="card-text" id="card-text">
              +0.5%
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div
          className="card-icon"
          style={{ backgroundColor: "rgba(222, 191, 133, 1)" }}
        >
          <img className="icon" src={Total_Transaction} alt="Total Revenue" />
          <p className="card-title">Total Transactions</p>
          <div className="card-pro-loss">
            <h1 className="card-valu">1,520</h1>
            <p className="card-text">+1.7%</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div
          className="card-icon"
          style={{ backgroundColor: "rgba(236, 164, 164, 1)" }}
        >
          <img className="icon" src={Total_Like} alt="Total Revenue" />
          <p className="card-title">Total Likes</p>
          <div className="card-pro-loss">
            <h1 className="card-valu">9,721</h1>
            <p className="card-text">+1.4%</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div
          className="card-icon"
          style={{ backgroundColor: "rgba(169, 176, 229, 1)" }}
        >
          <img className="icon" src={Total_Users} alt="Total Revenue" />
          <p className="card-title">Total Users</p>
          <div className="card-pro-loss">
            <h1 className="card-valu">9,721</h1>
            <p className="card-text">+4.2%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataCards;
