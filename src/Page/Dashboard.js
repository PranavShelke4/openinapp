import React from "react";
import MainSidebar from "../Component/Dashboard/Sidebar";
import HeroSection from "../Component/Dashboard/HeroSection";
import DataCards from "../Component/Dashboard/DataCards";

function Dashboard() {
  return (
    <div style={{display: "flex", padding: "2%", backgroundColor: "rgba(248, 250, 255, 1)"}}>
      <MainSidebar />
      <div style={{padding: "0 3%"}}>
        <HeroSection />
        <DataCards />
      </div>
    </div>
  );
}

export default Dashboard;
