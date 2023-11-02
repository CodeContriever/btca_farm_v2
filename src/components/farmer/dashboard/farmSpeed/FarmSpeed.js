import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const FarmSpeed = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Green',
        data: [4, 5, 6, 7, 9, 8, 7],
        backgroundColor: 'rgba(0, 128, 128, 0.8)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'lightblue',
        hoverBorderColor: 'darkblue',
      },
      {
        label: 'Grey',
        data: [7, 4, 3, 4, 5, 6, 8],
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'yellow',
        hoverBorderColor: 'darkblue',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="border-2 rounded-lg border-gray-300 dark:border-gray-600 mb-20">
      <div className="w-full p-8 text-base font-semibold">
        <h1>Farm Speed</h1>
      </div>

      <div className="p-8 space-x-8">
        <Bar data={data} options={options} className="w-full" />
      </div>
    </div>
  );
};

export default FarmSpeed;
