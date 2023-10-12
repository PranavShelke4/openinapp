import React from "react";
import "../../Style/Dashboard/TopProductChart.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide the default legend
    },
    title: {
      display: false, // The title is handled outside of the chart
    },
  },
};

const data = {
  labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
  datasets: [
    {
      data: [55, 31, 14], // Adjust these values as needed
      backgroundColor: ["#98D89E", "#EE8484", "#FFD700"],
      hoverOffset: 4,
      borderWidth: 0,
      borderRadius: 1,
    },
  ],
};

function TopProductChart() {
  return (
    <div className="TopProductChart">
      <div className="chart-header">
        <h2>Top products</h2>
        <span>May - June 2021</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Doughnut options={options} data={data} className="Doughnut_chart" />
        <div className="legend">
          <div className="legend-item">
            <span
              className="color-box"
              style={{ backgroundColor: "#98D89E" }}
            ></span>
            <p>
              Basic Tees <br /> <span>55%</span>
            </p>
          </div>
          <div className="legend-item">
            <span
              className="color-box"
              style={{ backgroundColor: "#EE8484" }}
            ></span>
            <p>
              Custom Short Pants <br /> <span>31%</span>
            </p>
          </div>
          <div className="legend-item">
            <span
              className="color-box"
              style={{ backgroundColor: "#FFD700" }}
            ></span>
            <p>
              Super Hoodies <br /> <span>14%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProductChart;
