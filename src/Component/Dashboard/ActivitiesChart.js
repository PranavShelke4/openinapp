import React from "react";
import "../../Style/Dashboard/ActivitiesChart.css";
import Red_Ellipse from "../../Assets/Icons/Red_Ellipse.svg";
import Green_Ellipse from "../../Assets/Icons/Green_Ellipse.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      barSpacing: 10,
      maxBarThickness: 10,
    },
  },
};

const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

const data = {
  labels,
  datasets: [
    {
      label: "Guest",
      data: [500, 380, 200, 400],
      backgroundColor: "#98D89E",
      barPercentage: 0.8, // adjust this value
      categoryPercentage: 0.5,
      borderRadius: 5,
    },
    {
      label: "User",
      data: [400, 420, 300, 320],
      backgroundColor: "#EE8484",
      barPercentage: 0.8, // adjust this value
      categoryPercentage: 0.5,
      borderRadius: 5,
    },
  ],
};

function ActivitiesChart() {
  return (
    <div className="ActivitiesChart">
      <h1 className="Activities-Chart-title">Activities Chart</h1>
      <br />
      <div className="chart-top" style={{ display: "flex", alignItems: "center", marginTop: "-4%" }}>
        <p className="months">May - June 2021</p>
        <div className="chart-info">
          <p>
            <img src={Red_Ellipse} alt="Guest" />
            Guest
          </p>
          <p>
            <img src={Green_Ellipse} alt="User" />
            User
          </p>
        </div>
      </div>
      <Bar className="bar-chart" options={options} data={data} height={100} />
    </div>
  );
}

export default ActivitiesChart;
