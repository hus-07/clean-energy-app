import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SolarGraph1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartData = {
      labels: ['3 kW', '4 kW', '5 kW', '6 kW', '7 kW', '8 kW', '9 kW', '10 kW', '11 kW', '12 kW', '13 kW'],
      datasets: [
        {
          label: 'Cost Before Federal Tax Credit',
          data: [10970, 13881, 16002, 18795, 21437, 24335, 26830, 29410, 31899, 34353, 36055],
          backgroundColor: 'rgba(255, 153, 51, 0.2)', // Orange color with 50% opacity
          borderColor: 'rgba(255, 153, 51, 1)', // Red color
          borderWidth: 1,
          yAxisID: 'y-axis-1'
        },
        {
          label: 'Cost After Federal Tax Credit',
          data: [7679, 9717, 11201, 13157, 15006, 17034, 18781, 20587, 22329, 24047, 25239],
          backgroundColor: 'rgba(255, 255, 102, 2)', // Yellow color with 50% opacity
          borderColor: 'rgba(255, 255, 102, 1)', // yellow color
          borderWidth: 1,
          yAxisID: 'y-axis-1'
        },
        
      ]
    };

    const chartConfig = {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          x: {
            stacked: true,
            title: {
              display: true,
              text: 'System Size'
            }
          },
          y: [
            {
              display: true,
              position: 'left',
              id: 'y-axis-1',
              title: {
                display: true,
                text: 'Cost ($)'
              }
            },
            
          ]
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

export default SolarGraph1;
