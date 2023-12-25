import React from 'react';
import { Line } from 'react-chartjs-2';

const MiningProgressChart = () => {
  // Dummy data for illustration, replace this with your actual mining progress data
  const data = {
    labels: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6'],
    datasets: [
      {
        label: 'Mining Progress (BTCA)',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [10, 25, 50, 75, 90, 100], // Replace this with your actual mining progress data
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          callback: (value) => `${value}-${value + 1}`, // Customize the x-axis labels
        },
      },
      y: {
        type: 'linear',
        position: 'left',
        max: 100, // Adjust the maximum value based on your mining progress scale
      },
    },
  };

  return (
    <div className="w-full lg:w-3/4 mx-auto mt-8">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Mining Progress Chart (BTCA)</h2>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Last 6 hours</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MiningProgressChart;
