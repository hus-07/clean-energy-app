import React, { useState } from 'react';
import WindHeaderImage from './WindHeaderImage'; // Ensure the path to your component is correct
import WindGraph from './WindGraph'; // Ensure the path to your component is correct
import './WindPower.css'; // Import the CSS file for styling

function WindPower() {
  const [visibleContent, setVisibleContent] = useState(null);

  const toggleContent = (contentId) => {
    setVisibleContent(visibleContent === contentId ? null : contentId);
  };

  return (
    <div>
      <WindHeaderImage />
      <div className="content">
        <h2>About Wind Power</h2>
        <p>Wind power is the use of air flow through wind turbines to provide the mechanical power to turn electric generators.</p>

        <h3>Large-Scale Wind Power for Communities</h3>
        <ul>
          <li>To be a stable source of energy, one acre of land with sufficient wind resources in the area is required.</li>
          <li>When implemented correctly, electricity costs could be reduced by up to 90%.</li>
          <li>Individual homeowners could collectively invest in wind turbines for community use.</li>
        </ul>

        <div className="wind-turbine-button-container">
          <button onClick={() => toggleContent('permit')} className={`wind-turbine-button ${visibleContent === 'permit' ? 'clicked' : ''}`}>
            Permit Requirements
          </button>

          <button onClick={() => toggleContent('diy')} className={`wind-turbine-button ${visibleContent === 'diy' ? 'clicked' : ''}`}>
            DIY Wind Turbines
          </button>

          <button onClick={() => toggleContent('energy')} className={`wind-turbine-button ${visibleContent === 'energy' ? 'clicked' : ''}`}>
            Energy Production
          </button>

          <button onClick={() => toggleContent('cost')} className={`wind-turbine-button ${visibleContent === 'cost' ? 'clicked' : ''}`}>
            Cost Estimation
          </button>

          <button onClick={() => toggleContent('factors')} className={`wind-turbine-button ${visibleContent === 'factors' ? 'clicked' : ''}`}>
            Factors Affecting Price
          </button>

          <button onClick={() => toggleContent('type')} className={`wind-turbine-button ${visibleContent === 'type' ? 'clicked' : ''}`}>
            Best Turbine for Homeowners
          </button>
        </div>

        {/* Content displayed below buttons */}
        {visibleContent && (
          <div className="content-details">
            {visibleContent === 'permit' && (
              <div className="details">
                <p>Installing wind turbines requires a permit in many places in the United States.</p>
                <p>If unable to install wind turbines, personal wind turbines can be bought to provide energy for some lighting and appliances in a house (around 400 watts).</p>
              </div>
            )}

            {visibleContent === 'diy' && (
              <div className="details">
                <p>You can build DIY wind turbines, which can be explained in websites like <a href="https://www.wikihow.com/Build-a-Wind-Turbine" target="_blank" rel="noopener noreferrer">wikihow.com</a>.</p>
              </div>
            )}

            {visibleContent === 'energy' && (
              <div className="details">
                <p>Kilowatt-hours per year = 8,760 hours in the year × power rating (kW) × capacity factor (%).</p>
                <p>Given the average capacity factor for small wind turbines, a 10 kW turbine will produce roughly 14,892 kWh per year.</p>
                <p>One megawatt can power approximately 1000 homes for a month.</p>
              </div>
            )}

            {visibleContent === 'cost' && (
              <div className="details">
                <p>Small wind turbines for residential use can cost less than $1000, though effectiveness varies greatly based on location and wind conditions.</p>
                <p>Small wind turbines, also known as home wind turbines, cost between $3,000 to $5,000 per kilowatt of power capacity.</p>
                <p>Installation costs can vary based on system size, tower height, and equipment. Homeowners typically install between 5 to 15 kW, resulting in total costs between $15,000 and $75,000, excluding federal or state incentives.</p>
              </div>
            )}

            {visibleContent === 'factors' && (
              <div className="details">
                <p>Distance is also important - the further away the turbine is from your home, the less energy you will get.</p>
                <p>Several factors can cause the operation and maintenance costs to be high, such as insurance, land rent, and replacing spare parts. However, most wind turbines result in more savings than the money invested each year.</p>
              </div>
            )}

            {visibleContent === 'type' && (
              <div className="details">
                <p>Typically install between 5 to 15 kW.</p>
                <p>These turbines are much smaller than those on wind farms, with blades up to 10 meters in diameter, and are ideal for residential, portable, or off-grid applications.</p>
                <p>They perform best in locations with frequent, high wind speeds, usually rural areas with few obstructions. In optimal conditions, a small wind turbine can potentially offset 100 percent of a home's electricity bill.</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="table-section">
        <h3>Average Cost of a Wind Turbine</h3>
        <table className="cost-table">
          <thead>
            <tr>
              <th>Turbine size / type</th>
              <th>Average cost installed*</th>
              <th>Capacity / maximum power rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Micro home turbine</td>
              <td>$500 – $4,000</td>
              <td>0.4 – 3 kilowatts</td>
            </tr>
            <tr>
              <td>Small home turbine</td>
              <td>$3,000 – $15,000</td>
              <td>3 – 5 kilowatts</td>
            </tr>
            <tr>
              <td>Standard home turbine</td>
              <td>$20,000 – $80,000</td>
              <td>5 – 15 kilowatts</td>
            </tr>
            <tr>
              <td>Commercial onshore turbine</td>
              <td>$2.5 – $4 million</td>
              <td>2 – 4 megawatts</td>
            </tr>
            <tr>
              <td>Offshore turbine</td>
              <td>$20 – $100+ million</td>
              <td>6 – 12+ megawatts</td>
            </tr>
          </tbody>
        </table>

        <h3>Home Wind Turbine Cost by Type</h3>
        <table className="cost-table">
          <thead>
            <tr>
              <th>Turbine type</th>
              <th>Average cost before federal tax credit</th>
              <th>Average cost after federal tax credit</th>
              <th>Capacity / maximum power rating*</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Micro or roof-mounted</td>
              <td>$500 – $4,000</td>
              <td>$350 – $2,800</td>
              <td>0.4 – 3 kW</td>
            </tr>
            <tr>
              <td>Small freestanding</td>
              <td>$3,000 – $15,000</td>
              <td>$1,400 – $10,500</td>
              <td>3 – 5 kW</td>
            </tr>
            <tr>
              <td>Freestanding</td>
              <td>$20,000 – $80,000</td>
              <td>$14,000 – $56,000</td>
              <td>5 – 15 kW</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tax-credits-section">
        <h3>Tax Credits and Standards</h3>
        <p>
          <strong>PTC (Production Tax Credit):</strong> The renewable electricity production tax credit allows owners and developers of wind energy facilities to claim a federal income tax credit for every kilowatt-hour of electricity generated for the power grid for a period of 10 years.
        </p>
        <p>
          <strong>ITC (Investment Tax Credit):</strong> A one-time credit based on the amount spent on installation, effective once the equipment is functional.
        </p>
        <p>
          <strong>AWEA Standards:</strong> Smaller wind turbines must meet qualifications set by the American Wind Energy Association's Small Wind Turbine Performance and Safety Standard.
        </p>
      </div>

      <div className="pros-cons-section">
        <h3>Pros and Cons of Wind Power</h3>
        <table className="pros-cons-table">
          <thead>
            <tr>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Renewable and sustainable energy source</td>
              <td>Intermittent energy generation depending on wind availability</td>
            </tr>
            <tr>
              <td>Reduces electricity bills</td>
              <td>High initial installation costs</td>
            </tr>
            <tr>
              <td>Low operating and maintenance costs</td>
              <td>Noise and visual impact</td>
            </tr>
            <tr>
              <td>Diverse applications and scalability</td>
              <td>Requires large areas of land</td>
            </tr>
            <tr>
              <td>Technology development is ongoing</td>
              <td>Impact on wildlife, particularly birds and bats</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="graph-container">
        <h3>Wind Turbine Costs Before and After Federal Tax Credit</h3>
        <WindGraph />
      </div>
    </div>
  );
}

export default WindPower;
