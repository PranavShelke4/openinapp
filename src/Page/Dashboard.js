import React from "react";
import MainSidebar from "../Component/Dashboard/Sidebar";
import HeroSection from "../Component/Dashboard/HeroSection";
import DataCards from "../Component/Dashboard/DataCards";
import ActivitiesChart from "../Component/Dashboard/ActivitiesChart";
import PieChart from "../Component/Dashboard/TopProductChart";
import AddProfile from "../Component/Dashboard/AddProfile";
import "../Style/Dashboard/Dashboard.css"

function Dashboard() {
  return (
    <div style={{display: "flex", padding: "2%", backgroundColor: "rgba(248, 250, 255, 1)"}}>
      <MainSidebar />
      <div className="dashbord-right-side">
        <HeroSection />
        <DataCards />
        <ActivitiesChart />
        <div className="down-charts" style={{display: "flex", padding: "2%"}}>
          <PieChart />
          <AddProfile />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
