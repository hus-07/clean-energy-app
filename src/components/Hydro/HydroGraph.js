import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const HydroGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartData = {
      labels: ['< 1 MW', '> 1 MW', '> 1 MW (wage & apprenticeship)'],
      datasets: [
        {
          label: 'PTC Base Incentive ($/MWh)',
          data: [27.50, 5.50, 27.50],
          backgroundColor: 'rgba(0, 123, 255, 0.5)', // Blue color with 50% opacity
          borderColor: 'rgba(0, 123, 255, 1)', // Blue color
          borderWidth: 1,
        },
        {
          label: 'PTC Total Possible ($/MWh)',
          data: [33.00, 6.60, 33.00],
          backgroundColor: 'rgba(40, 167, 69, 0.5)', // Green color with 50% opacity
          borderColor: 'rgba(40, 167, 69, 1)', // Green color
          borderWidth: 1,
        },
        {
          label: 'ITC Base Incentive (%)',
          data: [30, 6, 30],
          backgroundColor: 'rgba(255, 193, 7, 0.5)', // Yellow color with 50% opacity
          borderColor: 'rgba(255, 193, 7, 1)', // Yellow color
          borderWidth: 1,
        },
        {
          label: 'ITC Total Possible (%)',
          data: [50, 10, 50],
          backgroundColor: 'rgba(220, 53, 69, 0.5)', // Red color with 50% opacity
          borderColor: 'rgba(220, 53, 69, 1)', // Red color
          borderWidth: 1,
        }
      ]
    };

    const chartConfig = {
      type: 'bar',
      data: chartData,
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += context.parsed.y;
                  if (context.dataset.label.includes('%')) {
                    label += '%';
                  } else {
                    label += ' $/MWh';
                  }
                }
                return label;
              }
            }
          },
          legend: {
            display: true,
            position: 'top',
            labels: {
              boxWidth: 20,
              padding: 15
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Project Size'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Incentive Value'
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

export default HydroGraph;