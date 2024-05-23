import React, { useState } from 'react';
import HeaderImage from './HeaderImage'; // Ensure the path to your component is correct
import './SolarPower.css'; // Import the CSS file for styling
import Table1 from './SolarCostTable';
import SolarGraph1 from './SolarGraph'; 
const solarPanelImage = 'https://wallpaperaccess.com/full/1743472.jpg'; // Replace with your actual image URL

function SolarPower() {
  const [visibleContent, setVisibleContent] = useState(null);

  const toggleContent = (contentId) => {
    setVisibleContent(visibleContent === contentId ? null : contentId);
  };

  return (
    <div>
      <HeaderImage />
      <div className="content">
        <h2>About Solar Power</h2>
        <p>Solar power is the conversion of energy from sunlight into electricity.</p>
        
        <h3>Methods of Capturing Solar Energy</h3>
        <p>This energy can be captured through solar panels as well as other individual products which can run on their own solar system such as:</p>
        <ul>
          <li>Solar refrigerators</li>
          <li>Solar ovens</li>
          <li>Direct-solar attic fans</li>
          <li>Solar water distillers</li>
          <li>More products are being developed currently and can be found <a href="https://shorturl.at/JsXWt" target="_blank" rel="noopener noreferrer">here</a></li>
        </ul>
        
        <div className="solar-panel-panel">
          <img src={solarPanelImage} alt="Solar Panel" className="solar-panel-image" />
          <div className="solar-panel-text">Cost and Installation of Solar Panels</div>
          
          <div className="button-container">
            <button onClick={() => toggleContent('location')} className={`toggle-button ${visibleContent === 'location' ? 'clicked' : ''}`}>
              Factors to Consider
            </button>

            <button onClick={() => toggleContent('energy')} className={`toggle-button ${visibleContent === 'energy' ? 'clicked' : ''}`}>
              Energy Production & Requirements
            </button>

            <button onClick={() => toggleContent('roi')} className={`toggle-button ${visibleContent === 'roi' ? 'clicked' : ''}`}>
              Return On Investment
            </button>

            <button onClick={() => toggleContent('extra')} className={`toggle-button ${visibleContent === 'extra' ? 'clicked' : ''}`}>
              Extra Expenses during Installation
            </button>

            <button onClick={() => toggleContent('post')} className={`toggle-button ${visibleContent === 'post' ? 'clicked' : ''}`}>
              Costs Post Installment
            </button>

            <button onClick={() => toggleContent('estimation')} className={`toggle-button ${visibleContent === 'estimation' ? 'clicked' : ''}`}>
              Estimation
            </button>
          </div>
          
          {/* Content displayed below buttons */}
          {visibleContent && (
            <div className="content-details">
              {visibleContent === 'location' && (
                <div className="details">
                  <p>There are several factors that you have to think about when installing solar panels such as location. Solar panels should be placed in areas of direct sunlight (roof, maybe yard). Solar shingles are a good alternative if the roof isn't available for installation.</p>
                </div>
              )}

              {visibleContent === 'energy' && (
                <div className="details">
                  <p>The average home uses 900 kilowatts of electricity per month. A square foot of solar panels can generate 10 or more watts, but this can vary depending on other factors. The average cost-per-watt across the U.S. is around $2.86/W.</p>
                </div>
              )}

              {visibleContent === 'roi' && (
                <div className="details">
                  <p>Most people who install solar panels can save money between $44 and $187 per month after installing solar panels in the first year. You can expect a return on investment within the timeframe of most companies' warranties (around 20 to 25 years).</p>
                </div>
              )}

              {visibleContent === 'extra' && (
                <div className="details">
                  <p>Solar panels are not the only cost to going solar, as there are also other very expensive purchases that have to be made when going solar, such as an inverter, which allows the energy produced to be used by household appliances. Wiring can also cost a couple of thousand dollars, amongst several other factors.</p>
                </div>
              )}

              {visibleContent === 'post' && (
                <div className="details">
                  <p>Even after the initial payments, there can still be maintenance, cleaning, insurance, monitoring, or other repair costs that could be needed due to freak accidents (such as lightning strikes, hurricanes, etc.) or as the system ages.</p>
                </div>
              )}

              {visibleContent === 'estimation' && (
                <div className="details">
                  <p>An estimation of your initial bill can be calculated <a href="https://shorturl.at/LLOfa" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
              )}
            </div>
          )}

          {/* Types of Solar Panels Section */}
          <div className="solar-panels-section">
            <h3>Types of Solar Panels</h3>
            <div className="button-container">
              <button className="solar-panel-btn">
                <span className="btn-text-one">Monocrystalline</span>
                <span className="btn-text-two">Higher efficiency, highest initial purchase and installation cost due to more efficient energy production. Durable and long-lasting, contributing to a greater impact on the environment over time.</span>
              </button>

              <button className="solar-panel-btn">
                <span className="btn-text-one">Polycrystalline</span>
                <span className="btn-text-two">Less efficient, cheaper than monocrystalline due to a simpler production process. Requires a greater quantity due to it being less efficient.</span>
              </button>

              <button className="solar-panel-btn">
                <span className="btn-text-one">Thin-Film</span>
                <span className="btn-text-two">Flexible and lightweight, ideal for unconventional spaces. Generally less efficient, but cheaper and easier to install. Suitable for large-scale installations.</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-container">
        <div className="table-header">Solar Panel System Size and Price</div>
        <Table1 />
      </div>
      {/* Display the SolarGraph component */}

      <div className="graph-container">
        <div className="graph-header">Average Cost Before vs. After Federal Tax Rebate</div>
          <SolarGraph1 />
      </div>
      
      
      <div className="pros-cons-section">
        <h3>Pros and Cons of Solar Panels</h3>
        <table className="pros-cons-table">
          <thead>
            <tr>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Renewable Energy Source</td>
              <td>High Initial Cost</td>
            </tr>
            <tr>
              <td>Reduces Electricity Bills</td>
              <td>Weather Dependent</td>
            </tr>
            <tr>
              <td>Diverse Applications</td>
              <td>Storage is Expensive</td>
            </tr>
            <tr>
              <td>Low Maintenance Costs</td>
              <td>Uses a Lot of Space</td>
            </tr>
            <tr>
              <td>Technology Development</td>
              <td>Associated with Pollution</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SolarPower;
