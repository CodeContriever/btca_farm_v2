import React, { useEffect } from 'react';
import { Chart, CategoryScale, LinearScale, BarController } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarController);

const UserGrowthChart = ({ data, showAllBars }) => {
  useEffect(() => {
    const maxBars = showAllBars ? data.labels.length : 10;
    const limitedData = {
      ...data,
      labels: data.labels.slice(0, maxBars),
      datasets: data.datasets.map(dataset => ({
        ...dataset,
        data: dataset.data.slice(0, maxBars),
      })),
    };

    const ctx = document.getElementById('userGrowthChart').getContext('2d');
    const userGrowthChart = new Chart(ctx, {
      type: 'bar', // Use 'bar' type for horizontal bar chart
      data: limitedData,
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      userGrowthChart.destroy();
    };
  }, [data, showAllBars]);

  return (
    <div className="bg-[#F9FAFB] shadow-lg p-4 w-full">
      <canvas id="userGrowthChart" width="400" height="200"></canvas>
    </div>
  );
};

export default UserGrowthChart;
