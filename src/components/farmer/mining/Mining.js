import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, LinearScale, PointElement, LineElement, Chart } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const Mining = () => {
  const [miningData, setMiningData] = useState({
    user: "John Doe",
    status: "Active",
    miningRate: 50,
    chartData: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Mining Rate",
          data: [45, 55, 60, 58, 52, 55, 50],
          fill: false,
          borderColor: "rgba(0, 128, 128, 0.8)",
        },
      ],
    },
  });

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category", // Specify the scale type as "category"
        beginAtZero: true,
      },
      y: {
        type: "linear", // Specify the scale type as "linear" for numeric values
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.dataset.label + ": " + context.parsed.y + " GH/s";
          },
        },
      },
    },
  };

  const toggleMiningStatus = () => {
    setMiningData((prevData) => ({
      ...prevData,
      status: prevData.status === "Active" ? "Inactive" : "Active",
    }));
  };

  return (
    <div className="container mx-auto px-6">

      <div>

        <h1 className="text-gray-800 text-2xl font-medium font-inter leading-6">
          Mining
        </h1>

        <div className="bg-white rounded-md shadow-lg p-8 mt-4">

          {/* Mining Status card */}
          <div className="mining-status-card bg-white rounded-lg shadow-lg p-4">

            {/* Mining user and active/inactive status button */}
            <div className="flex items-center justify-between mb-4">

              {/* User */}
              <h2 className="text-lg font-medium text-gray-700">
                {miningData.user}
              </h2>

              {/* Status */}
              <div className="flex flex-row gap-2">
                <h2 className="text-lg font-medium text-gray-700">Status: </h2>
                
                <button
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    miningData.status === "Active" ? "bg-green-400" : "bg-red-400"
                  }`}
                  onClick={toggleMiningStatus}
                >
                  {miningData.status}
                </button>
              </div>

            </div>

            {/* Mining Chart */}
            <div className="mining-chart">
              <Line data={miningData.chartData} options={chartOptions} />
            </div>

            <div className="mining-details mt-12">
              {/* Mining rate */}
              <div className="flex flex-row items-center gap-2">
                <p className="text-sm font-semibold text-gray-700">Mining Rate: </p>
                <p className="text-xl font-bold text-blue-700">
                  {miningData.miningRate} GH/s
                </p>
              </div>

              {/* <div className="text-left">
                <p className="text-sm font-semibold text-gray-700">Current Week</p>
                <p className="text-2xl font-bold text-blue-700">
                  {miningData.chartData.datasets[0].data[6]} GH/s
                </p>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mining;
