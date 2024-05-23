import React from 'react';
import './HydroTaxTable.css';

const HydroTaxTable = () => {
  return (
    <div className="table-section">
      <h3>Production Tax Credit (PTC) Structure</h3>
      <table className="cost-table">
        <thead>
          <tr>
            <th>Project Size</th>
            <th>Base Incentive ($/MWh)</th>
            <th>Energy Community Bonus ($/MWh)</th>
            <th>Domestic Content Bonus ($/MWh)</th>
            <th>Total Possible ($/MWh)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&lt; 1 MW</td>
            <td>$27.50</td>
            <td>$2.75</td>
            <td>$2.75</td>
            <td>$33.00</td>
          </tr>
          <tr>
            <td>&gt; 1 MW</td>
            <td>$5.50</td>
            <td>$0.55</td>
            <td>$0.55</td>
            <td>$6.60</td>
          </tr>
          <tr>
            <td>&gt; 1 MW (with prevailing wage and apprenticeship)</td>
            <td>$27.50</td>
            <td>$2.75</td>
            <td>$2.75</td>
            <td>$33.00</td>
          </tr>
        </tbody>
      </table>

      <h3>Investment Tax Credit (ITC) Structure</h3>
      <table className="cost-table">
        <thead>
          <tr>
            <th>Project Size</th>
            <th>Base Incentive (%)</th>
            <th>Energy Community Bonus (%)</th>
            <th>Domestic Content Bonus (%)</th>
            <th>Total Possible (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&lt; 1 MW</td>
            <td>30%</td>
            <td>10%</td>
            <td>10%</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>&gt; 1 MW</td>
            <td>6%</td>
            <td>2%</td>
            <td>2%</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>&gt; 1 MW (with prevailing wage and apprenticeship)</td>
            <td>30%</td>
            <td>10%</td>
            <td>10%</td>
            <td>50%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HydroTaxTable;
