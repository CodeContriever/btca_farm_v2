import React from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale, LinearScale, PointElement, BarElement, Chart } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, BarElement);

const FarmSpeed = () => {
    const data = {
    labels: ["4-10", "11-17", "18-24", "25-31"],
    datasets: [
      {
        label: "Farming Speed",
        data: [0, 1.8, 3.6, 5.4], // Replace with your actual data
        backgroundColor: "rgba(0, 128, 128, 0.8)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Farming Period",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Farming Speed",
        },
      },
    },
  };
 

  return (
    <div className="container mx-auto px-6">

      <div>

        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
      Farming Speed
        </h1>

        <div className="bg-white rounded-md shadow-lg p-8 mt-4">

                <Bar data={data} options={options} />
                  
        </div>
      </div>
    </div>
  );
};

export default FarmSpeed;
