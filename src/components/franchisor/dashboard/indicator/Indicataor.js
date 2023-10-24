import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const Indicator = () => {
  const [chartSize, setChartSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    const updateChartSize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 768) {
        setChartSize({ width: 200, height: 200 }); // Adjust the size for mobile
      } else {
        setChartSize({ width: 300, height: 300 }); // Default size for desktop
      }
    };

    updateChartSize();
    window.addEventListener('resize', updateChartSize);

    return () => {
      window.removeEventListener('resize', updateChartSize);
    };
  }, []);

  const data = {
    labels: ['Red', 'Yellow', 'Green'],
    datasets: [
      {
        label: 'indicator',
        data: [18, 12, 6],
        backgroundColor: ['red', 'yellow', 'green'],
        needleValue: 30,
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        cutout: '80%',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        yAlign: 'bottom',
        displayColors: false,
        callbacks: {
          label: function (tooltipItem, data, value) {
            const tracker = tooltipItem.dataset.needleValue;
            return `Tracker Score: ${tracker}%`;
          },
        },
      },
    },
  };

  const gaugeNeedle = {
    id: 'gaugeNeedle',
    afterDatasetDraw(chart) {
      const { ctx, data, chartArea: { width, height } } = chart;
      ctx.save();
      const needleValue = data.datasets[0].needleValue;
      const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0);
      const angle = Math.PI + (1 / dataTotal * needleValue * 2 * Math.PI);
      const cx = width / 2;
      const cy = chart._metasets[0].data[0].y;

      // needle
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -2);
      ctx.lineTo(height - (ctx.canvas.offsetTop - 10), 0);
      ctx.lineTo(0, 2);
      ctx.moveTo(0, 2);
      ctx.fillStyle = '#444';
      ctx.fill();

      // needle dot
      ctx.translate(-cx, -cy);
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, 10);
      ctx.fill();
      ctx.restore();

      ctx.font = '30px Helvetica'; // Adjust the font size for mobile
      ctx.fillStyle = '#444';
      ctx.fillText(needleValue + '%', cx, cy + 30); // Adjust the positioning for mobile
      ctx.textAlign = 'center';
      ctx.restore();
    },
  };

  const plugins = [gaugeNeedle];

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="px-4">
        <Doughnut data={data} options={options} plugins={plugins} width={chartSize.width} height={chartSize.height}></Doughnut>
      </div>

      <div className='flex flex-col md:flex-row justify-between'>
        <IndicatorLegend color="green" label="Green" />
        <IndicatorLegend color="yellow" label="Yellow" />
        <IndicatorLegend color="red" label="Red" />
      </div>

    </div>
  );
};



export default Indicator;

const IndicatorLegend = ({ color, label }) => {
  return (
    <div className="box-border gap-2 flex items-center mt-2">
      <div className={`box-border rounded-full h-2 w-2 mr-2 bg-${color}`} />
      <p className="box-border mb-0 mt-0 font-inter font-semibold uppercase text-gray-800  text-[12px] md:text-base leading-6">
        {label}:
      </p>
      <p className="box-border mb-0 mt-0 text-gray-800 font-inter text-[12px] md:text-base leading-6 font-medium">
        {label === 'Green' ? 'Price is Good' : `${label} freezing`}
      </p>
    </div>
  );
};
