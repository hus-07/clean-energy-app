import React from 'react';

const data = [
  { size: "3 kW", pricePerWatt: "3.66", costBefore: "10970" },
  { size: "4 kW", pricePerWatt: "3.47", costBefore: "13881" },
  { size: "5 kW", pricePerWatt: "3.20", costBefore: "16002" },
  { size: "6 kW", pricePerWatt: "3.13", costBefore: "18795" },
  { size: "7 kW", pricePerWatt: "3.06", costBefore: "21437" },
  { size: "8 kW", pricePerWatt: "3.04", costBefore: "24335" },
  { size: "9 kW", pricePerWatt: "2.98", costBefore: "26830" },
  { size: "10 kW", pricePerWatt: "2.94", costBefore: "29410" },
  { size: "11 kW", pricePerWatt: "2.90", costBefore: "31899" },
  { size: "12 kW", pricePerWatt: "2.86", costBefore: "34353" },
  { size: "13 kW", pricePerWatt: "2.77", costBefore: "36055" },
];

const Table1 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>System Size</th>
          <th>Average $/W</th>
          <th>Cost Before Federal Tax Credit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.size}</td>
            <td>${parseFloat(item.pricePerWatt).toFixed(2)}/W</td>
            <td>${parseInt(item.costBefore).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table1;
