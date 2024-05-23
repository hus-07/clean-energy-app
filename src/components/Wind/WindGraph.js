import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WindGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartData = {
      labels: ['Micro or roof-mounted', 'Small freestanding', 'Freestanding'],
      datasets: [
        {
          label: 'Average cost before federal tax credit',
          data: [2500, 9000, 50000],
          backgroundColor: 'rgba(119, 136, 153, 0.6)', // LightSlateGray with 60% opacity
          borderColor: 'rgba(119, 136, 153, 1)', // LightSlateGray color
          borderWidth: 1,
          yAxisID: 'y-axis-1'
        },
        {
          label: 'Average cost after federal tax credit',
          data: [1600, 7250, 35000],
          backgroundColor: 'rgba(47, 79, 79, 0.6)', // DarkSlateGray with 60% opacity
          borderColor: 'rgba(47, 79, 79, 1)', // DarkSlateGray color
          borderWidth: 1,
          yAxisID: 'y-axis-1'
        }
      ]
    };

    const chartConfig = {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Turbine Type'
            }
          },
          'y-axis-1': {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Cost ($)'
            },
            ticks: {
              beginAtZero: true
            }
          }
        }
      }
    };

    const chart = new Chart(chartRef.current, chartConfig);

    return () => {
      chart.destroy(); // Cleanup chart on unmount
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default WindGraph;