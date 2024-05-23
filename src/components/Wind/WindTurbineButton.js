import React, { useState } from 'react';
import './WindTurbineButtons.css';

const WindTurbineButtons = () => {
  const [visibleContent, setVisibleContent] = useState(null);

  const toggleContent = (contentId) => {
    setVisibleContent(visibleContent === contentId ? null : contentId);
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={() => toggleContent('permit')} className={`wind-turbine-button ${visibleContent === 'permit' ? 'clicked' : ''}`}>
          Installing Wind Turbines
        </button>

        <button onClick={() => toggleContent('diy')} className={`wind-turbine-button ${visibleContent === 'diy' ? 'clicked' : ''}`}>
          DIY Wind Turbines
        </button>

        <button onClick={() => toggleContent('energy')} className={`wind-turbine-button ${visibleContent === 'energy' ? 'clicked' : ''}`}>
          Energy Production
        </button>

        <button onClick={() => toggleContent('cost')} className={`wind-turbine-button ${visibleContent === 'cost' ? 'clicked' : ''}`}>
          Cost
        </button>

        <button onClick={() => toggleContent('factors')} className={`wind-turbine-button ${visibleContent === 'factors' ? 'clicked' : ''}`}>
          Pricing Factors
        </button>

        <button onClick={() => toggleContent('types')} className={`wind-turbine-button ${visibleContent === 'types' ? 'clicked' : ''}`}>
          Best Turbines for Homeowners
        </button>
      </div>
     
      {visibleContent && (
        <div className="content-details">
          {visibleContent === 'permit' && (
            <div className="details">
              <p>Installing wind turbines requires a permit in many places in the United States. If unable to install wind turbines, you could buy a personal wind turbine which can provide enough energy for some lighting and other appliances in your house (around 400 watts). Personal wind turbines can be installed on top of a roof.</p>
            </div>
          )}

          {visibleContent === 'diy' && (
            <div className="details">
              <p>You can build DIY wind turbines, which can be explained on websites like <a href="https://www.wikihow.com">WikiHow</a>.</p>
            </div>
          )}

          {visibleContent === 'energy' && (
            <div className="details">
              <p>Kilowatt-hours per year = 8,760 hours in the year x power rating (kW) x capacity factor (%). Given the average capacity factor for small wind turbines, a 10 kW turbine will produce roughly 14,892 kWh per year. One megawatt can power approximately 1,000 homes for a month.</p>
            </div>
          )}

          {visibleContent === 'cost' && (
            <div className="details">
              <p>Small wind turbines for residential use can cost less than $1000, though effectiveness varies greatly based on location and wind conditions. Wind turbines can also sell electricity back on the power grid which can generate revenue. Small wind turbines, also known as home wind turbines, cost between $3,000 to $5,000 per kilowatt of power capacity. Installation costs can vary based on system size, tower height, and equipment. Homeowners typically install between 5 to 15 kW, resulting in total costs between $15,000 and $75,000, excluding federal or state incentives.</p>
            </div>
          )}

          {visibleContent === 'factors' && (
            <div className="details">
              <p>Distance is also important. The further away the turbine is from your home, the less energy you will get. Several factors can cause the operation and maintenance to be high such as insurance, land rent, and sometimes even replacing spare parts. However, most wind turbines result in more savings than money invested each year.</p>
            </div>
          )}

          {visibleContent === 'types' && (
            <div className="details">
              <p>Typically, homeowners install turbines between 5 to 15 kW. These turbines are much smaller than those on wind farms, with blades up to 10 meters in diameter, and are ideal for residential, portable, or off-grid applications. They perform best in locations with frequent, high wind speeds, usually rural areas with few obstructions. In optimal conditions, a small wind turbine can potentially offset 100 percent of a home's electricity bill.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WindTurbineButtons;